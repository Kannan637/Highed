"use client";

import React, { useId, useMemo, useState } from "react";
import {
  UserCheck,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  TrendingUp,
  GraduationCap,
  Sparkles,
  ChevronRight,
  ListOrdered,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import { DESTINATIONS, STUDY_LEVELS, Destination, StudyLevel } from "@/data/tools/costConfig";
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
import {
  FormFieldWrapper,
  ResultMetric,
  ToolCTA,
  ToolReset,
} from "./toolPrimitives";

export const ProfileEligibilityChecker = () => {
  const [qualification, setQualification] = useState<Qualification>("Bachelor's");
  const [percentage, setPercentage] = useState<number>(72);
  const [backlogs, setBacklogs] = useState<number>(0);
  const [workExperience, setWorkExperience] = useState<WorkExperience>("1–2 years");
  const [englishTest, setEnglishTest] = useState<EnglishTest>("IELTS");
  const [score, setScore] = useState<number>(7.0);
  const [country, setCountry] = useState<Destination>("UK");
  const [studyLevel, setStudyLevel] = useState<StudyLevel>("Postgraduate");
  const [budget, setBudget] = useState<BudgetRange>("₹25–40L");

  const qualId = useId();
  const pctId = useId();
  const backId = useId();
  const expId = useId();
  const testId = useId();
  const scoreId = useId();
  const ctryId = useId();
  const lvlId = useId();
  const budgId = useId();

  const handleReset = () => {
    setQualification("Bachelor's");
    setPercentage(70);
    setBacklogs(0);
    setWorkExperience("1–2 years");
    setEnglishTest("IELTS");
    setScore(7.0);
    setCountry("UK");
    setStudyLevel("Postgraduate");
    setBudget("₹25–40L");
    trackEvent("calculator_reset", { tool: "profile_checker" });
  };

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
    [qualification, percentage, backlogs, workExperience, englishTest, score, country, studyLevel, budget]
  );

  const results = useMemo(() => {
    const res = evaluateProfileEligibility(inputData);
    trackEvent("eligibility_checked", {
      country,
      score: res.score,
      matchLevel: res.matchLevel,
    });
    return res;
  }, [inputData, country]);

  return (
    <section className="bg-[#F5F5F9] py-10 sm:py-14 lg:py-16">
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
                {/* 1. Academic Credentials */}
                <div className="grid gap-4 sm:grid-cols-3">
                  <FormFieldWrapper id={qualId} label="Highest Degree" required>
                    <Select
                      id={qualId}
                      value={qualification}
                      onChange={(e) => setQualification(e.target.value as Qualification)}
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

                  <FormFieldWrapper id={backId} label="Active Backlogs" required>
                    <Input
                      id={backId}
                      type="number"
                      min={0}
                      max={30}
                      value={backlogs !== undefined ? backlogs : ""}
                      onChange={(e) => setBacklogs(Number(e.target.value))}
                    />
                  </FormFieldWrapper>
                </div>

                {/* 2. Work Experience & English Test */}
                <div className="grid gap-4 sm:grid-cols-3">
                  <FormFieldWrapper id={expId} label="Work Experience" required>
                    <Select
                      id={expId}
                      value={workExperience}
                      onChange={(e) => setWorkExperience(e.target.value as WorkExperience)}
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
                      onChange={(e) => setEnglishTest(e.target.value as EnglishTest)}
                    >
                      {ENGLISH_TESTS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </Select>
                  </FormFieldWrapper>

                  {englishTest !== "Not taken" ? (
                    <FormFieldWrapper
                      id={scoreId}
                      label={englishTest === "IELTS" ? "IELTS Band" : "Score"}
                      required
                    >
                      <Input
                        id={scoreId}
                        type="number"
                        step={englishTest === "IELTS" ? 0.5 : 1}
                        min={englishTest === "IELTS" ? 0 : 10}
                        max={englishTest === "IELTS" ? 9 : 120}
                        value={score || ""}
                        onChange={(e) => setScore(Number(e.target.value))}
                      />
                    </FormFieldWrapper>
                  ) : (
                    <div className="flex items-center text-[12px] text-content-secondary pt-8">
                      Conditional admit possible
                    </div>
                  )}
                </div>

                {/* 3. Target Preferences */}
                <div className="grid gap-4 sm:grid-cols-3">
                  <FormFieldWrapper id={ctryId} label="Target Destination" required>
                    <Select
                      id={ctryId}
                      value={country}
                      onChange={(e) => setCountry(e.target.value as Destination)}
                    >
                      {DESTINATIONS.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </Select>
                  </FormFieldWrapper>

                  <FormFieldWrapper id={lvlId} label="Desired Study Level" required>
                    <Select
                      id={lvlId}
                      value={studyLevel}
                      onChange={(e) => setStudyLevel(e.target.value as StudyLevel)}
                    >
                      {STUDY_LEVELS.map((l) => (
                        <option key={l} value={l}>
                          {l}
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

              {/* Large Metric */}
              <div className="mt-5">
                <ResultMetric
                  label={`Compatibility Score for ${country}`}
                  value={`${results.score} / 100`}
                  subValue={results.matchLevel}
                  badge={results.matchLevel}
                  highlight={results.matchLevel === "Strong Match"}
                />
              </div>

              {/* Summary note */}
              <p className="mt-4 text-[14px] leading-relaxed text-content-secondary">
                {results.summary}
              </p>

              {/* Profile Strengths */}
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

              {/* Areas to Address */}
              {results.improvements.length > 0 && (
                <div className="mt-4 border-t border-[#E6E7EF] pt-4">
                  <h4 className="flex items-center gap-1.5 text-[13px] font-bold text-amber-700">
                    <AlertTriangle size={15} /> Areas for Attention
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-[12px] text-content-secondary">
                    {results.improvements.map((imp, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="mt-1 size-1.5 shrink-0 rounded-full bg-amber-500" />
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Recommended 4-step Action Plan */}
              <div className="mt-5 border-t border-[#E6E7EF] pt-4">
                <h4 className="flex items-center gap-1.5 text-[13px] font-bold text-brand-primary">
                  <ListOrdered size={15} /> Recommended Next Steps
                </h4>
                <ol className="mt-2 space-y-2 text-[12px] text-content-primary">
                  {results.recommendedSteps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-[10px] font-bold text-brand-primary">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* HighEd Counselling CTA */}
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
