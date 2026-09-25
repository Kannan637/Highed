import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

const Select = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          ref={ref}
          className={cn(
            "flex h-12 w-full appearance-none rounded-xl border bg-background px-4 py-2 pr-10 text-sm md:text-base text-foreground shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            error
              ? "border-destructive focus-visible:ring-destructive"
              : "border-border hover:border-black/20 focus-visible:border-brand-primary",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground opacity-70" />
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
export default Select;
