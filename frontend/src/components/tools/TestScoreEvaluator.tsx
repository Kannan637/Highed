"use client";

import React, {
  useId,
  useMemo,
  useState,
  useCallback,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ArrowRight,
  ArrowLeft,
  Shield,
  CheckCircle2,
  RotateCcw,
  Languages,
  Mic,
  Lightbulb,
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
  calculateIelts,
  calculatePte,
  IeltsInput,
  PteInput,
} from "@/lib/calculators/testScoreCalculator";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import {
  FormFieldWrapper,
  ResultMetric,
  ToolCTA,
  ToolReset,
} from "./toolPrimitives";

/* ================================================================
   STANDALONE SCORE EVALUATOR CONSTANTS
================================================================ */

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Tools & Calculators", href: "/resources" },
  { label: "Test Score Evaluator" },
];

const HERO_IMAGE =
  "/images/tools/Playful IELTS PTE Score Evaluator.webp";
const HERO_IMAGE_ALT =
  "Student evaluating IELTS and PTE English proficiency test scores";

/* ================================================================
   INTERFACES & VALIDATION
================================================================ */

interface StepTwoErrors {
  phone?: string;
}

export interface TestScoreEvaluatorProps {
  id?: string;
  className?: string;
  standalone?: boolean;
}

const BAND_OPTIONS = [
  5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0,
];

/* ================================================================
   MAIN TEST SCORE EVALUATOR COMPONENT
================================================================ */

export const TestScoreEvaluator = ({
  id,
  className,
  standalone = true,
}: TestScoreEvaluatorProps = {}) => {
  /* ---- Common State ---- */
  const [activeTab, setActiveTab] = useState<"IELTS" | "PTE">("IELTS");

  // IELTS State
  const [ieltsListening, setIeltsListening] = useState<number>(7.5);
  const [ieltsReading, setIeltsReading] = useState<number>(7.0);
  const [ieltsWriting, setIeltsWriting] = useState<number>(6.5);
  const [ieltsSpeaking, setIeltsSpeaking] = useState<number>(7.0);

  // PTE State
  const [pteSpeaking, setPteSpeaking] = useState<number>(70);
  const [pteWriting, setPteWriting] = useState<number>(65);
  const [pteReading, setPteReading] = useState<number>(68);
  const [pteListening, setPteListening] = useState<number>(72);

  /* ---- Standalone Step State ---- */
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [phone, setPhone] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("+91");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [stepTwoErrors, setStepTwoErrors] = useState<StepTwoErrors>({});

  /* ---- Element IDs ---- */
  const lId = useId();
  const rId = useId();
  const wId = useId();
  const sId = useId();

  /* ---- Reset Handler ---- */
  const handleReset = useCallback(() => {
    if (activeTab === "IELTS") {
      setIeltsListening(7.5);
      setIeltsReading(7.0);
      setIeltsWriting(6.5);
      setIeltsSpeaking(7.0);
    } else {
      setPteSpeaking(70);
      setPteWriting(65);
      setPteReading(68);
      setPteListening(72);
    }

    setCurrentStep(1);
    setPhone("");
    setSubmitted(false);
    setShowConfetti(false);
    setStepTwoErrors({});

    trackEvent("calculator_reset", { tool: "test_score_evaluator" });
  }, [activeTab]);

  /* ---- Calculations ---- */
  const ieltsResults = useMemo(() => {
    const input: IeltsInput = {
      listening: Math.max(0, Math.min(9, ieltsListening || 0)),
      reading: Math.max(0, Math.min(9, ieltsReading || 0)),
      writing: Math.max(0, Math.min(9, ieltsWriting || 0)),
      speaking: Math.max(0, Math.min(9, ieltsSpeaking || 0)),
    };
    return calculateIelts(input);
  }, [ieltsListening, ieltsReading, ieltsWriting, ieltsSpeaking]);

  const pteResults = useMemo(() => {
    const input: PteInput = {
      speaking: Math.max(10, Math.min(90, Math.round(pteSpeaking || 10))),
      writing: Math.max(10, Math.min(90, Math.round(pteWriting || 10))),
      reading: Math.max(10, Math.min(90, Math.round(pteReading || 10))),
      listening: Math.max(10, Math.min(90, Math.round(pteListening || 10))),
    };
    return calculatePte(input);
  }, [pteSpeaking, pteWriting, pteReading, pteListening]);

  /* ---- Step 1 Next ---- */
  const handleNext = () => {
    setCurrentStep(2);
    trackEvent("calculator_step_one_completed", {
      tool: "test_score_evaluator",
      test: activeTab,
      score:
        activeTab === "IELTS"
          ? ieltsResults.overallBand
          : pteResults.overallScore,
    });
  };

  /* ---- Step 2 Back ---- */
  const handleBack = () => {
    setCurrentStep(1);
    setStepTwoErrors({});
  };

  /* ---- Step 2 Phone Submit ---- */
  const handleSubmitPhone = useCallback(async () => {
    const rawPhone = phone.trim();
    const digits = rawPhone.replace(/\D/g, "");
    const normCode = countryCode.trim().startsWith("+")
      ? countryCode.trim()
      : `+${countryCode.trim()}`;

    if (!digits) {
      setStepTwoErrors({ phone: "Please enter your mobile number" });
      return;
    }

    if (normCode === "+91") {
      if (digits.length !== 10 || !/^[6-9]/.test(digits)) {
        setStepTwoErrors({
          phone:
            "Please enter a valid 10-digit Indian mobile number starting with 6-9",
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
          source: "test_score_evaluator",
          page: "/tools/test-score-evaluator",
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data?.success !== false) {
        trackEvent("calculator_completed", {
          tool: "test_score_evaluator",
          test: activeTab,
          score:
            activeTab === "IELTS"
              ? ieltsResults.overallBand
              : pteResults.overallScore,
        });
        setSubmitted(true);
        setShowConfetti(true);
      } else {
        setStepTwoErrors({
          phone:
            data?.message || "Failed to submit request. Please try again.",
        });
      }
    } catch {
      setStepTwoErrors({
        phone: "Connection error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [
    phone,
    countryCode,
    activeTab,
    ieltsResults.overallBand,
    pteResults.overallScore,
  ]);

  /* ================================================================
     STANDALONE RENDER: STEP 1 LEFT (Score Inputs)
  ================================================================ */
  const renderStepOneLeft = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-[28px] font-bold leading-[1.15] text-brand-primary sm:text-[34px] lg:text-[40px]">
          Test Score Evaluator
        </h1>
        <p className="mt-2.5 max-w-lg text-[15px] leading-relaxed text-content-secondary">
          Calculate your official IELTS band or PTE Academic score and evaluate your university admissions readiness.
        </p>
      </div>

      {/* Test Selector Tabs */}
      <div className="inline-flex rounded-2xl border border-[#E6E7EF] bg-surface-subtle p-1.5 shadow-2xs">
        <button
          type="button"
          onClick={() => setActiveTab("IELTS")}
          className={cn(
            "btn-motion flex items-center gap-2 rounded-xl px-5 py-2 text-[14px] font-bold cursor-pointer transition-all",
            activeTab === "IELTS"
              ? "bg-brand-primary text-white shadow-xs"
              : "text-content-secondary hover:text-brand-primary"
          )}
        >
          <Languages size={17} />
          IELTS Academic
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("PTE")}
          className={cn(
            "btn-motion flex items-center gap-2 rounded-xl px-5 py-2 text-[14px] font-bold cursor-pointer transition-all",
            activeTab === "PTE"
              ? "bg-brand-primary text-white shadow-xs"
              : "text-content-secondary hover:text-brand-primary"
          )}
        >
          <Mic size={17} />
          PTE Academic
        </button>
      </div>

      <div className="space-y-4">
        {activeTab === "IELTS" ? (
          /* IELTS Section Selects */
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormFieldWrapper id={lId} label="Listening Band" required>
              <Select
                id={lId}
                value={ieltsListening}
                onChange={(e) => setIeltsListening(Number(e.target.value))}
              >
                {BAND_OPTIONS.map((b) => (
                  <option key={b} value={b}>
                    Band {b.toFixed(1)}
                  </option>
                ))}
              </Select>
            </FormFieldWrapper>

            <FormFieldWrapper id={rId} label="Reading Band" required>
              <Select
                id={rId}
                value={ieltsReading}
                onChange={(e) => setIeltsReading(Number(e.target.value))}
              >
                {BAND_OPTIONS.map((b) => (
                  <option key={b} value={b}>
                    Band {b.toFixed(1)}
                  </option>
                ))}
              </Select>
            </FormFieldWrapper>

            <FormFieldWrapper id={wId} label="Writing Band" required>
              <Select
                id={wId}
                value={ieltsWriting}
                onChange={(e) => setIeltsWriting(Number(e.target.value))}
              >
                {BAND_OPTIONS.map((b) => (
                  <option key={b} value={b}>
                    Band {b.toFixed(1)}
                  </option>
                ))}
              </Select>
            </FormFieldWrapper>

            <FormFieldWrapper id={sId} label="Speaking Band" required>
              <Select
                id={sId}
                value={ieltsSpeaking}
                onChange={(e) => setIeltsSpeaking(Number(e.target.value))}
              >
                {BAND_OPTIONS.map((b) => (
                  <option key={b} value={b}>
                    Band {b.toFixed(1)}
                  </option>
                ))}
              </Select>
            </FormFieldWrapper>
          </div>
        ) : (
          /* PTE Section Number Inputs */
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormFieldWrapper id={sId} label="Speaking Score (10–90)" required>
              <Input
                id={sId}
                type="number"
                min={10}
                max={90}
                value={pteSpeaking}
                onChange={(e) => setPteSpeaking(Number(e.target.value))}
              />
            </FormFieldWrapper>

            <FormFieldWrapper id={wId} label="Writing Score (10–90)" required>
              <Input
                id={wId}
                type="number"
                min={10}
                max={90}
                value={pteWriting}
                onChange={(e) => setPteWriting(Number(e.target.value))}
              />
            </FormFieldWrapper>

            <FormFieldWrapper id={rId} label="Reading Score (10–90)" required>
              <Input
                id={rId}
                type="number"
                min={10}
                max={90}
                value={pteReading}
                onChange={(e) => setPteReading(Number(e.target.value))}
              />
            </FormFieldWrapper>

            <FormFieldWrapper id={lId} label="Listening Score (10–90)" required>
              <Input
                id={lId}
                type="number"
                min={10}
                max={90}
                value={pteListening}
                onChange={(e) => setPteListening(Number(e.target.value))}
              />
            </FormFieldWrapper>
          </div>
        )}

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
              Next: View Score Evaluation
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
      const overallDisplay =
        activeTab === "IELTS"
          ? `${ieltsResults.overallBand.toFixed(1)} / 9.0`
          : `${pteResults.overallScore} / 90`;
      const titleTag =
        activeTab === "IELTS"
          ? ieltsResults.interpretation.tag
          : pteResults.interpretation.ieltsEquivalent;
      const interpretationTitle =
        activeTab === "IELTS"
          ? ieltsResults.interpretation.title
          : pteResults.interpretation.title;
      const interpretationDesc =
        activeTab === "IELTS"
          ? ieltsResults.interpretation.description
          : pteResults.interpretation.description;

      return (
        <div className="flex flex-col items-center justify-center py-6 text-center lg:items-start lg:text-left">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-feedback-success/10">
            <CheckCircle2 size={32} className="text-feedback-success" />
          </div>

          <h2 className="mt-6 text-[26px] font-bold text-brand-primary sm:text-[32px]">
            Your Score Report is on its way!
          </h2>

          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-content-secondary">
            We&apos;ve sent your official {activeTab} readiness report and university admission benchmarks. A HighEd test prep mentor will connect to share band enhancement strategies.
          </p>

          {/* Quick Score Preview Card */}
          <div className="mt-6 w-full max-w-md rounded-2xl border border-[#E6E7EF] bg-surface-subtle p-5 text-left">
            <div className="flex items-center justify-between border-b border-black/5 pb-3">
              <span className="text-[13px] font-bold uppercase tracking-wider text-content-secondary">
                {activeTab} Overall Band
              </span>
              <span className="rounded-full bg-brand-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-brand-primary">
                {titleTag}
              </span>
            </div>

            <div className="mt-3 flex items-baseline justify-between">
              <span className="text-[14px] font-medium text-content-secondary">
                {interpretationTitle}
              </span>
              <span className="text-[28px] font-bold text-brand-primary">
                {overallDisplay}
              </span>
            </div>

            <p className="mt-2 text-[13px] leading-relaxed text-content-secondary">
              {interpretationDesc}
            </p>

            {/* Section Breakdown Mini Pills */}
            <div className="mt-4 flex flex-wrap gap-2 border-t border-black/5 pt-3">
              {activeTab === "IELTS" ? (
                <>
                  <span className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-content-secondary shadow-2xs border border-black/5">
                    L: {ieltsListening}
                  </span>
                  <span className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-content-secondary shadow-2xs border border-black/5">
                    R: {ieltsReading}
                  </span>
                  <span className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-content-secondary shadow-2xs border border-black/5">
                    W: {ieltsWriting}
                  </span>
                  <span className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-content-secondary shadow-2xs border border-black/5">
                    S: {ieltsSpeaking}
                  </span>
                </>
              ) : (
                <>
                  <span className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-content-secondary shadow-2xs border border-black/5">
                    Speaking: {pteSpeaking}
                  </span>
                  <span className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-content-secondary shadow-2xs border border-black/5">
                    Writing: {pteWriting}
                  </span>
                  <span className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-content-secondary shadow-2xs border border-black/5">
                    Reading: {pteReading}
                  </span>
                  <span className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-content-secondary shadow-2xs border border-black/5">
                    Listening: {pteListening}
                  </span>
                </>
              )}
            </div>
          </div>

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
              <span>Evaluate Another Score</span>
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-[26px] font-bold leading-[1.15] text-brand-primary sm:text-[32px] lg:text-[38px]">
            Give your number to get the <span className="text-brand-accent"><i>score report</i></span>
          </h2>
          <p className="mt-2.5 max-w-lg text-[15px] leading-relaxed text-content-secondary">
            Get your official band score evaluation, university admission benchmarks, and test prep tips on WhatsApp.
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
            id="score-phone-input"
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
                {isSubmitting ? "Sending..." : "Get Score Report"}
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
              <span>Back to Score Inputs</span>
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
     STANDALONE RENDER: RIGHT SIDE VISUAL (Single Dedicated Hero Image)
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
              <div className="lg:col-span-6">{renderRightVisual()}</div>
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
     EMBEDDED MODE FALLBACK
  ================================================================ */
  return (
    <section id={id} className={cn("bg-[#F5F5F9] py-10 sm:py-14 lg:py-16", className)}>
      <Container size="lg">
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-2xl border border-[#E6E7EF] bg-white p-1.5 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab("IELTS")}
              className={`btn-motion flex items-center gap-2 rounded-xl px-6 py-2.5 text-[15px] font-bold ${
                activeTab === "IELTS"
                  ? "bg-brand-primary text-white shadow-xs"
                  : "text-content-secondary hover:text-brand-primary"
              }`}
            >
              <Languages size={18} />
              IELTS Academic
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("PTE")}
              className={`btn-motion flex items-center gap-2 rounded-xl px-6 py-2.5 text-[15px] font-bold ${
                activeTab === "PTE"
                  ? "bg-brand-primary text-white shadow-xs"
                  : "text-content-secondary hover:text-brand-primary"
              }`}
            >
              <Mic size={18} />
              PTE Academic
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* ================= LEFT COLUMN: INPUTS ================= */}
          <div className="space-y-6 lg:col-span-6">
            <div className="rounded-[24px] border border-[#E6E7EF] bg-white p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-[#E6E7EF] pb-4">
                <div className="flex items-center gap-2">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <Award size={18} />
                  </span>
                  <h2 className="text-[20px] font-bold text-brand-primary">
                    {activeTab} Section Scores
                  </h2>
                </div>
                <ToolReset onReset={handleReset} />
              </div>

              <div className="mt-6 space-y-6">
                {activeTab === "IELTS" ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormFieldWrapper id={lId} label="Listening Band" required>
                      <Select
                        id={lId}
                        value={ieltsListening}
                        onChange={(e) =>
                          setIeltsListening(Number(e.target.value))
                        }
                      >
                        {BAND_OPTIONS.map((b) => (
                          <option key={b} value={b}>
                            {b.toFixed(1)}
                          </option>
                        ))}
                      </Select>
                    </FormFieldWrapper>

                    <FormFieldWrapper id={rId} label="Reading Band" required>
                      <Select
                        id={rId}
                        value={ieltsReading}
                        onChange={(e) => setIeltsReading(Number(e.target.value))}
                      >
                        {BAND_OPTIONS.map((b) => (
                          <option key={b} value={b}>
                            {b.toFixed(1)}
                          </option>
                        ))}
                      </Select>
                    </FormFieldWrapper>

                    <FormFieldWrapper id={wId} label="Writing Band" required>
                      <Select
                        id={wId}
                        value={ieltsWriting}
                        onChange={(e) => setIeltsWriting(Number(e.target.value))}
                      >
                        {BAND_OPTIONS.map((b) => (
                          <option key={b} value={b}>
                            {b.toFixed(1)}
                          </option>
                        ))}
                      </Select>
                    </FormFieldWrapper>

                    <FormFieldWrapper id={sId} label="Speaking Band" required>
                      <Select
                        id={sId}
                        value={ieltsSpeaking}
                        onChange={(e) =>
                          setIeltsSpeaking(Number(e.target.value))
                        }
                      >
                        {BAND_OPTIONS.map((b) => (
                          <option key={b} value={b}>
                            {b.toFixed(1)}
                          </option>
                        ))}
                      </Select>
                    </FormFieldWrapper>
                  </div>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormFieldWrapper id={sId} label="Speaking (10-90)" required>
                      <Input
                        id={sId}
                        type="number"
                        min={10}
                        max={90}
                        value={pteSpeaking}
                        onChange={(e) => setPteSpeaking(Number(e.target.value))}
                      />
                    </FormFieldWrapper>

                    <FormFieldWrapper id={wId} label="Writing (10-90)" required>
                      <Input
                        id={wId}
                        type="number"
                        min={10}
                        max={90}
                        value={pteWriting}
                        onChange={(e) => setPteWriting(Number(e.target.value))}
                      />
                    </FormFieldWrapper>

                    <FormFieldWrapper id={rId} label="Reading (10-90)" required>
                      <Input
                        id={rId}
                        type="number"
                        min={10}
                        max={90}
                        value={pteReading}
                        onChange={(e) => setPteReading(Number(e.target.value))}
                      />
                    </FormFieldWrapper>

                    <FormFieldWrapper id={lId} label="Listening (10-90)" required>
                      <Input
                        id={lId}
                        type="number"
                        min={10}
                        max={90}
                        value={pteListening}
                        onChange={(e) =>
                          setPteListening(Number(e.target.value))
                        }
                      />
                    </FormFieldWrapper>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: STICKY RESULTS ================= */}
          <div className="space-y-6 lg:col-span-6 lg:sticky lg:top-24">
            <div className="rounded-[24px] border border-[#E6E7EF] bg-white p-6 sm:p-8">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
                Proficiency Assessment
              </span>
              <h3 className="mt-1 text-[22px] font-bold text-brand-primary">
                {activeTab} Overall Result
              </h3>

              <div className="mt-5">
                <ResultMetric
                  label={
                    activeTab === "IELTS"
                      ? "Overall Band Score"
                      : "PTE Overall Score"
                  }
                  value={
                    activeTab === "IELTS"
                      ? `${ieltsResults.overallBand.toFixed(1)} / 9.0`
                      : `${pteResults.overallScore} / 90`
                  }
                  subValue={
                    activeTab === "IELTS"
                      ? ieltsResults.interpretation.title
                      : pteResults.interpretation.title
                  }
                  badge={
                    activeTab === "IELTS"
                      ? ieltsResults.interpretation.tag
                      : pteResults.interpretation.ieltsEquivalent
                  }
                  highlight
                />
              </div>

              <p className="mt-4 text-[14px] leading-relaxed text-content-secondary">
                {activeTab === "IELTS"
                  ? ieltsResults.interpretation.description
                  : pteResults.interpretation.description}
              </p>

              <ToolCTA
                headline="Prepare for your exam with HighEd certified trainers"
                subtext="Get personalized 1-on-1 coaching, mock test evaluations, and admission band targets."
                buttonText="Book Free Trial Class"
                source="test_score_evaluator"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestScoreEvaluator;
