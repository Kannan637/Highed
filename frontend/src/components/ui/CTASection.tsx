"use client";

import React from "react";
import { cn } from "@/lib/utils";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import EyebrowBadge from "@/components/ui/EyebrowBadge";

export interface CTASectionProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaSource?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  badge,
  title,
  subtitle,
  ctaLabel = "Book Free Counselling",
  ctaSource = "cta_section",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-5 rounded-[var(--radius-card)] bg-[linear-gradient(135deg,var(--brand-primary),#142456)] px-8 py-14 text-center text-content-inverse sm:px-16",
        className
      )}
      {...props}
    >
      {badge && (
        <EyebrowBadge className="mb-0">
          {badge}
        </EyebrowBadge>
      )}
      <h2 className="text-white">{title}</h2>
      {subtitle && (
        <p className="max-w-xl text-body text-white/85">{subtitle}</p>
      )}
      <LeadCTAButton
        source={ctaSource}
      >
        {ctaLabel}
      </LeadCTAButton>
    </div>
  );
};

export default CTASection;
