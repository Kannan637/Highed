"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { NavDropdownData, NavEventItem } from "@/types/navigation";
import { MenuIcon } from "./MenuIcon";

interface NavigationDropdownProps {
  dropdownData?: NavDropdownData;
  eventsData?: NavEventItem[];
  isOpen: boolean;
  onClose?: () => void;
}

export const NavigationDropdown: React.FC<NavigationDropdownProps> = ({
  dropdownData,
  eventsData,
  isOpen,
  onClose,
}) => {
  return (
    <div
      className={`absolute left-0 top-[72px] w-full border-t border-[#E9E9ED] bg-white shadow-[0_18px_50px_rgba(18,19,20,0.10)] transition-all duration-200 ease-out ${
        isOpen
          ? "visible opacity-100 translate-y-0 pointer-events-auto"
          : "invisible opacity-0 -translate-y-1.5 pointer-events-none"
      }`}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 py-8">
        {eventsData ? (
          <div>
            <h3 className="mb-4 text-h5 text-brand-primary">
              Our Events
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {eventsData.map((event) => (
                <Link
                  href={event.href || "/events"}
                  key={event.label}
                  onClick={onClose}
                  className="group/item flex items-center gap-3 rounded-xl px-3.5 py-3 font-body text-body-small font-medium tracking-tight text-content-primary transition-all duration-200 ease-out hover:bg-surface-subtle hover:text-brand-primary hover:translate-x-1"
                >
                  <MenuIcon type={event.icon} />
                  <span className="flex-1">{event.label}</span>
                  <ArrowRight
                    size={15}
                    className="text-brand-primary opacity-0 -translate-x-1 transition-all duration-200 ease-out group-hover/item:opacity-100 group-hover/item:translate-x-0"
                    strokeWidth={2}
                  />
                </Link>
              ))}
            </div>
          </div>
        ) : dropdownData && "countries" in dropdownData ? (
          <div>
            <div className="mb-5 border-b border-border-default pb-3">
              <h3 className="text-h4 text-brand-primary">
                Top Countries We&apos;re Serving
              </h3>
              <p className="mt-1 font-body text-body-small text-content-secondary">
                Discover global study destinations with world-class universities and top career prospects.
              </p>
            </div>

            <div className="grid grid-cols-6 gap-3.5">
              {dropdownData.countries.map((country) => (
                <Link
                  href={country.href || `/study-in/${country.name.toLowerCase()}`}
                  key={country.name}
                  onClick={onClose}
                  className="group/item flex flex-col items-center gap-2.5 rounded-2xl border border-border-default bg-surface-neutral p-4 text-center transition-all duration-200 ease-out hover:-translate-y-1 hover:border-brand-primary/30 hover:bg-white hover:shadow-md"
                >
                  <span className="flex h-[42px] w-[42px] items-center justify-center overflow-hidden rounded-full bg-white shadow-xs transition-transform duration-200 ease-out group-hover/item:scale-105">
                    <ReactCountryFlag
                      countryCode={country.code}
                      svg
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </span>

                  <span className="font-body text-body-small font-medium tracking-tight text-content-primary transition-colors duration-200 group-hover/item:text-brand-primary">
                    {country.name}
                  </span>

                  <span className="flex items-center gap-1 font-body text-caption text-content-secondary transition-colors duration-200 group-hover/item:text-brand-primary">
                    Explore
                    <ArrowRight
                      size={12}
                      className="opacity-0 -translate-x-0.5 transition-all duration-200 ease-out group-hover/item:opacity-100 group-hover/item:translate-x-0.5"
                    />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between rounded-xl border border-border-default bg-[#F8F9FE] px-5 py-3">
              <div className="flex items-center gap-2.5 font-body text-caption text-content-primary">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-icon-bg-success text-[#1E7B47]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="font-medium text-content-secondary">
                  Trusted by <strong className="font-medium text-content-primary">10,000+ students</strong> +{" "}
                  <strong className="font-medium text-content-primary">500+ global universities</strong>
                </span>
              </div>
              <span className="font-body text-caption font-medium text-content-secondary">
                Official University Representative
              </span>
            </div>
          </div>
        ) : dropdownData && "columns" in dropdownData ? (
          <div className="grid grid-cols-3 gap-x-12">
            {dropdownData.columns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-3 text-h5 text-brand-primary">
                  {column.title}
                </h3>
                <div className="space-y-0.5">
                  {column.items.map((item) => (
                    <Link
                      href={item.href || "#"}
                      key={item.label}
                      onClick={onClose}
                      className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 font-body text-body-small font-medium tracking-tight text-content-primary transition-all duration-200 ease-out hover:bg-surface-subtle hover:text-brand-primary hover:translate-x-1"
                    >
                      <MenuIcon type={item.icon} />
                      <span className="flex-1">{item.label}</span>
                      <ArrowRight
                        size={15}
                        className="text-brand-primary opacity-0 -translate-x-1 transition-all duration-200 ease-out group-hover/item:opacity-100 group-hover/item:translate-x-0"
                        strokeWidth={2}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavigationDropdown;
