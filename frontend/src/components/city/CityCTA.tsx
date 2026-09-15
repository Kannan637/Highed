import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Sparkles } from "lucide-react";
import { CityData } from "@/types/city";
import Container from "@/components/ui/Container";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface CityCTAProps {
  city: CityData;
}

export const CityCTA: React.FC<CityCTAProps> = ({ city }) => {
  return (
    <section className="bg-white py-20">
      <Container size="lg">
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#12204C_0%,#253A7B_50%,#1B2958_100%)] px-6 py-16 text-center text-white sm:px-16 sm:py-20 shadow-2xl">
          {/* Ambient Glows */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full bg-[#E93F61]/25 blur-[100px]" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-[350px] w-[350px] rounded-full bg-blue-400/15 blur-[100px]" />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 font-body text-xs font-semibold tracking-wide text-white backdrop-blur-md border border-white/20">
              <ShieldCheck size={15} className="text-[#E93F61]" />
              Direct Representative of 850+ Accredited Global Universities
            </span>

            <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
              Ready to Study Abroad from {city.name}?
            </h2>

            <p className="mt-4 font-body text-base text-white/85 sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Book your personalized session with our expert counsellors. Get customized university shortlisting, SOP mentoring, scholarship support, and end-to-end visa filing with 100% zero consultancy fees.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <LeadCTAButton
                source={`city_cta_${city.slug}`}
                contextTitle={`Main CTA - Study Abroad from ${city.name}`}
                contextCTA="Book Free Counselling"
                className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#E93F61] px-8 font-body text-[15px] font-semibold text-white shadow-xl transition-all duration-300 hover:bg-[#d93657] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Book Free Counselling Session</span>
                <ArrowRight size={17} />
              </LeadCTAButton>

              <Link
                href="/study-in"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 font-body text-[15px] font-semibold text-white backdrop-blur-xs transition-all duration-300 hover:bg-white/20 active:scale-95"
              >
                <Compass size={17} />
                <span>Explore All Destinations</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CityCTA;
