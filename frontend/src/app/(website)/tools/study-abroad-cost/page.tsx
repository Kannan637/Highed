import React from "react";
import { constructMetadata } from "@/seo/metadata";
import { ToolHero } from "@/components/tools/toolPrimitives";
import StudyAbroadCostCalculator from "@/components/tools/StudyAbroadCostCalculator";

export const metadata = constructMetadata({
  title: "Study Abroad Cost Calculator | Tuition & Living Expense Estimator",
  description:
    "Calculate complete study abroad expenses for USA, UK, Canada, Australia, Germany, Ireland, and Dubai. Accurate tuition, housing, visa, and living cost breakdown.",
  path: "/tools/study-abroad-cost",
  keywords: [
    "study abroad cost calculator",
    "living expenses calculator usa uk",
    "international student tuition fee estimate",
    "study abroad budget planner",
  ],
});

export default function StudyAbroadCostPage() {
  return (
    <div className="w-full tracking-tight-5">
      <ToolHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Cost Calculator" },
        ]}
        eyebrow="Financial Planning Tool"
        title="Study Abroad Cost Calculator"
        description="Get an accurate, itemized estimate of total tuition, accommodation, living expenses, travel, and visa costs tailored to your dream study destination."
      />

      <StudyAbroadCostCalculator />
    </div>
  );
}
