"use client";

import React, { useState } from "react";
import {
  Banknote,
  ShieldCheck,
  ChevronDown,
  Clock3,
  Percent,
  FileCheck2,
  Building,
} from "lucide-react";
import Container from "@/components/ui/Container";
import EyebrowBadge from "@/components/ui/EyebrowBadge";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { cn } from "@/lib/utils";
import {
  CARD_BG_COLORS,
  CardDecorativeIcons,
} from "@/components/home/service-constants";

const loanFeatures = [
  {
    icon: Banknote,
    title: "Collateral-Free Loans up to ₹75 Lakhs",
    description:
      "Secure high-value unsecured loans without pledging property or fixed deposits. Assessed primarily on student merit and co-applicant income.",
  },
  {
    icon: Building,
    title: "Secured Loans up to ₹1.5 Crore",
    description:
      "Opt for property-backed or FD-backed loans with public & private banks at our lowest subsidized interest rates starting from 8.5% p.a.",
  },
  {
    icon: FileCheck2,
    title: "Pre-Visa Sanction Letters",
    description:
      "Receive official bank sanction letters essential for issuing I-20 (USA), CAS (UK), and visa financial proof before visa appointment.",
  },
  {
    icon: ShieldCheck,
    title: "100% Cost Coverage",
    description:
      "Fund your tuition fees, living expenses, health insurance (OSHC/IHS), laptop allowance, flight tickets, and books all in one loan.",
  },
  {
    icon: Clock3,
    title: "Fast-Track 3 to 7 Day Approval",
    description:
      "Digital verification and priority underwriting ensure your sanction letter is ready in days, avoiding university deposit deadlines.",
  },
  {
    icon: Percent,
    title: "Moratorium Period Repayment",
    description:
      "Enjoy zero or partial interest payments during your entire course duration plus an additional 6 to 12 months after graduation.",
  },
];

const loanPartners = [
  "HDFC Credila",
  "Avanse Financial",
  "InCred",
  "State Bank of India (SBI)",
  "Axis Bank",
  "Bank of Baroda",
  "ICICI Bank",
  "Prodigy Finance",
  "Auxilo",
  "MPOWER Financing",
];

const loanSteps = [
  {
    step: "01",
    title: "Eligibility Evaluation",
    description:
      "Share your admit letter, academic scores, and co-applicant profile for instant eligibility matching across our partner network.",
  },
  {
    step: "02",
    title: "Lender Rate Comparison",
    description:
      "We compare sanction terms, interest rates, processing fees, and margin money across 10+ banks to pick your ideal loan offer.",
  },
  {
    step: "03",
    title: "Doorstep Document Pickup",
    description:
      "Submit KYC, income, and university proof with assistance from our dedicated banking relationship manager.",
  },
  {
    step: "04",
    title: "Sanction & Direct Disbursement",
    description:
      "Receive your official sanction letter, followed by direct university wire transfers when your semester fees are due.",
  },
];

const faqs = [
  {
    question: "Can I get an education loan without pledging collateral or property?",
    answer:
      "Yes. Non-collateral (unsecured) loans up to ₹75 Lakhs are available from leading NBFCs like HDFC Credila, Avanse, and InCred for prime university admits in the USA, UK, Canada, Australia, and Germany based on your academic profile and co-signer's income.",
  },
  {
    question: "What is a pre-visa loan sanction letter and why is it necessary?",
    answer:
      "A pre-visa sanction letter confirms that a recognized financial institution has approved your education loan. It is accepted by embassies and immigration authorities as liquid proof of funds for visa clearance.",
  },
  {
    question: "What expenses are covered under the education loan?",
    answer:
      "Up to 100% of study abroad costs can be covered: tuition fees, on-campus or off-campus accommodation, monthly living stipends, student visa charges, mandatory health insurance, and roundtrip flight tickets.",
  },
  {
    question: "What is the moratorium period?",
    answer:
      "The moratorium period is a repayment holiday extending throughout your entire course duration plus 6 to 12 months post-graduation. Full EMI repayment begins only after you finish studies and secure employment.",
  },
  {
    question: "Does HighEd charge any fee for helping with education loans?",
    answer:
      "No. HighEd provides complete education loan assistance completely free of charge. You get direct access to negotiated interest rates without paying any processing markup.",
  },
];

export default function EducationLoanPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full bg-white tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] [&_*]:[letter-spacing:var(--tracking-tight-5)]">
      {/* =========================================================
          HERO SECTION
      ========================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-[#1D2F64] to-[#12204C] py-16 text-white sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-accent/20 blur-[100px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-blue-400/10 blur-[100px]" />

        <Container size="lg" className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <EyebrowBadge className="mb-6">
              10+ Leading Bank &amp; NBFC Partners
            </EyebrowBadge>

            <h1 className="text-white">
              Collateral &amp; Non-Collateral Overseas Education Loans
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-body-large text-white/85">
              Fund 100% of your tuition and living costs with pre-visa loan approvals. Get collateral-free loans up to ₹75 Lakhs and secured loans up to ₹1.5 Crore with low interest rates.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <LeadCTAButton source="education_loan_hero">
                Check Loan Eligibility
              </LeadCTAButton>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["Up to ₹75 Lakhs", "Without any property collateral"],
                ["8.5% p.a. Onwards", "Competitive subsidized interest"],
                ["3-7 Days", "Rapid approval & sanction letter"],
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
          BANK PARTNERS MARQUEE/STRIP
      ========================================================== */}
      <section className="border-b border-border-default bg-surface-subtle py-6">
        <Container size="lg">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <span className="text-caption uppercase tracking-wider font-semibold text-content-secondary">
              Our Banking &amp; Lending Partners:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {loanPartners.slice(0, 6).map((partner) => (
                <span
                  key={partner}
                  className="rounded-full border border-border-default bg-white px-3.5 py-1 text-caption font-medium text-content-primary shadow-2xs"
                >
                  {partner}
                </span>
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
            <EyebrowBadge>Hassle-Free Financing</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              Engineered for Overseas Education Needs
            </h2>
            <p className="mt-4 text-content-secondary">
              Everything from tuition and housing to airfare and living allowances — structured for seamless embassy approval.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loanFeatures.map((feature, index) => {
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
          LOAN COMPARISON MATRIX
      ========================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container size="lg">
          <div className="mx-auto max-w-2xl text-center">
            <EyebrowBadge>Comparison</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              Non-Collateral vs. Collateral Loans
            </h2>
            <p className="mt-4 text-content-secondary">
              Choose the lending model that best matches your family financial structure.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Non-Collateral */}
            <div className="rounded-3xl border border-border-default bg-surface-subtle/50 p-8">
              <span className="inline-block rounded-full bg-brand-primary/10 px-3.5 py-1 text-caption font-semibold text-brand-primary">
                Unsecured Loan
              </span>
              <h3 className="card-title mt-4 text-content-primary">Non-Collateral Education Loan</h3>
              <p className="mt-2 text-body-small text-content-secondary">
                Ideal for students looking for fast sanction without mortgaging property or tangible assets.
              </p>

              <div className="mt-6 space-y-3.5 border-t border-border-light pt-6">
                {[
                  ["Maximum Amount", "Up to ₹75 Lakhs"],
                  ["Collateral Required", "None (Zero property pledge)"],
                  ["Approval Time", "3 to 5 business days"],
                  ["Margin Money", "0% to 10%"],
                  ["Primary Assessment", "Student merit, GRE score & co-signer ITR"],
                ].map(([label, val]) => (
                  <div key={label} className="flex items-center justify-between text-body-small">
                    <span className="text-content-secondary">{label}</span>
                    <strong className="text-content-primary font-medium">{val}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Collateral */}
            <div className="rounded-3xl border-2 border-brand-primary bg-white p-8 shadow-sm">
              <span className="inline-block rounded-full bg-brand-accent/10 px-3.5 py-1 text-caption font-semibold text-brand-accent">
                Secured Loan (Lowest Rate)
              </span>
              <h3 className="card-title mt-4 text-content-primary">Collateral-Backed Education Loan</h3>
              <p className="mt-2 text-body-small text-content-secondary">
                Backed by residential property, commercial space, or fixed deposits for the lowest interest rates.
              </p>

              <div className="mt-6 space-y-3.5 border-t border-border-light pt-6">
                {[
                  ["Maximum Amount", "Up to ₹1.5 Crore"],
                  ["Collateral Required", "House, Flat, Land or FD"],
                  ["Approval Time", "7 to 14 business days"],
                  ["Interest Rate", "Lowest bank rates (from 8.5% p.a.)"],
                  ["Primary Assessment", "Property legal clearance & co-signer"],
                ].map(([label, val]) => (
                  <div key={label} className="flex items-center justify-between text-body-small">
                    <span className="text-content-secondary">{label}</span>
                    <strong className="text-content-primary font-medium">{val}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          4-STEP APPLICATION PROCESS
      ========================================================== */}
      <section className="bg-surface-neutral py-16 sm:py-20 lg:py-24">
        <Container size="lg">
          <div className="mx-auto max-w-2xl text-center">
            <EyebrowBadge>Streamlined Process</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              How We Sanction Your Education Loan
            </h2>
            <p className="mt-4 text-content-secondary">
              From instant eligibility matching to final disbursement — completely paperless and guided by our loan advisors.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {loanSteps.map((step) => (
              <div
                key={step.step}
                className="relative flex flex-col justify-between rounded-3xl border border-border-default bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:shadow-md"
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
          FAQ ACCORDION
      ========================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container size="md">
          <div className="text-center">
            <EyebrowBadge>Clear Answers</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-content-secondary">
              Common questions on loan amounts, interest rates, and pre-visa disbursements.
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
            <EyebrowBadge>Zero Commission Markup</EyebrowBadge>
            <h2 className="mt-4 text-white">
              Get Your Loan Sanction Letter in 3 to 7 Days
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-white/85">
              Talk to our dedicated banking specialists. We analyze your requirements and unlock pre-approved loan offers from India&apos;s leading education lenders.
            </p>
            <div className="mt-8 flex justify-center">
              <LeadCTAButton source="education_loan_bottom">
                Apply for Pre-Approved Loan
              </LeadCTAButton>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
