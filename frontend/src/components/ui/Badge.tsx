import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "accent" | "success" | "gold" | "gray";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "primary",
  children,
  ...props
}) => {
  const variantStyles = {
    primary: "bg-[#EEF1FA] text-[#253A7B] border-[#253A7B]/20",
    accent: "bg-[#FDF0F3] text-[#E93F61] border-[#E93F61]/20",
    success: "bg-[#EBF5EE] text-[#1E7B47] border-[#1E7B47]/20",
    gold: "bg-[#FFF9E6] text-[#A67C00] border-[#A67C00]/20",
    gray: "bg-[#F5F6FA] text-[#6B7280] border-gray-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold tracking-[-0.02em] border",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
