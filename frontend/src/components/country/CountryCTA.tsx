import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck } from "lucide-react";
import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface CountryCTAProps {
  country: Country;
}

export const CountryCTA: React.FC<CountryCTAProps> = ({ country }) => {
  return (
    <section className="bg-white py-20">
      <Container size="lg">
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#12204C_0%,#253A7B_50%,#1B2958_100%)] px-6 py-16 text-center text-white sm:px-16 sm:py-20 shadow-2xl">
          <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full bg-[#E93F61]/25 blur-[100px]" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-[350px] w-[350px] rounded-full bg-blue-400/15 blur-[100px]" />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 font-body text-xs font-semibold tracking-wide text-white backdrop-blur-md border border-white/20">
              <ShieldCheck size={15} className="text-[#E93F61]" />
              Official Partner of Accredited {country.name} Universities
            </span>

            <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
              Ready to Study in {country.name}?
            </h2>

            <p className="mt-4 font-body text-base text-white/85 sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Get 1-on-1 profile evaluation, university shortlisting, statement of purpose guidance, and complete visa filing — all at 100% zero counseling charge.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <LeadCTAButton
                source={`country_cta_${country.slug}`}
                className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#E93F61] px-8 font-body text-[15px] font-semibold text-white shadow-xl transition-all duration-300 hover:bg-[#d93657] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Book Free Counselling Session</span>
                <ArrowRight size={17} />
              </LeadCTAButton>

              <Link
                href={`/study-in/${country.slug}/explore?type=all`}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 font-body text-[15px] font-semibold text-white backdrop-blur-xs transition-all duration-300 hover:bg-white/20 active:scale-95"
              >
                <Compass size={17} />
                <span>Browse {country.name} Directory</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CountryCTA;
