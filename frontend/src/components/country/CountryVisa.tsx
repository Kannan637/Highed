"use client";

import React from "react";
import {
  Check,
  FileSearch,
  GraduationCap,
  Plane,
  Send,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import type { Country } from "@/types/country";

export interface CountryProcessProps {
  country?: Country;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ElementType;
}

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Free Counselling in Chennai",
    description:
      "Understand your goals, preferred destinations, courses, budget, and career plans.",
    details: [
      "Course guidance",
      "Country selection",
      "Budget planning",
    ],
    icon: GraduationCap,
  },
  {
    step: "02",
    title: "Profile Evaluation & Shortlisting",
    description:
      "We evaluate your academic profile and shortlist universities that match your goals.",
    details: [
      "Profile assessment",
      "University shortlist",
      "Course matching",
    ],
    icon: FileSearch,
  },
  {
    step: "03",
    title: "University Application",
    description:
      "Prepare your documents and submit applications to your selected universities.",
    details: [
      "Document preparation",
      "Application submission",
      "Application tracking",
    ],
    icon: Send,
  },
  {
    step: "04",
    title: "Offer Letter & Admission",
    description:
      "Review your offers and complete the required admission and confirmation steps.",
    details: [
      "Offer evaluation",
      "Admission confirmation",
      "Fee guidance",
    ],
    icon: Check,
  },
  {
    step: "05",
    title: "Visa Processing",
    description:
      "Get guidance with visa documentation, application preparation, and submission.",
    details: [
      "Document checklist",
      "Application support",
      "Interview guidance",
    ],
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Travel & Pre-Departure Support",
    description:
      "Prepare for your move with travel, accommodation, and pre-departure assistance.",
    details: [
      "Travel planning",
      "Accommodation guidance",
      "Pre-departure support",
    ],
    icon: Plane,
  },
];

export const CountryProcess: React.FC<CountryProcessProps> = () => {
  return (
    <section
      id="process"
      className="
        w-full
        overflow-hidden
        bg-background
        py-16
        text-content-primary
        sm:py-20
        lg:py-24
      "
    >
      <Container size="lg">
        {/* ============================================================
            HEADER
        ============================================================ */}

        <div className="max-w-3xl">
          <span
            className="
              inline-flex
              items-center
              gap-2
              text-caption
              font-semibold
              uppercase
              tracking-[0.08em]
              text-brand-primary
            "
          >
            <span
              aria-hidden="true"
              className="
                size-1.5
                rounded-full
                bg-brand-accent
              "
            />

            Our Process
          </span>

          <h2
            className="
              mt-5
              max-w-[760px]
              text-4xl
              font-semibold
              leading-[1.02]
              tracking-[-0.04em]
              text-content-primary
              sm:text-5xl
              lg:text-6xl
            "
          >
            Study Abroad Process
            <br />
            <span className="text-brand-primary">
              for Chennai Students
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-[620px]
              text-base
              leading-7
              text-content-secondary
              sm:text-lg
            "
          >
            We follow a structured and transparent process to ensure
            every student from Chennai has a smooth and successful
            study abroad journey.
          </p>
        </div>

        {/* ============================================================
            DESKTOP TIMELINE
        ============================================================ */}

        <div
          className="
            mt-16
            hidden
            lg:block
          "
        >
          {/* TIMELINE WRAPPER */}

          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-[28px]
              border
              border-border-light
              bg-surface-default
            "
          >
            {/* ========================================================
                TIMELINE GRID
            ======================================================== */}

            <div className="relative px-7 py-8 xl:px-10 xl:py-10">
              {/* Vertical grid lines */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-60
                "
              >
                <div
                  className="
                    absolute
                    inset-y-0
                    left-7
                    right-7
                    xl:left-10
                    xl:right-10
                    bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(16.666666%-1px),var(--border-light)_calc(16.666666%-1px),var(--border-light)_16.666666%)]
                  "
                />
              </div>

              {/* ======================================================
                  TIMELINE HEADER
              ====================================================== */}

              <div
                className="
                  relative
                  z-10
                  grid
                  grid-cols-6
                  gap-0
                  border-b
                  border-border-light
                  pb-5
                "
              >
                {processSteps.map((step, index) => (
                  <div
                    key={step.step}
                    className={`
                      min-w-0
                      px-2
                      ${index === 0
                        ? "pl-0"
                        : ""
                      }
                    `}
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <span
                        className="
                          whitespace-nowrap
                          text-[11px]
                          font-semibold
                          uppercase
                          tracking-[0.06em]
                          text-content-primary
                        "
                      >
                        {getShortTitle(step.title)}
                      </span>

                      <span
                        className="
                          shrink-0
                          rounded-full
                          bg-surface-subtle
                          px-2
                          py-0.5
                          text-[9px]
                          font-medium
                          tabular-nums
                          text-content-muted
                        "
                      >
                        Week {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* ======================================================
                  PROCESS BARS
              ====================================================== */}

              <div
                className="
                  relative
                  z-10
                  mt-7
                  space-y-5
                "
              >
                {processSteps.map((step, index) => {
                  const Icon = step.icon;

                  /*
                   * Every process gets its own grid row.
                   * Therefore bars can NEVER overlap vertically.
                   */

                  const startColumn =
                    Math.min(index + 1, 4);

                  const span =
                    index === 0 || index === 5
                      ? 3
                      : index === 1 || index === 4
                        ? 3
                        : 3;

                  return (
                    <div
                      key={step.step}
                      className="
                        grid
                        min-h-[132px]
                        grid-cols-6
                        items-center
                        gap-0
                      "
                    >
                      <div
                        className="min-w-0"
                        style={{
                          gridColumn: `${startColumn} / span ${span}`,
                        }}
                      >
                        <div
                          className="
                            relative
                            min-h-[118px]
                            overflow-hidden
                            rounded-[20px]
                            border
                            border-brand-primary/10
                            bg-[#253A7B]
                            px-4
                            py-4
                            sm:px-5
                          "
                        >
                          {/* Accent progress line */}

                          <div
                            aria-hidden="true"
                            className="
                              absolute
                              left-0
                              top-0
                              h-1
                              w-full
                              bg-brand-accent
                            "
                          />

                          {/* Content */}

                          <div
                            className="
                              flex
                              h-full
                              items-start
                              gap-4
                            "
                          >
                            {/* Number */}

                            <div
                              className="
                                flex
                                size-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-white
                                text-sm
                                font-bold
                                tabular-nums
                                text-brand-primary
                              "
                            >
                              {step.step}
                            </div>

                            {/* Icon */}

                            <div
                              className="
                                flex
                                size-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-white/10
                                text-white
                              "
                            >
                              <Icon
                                className="size-5"
                                strokeWidth={1.8}
                              />
                            </div>

                            {/* Text */}

                            <div className="min-w-0 flex-1">
                              <h3
                                className="
                                  text-base
                                  font-semibold
                                  leading-tight
                                  text-white
                                  xl:text-lg
                                "
                              >
                                {step.title}
                              </h3>

                              <p
                                className="
                                  mt-2
                                  max-w-[440px]
                                  text-xs
                                  leading-5
                                  text-white/70
                                  xl:text-sm
                                "
                              >
                                {step.description}
                              </p>

                              {/* Details */}

                              <div
                                className="
                                  mt-3
                                  flex
                                  flex-wrap
                                  gap-x-4
                                  gap-y-1
                                "
                              >
                                {step.details.map(
                                  (detail) => (
                                    <span
                                      key={detail}
                                      className="
                                        text-[10px]
                                        font-medium
                                        text-white/50
                                      "
                                    >
                                      {detail}
                                    </span>
                                  ),
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            MOBILE TIMELINE
        ============================================================ */}

        <div
          className="
            relative
            mt-12
            lg:hidden
          "
        >
          {/* Vertical spine */}

          <div
            aria-hidden="true"
            className="
              absolute
              bottom-8
              left-[19px]
              top-8
              w-px
              bg-border-light
            "
          />

          <div className="relative space-y-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.step}
                  className="
                    relative
                    pl-12
                  "
                >
                  {/* NODE */}

                  <div
                    className="
                      absolute
                      left-0
                      top-1
                      z-10
                      flex
                      size-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-background
                      bg-brand-primary
                      text-[10px]
                      font-bold
                      tabular-nums
                      text-white
                    "
                  >
                    {step.step}
                  </div>

                  {/* CONTENT */}

                  <div
                    className="
                      overflow-hidden
                      rounded-[22px]
                      border
                      border-border-light
                      bg-surface-default
                    "
                  >
                    <div
                      className="
                        h-1
                        w-full
                        bg-brand-accent
                      "
                    />

                    <div className="p-5">
                      {/* ICON */}

                      <div
                        className="
                          flex
                          size-11
                          items-center
                          justify-center
                          rounded-2xl
                          bg-icon-bg-primary
                          text-brand-primary
                        "
                      >
                        <Icon
                          className="size-5"
                          strokeWidth={1.8}
                        />
                      </div>

                      {/* TITLE */}

                      <h3
                        className="
                          mt-5
                          text-lg
                          font-semibold
                          leading-tight
                          text-content-primary
                        "
                      >
                        {step.title}
                      </h3>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-content-secondary
                        "
                      >
                        {step.description}
                      </p>

                      {/* DETAILS */}

                      <div
                        className="
                          mt-4
                          flex
                          flex-wrap
                          gap-x-4
                          gap-y-2
                          border-t
                          border-border-light
                          pt-4
                        "
                      >
                        {step.details.map(
                          (detail) => (
                            <span
                              key={detail}
                              className="
                                text-[11px]
                                font-medium
                                text-content-muted
                              "
                            >
                              {detail}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  </div>

                  {/* CONNECTOR DOT */}

                  {index <
                    processSteps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="
                        absolute
                        left-[17px]
                        top-[51px]
                        size-1.5
                        rounded-full
                        bg-brand-accent
                      "
                      />
                    )}
                </article>
              );
            })}
          </div>
        </div>

        {/* ============================================================
            CTA
        ============================================================ */}

        <div
          className="
            mt-14
            flex
            flex-col
            items-center
            gap-4
            border-t
            border-border-light
            pt-8
            text-center
            sm:mt-16
            sm:flex-row
            sm:justify-between
            sm:text-left
          "
        >
          <div>
            <p
              className="
                text-body-small
                font-semibold
                text-content-primary
              "
            >
              Ready to start your study abroad journey?
            </p>

            <p
              className="
                mt-1
                text-caption
                text-content-muted
              "
            >
              Get personalised guidance from the HighEd team.
            </p>
          </div>

          <LeadCTAButton source="study_abroad_process">
            Book Free Counselling
          </LeadCTAButton>
        </div>
      </Container>
    </section>
  );
};

/* ================================================================
   HELPERS
================================================================ */

function getShortTitle(title: string): string {
  const shortTitles: Record<string, string> = {
    "Free Counselling in Chennai": "Counselling",
    "Profile Evaluation & Shortlisting": "Profile",
    "University Application": "Application",
    "Offer Letter & Admission": "Admission",
    "Visa Processing": "Visa",
    "Travel & Pre-Departure Support": "Travel",
  };

  return shortTitles[title] ?? title;
}

export default CountryProcess;