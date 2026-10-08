"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Breadcrumb, { BreadcrumbItem } from "@/components/ui/Breadcrumb";
import { cn } from "@/lib/utils";

export interface ToolBreadcrumbBarProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const ToolBreadcrumbBar: React.FC<ToolBreadcrumbBarProps> = ({
  items,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border-b border-black/5 bg-white select-none",
        className
      )}
    >
      {/* 50% Brand Accent Background with 45° Diagonal Sliced Cut */}
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 bg-brand-primary transition-all duration-200",
          // Mobile & Tablet: Adapts width so all breadcrumb text remains inside accent color
          // Desktop: Exactly 50% width as requested
          "w-[90%] xs:w-[84%] sm:w-[70%] md:w-[60%] lg:w-[50%]",
          // 45° diagonal sliced cut (dx = dy for 45° angle)
          "[clip-path:polygon(0_0,100%_0,calc(100%-48px)_100%,0_100%)]",
          "sm:[clip-path:polygon(0_0,100%_0,calc(100%-54px)_100%,0_100%)]"
        )}
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="py-2.5 sm:py-3.5 md:py-4">
          <Breadcrumb items={items} variant="on-accent" />
        </div>
      </Container>
    </div>
  );
};

export default ToolBreadcrumbBar;
