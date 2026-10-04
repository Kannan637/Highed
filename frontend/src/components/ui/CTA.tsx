"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface CTASectionProps {
  className?: string;
  title?: string;
}

export default function CTASection({
  className = "",
  title = "Have Questions About Admissions or Visas?",
}: CTASectionProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* Outer wrapper */}
      <div className="relative overflow-visible">
        {/* CTA Container */}
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#1F2F64_0%,#253A7B_60%,#182550_100%)] shadow-sm">
          {/* 12-column layout */}
          <div className="relative z-10 grid min-h-[260px] grid-cols-12 items-center">
            {/* Left Content */}
            <div
              className="
                col-span-12
                flex
                flex-col
                items-center
                px-6
                py-8
                text-center
                sm:col-span-7
                sm:items-start
                sm:px-10
                sm:py-10
                sm:text-left
                md:col-span-8
                md:px-12
              "
            >
              <h2 className="text-white">
                {title}
              </h2>

              <p className="mt-2.5 max-w-md text-xs leading-relaxed text-white/80 sm:text-sm md:text-base">
                Skip the guesswork. Speak directly with a dedicated country
                specialist advisor today.
              </p>

              <div className="mt-6 w-full sm:w-auto">
                <LeadCTAButton
                  source="blog_cta"
                  variant="accent"
                  size="default"
                  iconBadge={<ArrowRight size={17} />}
                  className="w-full sm:w-auto"
                >
                  Get Free Expert Guidance
                </LeadCTAButton>
              </div>
            </div>

            {/* Right Consultant Image */}
            <div
              className="
                relative
                hidden
                sm:col-span-5
                sm:block
                sm:h-[310px]
                md:col-span-4
                md:h-[330px]
                lg:h-[350px]
              "
            >
              {/* Image extends above container */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  top-[-70px]
                  overflow-hidden
                  rounded-t-[100px]
                  rounded-b-3xl
                "
              >
                <Image
                  src="/images/CTA/ChatGPT Image Sep 18, 2026, 10_29_22 PM.webp"
                  alt="Study abroad consultant helping a student"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 40vw, 340px"
                />

                {/* Image blend */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#253A7B] via-[#253A7B]/50 to-transparent" />

                {/* Bottom fade */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#253A7B]/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}