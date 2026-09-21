import React from "react";

interface StatsDisclaimerProps {
  /** Date string, e.g. "September 2026" */
  updatedDate: string;
}

/**
 * Displays a disclaimer for statistical claims
 * (visa success rate, students placed, scholarships secured, etc.)
 *
 * @see Seo.md §20 — Location-page SEO / E-E-A-T fix
 */
export function StatsDisclaimer({ updatedDate }: StatsDisclaimerProps) {
  return (
    <p className="text-xs text-content-tertiary mt-3">
      Statistics based on HighEd internal records, updated {updatedDate}.
    </p>
  );
}

export default StatsDisclaimer;
