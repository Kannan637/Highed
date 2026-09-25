"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { navDropdowns } from "@/data/navigation";
import { MenuIcon } from "./MenuIcon";
import { Badge } from "@/components/ui/Badge";
import { LeadCTAButton } from "@/components/forms/LeadCTAButton";
import { useFocusTrap } from "@/hooks/useFocusTrap";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when mobile nav is open (ISS-008)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus trap for keyboard navigation (ISS-009)
  useFocusTrap(navRef, {
    isActive: isOpen,
    onEscape: onClose,
    autoFocus: false,
  });

  const toggleMobileDropdown = (label: string) => {
    setActiveMobileDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <div
      ref={navRef}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className={`
        md:hidden
        absolute
        left-0
        top-[72px]
        z-[9990]
        w-full
        border-t
        border-border-default
        bg-white
        shadow-[0_20px_45px_rgba(0,0,0,0.12)]
        transition-[opacity,transform,visibility]
        duration-200
        ease-out
        ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0"
        }
      `}
    >
      <div className="max-h-[calc(100vh-72px)] overflow-y-auto overscroll-contain px-5 py-5 sm:px-6">
        <div className="flex flex-col">
          {/* ABOUT / STUDY / SERVICES / RESOURCES */}
          {Object.entries(navDropdowns).map(([label, dropdown]) => {
            const isAccordionOpen = activeMobileDropdown === label;

            return (
              <div key={label} className="border-b border-border-default">
                <button
                  type="button"
                  onClick={() => toggleMobileDropdown(label)}
                  className="flex min-h-[56px] w-full touch-manipulation items-center justify-between text-left text-nav text-content-primary"
                >
                  <span>{label}</span>
                  <ChevronDown
                    size={18}
                    fill="currentColor"
                    strokeWidth={0}
                    className={`transition-transform duration-200 ${
                      isAccordionOpen ? "rotate-180 text-brand-primary" : "text-gray-400"
                    }`}
                  />
                </button>

                <div
                  className={`
                    grid transition-[grid-template-rows,opacity]
                    duration-200
                    ease-out
                    ${
                      isAccordionOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="pb-5">
                      {"countries" in dropdown ? (
                        <div>
                          <h4 className="mb-3 text-h5 text-brand-primary">
                            Top Countries We&apos;re Serving
                          </h4>

                          <div className="grid grid-cols-2 gap-3">
                            {dropdown.countries.map((country) => (
                              <Link
                                key={country.name}
                                href={country.href || `/study-in/${country.name.toLowerCase()}`}
                                onClick={onClose}
                                className="flex items-center gap-2.5 rounded-xl bg-[#F8F9FE] p-3 text-body-small text-content-primary transition-colors duration-300 active:bg-icon-bg-primary"
                              >
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                                  <ReactCountryFlag
                                    countryCode={country.code}
                                    svg
                                    style={{
                                      width: "22px",
                                      height: "22px",
                                      borderRadius: "50%",
                                    }}
                                  />
                                </span>
                                <span>{country.name}</span>
                              </Link>
                            ))}
                          </div>

                          <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-border-default bg-[#F8F9FE] p-3.5 text-caption text-content-secondary">
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-icon-bg-success text-[10px] font-bold text-[#1E7B47]">
                              ✓
                            </span>
                            <span>
                              Trusted by <strong>10,000+ students</strong> +{" "}
                              <strong>500+ global universities</strong>
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-5">
                          {dropdown.columns.map((column) => (
                            <div key={column.title}>
                              <h5 className="mb-2.5 text-h5 text-brand-primary">
                                {column.title}
                              </h5>
                              <div className="space-y-1">
                                {column.items.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href || "#"}
                                    onClick={onClose}
                                    className="group/item flex items-center gap-3 rounded-xl px-2 py-2.5 text-body-small text-content-secondary transition-all duration-300 active:bg-surface-subtle"
                                  >
                                    <MenuIcon type={item.icon} />
                                    <span>{item.label}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* BLOG */}
          <div className="border-b border-border-default">
            <Link
              href="/blog"
              onClick={onClose}
              className="flex min-h-[56px] w-full touch-manipulation items-center justify-between text-left text-nav text-content-primary transition-colors duration-200 hover:text-brand-primary"
            >
              <span>Blog</span>
              <Badge variant="brand" size="sm">
                Articles
              </Badge>
            </Link>
          </div>

          {/* EVENTS */}
          <div className="border-b border-border-default">
            <Link
              href="/events"
              onClick={onClose}
              className="flex min-h-[56px] w-full touch-manipulation items-center justify-between text-left text-nav text-content-primary transition-colors duration-200 hover:text-brand-primary"
            >
              <span>Events</span>
              <Badge variant="brand" size="sm">
                Upcoming
              </Badge>
            </Link>
          </div>

          {/* MOBILE CTA */}
          <div className="pt-5 pb-2">
            <LeadCTAButton
              source="mobile_navbar"
              variant="accent"
              size="default"
              fullWidth
              iconBadge={<Phone size={16} fill="#253A7B" strokeWidth={0} />}
              onClick={onClose}
            >
              Book Free Counselling
            </LeadCTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
