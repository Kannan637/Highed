import React from "react";
import Link from "next/link";
import { Compass } from "lucide-react";
import { CityData } from "@/types/city";
import Container from "@/components/ui/Container";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import EyebrowBadge from "@/components/ui/EyebrowBadge";

interface CityCTAProps {
  city: CityData;
}

export const CityCTA: React.FC<CityCTAProps> = ({ city }) => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <Container size="lg">
        <div className="relative overflow-hidden rounded-[32px] sm:rounded-[38px] md:rounded-[42px] border border-white/10 bg-[linear-gradient(135deg,#12204C_0%,#253A7B_50%,#1B2958_100%)] px-6 py-14 text-center text-white sm:px-16 sm:py-18 md:py-20 shadow-2xl">
          {/* Ambient Glows */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full bg-brand-accent/25 blur-[100px]" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-[350px] w-[350px] rounded-full bg-blue-400/15 blur-[100px]" />

          <div className="relative mx-auto max-w-3xl">
            <EyebrowBadge>
              Transparent Guidance Across Premier Global Universities
            </EyebrowBadge>

            <h2 className="mt-6 text-white tracking-tight-5 [letter-spacing:var(--tracking-tight-5)]">
              Ready to Study Abroad from{" "}
              <span className="text-brand-accent">{city.name}?</span>
            </h2>

            <p className="mt-4 text-body text-white/85 sm:text-body-large max-w-2xl mx-auto leading-relaxed tracking-tight-5 [letter-spacing:var(--tracking-tight-5)]">
              Book your personalized session with our expert counsellors. Get customized university shortlisting, SOP mentoring, scholarship support, and end-to-end visa filing with 100% zero consultancy fees.
            </p>

            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <LeadCTAButton
                source={`city_cta_${city.slug}`}
                contextTitle={`Main CTA - Study Abroad from ${city.name}`}
                contextCTA="Book Free Counselling"
                className="w-fit max-w-[280px] sm:w-auto sm:max-w-none"
              >
                Book Free Counselling
              </LeadCTAButton>

              <Link
                href="/study-in"
                className="btn-motion inline-flex h-12 w-fit max-w-[280px] sm:w-auto sm:max-w-none items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-btn font-semibold text-white backdrop-blur-xs hover:bg-white/20 hover:border-white/30"
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
