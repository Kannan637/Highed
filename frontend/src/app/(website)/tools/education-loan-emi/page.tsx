import React from "react";
import { constructMetadata } from "@/seo/metadata";
import { ToolHero } from "@/components/tools/toolPrimitives";
import EducationLoanCalculator from "@/components/tools/EducationLoanCalculator";

export const metadata = constructMetadata({
  title: "Education Loan EMI Calculator | Study Abroad Monthly Repayment Tool",
  description:
    "Calculate monthly EMI, total interest, and complete repayment amortization for collateral & non-collateral study abroad loans with grace period / moratorium.",
  path: "/tools/education-loan-emi",
  keywords: [
    "education loan emi calculator",
    "study abroad loan calculator",
    "student loan amortization schedule",
    "highed education loan emi",
  ],
});

export default function EducationLoanCalculatorPage() {
  return (
    <div id="education-loan-calculator-page" className="w-full min-h-screen bg-white">
      <EducationLoanCalculator standalone />
    </div>
  );
}

