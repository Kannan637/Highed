"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

import { siteConfig } from "@/config/site.config";

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
            href={`tel:${siteConfig.contact.phone}`}
            aria-label={`Call HighEd at ${siteConfig.contact.formattedPhone}`}
            className="btn-motion flex size-12 touch-manipulation items-center justify-center rounded-full bg-[#F3F5FA] text-brand-primary"
          >
            <Phone size={18} fill="currentColor" strokeWidth={0} aria-hidden="true" />
          </a>


          {/* HAMBURGER */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMobileMenuOpen}
            className="btn-motion relative z-[10001] flex size-12 touch-manipulation select-none items-center justify-center rounded-xl border border-border bg-white text-foreground cursor-pointer"
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
