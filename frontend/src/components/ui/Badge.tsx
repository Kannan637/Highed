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
    primary: "bg-icon-bg-primary text-brand-primary border-brand-primary/20",
    accent: "bg-icon-bg-accent text-brand-accent border-brand-accent/20",
    success: "bg-icon-bg-success text-[#1E7B47] border-[#1E7B47]/20",
    gold: "bg-icon-bg-gold text-[#A67C00] border-[#A67C00]/20",
    gray: "bg-surface-subtle text-content-secondary border-border-default",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-body text-caption font-medium tracking-[-0.02em] border",
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
