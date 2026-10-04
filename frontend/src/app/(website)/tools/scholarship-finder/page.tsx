import React from "react";
import { constructMetadata } from "@/seo/metadata";
import { ToolHero } from "@/components/tools/toolPrimitives";
import ScholarshipFinder from "@/components/tools/ScholarshipFinder";

export const metadata = constructMetadata({
  title: "Scholarship Finder | International Student Grants & Fee Waivers",
  description:
    "Discover merit and need-based study abroad scholarships, government grants, and tuition fee waivers for USA, UK, Canada, Australia, Germany, Ireland, and Dubai.",
  path: "/tools/scholarship-finder",
  keywords: [
    "study abroad scholarship finder",
    "international student scholarships",
    "study in usa scholarships for indian students",
    "uk merit scholarships",
    "germany daad scholarship guidance",
  ],
});

export default function ScholarshipFinderPage() {
  return (
    <div className="w-full tracking-tight-5">
      <ToolHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Scholarship Finder" },
        ]}
        eyebrow="Funding & Grants Tool"
        title="Study Abroad Scholarship Finder"
        description="Filter and explore verified university scholarships, government fellowships, and tuition fee waiver opportunities across leading international study destinations."
      />

      <ScholarshipFinder />
    </div>
  );
}
