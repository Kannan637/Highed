"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="relative z-[9999] w-full border-b border-gray-100 bg-white font-dmsans">
      {/* MAIN HEADER */}
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-5 sm:px-6">
        {/* LOGO */}
        <div className="shrink-0">
          <Link href="/" className="block">
            <Image
              src="/logo.png"
              alt="HighEd Logo"
              width={140}
              height={40}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>
        </div>

        {/* DESKTOP NAVIGATION */}
        <DesktopNavigation />

        {/* MOBILE CONTROLS */}
        <div className="relative z-[10000] flex items-center gap-2 md:hidden">
          {/* PHONE */}
          <a
            href="tel:+919050180501"
            aria-label="Call support"
            className="flex h-10 w-10 touch-manipulation items-center justify-center rounded-full bg-[#F3F5FA] text-[#253A7B] transition-all duration-300 active:scale-95"
          >
            <Phone size={17} fill="currentColor" strokeWidth={0} />
          </a>

          {/* HAMBURGER */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMobileMenuOpen}
            className="relative z-[10001] flex h-10 w-10 touch-manipulation select-none items-center justify-center rounded-xl border border-gray-200 bg-white text-[#121314] transition-all duration-300 active:scale-95"
          >
            {isMobileMenuOpen ? (
              <X size={22} strokeWidth={2} />
            ) : (
              <Menu size={22} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <MobileNavigation isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </nav>
  );
};

export default Navbar;
