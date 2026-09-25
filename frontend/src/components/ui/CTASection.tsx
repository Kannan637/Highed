"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { Badge } from "@/components/ui/Badge";

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
        <Badge variant="inverse" size="default">
          {badge}
        </Badge>
      )}
      <h2 className="text-h3 text-white">{title}</h2>
      {subtitle && (
        <p className="max-w-xl text-body text-white/85">{subtitle}</p>
      )}
      <LeadCTAButton
        source={ctaSource}
        variant="accent"
        size="lg"
      >
        <span>{ctaLabel}</span>
        <ArrowRight size={18} aria-hidden="true" />
      </LeadCTAButton>
    </div>
  );
};

export default CTASection;
