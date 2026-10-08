"use client";

import React, {
  useId,
  useMemo,
  useState,
  useCallback,
  useEffect,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Landmark,
  Percent,
  IndianRupee,
  ArrowRight,
  ArrowLeft,
  Shield,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import { PhoneInput } from "@/components/forms/PhoneInput";
import { MASTER_CTA_CLASSNAME } from "@/components/forms/LeadCTAButton";
import { ConfettiBurst } from "./ConfettiBurst";
import { ToolBreadcrumbBar } from "./ToolBreadcrumbBar";
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

/* ================================================================
   STANDALONE CALCULATOR CONSTANTS
================================================================ */

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Tools & Calculators", href: "/resources" },
  { label: "Education Loan Calculator" },
];

const HERO_IMAGE =
  "/images/tools/Playful Student Finance Calculator Illustration.webp";
const HERO_IMAGE_ALT =
  "Student calculating overseas education loan and repayment details";

/* ================================================================
   VALIDATION INTERFACES
================================================================ */

interface StepOneErrors {
  amount?: string;
  rate?: string;
  tenureYears?: string;
}

interface StepTwoErrors {
  phone?: string;
}

export interface EducationLoanCalculatorProps {
  id?: string;
  className?: string;
  standalone?: boolean;
}



/* ================================================================
   MAIN CALCULATOR COMPONENT
================================================================ */

export const EducationLoanCalculator = ({
  id,
  className,
  standalone = false,
}: EducationLoanCalculatorProps = {}) => {
  /* ---- Common State ---- */
  const [amount, setAmount] = useState<number>(loanConfig.defaults.amount);
  const [rate, setRate] = useState<number>(loanConfig.defaults.rate);
  const [tenureYears, setTenureYears] = useState<number>(
    loanConfig.defaults.tenureYears
  );
  const [moratoriumMonths, setMoratoriumMonths] = useState<number>(
    loanConfig.defaults.moratoriumMonths
  );

  /* ---- Standalone Step Flow State (1 = Inputs, 2 = Phone Capture) ---- */
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  /* ---- Validation State ---- */
  const [stepOneErrors, setStepOneErrors] = useState<StepOneErrors>({});
  const [stepTwoErrors, setStepTwoErrors] = useState<StepTwoErrors>({});

  /* ---- Accessibility IDs ---- */
  const amountId = useId();
  const rateId = useId();
  const tenureId = useId();
  const moratId = useId();

  const handleReset = useCallback(() => {
    setAmount(loanConfig.defaults.amount);
    setRate(loanConfig.defaults.rate);
    setTenureYears(loanConfig.defaults.tenureYears);
    setMoratoriumMonths(loanConfig.defaults.moratoriumMonths);
    setCurrentStep(1);
    setCountryCode("+91");
    setPhone("");
    setSubmitted(false);
    setIsSubmitting(false);
    setShowConfetti(false);
    setStepOneErrors({});
    setStepTwoErrors({});
    trackEvent("calculator_reset", { tool: "emi_calculator" });
  }, []);

  /* ---- Calculation Input & Output ---- */
  const calculationInput: EmiCalculatorInput = useMemo(
    () => ({
      amount: Math.max(0, Math.min(loanConfig.maxAmount, Number(amount) || 0)),
      rate: Math.max(0, Math.min(30, Number(rate) || 0)),
      tenureYears,
      moratoriumMonths,
    }),
    [amount, rate, tenureYears, moratoriumMonths]
  );

  const results = useMemo(
    () => calculateEmi(calculationInput),
    [calculationInput]
  );

  useEffect(() => {
    if (!standalone) {
      trackEvent("emi_calculated", {
        tool: "emi_calculator",
        amount,
        rate,
        tenureYears,
        emi: results.emi,
      });
    }
  }, [standalone, amount, rate, tenureYears, results.emi]);

  const principalRatio =
    results.totalRepayment > 0
      ? Math.round((amount / results.totalRepayment) * 100)
      : 100;
  const interestRatio = Math.max(0, 100 - principalRatio);

  const quickAmounts = [1500000, 2500000, 4000000, 6000000];

  /* ---- Standalone Step Handlers ---- */
  const validateStepOneFields = useCallback((): boolean => {
    const errs: StepOneErrors = {};
    if (!Number.isFinite(amount) || amount < loanConfig.minAmount) {
      errs.amount = `Minimum loan amount is ₹${loanConfig.minAmount.toLocaleString("en-IN")}`;
    } else if (amount > loanConfig.maxAmount) {
      errs.amount = `Maximum loan amount is ₹${(loanConfig.maxAmount / 1e7).toFixed(0)} Cr`;
    }

    if (!Number.isFinite(rate) || rate < 0) {
      errs.rate = "Please enter a valid interest rate";
    } else if (rate > 30) {
      errs.rate = "Interest rate cannot exceed 30%";
    }

    if (!Number.isFinite(tenureYears) || tenureYears < 1) {
      errs.tenureYears = "Please select loan tenure";
    }

    setStepOneErrors(errs);
    return Object.keys(errs).length === 0;
  }, [amount, rate, tenureYears]);

  const handleNext = useCallback(() => {
    const isValid = validateStepOneFields();
    if (!isValid) return;

    trackEvent("calculator_started", {
      tool: "loan_calculator",
      amount,
      rate,
      tenureYears,
    });

    trackEvent("emi_calculated", {
      amount,
      rate,
      tenureYears,
      emi: results.emi,
    });

    setCurrentStep(2);
  }, [validateStepOneFields, amount, rate, tenureYears, results.emi]);

  const handleBack = useCallback(() => {
    setCurrentStep(1);
  }, []);

  const handleSubmitPhone = useCallback(async () => {
    const digits = phone.replace(/\D/g, "");
    if (!digits) {
      setStepTwoErrors({ phone: "Please enter your mobile number" });
      return;
    }

    const normCode = countryCode.trim().startsWith("+")
      ? countryCode.trim()
      : `+${countryCode.trim()}`;

    if (normCode === "+91") {
      if (!/^[6-9]\d{9}$/.test(digits)) {
        setStepTwoErrors({
          phone: "Please enter a valid 10-digit Indian mobile number",
        });
        return;
      }
    } else {
      if (digits.length < 7 || digits.length > 15) {
        setStepTwoErrors({
          phone: "Please enter a valid mobile number (7-15 digits)",
        });
        return;
      }
    }

    setStepTwoErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: digits,
          countryCode: normCode,
          source: "loan_calculator",
          page: "/tools/education-loan-emi",
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data?.success !== false) {
        trackEvent("calculator_completed", {
          tool: "loan_calculator",
          amount,
          rate,
          tenureYears,
          emi: results.emi,
        });
        setSubmitted(true);
        setShowConfetti(true);
      } else {
        setStepTwoErrors({
          phone: data?.message || "Failed to submit request. Please try again.",
        });
      }
    } catch {
      setStepTwoErrors({
        phone: "Connection error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [phone, countryCode, amount, rate, tenureYears, results.emi]);

  /* ================================================================
     STANDALONE RENDER: STEP 1 LEFT (Loan Inputs)
  ================================================================ */
  const renderStepOneLeft = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-[28px] font-bold leading-[1.15] text-brand-primary sm:text-[34px] lg:text-[40px]">
          Educational Loan <span className="text-brand-accent"><i>Calculator</i></span>
        </h1>
        <p className="mt-2.5 max-w-lg text-[15px] leading-relaxed text-content-secondary">
          Calculate your estimated education loan and understand your repayment.
        </p>
      </div>

      <div className="space-y-5">
        {/* 1. Loan Amount */}
        <FormFieldWrapper
          id={amountId}
          label="Loan Amount"
          error={stepOneErrors.amount}
          hint={`Max ₹${(loanConfig.maxAmount / 1e7).toFixed(0)} Cr`}
          required
        >
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2">
              <IndianRupee size={16} className="text-content-secondary" />
            </span>
            <Input
              id={amountId}
              type="number"
              min={loanConfig.minAmount}
              max={loanConfig.maxAmount}
              step={50000}
              value={amount || ""}
              onChange={(e) => {
                setAmount(Number(e.target.value));
                if (stepOneErrors.amount) {
                  setStepOneErrors((p) => ({ ...p, amount: undefined }));
                }
              }}
              placeholder="Enter loan amount"
              error={!!stepOneErrors.amount}
              className="pl-10"
            />
          </div>

          {/* Quick amount pills */}
          <div className="flex flex-wrap gap-2 pt-1.5">
            {quickAmounts.map((q) => {
              const isSelected = amount === q;
              return (
                <button
                  key={q}
                  type="button"
                  onClick={() => {
                    setAmount(q);
                    if (stepOneErrors.amount) {
                      setStepOneErrors((p) => ({ ...p, amount: undefined }));
                    }
                  }}
                  className={cn(
                    "btn-motion rounded-full px-3.5 py-1.5 text-[12px] font-semibold transition-all cursor-pointer border",
                    isSelected
                      ? "bg-brand-primary text-white border-brand-primary shadow-xs"
                      : "bg-surface-subtle text-content-secondary border-black/5 hover:bg-neutral-200 hover:text-content-primary"
                  )}
                >
                  {formatINRCompact(q)}
                </button>
              );
            })}
          </div>
        </FormFieldWrapper>

        {/* 2. Interest Rate */}
        <FormFieldWrapper
          id={rateId}
          label="Interest Rate"
          error={stepOneErrors.rate}
          hint="Banks ~9.5–10.5%"
          required
        >
          <div className="relative">
            <Input
              id={rateId}
              type="number"
              min={0}
              max={30}
              step={0.1}
              value={rate || ""}
              onChange={(e) => {
                setRate(Number(e.target.value));
                if (stepOneErrors.rate) {
                  setStepOneErrors((p) => ({ ...p, rate: undefined }));
                }
              }}
              placeholder="Enter interest rate %"
              error={!!stepOneErrors.rate}
              className="pr-10"
            />
            <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2">
              <Percent size={16} className="text-content-secondary" />
            </span>
          </div>

          {/* Rate slider */}
          <input
            type="range"
            min={0}
            max={20}
            step={0.25}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            aria-label="Interest rate slider"
            className="mt-1.5 h-2 w-full cursor-pointer accent-brand-accent"
          />
        </FormFieldWrapper>

        {/* 3. Loan Tenure */}
        <FormFieldWrapper
          id={tenureId}
          label="Loan Tenure"
          error={stepOneErrors.tenureYears}
          required
        >
          <Select
            id={tenureId}
            value={tenureYears}
            onChange={(e) => {
              setTenureYears(Number(e.target.value));
              if (stepOneErrors.tenureYears) {
                setStepOneErrors((p) => ({ ...p, tenureYears: undefined }));
              }
            }}
            error={!!stepOneErrors.tenureYears}
          >
            {LOAN_TENURES_YEARS.map((y) => (
              <option key={y} value={y}>
                {y} {y === 1 ? "Year" : "Years"} ({y * 12} EMIs)
              </option>
            ))}
          </Select>
        </FormFieldWrapper>

        {/* Primary Step 1 Action Button */}
        <div className="pt-2">
          <Button
            type="button"
            variant="accent"
            size="lg"
            fullWidth
            onClick={handleNext}
            className={cn(MASTER_CTA_CLASSNAME, "h-13 cursor-pointer")}
          >
            <span className="flex items-center justify-center gap-2">
              View Loan Breakdown
              <ArrowRight size={18} />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );

  /* ================================================================
     STANDALONE RENDER: STEP 2 LEFT (Phone Lead Capture or Success)
  ================================================================ */
  const renderStepTwoLeft = () => {
    if (submitted) {
      return (
        <div className="flex flex-col items-center justify-center py-6 text-center lg:items-start lg:text-left">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-feedback-success/10">
            <CheckCircle2 size={32} className="text-feedback-success" />
          </div>
          <h2 className="mt-6 text-[26px] font-bold text-brand-primary sm:text-[32px]">
            Your Loan Report is on its way!
          </h2>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-content-secondary">
            We&apos;ve sent your personalized education loan breakdown and repayment schedule. A HighEd
            loan specialist will connect with you to review eligible bank offers.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className={cn(
                MASTER_CTA_CLASSNAME,
                "inline-flex h-13 items-center justify-center gap-2 rounded-full px-8 text-[15px] text-white hover:text-white"
              )}
            >
              <span>Back to Home</span>
              <ArrowRight size={18} />
            </Link>
            <Button
              type="button"
              variant="outline"
              size="default"
              onClick={handleReset}
              className="h-13 rounded-full border-black/15 bg-white px-6 text-[14px] font-semibold text-content-primary hover:bg-white hover:text-content-primary hover:border-black/15 shadow-none transition-none cursor-pointer"
            >
              <RotateCcw size={15} className="shrink-0 text-content-secondary" />
              <span>Calculate Another</span>
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-[26px] font-bold leading-[1.15] text-brand-primary sm:text-[32px] lg:text-[38px]">
            Give your number to get the <span className="text-brand-accent"><i>loan data</i></span>
          </h2>
          <p className="mt-2.5 max-w-lg text-[15px] leading-relaxed text-content-secondary">
            Get your personalized education loan details and repayment information directly on WhatsApp.
          </p>
        </div>

        <div className="max-w-md space-y-5">
          {/* Phone Input */}
          <PhoneInput
            countryCode={countryCode}
            phone={phone}
            onCountryCodeChange={setCountryCode}
            onPhoneChange={(val) => {
              setPhone(val);
              if (stepTwoErrors.phone) setStepTwoErrors({});
            }}
            error={stepTwoErrors.phone}
            id="calculator-phone-input"
            hideLabel={false}
          />

          {/* Action CTAs */}
          <div className="space-y-3 pt-1">
            <Button
              type="button"
              variant="accent"
              size="lg"
              fullWidth
              onClick={handleSubmitPhone}
              isLoading={isSubmitting}
              disabled={isSubmitting}
              className={cn(MASTER_CTA_CLASSNAME, "h-13 cursor-pointer")}
            >
              <span className="flex items-center justify-center gap-2">
                {isSubmitting ? "Sending..." : "Get Loan Details"}
                {!isSubmitting && <ArrowRight size={18} />}
              </span>
            </Button>

            <Button
              type="button"
              variant="ghost"
              fullWidth
              onClick={handleBack}
              disabled={isSubmitting}
              className="h-12 w-full rounded-full text-[14px] font-semibold text-content-secondary hover:bg-neutral-100 hover:text-brand-primary"
            >
              <ArrowLeft size={16} className="shrink-0" />
              <span>Back to Loan Calculator</span>
            </Button>
          </div>

          {/* Trust note */}
          <p className="flex items-center gap-1.5 text-[11px] text-content-secondary">
            <Shield size={13} className="shrink-0 text-brand-primary" />
            Your data is secure. We never share your details with third parties.
          </p>
        </div>
      </div>
    );
  };

  /* ================================================================
     STANDALONE RENDER: RIGHT SIDE VISUAL (Single Hero Illustration)
  ================================================================ */
  const renderRightVisual = () => (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full max-w-md lg:max-w-none">
        <Image
          src={HERO_IMAGE}
          alt={HERO_IMAGE_ALT}
          width={560}
          height={420}
          className="h-auto w-full rounded-2xl object-contain shadow-xs"
          priority
        />
      </div>
    </div>
  );

  /* ================================================================
     STANDALONE FULL EXPERIENCE
  ================================================================ */
  if (standalone) {
    const progressPercent = currentStep === 1 ? 50 : 100;

    return (
      <div className="flex min-h-screen flex-col bg-white font-body tracking-tight-5">
        <ConfettiBurst show={showConfetti} />

        {/* ---- TOP: Breadcrumb with 50% Accent Sliced Background ---- */}
        <ToolBreadcrumbBar items={BREADCRUMBS} />

        {/* ---- MAIN CONTENT ---- */}
        <div className="flex flex-1 flex-col justify-between">
          <Container size="lg" className="flex-1 py-8 sm:py-10 lg:py-12">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-0">
              {/* LEFT: Form Content (5 cols) */}
              <div className="lg:col-span-5 lg:pr-2">
                {currentStep === 1 ? renderStepOneLeft() : renderStepTwoLeft()}
              </div>

              {/* CENTER GAP (1 col) */}
              <div className="hidden lg:col-span-1 lg:block" />

              {/* RIGHT: Visual (6 cols) */}
              <div className="lg:col-span-6">
                {renderRightVisual()}
              </div>
            </div>
          </Container>

          {/* ---- BOTTOM: Full-Width Edge-to-Edge Progress Bar ---- */}
          <div className="w-full bg-[#E6E7EF]">
            <div
              className="h-3.5 bg-brand-accent transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
              role="progressbar"
              aria-valuenow={progressPercent}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
    );
  }

  /* ================================================================
     EMBEDDED MODE (Default / services/EducationLoan.tsx)
  ================================================================ */
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
                    {quickAmounts.map((q) => {
                      const isSelected = amount === q;
                      return (
                        <button
                          key={q}
                          type="button"
                          onClick={() => setAmount(q)}
                          className={cn(
                            "btn-motion rounded-full px-3.5 py-1.5 text-[12px] font-semibold transition-all cursor-pointer border",
                            isSelected
                              ? "bg-brand-primary text-white border-brand-primary shadow-xs"
                              : "bg-surface-subtle text-content-secondary border-black/5 hover:bg-neutral-200 hover:text-content-primary"
                          )}
                        >
                          {formatINRCompact(q)}
                        </button>
                      );
                    })}
                  </div>
                </FormFieldWrapper>

                {/* 2. Interest Rate */}
                <FormFieldWrapper
                  id={rateId}
                  label="Interest Rate (% p.a.)"
                  hint="Banks ~9.5–10.5%"
                  required
                >
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
                    <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-content-secondary">
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
                    className="mt-2 h-2 w-full cursor-pointer accent-brand-accent"
                  />
                </FormFieldWrapper>

                {/* 3. Loan Tenure */}
                <FormFieldWrapper
                  id={tenureId}
                  label="Loan Tenure (Years)"
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

                {/* 4. Moratorium Period */}
                <FormFieldWrapper
                  id={moratId}
                  label="Moratorium (Study Grace Period)"
                  hint="Course duration + 6 months"
                >
                  <Select
                    id={moratId}
                    value={moratoriumMonths}
                    onChange={(e) => setMoratoriumMonths(Number(e.target.value))}
                  >
                    {MORATORIUM_MONTHS.map((m) => (
                      <option key={m} value={m}>
                        {m === 0 ? "No moratorium (immediate)" : `${m} Months grace`}
                      </option>
                    ))}
                  </Select>
                </FormFieldWrapper>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: RESULTS ================= */}
          <div className="space-y-6 lg:col-span-6">
            {/* Hero EMI Card */}
            <div className="rounded-[24px] border border-brand-primary/20 bg-brand-primary p-6 text-white shadow-xl sm:p-8">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-white/70">
                Monthly EMI Installment
              </span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-[36px] font-bold tracking-tight sm:text-[44px]">
                  {formatINR(results.emi)}
                </span>
                <span className="text-white/80">/ month</span>
              </div>
              <p className="mt-2 text-[13px] text-white/80">
                Calculated on reducing-balance method with {tenureYears * 12} monthly payments.
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              <ResultMetric
                label="Principal Amount"
                value={formatINR(amount)}
                subValue={`${principalRatio}% of total repayment`}
              />
              <ResultMetric
                label="Total Interest Payable"
                value={formatINR(results.totalInterest)}
                subValue={`${interestRatio}% of total repayment`}
              />
              <ResultMetric
                label="Total Repayment Amount"
                value={formatINR(results.totalRepayment)}
                subValue="Principal + Total Interest"
              />
              <ResultMetric
                label="Moratorium Interest Accrued"
                value={formatINR(results.moratoriumInterest)}
                subValue={
                  moratoriumMonths > 0
                    ? "Added to principal before EMI"
                    : "Immediate repayment"
                }
              />
            </div>

            {/* Visual Ratio Bar */}
            <div className="rounded-[20px] border border-[#E6E7EF] bg-white p-5">
              <div className="flex items-center justify-between text-[13px] font-semibold">
                <span className="flex items-center gap-1.5 text-brand-primary">
                  <span className="size-2.5 rounded-full bg-brand-primary" />
                  Principal ({principalRatio}%)
                </span>
                <span className="flex items-center gap-1.5 text-brand-accent">
                  <span className="size-2.5 rounded-full bg-brand-accent" />
                  Interest ({interestRatio}%)
                </span>
              </div>
              <div className="mt-3 flex h-3 w-full overflow-hidden rounded-full bg-surface-subtle">
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

            {/* CTA */}
            <ToolCTA
              headline="Looking for competitive study abroad loan rates?"
              subtext="HighEd partners with top public & private banks (SBI, HDFC Credila, Avanse, InCred) offering collateral & non-collateral overseas education loans with exclusive rate discounts."
              buttonText="Compare Loan Offers"
              source="education_loan_calculator"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EducationLoanCalculator;
