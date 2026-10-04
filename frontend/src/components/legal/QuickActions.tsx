"use client";

import React, { useEffect, useState } from "react";
import {
  FileText,
  Cpu,
  Share2,
  ShieldCheck,
  Cookie,
  UserCheck,
  Mail,
  FileCheck,
  Compass,
  User,
  Shield,
  AlertTriangle,
  ExternalLink,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  // Privacy Policy sections
  "information-we-collect": FileText,
  "how-we-use": Cpu,
  "sharing": Share2,
  "security": ShieldCheck,
  "cookies": Cookie,
  "rights": UserCheck,
  "contact": Mail,

  // Terms of Service sections
  "acceptance": FileCheck,
  "advisory-services": Compass,
  "student-responsibilities": User,
  "intellectual-property": Shield,
  "disclaimer": AlertTriangle,
  "third-party-links": ExternalLink,
  "governing-law": Scale,
};

export interface QuickActionSection {
  id: string;
  label: string;
  iconName?: string;
}

interface QuickActionsProps {
  items: QuickActionSection[];
  title?: string;
  className?: string;
}

export function QuickActions({
  items,
  title = "QUICK ACTIONS",
  className,
}: QuickActionsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  // IntersectionObserver scroll-spy to highlight current section as user scrolls
  useEffect(() => {
    if (!items || items.length === 0) return;

    // Check if there is an initial hash in the URL
    if (typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      if (items.some((item) => item.id === hashId)) {
        setActiveId(hashId);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      setActiveId(id);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (typeof window !== "undefined" && window.history.pushState) {
        window.history.pushState(null, "", `#${id}`);
      }
    }
  };

  return (
    <aside
      className={cn("w-full lg:w-[240px] shrink-0", className)}
      aria-label="Quick Actions"
    >
      {/* Desktop Sidebar: clean documentation navigation with subtle right border */}
      <div className="hidden lg:block lg:sticky lg:top-24 lg:pr-8 lg:border-r lg:border-[#E6EAF0]">
        <div className="text-[11px] font-bold uppercase tracking-wider text-[#98A2B3] mb-3 px-3">
          {title}
        </div>
        <nav className="flex flex-col space-y-1">
          {items.map((item) => {
            const Icon = (item.iconName && ICON_MAP[item.iconName]) || ICON_MAP[item.id] || FileText;
            const isActive = item.id === activeId;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={cn(
                  "group flex items-center gap-3 px-3.5 py-2.5 rounded-[8px] text-[13.5px] transition-colors border-l-[3px]",
                  isActive
                    ? "bg-[#EEF4FF] text-[#253A7B] font-semibold border-[#253A7B]"
                    : "text-[#667085] bg-transparent font-medium hover:text-[#151A2D] hover:bg-[#EEF4FF]/40 border-transparent"
                )}
                aria-current={isActive ? "location" : undefined}
              >
                <Icon
                  className={cn(
                    "size-4 shrink-0 transition-colors",
                    isActive
                      ? "text-[#253A7B]"
                      : "text-[#667085] group-hover:text-[#151A2D]"
                  )}
                  aria-hidden="true"
                />
                <span className="truncate">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Mobile Horizontal Scrollable Navigation */}
      <div className="lg:hidden w-full pb-3 mb-6 border-b border-[#E6EAF0]">
        <div className="text-[11px] font-bold uppercase tracking-wider text-[#98A2B3] mb-2 px-1">
          {title}
        </div>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-1 -mx-1">
          {items.map((item) => {
            const Icon = (item.iconName && ICON_MAP[item.iconName]) || ICON_MAP[item.id] || FileText;
            const isActive = item.id === activeId;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-[8px] text-[13px] font-medium whitespace-nowrap transition-colors shrink-0",
                  isActive
                    ? "bg-[#EEF4FF] text-[#253A7B] font-semibold border-b-2 border-[#253A7B]"
                    : "text-[#667085] bg-white border border-[#E6EAF0] hover:text-[#151A2D] hover:bg-[#EEF4FF]/30"
                )}
                aria-current={isActive ? "location" : undefined}
              >
                <Icon
                  className={cn(
                    "size-3.5 shrink-0",
                    isActive ? "text-[#253A7B]" : "text-[#667085]"
                  )}
                  aria-hidden="true"
                />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default QuickActions;
