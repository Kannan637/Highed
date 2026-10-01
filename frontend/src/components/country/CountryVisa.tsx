
"use client";

import React from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  FileText,
  ShieldCheck,
} from "lucide-react";

import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface CountryVisaProps {
  country: Country;
}

export const CountryVisa: React.FC<CountryVisaProps> = ({ country }) => {
  const { visaDetails } = country;

  const highlights = [
    {
      label: "Processing Time",
      value: visaDetails.processingTime,
      icon: Clock3,
    },
    {
      label: "Part-Time Work",
      value: visaDetails.workPermitHours.split(";")[0],
      icon: BriefcaseBusiness,
    },
    {
      label: "Post-Study Visa",
      value: "Green Visa / Job Seeker",
      icon: FileText,
    },
  ];

  return (
    <section
      id="visa"
      className="
        w-full
        overflow-hidden
        border-t
        border-border-default
        bg-surface-neutral
        py-16
        sm:py-20
        lg:py-24
      "
    >
      <Container size="lg">
        {/* ========================================================
            CENTERED HEADER
            ======================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            badge="Immigration & Visas"
            title={`Student Visa Guide for ${country.name}`}
            subtitle="A streamlined, university-sponsored process with high approval rates and rapid processing."
            className="text-center"
          />
        </div>

        {/* ========================================================
            VISA HIGHLIGHTS
            ======================================================== */}

        <div
          className="
            mx-auto
            mt-10
            max-w-5xl
            overflow-hidden
            rounded-[var(--radius-card)]
            border
            border-border-card
            bg-surface-default
            shadow-card-resting
            sm:mt-12
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={cn(
                    "flex flex-col items-center px-6 py-7 text-center sm:px-7 sm:py-8",
                    index !== 0 &&
                    "border-t border-border-light sm:border-l sm:border-t-0"
                  )}
                >
                  <div
                    className="
                      flex
                      size-11
                      items-center
                      justify-center
                      rounded-[var(--radius-icon)]
                      bg-icon-bg-primary
                      text-brand-primary
                    "
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={1.8}
                    />
                  </div>

                  <p
                    className="
                      mt-4
                      text-caption
                      font-medium
                      uppercase
                      tracking-[0.04em]
                      text-content-secondary
                    "
                  >
                    {item.label}
                  </p>

                  <p
                    className="
                      mt-1
                      text-h5
                      text-content-primary
                    "
                  >
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            VISA PROCESS
            ======================================================== */}

        <div className="mx-auto mt-20 max-w-4xl text-center sm:mt-24 lg:mt-28">
          <div className="mx-auto max-w-2xl">
            <p
              className="
                text-caption
                font-semibold
                uppercase
                tracking-[0.08em]
                text-brand-primary
              "
            >
              Application Process
            </p>

            <h3
              className="
                mt-3
                text-h3
                text-content-primary
              "
            >
              5 simple steps to secure your {country.name} student visa
            </h3>

            <p
              className="
                mx-auto
                mt-4
                max-w-xl
                text-body
                text-content-secondary
              "
            >
              Follow a clear application journey with support from our
              specialized immigration counselors.
            </p>
          </div>

          {/* ======================================================
              STEPS
              ====================================================== */}

          <div
            className="
              mt-10
              overflow-hidden
              rounded-[var(--radius-card)]
              border
              border-border-card
              bg-surface-default
              text-left
              shadow-card-resting
              sm:mt-12
            "
          >
            {visaDetails.steps.map((step, index) => (
              <article
                key={step.stepNumber}
                className={cn(
                  "group grid grid-cols-[52px_1fr] gap-4 px-5 py-6 sm:grid-cols-[68px_1fr] sm:gap-6 sm:px-7 sm:py-7 lg:px-8",
                  index !== 0 && "border-t border-border-light"
                )}
              >
                {/* Number */}

                <div className="flex justify-center">
                  <div
                    className="
                      flex
                      size-10
                      items-center
                      justify-center
                      rounded-full
                      bg-icon-bg-primary
                      text-sm
                      font-semibold
                      tabular-nums
                      text-brand-primary
                      transition-colors
                      duration-[var(--duration-fast)]
                      group-hover:bg-brand-primary
                      group-hover:text-content-inverse
                    "
                  >
                    {String(step.stepNumber).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}

                <div className="min-w-0 text-left">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                    <h4
                      className="
                        text-h5
                        text-content-primary
                        transition-colors
                        duration-[var(--duration-fast)]
                        group-hover:text-brand-primary
                      "
                    >
                      {step.title}
                    </h4>

                    <span
                      className="
                        hidden
                        shrink-0
                        text-caption
                        font-medium
                        uppercase
                        tracking-[0.04em]
                        text-content-muted
                        sm:block
                      "
                    >
                      Step {index + 1}
                    </span>
                  </div>

                  <p
                    className="
                      mt-2
                      max-w-2xl
                      text-body-small
                      leading-6
                      text-content-secondary
                    "
                  >
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ========================================================
            HIGHED VISA ASSISTANCE
            ======================================================== */}

        <div
          className="
            mx-auto
            mt-10
            max-w-4xl
            overflow-hidden
            rounded-[var(--radius-card)]
            border
            border-brand-primary/15
            bg-surface-brand-light
            sm:mt-12
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              gap-5
              px-6
              py-7
              text-center
              sm:px-8
              sm:py-8
            "
          >
            <div
              className="
                flex
                size-11
                items-center
                justify-center
                rounded-[var(--radius-icon)]
                bg-surface-default
                text-brand-primary
                shadow-sm
              "
            >
              <ShieldCheck
                aria-hidden="true"
                className="size-5"
                strokeWidth={1.8}
              />
            </div>

            <div className="max-w-2xl">
              <p
                className="
                  text-caption
                  font-semibold
                  uppercase
                  tracking-[0.06em]
                  text-brand-primary
                "
              >
                HighEd Visa Assistance
              </p>

              <h4
                className="
                  mt-2
                  text-h5
                  text-content-primary
                "
              >
                100% Visa Filing Assistance Included
              </h4>

              <p
                className="
                  mt-2
                  text-body-small
                  leading-6
                  text-content-secondary
                "
              >
                Our specialized immigration counselors review your financial
                documentation, medical scheduling, and university submissions
                with zero service fees.
              </p>
            </div>

            <button
              type="button"
              className="
                group
                flex
                h-11
                cursor-pointer
                items-center
                gap-2
                rounded-[var(--radius-btn)]
                bg-brand-primary
                px-5
                text-btn
                text-content-inverse
                shadow-button
                transition-all
                duration-[var(--duration-fast)]
                hover:bg-brand-primary-dark
                hover:shadow-button-hover
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-brand-primary
                focus-visible:ring-offset-2
              "
            >
              Get Visa Guidance

              <ArrowRight
                aria-hidden="true"
                className="
                  size-4
                  transition-transform
                  duration-[var(--duration-fast)]
                  group-hover:translate-x-1
                "
                strokeWidth={1.8}
              />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CountryVisa;