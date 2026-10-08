import { NextRequest, NextResponse } from "next/server";
import { domainLeadService, LeadEntity } from "@/domain/leads";
import { verifyAdminToken, ADMIN_COOKIE_NAME } from "@/lib/auth/token";

export async function GET(req: NextRequest) {
  const cookieToken = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
  const authHeader = req.headers.get("Authorization");
  const bearerToken = authHeader?.startsWith("Bearer ")
    ? authHeader.slice(7).trim()
    : null;
  const token = cookieToken || bearerToken;

  const session = verifyAdminToken(token);
  if (!session) {
    return NextResponse.json(
      { success: false, error: "Unauthorized: Admin session required." },
      { status: 401 }
    );
  }

  try {
    const limit = Number(req.nextUrl.searchParams.get("limit") || "50");
    const leads = await domainLeadService.getRecentLeads(limit);

    // Map domain leads to admin UI model
    const mapped = leads.map((l: LeadEntity) => ({
      id: l.id,
      fullName: (l.data as Record<string, unknown>)?.fullName || "Prospective Student",
      phone: (l.data as Record<string, unknown>)?.phone || "—",
      email: (l.data as Record<string, unknown>)?.email || "—",
      destinationCountry: (l.data as Record<string, unknown>)?.destinationCountry || "General Inquiry",
      status: l.status || "new",
      createdAt: l.createdAt,
      source: l.metadata?.referer || l.metadata?.userAgent || "web-popup",
    }));

    return NextResponse.json(
      {
        success: true,
        data: {
          items: mapped,
          total: mapped.length,
          page: 1,
          pageSize: limit,
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to retrieve leads";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
