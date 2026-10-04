import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/config/site.config";

const PRIMARY_HOST = process.env.PRIMARY_HOST || new URL(siteConfig.url).hostname;

const REDIRECT_HOSTS = new Set([
  `www.${PRIMARY_HOST}`,
]);

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const host = request.headers.get("host")?.split(":")[0];

  // 1. Host canonicalization (www -> non-www)
  if (host && REDIRECT_HOSTS.has(host)) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = PRIMARY_HOST;
    return NextResponse.redirect(url, 301);
  }

  // 2. Trailing slash normalization (remove trailing slash except for root '/')
  if (pathname !== "/" && pathname.endsWith("/")) {
    const cleanPath = pathname.slice(0, -1);
    const url = request.nextUrl.clone();
    url.pathname = cleanPath;
    return NextResponse.redirect(url, 301);
  }

  // 3. Uppercase path normalization (force lowercase for website routes, excluding static files)
  if (
    !pathname.startsWith("/_next") &&
    !pathname.startsWith("/api") &&
    !pathname.match(/\.[a-zA-Z0-9]+$/) &&
    pathname !== pathname.toLowerCase()
  ) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - static assets (.svg, .png, .jpg, .jpeg, .gif, .webp, .avif)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif)$).*)",
  ],
};
