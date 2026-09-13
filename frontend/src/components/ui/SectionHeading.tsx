import React from "react";
import { cn } from "@/lib/utils";

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
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#253A7B]/20 bg-[#EEF1FA] px-3.5 py-1 font-dmsans text-[13px] font-semibold tracking-[-0.02em] text-[#253A7B]">
            {badge}
          </span>
        </div>
      )}
      <h2 className="font-hedvig text-3xl font-bold tracking-tight text-[#121314] sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 font-dmsans text-base text-gray-600 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
