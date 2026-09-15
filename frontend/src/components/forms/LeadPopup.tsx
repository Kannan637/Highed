"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Loader2 } from "lucide-react";
import gsap from "gsap";
import PhoneInput from "./PhoneInput";
import LeadSuccess from "./LeadSuccess";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { validateLeadPopup } from "@/lib/validations";

interface LeadPopupProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
  page?: string;
  contextTitle?: string;
  contextCTA?: string;
}

export const LeadPopup: React.FC<LeadPopupProps> = ({
  isOpen,
  onClose,
  source = "popup",
  page = "/",
  contextTitle,
  contextCTA,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const isSubmittingRef = useRef<boolean>(false);

  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus trap for accessibility (ISS-009)
  useFocusTrap(popupRef, {
    isActive: isOpen,
    onEscape: () => animateClose(),
    autoFocus: true,
  });

  // GSAP enter animation
  useEffect(() => {
    if (!isOpen || !overlayRef.current || !popupRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(overlayRef.current, { opacity: 1 });
      gsap.set(popupRef.current, { opacity: 1, scale: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );

    gsap.fromTo(
      popupRef.current,
      { opacity: 0, scale: 0.96, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: "power2.out", delay: 0.05 }
    );
  }, [isOpen]);

  const resetForm = useCallback(() => {
    setPhone("");
    setPhoneError("");
    setSubmitError("");
    setIsSuccess(false);
    setLoading(false);
  }, []);

  // Close animation
  const animateClose = useCallback(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !overlayRef.current || !popupRef.current) {
      resetForm();
      onClose();
      return;
    }

    gsap.to(popupRef.current, {
      opacity: 0,
      scale: 0.96,
      y: 10,
      duration: 0.2,
      ease: "power2.in",
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        resetForm();
        onClose();
        previousFocusRef.current?.focus();
      },
    });
  }, [onClose, resetForm]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") animateClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, animateClose]);

  // Validate & submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError("");
    setSubmitError("");

    if (isSubmittingRef.current || loading) return;

    // Validate phone using centralized validator (ISS-037)
    const cleanPhone = phone.replace(/\s/g, "");
    const errors = validateLeadPopup({
      countryCode,
      phone: cleanPhone,
      source,
      page,
    });

    if (errors.length > 0) {
      setPhoneError(errors[0].message);
      return;
    }

    isSubmittingRef.current = true;
    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          countryCode,
          phone: cleanPhone,
          source,
          page,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        setSubmitError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      isSubmittingRef.current = false;
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Book Free Counselling"
      onClick={(e) => {
        if (e.target === overlayRef.current) animateClose();
      }}
    >
      {/* Overlay Background */}
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

      {/* Popup Container */}
      <div
        ref={popupRef}
        className="relative z-10 flex w-full max-w-[760px] flex-col md:flex-row overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        {/* Mobile Banner Image — visible on mobile */}
        <div className="relative h-32 w-full shrink-0 md:hidden bg-[#1B357F] overflow-hidden">
          <Image
            src="/images/lead-popup/Leadpop-v2.webp"
            alt="Study abroad counselling"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 320px"
            priority
            unoptimized
          />
        </div>

        {/* Left Image Section — visible on desktop */}
        <div className="relative hidden w-[320px] shrink-0 md:block bg-[#1B357F]">
          <Image
            src="/images/lead-popup/Leadpop-v2.webp"
            alt="Study abroad counselling"
            fill
            className="object-cover"
            sizes="320px"
            priority
            unoptimized
          />
        </div>

        {/* Right Form Section */}
        <div className="relative flex flex-1 flex-col px-7 py-8 sm:px-10 sm:py-10">
          {/* Close Button */}
          <button
            type="button"
            onClick={animateClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
          >
            <X size={18} />
          </button>

          {isSuccess ? (
            <LeadSuccess />
          ) : (
            <>
              {/* Logo */}
              <Image
                src="/logos/Highed Logo/Highed.png"
                alt="HighEd Logo"
                width={120}
                height={36}
                className="mb-5 h-8 w-auto object-contain"
              />

              {/* Heading */}
              <h2 className="font-heading text-[22px] font-bold leading-tight text-[#121314] sm:text-[26px]">
                {contextTitle || "Let's turn your study-abroad dreams into your success story."}
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                {submitError && (
                  <div className="rounded-xl bg-[#FDF0F3] px-4 py-3 font-body text-xs text-[#E93F61]" role="alert">
                    {submitError}
                  </div>
                )}

                <PhoneInput
                  countryCode={countryCode}
                  phone={phone}
                  onCountryCodeChange={setCountryCode}
                  onPhoneChange={setPhone}
                  error={phoneError}
                  disabled={loading}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#E93F61] font-body text-[15px] font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#d93657] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>{contextCTA || "Book Free Counselling"}</span>
                  )}
                </button>
              </form>

              {/* Contact */}
              <p className="mt-5 text-center font-body text-xs text-gray-400">
                You can always reach us on{" "}
                <a
                  href="tel:+919050180501"
                  className="font-semibold text-[#253A7B] hover:underline"
                >
                  +91 90501 80501
                </a>
              </p>

              {/* Terms */}
              <p className="mt-3 text-center font-body text-[11px] text-gray-400">
                By Continuing, You agree to our{" "}
                <Link href="/terms" className="text-[#253A7B] underline hover:no-underline">
                  terms
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="text-[#253A7B] underline hover:no-underline">
                  privacy policy
                </Link>
                .
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadPopup;
