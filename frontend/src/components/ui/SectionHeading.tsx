import React from "react";
import { cn } from "@/lib/utils";
import EyebrowBadge from "@/components/ui/EyebrowBadge";

export interface SectionHeadingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  badge?: string;
  eyebrow?: string;
  title: React.ReactNode;
  accentText?: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  eyebrow,
  title,
  accentText,
  subtitle,
  description,
  align = "center",
  className,
  ...props
}) => {
  const badgeText = eyebrow || badge;
  const descriptionText = subtitle || description;

  /* Split title around accentText to render the accent span matching AboutUs style */
  const renderTitle = () => {
    if (typeof title !== "string") return title;

    let target = accentText;
    if (!target) {
      const candidates = ["Study Abroad", "HighEd", "Scholarships", "Real Success"];
      for (const c of candidates) {
        if (title.toLowerCase().includes(c.toLowerCase())) {
          target = c;
          break;
        }
      }
    }

    if (!target) return title;

    const lowerTitle = title.toLowerCase();
    const lowerTarget = target.toLowerCase();
    const index = lowerTitle.indexOf(lowerTarget);
    if (index === -1) return title;

    const before = title.slice(0, index);
    const matched = title.slice(index, index + target.length);
    const after = title.slice(index + target.length);

    return (
      <>
        {before}
        <span className="text-brand-accent">{matched}</span>
        {after}
      </>
    );
  };

  return (
    <div
      className={cn(
        "mb-10 sm:mb-12 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
      {...props}
    >
      {badgeText && (
        <div className="mb-4 sm:mb-5">
          <EyebrowBadge>{badgeText}</EyebrowBadge>
        </div>
      )}
      <h2 className="text-brand-primary">
        {renderTitle()}
      </h2>
      {descriptionText && (
        <p className="mt-3.5 sm:mt-4 text-body-large text-content-secondary">
          {descriptionText}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

