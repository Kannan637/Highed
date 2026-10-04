"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);

    // Snappy 200ms dismiss (within the 150-300ms sweet spot)
    setTimeout(() => {
      setIsVisible(false);
    }, 200);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Announcement banner"
      className={`relative z-40 w-full overflow-hidden transition-all duration-200 ease-out ${isClosing
          ? "max-h-0 opacity-0 -translate-y-1 pointer-events-none"
          : "max-h-14 opacity-100 translate-y-0"
        }`}
    >
      <div className="w-full bg-gradient-to-r from-[#A67C00] via-[#FCF6BA] to-[#B38728] shadow-[inset_0_-4px_10px_rgba(255,255,255,0.7)]">
        <div className="relative mx-auto flex min-h-9 w-full items-center justify-center px-8 py-1 sm:py-0 sm:px-12">
          {/* Announcement Banner Content */}
          <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5 text-center font-body text-body-small md:text-body font-medium tracking-tight">
            <span aria-hidden="true" className="shrink-0 text-sm md:text-base">🎓</span>
            <span className="font-body font-semibold text-neutral-900">
              Upcoming: Study Abroad Fair 2026 —
            </span>
            <Link
              href="/events"
              className="font-body font-bold text-[#8B001F] hover:underline hover:decoration-[#8B001F] shrink-0"
            >
              Register Now →
            </Link>
          </div>

          {/* Close Button — 44×44px touch target (WCAG 2.5.5) */}
          <div className="absolute right-0.5 sm:right-2 top-1/2 -translate-y-1/2">
            <button
              type="button"
              onClick={handleClose}
              className="btn-motion flex h-11 w-11 items-center justify-center rounded-full text-content-primary cursor-pointer touch-manipulation select-none hover:bg-black/10"
              aria-label="Close announcement banner"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/50 shadow-xs hover:bg-white/80 transition-colors duration-150">
                <X size={12} strokeWidth={2.5} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default TopBar;
