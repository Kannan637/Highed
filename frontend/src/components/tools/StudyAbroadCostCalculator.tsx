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
  Calculator,
  ArrowRight,
  ArrowLeft,
  Shield,
  CheckCircle2,
  RotateCcw,
  Building,
  Plane,
  ShieldCheck,
  FileText,
  DollarSign,
  Wallet,
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
  ACCOMMODATION_TYPES,
  accommodationLabels,
  costPresets,
  Destination,
  StudyLevel,
  AccommodationType,
} from "@/data/tools/costConfig";
import {
  calculateStudyCost,
  CostCalculatorInput,
} from "@/lib/calculators/costCalculator";
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
   STANDALONE COST CALCULATOR CONSTANTS
================================================================ */

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Tools & Calculators", href: "/resources" },
  { label: "Study Abroad Cost Calculator" },
];

const HERO_IMAGE =
  "/images/tools/Study Abroad Cost Calculator.webp";
const HERO_IMAGE_ALT =
  "Student calculating overseas education tuition, living expenses, and overall budget";

/* ================================================================
   INTERFACES & VALIDATION
================================================================ */

interface StepOneErrors {
  tuition?: string;
  rent?: string;
  living?: string;
}

interface StepTwoErrors {
  phone?: string;
}

export interface StudyAbroadCostCalculatorProps {
  id?: string;
  className?: string;
  standalone?: boolean;
}

/* ================================================================
   MAIN STUDY ABROAD COST CALCULATOR COMPONENT
================================================================ */

export const StudyAbroadCostCalculator = ({
  id,
  className,
  standalone = true,
}: StudyAbroadCostCalculatorProps = {}) => {
  /* ---- Common State ---- */
  const [destination, setDestination] = useState<Destination>("UK");
  const [studyLevel, setStudyLevel] =
    useState<StudyLevel>("Postgraduate");
  const [duration, setDuration] = useState<number>(1);
  const [accommodationType, setAccommodationType] =
    useState<AccommodationType>("Shared");

  // Get active preset for prefilling
  const preset = costPresets[destination];

  const [tuition, setTuition] = useState<number>(
    preset.tuitionPerYear[studyLevel]
  );
  const [rent, setRent] = useState<number>(
    preset.rentPerMonth[accommodationType]
  );
  const [living, setLiving] = useState<number>(preset.livingPerMonth);
  const [travel, setTravel] = useState<number>(preset.travelPerYear);
  const [insurance, setInsurance] = useState<number>(
    preset.insurancePerYear
  );
  const [visa, setVisa] = useState<number>(preset.visaOneTime);
  const [other, setOther] = useState<number>(50000);

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
  const destId = useId();
  const lvlId = useId();
  const durId = useId();
  const accId = useId();
  const tuitId = useId();
  const rentId = useId();
  const livId = useId();

  // Dynamic updates when destination changes
  const handleDestinationChange = (newDest: Destination) => {
    setDestination(newDest);
    const newPreset = costPresets[newDest];
    setTuition(newPreset.tuitionPerYear[studyLevel]);
    setRent(newPreset.rentPerMonth[accommodationType]);
    setLiving(newPreset.livingPerMonth);
    setTravel(newPreset.travelPerYear);
    setInsurance(newPreset.insurancePerYear);
    setVisa(newPreset.visaOneTime);
    trackEvent("calculator_started", { destination: newDest });
  };

  const handleStudyLevelChange = (newLevel: StudyLevel) => {
    setStudyLevel(newLevel);
    setTuition(costPresets[destination].tuitionPerYear[newLevel]);
  };

  const handleAccommodationChange = (newType: AccommodationType) => {
    setAccommodationType(newType);
    setRent(costPresets[destination].rentPerMonth[newType]);
  };

  const handleReset = useCallback(() => {
    const defDest: Destination = "UK";
    const defLevel: StudyLevel = "Postgraduate";
    const defAcc: AccommodationType = "Shared";
    const defPreset = costPresets[defDest];

    setDestination(defDest);
    setStudyLevel(defLevel);
    setDuration(1);
    setAccommodationType(defAcc);
    setTuition(defPreset.tuitionPerYear[defLevel]);
    setRent(defPreset.rentPerMonth[defAcc]);
    setLiving(defPreset.livingPerMonth);
    setTravel(defPreset.travelPerYear);
    setInsurance(defPreset.insurancePerYear);
    setVisa(defPreset.visaOneTime);
    setOther(50000);

    setCurrentStep(1);
    setPhone("");
    setSubmitted(false);
    setShowConfetti(false);
    setStepOneErrors({});
    setStepTwoErrors({});

    trackEvent("calculator_reset", { tool: "cost_calculator" });
  }, []);

  const calculationInput: CostCalculatorInput = useMemo(
    () => ({
      country: destination,
      studyLevel,
      duration,
      tuition: Math.max(0, Number(tuition) || 0),
      accommodationType,
      accommodation: Math.max(0, Number(rent) || 0),
      living: Math.max(0, Number(living) || 0),
      travel: Math.max(0, Number(travel) || 0),
      insurance: Math.max(0, Number(insurance) || 0),
      visa: Math.max(0, Number(visa) || 0),
      other: Math.max(0, Number(other) || 0),
    }),
    [
      destination,
      studyLevel,
      duration,
      tuition,
      accommodationType,
      rent,
      living,
      travel,
      insurance,
      visa,
      other,
    ]
  );

  const results = useMemo(() => {
    return calculateStudyCost(calculationInput);
  }, [calculationInput]);

  /* ---- Step 1 Validation & Next ---- */
  const handleNext = () => {
    const errors: StepOneErrors = {};

    if (!tuition || tuition <= 0) {
      errors.tuition = "Please enter annual tuition fee";
    }

    if (rent < 0) {
      errors.rent = "Monthly rent cannot be negative";
    }

    if (living < 0) {
      errors.living = "Monthly living expense cannot be negative";
    }

    if (Object.keys(errors).length > 0) {
      setStepOneErrors(errors);
      return;
    }

    setStepOneErrors({});
    setCurrentStep(2);
    trackEvent("calculator_step_one_completed", {
      tool: "cost_calculator",
      destination,
      studyLevel,
      total: results.total,
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
          source: "cost_calculator",
          page: "/tools/study-abroad-cost",
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data?.success !== false) {
        trackEvent("calculator_completed", {
          tool: "cost_calculator",
          destination,
          studyLevel,
          total: results.total,
          annualAverage: results.annualRecurring,
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
    destination,
    studyLevel,
    results.total,
    results.annualRecurring,
  ]);

  /* ================================================================
     STANDALONE RENDER: STEP 1 LEFT (Cost Inputs)
  ================================================================ */
  const renderStepOneLeft = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-[28px] font-bold leading-[1.15] text-brand-primary sm:text-[34px] lg:text-[40px]">
          Study Abroad Cost <span className="text-brand-accent"><i>Calculator</i></span>
        </h1>
        <p className="mt-2.5 max-w-lg text-[15px] leading-relaxed text-content-secondary">
          Calculate your itemized tuition fees, accommodation, living expenses, and overall budget.
        </p>
      </div>

      <div className="space-y-4">
        {/* Row 1: Destination & Study Level */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormFieldWrapper id={destId} label="Destination Country" required>
            <Select
              id={destId}
              value={destination}
              onChange={(e) =>
                handleDestinationChange(e.target.value as Destination)
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
                handleStudyLevelChange(e.target.value as StudyLevel)
              }
            >
              {STUDY_LEVELS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Select>
          </FormFieldWrapper>
        </div>

        {/* Row 2: Duration & Accommodation Type */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormFieldWrapper id={durId} label="Course Duration" required>
            <Select
              id={durId}
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
            >
              {[1, 2, 3, 4].map((yr) => (
                <option key={yr} value={yr}>
                  {yr} {yr === 1 ? "Year" : "Years"}
                </option>
              ))}
            </Select>
          </FormFieldWrapper>

          <FormFieldWrapper id={accId} label="Accommodation Type" required>
            <Select
              id={accId}
              value={accommodationType}
              onChange={(e) =>
                handleAccommodationChange(e.target.value as AccommodationType)
              }
            >
              {ACCOMMODATION_TYPES.map((a) => (
                <option key={a} value={a}>
                  {accommodationLabels[a]}
                </option>
              ))}
            </Select>
          </FormFieldWrapper>
        </div>

        {/* Row 3: Annual Tuition */}
        <FormFieldWrapper
          id={tuitId}
          label="Estimated Annual Tuition (INR)"
          error={stepOneErrors.tuition}
          required
        >
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-semibold text-content-secondary">
              ₹
            </span>
            <Input
              id={tuitId}
              type="number"
              min={100000}
              step={50000}
              value={tuition || ""}
              onChange={(e) => {
                setTuition(Number(e.target.value));
                if (stepOneErrors.tuition) {
                  setStepOneErrors((p) => ({ ...p, tuition: undefined }));
                }
              }}
              error={!!stepOneErrors.tuition}
              placeholder="e.g. 1800000"
              className="pl-8"
            />
          </div>
        </FormFieldWrapper>

        {/* Row 4: Monthly Rent & Monthly Living */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormFieldWrapper
            id={rentId}
            label="Monthly Rent (INR)"
            error={stepOneErrors.rent}
            required
          >
            <div className="relative">
              <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-semibold text-content-secondary">
                ₹
              </span>
              <Input
                id={rentId}
                type="number"
                min={0}
                step={5000}
                value={rent || ""}
                onChange={(e) => {
                  setRent(Number(e.target.value));
                  if (stepOneErrors.rent) {
                    setStepOneErrors((p) => ({ ...p, rent: undefined }));
                  }
                }}
                error={!!stepOneErrors.rent}
                className="pl-8"
              />
            </div>
          </FormFieldWrapper>

          <FormFieldWrapper
            id={livId}
            label="Monthly Living Cost (INR)"
            error={stepOneErrors.living}
            required
          >
            <div className="relative">
              <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-semibold text-content-secondary">
                ₹
              </span>
              <Input
                id={livId}
                type="number"
                min={0}
                step={2000}
                value={living || ""}
                onChange={(e) => {
                  setLiving(Number(e.target.value));
                  if (stepOneErrors.living) {
                    setStepOneErrors((p) => ({ ...p, living: undefined }));
                  }
                }}
                error={!!stepOneErrors.living}
                className="pl-8"
              />
            </div>
          </FormFieldWrapper>
        </div>

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
              View Cost Breakdown
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
            Your Cost Sheet is on its way!
          </h2>

          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-content-secondary">
            We&apos;ve sent your complete {duration}-year budget estimation for studying in {destination}. A HighEd financial advisor will connect to help explore education loans and tuition grants.
          </p>

          {/* Quick Cost Summary Preview Card */}
          <div className="mt-6 w-full max-w-md rounded-2xl border border-[#E6E7EF] bg-surface-subtle p-5 text-left">
            <div className="flex items-center justify-between border-b border-black/5 pb-3">
              <span className="text-[13px] font-bold uppercase tracking-wider text-content-secondary">
                {destination} · {studyLevel} ({duration} {duration === 1 ? "Year" : "Years"})
              </span>
              <span className="rounded-full bg-brand-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-brand-primary">
                Estimated Total
              </span>
            </div>

            <div className="mt-3 flex items-baseline justify-between">
              <span className="text-[14px] font-medium text-content-secondary">
                Total Course Cost
              </span>
              <span className="text-[26px] font-bold text-brand-primary">
                {formatINR(results.total)}
              </span>
            </div>

            <div className="mt-1 flex items-baseline justify-between text-[13px] text-content-secondary">
              <span>Annual Average</span>
              <span className="font-semibold text-content-primary">
                {formatINR(results.annualRecurring)} / yr
              </span>
            </div>

            {/* Quick breakdown list */}
            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-black/5 pt-3 text-[12px]">
              <div>
                <span className="text-content-secondary">Tuition:</span>
                <span className="ml-1 font-semibold text-content-primary">
                  {formatINR(
                    results.breakdown.find((b) => b.key === "tuition")?.total || 0
                  )}
                </span>
              </div>
              <div>
                <span className="text-content-secondary">Housing:</span>
                <span className="ml-1 font-semibold text-content-primary">
                  {formatINR(
                    results.breakdown.find((b) => b.key === "accommodation")
                      ?.total || 0
                  )}
                </span>
              </div>
              <div>
                <span className="text-content-secondary">Living:</span>
                <span className="ml-1 font-semibold text-content-primary">
                  {formatINR(
                    results.breakdown.find((b) => b.key === "living")?.total || 0
                  )}
                </span>
              </div>
              <div>
                <span className="text-content-secondary">Flights & Visa:</span>
                <span className="ml-1 font-semibold text-content-primary">
                  {formatINR(
                    (results.breakdown.find((b) => b.key === "travel")?.total ||
                      0) +
                    (results.breakdown.find((b) => b.key === "visa")?.total ||
                      0)
                  )}
                </span>
              </div>
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
            Give your number to get the <span className="text-brand-accent"><i>cost sheet</i></span>
          </h2>
          <p className="mt-2.5 max-w-lg text-[15px] leading-relaxed text-content-secondary">
            Get your itemized tuition, accommodation, and living expense breakdown directly on WhatsApp.
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
            id="cost-phone-input"
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
                {isSubmitting ? "Sending..." : "Get Cost Breakdown"}
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
              <span>Back to Cost Inputs</span>
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
                    <Calculator size={18} />
                  </span>
                  <h2 className="text-[20px] font-bold text-brand-primary">
                    Study Parameters
                  </h2>
                </div>
                <ToolReset onReset={handleReset} />
              </div>

              <div className="mt-6 space-y-6">
                <div className="grid gap-4 sm:grid-cols-3">
                  <FormFieldWrapper id={destId} label="Destination" required>
                    <Select
                      id={destId}
                      value={destination}
                      onChange={(e) =>
                        handleDestinationChange(e.target.value as Destination)
                      }
                    >
                      {DESTINATIONS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </Select>
                  </FormFieldWrapper>

                  <FormFieldWrapper id={lvlId} label="Level of Study" required>
                    <Select
                      id={lvlId}
                      value={studyLevel}
                      onChange={(e) =>
                        handleStudyLevelChange(e.target.value as StudyLevel)
                      }
                    >
                      {STUDY_LEVELS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </Select>
                  </FormFieldWrapper>

                  <FormFieldWrapper id={durId} label="Duration (Years)" required>
                    <Select
                      id={durId}
                      value={duration}
                      onChange={(e) => setDuration(Number(e.target.value))}
                    >
                      {[1, 2, 3, 4].map((yr) => (
                        <option key={yr} value={yr}>
                          {yr} {yr === 1 ? "Year" : "Years"}
                        </option>
                      ))}
                    </Select>
                  </FormFieldWrapper>
                </div>

                <div className="border-t border-[#E6E7EF] pt-4">
                  <FormFieldWrapper id={tuitId} label="Annual Tuition Fee" required>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-semibold text-content-secondary">
                        ₹
                      </span>
                      <Input
                        id={tuitId}
                        type="number"
                        min={0}
                        step={50000}
                        value={tuition || ""}
                        onChange={(e) => setTuition(Number(e.target.value))}
                        className="pl-8"
                      />
                    </div>
                  </FormFieldWrapper>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormFieldWrapper id={accId} label="Accommodation Type" required>
                    <Select
                      id={accId}
                      value={accommodationType}
                      onChange={(e) =>
                        handleAccommodationChange(
                          e.target.value as AccommodationType
                        )
                      }
                    >
                      {ACCOMMODATION_TYPES.map((a) => (
                        <option key={a} value={a}>
                          {accommodationLabels[a]}
                        </option>
                      ))}
                    </Select>
                  </FormFieldWrapper>

                  <FormFieldWrapper id={rentId} label="Monthly Rent" required>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-semibold text-content-secondary">
                        ₹
                      </span>
                      <Input
                        id={rentId}
                        type="number"
                        min={0}
                        step={5000}
                        value={rent || ""}
                        onChange={(e) => setRent(Number(e.target.value))}
                        className="pl-8"
                      />
                    </div>
                  </FormFieldWrapper>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: STICKY RESULTS ================= */}
          <div className="space-y-6 lg:col-span-5 lg:sticky lg:top-24">
            <div className="rounded-[24px] border border-[#E6E7EF] bg-white p-6 sm:p-8">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
                Cost Summary
              </span>
              <h3 className="mt-1 text-[22px] font-bold text-brand-primary">
                Total Estimated Cost
              </h3>

              <div className="mt-5">
                <ResultMetric
                  label={`Total ${duration}-Year Expense in ${destination}`}
                  value={formatINR(results.total)}
                  subValue={`${formatINR(results.annualRecurring)} / year average`}
                  highlight
                />
              </div>

              <div className="mt-6 space-y-3 border-t border-[#E6E7EF] pt-4 text-[13px]">
                <div className="flex justify-between">
                  <span className="text-content-secondary">Tuition:</span>
                  <span className="font-semibold text-content-primary">
                    {formatINR(
                      results.breakdown.find((b) => b.key === "tuition")?.total || 0
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-content-secondary">Housing:</span>
                  <span className="font-semibold text-content-primary">
                    {formatINR(
                      results.breakdown.find((b) => b.key === "accommodation")
                        ?.total || 0
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-content-secondary">Living Expenses:</span>
                  <span className="font-semibold text-content-primary">
                    {formatINR(
                      results.breakdown.find((b) => b.key === "living")?.total || 0
                    )}
                  </span>
                </div>
              </div>

              <ToolCTA
                headline="Plan your study abroad budget with an expert"
                subtext={`Get detailed loan and scholarship options for ${destination}.`}
                buttonText="Book Free Budget Planning"
                source="cost_calculator"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StudyAbroadCostCalculator;
