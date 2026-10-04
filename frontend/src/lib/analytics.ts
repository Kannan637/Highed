/**
 * Lightweight analytics dispatcher. Pushes to window.dataLayer (GTM) when present;
 * otherwise a no-op. Never pass personal data (names, phone, email, exact scores tied to identity).
 */
export type ToolEventName =
  | "calculator_started"
  | "calculator_completed"
  | "cost_calculated"
  | "emi_calculated"
  | "eligibility_checked"
  | "scholarship_search"
  | "scholarship_clicked"
  | "test_score_evaluated"
  | "calculator_cta_clicked"
  | "calculator_reset";

type Primitive = string | number | boolean | undefined;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(event: ToolEventName, params: Record<string, Primitive> = {}): void {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
    if (process.env.NODE_ENV === "development") console.debug("[analytics]", event, params);
  } catch (err) {
    console.error("[analytics] failed to track", event, err);
  }
}
