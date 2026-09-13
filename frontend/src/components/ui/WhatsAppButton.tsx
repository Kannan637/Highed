"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site.config";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = siteConfig.contact.phone.replace(/[^0-9]/g, ""),
  defaultMessage = "Hello HighEd! I would like to get free counseling for studying abroad.",
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPing, setShowPing] = useState(true);

  useEffect(() => {
    // Limit ping animation to 3 iterations (3s) to prevent GPU battery drain
    const timer = setTimeout(() => {
      setShowPing(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const cleanPhone = phoneNumber.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip on hover */}
      <div
        className={`hidden sm:flex items-center rounded-full bg-neutral-900/90 backdrop-blur-xs px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-all duration-200 pointer-events-none ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2"
        }`}
      >
        <span>Chat on WhatsApp</span>
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with an advisor on WhatsApp"
        className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] hover:shadow-2xl active:scale-95"
      >
        {/* Subtle pulsing ambient ring (stops after 3 iterations) */}
        {showPing && (
          <span
            className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none group-hover:opacity-0"
            style={{ animationIterationCount: 3 }}
          />
        )}

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 transition-transform duration-300 group-hover:scale-105"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.2.3-.777.978-.953 1.179-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.201-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.677-1.633-.928-2.235-.244-.587-.492-.507-.677-.517-.175-.01-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.029-1.054 2.509 1.079 2.91 1.229 3.111c.15.2 2.124 3.244 5.145 4.549.719.31 1.28.496 1.718.636.722.23 1.378.197 1.898.12.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.175-1.43-.075-.125-.276-.2-.577-.351zM12.04 21.78c-1.74 0-3.41-.46-4.89-1.33l-.35-.21-3.63.95.97-3.54-.23-.37A9.85 9.85 0 0 1 2.25 12c0-5.41 4.39-9.81 9.79-9.81 2.61 0 5.07 1.02 6.92 2.87 1.85 1.85 2.87 4.31 2.87 6.92 0 5.41-4.4 9.8-9.79 9.8zm8.33-16.73A11.75 11.75 0 0 0 12.04 0C5.46 0 .11 5.35.11 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.29-1.65a11.88 11.88 0 0 0 5.75 1.48h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.61-8.45z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
