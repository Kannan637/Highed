"use client";

import React, { useState } from "react";
import {
  FileText,
  ChevronDown,
  PenTool,
  BookOpen,
  UserCheck,
  ShieldAlert,
  Award,
} from "lucide-react";
import Container from "@/components/ui/Container";
import EyebrowBadge from "@/components/ui/EyebrowBadge";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { cn } from "@/lib/utils";
import {
  CARD_BG_COLORS,
  CardDecorativeIcons,
} from "@/components/home/service-constants";

const writingServices = [
  {
    icon: PenTool,
    title: "1-on-1 Storyboarding Sessions",
    description:
      "We interview you to unearth compelling personal anecdotes, academic motivations, and career breakthroughs that admissions committees look for.",
  },
  {
    icon: BookOpen,
    title: "University-Specific Customization",
    description:
      "Every university has unique prompt guidelines. We customize SOPs to highlight specific professors, labs, courses, and campus values.",
  },
  {
    icon: UserCheck,
    title: "Academic & Professional LORs",
    description:
      "Help professors and managers craft distinct, credible recommendations highlighting your research capabilities, work ethic, and leadership.",
  },
  {
    icon: FileText,
    title: "ATS-Optimized Academic CV",
    description:
      "Format your academic resume to international university standards, highlighting GPA conversions, publications, projects, and tech stacks.",
  },
  {
    icon: ShieldAlert,
    title: "100% Original & Human Crafted",
    description:
      "Zero AI-generated templates. Every document is checked through Turnitin and AI-detectors to guarantee authentic voice and absolute originality.",
  },
  {
    icon: Award,
    title: "Backlog & Gap Year Justifications",
    description:
      "Articulate study gaps, backlogs, or career transitions positively by framing practical learning experiences, certifications, and resilience.",
  },
];

const documentsIncluded = [
  {
    title: "Statement of Purpose (SOP)",
    tag: "Most Critical Document",
    details:
      "Your 800-1200 word personal essay connecting your past academic foundations to your future career goals, explaining exactly why you chose this specific institution.",
  },
  {
    title: "Letters of Recommendation (LOR)",
    tag: "External Validation",
    details:
      "2 to 3 academic and professional letters from college department heads, project mentors, or employers highlighting technical rigor and character.",
  },
  {
    title: "Academic Resume / CV",
    tag: "First Impression",
    details:
      "Clean 1 to 2 page global format CV prioritizing educational qualifications, research projects, technical publications, tools, and community work.",
  },
  {
    title: "Personal & Diversity Statement",
    tag: "For Top-Tier Universities",
    details:
      "Specialized essays required by US and European universities describing personal background, obstacles overcome, and unique perspectives you bring to campus.",
  },
];

const writingSteps = [
  {
    step: "01",
    title: "Brainstorming & Questionnaire",
    description:
      "Fill out our guided self-reflection questionnaire and brainstorm your core narrative with an admissions writing consultant.",
  },
  {
    step: "02",
    title: "First Draft Architecture",
    description:
      "Our team develops a structured first draft maintaining your authentic voice, coherent flow, and strong academic rationale.",
  },
  {
    step: "03",
    title: "Collaborative Revisions",
    description:
      "You review the draft and provide comments. We incorporate revisions to ensure complete technical accuracy and personal alignment.",
  },
  {
    step: "04",
    title: "Final Proofreading & Polish",
    description:
      "Senior editors polish grammar, tone, vocabulary, and format according to target university word limits and admissions guidelines.",
  },
];

const faqs = [
  {
    question: "Do you write my SOP from scratch or edit my draft?",
    answer:
      "We accommodate both approaches. If you already have a draft, we perform deep structural, grammatical, and storytelling edits. If you are starting fresh, we conduct a structured storyboarding session and help you build an original, compelling draft from your experiences.",
  },
  {
    question: "Are SOPs checked for AI detection and plagiarism?",
    answer:
      "Yes. Every SOP, LOR, and essay is strictly crafted with human creativity and verified through institutional plagiarism checkers (Turnitin) and AI-detection tools to ensure complete originality.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "We offer multiple revision iterations until you and our editorial team are 100% confident in the quality, authenticity, and compliance of the document.",
  },
  {
    question: "Who should write my Letters of Recommendation (LOR)?",
    answer:
      "For Master's degrees, you usually need 2 academic LORs (from college professors or thesis advisors) and 1 professional LOR (from a supervisor or team lead). We guide your recommenders on the exact format, tone, and specific accomplishments to emphasize.",
  },
  {
    question: "How long does it take to prepare my application documents?",
    answer:
      "A complete package (SOP, 2-3 LORs, and Academic Resume) typically takes 5 to 7 business days, including review rounds. Rush turnaround is available for urgent deadlines.",
  },
];

export default function SOPAndLORAssistancePage() {
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
              Admissions Essay &amp; Documentation Mentorship
            </EyebrowBadge>

            <h1 className="text-white">
              SOP, LOR &amp; Academic Resume Crafting Assistance
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-body-large text-white/85">
              Stand out in competitive admissions pools. Get human-crafted, university-tailored Statements of Purpose, Letters of Recommendation, and Academic CVs that impress admissions committees.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <LeadCTAButton source="sop_lor_hero">
                Get My SOP Reviewed
              </LeadCTAButton>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["100% Human Written", "Zero AI generation or generic templates"],
                ["Unlimited Edits", "Iterative refinement until submission ready"],
                ["Top 1% Acceptance", "Proven rubrics for Ivy League & Russell Group"],
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

      {/* CORE SERVICES */}
      <section className="bg-surface-neutral py-16 sm:py-20 lg:py-24">
        <Container size="lg">
          <div className="mx-auto max-w-2xl text-center">
            <EyebrowBadge>Professional Support</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              Crafting Documents That Convert to Offers
            </h2>
            <p className="mt-4 text-content-secondary">
              We translate your genuine personal journey, project achievements, and ambitions into compelling application essays.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {writingServices.map((service, index) => {
              const Icon = service.icon;
              const cardBg = CARD_BG_COLORS[index % CARD_BG_COLORS.length];
              const DecorativeIcon =
                CardDecorativeIcons[index % CardDecorativeIcons.length];

              return (
                <div
                  key={service.title}
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
                        {service.title}
                      </h3>

                      <p className="mt-3 text-body-small text-content-secondary leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* DOCUMENT TYPES OVERVIEW */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container size="lg">
          <div className="mx-auto max-w-2xl text-center">
            <EyebrowBadge>Application Suite</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              Essential Documents We Help You Master
            </h2>
            <p className="mt-4 text-content-secondary">
              A comprehensive documentation suite tailored to your target universities.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {documentsIncluded.map((doc) => (
              <div
                key={doc.title}
                className="rounded-3xl border border-border-default bg-surface-subtle/50 p-7 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <h3 className="card-title text-content-primary">{doc.title}</h3>
                  <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-caption font-semibold text-brand-primary">
                    {doc.tag}
                  </span>
                </div>
                <p className="mt-4 text-body-small text-content-secondary leading-relaxed border-t border-border-light pt-4">
                  {doc.details}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4-STEP PROCESS */}
      <section className="bg-surface-neutral py-16 sm:py-20 lg:py-24">
        <Container size="lg">
          <div className="mx-auto max-w-2xl text-center">
            <EyebrowBadge>Editorial Workflow</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              Our 4-Stage Drafting Methodology
            </h2>
            <p className="mt-4 text-content-secondary">
              Structured to guarantee precision, compelling storytelling, and timely delivery before your deadlines.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {writingSteps.map((step) => (
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

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container size="md">
          <div className="text-center">
            <EyebrowBadge>Got Questions?</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              SOP &amp; LOR Frequently Asked Questions
            </h2>
            <p className="mt-3 text-content-secondary">
              Everything you need to know about our editorial and mentorship process.
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
      <section className="bg-surface-neutral py-16 sm:py-20">
        <Container size="lg">
          <div className="rounded-[36px] bg-gradient-to-br from-brand-primary via-[#1F3168] to-[#12204C] p-8 sm:p-12 md:p-16 text-center text-white shadow-xl">
            <EyebrowBadge>Start Your Draft</EyebrowBadge>
            <h2 className="mt-4 text-white">
              Make Your Admissions Story Irresistible
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-white/85">
              Submit your existing draft or start your storyboarding journey with an expert admissions essay mentor today.
            </p>
            <div className="mt-8 flex justify-center">
              <LeadCTAButton source="sop_lor_bottom">
                Start SOP &amp; LOR Assistance
              </LeadCTAButton>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
