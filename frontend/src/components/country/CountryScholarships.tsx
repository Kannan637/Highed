"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Compass,
  ShieldCheck,
} from "lucide-react";
import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Carousel from "@/components/ui/Carousel";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface CountryScholarshipsProps {
  country: Country;
}

export const CountryScholarships: React.FC<CountryScholarshipsProps> = ({
  country,
}) => {
  return (
    <section
      id="scholarships"
      className="border-t border-border/60 bg-surface-neutral/60 py-14 sm:py-18 md:py-24"
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <SectionHeading
            badge="Financial Support"
            title={`Scholarships & Grants in ${country.name}`}
            subtitle="Offset your tuition with merit-based awards, government stipends, and university waivers."
            className="mx-auto mb-0 text-center"
          />
        </div>

        {/* Scholarship Carousel */}
        <Carousel
          ariaLabel={`Scholarships in ${country.name}`}
          className="!overflow-visible px-1 pb-2"
          controlsPosition="top"
        >
          {country.scholarshipsList.map((scholarship, idx) => (
            <Card
              key={`${scholarship.name}-${idx}`}
              className={cn(
                "group flex h-full min-h-[330px] shrink-0 snap-start flex-col",
                "w-[calc(100vw-40px)] max-w-[360px]",
                "sm:w-[370px] md:w-[400px]",
                "rounded-2xl border border-border/70 bg-white",
                "p-5 sm:p-6",
                "shadow-sm transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-md"
              )}
            >
              {/* Top */}
              <div className="flex-1">
                {/* Amount */}
                <div className="mb-5 flex items-center justify-between gap-3">
                  <Badge
                    variant="warning"
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
                  >
                    <Award size={14} />
                    <span>{scholarship.amount}</span>
                  </Badge>

                  <span className="text-xs font-medium text-content-tertiary">
                    Scholarship
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold leading-snug tracking-tight text-content-primary sm:text-[22px]">
                  {scholarship.name}
                </h3>

                {/* Details */}
                <div className="mt-6 space-y-4">
                  {/* Eligibility */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                      <CheckCircle2
                        size={15}
                        className="text-emerald-600"
                      />
                    </div>

                    <div className="min-w-0 text-sm leading-6 text-content-secondary">
                      <p>
                        <strong className="font-semibold text-content-primary">
                          Eligibility
                        </strong>
                      </p>
                      <p className="mt-0.5">{scholarship.eligibility}</p>
                    </div>
                  </div>

                  {/* Coverage */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-primary/10">
                      <ShieldCheck
                        size={15}
                        className="text-brand-primary"
                      />
                    </div>

                    <div className="min-w-0 text-sm leading-6 text-content-secondary">
                      <p>
                        <strong className="font-semibold text-content-primary">
                          Coverage
                        </strong>
                      </p>
                      <p className="mt-0.5">{scholarship.coverage}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-7 border-t border-border-light pt-5">
                <LeadCTAButton
                  source={`country_scholarship_${country.slug}`}
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "group/cta inline-flex w-full items-center justify-between",
                    "rounded-xl px-3 py-2.5",
                    "text-sm font-semibold text-brand-primary",
                    "transition-colors hover:bg-brand-primary/5",
                    "hover:text-brand-accent"
                  )}
                >
                  <span>Check Qualification</span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/10 transition-transform duration-300 group-hover/cta:translate-x-0.5">
                    <ArrowRight size={15} />
                  </span>
                </LeadCTAButton>
              </div>
            </Card>
          ))}
        </Carousel>

        {/* Explore All */}
        <div className="mt-10 flex justify-center px-2 sm:mt-12">
          <Link
            href={`/study-in/${country.slug}/explore?type=scholarships`}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "group flex h-auto min-h-12 w-full max-w-[560px] items-center justify-center gap-2 rounded-xl px-4 py-3 text-center text-sm sm:w-auto sm:px-5"
            )}
          >
            <Compass className="h-4 w-4 shrink-0" />

            <span className="leading-5">
              Explore All Scholarships & Application Deadlines
            </span>

            <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CountryScholarships;