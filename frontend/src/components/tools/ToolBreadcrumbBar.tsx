"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Breadcrumb, { BreadcrumbItem } from "@/components/ui/Breadcrumb";

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
      className={`relative w-full overflow-hidden border-b border-black/5 bg-white ${className || ""
        }`}
    >
      {/* 50% Brand Accent Background with 45° Diagonal Sliced Cut */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[58%] sm:w-[52%] lg:w-[50%] bg-brand-primary [clip-path:polygon(0_0,100%_0,calc(100%-48px)_100%,0_100%)] sm:[clip-path:polygon(0_0,100%_0,calc(100%-52px)_100%,0_100%)]"
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10">
        <div className="py-3.5 sm:py-4">
          <Breadcrumb items={items} variant="on-accent" />
        </div>
      </Container>
    </div>
  );
};

export default ToolBreadcrumbBar;
