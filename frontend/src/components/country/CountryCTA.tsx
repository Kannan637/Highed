"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import EyebrowBadge from "@/components/ui/EyebrowBadge";
import { Country } from "@/types/country";

interface CountryCTAProps {
  country?: Country;
}

export const CountryCTA: React.FC<CountryCTAProps> = ({ country }) => {
  const countryName = country?.name || "Abroad";
  const countrySlug = country?.slug || "all";

  const benefits = [
    "100% Free Expert Counselling",
    "Personalised University Shortlist",
    "Scholarship & Visa Guidance",
    "End-to-End Application Support",
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <Container size="lg">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[48px] bg-gradient-to-br from-brand-primary via-[#21326c] to-[#142352] p-6 sm:p-10 md:p-14 lg:p-16 text-white shadow-2xl">
          {/* Decorative background glows */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-accent/20 blur-[90px]" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-blue-400/15 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            {/* Left Content Column */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-7">
              <EyebrowBadge>
                Zero Consultation Charges
              </EyebrowBadge>

              <h2 className="mt-4 sm:mt-6 text-white">
                Ready to Study in{" "}
                <span className="text-brand-accent underline decoration-brand-accent/40 underline-offset-4">
                  {countryName}?
                </span>
              </h2>

              <p className="mt-4 sm:mt-5 text-body sm:text-body-large text-white/85 max-w-xl leading-relaxed">
                Get 1-on-1 profile evaluation, university shortlisting, statement of purpose guidance, and complete visa filing — 100% free with no service fees.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
                <LeadCTAButton
                  source={`country_bottom_cta_${countrySlug}`}
                >
                  Book Free Counselling
                </LeadCTAButton>

                {country?.slug && (
                  <Link
                    href={`/study-in/${country.slug}/explore`}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 text-btn font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-brand-primary w-full sm:w-auto"
                  >
                    <span>Explore Directory</span>
                    <ArrowRight size={18} />
                  </Link>
                )}
              </div>

              {/* Badges / Highlights List on Mobile & Desktop */}
              <div className="mt-8 pt-6 border-t border-white/15 w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-caption font-medium text-white/90">
                    <CheckCircle2 size={16} className="text-brand-accent shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none">
                {/* Visual Frame */}
                <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-[24px] sm:rounded-[32px] border-2 border-white/20 bg-white/10 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1000&q=90"
                    alt={`Student studying in ${countryName}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Overlay badge inside image */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 backdrop-blur-md p-3.5 text-neutral-900 shadow-lg">
                    <div className="text-caption font-medium text-brand-primary uppercase tracking-wider">
                      Official Representative
                    </div>
                    <div className="text-body-small font-medium text-neutral-800 mt-0.5">
                      500+ Partner Universities Worldwide
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CountryCTA;