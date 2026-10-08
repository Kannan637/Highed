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
  UserCheck,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ArrowRight,
  ArrowLeft,
  Shield,
  RotateCcw,
  GraduationCap,
  Sparkles,
  ListOrdered,
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
  DESTINATIONS,
  STUDY_LEVELS,
  Destination,
  StudyLevel,
} from "@/data/tools/costConfig";
import {
  BUDGET_RANGES,
  ENGLISH_TESTS,
  QUALIFICATIONS,
  WORK_EXPERIENCES,
  Qualification,
  WorkExperience,
  EnglishTest,
  BudgetRange,
} from "@/data/tools/eligibilityConfig";
import {
  evaluateProfileEligibility,
  EligibilityInput,
} from "@/lib/calculators/eligibilityCalculator";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import {
  FormFieldWrapper,
  ResultMetric,
  ToolCTA,
  ToolReset,
} from "./toolPrimitives";

/* ================================================================
   STANDALONE PROFILE CHECKER CONSTANTS
================================================================ */

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Tools & Calculators", href: "/resources" },
  { label: "Profile Eligibility Checker" },
];

const HERO_IMAGE =
  "/images/tools/Playful Profile Eligibility Checker.webp";
const HERO_IMAGE_ALT =
  "Student evaluating overseas university profile eligibility and admission readiness";

/* ================================================================
   INTERFACES & VALIDATION
================================================================ */

interface StepOneErrors {
  percentage?: string;
  backlogs?: string;
}

interface StepTwoErrors {
  phone?: string;
}

export interface ProfileEligibilityCheckerProps {
  id?: string;
  className?: string;
  standalone?: boolean;
}

/* ================================================================
   MAIN PROFILE ELIGIBILITY CHECKER COMPONENT
================================================================ */

export const ProfileEligibilityChecker = ({
  id,
  className,
  standalone = true,
}: ProfileEligibilityCheckerProps = {}) => {
  /* ---- Common State ---- */
  const [qualification, setQualification] =
    useState<Qualification>("Bachelor's");
  const [percentage, setPercentage] = useState<number>(72);
  const [backlogs, setBacklogs] = useState<number>(0);
  const [workExperience, setWorkExperience] =
    useState<WorkExperience>("1–2 years");
  const [englishTest, setEnglishTest] = useState<EnglishTest>("IELTS");
  const [score, setScore] = useState<number>(7.0);
  const [country, setCountry] = useState<Destination>("UK");
  const [studyLevel, setStudyLevel] =
    useState<StudyLevel>("Postgraduate");
  const [budget, setBudget] = useState<BudgetRange>("₹25–40L");

  /* ---- Standalone Step State ---- */
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [phone, setPhone] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("+91");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [stepOneErrors, setStepOneErrors] = useState<StepOneErrors>({});
  const [stepTwoErrors, setStepTwoErrors] = useState<StepTwoErrors>({});

  /* ---- Element IDs ---- */
  const qualId = useId();
  const pctId = useId();
  const backId = useId();
  const expId = useId();
  const testId = useId();
  const scoreId = useId();
  const ctryId = useId();
  const lvlId = useId();
  const budgId = useId();

  /* ---- Reset Handler ---- */
  const handleReset = useCallback(() => {
    setQualification("Bachelor's");
    setPercentage(72);
    setBacklogs(0);
    setWorkExperience("1–2 years");
    setEnglishTest("IELTS");
    setScore(7.0);
    setCountry("UK");
    setStudyLevel("Postgraduate");
    setBudget("₹25–40L");

    setCurrentStep(1);
    setPhone("");
    setSubmitted(false);
    setShowConfetti(false);
    setStepOneErrors({});
    setStepTwoErrors({});

    trackEvent("calculator_reset", { tool: "profile_checker" });
  }, []);

  /* ---- Calculations Memo ---- */
  const inputData: EligibilityInput = useMemo(
    () => ({
      qualification,
      percentage: Math.max(35, Math.min(100, Number(percentage) || 35)),
      backlogs: Math.max(0, Math.min(40, Number(backlogs) || 0)),
      workExperience,
      englishTest,
      score: englishTest !== "Not taken" ? Number(score) || 0 : undefined,
      country,
      studyLevel,
      budget,
    }),
    [
      qualification,
      percentage,
      backlogs,
      workExperience,
      englishTest,
      score,
      country,
      studyLevel,
      budget,
    ]
  );

  const results = useMemo(() => {
    return evaluateProfileEligibility(inputData);
  }, [inputData]);

  /* ---- Step 1 Validation & Next ---- */
  const handleNext = () => {
    const errors: StepOneErrors = {};

    if (!percentage || percentage < 35 || percentage > 100) {
      errors.percentage = "Please enter a valid percentage (35 - 100%)";
    }

    if (backlogs < 0 || backlogs > 40) {
      errors.backlogs = "Backlogs must be between 0 and 40";
    }

    if (Object.keys(errors).length > 0) {
      setStepOneErrors(errors);
      return;
    }

    setStepOneErrors({});
    setCurrentStep(2);
    trackEvent("calculator_step_one_completed", {
      tool: "profile_checker",
      country,
      qualification,
      percentage,
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
          source: "profile_checker",
          page: "/tools/profile-checker",
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data?.success !== false) {
        trackEvent("calculator_completed", {
          tool: "profile_checker",
          country,
          score: results.score,
          matchLevel: results.matchLevel,
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
  }, [phone, countryCode, country, results.score, results.matchLevel]);

  /* ================================================================
     STANDALONE RENDER: STEP 1 LEFT (Profile Inputs)
  ================================================================ */
  const renderStepOneLeft = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-[28px] font-bold leading-[1.15] text-brand-primary sm:text-[34px] lg:text-[40px]">
          Profile Eligibility Checker
        </h1>
        <p className="mt-2.5 max-w-lg text-[15px] leading-relaxed text-content-secondary">
          Evaluate your academic profile, English test scores, and budget against university admission criteria.
        </p>
      </div>

      <div className="space-y-4">
        {/* Row 1: Degree & Percentage */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormFieldWrapper id={qualId} label="Highest Degree" required>
            <Select
              id={qualId}
              value={qualification}
              onChange={(e) =>
                setQualification(e.target.value as Qualification)
              }
            >
              {QUALIFICATIONS.map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </Select>
          </FormFieldWrapper>

          <FormFieldWrapper
            id={pctId}
            label="Percentage / CGPA"
            error={stepOneErrors.percentage}
            required
          >
            <div className="relative">
              <Input
                id={pctId}
                type="number"
                min={35}
                max={100}
                step={0.5}
                value={percentage || ""}
                onChange={(e) => {
                  setPercentage(Number(e.target.value));
                  if (stepOneErrors.percentage) {
                    setStepOneErrors((p) => ({ ...p, percentage: undefined }));
                  }
                }}
                error={!!stepOneErrors.percentage}
                placeholder="e.g. 72"
                className="pr-8"
              />
              <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 font-semibold text-content-secondary">
                %
              </span>
            </div>
          </FormFieldWrapper>
        </div>

        {/* Row 2: Backlogs & Work Experience */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormFieldWrapper
            id={backId}
            label="Historical Backlogs"
            error={stepOneErrors.backlogs}
            required
          >
            <Input
              id={backId}
              type="number"
              min={0}
              max={40}
              value={backlogs}
              onChange={(e) => {
                setBacklogs(Number(e.target.value));
                if (stepOneErrors.backlogs) {
                  setStepOneErrors((p) => ({ ...p, backlogs: undefined }));
                }
              }}
              error={!!stepOneErrors.backlogs}
              placeholder="0"
            />
          </FormFieldWrapper>

          <FormFieldWrapper id={expId} label="Work Experience" required>
            <Select
              id={expId}
              value={workExperience}
              onChange={(e) =>
                setWorkExperience(e.target.value as WorkExperience)
              }
            >
              {WORK_EXPERIENCES.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </Select>
          </FormFieldWrapper>
        </div>

        {/* Row 3: Target Country & Study Level */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormFieldWrapper id={ctryId} label="Target Country" required>
            <Select
              id={ctryId}
              value={country}
              onChange={(e) => setCountry(e.target.value as Destination)}
            >
              {DESTINATIONS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </Select>
          </FormFieldWrapper>

          <FormFieldWrapper id={lvlId} label="Target Study Level" required>
            <Select
              id={lvlId}
              value={studyLevel}
              onChange={(e) => setStudyLevel(e.target.value as StudyLevel)}
            >
              {STUDY_LEVELS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Select>
          </FormFieldWrapper>
        </div>

        {/* Row 4: English Exam & Score */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormFieldWrapper id={testId} label="English Exam" required>
            <Select
              id={testId}
              value={englishTest}
              onChange={(e) =>
                setEnglishTest(e.target.value as EnglishTest)
              }
            >
              {ENGLISH_TESTS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </Select>
          </FormFieldWrapper>

          {englishTest !== "Not taken" ? (
            <FormFieldWrapper id={scoreId} label="Exam Score" required>
              <Input
                id={scoreId}
                type="number"
                min={0}
                max={englishTest === "PTE" ? 90 : 120}
                step={englishTest === "IELTS" ? 0.5 : 1}
                value={score || ""}
                onChange={(e) => setScore(Number(e.target.value))}
                placeholder={englishTest === "IELTS" ? "e.g. 7.0" : "e.g. 68"}
              />
            </FormFieldWrapper>
          ) : (
            <FormFieldWrapper id={budgId} label="Planned Budget" required>
              <Select
                id={budgId}
                value={budget}
                onChange={(e) => setBudget(e.target.value as BudgetRange)}
              >
                {BUDGET_RANGES.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </Select>
            </FormFieldWrapper>
          )}
        </div>

        {englishTest !== "Not taken" && (
          <FormFieldWrapper id={budgId} label="Planned Budget" required>
            <Select
              id={budgId}
              value={budget}
              onChange={(e) => setBudget(e.target.value as BudgetRange)}
            >
              {BUDGET_RANGES.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </Select>
          </FormFieldWrapper>
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
              Next: View Eligibility Breakdown
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
            Your Eligibility Report is on its way!
          </h2>

          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-content-secondary">
            We&apos;ve sent your personalized profile evaluation and university match breakdown for {country}. A HighEd admissions specialist will connect with you to review tailored university options.
          </p>

          {/* Quick Results Summary Preview Card */}
          <div className="mt-6 w-full max-w-md rounded-2xl border border-[#E6E7EF] bg-surface-subtle p-5 text-left">
            <div className="flex items-center justify-between border-b border-black/5 pb-3">
              <span className="text-[13px] font-bold uppercase tracking-wider text-content-secondary">
                {country} Compatibility
              </span>
              <span
                className={cn(
                  "rounded-full px-2.5 py-0.5 text-[11px] font-bold",
                  results.matchLevel === "Strong Match"
                    ? "bg-emerald-100 text-emerald-800"
                    : results.matchLevel === "Moderate Match"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-rose-100 text-rose-800"
                )}
              >
                {results.matchLevel}
              </span>
            </div>

            <div className="mt-3 flex items-baseline justify-between">
              <span className="text-[14px] font-medium text-content-secondary">
                Compatibility Score
              </span>
              <span className="text-[24px] font-bold text-brand-primary">
                {results.score} / 100
              </span>
            </div>

            <p className="mt-2 text-[13px] leading-relaxed text-content-secondary">
              {results.summary}
            </p>

            {results.strengths.length > 0 && (
              <div className="mt-3 pt-3 border-t border-black/5">
                <span className="text-[12px] font-bold text-emerald-700">
                  Key Strength:
                </span>
                <p className="text-[12px] text-content-secondary mt-0.5">
                  {results.strengths[0]}
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className={cn(
                MASTER_CTA_CLASSNAME,
                "inline-flex h-13 items-center justify-center gap-2 px-8 text-[15px]"
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
              className="h-13 rounded-full border-black/15 px-6 text-[14px] font-semibold text-content-primary hover:bg-neutral-50 cursor-pointer"
            >
              <RotateCcw size={15} className="mr-1.5 text-content-secondary" />
              Evaluate Another Profile
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-[26px] font-bold leading-[1.15] text-brand-primary sm:text-[32px] lg:text-[38px]">
            Give your number to get the eligibility report
          </h2>
          <p className="mt-2.5 max-w-lg text-[15px] leading-relaxed text-content-secondary">
            Get your compatibility score, admission benchmarks, and eligible university shortlist directly on WhatsApp.
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
            id="profile-phone-input"
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
                {isSubmitting ? "Sending..." : "Get Eligibility Report"}
                {!isSubmitting && <ArrowRight size={18} />}
              </span>
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="md"
              fullWidth
              onClick={handleBack}
              disabled={isSubmitting}
              className="h-11 rounded-full text-content-secondary hover:text-brand-primary hover:bg-neutral-100 font-semibold text-[14px]"
            >
              <ArrowLeft size={16} className="mr-1.5" />
              Back to Profile Inputs
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
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* ================= LEFT COLUMN: INPUTS ================= */}
          <div className="space-y-6 lg:col-span-7">
            <div className="rounded-[24px] border border-[#E6E7EF] bg-white p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-[#E6E7EF] pb-4">
                <div className="flex items-center gap-2">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <UserCheck size={18} />
                  </span>
                  <h2 className="text-[20px] font-bold text-brand-primary">
                    Profile Assessment Details
                  </h2>
                </div>
                <ToolReset onReset={handleReset} />
              </div>

              <div className="mt-6 space-y-6">
                <div className="grid gap-4 sm:grid-cols-3">
                  <FormFieldWrapper id={qualId} label="Highest Degree" required>
                    <Select
                      id={qualId}
                      value={qualification}
                      onChange={(e) =>
                        setQualification(e.target.value as Qualification)
                      }
                    >
                      {QUALIFICATIONS.map((q) => (
                        <option key={q} value={q}>
                          {q}
                        </option>
                      ))}
                    </Select>
                  </FormFieldWrapper>

                  <FormFieldWrapper id={pctId} label="Percentage / CGPA" required>
                    <div className="relative">
                      <Input
                        id={pctId}
                        type="number"
                        min={35}
                        max={100}
                        step={0.5}
                        value={percentage || ""}
                        onChange={(e) => setPercentage(Number(e.target.value))}
                        className="pr-8"
                      />
                      <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 font-semibold text-content-secondary">
                        %
                      </span>
                    </div>
                  </FormFieldWrapper>

                  <FormFieldWrapper id={backId} label="Backlogs" required>
                    <Input
                      id={backId}
                      type="number"
                      min={0}
                      max={40}
                      value={backlogs}
                      onChange={(e) => setBacklogs(Number(e.target.value))}
                    />
                  </FormFieldWrapper>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <FormFieldWrapper id={expId} label="Work Experience" required>
                    <Select
                      id={expId}
                      value={workExperience}
                      onChange={(e) =>
                        setWorkExperience(e.target.value as WorkExperience)
                      }
                    >
                      {WORK_EXPERIENCES.map((w) => (
                        <option key={w} value={w}>
                          {w}
                        </option>
                      ))}
                    </Select>
                  </FormFieldWrapper>

                  <FormFieldWrapper id={testId} label="English Exam" required>
                    <Select
                      id={testId}
                      value={englishTest}
                      onChange={(e) =>
                        setEnglishTest(e.target.value as EnglishTest)
                      }
                    >
                      {ENGLISH_TESTS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </Select>
                  </FormFieldWrapper>

                  {englishTest !== "Not taken" && (
                    <FormFieldWrapper id={scoreId} label="Exam Score" required>
                      <Input
                        id={scoreId}
                        type="number"
                        min={0}
                        max={englishTest === "PTE" ? 90 : 120}
                        step={englishTest === "IELTS" ? 0.5 : 1}
                        value={score || ""}
                        onChange={(e) => setScore(Number(e.target.value))}
                      />
                    </FormFieldWrapper>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <FormFieldWrapper id={ctryId} label="Target Country" required>
                    <Select
                      id={ctryId}
                      value={country}
                      onChange={(e) =>
                        setCountry(e.target.value as Destination)
                      }
                    >
                      {DESTINATIONS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </Select>
                  </FormFieldWrapper>

                  <FormFieldWrapper id={lvlId} label="Study Level" required>
                    <Select
                      id={lvlId}
                      value={studyLevel}
                      onChange={(e) =>
                        setStudyLevel(e.target.value as StudyLevel)
                      }
                    >
                      {STUDY_LEVELS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </Select>
                  </FormFieldWrapper>

                  <FormFieldWrapper id={budgId} label="Planned Budget" required>
                    <Select
                      id={budgId}
                      value={budget}
                      onChange={(e) => setBudget(e.target.value as BudgetRange)}
                    >
                      {BUDGET_RANGES.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </Select>
                  </FormFieldWrapper>
                </div>
              </div>
            </div>

            {/* Checklist Matrix */}
            <div className="rounded-[24px] border border-[#E6E7EF] bg-white p-6 sm:p-8">
              <h3 className="text-[18px] font-bold text-brand-primary">
                Eligibility Checklist Breakdown
              </h3>
              <p className="mt-1 text-[13px] text-content-secondary">
                Transparent verification against {country}&apos;s university and visa benchmarks
              </p>

              <div className="mt-4 divide-y divide-[#E6E7EF]">
                {results.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-2.5">
                      {item.status === "pass" && (
                        <CheckCircle2 size={18} className="text-emerald-600" />
                      )}
                      {item.status === "warn" && (
                        <AlertTriangle size={18} className="text-amber-500" />
                      )}
                      {item.status === "fail" && (
                        <XCircle size={18} className="text-destructive" />
                      )}
                      <span className="font-semibold text-content-primary">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-right text-[13px] text-content-secondary">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: STICKY RESULTS ================= */}
          <div className="space-y-6 lg:col-span-5 lg:sticky lg:top-24" aria-live="polite">
            <div className="rounded-[24px] border border-[#E6E7EF] bg-white p-6 sm:p-8">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
                Profile Match Assessment
              </span>
              <h3 className="mt-1 text-[22px] font-bold text-brand-primary">
                Admissions Compatibility
              </h3>

              <div className="mt-5">
                <ResultMetric
                  label={`Compatibility Score for ${country}`}
                  value={`${results.score} / 100`}
                  subValue={results.matchLevel}
                  badge={results.matchLevel}
                  highlight={results.matchLevel === "Strong Match"}
                />
              </div>

              <p className="mt-4 text-[14px] leading-relaxed text-content-secondary">
                {results.summary}
              </p>

              {results.strengths.length > 0 && (
                <div className="mt-5 border-t border-[#E6E7EF] pt-4">
                  <h4 className="flex items-center gap-1.5 text-[13px] font-bold text-emerald-700">
                    <CheckCircle2 size={15} /> Key Strengths
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-[12px] text-content-secondary">
                    {results.strengths.map((str, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="mt-1 size-1.5 shrink-0 rounded-full bg-emerald-600" />
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <ToolCTA
                headline="Get your tailored university shortlist"
                subtext={`With an eligibility score of ${results.score}/100, our certified advisors can shortlist ambitious, target, and safe universities for ${country}.`}
                buttonText="Speak With a Counsellor"
                source="profile_eligibility_checker"
                contextTitle={`Profile Match: ${results.score}/100 for ${country} (${qualification} ${percentage}%)`}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProfileEligibilityChecker;
