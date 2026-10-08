import React from "react";
import { constructMetadata } from "@/seo/metadata";
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
    <div
      id="study-abroad-cost-page"
      data-tool-page="true"
      className="w-full min-h-screen bg-white"
    >
      <StudyAbroadCostCalculator standalone />
    </div>
  );
}
