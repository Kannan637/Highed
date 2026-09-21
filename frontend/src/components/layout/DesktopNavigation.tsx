"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone } from "lucide-react";
import { navDropdowns } from "@/data/navigation";
import { NavigationDropdown } from "./NavigationDropdown";
import { useLeadPopup } from "@/hooks/useLeadPopup";

export const DesktopNavigation: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { openLeadPopup } = useLeadPopup();
  const pathname = usePathname();

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleClose = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(null);
  };

  React.useEffect(() => {
    if (!activeDropdown) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeDropdown]);

  return (
    <div
      className="ml-auto hidden h-full items-center gap-4 md:flex lg:gap-6"
      onMouseLeave={handleMouseLeave}
    >
      {Object.entries(navDropdowns).map(([label, dropdown]) => {
        const isOpen = activeDropdown === label;

        return (
          <div
            key={label}
            className="group static flex h-full items-center"
            onMouseEnter={() => handleMouseEnter(label)}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(isOpen ? null : label)}
              aria-expanded={isOpen}
              className={`flex h-full items-center gap-1.5 text-nav tracking-tight transition-colors duration-200 cursor-pointer ${isOpen ? "text-brand-primary" : "text-content-primary hover:text-brand-primary"
                }`}
            >
              <span>{label}</span>
              <ChevronDown
                size={15}
                strokeWidth={2}
                className={`transition-transform duration-200 ease-out ${isOpen ? "rotate-180 text-brand-primary" : "text-gray-400 group-hover:text-brand-primary"
                  }`}
              />
            </button>

            <NavigationDropdown
              dropdownData={dropdown}
              isOpen={isOpen}
              onClose={handleClose}
            />
          </div>
        );
      })}

      {/* Blog Direct Link */}
      <Link
        href="/blog"
        onClick={handleClose}
        className={`flex h-full items-center text-nav tracking-tight transition-colors duration-200 cursor-pointer ${pathname === "/blog" || pathname?.startsWith("/blog/")
            ? "text-brand-primary"
            : "text-content-primary hover:text-brand-primary"
          }`}
      >
        <span>Blog</span>
      </Link>

      {/* Events Direct Link */}
      <Link
        href="/events"
        onClick={handleClose}
        className={`flex h-full items-center text-nav tracking-tight transition-colors duration-200 cursor-pointer ${pathname === "/events" || pathname?.startsWith("/events/")
            ? "text-brand-primary"
            : "text-content-primary hover:text-brand-primary"
          }`}
      >
        <span>Events</span>
      </Link>

      {/* Desktop CTA — Opens LeadPopup */}
      <button
        type="button"
        onClick={() => {
          handleClose();
          openLeadPopup({ source: "navbar" });
        }}
        className="ml-2 flex h-[46px] items-center gap-3 rounded-full bg-brand-accent pl-5 pr-1.5 text-btn text-white shadow-sm transition-all duration-200 hover:bg-brand-accent-hover active:scale-[0.98] cursor-pointer"
      >
        <span>Book Free Counselling</span>
        <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-white text-brand-primary shadow-sm">
          <Phone size={17} fill="#253A7B" strokeWidth={0} />
        </span>
      </button>
    </div>
  );
};

export default DesktopNavigation;
