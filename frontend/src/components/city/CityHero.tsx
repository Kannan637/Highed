import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, MapPin, ShieldCheck, Sparkles, GraduationCap, Award, Users, CheckCircle2 } from "lucide-react";
import { CityData } from "@/types/city";
import Container from "@/components/ui/Container";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import Breadcrumb from "@/components/ui/Breadcrumb";

interface CityHeroProps {
  city: CityData;
}

export const CityHero: React.FC<CityHeroProps> = ({ city }) => {
  const statIcons = [Users, ShieldCheck, Award, GraduationCap];

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
              { label: "Locations", href: "#" },
              { label: `${city.name}` },
            ]}
            className="[&_span]:text-white/70 [&_a]:text-white/70 [&_a:hover]:text-white [&_svg]:text-white/40 [&_span[aria-current]]:text-white"
          />
        </div>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-4 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Content */}
          <div className="col-span-4 text-left lg:col-span-7">
            {/* City Location Pill */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <MapPin size={15} className="text-[#E93F61]" />
              <span className="font-body text-xs md:text-sm font-semibold tracking-wide text-white">
                {city.slug === "chennai" ? "Main Office" : "Study Abroad Services"} • {city.name}
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-[50px] lg:leading-[1.18]">
              {city.title}
            </h1>

            {/* Tagline */}
            <p className="mt-5 max-w-2xl font-body text-base md:text-lg text-white/90 leading-relaxed">
              {city.tagline}
            </p>

            {/* Intro excerpt */}
            <p className="mt-3 max-w-2xl font-body text-sm md:text-[15px] text-white/75 leading-relaxed">
              {city.intro}
            </p>

            {city.slug !== "chennai" && (
              <div className="mt-5 rounded-xl border border-[#E93F61]/30 bg-[#E93F61]/10 p-4 backdrop-blur-md">
                <h4 className="font-body text-sm font-semibold text-white">Serving Students in {city.name}</h4>
                <p className="mt-1 font-body text-xs text-white/80 leading-relaxed">
                  HighEd is based in Chennai and provides students across {city.name} with online counselling, application assistance, scholarship guidance, education loan support and visa preparation.
                </p>
              </div>
            )}

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <LeadCTAButton
                source={`city_hero_${city.slug}`}
                contextTitle={`Study Abroad Counselling in ${city.name}`}
                contextCTA="Book Free Counselling"
                className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#E93F61] px-7 font-body text-[15px] font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#d93657] hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Book Free Counselling</span>
                <ArrowRight size={17} />
              </LeadCTAButton>

              <a
                href="#destinations"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 font-body text-[15px] font-semibold text-white backdrop-blur-xs transition-all duration-300 hover:bg-white/20 active:scale-95"
              >
                <Compass size={17} />
                <span>Explore Destinations</span>
              </a>
            </div>

            {/* Quick trust reassurance bullets */}
            <div className="mt-7 flex flex-wrap items-center gap-5 text-xs text-white/80 font-body">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-400" />
                100% Free Guidance
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-400" />
                850+ Partner Universities
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-400" />
                Dedicated Visa Mock Prep
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="col-span-4 flex items-center justify-center lg:col-span-5">
            <div className="relative w-full max-w-[420px] rounded-3xl border border-white/20 bg-white/10 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between pb-6 border-b border-white/15">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#E93F61]">
                    HighEd Advantage
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white mt-1">
                    Study Abroad From {city.name}
                  </h3>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E93F61]/20 border border-[#E93F61]/40 text-[#E93F61]">
                  <Sparkles size={22} />
                </div>
              </div>

              <div className="mt-6 space-y-4 font-body text-sm">
                <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-3.5 border border-white/10">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-400/20 text-blue-300">
                    <GraduationCap size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Profile Evaluation</h4>
                    <p className="text-xs text-white/70 mt-0.5">Custom roadmap matching your GPA, budget & career goals</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-3.5 border border-white/10">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-300">
                    <Award size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Scholarship Strategy</h4>
                    <p className="text-xs text-white/70 mt-0.5">Assistance securing tuition fee waivers & graduate assistantships</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-3.5 border border-white/10">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-rose-400/20 text-rose-300">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Visa File & Mock Prep</h4>
                    <p className="text-xs text-white/70 mt-0.5">Comprehensive documentation and mock interviews for 99% approval</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <LeadCTAButton
                  source={`city_card_${city.slug}`}
                  contextTitle={`Free Profile Evaluation - ${city.name}`}
                  contextCTA="Start My Free Application"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-white py-3 font-body text-sm font-bold text-[#16234B] shadow-md transition-all hover:bg-neutral-100 hover:shadow-lg active:scale-98 cursor-pointer"
                >
                  <span>Start Free Evaluation</span>
                  <ArrowRight size={15} />
                </LeadCTAButton>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Highlights Bar */}
        <div className="mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 md:p-6 backdrop-blur-md sm:grid-cols-4 lg:grid-cols-4 shadow-2xl">
          {city.stats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <div key={idx} className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <div className="truncate font-body text-xs text-white/70 font-medium">
                    {stat.label}
                  </div>
                  <div className="truncate font-heading text-lg md:text-xl font-bold text-white mt-0.5">
                    {stat.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CityHero;
