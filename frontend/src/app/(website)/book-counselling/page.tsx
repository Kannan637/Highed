import React from "react";
import Container from "@/components/ui/Container";
import LeadForm from "@/components/forms/LeadForm";
import {
  ShieldCheck,
  Award,
  Clock,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { constructMetadata } from "@/seo/metadata";

export const metadata = constructMetadata({
  title: "Book Free Study Abroad Counselling",
  description:
    "Book a free 1-on-1 counseling session with certified overseas education advisors. Get guidance on universities in Dubai, USA, UK, Canada, Australia, and Germany.",
  path: "/book-counselling",
  keywords: [
    "free counselling",
    "study abroad advisor",
    "overseas education guidance",
  ],
});

const destinations = [
  {
    name: "United Kingdom",
    short: "UK",
    description: "Top universities & career-focused programs",
  },
  {
    name: "United States",
    short: "USA",
    description: "World-class universities & STEM pathways",
  },
  {
    name: "Canada",
    short: "Canada",
    description: "Study, work & long-term opportunities",
  },
  {
    name: "Australia",
    short: "Australia",
    description: "Globally recognised degrees",
  },
  {
    name: "Germany",
    short: "Germany",
    description: "Leading technical & public universities",
  },
  {
    name: "Dubai",
    short: "UAE",
    description: "International education closer to home",
  },
];

const benefits = [
  {
    icon: Users,
    title: "1-on-1 Dedicated Advisor",
    description:
      "Get personalised guidance from profile evaluation through university selection and application.",
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    description:
      "Identify relevant university and scholarship opportunities based on your academic profile.",
  },
  {
    icon: Clock,
    title: "Application & Visa Support",
    description:
      "Get step-by-step support across applications, documentation and visa preparation.",
  },
];

export default function BookCounsellingPage() {
  return (
    <main className="bg-surface-neutral">
      <section className="py-14 sm:py-20 lg:py-24">
        <Container size="lg">
          <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">

            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}

            <div className="min-w-0">

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/10 bg-brand-primary/[0.06] px-3 py-1.5 text-xs font-semibold text-brand-primary">
                <ShieldCheck size={14} />
                <span>Free Study Abroad Counselling</span>
              </div>

              {/* Heading */}
              <h1 className="mt-6 max-w-2xl text-content-primary">
                Plan your journey to a university that fits your future.
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-xl text-body leading-relaxed text-content-secondary sm:text-body-large">
                Get personalised guidance on choosing the right country,
                university and course — with expert support throughout your
                study abroad journey.
              </p>

              {/* Small trust row */}
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-medium text-content-secondary">
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="text-brand-accent"
                  />
                  Free consultation
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="text-brand-accent"
                  />
                  Personalised guidance
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="text-brand-accent"
                  />
                  No obligation
                </div>
              </div>

              {/* =================================================
                  BENEFITS
              ================================================= */}

              <div className="mt-12 border-t border-border-default pt-8">
                <div className="space-y-7">
                  {benefits.map((benefit) => {
                    const Icon = benefit.icon;

                    return (
                      <div
                        key={benefit.title}
                        className="flex items-start gap-4"
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-primary">
                          <Icon size={19} strokeWidth={1.8} />
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-sm font-bold text-content-primary">
                            {benefit.title}
                          </h3>

                          <p className="mt-1 max-w-lg text-sm leading-relaxed text-content-secondary">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* =================================================
                  AUTO SCROLL DESTINATION CAROUSEL
              ================================================= */}

              <div className="mt-12 overflow-hidden border-t border-border-default pt-7">

                <div className="mb-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-primary">
                      Explore your options
                    </p>

                    <h2 className="mt-1 text-base font-bold text-content-primary">
                      Popular study destinations
                    </h2>
                  </div>

                  <ArrowRight
                    size={17}
                    className="shrink-0 text-content-secondary"
                  />
                </div>

                {/* Carousel viewport */}
                <div className="relative overflow-hidden">

                  {/* Left fade */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface-neutral to-transparent" />

                  {/* Right fade */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface-neutral to-transparent" />

                  {/* Scrolling track */}
                  <div className="flex w-max animate-[scroll_28s_linear_infinite] gap-3">

                    {[...destinations, ...destinations].map(
                      (destination, index) => (
                        <div
                          key={`${destination.short}-${index}`}
                          className="w-[190px] shrink-0 rounded-2xl border border-border-default bg-white p-4"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-sm font-bold text-content-primary">
                              {destination.short}
                            </span>

                            <span className="text-[10px] font-medium text-content-secondary">
                              Study
                            </span>
                          </div>

                          <p className="mt-3 text-xs font-medium text-content-primary">
                            {destination.name}
                          </p>

                          <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-content-secondary">
                            {destination.description}
                          </p>
                        </div>
                      ),
                    )}

                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                RIGHT — COUNSELLING FORM
            ===================================================== */}

            <div className="lg:sticky lg:top-8">

              <div className="overflow-hidden rounded-[24px] border border-border-default bg-white">

                {/* Form header */}
                <div className="border-b border-border-default px-6 py-6 sm:px-7">
                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-accent">
                        Start here
                      </p>

                      <h2 className="mt-2 text-xl font-bold tracking-tight text-content-primary sm:text-2xl">
                        Book your free counselling
                      </h2>

                      <p className="mt-2 max-w-md text-sm leading-relaxed text-content-secondary">
                        Tell us a little about yourself. Our advisor will
                        review your profile and get in touch.
                      </p>
                    </div>

                    <div className="hidden size-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary/[0.06] text-brand-primary sm:flex">
                      <ShieldCheck size={19} />
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="px-6 py-6 sm:px-7 sm:py-7">
                  <LeadForm
                    defaultCountry="General"
                    imageSrc={null}
                    title=""
                    subtitle=""
                  />
                </div>

                {/* Bottom reassurance */}
                <div className="border-t border-border-default bg-surface-neutral/50 px-6 py-4 sm:px-7">
                  <div className="flex items-center justify-center gap-2 text-center text-xs text-content-secondary">
                    <ShieldCheck
                      size={14}
                      className="shrink-0 text-brand-primary"
                    />

                    <span>
                      Your information is kept private and used only for
                      counselling.
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct call */}
              <div className="mt-5 text-center">
                <p className="text-xs text-content-secondary sm:text-sm">
                  Prefer speaking directly?{" "}
                  <a
                    href="tel:+919050180501"
                    className="font-semibold text-brand-primary hover:underline"
                  >
                    +91 90501 80501
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          AUTO SCROLL ANIMATION
      ========================================================= */}

      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 6px));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[scroll_28s_linear_infinite\\] {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}