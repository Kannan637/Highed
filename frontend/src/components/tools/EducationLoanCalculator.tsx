"use client";

import React, { useId, useMemo, useState } from "react";
import {
  Landmark,
  ChevronDown,
  ChevronUp,
  Percent,
  Calendar,
  IndianRupee,
  Clock,
  Sparkles,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import {
  loanConfig,
  LOAN_TENURES_YEARS,
  MORATORIUM_MONTHS,
} from "@/data/tools/loanConfig";
import {
  calculateEmi,
  EmiCalculatorInput,
} from "@/lib/calculators/emiCalculator";
import { formatINR, formatINRCompact } from "@/lib/format";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import {
  FormFieldWrapper,
  ResultMetric,
  ToolCTA,
  ToolReset,
} from "./toolPrimitives";

export interface EducationLoanCalculatorProps {
  id?: string;
  className?: string;
}

export const EducationLoanCalculator = ({
  id,
  className,
}: EducationLoanCalculatorProps = {}) => {
  const [amount, setAmount] = useState<number>(loanConfig.defaults.amount);
  const [rate, setRate] = useState<number>(loanConfig.defaults.rate);
  const [tenureYears, setTenureYears] = useState<number>(loanConfig.defaults.tenureYears);
  const [moratoriumMonths, setMoratoriumMonths] = useState<number>(loanConfig.defaults.moratoriumMonths);

  // Amortization schedule expanded year
  const [expandedYear, setExpandedYear] = useState<number | null>(null);

  const amountId = useId();
  const rateId = useId();
  const tenureId = useId();
  const moratId = useId();

  const handleReset = () => {
    setAmount(loanConfig.defaults.amount);
    setRate(loanConfig.defaults.rate);
    setTenureYears(loanConfig.defaults.tenureYears);
    setMoratoriumMonths(loanConfig.defaults.moratoriumMonths);
    setExpandedYear(null);
    trackEvent("calculator_reset", { tool: "emi_calculator" });
  };

  const calculationInput: EmiCalculatorInput = useMemo(
    () => ({
      amount: Math.max(0, Math.min(loanConfig.maxAmount, Number(amount) || 0)),
      rate: Math.max(0, Math.min(30, Number(rate) || 0)),
      tenureYears,
      moratoriumMonths,
    }),
    [amount, rate, tenureYears, moratoriumMonths]
  );

  const results = useMemo(() => {
    const res = calculateEmi(calculationInput);
    trackEvent("emi_calculated", {
      amount,
      rate,
      tenureYears,
      emi: res.emi,
    });
    return res;
  }, [calculationInput, amount, rate, tenureYears]);

  const principalRatio = results.totalRepayment > 0
    ? Math.round((amount / results.totalRepayment) * 100)
    : 100;
  const interestRatio = Math.max(0, 100 - principalRatio);

  const quickAmounts = [1500000, 2500000, 4000000, 6000000];

  return (
    <section id={id} className={cn("bg-[#F5F5F9] py-10 sm:py-14 lg:py-16", className)}>
      <Container size="lg">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* ================= LEFT COLUMN: INPUTS ================= */}
          <div className="space-y-6 lg:col-span-6">
            <div className="rounded-[24px] border border-[#E6E7EF] bg-white p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-[#E6E7EF] pb-4">
                <div className="flex items-center gap-2">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <Landmark size={18} />
                  </span>
                  <h2 className="text-[20px] font-bold text-brand-primary">
                    Loan & Repayment Inputs
                  </h2>
                </div>
                <ToolReset onReset={handleReset} />
              </div>

              <div className="mt-6 space-y-6">
                {/* 1. Loan Amount */}
                <FormFieldWrapper
                  id={amountId}
                  label="Loan Amount Required"
                  hint={`Max ₹${(loanConfig.maxAmount / 1e7).toFixed(0)} Cr`}
                  required
                >
                  <div className="relative">
                    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-semibold text-content-secondary">
                      ₹
                    </span>
                    <Input
                      id={amountId}
                      type="number"
                      min={loanConfig.minAmount}
                      max={loanConfig.maxAmount}
                      step={50000}
                      value={amount || ""}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="pl-8"
                    />
                  </div>

                  {/* Quick Select Amount Pills */}
                  <div className="flex flex-wrap gap-2 pt-1.5">
                    {quickAmounts.map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => setAmount(q)}
                        className={`btn-motion rounded-lg px-2.5 py-1 text-[12px] font-semibold ${
                          amount === q
                            ? "bg-brand-primary text-white"
                            : "bg-[#F5F5F9] text-content-secondary hover:bg-neutral-200"
                        }`}
                      >
                        {formatINRCompact(q)}
                      </button>
                    ))}
                  </div>
                </FormFieldWrapper>

                {/* 2. Interest Rate Slider & Number */}
                <FormFieldWrapper
                  id={rateId}
                  label="Expected Interest Rate (% per annum)"
                  hint="Public banks ~9.5–10.5%, NBFCs ~11–13%"
                  required
                >
                  <div className="space-y-3">
                    <div className="relative">
                      <Input
                        id={rateId}
                        type="number"
                        min={0}
                        max={30}
                        step={0.1}
                        value={rate || ""}
                        onChange={(e) => setRate(Number(e.target.value))}
                        className="pr-8"
                      />
                      <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 font-semibold text-content-secondary">
                        %
                      </span>
                    </div>

                    <input
                      type="range"
                      min={0}
                      max={20}
                      step={0.25}
                      value={rate}
                      onChange={(e) => setRate(Number(e.target.value))}
                      aria-label="Interest rate slider"
                      className="h-2 w-full cursor-pointer accent-brand-accent"
                    />
                  </div>
                </FormFieldWrapper>

                {/* 3. Tenure & Moratorium */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormFieldWrapper
                    id={tenureId}
                    label="Repayment Tenure"
                    required
                  >
                    <Select
                      id={tenureId}
                      value={tenureYears}
                      onChange={(e) => setTenureYears(Number(e.target.value))}
                    >
                      {LOAN_TENURES_YEARS.map((y) => (
                        <option key={y} value={y}>
                          {y} {y === 1 ? "Year" : "Years"} ({y * 12} EMIs)
                        </option>
                      ))}
                    </Select>
                  </FormFieldWrapper>

                  <FormFieldWrapper
                    id={moratId}
                    label="Moratorium (Study Grace)"
                    hint="Course duration + 6 mos"
                  >
                    <Select
                      id={moratId}
                      value={moratoriumMonths}
                      onChange={(e) => setMoratoriumMonths(Number(e.target.value))}
                    >
                      <option value={0}>No moratorium (immediate EMI)</option>
                      <option value={6}>6 Months grace</option>
                      <option value={12}>12 Months grace</option>
                      <option value={18}>18 Months grace</option>
                    </Select>
                  </FormFieldWrapper>
                </div>
              </div>
            </div>

            {/* Amortization Table */}
            <div className="rounded-[24px] border border-[#E6E7EF] bg-white p-6 sm:p-8">
              <h3 className="text-[18px] font-bold text-brand-primary">
                Yearly Amortization Schedule
              </h3>
              <p className="mt-1 text-[13px] text-content-secondary">
                Click any year to expand month-by-month repayment breakdown
              </p>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-[#E6E7EF] text-[11px] font-bold uppercase tracking-wider text-content-secondary">
                      <th className="py-2.5 pl-2">Year</th>
                      <th className="py-2.5">Principal</th>
                      <th className="py-2.5">Interest</th>
                      <th className="py-2.5 pr-2 text-right">Balance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E6E7EF]/60">
                    {results.schedule.map((row) => {
                      const isExpanded = expandedYear === row.year;
                      return (
                        <React.Fragment key={row.year}>
                          <tr
                            onClick={() =>
                              setExpandedYear(isExpanded ? null : row.year)
                            }
                            className="cursor-pointer transition-colors hover:bg-[#F5F5F9]"
                          >
                            <td className="py-3 pl-2 font-bold text-brand-primary">
                              <span className="flex items-center gap-1">
                                Year {row.year}
                                {isExpanded ? (
                                  <ChevronUp size={14} />
                                ) : (
                                  <ChevronDown size={14} />
                                )}
                              </span>
                            </td>
                            <td className="py-3 font-medium text-content-primary">
                              {formatINR(row.principal)}
                            </td>
                            <td className="py-3 font-medium text-content-secondary">
                              {formatINR(row.interest)}
                            </td>
                            <td className="py-3 pr-2 text-right font-semibold text-content-primary">
                              {formatINR(row.balance)}
                            </td>
                          </tr>

                          {/* Expanded Monthly Rows */}
                          {isExpanded && (
                            <tr>
                              <td colSpan={4} className="bg-[#F5F5F9]/70 p-3">
                                <div className="max-h-48 overflow-y-auto rounded-xl border border-[#E6E7EF] bg-white p-2 text-[12px]">
                                  <table className="w-full text-left">
                                    <thead>
                                      <tr className="border-b border-[#E6E7EF] text-[10px] uppercase text-content-secondary">
                                        <th className="p-1">Month</th>
                                        <th className="p-1">Principal</th>
                                        <th className="p-1">Interest</th>
                                        <th className="p-1 text-right">Ending Balance</th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#E6E7EF]/40">
                                      {row.months.map((m) => (
                                        <tr key={m.month}>
                                          <td className="p-1 font-medium">Month {m.month}</td>
                                          <td className="p-1">{formatINR(m.principal)}</td>
                                          <td className="p-1">{formatINR(m.interest)}</td>
                                          <td className="p-1 text-right">{formatINR(m.balance)}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: STICKY RESULTS ================= */}
          <div className="space-y-6 lg:col-span-6 lg:sticky lg:top-24" aria-live="polite">
            <div className="rounded-[24px] border border-[#E6E7EF] bg-white p-6 sm:p-8">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
                EMI Calculation Summary
              </span>
              <h3 className="mt-1 text-[22px] font-bold text-brand-primary">
                Monthly Loan Repayment
              </h3>

              {/* Primary Large Metric */}
              <div className="mt-5">
                <ResultMetric
                  label="Monthly EMI"
                  value={formatINR(results.emi)}
                  subValue={`Payable for ${tenureYears * 12} months @ ${rate}% p.a.`}
                  highlight
                />
              </div>

              {/* Total Interest & Repayment */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#E6E7EF] bg-[#F5F5F9] p-3.5">
                  <span className="text-[11px] font-medium text-content-secondary uppercase">
                    Total Interest
                  </span>
                  <p className="mt-1 text-[17px] font-bold text-content-primary">
                    {formatINRCompact(results.totalInterest)}
                  </p>
                </div>

                <div className="rounded-xl border border-[#E6E7EF] bg-[#F5F5F9] p-3.5">
                  <span className="text-[11px] font-medium text-content-secondary uppercase">
                    Total Repayment
                  </span>
                  <p className="mt-1 text-[17px] font-bold text-brand-primary">
                    {formatINRCompact(results.totalRepayment)}
                  </p>
                </div>
              </div>

              {/* Principal vs Interest Distribution Bar */}
              <div className="mt-6 border-t border-[#E6E7EF] pt-5">
                <div className="flex items-center justify-between text-[13px] font-bold">
                  <span className="flex items-center gap-1.5 text-brand-primary">
                    <span className="size-2.5 rounded-full bg-brand-primary" />
                    Principal: {formatINR(amount)} ({principalRatio}%)
                  </span>
                  <span className="flex items-center gap-1.5 text-brand-accent">
                    <span className="size-2.5 rounded-full bg-brand-accent" />
                    Interest: {formatINR(results.totalInterest)} ({interestRatio}%)
                  </span>
                </div>

                <div className="mt-2.5 flex h-3 w-full overflow-hidden rounded-full bg-[#F5F5F9]">
                  <div
                    className="bg-brand-primary transition-all duration-300"
                    style={{ width: `${principalRatio}%` }}
                  />
                  <div
                    className="bg-brand-accent transition-all duration-300"
                    style={{ width: `${interestRatio}%` }}
                  />
                </div>
              </div>

              {moratoriumMonths > 0 && (
                <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-[12px] text-amber-900">
                  <span className="font-bold">Moratorium note:</span> During {moratoriumMonths} months of grace, simple interest of {formatINR(results.moratoriumInterest)} is accrued and added to principal before EMI amortization commences.
                </div>
              )}

              {/* HighEd Loan Assistance CTA */}
              <ToolCTA
                headline="Looking for pre-approved study loans?"
                subtext="HighEd partners with 15+ leading public banks & NBFCs to secure up to ₹1.5 Cr with zero collateral options and fastest 48-hour sanctions."
                buttonText="Check Pre-Approved Loan Offers"
                source="loan_emi_calculator"
                contextTitle={`Education Loan ₹${formatINRCompact(amount)} @ ${rate}% (${tenureYears} Yrs)`}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EducationLoanCalculator;
