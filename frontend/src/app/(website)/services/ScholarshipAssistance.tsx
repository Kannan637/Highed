"use client";

import React, { useState } from "react";
import {
  Award,
  ChevronDown,
  GraduationCap,
  Percent,
  FileText,
  DollarSign,
  Globe2,
} from "lucide-react";
import Container from "@/components/ui/Container";
import EyebrowBadge from "@/components/ui/EyebrowBadge";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { cn } from "@/lib/utils";
import {
  CARD_BG_COLORS,
  CardDecorativeIcons,
} from "@/components/home/service-constants";

const scholarshipFeatures = [
  {
    icon: Award,
    title: "University Merit Waivers (20% – 100%)",
    description:
      "Automatic and application-based tuition discounts awarded directly by universities based on high undergraduate GPA or standardized test scores.",
  },
  {
    icon: Globe2,
    title: "Government & National Grants",
    description:
      "Full-ride funding pathways including Chevening (UK), Fulbright (USA), DAAD (Germany), and Australia Awards covering tuition, flights, and living stipends.",
  },
  {
    icon: Percent,
    title: "Early-Bird Bursaries",
    description:
      "Guaranteed fee reductions of $2,000 to $8,000 offered to applicants who submit applications and accept offers prior to initial university deadlines.",
  },
  {
    icon: FileText,
    title: "Scholarship Essay & SOP Polishing",
    description:
      "Expert editing of your scholarship statement of purpose, diversity statement, and financial hardship justification to meet committee rubrics.",
  },
  {
    icon: GraduationCap,
    title: "STEM & Women in Tech Fellowships",
    description:
      "Dedicated corporate and university-sponsored grants incentivizing international women and underrepresented students in science and engineering.",
  },
  {
    icon: DollarSign,
    title: "Graduate Assistantships (TA/RA)",
    description:
      "Secure on-campus Teaching Assistant (TA) or Research Assistant (RA) appointments providing tuition remissions plus monthly living stipends.",
  },
];

const scholarshipTypes = [
  {
    type: "Full-Ride Scholarships",
    coverage: "100% Tuition + Living Stipend + Health Insurance",
    eligibility: "Top 5% class rank, strong leadership, published papers or research",
    examples: "Chevening, Fulbright, Gates Cambridge, DAAD",
  },
  {
    type: "Merit-Based Fee Waivers",
    coverage: "25% to 50% Tuition Discount",
    eligibility: "GPA 3.2+/4.0, strong GRE/GMAT, compelling SOP",
    examples: "University Dean's Merit Awards, Global Excellence Scholarships",
  },
  {
    type: "Early-Bird & Regional Bursaries",
    coverage: "$2,000 – $10,000 Direct Tuition Reduction",
    eligibility: "Indian / South Asian nationality, priority intake submission",
    examples: "Vice-Chancellor's International Award, South Asia Welcome Grant",
  },
  {
    type: "Graduate Assistantships",
    coverage: "Full Tuition Remission + $1,500/mo Stipend",
    eligibility: "Enrolled Master's/PhD students assisting professors 15-20 hrs/week",
    examples: "Graduate Research Assistant (GRA), Teaching Assistant (GTA)",
  },
];

const faqs = [
  {
    question: "Can an Indian student get a 100% full-ride scholarship?",
    answer:
      "Yes. While competitive, full-ride scholarships (covering 100% tuition, return airfare, and living stipends) are awarded every year through prestigious programs like Chevening, Fulbright, Commonwealth, and top private university endowments. Early planning is crucial.",
  },
  {
    question: "Do I need exceptional grades to qualify for any scholarship?",
    answer:
      "Not necessarily. While full-ride scholarships require high academic merit, dozens of universities offer regional bursaries, early-bird grants, and diversity discounts of $3,000 to $10,000 to students with average GPAs (60%–70%) who apply early.",
  },
  {
    question: "When are global scholarship deadlines?",
    answer:
      "Government scholarships (Chevening, Fulbright) close 10 to 12 months before intake (usually September to November of the prior year). University merit scholarships typically run concurrently with early application deadlines from December to March.",
  },
  {
    question: "How does HighEd help me win scholarships?",
    answer:
      "We match your profile against 5,000+ scholarship criteria, identify institutional funding opportunities, craft compelling scholarship essays, and track strict deadlines — all with zero advisory charges.",
  },
  {
    question: "Can scholarships be combined with education loans?",
    answer:
      "Yes. Most students use scholarships to lower total tuition liability and fund the remaining balance, visa requirements, and living expenses through an education loan.",
  },
];

export default function ScholarshipAssistancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full bg-white tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] [&_*]:[letter-spacing:var(--tracking-tight-5)]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-[#1D2F64] to-[#12204C] py-16 text-white sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-accent/20 blur-[100px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-blue-400/10 blur-[100px]" />

        <Container size="lg" className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <EyebrowBadge className="mb-6">
              Over ₹50+ Crores in Scholarships Secured
            </EyebrowBadge>

            <h1 className="text-white">
              International Scholarship Guidance &amp; Fee Waivers
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-body-large text-white/85">
              Offset tuition costs with merit awards, government grants, and university waivers. We match your academic profile against 5,000+ verified global scholarship programs.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <LeadCTAButton source="scholarship_page_hero">
                Find My Scholarships
              </LeadCTAButton>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["Up to 100% Tuition", "Merit & government waivers"],
                ["5,000+ Schemes", "Indexed across 12 countries"],
                ["₹0 Consultation Fee", "100% free guidance for applicants"],
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

      {/* SCHOLARSHIP OFFERINGS */}
      <section className="bg-surface-neutral py-16 sm:py-20 lg:py-24">
        <Container size="lg">
          <div className="mx-auto max-w-2xl text-center">
            <EyebrowBadge>Funding Options</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              Scholarship Programs We Guide You For
            </h2>
            <p className="mt-4 text-content-secondary">
              From full-ride government programs to institutional fee waivers and early-bird bursaries.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {scholarshipFeatures.map((feature, index) => {
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

      {/* SCHOLARSHIP TIERS COMPARISON */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container size="lg">
          <div className="mx-auto max-w-2xl text-center">
            <EyebrowBadge>Scholarship Tiers</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              Overview of Global Award Categories
            </h2>
            <p className="mt-4 text-content-secondary">
              Understand funding amounts, eligibility criteria, and award coverage across major global grant types.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {scholarshipTypes.map((tier) => (
              <div
                key={tier.type}
                className="rounded-3xl border border-border-default bg-surface-subtle/50 p-7 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <h3 className="card-title text-content-primary">{tier.type}</h3>
                  <Award className="size-5 text-brand-accent" />
                </div>

                <div className="mt-5 space-y-3.5 border-t border-border-light pt-5">
                  <div>
                    <span className="text-caption font-semibold uppercase text-brand-primary">Coverage</span>
                    <p className="text-body-small font-medium text-content-primary mt-0.5">{tier.coverage}</p>
                  </div>
                  <div>
                    <span className="text-caption font-semibold uppercase text-content-secondary">Eligibility Profile</span>
                    <p className="text-body-small text-content-secondary mt-0.5">{tier.eligibility}</p>
                  </div>
                  <div>
                    <span className="text-caption font-semibold uppercase text-content-secondary">Notable Examples</span>
                    <p className="text-body-small text-brand-accent font-medium mt-0.5">{tier.examples}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface-neutral py-16 sm:py-20 lg:py-24">
        <Container size="md">
          <div className="text-center">
            <EyebrowBadge>Common Inquiries</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              Scholarship FAQs
            </h2>
            <p className="mt-3 text-content-secondary">
              Answers to questions on deadlines, qualifications, and essay requirements.
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

      {/* BOTTOM CTA */}
      <section className="bg-white py-16 sm:py-20">
        <Container size="lg">
          <div className="rounded-[36px] bg-gradient-to-br from-brand-primary via-[#1F3168] to-[#12204C] p-8 sm:p-12 md:p-16 text-center text-white shadow-xl">
            <EyebrowBadge>Free Evaluation</EyebrowBadge>
            <h2 className="mt-4 text-white">
              Discover How Much You Can Save on Tuition
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-white/85">
              Submit your academic details for an instant scholarship evaluation by certified international education advisors.
            </p>
            <div className="mt-8 flex justify-center">
              <LeadCTAButton source="scholarship_page_bottom">
                Check My Scholarship Eligibility
              </LeadCTAButton>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
