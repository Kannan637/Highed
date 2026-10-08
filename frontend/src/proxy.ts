import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/config/site.config";
import { verifyAdminToken, ADMIN_COOKIE_NAME } from "@/lib/auth/token";

const PRIMARY_HOST = process.env.PRIMARY_HOST || new URL(siteConfig.url).hostname;
const REDIRECT_HOSTS = new Set([`www.${PRIMARY_HOST}`]);

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

  // 3. Uppercase path normalization (force lowercase for website routes)
  if (
    !pathname.startsWith("/_next") &&
    !pathname.startsWith("/api") &&
    !pathname.startsWith("/admin") &&
    !pathname.match(/\.[a-zA-Z0-9]+$/) &&
    pathname !== pathname.toLowerCase()
  ) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 301);
  }

  // 4. Admin Authentication Guard & Edge Enforcement
  const isExactAdmin = pathname === "/admin";
  const isAdminRoute = pathname.startsWith("/admin/") || isExactAdmin;
  const isAdminApiRoute = pathname.startsWith("/api/admin");

  if (isAdminRoute || isAdminApiRoute) {
    // Extract token from cookie or Authorization header
    const cookieToken = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
    const authHeader = request.headers.get("Authorization");
    const bearerToken = authHeader?.startsWith("Bearer ")
      ? authHeader.slice(7).trim()
      : null;
    const token = cookieToken || bearerToken;
    const session = verifyAdminToken(token);

    // Case A: User is on /admin/login
    if (pathname === "/admin/login") {
      // If already logged in with valid token, redirect to /admin dashboard or target
      if (session) {
        const target = request.nextUrl.searchParams.get("redirect") || "/admin";
        const redirectUrl = new URL(target, request.url);
        return NextResponse.redirect(redirectUrl, 307);
      }
      // Otherwise allow login page to render
      return addSecurityHeaders(NextResponse.next());
    }

    // Case B: Public admin API endpoint (login)
    if (pathname === "/api/admin/auth/login") {
      return addSecurityHeaders(NextResponse.next());
    }

    // Case C: Protected Admin API routes
    if (isAdminApiRoute) {
      if (!session) {
        return NextResponse.json(
          {
            success: false,
            error: "Unauthorized: Valid admin session token required.",
          },
          {
            status: 401,
            headers: {
              "WWW-Authenticate": 'Bearer realm="HighEd Admin API"',
            },
          }
        );
      }
      return addSecurityHeaders(NextResponse.next());
    }

    // Case D: Protected Admin Dashboard Web Pages (/admin/*)
    if (isAdminRoute) {
      if (!session) {
        const loginUrl = new URL("/admin/login", request.url);
        loginUrl.searchParams.set("redirect", pathname + search);
        return NextResponse.redirect(loginUrl, 307);
      }
      return addSecurityHeaders(NextResponse.next(), true);
    }
  }

  return addSecurityHeaders(NextResponse.next());
}

// Export as both proxy and middleware for full Next.js compatibility
export { proxy as middleware };

function addSecurityHeaders(response: NextResponse, isAdmin = false) {
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set(
    "X-Frame-Options",
    isAdmin ? "DENY" : "SAMEORIGIN"
  );
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - static assets (.svg, .png, .jpg, .jpeg, .gif, .webp, .avif)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif)$).*)",
  ],
};
