import { NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME } from "@/lib/auth/token";

export async function POST() {
  const response = NextResponse.json(
    { success: true, message: "Logged out successfully" },
    { status: 200 }
  );

  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: "",
    path: "/",
    expires: new Date(0),
    sameSite: "lax",
  });

  return response;
}
