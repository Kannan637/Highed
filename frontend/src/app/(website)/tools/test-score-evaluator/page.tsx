import React from "react";
import { constructMetadata } from "@/seo/metadata";
import TestScoreEvaluator from "@/components/tools/TestScoreEvaluator";

export const metadata = constructMetadata({
  title: "IELTS & PTE Score Evaluator | Overall Band & Readiness Assessment",
  description:
    "Calculate your official IELTS overall band and PTE overall score. Get detailed communicative skill breakdowns, university admission readiness tiers, and targeted coaching tips.",
  path: "/tools/test-score-evaluator",
  keywords: [
    "ielts score calculator",
    "pte overall score calculator",
    "ielts band rounding calculator",
    "study abroad language requirements",
  ],
});

export default function TestScoreEvaluatorPage() {
  return (
    <div
      id="test-score-evaluator-page"
      data-tool-page="true"
      className="w-full min-h-screen bg-white"
    >
      <TestScoreEvaluator standalone />
    </div>
  );
}
