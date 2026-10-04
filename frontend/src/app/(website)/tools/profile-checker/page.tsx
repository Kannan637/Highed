import React from "react";
import { constructMetadata } from "@/seo/metadata";
import { ToolHero } from "@/components/tools/toolPrimitives";
import ProfileEligibilityChecker from "@/components/tools/ProfileEligibilityChecker";

export const metadata = constructMetadata({
  title: "Profile Eligibility Checker | Study Abroad Admissions Assessment",
  description:
    "Evaluate your academic percentage, backlogs, work experience, English score and budget against university admission requirements in USA, UK, Canada, Australia, and Europe.",
  path: "/tools/profile-checker",
  keywords: [
    "study abroad profile evaluation",
    "university eligibility checker",
    "masters abroad eligibility test",
    "highed profile checker",
  ],
});

export default function ProfileEligibilityPage() {
  return (
    <div className="w-full tracking-tight-5">
      <ToolHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Profile Eligibility Checker" },
        ]}
        eyebrow="Admissions Compatibility Tool"
        title="Profile Eligibility Checker"
        description="Verify your GPA, backlog clearance, English proficiency, and budget against real destination standards to receive a transparent compatibility score and action plan."
      />

      <ProfileEligibilityChecker />
    </div>
  );
}
