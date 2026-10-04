import React from "react";
import Link from "next/link";
import { Award, Calculator, MapPin, TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import LeadCTAButton, { MASTER_CTA_CLASSNAME, MasterCtaIcon } from "@/components/forms/LeadCTAButton";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ResourceLabel } from "./primitives";

/** Single composed editorial visual: one cost card anchored by two supporting cards. */
const HeroVisual = () => (
  <div aria-hidden="true" className="relative mx-auto h-[420px] w-full max-w-[480px]">
    <div className="absolute inset-6 rounded-[32px] border border-dashed border-brand-primary/15" />
    <div className="absolute right-10 top-4 size-24 rounded-full bg-brand-accent/10" />

    {/* Primary: cost estimate */}
    <div className="absolute left-0 top-16 w-[300px] rounded-[24px] border border-[#E6E7EF] bg-white p-6">
      <div className="flex items-center gap-2 text-[13px] font-semibold text-content-secondary">
        <Calculator size={16} className="text-brand-accent" /> Estimated annual cost
      </div>
      <p className="mt-3 text-[32px] font-semibold leading-none tracking-tight text-brand-primary">₹28,40,000</p>
      <div className="mt-5 flex h-2 overflow-hidden rounded-full bg-[#F5F5F9]">
        <span className="w-[55%] bg-brand-primary" />
        <span className="w-[25%] bg-brand-accent" />
        <span className="w-[20%] bg-brand-primary/30" />
      </div>
      <dl className="mt-4 grid grid-cols-3 gap-2 text-[12px]">
        {[["Tuition", "55%"], ["Housing", "25%"], ["Living", "20%"]].map(([k, v]) => (
          <div key={k}>
            <dt className="text-content-secondary">{k}</dt>
            <dd className="font-semibold text-content-primary">{v}</dd>
          </div>
        ))}
      </dl>
    </div>

    {/* Supporting: country */}
    <div className="absolute right-0 top-0 w-[200px] rounded-[20px] border border-[#E6E7EF] bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="rounded-md bg-[#F5F5F9] px-2 py-1 text-[11px] font-bold text-brand-primary">GB</span>
        <TrendingUp size={16} className="text-brand-accent" />
      </div>
      <p className="mt-4 text-[16px] font-semibold text-brand-primary">Study in the UK</p>
      <p className="mt-1 flex items-center gap-1 text-[12px] text-content-secondary">
        <MapPin size={12} /> 1-year Masters
      </p>
    </div>

    {/* Supporting: scholarship */}
    <div className="absolute bottom-6 right-4 w-[240px] rounded-[20px] bg-brand-primary p-5 text-white">
      <div className="flex items-center gap-2 text-[12px] font-semibold text-white/70">
        <Award size={14} /> Scholarship match
      </div>
      <p className="mt-2 text-[18px] font-semibold">Up to ₹10L funding</p>
      <p className="mt-1 text-[12px] text-white/60">12 scholarships for your profile</p>
    </div>
  </div>
);

export const ResourcesHero = () => (
  <section id="resources-top" className="scroll-mt-24 bg-[#F5F5F9] pb-16 pt-8 sm:pb-20 lg:pb-24">
    <Container size="lg">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources" }]} className="mb-10 sm:mb-14" />
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ResourceLabel className="mb-5 block">HighEd Resources</ResourceLabel>
          <h1 className="text-[36px] leading-[1.05] text-brand-primary sm:text-[48px] lg:text-[60px]">
            Plan Your Study Abroad Journey With Confidence
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-content-secondary sm:text-[18px]">
            Explore expert guides, university resources, country insights and smart tools to help you make better
            study-abroad decisions.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#guides"
              id="resources-explore-cta"
              className={cn(
                buttonVariants({ variant: "accent", size: "default" }),
                MASTER_CTA_CLASSNAME,
                "w-fit justify-between gap-3 pr-1.5"
              )}
            >
              <span>Explore Resources</span>
              <span className="flex size-9 items-center justify-center rounded-full bg-white text-brand-accent">
                <MasterCtaIcon />
              </span>
            </Link>
            <LeadCTAButton
              id="resources-hero-counselling"
              source="resources_hero"
              forcePopup
              variant="white"
              iconBadge={null}
              className="w-fit"
            >
              Book Free Counselling
            </LeadCTAButton>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:block">
          <HeroVisual />
        </div>
      </div>
    </Container>
  </section>
);

export default ResourcesHero;
