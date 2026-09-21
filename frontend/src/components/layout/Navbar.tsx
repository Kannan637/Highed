"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
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
    <nav className="relative z-[9999] w-full border-b border-border-default bg-white font-body">
      {/* MAIN HEADER */}
      <Container size="lg" className="flex h-[72px] items-center justify-between">
        {/* LOGO */}
        <div className="shrink-0">
          <Link href="/" className="block">
            <Image
              src="/logos/Highed Logo/Highed.png"
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
            className="flex h-11 w-11 touch-manipulation items-center justify-center rounded-full bg-[#F3F5FA] text-brand-primary transition-all duration-300 active:scale-95"
          >
            <Phone size={17} fill="currentColor" strokeWidth={0} aria-hidden="true" />
          </a>

          {/* HAMBURGER */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMobileMenuOpen}
            className="relative z-[10001] flex h-11 w-11 touch-manipulation select-none items-center justify-center rounded-xl border border-gray-200 bg-white text-content-primary transition-all duration-300 active:scale-95"
          >
            {isMobileMenuOpen ? (
              <X size={22} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Menu size={22} strokeWidth={2} aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* MOBILE MENU DRAWER */}
      <MobileNavigation isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </nav>
  );
};

export default Navbar;
