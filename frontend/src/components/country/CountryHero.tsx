import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Compass, CreditCard, ShieldCheck } from "lucide-react";
import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CountryIllustration from "./CountryIllustration";

interface CountryHeroProps {
  country: Country;
}

export const CountryHero: React.FC<CountryHeroProps> = ({ country }) => {
  const intakeSummary = country.intakes && country.intakes.length > 0
    ? country.intakes.map((i) => i.season).slice(0, 2).join(" & ")
    : "Sep & Jan";

  const tuitionSummary = country.costDetails
    ? `${country.costDetails.tuitionMin} - ${country.costDetails.tuitionMax}`
    : country.currency;

  const visaProcessing = country.visaDetails?.processingTime || "3 - 6 Weeks";
  const postStudyWork = country.visaDetails?.postStudyWorkVisa
    ? country.visaDetails.postStudyWorkVisa.split("—")[0].slice(0, 24)
    : "Post-Study Work Visa";

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#253A7B,#12204C)] pb-16 pt-8 md:pt-12 text-white">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-blue-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[450px] w-[450px] rounded-full bg-[#E93F61]/15 blur-[120px]" />

      <Container size="lg">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Study Abroad", href: "/study-in" },
              { label: country.name },
            ]}
            className="[&_span]:text-white/70 [&_a]:text-white/70 [&_a:hover]:text-white [&_svg]:text-white/40 [&_span[aria-current]]:text-white"
          />
        </div>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-4 items-center gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Content */}
          <div className="col-span-4 text-left lg:col-span-7">
            {/* Country Pill */}
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full bg-[#E93F61] px-3.5 py-1.5 text-[12px] font-medium whitespace-nowrap shadow-xs">
              <span className="text-sm" role="img" aria-label={country.name}>
                {country.flag}
              </span>
              <span>
                Study in {country.name}
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-body text-[44px] font-medium leading-[1.04] tracking-[-1.8px] sm:text-[52px] sm:tracking-[-2px] md:text-[60px] md:leading-[1.05] md:tracking-[-2.2px] lg:text-[66px] lg:leading-[1.05] lg:tracking-[-2.5px]">
              {country.title}
            </h1>

            {/* Tagline */}
            <p className="mt-6 sm:mt-7 md:mt-8 max-w-[720px] text-[15px] sm:text-[16.5px] md:text-[17px] font-normal leading-relaxed sm:leading-[27px] text-white/85">
              {country.tagline}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-7 sm:mt-8 md:mt-9 flex flex-col sm:flex-row items-center justify-start gap-3 sm:gap-4 w-full">
              {/* Primary Button */}
              <LeadCTAButton
                source={`country_hero_${country.slug}`}
                className="group relative inline-flex h-12 sm:h-[50px] w-full sm:w-auto max-w-[280px] sm:max-w-none items-center justify-center rounded-full bg-gradient-to-r from-[#FF5E7E] via-[#E93F61] to-[#FF5E7E] p-[2px] cursor-pointer touch-manipulation select-none transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_8px_24px_rgba(233,63,97,0.32)]"
              >
                <span
                  className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_20%,#ffffff_50%,rgba(255,255,255,0.2)_80%,transparent_100%)] bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shiny-stroke transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex h-full w-full items-center justify-center gap-2.5 rounded-full bg-[#E93F61] px-6 sm:px-7 text-[15px] sm:text-[16px] font-semibold text-white transition-colors duration-300 group-hover:bg-[#d83556]">
                  <span>Get Free Counselling</span>
                  <ArrowRight size={18} strokeWidth={2.2} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </LeadCTAButton>

              {/* Secondary Button */}
              <Link
                href={`/study-in/${country.slug}/explore?type=universities`}
                className="group relative inline-flex h-12 sm:h-[50px] w-full sm:w-auto max-w-[280px] sm:max-w-none items-center justify-center gap-2.5 rounded-full border border-white bg-transparent px-6 sm:px-7 font-body text-[16px] font-medium text-white transition-all duration-300 hover:bg-white/10 hover:border-white hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Explore Directory</span>
                <ArrowRight size={18} strokeWidth={2.2} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Country SVG Illustration */}
          <div className="col-span-4 flex items-center justify-center lg:col-span-5">
            <div className="relative w-full max-w-[440px] drop-shadow-2xl">
              <CountryIllustration
                countrySlug={country.slug}
                countryName={country.name}
              />
            </div>
          </div>
        </div>

        {/* Dynamic Highlights Bar */}
        <div className="relative z-30 mt-10 sm:mt-12 md:mt-14 w-full">
          <div className="w-full border-t border-white/20" />
          
          <div className="mt-3.5 sm:mt-4 md:mt-5 grid grid-cols-4 gap-y-4 gap-x-3 md:gap-x-0 lg:grid-cols-12 md:divide-x md:divide-white/20">
            <div className="col-span-2 lg:col-span-3 flex flex-col items-center justify-center text-center px-2 sm:px-3 md:px-4 gap-1.5 sm:gap-2">
              <Calendar className="h-5 w-5 sm:h-[22px] sm:w-[22px] md:h-6 md:w-6 text-white/90 shrink-0" strokeWidth={1.9} aria-hidden="true" />
              <div className="font-body text-[11px] sm:text-[12px] text-white/70 uppercase tracking-wider">Major Intakes</div>
              <div className="font-body text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium text-white/95 leading-snug">
                {intakeSummary}
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 flex flex-col items-center justify-center text-center px-2 sm:px-3 md:px-4 gap-1.5 sm:gap-2">
              <CreditCard className="h-5 w-5 sm:h-[22px] sm:w-[22px] md:h-6 md:w-6 text-white/90 shrink-0" strokeWidth={1.9} aria-hidden="true" />
              <div className="font-body text-[11px] sm:text-[12px] text-white/70 uppercase tracking-wider">Estimated Tuition</div>
              <div className="font-body text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium text-white/95 leading-snug">
                {tuitionSummary}
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 flex flex-col items-center justify-center text-center px-2 sm:px-3 md:px-4 gap-1.5 sm:gap-2">
              <ShieldCheck className="h-5 w-5 sm:h-[22px] sm:w-[22px] md:h-6 md:w-6 text-white/90 shrink-0" strokeWidth={1.9} aria-hidden="true" />
              <div className="font-body text-[11px] sm:text-[12px] text-white/70 uppercase tracking-wider">Visa Processing</div>
              <div className="font-body text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium text-white/95 leading-snug">
                {visaProcessing}
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 flex flex-col items-center justify-center text-center px-2 sm:px-3 md:px-4 gap-1.5 sm:gap-2">
              <Compass className="h-5 w-5 sm:h-[22px] sm:w-[22px] md:h-6 md:w-6 text-white/90 shrink-0" strokeWidth={1.9} aria-hidden="true" />
              <div className="font-body text-[11px] sm:text-[12px] text-white/70 uppercase tracking-wider">Stay Back</div>
              <div className="font-body text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium text-white/95 leading-snug">
                {postStudyWork}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CountryHero;
