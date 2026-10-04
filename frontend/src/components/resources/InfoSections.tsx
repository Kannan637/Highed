import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import Container from "@/components/ui/Container";
import { countryGuides, examGuides, featuredGuide, guides, type GuideResource } from "@/data/resources";
import { cn } from "@/lib/utils";
import { ArrowLink, ResourceLabel, ResourceSectionHeader, resourceCardClass } from "./primitives";

/* ---------------- Guides & Information ---------------- */

const SecondaryCard = ({ g, className }: { g: GuideResource; className?: string }) => {
  const Icon = g.icon;
  return (
    <article className={cn(resourceCardClass, className)}>
      <div className="flex items-start justify-between gap-4">
        <ResourceLabel>{g.label}</ResourceLabel>
        <Icon size={22} aria-hidden="true" className="text-brand-primary/50 transition-colors group-hover:text-brand-accent" />
      </div>
      <h3 className="mt-4 text-[22px] leading-tight text-brand-primary">{g.title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-content-secondary">{g.description}</p>
      <div className="mt-auto pt-6">
        <ArrowLink href={g.href} stretched>{g.cta}</ArrowLink>
      </div>
    </article>
  );
};

export const GuidesSection = () => {
  const FeaturedIcon = featuredGuide.icon;
  const [country, university, exam, faq] = guides;

  return (
    <section id="guides" aria-labelledby="guides-heading" className="scroll-mt-20 py-16 sm:py-20 lg:py-24">
      <Container size="lg">
        <ResourceSectionHeader
          id="guides-heading"
          eyebrow="Learn"
          title="Guides & Information"
          description="Everything you need to understand your study-abroad journey, from choosing a country to preparing your application."
        />

        <div className="grid gap-5 lg:grid-cols-12">
          {/* Featured */}
          <article className={cn(resourceCardClass, "bg-brand-primary border-brand-primary hover:border-brand-primary lg:col-span-8 lg:row-span-2 lg:p-12")}>
            <div className="flex items-start justify-between">
              <ResourceLabel className="text-white/70">Featured {featuredGuide.label}</ResourceLabel>
              <span className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                <FeaturedIcon size={26} aria-hidden="true" />
              </span>
            </div>
            <h3 className="mt-8 max-w-md text-[32px] leading-[1.05] text-white sm:text-[44px]">{featuredGuide.title}</h3>
            <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-white/75 sm:text-[18px]">{featuredGuide.description}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {featuredGuide.meta?.map((m) => (
                <li key={m} className="rounded-lg border border-white/15 px-3 py-1.5 text-[13px] text-white/80">{m}</li>
              ))}
            </ul>
            <div className="mt-auto pt-10">
              <Link
                href={featuredGuide.href}
                className="inline-flex min-h-11 items-center gap-2 text-[16px] font-semibold text-white after:absolute after:inset-0 after:rounded-[24px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md"
              >
                {featuredGuide.cta}
                <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </article>

          <SecondaryCard g={country} className="lg:col-span-4" />
          <SecondaryCard g={university} className="lg:col-span-4" />
          <SecondaryCard g={exam} className="lg:col-span-8" />
          <SecondaryCard g={faq} className="lg:col-span-4" />
        </div>
      </Container>
    </section>
  );
};

/* ---------------- Country Guides ---------------- */

export const CountryGuidesSection = () => (
  <section id="countries" aria-labelledby="countries-heading" className="scroll-mt-20 bg-[#F5F5F9] py-16 sm:py-20 lg:py-24">
    <Container size="lg">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <ResourceSectionHeader
          id="countries-heading"
          eyebrow="Destinations"
          title="Explore Countries"
          description="Compare destinations, universities, costs, scholarships and student life before you decide where to study."
        />
        <ArrowLink href="/study-in" className="mb-10 sm:mb-12">View all countries</ArrowLink>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {countryGuides.map((c, i) => (
          <li key={c.slug} className={cn(i === 0 && "lg:col-span-2")}>
            <article className={cn(resourceCardClass, "h-full p-6 sm:p-6")}>
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center overflow-hidden rounded-xl border border-[#E6E7EF] bg-[#F5F5F9]" aria-hidden="true">
                  <ReactCountryFlag countryCode={c.code} svg style={{ width: "1.5rem", height: "1.125rem", borderRadius: 3 }} />
                </span>
                <span className="rounded-full bg-brand-accent/10 px-2.5 py-1 text-[12px] font-semibold text-brand-accent">{c.tag}</span>
              </div>
              <h3 className="mt-5 text-[20px] leading-tight text-brand-primary">Study in {c.name === "USA" || c.name === "UK" ? `the ${c.name}` : c.name}</h3>
              <dl className="mt-4 space-y-2 text-[14px]">
                <div className="flex justify-between gap-3">
                  <dt className="text-content-secondary">Popular</dt>
                  <dd className="text-right font-medium text-content-primary">{c.courses.join(", ")}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-content-secondary">Approx. cost</dt>
                  <dd className="font-medium text-content-primary">{c.cost}</dd>
                </div>
              </dl>
              <div className="mt-auto pt-5">
                <ArrowLink href={`/study-in/${c.slug}`} stretched>Explore Country</ArrowLink>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

/* ---------------- Exams ---------------- */

export const ExamSection = () => (
  <section id="exams" aria-labelledby="exams-heading" className="scroll-mt-20 py-16 sm:py-20 lg:py-24">
    <Container size="lg">
      <ResourceSectionHeader
        id="exams-heading"
        eyebrow="Test Prep"
        title="Prepare Smarter for Your Exams"
        description="Formats, scoring and preparation strategy for the tests universities ask for."
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {examGuides.map((e) => {
          const Icon = e.icon;
          return (
            <li key={e.name}>
              <article className={cn(resourceCardClass, "h-full")}>
                <span className="flex size-11 items-center justify-center rounded-xl bg-[#F5F5F9] text-brand-primary transition-colors group-hover:bg-brand-accent/10 group-hover:text-brand-accent">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-[24px] text-brand-primary">{e.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-content-secondary">{e.description}</p>
                <p className="mt-4 text-[13px] font-semibold text-content-primary">{e.meta}</p>
                <div className="mt-auto pt-5">
                  <ArrowLink href="/blog" stretched>Read Guide</ArrowLink>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </Container>
  </section>
);
