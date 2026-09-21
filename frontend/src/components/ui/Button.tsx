import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "outline" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth = false, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-body font-medium text-btn rounded-[var(--radius-btn)] transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2";

    const variantStyles = {
      primary: "bg-brand-primary text-content-inverse hover:bg-brand-primary-hover shadow-sm",
      accent: "bg-brand-accent text-content-inverse hover:bg-brand-accent-hover shadow-sm",
      outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-content-inverse",
      secondary: "bg-surface-subtle text-brand-primary hover:bg-gray-200",
      ghost: "text-foreground hover:bg-gray-100 hover:text-brand-primary",
    };

    const sizeStyles = {
      sm: "h-9 px-4 text-body-small gap-1.5",
      md: "h-11 px-6 text-btn gap-2",
      lg: "h-13 px-8 text-btn gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
