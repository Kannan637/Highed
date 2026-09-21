/**
 * Single source of truth for all trust metrics displayed across the site.
 *
 * IMPORTANT: These numbers are currently unverified claims from the live site.
 * Update them only with auditable, internally verified data.
 *
 * @see Seo.md §20 — Location-page SEO / E-E-A-T fix
 */

/** Global (company-wide) trust metrics — used on homepage, about page, etc. */
export const trustMetrics = {
  students: {
    value: "1,000+",
    label: "Students Guided",
  },
  universities: {
    value: "200+",
    label: "Partner Universities",
  },
  visaSuccess: {
    value: "95%+",
    label: "Visa Success Rate",
  },
  scholarships: {
    value: "₹18 Cr+",
    label: "Scholarships Secured",
  },
  countries: {
    value: "50+",
    label: "Countries Covered",
  },
  /** Date these numbers were last internally reviewed */
  lastUpdated: "September 2026",
};

/**
 * Location-specific metrics — override global metrics
 * only where separately verified data exists.
 *
 * Each location can have its own verified figures.
 * If a metric is not listed here, fall back to `trustMetrics`.
 */
export const locationMetrics: Record<
  string,
  {
    students?: { value: string; label: string };
    visaSuccess?: { value: string; label: string };
    scholarships?: { value: string; label: string };
    universities?: { value: string; label: string };
  }
> = {
  chennai: {
    students: { value: "1,250+", label: "Chennai Students Placed" },
    visaSuccess: { value: "98.8%", label: "Visa Approval Rate" },
    scholarships: { value: "₹18 Cr+", label: "Scholarships Secured" },
    universities: { value: "850+", label: "Partner Universities" },
  },
  coimbatore: {
    students: { value: "780+", label: "Coimbatore Students Placed" },
  },
  tirupathi: {
    students: { value: "620+", label: "Tirupathi Students Placed" },
    visaSuccess: { value: "98.5%", label: "Visa Success Rate" },
    scholarships: { value: "₹8.5 Cr+", label: "Scholarships Secured" },
    universities: { value: "240+", label: "Global Partner Admits" },
  },
  vellore: {
    students: { value: "950+", label: "Vellore & VIT Admits" },
    visaSuccess: { value: "99.4%", label: "Visa Approval Rate" },
    scholarships: { value: "₹14 Cr+", label: "Scholarships Secured" },
    universities: { value: "180+", label: "Top 100 Global Admits" },
  },
  thiruvallur: {
    students: { value: "320+", label: "Thiruvallur Students Guided" },
  },
};

/**
 * Helper: get resolved metrics for a specific location.
 * Falls back to global trustMetrics for any metric not overridden.
 */
export function getLocationMetrics(slug: string) {
  const overrides = locationMetrics[slug] || {};
  return {
    students: overrides.students || trustMetrics.students,
    visaSuccess: overrides.visaSuccess || trustMetrics.visaSuccess,
    scholarships: overrides.scholarships || trustMetrics.scholarships,
    universities: overrides.universities || trustMetrics.universities,
    lastUpdated: trustMetrics.lastUpdated,
  };
}
