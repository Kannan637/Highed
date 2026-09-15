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
              className={`flex h-full items-center gap-1.5 font-body text-[16px] font-medium leading-[24px] tracking-[-0.04em] transition-colors duration-200 cursor-pointer ${
                isOpen ? "text-[#253A7B]" : "text-[#121314] hover:text-[#253A7B]"
              }`}
            >
              <span>{label}</span>
              <ChevronDown
                size={15}
                strokeWidth={2}
                className={`transition-transform duration-200 ease-out ${
                  isOpen ? "rotate-180 text-[#253A7B]" : "text-gray-400 group-hover:text-[#253A7B]"
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
        className={`flex h-full items-center font-body text-[16px] font-medium leading-[24px] tracking-[-0.04em] transition-colors duration-200 cursor-pointer ${
          pathname === "/blog" || pathname?.startsWith("/blog/")
            ? "text-[#253A7B] font-semibold"
            : "text-[#121314] hover:text-[#253A7B]"
        }`}
      >
        <span>Blog</span>
      </Link>

      {/* Events Direct Link */}
      <Link
        href="/events"
        onClick={handleClose}
        className={`flex h-full items-center font-body text-[16px] font-medium leading-[24px] tracking-[-0.04em] transition-colors duration-200 cursor-pointer ${
          pathname === "/events" || pathname?.startsWith("/events/")
            ? "text-[#253A7B] font-semibold"
            : "text-[#121314] hover:text-[#253A7B]"
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
        className="ml-2 flex h-[46px] items-center gap-3 rounded-full bg-[#E93F61] pl-5 pr-1.5 font-body text-[16px] font-semibold leading-[24px] tracking-[-0.04em] text-white shadow-sm transition-all duration-200 hover:bg-[#D93657] active:scale-[0.98] cursor-pointer"
      >
        <span>Book Free Counselling</span>
        <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-white text-[#253A7B] shadow-sm">
          <Phone size={17} fill="#253A7B" strokeWidth={0} />
        </span>
      </button>
    </div>
  );
};

export default DesktopNavigation;
