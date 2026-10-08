/**
 * HighEd Admin Authentication Token & Session Utilities
 * Edge-compatible (crypto / base64) token validation
 */

const ADMIN_COOKIE_NAME = "highed_admin_token";
const SECRET_SALT = process.env.AUTH_SECRET || "highed-super-secret-admin-session-salt-2026";

export interface AdminSessionUser {
  id: string;
  name: string;
  email: string;
  role: "super_admin" | "admin" | "counselor";
  exp: number; // Unix timestamp in seconds
}

/**
 * Creates a tamper-evident session token
 */
export function createAdminToken(user: Omit<AdminSessionUser, "exp">, expiresInSeconds = 7 * 24 * 60 * 60): string {
  const exp = Math.floor(Date.now() / 1000) + expiresInSeconds;
  const payload: AdminSessionUser = {
    ...user,
    exp,
  };

  const payloadStr = JSON.stringify(payload);
  const encodedPayload = Buffer.from(payloadStr, "utf8").toString("base64url");

  // Deterministic signature
  const signature = createSimpleSignature(encodedPayload, SECRET_SALT);
  return `${encodedPayload}.${signature}`;
}

/**
 * Verifies an admin session token
 */
export function verifyAdminToken(token: string | null | undefined): AdminSessionUser | null {
  if (!token || typeof token !== "string") return null;

  const parts = token.split(".");
  if (parts.length !== 2) return null;

  const [encodedPayload, signature] = parts;
  const expectedSignature = createSimpleSignature(encodedPayload, SECRET_SALT);

  if (signature !== expectedSignature) {
    return null;
  }

  try {
    const payloadStr = Buffer.from(encodedPayload, "base64url").toString("utf8");
    const payload = JSON.parse(payloadStr) as AdminSessionUser;

    const now = Math.floor(Date.now() / 1000);
    if (payload.exp && payload.exp < now) {
      return null; // Expired
    }

    return payload;
  } catch {
    return null;
  }
}

/**
 * Lightweight hash / signature for edge runtime compatibility
 */
function createSimpleSignature(data: string, secret: string): string {
  let hash = 0;
  const combined = `${data}:${secret}`;
  for (let i = 0; i < combined.length; i++) {
    const char = combined.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36);
}

export { ADMIN_COOKIE_NAME };
