import React from "react";
import { cn } from "@/lib/utils";
import Badge from "@/components/ui/Badge";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
      {...props}
    >
      {badge && (
        <div className="mb-3 inline-block">
          <Badge variant="primary">{badge}</Badge>
        </div>
      )}
      <h2 className="text-h2 text-content-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-body-large text-content-secondary">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

