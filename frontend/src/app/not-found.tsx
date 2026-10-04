"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-[#F5F2EC] px-6 py-12">
      <section className="relative flex w-full max-w-[760px] flex-col items-center text-center">
        {/* =========================
            BRAND LOGO
        ========================== */}
        <Link
          href="/"
          className="mb-8 inline-block transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/logos/Highed Logo/Highed.png"
            alt="HighEd Logo"
            width={140}
            height={40}
            priority
            className="h-8 w-auto object-contain sm:h-9"
          />
        </Link>

        {/* =========================
            404 ILLUSTRATION
        ========================== */}
        <div className="relative mx-auto flex w-full max-w-[460px] items-center justify-center sm:max-w-[560px] md:max-w-[620px]">
          <Image
            src="/images/Error/404 Page.webp"
            alt="404 - Page Not Found"
            width={901}
            height={329}
            priority
            className="h-auto w-full select-none object-contain drop-shadow-xs pointer-events-none"
          />
        </div>

        {/* =========================
            HEADING
        ========================== */}
        <h1 className="mt-8 font-sans text-[22px] font-bold leading-[1.25] tracking-[-0.025em] text-[#121314] sm:text-[26px]">
          Oops! This page is on a different journey.
        </h1>

        {/* =========================
            DESCRIPTION
        ========================== */}
        <p className="mt-2.5 max-w-[480px] font-sans text-[14px] font-normal leading-[1.6] text-[#666666] sm:text-[15px]">
          The destination you’re looking for doesn’t exist or has been moved.
          Let’s get your study abroad plans back on course.
        </p>

        {/* =========================
            ACTIONS
        ========================== */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="/"
            className="btn-motion group inline-flex h-11 items-center gap-3 rounded-full bg-[#E63A5F] pl-5 pr-1.5 font-sans text-[14px] font-semibold text-white shadow-sm hover:bg-[#9F1632] hover:shadow-md"
          >
            <span>Back to Home</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight
                className="h-4 w-4 text-[#E63A5F]"
                strokeWidth={2.5}
              />
            </span>
          </Link>

          <Link
            href="/study-in"
            className="btn-motion inline-flex h-11 items-center gap-2 rounded-full border border-black/10 bg-white/80 px-5 font-sans text-[14px] font-medium text-[#121314] backdrop-blur-xs hover:border-[#253A7B] hover:bg-white hover:text-[#253A7B]"
          >
            <Compass className="h-4 w-4 text-[#253A7B]" />
            <span>Explore Countries</span>
          </Link>
        </div>
      </section>
    </main>
  );
}