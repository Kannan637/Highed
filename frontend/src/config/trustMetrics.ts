/**
 * Single source of truth for all trust metrics and claims displayed across HighEd.
 *
 * SAFETY & ACCURACY RULE (improve.md Phase 22):
 * If a metric cannot be audited and verified, it is marked verified: false
 * and value: null. Public-facing components should render verified metrics or
 * fall back to neutral qualitative copy.
 */

export interface StatMetric {
  value: string | null;
  label: string;
  verified: boolean;
  description?: string;
  source?: string;
}

export const siteStats: Record<string, StatMetric> = {
  studentsCounselled: {
    value: null,
    label: "Students Guided",
    verified: false,
    description: "Students counselled across Tamil Nadu for international admissions",
  },
  universityPartners: {
    value: null,
    label: "Partner Universities",
    verified: false,
    description: "Accredited higher education institutions represented",
  },
  visaSuccessRate: {
    value: null,
    label: "Visa Guidance Track Record",
    verified: false,
    description: "Visa interview prep & documentation assistance",
  },
  scholarshipsSecured: {
    value: null,
    label: "Scholarships Assisted",
    verified: false,
    description: "Merit and need-based tuition fee waivers secured",
  },
  destinationsCovered: {
    value: "7",
    label: "Primary Destinations",
    verified: true,
    description: "USA, UK, Canada, Australia, Germany, Ireland, and Dubai",
  },
  counsellingFee: {
    value: "₹0",
    label: "Admissions Counselling",
    verified: true,
    description: "100% free guidance for university admissions",
  },
};

/**
 * Backward-compatible helper for legacy components.
 */
export const trustMetrics = {
  students: siteStats.studentsCounselled,
  universities: siteStats.universityPartners,
  visaSuccess: siteStats.visaSuccessRate,
  scholarships: siteStats.scholarshipsSecured,
  countries: siteStats.destinationsCovered,
  lastUpdated: "October 2026",
};

export function getLocationMetrics(_slug: string) {
  return {
    students: siteStats.studentsCounselled,
    visaSuccess: siteStats.visaSuccessRate,
    scholarships: siteStats.scholarshipsSecured,
    universities: siteStats.universityPartners,
    destinations: siteStats.destinationsCovered,
    lastUpdated: "October 2026",
  };
}

