import React from "react";

interface ContentReviewedProps {
  /** Date string, e.g. "September 2026" */
  date: string;
  /** Optional source URL for official citation */
  sourceUrl?: string;
  /** Optional source label */
  sourceLabel?: string;
}

/**
 * Displays a "Last reviewed" notice for time-sensitive content
 * (visa rules, immigration policies, tuition fees, etc.)
 *
 * @see Seo.md §21 — Content freshness
 */
export function ContentReviewed({
  date,
  sourceUrl,
  sourceLabel,
}: ContentReviewedProps) {
  return (
    <p className="text-sm text-content-tertiary mt-4">
      Last reviewed: {date}
      {sourceUrl && sourceLabel && (
        <>
          {" · "}
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-brand-primary transition-colors"
          >
            {sourceLabel}
          </a>
        </>
      )}
    </p>
  );
}

export default ContentReviewed;
