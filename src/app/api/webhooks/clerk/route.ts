import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Webhook } from "svix";

type ClerkEmailAddress = {
  id: string;
  email_address: string;
};

type ClerkUserPayload = {
  id: string;
  first_name?: string | null;
  last_name?: string | null;
  email_addresses?: ClerkEmailAddress[];
  primary_email_address_id?: string | null;
};

type ClerkWebhookEvent = {
  type: string;
  data: unknown;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isOptionalString(value: unknown): value is string | null | undefined {
  return value === undefined || value === null || typeof value === "string";
}

function isClerkUserPayload(value: unknown): value is ClerkUserPayload {
  if (
    !isRecord(value) ||
    typeof value.id !== "string" ||
    !value.id.trim() ||
    !isOptionalString(value.first_name) ||
    !isOptionalString(value.last_name) ||
    !isOptionalString(value.primary_email_address_id) ||
    (typeof value.primary_email_address_id === "string" &&
      !value.primary_email_address_id.trim())
  ) {
    return false;
  }

  if (value.email_addresses === undefined) {
    return true;
  }

  return (
    Array.isArray(value.email_addresses) &&
    value.email_addresses.every(
      (address) =>
        isRecord(address) &&
        typeof address.id === "string" &&
        typeof address.email_address === "string" &&
        address.id.trim().length > 0 &&
        address.email_address.trim().length > 0
    )
  );
}

function isClerkWebhookEvent(value: unknown): value is ClerkWebhookEvent {
  return (
    isRecord(value) &&
    typeof value.type === "string" &&
    value.type.trim().length > 0 &&
    "data" in value
  );
}

function isUniqueConstraintError(error: unknown): boolean {
  return isRecord(error) && error.code === "P2002";
}

export async function POST(req: Request) {
  const secret = process.env.CLERK_WEBHOOK_SECRET;

  if (!secret) {
    return NextResponse.json(
      { error: "Webhook is not configured" },
      { status: 500 }
    );
  }

  const svixId = req.headers.get("svix-id");
  const svixTimestamp = req.headers.get("svix-timestamp");
  const svixSignature = req.headers.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return NextResponse.json(
      { error: "Missing webhook headers" },
      { status: 400 }
    );
  }

  const body = await req.text();
  let verifiedEvent: unknown;

  try {
    new Webhook(secret).verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    });
  } catch {
    console.warn("Clerk webhook signature verification failed");
    return NextResponse.json(
      { error: "Invalid webhook signature" },
      { status: 400 }
    );
  }

  try {
    verifiedEvent = JSON.parse(body);
  } catch {
    return NextResponse.json(
      { error: "Invalid webhook JSON" },
      { status: 400 }
    );
  }

  if (!isClerkWebhookEvent(verifiedEvent)) {
    return NextResponse.json(
      { error: "Invalid webhook event" },
      { status: 400 }
    );
  }

  if (
    verifiedEvent.type !== "user.created" &&
    verifiedEvent.type !== "user.updated" &&
    verifiedEvent.type !== "user.deleted"
  ) {
    return NextResponse.json({ received: true });
  }

  if (!isClerkUserPayload(verifiedEvent.data)) {
    return NextResponse.json(
      { error: "Invalid user payload" },
      { status: 400 }
    );
  }

  const user = verifiedEvent.data;

  try {
    if (verifiedEvent.type === "user.deleted") {
      await prisma.user.deleteMany({
        where: { id: user.id },
      });
      return NextResponse.json({ received: true });
    }

    const addresses = user.email_addresses;
    const primaryEmail = user.primary_email_address_id
      ? addresses?.find(
          (address) => address.id === user.primary_email_address_id
        )
      : addresses?.[0];

    if (user.primary_email_address_id && !primaryEmail) {
      return NextResponse.json(
        { error: "Primary email address is missing from the payload" },
        { status: 400 }
      );
    }

    const email = primaryEmail?.email_address.trim();

    const name =
      [user.first_name, user.last_name]
        .map((part) => part?.trim())
        .filter((part): part is string => Boolean(part))
        .join(" ") || null;

    if (!email) {
      if (verifiedEvent.type === "user.created") {
        return NextResponse.json(
          { error: "A non-empty email address is required to create a user" },
          { status: 422 }
        );
      }

      const { count } = await prisma.user.updateMany({
        where: { id: user.id },
        data: { name },
      });

      if (count === 0) {
        return NextResponse.json(
          { error: "Cannot update user without an existing record and email" },
          { status: 422 }
        );
      }
    } else {
      await prisma.user.upsert({
        where: { id: user.id },
        update: { name, email },
        create: {
          id: user.id,
          name,
          email,
        },
      });
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    if (isUniqueConstraintError(error)) {
      return NextResponse.json(
        { error: "User email conflicts with an existing record" },
        { status: 409 }
      );
    }

    console.error("Clerk webhook user sync failed", {
      eventType: verifiedEvent.type,
    });
    return NextResponse.json(
      { error: "Failed to sync user" },
      { status: 500 }
    );
  }
}
