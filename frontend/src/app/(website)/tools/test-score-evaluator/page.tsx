import React from "react";
import { constructMetadata } from "@/seo/metadata";
import { ToolHero } from "@/components/tools/toolPrimitives";
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
    <div className="w-full tracking-tight-5">
      <ToolHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Score Evaluator" },
        ]}
        eyebrow="Language Proficiency Tool"
        title="IELTS & PTE Score Evaluator"
        description="Calculate official overall band scores with precision rounding, benchmark your readiness for top international universities, and receive targeted coaching feedback."
      />

      <TestScoreEvaluator />
    </div>
  );
}
