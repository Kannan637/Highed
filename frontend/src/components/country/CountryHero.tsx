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
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#16234B_0%,#253A7B_55%,#1B2958_100%)] pb-16 pt-8 md:pt-12 text-white">
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
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <span className="text-xl" role="img" aria-label={country.name}>
                {country.flag}
              </span>
              <span className="font-dmsans text-xs md:text-sm font-semibold tracking-wide text-white">
                Study in {country.name} • 2026 Admissions
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-hedvig text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.15]">
              {country.title}
            </h1>

            {/* Tagline */}
            <p className="mt-5 max-w-2xl font-dmsans text-base md:text-lg text-white/85 leading-relaxed">
              {country.tagline}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <LeadCTAButton
                source={`country_hero_${country.slug}`}
                className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#E93F61] px-7 font-dmsans text-[15px] font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#d93657] hover:shadow-xl active:scale-95 cursor-pointer"
              >
                <span>Get Free Counselling</span>
                <ArrowRight size={17} />
              </LeadCTAButton>

              <Link
                href={`/study-in/${country.slug}/explore?type=universities`}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 font-dmsans text-[15px] font-semibold text-white backdrop-blur-xs transition-all duration-300 hover:bg-white/20 active:scale-95"
              >
                <Compass size={17} />
                <span>Explore Directory</span>
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
        <div className="mt-14 grid grid-cols-4 gap-3 md:gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 md:p-6 backdrop-blur-md lg:grid-cols-12 shadow-2xl">
          <div className="col-span-2 sm:col-span-2 lg:col-span-3 flex items-center gap-3">
            <div className="flex h-10 w-10 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
              <Calendar size={20} />
            </div>
            <div className="min-w-0">
              <div className="font-dmsans text-xs text-white/70">Major Intakes</div>
              <div className="truncate font-dmsans text-xs md:text-sm font-bold text-white">
                {intakeSummary}
              </div>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-2 lg:col-span-3 flex items-center gap-3">
            <div className="flex h-10 w-10 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
              <CreditCard size={20} />
            </div>
            <div className="min-w-0">
              <div className="font-dmsans text-xs text-white/70">Estimated Tuition</div>
              <div className="truncate font-dmsans text-xs md:text-sm font-bold text-white">
                {tuitionSummary}
              </div>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-2 lg:col-span-3 flex items-center gap-3">
            <div className="flex h-10 w-10 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
              <ShieldCheck size={20} />
            </div>
            <div className="min-w-0">
              <div className="font-dmsans text-xs text-white/70">Visa Processing</div>
              <div className="truncate font-dmsans text-xs md:text-sm font-bold text-white">
                {visaProcessing}
              </div>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-2 lg:col-span-3 flex items-center gap-3">
            <div className="flex h-10 w-10 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
              <Compass size={20} />
            </div>
            <div className="min-w-0">
              <div className="font-dmsans text-xs text-white/70">Stay Back</div>
              <div className="truncate font-dmsans text-xs md:text-sm font-bold text-white">
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
