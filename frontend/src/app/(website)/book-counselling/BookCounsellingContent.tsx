"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import Container from "@/components/ui/Container";
import LeadForm from "@/components/forms/LeadForm";

const destinations = [
  {
    country: "UK",
    title: "United Kingdom",
    text: "World-class universities",
  },
  {
    country: "USA",
    title: "United States",
    text: "STEM & career pathways",
  },
  {
    country: "CA",
    title: "Canada",
    text: "Study & career opportunities",
  },
  {
    country: "AU",
    title: "Australia",
    text: "Globally recognised degrees",
  },
  {
    country: "DE",
    title: "Germany",
    text: "Leading technical universities",
  },
  {
    country: "UAE",
    title: "Dubai",
    text: "International education",
  },
];

export default function BookCounsellingContent() {
  return (
    <main className="min-h-screen bg-[#EEF1F5] px-3 py-6 sm:px-5 sm:py-10 lg:px-8 lg:py-14">
      <Container size="lg">
        <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[24px] border border-black/[0.06] bg-white shadow-[0_24px_70px_rgba(20,35,60,0.12)]">

          <div className="grid min-h-[700px] lg:grid-cols-[42%_58%]">

            {/* =====================================================
                LEFT PANEL
            ===================================================== */}

            <section className="relative overflow-hidden bg-[#253A7B] text-white">

              {/* Background decoration */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-32 -top-32 size-[360px] rounded-full bg-white/[0.035]" />

                <div className="absolute -bottom-40 -left-32 size-[420px] rounded-full bg-[#E93F61]/[0.07]" />

                <div className="absolute right-12 top-1/2 size-40 rounded-full bg-white/[0.025]" />
              </div>

              <div className="relative flex h-full flex-col px-7 py-8 sm:px-9 sm:py-9 lg:px-10 lg:py-10">

                {/* Brand */}
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-white/10">
                    <GraduationCap size={17} />
                  </div>

                  <span className="text-sm font-bold tracking-[0.12em]">
                    HighEd
                  </span>
                </div>

                {/* Main copy */}
                <div className="mt-16 max-w-[420px] lg:mt-20">

                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80">
                    <Sparkles size={12} />
                    Free counselling
                  </div>

                  <h1 className="text-[38px] font-bold leading-[1.08] tracking-[-0.035em] sm:text-[46px] lg:text-[48px]">
                    Let&apos;s plan your
                    <br />
                    study abroad
                    <br />
                    journey.
                  </h1>

                  <p className="mt-6 max-w-[390px] text-sm leading-7 text-white/65 sm:text-[15px]">
                    Get personalised guidance on choosing the right
                    country, university and course — from your first
                    shortlist to your final application.
                  </p>
                </div>

                {/* Trust points */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-2.5 text-xs text-white/75">
                    <CheckCircle2
                      size={15}
                      className="shrink-0 text-[#E93F61]"
                    />
                    Free 1-on-1 counselling
                  </div>

                  <div className="flex items-center gap-2.5 text-xs text-white/75">
                    <CheckCircle2
                      size={15}
                      className="shrink-0 text-[#E93F61]"
                    />
                    Personalised university guidance
                  </div>

                  <div className="flex items-center gap-2.5 text-xs text-white/75">
                    <CheckCircle2
                      size={15}
                      className="shrink-0 text-[#E93F61]"
                    />
                    Application &amp; visa support
                  </div>
                </div>

                {/* =================================================
                    BOTTOM CONTENT
                ================================================= */}

                <div className="mt-auto pt-12">

                  {/* Testimonial */}
                  <div className="rounded-2xl bg-[#17306E] p-5">

                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <span
                          key={item}
                          className="text-[11px] text-[#F4D35E]"
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="mt-3 text-xs leading-6 text-white/80">
                      “The counsellor understood my profile and helped
                      me shortlist universities that actually matched
                      my goals.”
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex size-8 items-center justify-center rounded-full bg-white/10">
                        <Users size={14} />
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold text-white">
                          Student Applicant
                        </p>

                        <p className="text-[10px] text-white/45">
                          Study Abroad Aspirant
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      DESTINATION AUTO SCROLLER
                  ================================================= */}

                  <div className="mt-7 overflow-hidden">

                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/45">
                        Popular destinations
                      </span>

                      <ArrowRight
                        size={13}
                        className="text-white/40"
                      />
                    </div>

                    <div className="relative overflow-hidden">

                      <motion.div
                        className="flex w-max gap-2.5"
                        animate={{
                          x: ["0%", "-50%"],
                        }}
                        transition={{
                          duration: 24,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        {[...destinations, ...destinations].map(
                          (destination, index) => (
                            <div
                              key={`${destination.country}-${index}`}
                              className="flex w-[145px] shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2.5"
                            >
                              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[9px] font-bold text-white">
                                {destination.country}
                              </div>

                              <div className="min-w-0">
                                <p className="truncate text-[10px] font-semibold text-white/90">
                                  {destination.title}
                                </p>

                                <p className="mt-0.5 truncate text-[9px] text-white/40">
                                  {destination.text}
                                </p>
                              </div>
                            </div>
                          ),
                        )}
                      </motion.div>

                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =====================================================
                RIGHT FORM PANEL
            ===================================================== */}

            <section className="bg-white">

              <div className="px-6 py-7 sm:px-10 sm:py-9 lg:px-12 lg:py-10">

                {/* Progress indicator */}
                <div className="mb-12">

                  <div className="flex items-center">

                    {/* Step 1 */}
                    <div className="flex items-center">
                      <div className="flex size-2.5 items-center justify-center rounded-full bg-[#253A7B] ring-4 ring-[#253A7B]/10" />
                    </div>

                    <div className="h-px flex-1 bg-neutral-200" />

                    {/* Step 2 */}
                    <div className="flex items-center">
                      <div className="size-2 rounded-full bg-neutral-300" />
                    </div>

                    <div className="h-px flex-1 bg-neutral-200" />

                    {/* Step 3 */}
                    <div className="flex items-center">
                      <div className="size-2 rounded-full bg-neutral-300" />
                    </div>

                    <div className="h-px flex-1 bg-neutral-200" />

                    {/* Step 4 */}
                    <div className="flex items-center">
                      <div className="size-2 rounded-full bg-neutral-300" />
                    </div>
                  </div>

                  <div className="mt-3 flex justify-between text-[9px] font-medium uppercase tracking-[0.12em] text-neutral-400">
                    <span className="text-[#253A7B]">
                      Profile
                    </span>

                    <span>Preferences</span>

                    <span>Guidance</span>

                    <span>Connect</span>
                  </div>
                </div>

                {/* Form heading */}
                <div className="mb-7 max-w-lg">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#E93F61]">
                    Step 01
                  </p>

                  <h2 className="mt-2 text-[27px] font-bold tracking-[-0.025em] text-[#121314] sm:text-[30px]">
                    Let&apos;s get started
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    Tell us a little about yourself and your study
                    abroad plans.
                  </p>
                </div>

                {/* Form */}
                <div className="[&_input]:rounded-lg [&_input]:border-neutral-200 [&_input]:bg-white [&_input]:shadow-none [&_select]:rounded-lg [&_select]:border-neutral-200 [&_select]:bg-white [&_select]:shadow-none">
                  <LeadForm
                    defaultCountry="General"
                    imageSrc={null}
                    title=""
                    subtitle=""
                  />
                </div>

                {/* Privacy reassurance */}
                <div className="mt-7 flex items-start gap-2.5 border-t border-neutral-100 pt-5">
                  <ShieldCheck
                    size={15}
                    className="mt-0.5 shrink-0 text-[#253A7B]"
                  />

                  <p className="text-[10px] leading-5 text-neutral-400">
                    Your information is secure and will only be used
                    to connect you with a HighEd education advisor.
                  </p>
                </div>

                {/* Direct contact */}
                <div className="mt-5 text-center">
                  <p className="text-xs text-neutral-400">
                    Prefer to call us?{" "}
                    <a
                      href="tel:+919050180501"
                      className="font-semibold text-[#253A7B] hover:underline"
                    >
                      +91 90501 80501
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
