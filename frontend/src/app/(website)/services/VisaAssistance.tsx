"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Clock,
  FileCheck2,
  MessageSquare,
  ShieldAlert,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import EyebrowBadge from "@/components/ui/EyebrowBadge";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { cn } from "@/lib/utils";
import {
  CARD_BG_COLORS,
  CardDecorativeIcons,
} from "@/components/home/service-constants";

const visaFeatures = [
  {
    icon: ShieldCheck,
    title: "Country-Specific Visa Filing",
    description:
      "Specialized filing protocols for USA (F-1), UK (Student Route), Canada (SDS/Non-SDS), Australia (Subclass 500), Ireland, and Germany (Type D).",
  },
  {
    icon: MessageSquare,
    title: "1-on-1 Visa Mock Interviews",
    description:
      "Realistic interview drills simulating visa officer inquiries, clarifying ties to home country, academic rationale, and funding verification.",
  },
  {
    icon: FileCheck2,
    title: "Financial Solvency Structuring",
    description:
      "Meticulous review of bank savings, fixed deposits, education loan sanctions, CA net-worth certificates, and sponsorship affidavits.",
  },
  {
    icon: Clock,
    title: "Slot Booking & Biometrics Assistance",
    description:
      "Real-time monitoring and coordination for high-demand US consulate interview slots, VFS Global appointments, and TLScontact centers.",
  },
  {
    icon: ShieldAlert,
    title: "Refusal Analysis & Re-application",
    description:
      "Forensic case analysis of prior 214(b) or study permit refusals, addressing flagged concerns with customized remediation strategies.",
  },
  {
    icon: UserCheck,
    title: "Dependent & Family Visa Support",
    description:
      "Guidance for spouse dependent visas (F-2, Tier-4 Dependant, OWP Canada), post-study work rights, and family travel arrangements.",
  },
];

const visaSteps = [
  {
    step: "01",
    title: "Document Verification",
    description:
      "Review official admissions documentation (I-20, CAS, CoE, LOA) alongside academic certificates and immigration history.",
  },
  {
    step: "02",
    title: "Financial Dossier Preparation",
    description:
      "Collate liquid funds, sponsor documentation, loan sanction letters, and tax returns meeting embassy solvency standards.",
  },
  {
    step: "03",
    title: "Portal Submission & Slot Booking",
    description:
      "Submit official visa applications (DS-160, UKVI, IRCC Portal) and secure early biometric and consulate interview slots.",
  },
  {
    step: "04",
    title: "Rigorous Mock Interview Prep",
    description:
      "Undergo 1-on-1 mock interviews addressing program purpose, post-graduation career trajectory, and strong home ties.",
  },
  {
    step: "05",
    title: "Interview Day & Passport Stamping",
    description:
      "Walk into your interview with complete confidence, organized document folders, and clear communication techniques.",
  },
];

const countryVisaMatrix = [
  {
    country: "United States (F-1)",
    keyDoc: "Form I-20 & SEVIS I-901 Fee Receipt",
    fundsReq: "1 Year Tuition + Living Expenses (Liquid Funds)",
    process: "Online DS-160 filing, OFC Biometrics, and In-Person Consulate Interview",
    badge: "Interview Mandatory",
  },
  {
    country: "United Kingdom (Student Route)",
    keyDoc: "Confirmation of Acceptance for Studies (CAS)",
    fundsReq: "Remaining Tuition + 9 Months Living (£1,334/mo London, £1,023/mo Outer)",
    process: "Online UKVI submission, TB clearance certificate, Biometrics at VFS",
    badge: "Points-Based System",
  },
  {
    country: "Canada (Study Permit / SDS)",
    keyDoc: "Letter of Acceptance (LOA) + Provincial Attestation (PAL)",
    fundsReq: "1st Year Tuition Paid + GIC ($20,635 CAD)",
    process: "Online IRCC portal filing, Upfront Medical Exam, Biometrics appointment",
    badge: "Direct Stream (SDS)",
  },
  {
    country: "Australia (Subclass 500)",
    keyDoc: "Confirmation of Enrolment (CoE)",
    fundsReq: "1 Year Tuition + AUD $29,710 Living Costs + OSHC Insurance",
    process: "ImmiAccount submission, Genuine Student (GS) statement, Biometrics & Health exam",
    badge: "GS Assessment",
  },
  {
    country: "Germany (National Visa Type D)",
    keyDoc: "University Admission Letter + APS Certificate",
    fundsReq: "Blocked Account (Sperrkonto) with €11,904/year",
    process: "APS verification, CSP portal appointment booking, Embassy/VFS submission",
    badge: "APS Verification",
  },
];

const faqs = [
  {
    question: "What is HighEd's student visa success rate?",
    answer:
      "We maintain a 98.4% visa approval rate across all major study abroad destinations. This high success rate is achieved through rigorous document cross-verification, genuine financial audits, and exhaustive mock interview preparation.",
  },
  {
    question: "When should I start the visa application process?",
    answer:
      "You should start immediately after receiving your unconditional offer and official immigration document (I-20 for USA, CAS for UK, PAL/LOA for Canada, CoE for Australia). Typically, you can apply up to 6 months before your course start date for the UK and USA, and 3-4 months prior for Canada and Australia.",
  },
  {
    question: "How do mock visa interviews help with the US F-1 visa?",
    answer:
      "The US consular interview lasts just 2 to 3 minutes. Visa officers evaluate your academic intent, financial credibility, and intention to return home. Our former visa specialists conduct real-time simulations to help you articulate concise, confident, and truthful answers under pressure.",
  },
  {
    question: "Can I apply for a student visa with an education loan?",
    answer:
      "Yes. Most embassies fully recognize education loan sanction letters from nationalized banks, private banks, and registered NBFCs. We verify that your loan sanction letter contains the exact disbursement clauses required by embassy officers.",
  },
  {
    question: "What if my student visa was previously rejected?",
    answer:
      "A previous refusal is not the end of your study abroad dream. We conduct a thorough analysis of your refusal notice (such as INA 214(b) for the US), review your previously submitted documents, identify the exact gaps, and restructure your re-application to address the officer's concerns.",
  },
];

export default function VisaAssistancePage() {
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
              98.4% Visa Success Rate
            </EyebrowBadge>

            <h1 className="text-white">
              End-to-End Student Visa Guidance &amp; Mock Interview Coaching
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-body-large text-white/85">
              Navigate stringent embassy compliance with zero room for error. Complete documentation filing, rigorous financial vetting, and 1-on-1 interview simulations for the USA, UK, Canada, Australia, and Europe.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <LeadCTAButton source="visa_assistance_hero">
                Book Free Visa Consultation
              </LeadCTAButton>
            </div>

            {/* Quick stats pills */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["98.4% Approval", "Industry-leading visa clearance rate"],
                ["10,000+ Visas", "Successfully stamped across 20+ countries"],
                ["1-on-1 Mock Sessions", "Simulated drills with visa specialists"],
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
          KEY FEATURES
      ========================================================== */}
      <section className="bg-surface-neutral py-16 sm:py-20 lg:py-24">
        <Container size="lg">
          <div className="mx-auto max-w-2xl text-center">
            <EyebrowBadge>Comprehensive Embassy Protocol</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              Full-Spectrum Visa Assistance
            </h2>
            <p className="mt-4 text-content-secondary">
              From the day you receive your offer letter to passport stamping, we leave no detail unchecked.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visaFeatures.map((feature, index) => {
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
          COUNTRY VISA COMPARISON MATRIX
      ========================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container size="lg">
          <div className="mx-auto max-w-2xl text-center">
            <EyebrowBadge>Country Guidelines</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              Key Visa Requirements by Destination
            </h2>
            <p className="mt-4 text-content-secondary">
              A quick reference to the immigration frameworks across top international student destinations.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {countryVisaMatrix.map((item) => (
              <div
                key={item.country}
                className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 rounded-3xl border border-border-card bg-surface-subtle/40 p-6 sm:p-7 transition-all duration-300 hover:border-brand-primary/25 hover:bg-white hover:shadow-sm"
              >
                <div className="lg:w-1/4">
                  <span className="inline-flex rounded-full bg-brand-primary/10 px-3 py-1 text-caption font-semibold text-brand-primary mb-2">
                    {item.badge}
                  </span>
                  <h3 className="font-heading text-body-large font-bold text-content-primary">
                    {item.country}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-2/3">
                  <div>
                    <div className="text-caption font-semibold uppercase text-content-secondary tracking-wider">
                      Required Documents
                    </div>
                    <p className="mt-1 text-body-small text-content-primary font-medium">
                      {item.keyDoc}
                    </p>
                    <p className="mt-1 text-caption text-content-secondary">
                      {item.process}
                    </p>
                  </div>
                  <div>
                    <div className="text-caption font-semibold uppercase text-content-secondary tracking-wider">
                      Proof of Funds
                    </div>
                    <p className="mt-1 text-body-small text-content-primary font-medium">
                      {item.fundsReq}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================
          5-STEP VISA ROADMAP
      ========================================================== */}
      <section className="bg-surface-neutral py-16 sm:py-20 lg:py-24">
        <Container size="lg">
          <div className="mx-auto max-w-2xl text-center">
            <EyebrowBadge>Proven 5-Stage Protocol</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              Your Visa Success Pathway
            </h2>
            <p className="mt-4 text-content-secondary">
              A systematic roadmap designed to eliminate errors and secure timely approvals.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {visaSteps.map((step) => (
              <div
                key={step.step}
                className="relative flex flex-col justify-between rounded-3xl border border-border-default bg-white p-6 transition-all duration-300 hover:shadow-md"
              >
                <div>
                  <span className="inline-flex size-9 items-center justify-center rounded-xl bg-brand-primary text-body-small font-bold text-white">
                    {step.step}
                  </span>
                  <h3 className="card-title mt-5 text-content-primary text-base">
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
          FAQ ACCORDION
      ========================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container size="md">
          <div className="mx-auto max-w-2xl text-center">
            <EyebrowBadge>Student Questions</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              Frequently Asked Questions About Student Visas
            </h2>
            <p className="mt-4 text-content-secondary">
              Everything you need to know about financial solvency, visa timelines, and interview preparation.
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
                Secure Your Visa with Expert Confidence
              </h2>
              <p className="mt-4 text-body-large text-white/85">
                Join thousands of students who cleared their visas on their first attempt. Get personalized document audits and mock interview sessions today.
              </p>
              <div className="mt-8 flex justify-center">
                <LeadCTAButton source="visa_assistance_bottom_cta">
                  Schedule Your Visa Strategy Session
                </LeadCTAButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
