import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-body font-medium text-btn rounded-full transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 select-none whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-brand-primary text-content-inverse hover:bg-brand-primary-hover shadow-sm border border-black/10",
        primary: "bg-brand-primary text-content-inverse hover:bg-brand-primary-hover shadow-sm border border-black/10",
        accent: "bg-brand-accent text-content-inverse hover:bg-brand-accent-hover shadow-sm border border-black/10",
        outline: "border border-black/10 bg-white text-brand-primary hover:bg-brand-primary hover:text-content-inverse hover:border-brand-primary shadow-xs",
        secondary: "border border-black/10 bg-surface-subtle text-brand-primary hover:bg-neutral-100",
        ghost: "text-foreground hover:bg-gray-100 hover:text-brand-primary",
        destructive: "border border-black/10 bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/40",
        white: "border border-black/10 bg-white text-brand-primary hover:bg-neutral-100 shadow-sm",
        inverse: "border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
        link: "text-brand-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 text-btn gap-2",
        md: "h-12 px-6 text-btn gap-2",
        sm: "h-10 px-5 text-body-small gap-1.5",
        xs: "h-8 px-3 text-xs gap-1",
        lg: "h-14 px-8 text-btn gap-2.5",
        icon: "size-12",
        "icon-xs": "size-8",
        "icon-sm": "size-10",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  fullWidth?: boolean;
  iconBadge?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      fullWidth = false,
      iconBadge,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size }),
          fullWidth && "w-full",
          iconBadge && "pr-1.5 justify-between gap-3",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        {iconBadge && (
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-brand-primary shadow-xs">
            {iconBadge}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export { buttonVariants };
export default Button;
