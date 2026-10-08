import { NextRequest, NextResponse } from "next/server";
import { createAdminToken, ADMIN_COOKIE_NAME } from "@/lib/auth/token";

const VALID_ADMIN_EMAIL = (process.env.ADMIN_EMAIL || "admin@highed.in").toLowerCase();
const VALID_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Malformed request payload" },
        { status: 400 }
      );
    }

    const { email, password } = body;
    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required" },
        { status: 400 }
      );
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const normalizedPassword = String(password).trim();

    // Verify credentials
    if (normalizedEmail !== VALID_ADMIN_EMAIL || normalizedPassword !== VALID_ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const user = {
      id: "usr-admin-01",
      name: "HighEd Administrator",
      email: normalizedEmail,
      role: "super_admin" as const,
      avatar: undefined,
    };

    const token = createAdminToken({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });

    const isSecure = process.env.NODE_ENV === "production";
    const response = NextResponse.json(
      {
        success: true,
        data: {
          token,
          user: {
            ...user,
            createdAt: "2026-01-01T00:00:00.000Z",
          },
        },
      },
      { status: 200 }
    );

    // Set cookie on response
    response.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: token,
      httpOnly: false, // Allow client JS auth sync while middleware enforces server-side
      secure: isSecure,
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal authentication error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
