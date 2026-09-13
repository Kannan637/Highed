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
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className,
  showHomeIcon = true,
}) => {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center text-sm", className)}>
      <ol className="flex items-center flex-wrap gap-1.5 text-xs md:text-sm font-medium">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="inline-flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0 select-none" aria-hidden="true" />
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  className="text-neutral-900 font-semibold truncate max-w-[200px] md:max-w-none"
                >
                  {item.label}
                </span>
              ) : item.href ? (
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-neutral-500 hover:text-[#253A7B] transition-colors"
                >
                  {index === 0 && showHomeIcon && (
                    <Home className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  )}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span className="text-neutral-500">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
