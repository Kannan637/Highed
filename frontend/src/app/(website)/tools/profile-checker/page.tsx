import React from "react";
import { constructMetadata } from "@/seo/metadata";
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
    <div
      id="profile-checker-page"
      data-tool-page="true"
      className="w-full min-h-screen bg-white"
    >
      <ProfileEligibilityChecker standalone />
    </div>
  );
}
