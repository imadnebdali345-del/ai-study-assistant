import { Webhook } from "svix";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type ClerkWebhookEvent = {
  type: string;
  data: {
    id: string;
    first_name?: string | null;
    last_name?: string | null;
    email_addresses?: {
      id: string;
      email_address: string;
    }[];
    primary_email_address_id?: string | null;
  };
};

export async function POST(req: Request) {
  const secret = process.env.CLERK_WEBHOOK_SECRET;

  if (!secret) {
    return NextResponse.json(
      { error: "Missing webhook secret" },
      { status: 500 }
    );
  }

  const headerList = await headers();

  const svixId = headerList.get("svix-id");
  const svixTimestamp = headerList.get("svix-timestamp");
  const svixSignature = headerList.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return NextResponse.json(
      { error: "Missing webhook headers" },
      { status: 400 }
    );
  }

  const body = await req.text();
  const webhook = new Webhook(secret);

  let event: ClerkWebhookEvent;

  

try {
  const verifiedEvent: unknown = webhook.verify(body, {
    "svix-id": svixId,
    "svix-timestamp": svixTimestamp,
    "svix-signature": svixSignature,
  });

  if (
    typeof verifiedEvent !== "object" ||
    verifiedEvent === null ||
    !("type" in verifiedEvent) ||
    !("data" in verifiedEvent)
  ) {
    throw new Error("Invalid webhook event");
  }

  event = verifiedEvent as ClerkWebhookEvent;
} catch (error) {
  console.error("Webhook verification error:", error);

  return NextResponse.json(
    { error: "Invalid webhook signature or event" },
    { status: 400 }
  );
}

  const user = event.data;

  try {
    if (
      event.type === "user.created" ||
      event.type === "user.updated"
    ) {
      const primaryEmail = user.email_addresses?.find(
        (item) => item.id === user.primary_email_address_id
      );

      const email =
        primaryEmail?.email_address ??
        user.email_addresses?.[0]?.email_address;

      if (!email) {
        return NextResponse.json(
          { error: "User has no email address" },
          { status: 400 }
        );
      }

      const name =
        [user.first_name, user.last_name]
          .filter(Boolean)
          .join(" ") || email;

      await prisma.user.upsert({
        where: { email },
        update: {
          name,
        },
        create: {
          id: user.id,
          name,
          email,
        },
      });
    }

    if (event.type === "user.deleted") {
      await prisma.user.deleteMany({
        where: { id: user.id },
      });
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Clerk webhook database error:", error);

    return NextResponse.json(
      { error: "Failed to sync user" },
      { status: 500 }
    );
  }
}