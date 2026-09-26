"use client";

import React, { useState } from "react";
import {
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileCheck2,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Container from "@/components/ui/Container";
import EyebrowBadge from "@/components/ui/EyebrowBadge";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { cn } from "@/lib/utils";
import {
  CARD_BG_COLORS,
  CardDecorativeIcons,
} from "@/components/home/service-constants";

const applicationFeatures = [
  {
    icon: Building2,
    title: "Direct University Representation",
    description:
      "Direct official partnerships with 500+ premier institutions across the USA, UK, Canada, Australia, Ireland, and Europe ensuring direct admissions liaison.",
  },
  {
    icon: Zap,
    title: "100% Application Fee Waivers",
    description:
      "Save hundreds of dollars in university application fees with our exclusive partner waiver codes across dozens of top-ranked universities.",
  },
  {
    icon: Clock,
    title: "Expedited Offer Letter Turnaround",
    description:
      "Priority processing channels that deliver conditional and unconditional offer letters in as fast as 48 hours to 14 days for partner universities.",
  },
  {
    icon: Layers,
    title: "Multi-Portal Application Management",
    description:
      "End-to-end handling of UCAS (UK), Common App (USA), OUAC (Canada), and proprietary university portals with zero clerical errors.",
  },
  {
    icon: FileCheck2,
    title: "Credential Evaluation & WES Assistance",
    description:
      "Step-by-step guidance on transcript verification, grading scale conversions (GPA), and credential evaluation agencies like WES, ECE, and SpanTran.",
  },
  {
    icon: ShieldCheck,
    title: "Offer Conditions Clearance & I-20 / CAS",
    description:
      "Continuous tracking with university admissions officers to clear academic or financial conditions and expedite I-20 (USA) or CAS (UK) issuance.",
  },
];

const applicationSteps = [
  {
    step: "01",
    title: "Program & Intake Selection",
    description:
      "Finalize your prioritized course selections and target intake (Fall, Spring, Winter) with verified eligibility and deadline mapping.",
  },
  {
    step: "02",
    title: "Dossier Verification & Formatting",
    description:
      "Every document — transcripts, SOP, LORs, resume, and test score reports — is rigorously audited to adhere to strict institutional guidelines.",
  },
  {
    step: "03",
    title: "Portal Submission & Fee Waiver Applied",
    description:
      "Our certified filing desk submits your applications directly, applies fee waivers, and provides immediate confirmation tracking numbers.",
  },
  {
    step: "04",
    title: "Offer Acceptance & CAS / I-20 Issuance",
    description:
      "Review competing offer letters, evaluate scholarship grants, confirm your seat, and receive official immigration documentation.",
  },
];

const applicationChecklist = [
  {
    category: "Academic Dossier",
    items: [
      "10th, 12th & Degree Semester Marksheets",
      "Consolidated Transcript & Provisional Certificate",
      "Backlog Summary Certificate (if applicable)",
      "Medium of Instruction (MOI) Certificate",
    ],
  },
  {
    category: "Standardized Testing",
    items: [
      "IELTS / TOEFL / PTE / Duolingo Score Cards",
      "GRE / GMAT Official Score Reports (if required)",
      "Official score transmission to university codes",
      "English waiver documentation where applicable",
    ],
  },
  {
    category: "Admissions Essays & References",
    items: [
      "Course-specific Statement of Purpose (SOP)",
      "2 to 3 Academic & Professional LORs",
      "Standard International Academic CV",
      "Portfolio or Writing Sample (for Architecture/Design)",
    ],
  },
  {
    category: "Financial & Identification",
    items: [
      "Valid International Passport (min. 6-12 months)",
      "Bank balance certificate or loan sanction letter",
      "Sponsorship declaration letter",
      "Affidavit of financial support",
    ],
  },
];

const faqs = [
  {
    question: "How many universities can I apply to through HighEd?",
    answer:
      "Most students apply to 4 to 8 universities categorized across Ambitious, Target, and Safe tiers. There is no artificial restriction, and our counsellors help you optimize applications for the highest scholarship and acceptance probability.",
  },
  {
    question: "Do I have to pay university application fees?",
    answer:
      "Through HighEd's official university partnerships, we secure 100% application fee waivers for the majority of our partner universities, saving students typically between $400 and $1,200 in total application fees.",
  },
  {
    question: "How long does it take to receive an offer letter?",
    answer:
      "Partner universities with fast-track tie-ups often issue conditional offers in as little as 48 hours to 2 weeks. Comprehensive research universities and competitive programs typically take 3 to 6 weeks from dossier completion.",
  },
  {
    question: "Can I apply before receiving my final semester graduation results?",
    answer:
      "Yes. Most universities accept applications based on your penultimate semester marksheet. They will issue a 'Conditional Offer Letter', which converts to unconditional once your final graduation degree and marksheet are submitted.",
  },
  {
    question: "What is the difference between a Conditional and Unconditional offer?",
    answer:
      "A Conditional Offer means admission is reserved for you provided you satisfy specific criteria (e.g., maintaining a minimum final GPA, submitting language scores, or clearing financial checks). An Unconditional Offer confirms you have satisfied all criteria and can immediately book your seat.",
  },
];

export default function UniversityApplicationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full bg-white tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] [&_*]:[letter-spacing:var(--tracking-tight-5)]">
      {/* =========================================================
          HERO SECTION
      ========================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-[#1D2F64] to-[#12204C] py-16 text-white sm:py-20 lg:py-24">
        {/* Glows */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-accent/20 blur-[100px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-blue-400/10 blur-[100px]" />

        <Container size="lg" className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <EyebrowBadge className="mb-6">
              500+ Global Partner Universities
            </EyebrowBadge>

            <h1 className="text-white">
              Seamless University Application &amp; Offer Letter Assistance
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-body-large text-white/85">
              Skip the stress of complex admissions portals. Get direct application filing, exclusive fee waivers, fast-track offer turnaround, and 1-on-1 portal tracking for top universities worldwide.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <LeadCTAButton source="university_app_hero">
                Start Your Applications
              </LeadCTAButton>
            </div>

            {/* Quick stats pills */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["99.2% Acceptance", "Consistent track record across global intakes"],
                ["$1,000+ Avg Savings", "Application fee waivers across partner universities"],
                ["48h - 14 Days", "Expedited offer turnaround timeframes"],
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
          KEY FEATURES / APPLICATION ADVANTAGES
      ========================================================== */}
      <section className="bg-surface-neutral py-16 sm:py-20 lg:py-24">
        <Container size="lg">
          <div className="mx-auto max-w-2xl text-center">
            <EyebrowBadge>End-to-End Application Care</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              Why Apply Through HighEd?
            </h2>
            <p className="mt-4 text-content-secondary">
              We handle the entire admissions machinery so you can focus on your academics and interview preparation.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applicationFeatures.map((feature, index) => {
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
          APPLICATION ROADMAP (4 STEPS)
      ========================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container size="lg">
          <div className="mx-auto max-w-2xl text-center">
            <EyebrowBadge>Proven Execution</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              Your Journey from Dossier to Offer Letter
            </h2>
            <p className="mt-4 text-content-secondary">
              A synchronized 4-stage admissions protocol designed to maximize acceptance rates.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {applicationSteps.map((step) => (
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
          APPLICATION CHECKLIST MATRIX
      ========================================================== */}
      <section className="bg-surface-neutral py-16 sm:py-20 lg:py-24">
        <Container size="lg">
          <div className="mx-auto max-w-2xl text-center">
            <EyebrowBadge>Document Preparedness</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              Master Application Checklist
            </h2>
            <p className="mt-4 text-content-secondary">
              Here is everything needed to compile a bulletproof university application dossier.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {applicationChecklist.map((group) => (
              <div
                key={group.category}
                className="rounded-3xl border border-border-card bg-white p-6 shadow-xs"
              >
                <div className="flex items-center gap-2.5 border-b border-border-subtle pb-4">
                  <div className="size-2 rounded-full bg-brand-accent" />
                  <h3 className="font-heading text-body-large font-bold text-content-primary">
                    {group.category}
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-body-small text-content-secondary">
                      <CheckCircle2 className="size-4 shrink-0 text-brand-primary mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================
          FAQ ACCORDION
      ========================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container size="md">
          <div className="mx-auto max-w-2xl text-center">
            <EyebrowBadge>Frequently Asked Questions</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              University Applications FAQ
            </h2>
            <p className="mt-4 text-content-secondary">
              Get clarity on application deadlines, requirements, fee waivers, and offer turnaround times.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-border-default bg-surface-subtle/30 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-body-large font-medium text-content-primary pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-content-secondary transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-brand-primary" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-200 ease-in-out px-5 sm:px-6 ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-body-small text-content-secondary leading-relaxed">
                        {faq.answer}
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
          BOTTOM CTA BANNER
      ========================================================== */}
      <section className="bg-surface-neutral py-16 sm:py-20">
        <Container size="lg">
          <div className="relative overflow-hidden rounded-3xl bg-brand-primary px-6 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-accent/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-white">
                Ready to Apply to Your Dream Universities?
              </h2>
              <p className="mt-4 text-body-large text-white/85">
                Submit your profile now. Our dedicated admissions team will verify your eligibility, apply fee waivers, and file your applications with precision.
              </p>
              <div className="mt-8 flex justify-center">
                <LeadCTAButton source="university_app_bottom_cta">
                  Apply to Top Universities
                </LeadCTAButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
