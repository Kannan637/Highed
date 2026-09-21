import { NextRequest, NextResponse } from "next/server";

const PRIMARY_HOST = process.env.PRIMARY_HOST || "highed.in";

const REDIRECT_HOSTS = new Set([
  "highed-rho.vercel.app",
  `www.${PRIMARY_HOST}`,
]);

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0];

  if (!host || !REDIRECT_HOSTS.has(host)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.host = PRIMARY_HOST;

  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: "/:path*",
};
