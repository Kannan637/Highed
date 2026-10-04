"use client";

import React, { useId, useMemo, useState } from "react";
import {
  Languages,
  Mic,
  Award,
  BookOpen,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import {
  calculateIelts,
  calculatePte,
  IeltsInput,
  PteInput,
} from "@/lib/calculators/testScoreCalculator";
import { trackEvent } from "@/lib/analytics";
import {
  FormFieldWrapper,
  ResultMetric,
  ToolCTA,
  ToolReset,
} from "./toolPrimitives";

export const TestScoreEvaluator = () => {
  const [activeTab, setActiveTab] = useState<"IELTS" | "PTE">("IELTS");

  // IELTS State (defaults: 7.5, 7.0, 6.5, 7.0)
  const [ieltsListening, setIeltsListening] = useState<number>(7.5);
  const [ieltsReading, setIeltsReading] = useState<number>(7.0);
  const [ieltsWriting, setIeltsWriting] = useState<number>(6.5);
  const [ieltsSpeaking, setIeltsSpeaking] = useState<number>(7.0);

  // PTE State (defaults: 70, 65, 68, 72)
  const [pteSpeaking, setPteSpeaking] = useState<number>(70);
  const [pteWriting, setPteWriting] = useState<number>(65);
  const [pteReading, setPteReading] = useState<number>(68);
  const [pteListening, setPteListening] = useState<number>(72);

  const handleReset = () => {
    if (activeTab === "IELTS") {
      setIeltsListening(7.0);
      setIeltsReading(7.0);
      setIeltsWriting(6.5);
      setIeltsSpeaking(7.0);
    } else {
      setPteSpeaking(68);
      setPteWriting(65);
      setPteReading(68);
      setPteListening(70);
    }
    trackEvent("calculator_reset", { tool: "test_score_evaluator" });
  };

  // Calculations
  const ieltsResults = useMemo(() => {
    const input: IeltsInput = {
      listening: Math.max(0, Math.min(9, ieltsListening || 0)),
      reading: Math.max(0, Math.min(9, ieltsReading || 0)),
      writing: Math.max(0, Math.min(9, ieltsWriting || 0)),
      speaking: Math.max(0, Math.min(9, ieltsSpeaking || 0)),
    };
    const res = calculateIelts(input);
    trackEvent("test_score_evaluated", {
      test: "IELTS",
      overall: res.overallBand,
    });
    return res;
  }, [ieltsListening, ieltsReading, ieltsWriting, ieltsSpeaking]);

  const pteResults = useMemo(() => {
    const input: PteInput = {
      speaking: Math.max(10, Math.min(90, Math.round(pteSpeaking || 10))),
      writing: Math.max(10, Math.min(90, Math.round(pteWriting || 10))),
      reading: Math.max(10, Math.min(90, Math.round(pteReading || 10))),
      listening: Math.max(10, Math.min(90, Math.round(pteListening || 10))),
    };
    const res = calculatePte(input);
    trackEvent("test_score_evaluated", {
      test: "PTE",
      overall: res.overallScore,
    });
    return res;
  }, [pteSpeaking, pteWriting, pteReading, pteListening]);

  const bandOptions = [
    5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0,
  ];

  return (
    <section className="bg-[#F5F5F9] py-10 sm:py-14 lg:py-16">
      <Container size="lg">
        {/* Test Selector Tabs */}
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

              {activeTab === "IELTS" ? (
                /* IELTS SECTION INPUTS */
                <div className="mt-6 space-y-6">
                  <p className="text-[14px] text-content-secondary">
                    Select your individual section bands (0.0 to 9.0 in 0.5 increments):
                  </p>

                  <div className="grid gap-5 sm:grid-cols-2">
                    {[
                      { label: "Listening", val: ieltsListening, set: setIeltsListening },
                      { label: "Reading", val: ieltsReading, set: setIeltsReading },
                      { label: "Writing", val: ieltsWriting, set: setIeltsWriting },
                      { label: "Speaking", val: ieltsSpeaking, set: setIeltsSpeaking },
                    ].map((sec) => (
                      <div key={sec.label} className="space-y-1.5">
                        <div className="flex items-center justify-between text-[14px]">
                          <span className="font-semibold text-content-primary">
                            {sec.label}
                          </span>
                          <span className="font-bold text-brand-accent">
                            Band {sec.val.toFixed(1)}
                          </span>
                        </div>
                        <select
                          value={sec.val}
                          onChange={(e) => sec.set(Number(e.target.value))}
                          className="h-12 w-full rounded-xl border border-[#E6E7EF] bg-white px-3.5 text-[15px] font-medium text-content-primary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                        >
                          {bandOptions.map((b) => (
                            <option key={b} value={b}>
                              Band {b.toFixed(1)}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* PTE SECTION INPUTS */
                <div className="mt-6 space-y-6">
                  <p className="text-[14px] text-content-secondary">
                    Enter or slide your communicative section scores (10 to 90):
                  </p>

                  <div className="grid gap-5 sm:grid-cols-2">
                    {[
                      { label: "Speaking", val: pteSpeaking, set: setPteSpeaking },
                      { label: "Writing", val: pteWriting, set: setPteWriting },
                      { label: "Reading", val: pteReading, set: setPteReading },
                      { label: "Listening", val: pteListening, set: setPteListening },
                    ].map((sec) => (
                      <div key={sec.label} className="space-y-2">
                        <div className="flex items-center justify-between text-[14px]">
                          <span className="font-semibold text-content-primary">
                            {sec.label}
                          </span>
                          <span className="font-bold text-brand-accent">
                            Score {sec.val}
                          </span>
                        </div>
                        <Input
                          type="number"
                          min={10}
                          max={90}
                          value={sec.val || ""}
                          onChange={(e) => sec.set(Number(e.target.value))}
                        />
                        <input
                          type="range"
                          min={10}
                          max={90}
                          value={sec.val}
                          onChange={(e) => sec.set(Number(e.target.value))}
                          aria-label={`${sec.label} score slider`}
                          className="h-1.5 w-full cursor-pointer accent-brand-accent"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Targeted Improvement Section */}
            <div className="rounded-[24px] border border-[#E6E7EF] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2 text-brand-primary">
                <Lightbulb size={20} className="text-amber-500" />
                <h3 className="text-[18px] font-bold">
                  Targeted Score Booster:{" "}
                  <span className="text-brand-accent">
                    {activeTab === "IELTS"
                      ? ieltsResults.lowestSection.name
                      : pteResults.lowestSection.name}
                  </span>
                </h3>
              </div>
              <p className="mt-2 text-[14px] text-content-secondary">
                {activeTab === "IELTS"
                  ? `${ieltsResults.lowestSection.name} (Band ${ieltsResults.lowestSection.score.toFixed(1)}) is currently your lowest section. Boosting this by 0.5 band elevates your university options:`
                  : `${pteResults.lowestSection.name} (Score ${pteResults.lowestSection.score}) is your key growth area. Strategic prep in this module will lift your overall score:`}
              </p>

              <ul className="mt-4 space-y-2.5 text-[14px]">
                {(activeTab === "IELTS"
                  ? ieltsResults.lowestSection.advice
                  : pteResults.lowestSection.advice
                ).map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-content-primary">
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-[11px] font-bold text-brand-primary">
                      {idx + 1}
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: STICKY RESULTS ================= */}
          <div className="space-y-6 lg:col-span-6 lg:sticky lg:top-24" aria-live="polite">
            <div className="rounded-[24px] border border-[#E6E7EF] bg-white p-6 sm:p-8">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
                {activeTab} Evaluation
              </span>
              <h3 className="mt-1 text-[22px] font-bold text-brand-primary">
                Overall Score & Readiness
              </h3>

              {/* Large Metric */}
              <div className="mt-5">
                {activeTab === "IELTS" ? (
                  <ResultMetric
                    label="Calculated Overall Band"
                    value={`Band ${ieltsResults.overallBand.toFixed(1)}`}
                    subValue={ieltsResults.interpretation.title}
                    badge={ieltsResults.interpretation.tag}
                    highlight
                  />
                ) : (
                  <ResultMetric
                    label="Calculated Overall Score"
                    value={`Score ${pteResults.overallScore}`}
                    subValue={pteResults.interpretation.title}
                    badge={pteResults.interpretation.ieltsEquivalent}
                    highlight
                  />
                )}
              </div>

              {/* Section Progress Bars */}
              <div className="mt-6 space-y-3">
                <h4 className="text-[14px] font-bold text-content-primary">
                  Skill Breakdown
                </h4>

                {activeTab === "IELTS" ? (
                  <div className="space-y-2.5">
                    {Object.entries(ieltsResults.sections).map(([skill, val]) => {
                      const pct = Math.round((val / 9) * 100);
                      return (
                        <div key={skill} className="space-y-1">
                          <div className="flex justify-between text-[13px]">
                            <span className="capitalize text-content-secondary">{skill}</span>
                            <span className="font-bold text-brand-primary">
                              Band {val.toFixed(1)} / 9.0
                            </span>
                          </div>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-[#F5F5F9]">
                            <div
                              className="h-full rounded-full bg-brand-primary"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    {Object.entries(pteResults.sections).map(([skill, val]) => {
                      const pct = Math.round((val / 90) * 100);
                      return (
                        <div key={skill} className="space-y-1">
                          <div className="flex justify-between text-[13px]">
                            <span className="capitalize text-content-secondary">{skill}</span>
                            <span className="font-bold text-brand-primary">
                              {val} / 90
                            </span>
                          </div>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-[#F5F5F9]">
                            <div
                              className="h-full rounded-full bg-brand-primary"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Interpretation Note */}
              <div className="mt-6 rounded-2xl border border-[#E6E7EF] bg-[#F5F5F9] p-4 text-[13px] leading-relaxed text-content-secondary">
                <p>
                  <strong className="text-content-primary">Admissions Context: </strong>
                  {activeTab === "IELTS"
                    ? ieltsResults.interpretation.description
                    : pteResults.interpretation.description}
                </p>
              </div>

              {/* HighEd CTA */}
              <ToolCTA
                headline="Aiming for high-ranking university admits?"
                subtext={`With ${activeTab === "IELTS" ? `IELTS ${ieltsResults.overallBand.toFixed(1)}` : `PTE ${pteResults.overallScore}`}, discover university programs with zero language prerequisites or speak with test prep coaches.`}
                buttonText="Shortlist Eligible Universities"
                source="test_score_evaluator"
                contextTitle={`${activeTab} Score: ${activeTab === "IELTS" ? ieltsResults.overallBand.toFixed(1) : pteResults.overallScore}`}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestScoreEvaluator;
