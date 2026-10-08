import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  showHomeIcon?: boolean;
  variant?: "default" | "on-accent";
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className,
  showHomeIcon = true,
  variant = "default",
}) => {
  const isOnAccent = variant === "on-accent";

  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center text-sm", className)}>
      <ol className="flex items-center flex-wrap gap-1.5 text-xs md:text-sm font-medium">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="inline-flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight
                  className={cn(
                    "w-3.5 h-3.5 shrink-0 select-none",
                    isOnAccent ? "text-white/60" : "text-neutral-400"
                  )}
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  className={cn(
                    "font-semibold truncate max-w-[200px] md:max-w-none",
                    isOnAccent ? "text-white font-bold" : "text-neutral-900"
                  )}
                >
                  {item.label}
                </span>
              ) : item.href ? (
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 transition-colors",
                    isOnAccent
                      ? "text-white/85 hover:text-white"
                      : "text-neutral-500 hover:text-brand-primary"
                  )}
                >
                  {index === 0 && showHomeIcon && (
                    <Home
                      className={cn(
                        "w-3.5 h-3.5 shrink-0",
                        isOnAccent ? "text-white/85" : ""
                      )}
                      aria-hidden="true"
                    />
                  )}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span className={isOnAccent ? "text-white/85" : "text-neutral-500"}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
