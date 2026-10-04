import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Shared card surface for the resource hub: white, thin border, large radius, no heavy shadow. */
export const resourceCardClass =
  "group relative flex flex-col rounded-[24px] border border-[#E6E7EF] bg-white p-6 transition-colors duration-200 hover:border-brand-primary/30 focus-within:border-brand-primary/40 sm:p-8";

export const ResourceLabel = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={cn(
      "text-[12px] font-semibold uppercase tracking-[0.08em] text-brand-accent",
      className
    )}
  >
    {children}
  </span>
);

export const ArrowLink = ({
  href,
  children,
  className,
  stretched = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Makes the whole parent card clickable (parent must be `relative`). */
  stretched?: boolean;
}) => (
  <Link
    href={href}
    className={cn(
      "inline-flex min-h-11 items-center gap-1.5 text-[15px] font-semibold text-brand-primary transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-md",
      stretched && "after:absolute after:inset-0 after:rounded-[24px] after:content-['']",
      className
    )}
  >
    {children}
    <ArrowRight
      size={16}
      aria-hidden="true"
      className="transition-transform duration-200 group-hover:translate-x-1"
    />
  </Link>
);

export const ResourceSectionHeader = ({
  id,
  eyebrow,
  title,
  description,
  as: Heading = "h2",
  className,
  align = "left",
  inverse = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h2" | "h3";
  className?: string;
  align?: "left" | "center";
  inverse?: boolean;
}) => (
  <div
    className={cn(
      "mb-10 max-w-2xl sm:mb-12",
      align === "center" && "mx-auto text-center",
      className
    )}
  >
    {eyebrow && <ResourceLabel className="mb-3 block">{eyebrow}</ResourceLabel>}
    <Heading
      id={id}
      className={cn(
        "text-[30px] leading-[1.1] sm:text-[36px] lg:text-[44px]",
        inverse ? "text-white" : "text-brand-primary"
      )}
    >
      {title}
    </Heading>
    {description && (
      <p
        className={cn(
          "mt-4 text-[16px] leading-relaxed sm:text-[18px]",
          inverse ? "text-white/75" : "text-content-secondary"
        )}
      >
        {description}
      </p>
    )}
  </div>
);
