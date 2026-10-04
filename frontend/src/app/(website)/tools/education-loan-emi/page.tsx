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
    <div className="w-full tracking-tight-5">
      <ToolHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Loan EMI Calculator" },
        ]}
        eyebrow="Smart Financial Tool"
        title="Education Loan EMI Calculator"
        description="Estimate monthly installments (EMI), total interest liability, and view full yearly & monthly amortization schedules with customizable moratorium grace periods."
      />

      <EducationLoanCalculator />
    </div>
  );
}
