import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  eyebrow,
  title,
  subtitle,
  description,
  align = "center",
  className,
  ...props
}) => {
  const badgeText = eyebrow || badge;
  const descriptionText = subtitle || description;

  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
      {...props}
    >
      {badgeText && (
        <div className="mb-3 inline-block">
          <Badge variant="primary">{badgeText}</Badge>
        </div>
      )}
      <h2 className="text-h2 text-content-primary">
        {title}
      </h2>
      {descriptionText && (
        <p className="mt-3.5 text-body-large text-content-secondary">
          {descriptionText}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

