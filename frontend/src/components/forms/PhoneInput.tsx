"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { ChevronDown } from "lucide-react";

interface PhoneInputProps {
  countryCode: string;
  phone: string;
  onCountryCodeChange: (code: string) => void;
  onPhoneChange: (phone: string) => void;
  error?: string;
  disabled?: boolean;
  id?: string;
  hideLabel?: boolean;
  size?: "sm" | "md";
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
  hideLabel = false,
  size = "md",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerBtnRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const focusTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const errorId = `${id}-error`;
  const listboxId = `${id}-country-listbox`;

  /*
   * Close dropdown when clicking outside
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /*
   * Clean up pending focus timeout
   */
  useEffect(() => {
    return () => {
      if (focusTimeoutRef.current) {
        clearTimeout(focusTimeoutRef.current);
      }
    };
  }, []);

  /*
   * Focus selected country when dropdown opens
   */
  useEffect(() => {
    if (!isOpen) return;

    const activeIndex = countryCodes.findIndex(
      (country) => country.code === countryCode
    );

    const targetIndex = activeIndex >= 0 ? activeIndex : 0;

    if (focusTimeoutRef.current) {
      clearTimeout(focusTimeoutRef.current);
    }

    focusTimeoutRef.current = setTimeout(() => {
      setFocusedIndex(targetIndex);
      optionRefs.current[targetIndex]?.focus();
    }, 0);

    return () => {
      if (focusTimeoutRef.current) {
        clearTimeout(focusTimeoutRef.current);
      }
    };
  }, [isOpen, countryCode]);

  /*
   * Phone number input
   */
  const handlePhoneChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value
      .replace(/\D/g, "")
      .slice(0, 15);

    onPhoneChange(value);
  };

  /*
   * Open / close dropdown
   */
  const toggleDropdown = useCallback(() => {
    if (disabled) return;

    setIsOpen((previous) => !previous);
  }, [disabled]);

  /*
   * Trigger keyboard navigation
   */
  const handleTriggerKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (disabled) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();

        if (!isOpen) {
          setIsOpen(true);
        }
        break;

      case "ArrowUp":
        event.preventDefault();

        if (!isOpen) {
          setIsOpen(true);
        }
        break;

      case "Enter":
      case " ":
        event.preventDefault();
        setIsOpen((previous) => !previous);
        break;

      case "Escape":
        if (isOpen) {
          event.preventDefault();
          setIsOpen(false);
        }
        break;

      default:
        break;
    }
  };

  /*
   * Country option keyboard navigation
   */
  const handleOptionKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    switch (event.key) {
      case "ArrowDown": {
        event.preventDefault();

        const nextIndex =
          index === countryCodes.length - 1
            ? 0
            : index + 1;

        setFocusedIndex(nextIndex);
        optionRefs.current[nextIndex]?.focus();
        break;
      }

      case "ArrowUp": {
        event.preventDefault();

        const previousIndex =
          index === 0
            ? countryCodes.length - 1
            : index - 1;

        setFocusedIndex(previousIndex);
        optionRefs.current[previousIndex]?.focus();
        break;
      }

      case "Home": {
        event.preventDefault();

        setFocusedIndex(0);
        optionRefs.current[0]?.focus();
        break;
      }

      case "End": {
        event.preventDefault();

        const lastIndex = countryCodes.length - 1;

        setFocusedIndex(lastIndex);
        optionRefs.current[lastIndex]?.focus();
        break;
      }

      case "Enter":
      case " ": {
        event.preventDefault();

        selectCountryCode(countryCodes[index].code);
        break;
      }

      case "Escape": {
        event.preventDefault();

        setIsOpen(false);
        triggerBtnRef.current?.focus();
        break;
      }

      case "Tab": {
        setIsOpen(false);
        break;
      }

      default:
        break;
    }
  };

  /*
   * Select country
   */
  const selectCountryCode = (code: string) => {
    onCountryCodeChange(code);
    setIsOpen(false);

    requestAnimationFrame(() => {
      triggerBtnRef.current?.focus();
    });
  };

  return (
    <div className="w-full">
      {/* Label */}
      {!hideLabel && (
        <label
          htmlFor={id}
          className={`mb-1.5 block font-body ${size === "sm" ? "text-[11px] mb-1" : "text-xs"} font-semibold text-content-secondary`}
        >
          Mobile Number *
        </label>
      )}

      {/* Input wrapper */}
      <div
        className={`relative flex ${size === "sm" ? "h-9 rounded-lg" : "h-12 rounded-xl"} w-full items-center border bg-white transition-colors ${
          error
            ? "border-brand-accent focus-within:border-brand-accent"
            : "border-gray-200 focus-within:border-brand-primary"
        }`}
      >
        {/* Country selector */}
        <div
          ref={dropdownRef}
          className="relative h-full shrink-0"
        >
          <button
            ref={triggerBtnRef}
            type="button"
            onClick={toggleDropdown}
            onKeyDown={handleTriggerKeyDown}
            disabled={disabled}
            className={`flex h-full ${
              size === "sm"
                ? "min-h-[36px] px-2 text-xs rounded-l-lg"
                : "min-h-[44px] px-3 text-sm rounded-l-xl"
            } items-center gap-1 border-r border-gray-200 font-body font-medium text-content-primary transition-colors hover:bg-gray-50 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50`}
            aria-label="Select country calling code"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-controls={listboxId}
          >
            <span>{countryCode}</span>

            <ChevronDown
              size={size === "sm" ? 12 : 14}
              strokeWidth={1.75}
              className={`shrink-0 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>

          {/* Country dropdown */}
          {isOpen && (
            <div
              id={listboxId}
              role="listbox"
              aria-label="Country calling codes"
              className={`absolute left-0 top-[calc(100%+4px)] z-[100] ${
                size === "sm" ? "w-28 text-xs p-1" : "w-32 text-sm p-1"
              } overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`}
            >
              {countryCodes.map((country, index) => {
                const isSelected =
                  countryCode === country.code;

                return (
                  <button
                    key={country.code}
                    ref={(element) => {
                      optionRefs.current[index] = element;
                    }}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    tabIndex={
                      focusedIndex === index ? 0 : -1
                    }
                    onClick={() =>
                      selectCountryCode(country.code)
                    }
                    onKeyDown={(event) =>
                      handleOptionKeyDown(event, index)
                    }
                    className={`flex ${
                      size === "sm" ? "min-h-[32px] px-2 py-1.5 text-xs" : "min-h-[40px] px-3 py-2 text-sm"
                    } w-full items-center rounded-lg text-left font-body transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30 ${
                      isSelected
                        ? "bg-icon-bg-primary font-semibold text-brand-primary"
                        : "text-content-primary hover:bg-gray-50"
                    }`}
                  >
                    {country.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Phone input */}
        <input
          id={id}
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          autoComplete="tel"
          placeholder="Mobile Number"
          value={phone}
          onChange={handlePhoneChange}
          disabled={disabled}
          aria-label="Mobile phone number"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`${
            size === "sm"
              ? "h-9 px-2.5 text-xs rounded-r-lg placeholder:text-xs"
              : "h-12 px-4 text-sm rounded-r-xl placeholder:text-gray-500"
          } w-full min-w-0 flex-1 border-0 bg-transparent font-body text-content-primary outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50`}
        />
      </div>

      {/* Validation error */}
      {error && (
        <p
          id={errorId}
          className={`${size === "sm" ? "mt-1 text-[11px]" : "mt-1.5 text-xs"} font-body text-brand-accent`}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default PhoneInput;