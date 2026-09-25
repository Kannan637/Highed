import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { Badge } from "@/components/ui/Badge";

interface CTASectionProps {
  className?: string;
}

export default function CTASection({ className = "" }: CTASectionProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* Outer wrapper must allow image to escape from the top */}
      <div className="relative overflow-visible">
        {/* CTA Container */}
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#1F2F64_0%,#253A7B_60%,#182550_100%)] shadow-sm">

          {/* Material 3 expressive background shapes */}
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            {/* Ambient glow */}
            <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-blue-300/10 blur-3xl" />
            <div className="absolute -right-10 bottom-[-80px] h-64 w-64 rounded-full bg-[#E93F61]/15 blur-3xl" />

            {/* 4-point expressive star */}
            <svg
              className="absolute left-8 top-8 h-12 w-12 rotate-12 text-[#E93F61]/40 sm:left-12 sm:top-10"
              viewBox="0 0 48 48"
              fill="currentColor"
            >
              <path d="M24 0C24 13.2548 34.7452 24 48 24C34.7452 24 24 34.7452 24 48C24 34.7452 13.2548 24 0 24C13.2548 24 24 13.2548 24 0Z" />
            </svg>

            {/* Large expressive blob */}
            <svg
              className="absolute -bottom-16 left-[28%] h-32 w-32 rotate-12 text-white/[0.06]"
              viewBox="0 0 120 120"
              fill="currentColor"
            >
              <path d="M28 17C45 3 74 8 94 25C114 42 117 73 101 94C85 115 53 116 31 103C9 90 -5 61 6 40C11 30 19 23 28 17Z" />
            </svg>

            {/* Dashed Material 3 shape */}
            <svg
              className="absolute bottom-[-22px] left-[42%] h-24 w-24 -rotate-12 text-white/10"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="8 6"
            >
              <rect x="10" y="10" width="80" height="80" rx="28" />
            </svg>

            {/* Concentric expressive ring */}
            <svg
              className="absolute right-[30%] top-8 h-16 w-16 rotate-45 text-[#D6B66A]/35"
              viewBox="0 0 60 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <circle cx="30" cy="30" r="22" strokeDasharray="4 4" />
              <circle cx="30" cy="30" r="10" />
            </svg>

            {/* Small floating dots */}
            <div className="absolute right-[45%] top-12 h-3 w-3 rounded-full bg-[#E93F61]/40" />
            <div className="absolute bottom-8 left-[48%] h-2 w-2 rounded-full bg-white/20" />

            {/* Organic pill */}
            <svg
              className="absolute right-10 bottom-[-20px] h-20 w-32 rotate-[-18deg] text-white/[0.06]"
              viewBox="0 0 140 80"
              fill="currentColor"
            >
              <path d="M28 8C48 -2 92 2 112 17C132 32 136 56 119 68C102 80 61 77 36 68C11 59 -5 39 5 23C10 16 18 11 28 8Z" />
            </svg>
          </div>

          {/* 12-column layout */}
          <div className="relative z-10 grid min-h-[260px] grid-cols-12 items-center">

            {/* Left content */}
            <div className="col-span-12 flex flex-col items-center px-6 py-8 text-center sm:col-span-7 sm:items-start sm:px-10 sm:py-10 sm:text-left md:col-span-8 md:px-12">

              <Badge variant="inverse" size="sm" className="mb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                <span>Free 1-on-1 Consultation</span>
              </Badge>

              <h2 className="font-heading text-xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-2xl md:text-3xl">
                Have Questions About{" "}
                <span className="relative inline-block whitespace-nowrap">
                  Admissions

                  <svg
                    className="absolute -bottom-1.5 left-0 w-full"
                    viewBox="0 0 140 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M4 8C31 2 82 1 136 6"
                      stroke="#E93F61"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                or Visas?
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

            {/* Right consultant */}
            <div
              className="
                relative hidden
                sm:col-span-5 sm:block
                sm:h-[310px]
                md:col-span-4
                md:h-[330px]
                lg:h-[350px]
              "
            >
              {/* Image extends ABOVE container */}
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
