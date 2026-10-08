"use client";

import React from "react";
import {
  CalendarDays,
  Clock3,
  Check,
} from "lucide-react";

import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import EyebrowBadge from "../ui/EyebrowBadge";

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
        relative
        w-full
        overflow-hidden
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* ============================================================
          BACKGROUND IMAGE
          ============================================================ */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage:
            "url('/images/intake/Gemini_Generated_Image_x31l02x31l02x31l-clean.webp')",
        }}
        aria-hidden="true"
      />

      {/* ============================================================
          BACKGROUND OVERLAY
          ============================================================ */}


      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-brand-primary/15
          via-brand-primary/10
          to-brand-primary/15
        "
        aria-hidden="true"
      />

      {/* ============================================================
          CENTERED CONTENT
          ============================================================ */}

      <Container size="lg">
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-[1100px]
            flex-col
            items-center
            text-center
          "
        >
          {/* ========================================================
              EYEBROW
              ======================================================== */}

          <div className="flex justify-center">
            <EyebrowBadge>Admission Calendar</EyebrowBadge>
          </div>

          {/* ========================================================
              HEADING
              ======================================================== */}

          <h2
            className="
              mt-4
              max-w-[620px]
              text-h2
              text-white
              lg:text-[44px]
            "
          >
            Upcoming Intakes in {country.name}
          </h2>

          {/* ========================================================
              DESCRIPTION
              ======================================================== */}

          <p
            className="
              mx-auto
              mt-3
              max-w-[560px]
              text-body
              text-content-on-primary
            "
          >
            Choose the right intake and plan your application
            timeline with confidence.
          </p>

          {/* ========================================================
              INTAKE CARDS
              No carousel
              No horizontal scrolling
              Responsive centered grid
              ======================================================== */}

          <div className="mt-7 w-full">
            <div
              className="
                mx-auto
                grid
                w-full
                max-w-[850px]
                grid-cols-1
                justify-items-center
                gap-3
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {country.intakes.map((intake, idx) => {
                const isMajor = intake.type === "Major";

                return (
                  <article
                    key={`${intake.season}-${idx}`}
                    className="
                      w-full
                      max-w-[270px]
                      rounded-[20px]
                      bg-surface-default
                      p-4
                      text-left
                      ring-1
                      ring-black/[0.04]
                    "
                  >
                    {/* ==================================================
                        TOP ROW
                        ================================================== */}

                    <div className="flex items-center justify-between gap-2">
                      {/* Season */}
                      <span
                        className={`
                          inline-flex
                          items-center
                          gap-1.5
                          rounded-full
                          px-2.5
                          py-1
                          text-[11px]
                          font-semibold
                          ${isMajor
                            ? "bg-icon-bg-primary text-brand-primary"
                            : "bg-icon-bg-accent text-brand-accent"
                          }
                        `}
                      >
                        {isMajor && (
                          <Check className="size-3" />
                        )}

                        {intake.season}
                      </span>

                      {/* Number */}
                      <span
                        className="
                          text-[11px]
                          font-medium
                          tabular-nums
                          text-content-muted
                        "
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* ==================================================
                        MAIN CONTENT
                        ================================================== */}

                    <div className="mt-4">
                      <p className="text-caption text-content-muted">
                        Classes start
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-[15px]
                          font-semibold
                          leading-tight
                          text-content-primary
                        "
                      >
                        {intake.months}
                      </p>
                    </div>

                    {/* ==================================================
                        DEADLINE
                        ================================================== */}

                    <div
                      className="
                        mt-4
                        flex
                        items-center
                        gap-2
                        border-t
                        border-border-light
                        pt-3
                      "
                    >
                      <div
                        className="
                          flex
                          size-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-icon-bg-gold
                        "
                      >
                        <Clock3
                          className="
                            size-3.5
                            text-brand-gold
                          "
                          strokeWidth={2}
                        />
                      </div>

                      <div className="min-w-0">
                        <p
                          className="
                            text-[10px]
                            leading-tight
                            text-content-muted
                          "
                        >
                          Apply before
                        </p>

                        <p
                          className="
                            truncate
                            text-[12px]
                            font-semibold
                            text-content-primary
                          "
                        >
                          {intake.deadline}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* ========================================================
              SUPPORTING PILLS
              ======================================================== */}

          <div
            className="
              mt-4
              flex
              flex-wrap
              justify-center
              gap-2
            "
          >
            <span
              className="
                rounded-full
                bg-white/10
                px-3
                py-1.5
                text-[11px]
                font-medium
                text-white/75
                ring-1
                ring-white/10
              "
            >
              Early applications recommended
            </span>

            <span
              className="
                rounded-full
                bg-white/10
                px-3
                py-1.5
                text-[11px]
                font-medium
                text-white/75
                ring-1
                ring-white/10
              "
            >
              Scholarship opportunities
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CountryIntakes;