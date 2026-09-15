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
      "inline-flex items-center justify-center font-body font-semibold rounded-full transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variantStyles = {
      primary: "bg-[#253A7B] text-white hover:bg-[#1b2b5d] shadow-sm",
      accent: "bg-[#E93F61] text-white hover:bg-[#d93657] shadow-sm",
      outline: "border-2 border-[#253A7B] text-[#253A7B] hover:bg-[#253A7B] hover:text-white",
      secondary: "bg-[#F3F5FA] text-[#253A7B] hover:bg-[#e4e8f5]",
      ghost: "text-[#121314] hover:bg-gray-100 hover:text-[#253A7B]",
    };

    const sizeStyles = {
      sm: "h-9 px-4 text-[13px] gap-1.5",
      md: "h-11 px-6 text-[15px] gap-2",
      lg: "h-13 px-8 text-[16px] gap-2.5",
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
