"use client";

import React from "react";
import {
  CheckCircle2,
  Clock3,
  BriefcaseBusiness,
  FileText,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

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
      className="
        w-full
        bg-surface-subtle
        py-16
        sm:py-20
        lg:py-24
        tracking-tight-5
        [letter-spacing:var(--tracking-tight-5)]
        [&_*]:[letter-spacing:var(--tracking-tight-5)]
      "
    >
      <Container size="lg">
        {/* ───────────────── HEADER ───────────────── */}
        <SectionHeading
          badge="Immigration & Visas"
          title={`Student Visa Guide for ${country.name}`}
          subtitle="A streamlined, university-sponsored process with high approval rates and rapid processing."
        />

        {/* ───────────────── VISA HIGHLIGHTS ───────────────── */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-3
            lg:mt-12
            lg:gap-5
          "
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.label}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border-default
                  bg-white
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-brand-primary/20
                  hover:shadow-md
                  sm:p-6
                "
              >
                {/* Decorative accent */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -right-8
                    -top-8
                    size-20
                    rounded-full
                    bg-brand-primary/[0.04]
                    transition-transform
                    duration-300
                    group-hover:scale-125
                  "
                />

                <div className="relative flex items-start gap-4">
                  <div
                    className="
                      flex
                      size-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-brand-primary/10
                      text-brand-primary
                      transition-colors
                      duration-300
                      group-hover:bg-brand-primary
                      group-hover:text-white
                    "
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={2}
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-xs
                        font-medium
                        text-content-secondary
                      "
                    >
                      {item.label}
                    </p>

                    <p
                      className="
                        mt-1.5
                        text-sm
                        font-semibold
                        leading-snug
                        text-content-primary
                        sm:text-base
                      "
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ───────────────── VISA PROCESS ───────────────── */}
        <div
          className="
            mt-6
            overflow-hidden
            rounded-3xl
            border
            border-border-default
            bg-white
            shadow-xs
            lg:mt-8
          "
        >
          {/* Process header */}
          <div
            className="
              border-b
              border-border-default
              px-5
              py-6
              sm:px-8
              sm:py-7
              lg:px-10
            "
          >
            <div
              className="
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-end
                sm:justify-between
              "
            >
              <div>
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-brand-primary
                  "
                >
                  Application Process
                </p>

                <h3
                  className="
                    mt-1.5
                    text-xl
                    font-semibold
                    text-content-primary
                    sm:text-2xl
                  "
                >
                  5 simple steps to secure your {country.name} student visa
                </h3>
              </div>

              <div
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  bg-brand-primary/10
                  px-3.5
                  py-2
                  text-xs
                  font-medium
                  text-brand-primary
                "
              >
                <ShieldCheck className="size-4" />
                Guided by HighEd
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <div className="relative">
              {/* Connecting line */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-8
                  left-[19px]
                  top-8
                  hidden
                  w-px
                  bg-border-default
                  sm:block
                "
              />

              <div className="space-y-7 sm:space-y-8">
                {visaDetails.steps.map((step, index) => (
                  <article
                    key={step.stepNumber}
                    className="
                      relative
                      flex
                      gap-4
                      sm:gap-6
                    "
                  >
                    {/* Step number */}
                    <div
                      className="
                        relative
                        z-10
                        flex
                        size-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-brand-primary
                        text-sm
                        font-semibold
                        text-white
                        ring-8
                        ring-white
                      "
                    >
                      {step.stepNumber}
                    </div>

                    {/* Step content */}
                    <div className="min-w-0 flex-1 pb-1">
                      <div
                        className="
                          flex
                          flex-col
                          gap-1
                          sm:flex-row
                          sm:items-center
                          sm:justify-between
                        "
                      >
                        <h4
                          className="
                            text-base
                            font-semibold
                            text-content-primary
                            sm:text-lg
                          "
                        >
                          {step.title}
                        </h4>

                        <span
                          className="
                            hidden
                            text-xs
                            font-medium
                            text-content-secondary
                            sm:block
                          "
                        >
                          Step {index + 1}
                        </span>
                      </div>

                      <p
                        className="
                          mt-1.5
                          max-w-2xl
                          text-sm
                          leading-relaxed
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
          </div>

          {/* Assistance CTA */}
          <div className="border-t border-border-default p-5 sm:p-8 lg:p-10">
            <div
              className="
                flex
                flex-col
                gap-5
                rounded-2xl
                bg-brand-primary/[0.06]
                p-5
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:p-6
              "
            >
              <div className="flex items-start gap-3.5">
                <div
                  className="
                    flex
                    size-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-brand-primary
                    text-white
                  "
                >
                  <CheckCircle2 className="size-5" />
                </div>

                <div>
                  <h4
                    className="
                      text-sm
                      font-semibold
                      text-content-primary
                      sm:text-base
                    "
                  >
                    HighEd 100% Visa Filing Assistance Included
                  </h4>

                  <p
                    className="
                      mt-1
                      max-w-2xl
                      text-xs
                      leading-relaxed
                      text-content-secondary
                      sm:text-sm
                    "
                  >
                    Our specialized immigration counselors review your
                    financial documentation, medical scheduling, and
                    university submissions with zero service fees.
                  </p>
                </div>
              </div>

              <ArrowRight
                aria-hidden="true"
                className="
                  hidden
                  size-5
                  shrink-0
                  text-brand-primary
                  sm:block
                "
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CountryVisa;