import React from "react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export interface IconBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  variant?: "primary" | "accent" | "success" | "gold" | "neutral";
  size?: "sm" | "md" | "lg";
  customBg?: string;
  customColor?: string;
}

export const IconBox = React.forwardRef<HTMLDivElement, IconBoxProps>(
  (
    {
      className,
      icon: Icon,
      variant = "primary",
      size = "md",
      customBg,
      customColor,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      primary: "bg-icon-bg-primary text-brand-primary",
      accent: "bg-icon-bg-accent text-brand-accent",
      success: "bg-icon-bg-success text-[#1E7B47]",
      gold: "bg-icon-bg-gold text-[#B38728]",
      neutral: "bg-surface-subtle text-content-secondary",
    };

    const sizeStyles = {
      sm: "h-9 w-9 rounded-xl",
      md: "h-12 w-12 rounded-2xl",
      lg: "h-14 w-14 rounded-2xl",
    };

    const iconSizes = {
      sm: 18,
      md: 22,
      lg: 26,
    };

    const useCustom = customBg || customColor;

    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center justify-center",
          sizeStyles[size],
          !useCustom && variantStyles[variant],
          className
        )}
        style={
          useCustom
            ? {
                backgroundColor: customBg,
                color: customColor,
              }
            : undefined
        }
        {...props}
      >
        <Icon size={iconSizes[size]} />
      </div>
    );
  }
);

IconBox.displayName = "IconBox";
export default IconBox;
