"use client";

import React, { useState, useEffect } from "react";
import { PhoneCall, Sparkles, MessageCircle } from "lucide-react";
import { useLeadPopup } from "@/hooks/useLeadPopup";
import { siteConfig } from "@/config/site.config";

export function MobileBottomNav() {
  const { openLeadPopup } = useLeadPopup();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after scrolling down in mobile version (> 150px)
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phoneNumber = siteConfig.contact.phone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hello HighEd! I would like to get free counselling for studying abroad."
  )}`;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ease-out font-body ${isVisible
        ? "translate-y-0 opacity-100"
        : "translate-y-full opacity-0 pointer-events-none"
        }`}
      role="navigation"
      aria-label="Mobile Quick Actions"
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-gray-200/90 shadow-[0_-4px_24px_rgba(0,0,0,0.09)] px-3 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-2">
          {/* 1. Call Now */}
          <a
            href={`tel:${siteConfig.contact.phone}`}
            aria-label="Call Now"
            className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 relative text-white font-semibold text-xs sm:text-sm leading-[22px] tracking-[0.02em] px-2 sm:px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-200 ease-out border border-[#243A7A] bg-[radial-gradient(95%_60%_at_50%_75%,#243A7A_0%,#243A7A_100%)] shadow-[0px_4px_48px_-12px_#1187FF,inset_0px_1px_8px_-4px_#FFFFFF] active:scale-95 active:rotate-1 after:absolute after:top-[1px] after:right-[10%] after:w-[60%] after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-white/50 after:to-transparent hover:brightness-110"
          >
            <PhoneCall size={16} className="shrink-0 text-white" aria-hidden="true" />
            <span className="whitespace-nowrap">Call Now</span>
          </a>

          {/* 2. Get Free Consulting */}
          <button
            type="button"
            onClick={() => openLeadPopup({ source: "mobile_bottom_bar" })}
            aria-label="Get Free Consulting"
            className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 relative text-white font-semibold text-xs sm:text-sm leading-[22px] tracking-[0.02em] px-2 sm:px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-200 ease-out border border-[#E93F61] bg-[radial-gradient(95%_60%_at_50%_75%,#E93F61_0%,#E93F61_100%)] shadow-[0px_4px_48px_-12px_#1187FF,inset_0px_1px_8px_-4px_#FFFFFF] active:scale-95 active:rotate-1 after:absolute after:top-[1px] after:right-[10%] after:w-[60%] after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-white/50 after:to-transparent hover:brightness-110"
          >
            <Sparkles size={16} className="shrink-0 text-white" aria-hidden="true" />
            <span className="whitespace-nowrap">Free Consulting</span>
          </button>

          {/* 3. WhatsApp Now */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Now"
            className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 relative text-white font-semibold text-xs sm:text-sm leading-[22px] tracking-[0.02em] px-2 sm:px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-200 ease-out border border-[#25D366] bg-[radial-gradient(95%_60%_at_50%_75%,#12ac4c_0%,#25D366_100%)] shadow-[0px_4px_48px_-12px_#1187FF,inset_0px_1px_8px_-4px_#FFFFFF] active:scale-95 active:rotate-1 after:absolute after:top-[1px] after:right-[10%] after:w-[60%] after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-white/50 after:to-transparent hover:brightness-110"
          >
            <MessageCircle size={17} className="shrink-0 text-white" aria-hidden="true" />
            <span className="whitespace-nowrap">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileBottomNav;
