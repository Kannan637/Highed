"use client";

import React, { useState, useRef, useEffect } from "react";

interface PhoneInputProps {
  countryCode: string;
  phone: string;
  onCountryCodeChange: (code: string) => void;
  onPhoneChange: (phone: string) => void;
  error?: string;
  disabled?: boolean;
  id?: string;
}

const countryCodes = [
  { code: "+91", label: "IN +91" },
  { code: "+971", label: "AE +971" },
  { code: "+1", label: "US +1" },
  { code: "+44", label: "UK +44" },
  { code: "+61", label: "AU +61" },
  { code: "+49", label: "DE +49" },
];

export const PhoneInput: React.FC<PhoneInputProps> = ({
  countryCode,
  phone,
  onCountryCodeChange,
  onPhoneChange,
  error,
  disabled = false,
  id = "phone-input",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerBtnRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // When dropdown opens, focus the active country code option
  useEffect(() => {
    if (isOpen) {
      const activeIdx = countryCodes.findIndex((cc) => cc.code === countryCode);
      const targetIdx = activeIdx >= 0 ? activeIdx : 0;
      setTimeout(() => {
        setFocusedIndex(targetIdx);
        optionRefs.current[targetIdx]?.focus();
      }, 50);
    }
  }, [isOpen, countryCode]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 15);
    onPhoneChange(value);
  };

  const handleTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  const handleOptionKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % countryCodes.length;
      setFocusedIndex(nextIndex);
      optionRefs.current[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (index - 1 + countryCodes.length) % countryCodes.length;
      setFocusedIndex(prevIndex);
      optionRefs.current[prevIndex]?.focus();
    } else if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
      triggerBtnRef.current?.focus();
    } else if (e.key === "Tab") {
      setIsOpen(false);
    }
  };

  const selectCountryCode = (code: string) => {
    onCountryCodeChange(code);
    setIsOpen(false);
    triggerBtnRef.current?.focus();
  };

  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-body text-xs font-semibold text-content-secondary">
        Mobile Number *
      </label>
      <div
        className={`flex h-12 items-center overflow-hidden rounded-xl border bg-white transition-colors ${
          error ? "border-[#E93F61]" : "border-gray-200 focus-within:border-brand-primary"
        }`}
      >
        {/* Country Code Selector (ISS-017 & ISS-010) */}
        <div ref={dropdownRef} className="relative">
          <button
            ref={triggerBtnRef}
            type="button"
            onClick={() => !disabled && setIsOpen(!isOpen)}
            onKeyDown={handleTriggerKeyDown}
            disabled={disabled}
            className="flex h-full min-h-[44px] items-center gap-1 border-r border-gray-200 px-3 font-body text-sm font-medium text-content-primary transition-colors hover:bg-gray-50 disabled:opacity-50"
            aria-label="Select country code"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-controls={`${id}-country-listbox`}
          >
            <span>{countryCode}</span>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {isOpen && (
            <div
              id={`${id}-country-listbox`}
              role="listbox"
              aria-label="Country calling codes"
              className="absolute left-0 top-full z-50 mt-1 w-32 overflow-hidden rounded-lg border border-border-default bg-white shadow-xl"
            >
              {countryCodes.map((cc, idx) => (
                <button
                  key={cc.code}
                  ref={(el) => {
                    optionRefs.current[idx] = el;
                  }}
                  type="button"
                  role="option"
                  aria-selected={countryCode === cc.code}
                  tabIndex={focusedIndex === idx ? 0 : -1}
                  onClick={() => selectCountryCode(cc.code)}
                  onKeyDown={(e) => handleOptionKeyDown(e, idx)}
                  className={`flex min-h-[44px] w-full items-center px-3.5 py-2.5 text-left font-body text-sm transition-colors hover:bg-icon-bg-primary ${
                    countryCode === cc.code
                      ? "bg-icon-bg-primary font-semibold text-brand-primary"
                      : "text-content-primary"
                  }`}
                >
                  {cc.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Phone Input (ISS-014 & ISS-015) */}
        <input
          id={id}
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Mobile Number"
          value={phone}
          onChange={handlePhoneChange}
          disabled={disabled}
          aria-label="Mobile phone number"
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className="h-full flex-1 bg-transparent px-3 font-body text-sm text-content-primary outline-none placeholder:text-gray-400 disabled:opacity-50"
        />
      </div>

      {error && (
        <p id={errorId} className="mt-1.5 font-body text-xs text-brand-accent" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default PhoneInput;
