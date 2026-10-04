import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { resourceFaqs, tools, type ToolResource } from "@/data/resources";
import { cn } from "@/lib/utils";
import { ArrowLink, ResourceLabel, ResourceSectionHeader, resourceCardClass } from "./primitives";

/* ---------------- FAQ ---------------- */

export const ResourceFAQ = () => (
  <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-20 bg-[#F5F5F9] py-16 sm:py-20 lg:py-24">
    <Container size="lg">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <ResourceSectionHeader
            id="faq-heading"
            eyebrow="Answers"
            title="Frequently Asked Questions"
            description="Get clear answers to the questions students ask most before studying abroad."
          />
          <ArrowLink href="/about#faq">See all FAQs</ArrowLink>
        </div>
        <div className="lg:col-span-8">
          <Accordion
            className="rounded-[24px] border-[#E6E7EF] shadow-none"
            items={resourceFaqs.map((f) => ({ id: `resource-faq-${f.id}`, title: f.question, content: f.answer }))}
          />
        </div>
      </div>
    </Container>
  </section>
);

/* ---------------- Tools ---------------- */

const ToolCard = ({ tool, featured = false, className }: { tool: ToolResource; featured?: boolean; className?: string }) => {
  const Icon = tool.icon;
  return (
    <article
      id={tool.id}
      className={cn(
        resourceCardClass,
        "scroll-mt-24 h-full",
        featured && "border-brand-primary/20 lg:p-10",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <span
          className={cn(
            "flex items-center justify-center rounded-2xl transition-transform duration-200 group-hover:-translate-y-0.5",
            featured ? "size-16 bg-brand-primary text-white" : "size-12 bg-[#F5F5F9] text-brand-primary"
          )}
        >
          <Icon size={featured ? 28 : 22} aria-hidden="true" />
        </span>
        <span className="text-[13px] font-semibold text-content-secondary/70" aria-hidden="true">{tool.index}</span>
      </div>
      <ResourceLabel className="mt-6">{tool.category}</ResourceLabel>
      <h3 className={cn("mt-2 leading-tight text-brand-primary", featured ? "text-[28px] sm:text-[32px]" : "text-[20px]")}>
        {tool.title}
      </h3>
      <p className={cn("mt-3 leading-relaxed text-content-secondary", featured ? "text-[16px] sm:text-[17px]" : "text-[15px]")}>
        {tool.description}
      </p>

      {featured && (
        <div aria-hidden="true" className="mt-8 rounded-2xl border border-[#E6E7EF] bg-[#F5F5F9] p-5">
          <div className="flex items-baseline justify-between">
            <span className="text-[13px] font-medium text-content-secondary">Sample estimate · UK, 1 year</span>
            <span className="text-[22px] font-semibold text-brand-primary">₹28.4L</span>
          </div>
          <div className="mt-4 space-y-2.5">
            {[["Tuition", "w-[60%]"], ["Accommodation", "w-[25%]"], ["Living", "w-[15%]"]].map(([label, w]) => (
              <div key={label} className="flex items-center gap-3 text-[12px]">
                <span className="w-24 shrink-0 text-content-secondary">{label}</span>
                <span className="h-1.5 flex-1 rounded-full bg-white">
                  <span className={cn("block h-full rounded-full bg-brand-primary", w)} />
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-auto pt-6">
        <ArrowLink href={tool.href} stretched>{tool.cta}</ArrowLink>
      </div>
    </article>
  );
};

export const ToolsSection = () => {
  const [featured, ...rest] = tools;
  return (
    <section id="tools" aria-labelledby="tools-heading" className="scroll-mt-20 py-16 sm:py-20 lg:py-24">
      <Container size="lg">
        <ResourceSectionHeader
          id="tools-heading"
          eyebrow="Smart Tools"
          title="Smart Tools for Your Study Abroad Journey"
          description="Turn complex decisions into clear numbers and practical next steps."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          <ToolCard tool={featured} featured className="md:col-span-2 lg:col-span-6 lg:row-span-2" />
          {rest.map((t) => (
            <ToolCard key={t.title} tool={t} className="lg:col-span-3" />
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ---------------- Final CTA ---------------- */

export const ResourceCTA = () => (
  <section aria-labelledby="resource-cta-heading" className="pb-16 sm:pb-20 lg:pb-24">
    <Container size="lg">
      <div className="relative overflow-hidden rounded-[28px] bg-brand-primary px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full border border-white/10" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 size-48 rounded-full border border-white/10" />
        <div className="relative max-w-2xl">
          <ResourceLabel className="text-white/60">Next step</ResourceLabel>
          <h2 id="resource-cta-heading" className="mt-4 text-[30px] leading-[1.1] text-white sm:text-[40px] lg:text-[44px]">
            Still Not Sure Where to Start?
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-white/75 sm:text-[18px]">
            Tell us about your goals, academic background and preferred destination. Our counsellors will help you plan
            the next step.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <LeadCTAButton id="resources-cta-counselling" source="resources_final_cta" forcePopup className="w-fit">
              Book Free Counselling
            </LeadCTAButton>
            <Link
              href="/study-in"
              className="inline-flex h-12 w-fit items-center gap-2 rounded-full border border-white/25 px-6 text-[16px] font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Explore Countries
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
