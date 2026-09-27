import React from "react";
import { cn } from "@/lib/utils";

export interface EyebrowBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const EyebrowBadge: React.FC<EyebrowBadgeProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "mb-5 inline-flex h-8 items-center gap-2 rounded-full bg-brand-accent px-4 shadow-xs",
        className
      )}
      {...props}
    >
      <span className="h-2 w-2 rounded-full bg-white" />
      <span className="font-dm-sans text-sm font-semibold text-white">
        {children}
      </span>
    </div>
  );
};

export default EyebrowBadge;
