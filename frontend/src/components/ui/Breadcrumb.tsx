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
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center text-sm w-full min-w-0", className)}
    >
      <ol
        className={cn(
          "flex items-center flex-nowrap overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "gap-1 sm:gap-1.5 text-xs sm:text-[13px] md:text-sm font-medium py-0.5 max-w-full"
        )}
      >
        {items.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === items.length - 1;

          return (
            <li
              key={index}
              className="inline-flex items-center gap-1 sm:gap-1.5 shrink-0"
            >
              {index > 0 && (
                <ChevronRight
                  className={cn(
                    "size-3 sm:size-3.5 shrink-0 select-none",
                    isOnAccent ? "text-white/65" : "text-neutral-400"
                  )}
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  title={item.label}
                  className={cn(
                    "font-bold truncate max-w-[150px] xs:max-w-[200px] sm:max-w-[280px] md:max-w-none select-text",
                    isOnAccent ? "text-white drop-shadow-xs" : "text-neutral-900"
                  )}
                >
                  {item.label}
                </span>
              ) : item.href ? (
                <Link
                  href={item.href}
                  title={item.label}
                  className={cn(
                    "inline-flex items-center gap-1 transition-colors shrink-0",
                    isOnAccent
                      ? "text-white/85 hover:text-white"
                      : "text-neutral-500 hover:text-brand-primary"
                  )}
                >
                  {isFirst && showHomeIcon && (
                    <Home
                      className={cn(
                        "size-3.5 sm:size-4 shrink-0",
                        isOnAccent ? "text-white/85" : "text-neutral-500"
                      )}
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className={cn(
                      isFirst && showHomeIcon
                        ? "hidden xs:inline"
                        : "truncate max-w-[120px] sm:max-w-none"
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              ) : (
                <span
                  className={cn(
                    "truncate max-w-[120px] sm:max-w-none shrink-0",
                    isOnAccent ? "text-white/85" : "text-neutral-500"
                  )}
                >
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
