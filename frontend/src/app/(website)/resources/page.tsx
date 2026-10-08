import React from "react";
import { constructMetadata } from "@/seo/metadata";
import { resourceFaqs } from "@/data/resources";
import ResourcesHero from "@/components/resources/ResourcesHero";
import ResourceCategoryNav from "@/components/resources/ResourceCategoryNav";
import UniversityDirectoryPreview from "@/components/resources/UniversityDirectoryPreview";
import { CountryGuidesSection, ExamSection, GuidesSection } from "@/components/resources/InfoSections";
import { ResourceCTA, ResourceFAQ, ToolsSection } from "@/components/resources/ActionSections";

export const metadata = constructMetadata({
  title: "Study Abroad Guides & Tools | HighEd Resources",
  description:
    "Expert study-abroad guides, country insights, university directory, exam prep and smart tools — cost calculator, EMI calculator, eligibility checker and test score evaluator.",
  path: "/resources",
  keywords: [
    "study abroad guide",
    "study abroad cost calculator",
    "education loan emi calculator",
    "profile eligibility checker",
    "ielts pte guide",
    "university directory",
  ],
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: resourceFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function ResourcesPage() {
  return (
    <div className="w-full tracking-tight-5">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ResourcesHero />
      <ResourceCategoryNav />
      <GuidesSection />
      <CountryGuidesSection />
      <UniversityDirectoryPreview />
      <ExamSection />
      <ResourceFAQ />
      <ToolsSection />
      <ResourceCTA />
    </div>
  );
}
