import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-body font-medium tracking-[-0.02em] border w-fit shrink-0 whitespace-nowrap transition-all",
  {
    variants: {
      variant: {
        default: "bg-icon-bg-primary text-brand-primary border-brand-primary/20",
        primary: "bg-icon-bg-primary text-brand-primary border-brand-primary/20",
        brand: "bg-icon-bg-primary text-brand-primary border-brand-primary/20",
        accent: "bg-icon-bg-accent text-brand-accent border-brand-accent/20",
        success: "bg-icon-bg-success text-[#1E7B47] border-[#1E7B47]/20",
        gold: "bg-icon-bg-gold text-[#A67C00] border-[#A67C00]/20",
        warning: "bg-icon-bg-gold text-[#A67C00] border-[#A67C00]/20",
        gray: "bg-surface-subtle text-content-secondary border-black/10",
        neutral: "bg-surface-subtle text-content-secondary border-black/10",
        secondary: "bg-surface-subtle text-brand-primary border-transparent",
        destructive: "bg-destructive/10 text-destructive border-transparent",
        error: "bg-destructive/10 text-destructive border-transparent",
        inverse: "bg-white/10 text-white border-white/20 backdrop-blur-md",
        outline: "border-black/10 bg-transparent text-content-primary",
        ghost: "hover:bg-muted hover:text-muted-foreground border-transparent",
        link: "text-primary underline-offset-4 hover:underline border-transparent",
      },
      size: {
        default: "px-3 py-1 text-caption",
        sm: "px-2.5 py-0.5 text-[11px]",
        lg: "px-3.5 py-1.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}) => {
  return (
    <span
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </span>
  );
};

export { badgeVariants };
export default Badge;
