"use client";

import React, { useEffect } from "react";
import { X, RotateCcw, Check } from "lucide-react";

interface ExploreFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  onApply: () => void;
  onClear: () => void;
}

export const ExploreFilterDrawer: React.FC<ExploreFilterDrawerProps> = ({
  isOpen,
  onClose,
  children,
  onApply,
  onClear,
}) => {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative z-10 max-h-[85vh] w-full overflow-hidden rounded-t-3xl bg-white shadow-2xl flex flex-col animate-in slide-in-from-bottom duration-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
          <h3 className="font-hedvig text-lg font-bold text-neutral-900">
            Filter Listings
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1 text-neutral-500 hover:bg-neutral-100 cursor-pointer"
            aria-label="Close filters drawer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Filters Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>

        {/* Action Buttons Footer */}
        <div className="flex items-center gap-3 border-t border-neutral-200 p-4 bg-neutral-50">
          <button
            type="button"
            onClick={onClear}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-neutral-300 bg-white py-3 text-xs sm:text-sm font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <RotateCcw size={14} />
            <span>Clear All</span>
          </button>
          <button
            type="button"
            onClick={() => {
              onApply();
              onClose();
            }}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#253A7B] py-3 text-xs sm:text-sm font-semibold text-white hover:bg-[#1b2b5c] transition-colors cursor-pointer shadow-xs"
          >
            <Check size={16} />
            <span>Apply Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreFilterDrawer;
