"use client";

import React, { useState } from "react";
import {
  Compass,
  Target,
  TrendingUp,
  Award,
  Globe2,
  CheckCircle2,
  ChevronDown,
  Users,
  Briefcase,
} from "lucide-react";
import Container from "@/components/ui/Container";
import EyebrowBadge from "@/components/ui/EyebrowBadge";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { cn } from "@/lib/utils";
import {
  CARD_BG_COLORS,
  CardDecorativeIcons,
} from "@/components/home/service-constants";

const counsellingFeatures = [
  {
    icon: Users,
    title: "1-on-1 Certified Counselor Mentorship",
    description:
      "Get undivided attention from experienced study abroad advisors who evaluate your distinct academic history, test readiness, and career dreams.",
  },
  {
    icon: Target,
    title: "Holistic Profile Evaluation",
    description:
      "We analyze your GPAs, backlogs, extracurriculars, internships, and work experience to accurately identify your admissions competitiveness.",
  },
  {
    icon: Briefcase,
    title: "Career & Industry Mapping",
    description:
      "Align your degree with high-growth job sectors, post-study work visa rights, and permanent residency opportunities in your target destination.",
  },
  {
    icon: Globe2,
    title: "Multi-Country Comparative Analysis",
    description:
      "Compare the USA, UK, Canada, Australia, Ireland, and Germany side-by-side across tuition budgets, living costs, and job markets.",
  },
  {
    icon: TrendingUp,
    title: "Financial & ROI Planning",
    description:
      "Map out total investment expectations, cost of living estimates, scholarship avenues, and non-collateral education loan pathways.",
  },
  {
    icon: Award,
    title: "Standardized Test Strategy",
    description:
      "Personalized recommendations on whether you require IELTS, TOEFL, PTE, Duolingo, GRE, or GMAT — plus university fee waiver guidance.",
  },
];

const counsellingSteps = [
  {
    step: "01",
    title: "Discovery & Profile Assessment",
    description:
      "Share your transcripts, resume, budget parameters, and long-term aspirations during a structured discovery conversation.",
  },
  {
    step: "02",
    title: "Course & Specialization Shortlist",
    description:
      "Pinpoint future-ready STEM, business, or healthcare specializations tailored to global market demands and your strengths.",
  },
  {
    step: "03",
    title: "Ambitious, Target & Safe Shortlist",
    description:
      "Receive a data-backed 3-tier shortlist of 8 to 12 partner universities maximizing both acceptance odds and scholarship potential.",
  },
  {
    step: "04",
    title: "Application Roadmap & Execution",
    description:
      "Get a clear timeline for documentation, SOP drafting, recommendation requests, and priority intake submissions.",
  },
];

const faqs = [
  {
    question: "Is HighEd's career counselling really 100% free of charge?",
    answer:
      "Yes, completely free. As official representatives for 500+ global universities, our advisory and profile evaluation services are 100% funded by institutional partnerships. Students are never charged any consultation or application processing fee.",
  },
  {
    question: "When should I begin my study abroad counselling?",
    answer:
      "We recommend beginning counselling 8 to 12 months before your desired intake. This allows ample time for standardized tests (IELTS/PTE/GRE), profile enhancement, early-bird scholarship applications, and smooth student visa filing.",
  },
  {
    question: "Can I receive guidance if I haven't taken IELTS or GRE yet?",
    answer:
      "Absolutely. In fact, consulting with us before taking tests saves time and money: we can identify universities that offer English test waivers (MOI accepted) or GRE-optional programs matching your academic background.",
  },
  {
    question: "What if I have backlogs or an academic study gap?",
    answer:
      "Academic gaps and backlogs are common. Our certified counsellors specialize in presenting justifiable gap documentation, work experience portfolios, and targeting universities with flexible acceptance rubrics.",
  },
  {
    question: "Do you help with education loans and scholarships during counselling?",
    answer:
      "Yes. Financial feasibility is integrated into our first session. We calculate living costs, identify merit scholarships of up to 100% tuition, and connect you with leading NBFCs for education loans.",
  },
];

export default function CareerCounsellingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full bg-white tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] [&_*]:[letter-spacing:var(--tracking-tight-5)]">
      {/* =========================================================
          HERO SECTION
      ========================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-[#1D2F64] to-[#12204C] py-16 text-white sm:py-20 lg:py-24">
        {/* Decorative background glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-accent/20 blur-[100px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-blue-400/10 blur-[100px]" />

        <Container size="lg" className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <EyebrowBadge className="mb-6">
              Official University Representative
            </EyebrowBadge>

            <h1 className="text-white">
              Free Study Abroad Career Counselling &amp; Evaluation
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-body-large text-white/85">
              Build a personalized international education roadmap. Evaluate your academic background, pinpoint high-ROI programs, and unlock admission to 500+ partner universities worldwide.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <LeadCTAButton source="career_counselling_hero">
                Book Free Counselling Session
              </LeadCTAButton>
            </div>

            {/* Quick stats pills */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["10,000+ Students", "Successfully guided abroad"],
                ["500+ Universities", "Direct official representations"],
                ["100% Free Service", "Zero charges from start to departure"],
              ].map(([stat, label]) => (
                <div
                  key={stat}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4.5 backdrop-blur-sm"
                >
                  <div className="font-heading text-h5 text-white font-semibold">{stat}</div>
                  <div className="mt-1 text-caption text-white/70">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          SERVICES / WHAT WE EVALUATE
      ========================================================== */}
      <section className="bg-surface-neutral py-16 sm:py-20 lg:py-24">
        <Container size="lg">
          <div className="mx-auto max-w-2xl text-center">
            <EyebrowBadge>Comprehensive Guidance</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              Everything Covered in Your Strategy Session
            </h2>
            <p className="mt-4 text-content-secondary">
              Our certified mentors provide rigorous, unbiased guidance to find the exact university and program matching your qualifications.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {counsellingFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const cardBg = CARD_BG_COLORS[index % CARD_BG_COLORS.length];
              const DecorativeIcon =
                CardDecorativeIcons[index % CardDecorativeIcons.length];

              return (
                <div
                  key={feature.title}
                  className={cn(
                    "group/card relative isolate flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl p-7 sm:p-8",
                    "border border-black/[0.06]",
                    "shadow-[0_2px_8px_rgba(0,0,0,0.03)]",
                    "transition-all duration-300 ease-out",
                    "hover:-translate-y-1.5",
                    "hover:border-black/[0.12]",
                    "hover:shadow-[0_16px_32px_rgba(0,0,0,0.07)]"
                  )}
                  style={{
                    backgroundColor: cardBg,
                  }}
                >
                  {DecorativeIcon && (
                    <DecorativeIcon
                      aria-hidden="true"
                      className={cn(
                        "pointer-events-none absolute -right-10 -top-10 z-0",
                        "h-55 w-55",
                        "opacity-30",
                        "text-black/[0.08]",
                        "transition-all duration-500 ease-out",
                        "group-hover/card:scale-105",
                        "group-hover/card:text-black/[0.10]"
                      )}
                    />
                  )}

                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-xs transition-transform duration-300 group-hover/card:scale-105">
                        <Icon
                          className="size-6 text-brand-primary"
                          strokeWidth={2}
                        />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-center py-6">
                      <h3 className="card-title text-content-primary">
                        {feature.title}
                      </h3>

                      <p className="mt-3 text-body-small text-content-secondary leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================
          4-STEP COUNSELLING PROCESS
      ========================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container size="lg">
          <div className="mx-auto max-w-2xl text-center">
            <EyebrowBadge>Structured Methodology</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              How Your Roadmap is Developed
            </h2>
            <p className="mt-4 text-content-secondary">
              A transparent, 4-step framework tested with thousands of international admissions.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {counsellingSteps.map((step) => (
              <div
                key={step.step}
                className="relative flex flex-col justify-between rounded-3xl border border-border-default bg-surface-subtle/50 p-6 sm:p-7 transition-all duration-300 hover:bg-white hover:shadow-md"
              >
                <div>
                  <span className="inline-flex size-9 items-center justify-center rounded-xl bg-brand-primary text-body-small font-bold text-white">
                    {step.step}
                  </span>
                  <h3 className="card-title mt-5 text-content-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-body-small text-content-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================
          WHY CHOOSE HIGHED
      ========================================================== */}
      <section className="bg-surface-neutral py-16 sm:py-20 lg:py-24">
        <Container size="lg">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <EyebrowBadge>The HighEd Difference</EyebrowBadge>
              <h2 className="mt-4 text-content-primary">
                Unbiased Advisory with Guaranteed Transparency
              </h2>
              <p className="mt-4 text-body text-content-secondary leading-relaxed">
                Unlike traditional agents that restrict your choices to commission-incentivized colleges, HighEd operates with complete transparency. We prioritize your academic trajectory, job prospects, and budget above all else.
              </p>

              <div className="mt-8 space-y-3.5">
                {[
                  "Zero service charges or hidden fees throughout your journey",
                  "Direct tie-ups with 500+ world-class public and private universities",
                  "Dedicated single point of contact from counselling to pre-departure",
                  "High visa approval rate (98.4%+) backed by expert documentation teams",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-feedback-success mt-0.5" />
                    <span className="text-body-small text-content-primary font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9">
                <LeadCTAButton source="career_counselling_mid">
                  Claim Your Free Consultation
                </LeadCTAButton>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-border-default bg-white p-8 shadow-sm sm:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-icon-bg-primary text-brand-primary">
                    <Compass className="size-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="card-title text-content-primary">Session Overview</h3>
                    <p className="text-caption text-content-secondary">What you will receive</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 border-t border-border-light pt-6">
                  <div className="flex items-center justify-between text-body-small">
                    <span className="text-content-secondary">Session Duration:</span>
                    <strong className="text-content-primary font-medium">30 to 45 Minutes</strong>
                  </div>
                  <div className="flex items-center justify-between text-body-small">
                    <span className="text-content-secondary">Mode:</span>
                    <strong className="text-content-primary font-medium">Online (Google Meet/Zoom) or In-Office</strong>
                  </div>
                  <div className="flex items-center justify-between text-body-small">
                    <span className="text-content-secondary">Deliverable:</span>
                    <strong className="text-brand-accent font-medium">Personalized University Shortlist PDF</strong>
                  </div>
                  <div className="flex items-center justify-between text-body-small">
                    <span className="text-content-secondary">Fee:</span>
                    <strong className="text-feedback-success font-medium">₹0 (Completely Free)</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          FAQ ACCORDION
      ========================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container size="md">
          <div className="text-center">
            <EyebrowBadge>Got Questions?</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-content-secondary">
              Everything you need to know about our career counselling sessions.
            </p>
          </div>

          <div className="mt-10 divide-y divide-border-default rounded-3xl border border-border-default bg-white shadow-xs">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} className="px-6 sm:px-8">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors"
                  >
                    <span className="text-body font-medium text-content-primary">
                      {faq.question}
                    </span>
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-surface-subtle text-content-primary">
                      <ChevronDown
                        className={`size-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-5 pt-0">
                      <p className="text-body-small text-content-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================== */}
      <section className="bg-surface-neutral py-16 sm:py-20">
        <Container size="lg">
          <div className="rounded-[36px] bg-gradient-to-br from-brand-primary via-[#1F3168] to-[#12204C] p-8 sm:p-12 md:p-16 text-center text-white shadow-xl">
            <EyebrowBadge>Take the First Step</EyebrowBadge>
            <h2 className="mt-4 text-white">
              Ready to Shape Your Global Career?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-white/85">
              Speak with a senior study abroad counsellor today. We will evaluate your profile and map out the shortest route to your dream university.
            </p>
            <div className="mt-8 flex justify-center">
              <LeadCTAButton source="career_counselling_bottom">
                Book Free Profile Evaluation
              </LeadCTAButton>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
