import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;

    return NextResponse.json({
      success: true,
    });
  } catch {
    console.error("Database health check failed");

    return NextResponse.json(
      {
        success: false,
      },
      { status: 503 }
    );
  }
}