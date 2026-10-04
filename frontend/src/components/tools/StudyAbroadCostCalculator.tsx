"use client";

import React, { useId, useMemo, useState } from "react";
import {
  Calculator,
  ChevronRight,
  ChevronLeft,
  Info,
  DollarSign,
  Building,
  Plane,
  ShieldCheck,
  FileText,
  RotateCcw,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
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
import {
  FormFieldWrapper,
  ResultMetric,
  ToolCTA,
  ToolReset,
  ToolStepper,
} from "./toolPrimitives";

export const StudyAbroadCostCalculator = () => {
  const [destination, setDestination] = useState<Destination>("UK");
  const [studyLevel, setStudyLevel] = useState<StudyLevel>("Postgraduate");
  const [duration, setDuration] = useState<number>(1);
  const [accommodationType, setAccommodationType] = useState<AccommodationType>("Shared");

  // Get active preset for prefilling
  const preset = costPresets[destination];

  const [tuition, setTuition] = useState<number>(preset.tuitionPerYear[studyLevel]);
  const [rent, setRent] = useState<number>(preset.rentPerMonth[accommodationType]);
  const [living, setLiving] = useState<number>(preset.livingPerMonth);
  const [travel, setTravel] = useState<number>(preset.travelPerYear);
  const [insurance, setInsurance] = useState<number>(preset.insurancePerYear);
  const [visa, setVisa] = useState<number>(preset.visaOneTime);
  const [other, setOther] = useState<number>(50000);

  // Mobile multi-step state (1 to 5)
  const [currentStep, setCurrentStep] = useState<number>(1);
  const stepTitles = [
    "Destination",
    "Study Details",
    "Tuition & Housing",
    "Living & Other",
    "Full Summary",
  ];

  // When destination changes, auto-update presets
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

  const handleReset = () => {
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
    trackEvent("calculator_reset", { tool: "cost_calculator" });
  };

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
    [destination, studyLevel, duration, tuition, accommodationType, rent, living, travel, insurance, visa, other]
  );

  const results = useMemo(() => {
    const res = calculateStudyCost(calculationInput);
    trackEvent("cost_calculated", {
      destination,
      total: res.total,
      duration,
    });
    return res;
  }, [calculationInput, destination, duration]);

  // Unique IDs for accessibility
  const destId = useId();
  const levelId = useId();
  const durId = useId();
  const tuitId = useId();
  const accTypeId = useId();
  const rentId = useId();
  const livId = useId();
  const travId = useId();
  const insId = useId();
  const visaId = useId();
  const othId = useId();

  return (
    <section className="bg-[#F5F5F9] py-10 sm:py-14 lg:py-16">
      <Container size="lg">
        {/* Mobile Stepper */}
        <div className="mb-6 lg:hidden">
          <ToolStepper
            currentStep={currentStep}
            totalSteps={5}
            stepTitles={stepTitles}
            onStepClick={(step) => setCurrentStep(step)}
          />
        </div>

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
                    Cost Calculator Parameters
                  </h2>
                </div>
                <ToolReset onReset={handleReset} />
              </div>

              {/* Step 1: Destination (Mobile Step 1 or Desktop) */}
              <div className={currentStep === 1 || typeof window === "undefined" ? "block mt-6" : "hidden lg:block mt-6"}>
                <FormFieldWrapper
                  id={destId}
                  label="Target Destination"
                  hint="Pre-fills indicative living costs"
                  required
                >
                  <Select
                    id={destId}
                    value={destination}
                    onChange={(e) => handleDestinationChange(e.target.value as Destination)}
                  >
                    {DESTINATIONS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </Select>
                </FormFieldWrapper>
              </div>

              {/* Step 2: Study Details (Mobile Step 2 or Desktop) */}
              <div className={currentStep === 2 ? "block mt-6 space-y-5" : "hidden lg:block mt-6 space-y-5"}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormFieldWrapper id={levelId} label="Study Level" required>
                    <Select
                      id={levelId}
                      value={studyLevel}
                      onChange={(e) => handleStudyLevelChange(e.target.value as StudyLevel)}
                    >
                      {STUDY_LEVELS.map((lvl) => (
                        <option key={lvl} value={lvl}>
                          {lvl}
                        </option>
                      ))}
                    </Select>
                  </FormFieldWrapper>

                  <FormFieldWrapper id={durId} label="Course Duration" required>
                    <Select
                      id={durId}
                      value={duration}
                      onChange={(e) => setDuration(Number(e.target.value))}
                    >
                      <option value={1}>1 Year (e.g. UK Master&apos;s)</option>
                      <option value={2}>2 Years (Standard Master&apos;s)</option>
                      <option value={3}>3 Years (UK/EU Bachelor&apos;s)</option>
                      <option value={4}>4 Years (US/Canada Bachelor&apos;s)</option>
                    </Select>
                  </FormFieldWrapper>
                </div>
              </div>

              {/* Step 3: Tuition & Housing (Mobile Step 3 or Desktop) */}
              <div className={currentStep === 3 ? "block mt-6 space-y-5" : "hidden lg:block mt-6 space-y-5"}>
                <FormFieldWrapper
                  id={tuitId}
                  label="Annual Tuition Fee (₹ / year)"
                  hint="Adjust according to your offer letter"
                  required
                >
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

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormFieldWrapper id={accTypeId} label="Accommodation Type" required>
                    <Select
                      id={accTypeId}
                      value={accommodationType}
                      onChange={(e) =>
                        handleAccommodationChange(e.target.value as AccommodationType)
                      }
                    >
                      {ACCOMMODATION_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {accommodationLabels[type]}
                        </option>
                      ))}
                    </Select>
                  </FormFieldWrapper>

                  <FormFieldWrapper
                    id={rentId}
                    label="Monthly Rent / Housing (₹ / mo)"
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
                        onChange={(e) => setRent(Number(e.target.value))}
                        className="pl-8"
                      />
                    </div>
                  </FormFieldWrapper>
                </div>
              </div>

              {/* Step 4: Living & Other (Mobile Step 4 or Desktop) */}
              <div className={currentStep === 4 ? "block mt-6 space-y-5" : "hidden lg:block mt-6 space-y-5"}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormFieldWrapper
                    id={livId}
                    label="Monthly Living & Food (₹ / mo)"
                    hint="Groceries, transit, phone"
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
                        step={5000}
                        value={living || ""}
                        onChange={(e) => setLiving(Number(e.target.value))}
                        className="pl-8"
                      />
                    </div>
                  </FormFieldWrapper>

                  <FormFieldWrapper
                    id={travId}
                    label="Annual Travel & Flights (₹ / yr)"
                    required
                  >
                    <div className="relative">
                      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-semibold text-content-secondary">
                        ₹
                      </span>
                      <Input
                        id={travId}
                        type="number"
                        min={0}
                        step={10000}
                        value={travel || ""}
                        onChange={(e) => setTravel(Number(e.target.value))}
                        className="pl-8"
                      />
                    </div>
                  </FormFieldWrapper>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <FormFieldWrapper id={insId} label="Insurance (₹ / yr)">
                    <div className="relative">
                      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-semibold text-content-secondary">
                        ₹
                      </span>
                      <Input
                        id={insId}
                        type="number"
                        min={0}
                        step={5000}
                        value={insurance || ""}
                        onChange={(e) => setInsurance(Number(e.target.value))}
                        className="pl-8"
                      />
                    </div>
                  </FormFieldWrapper>

                  <FormFieldWrapper id={visaId} label="Visa & Tests (₹ 1-time)">
                    <div className="relative">
                      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-semibold text-content-secondary">
                        ₹
                      </span>
                      <Input
                        id={visaId}
                        type="number"
                        min={0}
                        step={5000}
                        value={visa || ""}
                        onChange={(e) => setVisa(Number(e.target.value))}
                        className="pl-8"
                      />
                    </div>
                  </FormFieldWrapper>

                  <FormFieldWrapper id={othId} label="Other Misc (₹ / yr)">
                    <div className="relative">
                      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-semibold text-content-secondary">
                        ₹
                      </span>
                      <Input
                        id={othId}
                        type="number"
                        min={0}
                        step={5000}
                        value={other || ""}
                        onChange={(e) => setOther(Number(e.target.value))}
                        className="pl-8"
                      />
                    </div>
                  </FormFieldWrapper>
                </div>
              </div>

              {/* Mobile Step Navigation Buttons */}
              <div className="mt-8 flex items-center justify-between border-t border-[#E6E7EF] pt-5 lg:hidden">
                {currentStep > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
                    className="gap-1.5"
                  >
                    <ChevronLeft size={16} /> Back
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep < 5 ? (
                  <Button
                    type="button"
                    variant="accent"
                    onClick={() => setCurrentStep((prev) => Math.min(5, prev + 1))}
                    className="gap-1.5"
                  >
                    {currentStep === 4 ? "View Result" : "Next"} <ChevronRight size={16} />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(1)}
                  >
                    Edit Inputs
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: STICKY RESULTS ================= */}
          <div
            className={
              currentStep === 5
                ? "block lg:col-span-5"
                : "hidden lg:block lg:col-span-5 lg:sticky lg:top-24"
            }
            aria-live="polite"
          >
            <div className="rounded-[24px] border border-[#E6E7EF] bg-white p-6 sm:p-8">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
                Calculation Output
              </span>
              <h3 className="mt-1 text-[22px] font-bold text-brand-primary">
                Your Estimated Study Cost
              </h3>

              {/* Large Metric */}
              <div className="mt-5">
                <ResultMetric
                  label={`Estimated Total Cost (${duration} ${duration === 1 ? "Year" : "Years"})`}
                  value={formatINR(results.total)}
                  subValue={`Based on ${studyLevel} study in ${destination}`}
                  highlight
                />
              </div>

              {/* Monthly & Annual Breakdown cards */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#E6E7EF] bg-[#F5F5F9] p-3.5">
                  <span className="text-[11px] font-medium text-content-secondary uppercase">
                    Annual Recurring
                  </span>
                  <p className="mt-1 text-[17px] font-bold text-brand-primary">
                    {formatINRCompact(results.annualRecurring)}
                    <span className="text-[12px] font-normal text-content-secondary">
                      /yr
                    </span>
                  </p>
                </div>

                <div className="rounded-xl border border-[#E6E7EF] bg-[#F5F5F9] p-3.5">
                  <span className="text-[11px] font-medium text-content-secondary uppercase">
                    Monthly Expense
                  </span>
                  <p className="mt-1 text-[17px] font-bold text-brand-primary">
                    {formatINRCompact(results.monthly)}
                    <span className="text-[12px] font-normal text-content-secondary">
                      /mo
                    </span>
                  </p>
                </div>
              </div>

              {/* Visual Breakdown Bar */}
              <div className="mt-6 border-t border-[#E6E7EF] pt-5">
                <h4 className="text-[14px] font-bold text-content-primary">
                  Expense Distribution
                </h4>

                <div className="mt-3 space-y-2.5">
                  {results.breakdown.map((item) => {
                    const percentage = results.total > 0
                      ? Math.round((item.total / results.total) * 100)
                      : 0;

                    return (
                      <div key={item.key} className="space-y-1">
                        <div className="flex items-center justify-between text-[13px]">
                          <span className="text-content-secondary">{item.label}</span>
                          <span className="font-semibold text-content-primary">
                            {formatINR(item.total)}{" "}
                            <span className="text-[11px] font-normal text-content-secondary">
                              ({percentage}%)
                            </span>
                          </span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#F5F5F9]">
                          <div
                            className="h-full rounded-full bg-brand-primary"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* HighEd Counselling CTA */}
              <ToolCTA
                headline={`Planning to study in ${destination}?`}
                subtext={`Total budget estimated at ${formatINRCompact(results.total)}. HighEd counsellors can help you explore university scholarships and low-interest loan sanctions.`}
                buttonText="Book Free Cost Counselling"
                source="cost_calculator"
                contextTitle={`Study in ${destination} (${duration} Year ${studyLevel}) - Budget ${formatINRCompact(results.total)}`}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StudyAbroadCostCalculator;
