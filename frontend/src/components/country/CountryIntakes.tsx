"use client";

import React from "react";
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  Clock,
  ImageIcon,
} from "lucide-react";

import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface CountryIntakesProps {
  country: Country;
}

export const CountryIntakes: React.FC<CountryIntakesProps> = ({
  country,
}) => {
  return (
    <section
      id="intakes"
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
            badge="Admission Calendar"
            title={`Upcoming Intakes in ${country.name}`}
            subtitle="Plan your application timeline systematically to maximize scholarship funding and university housing."
            className="text-center"
          />
        </div>

        {/* ========================================================
            INTAKE GRID
        ======================================================== */}

        <div className="mx-auto mt-10 max-w-6xl sm:mt-12 lg:mt-14">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {country.intakes.map((intake, idx) => {
              const isMajor = intake.type === "Major";

              return (
                <article
                  key={`${intake.season}-${idx}`}
                  className={cn(
                    `
                      group
                      flex
                      h-full
                      flex-col
                      overflow-hidden
                      rounded-[var(--radius-card)]
                      border
                      bg-surface-default
                      shadow-card-resting
                      transition-all
                      duration-[var(--duration-normal)]
                      ease-[var(--easing-default)]
                      hover:shadow-card-hover
                    `,
                    isMajor
                      ? "border-brand-primary/20"
                      : "border-border-card"
                  )}
                >
                  {/* ==================================================
                      IMAGE PLACEHOLDER
                  ================================================== */}

                  <div
                    className="
                      relative
                      aspect-[16/9]
                      w-full
                      overflow-hidden
                      bg-surface-subtle
                    "
                  >
                    {/* Replace this div with <Image /> later */}

                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        border-b
                        border-border-light
                        bg-surface-subtle
                      "
                    >
                      <div className="flex flex-col items-center gap-2 text-content-muted">
                        <ImageIcon
                          aria-hidden="true"
                          className="size-7"
                          strokeWidth={1.5}
                        />

                        <span className="text-caption">
                          Intake Image
                        </span>
                      </div>
                    </div>

                    {/* Major intake label */}

                    <div
                      className="
                        absolute
                        left-4
                        top-4
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        bg-surface-default/95
                        px-3
                        py-1.5
                        text-caption
                        font-semibold
                        text-content-primary
                        shadow-sm
                        backdrop-blur-sm
                      "
                    >
                      {isMajor && (
                        <CheckCircle
                          aria-hidden="true"
                          className="size-3.5 text-brand-primary"
                          strokeWidth={2}
                        />
                      )}

                      <span>
                        {intake.type} Intake
                      </span>
                    </div>
                  </div>

                  {/* ==================================================
                      CARD CONTENT
                  ================================================== */}

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    {/* Phase */}

                    <div className="flex items-center justify-between gap-4">
                      <span
                        className="
                          flex
                          items-center
                          gap-2
                          text-caption
                          font-medium
                          text-content-secondary
                        "
                      >
                        <Calendar
                          aria-hidden="true"
                          className="size-4 text-brand-primary"
                          strokeWidth={1.8}
                        />

                        Phase {idx + 1}
                      </span>

                      <span
                        className="
                          text-caption
                          font-medium
                          tabular-nums
                          text-content-muted
                        "
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Season */}

                    <div className="mt-6">
                      <p
                        className="
                          text-caption
                          font-medium
                          uppercase
                          tracking-[0.04em]
                          text-content-muted
                        "
                      >
                        Intake
                      </p>

                      <h3
                        className="
                          mt-1
                          text-h3
                          text-content-primary
                        "
                      >
                        {intake.season}
                      </h3>
                    </div>

                    {/* ==================================================
                        INTAKE DETAILS
                    ================================================== */}

                    <div
                      className="
                        mt-6
                        overflow-hidden
                        rounded-[16px]
                        border
                        border-border-light
                        bg-surface-neutral
                      "
                    >
                      {/* Classes Start */}

                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-4
                          px-4
                          py-4
                        "
                      >
                        <div className="flex items-center gap-2.5">
                          <Clock
                            aria-hidden="true"
                            className="
                              size-4
                              shrink-0
                              text-brand-primary
                            "
                            strokeWidth={1.8}
                          />

                          <span
                            className="
                              text-body-small
                              text-content-secondary
                            "
                          >
                            Classes Start
                          </span>
                        </div>

                        <strong
                          className="
                            text-right
                            text-body-small
                            font-semibold
                            text-content-primary
                          "
                        >
                          {intake.months}
                        </strong>
                      </div>

                      {/* Deadline */}

                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-4
                          border-t
                          border-border-light
                          px-4
                          py-4
                        "
                      >
                        <div className="flex items-center gap-2.5">
                          <Calendar
                            aria-hidden="true"
                            className="
                              size-4
                              shrink-0
                              text-brand-accent
                            "
                            strokeWidth={1.8}
                          />

                          <span
                            className="
                              text-body-small
                              text-content-secondary
                            "
                          >
                            Apply Before
                          </span>
                        </div>

                        <strong
                          className="
                            text-right
                            text-body-small
                            font-semibold
                            text-brand-accent
                          "
                        >
                          {intake.deadline}
                        </strong>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            APPLICATION STRATEGY
        ======================================================== */}

        <div
          className="
            mx-auto
            mt-8
            max-w-5xl
            overflow-hidden
            rounded-[var(--radius-card)]
            border
            border-feedback-warning/25
            bg-icon-bg-gold
            sm:mt-10
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              gap-4
              px-6
              py-6
              text-center
              sm:flex-row
              sm:items-start
              sm:px-7
              sm:py-7
              sm:text-left
            "
          >
            {/* Icon */}

            <div
              className="
                flex
                size-10
                shrink-0
                items-center
                justify-center
                rounded-[var(--radius-icon)]
                bg-surface-default
                text-feedback-warning
                shadow-sm
              "
            >
              <AlertCircle
                aria-hidden="true"
                className="size-5"
                strokeWidth={1.8}
              />
            </div>

            {/* Content */}

            <div className="min-w-0">
              <p
                className="
                  text-body-small
                  leading-6
                  text-content-primary
                "
              >
                <strong className="font-semibold">
                  HighEd Application Strategy:
                </strong>{" "}
                We recommend initiating university shortlisting at least 3 to
                5 months prior to the intake. This secures optimal early-bird
                scholarship evaluations and gives ample cushion for CAS / I-20
                / study permit visa processing.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CountryIntakes;