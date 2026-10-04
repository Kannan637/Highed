import { z } from "zod";
import {
  ieltsBandInterpretations,
  ieltsSkillAdvice,
  pteInterpretations,
  pteSkillAdvice,
} from "@/data/tools/testScoreConfig";

const validIeltsScore = (val: number) =>
  val >= 0 && val <= 9 && (val * 2) % 1 === 0;

const ieltsBandSchema = z
  .number({ error: "Please enter a score between 0 and 9" })
  .min(0, "Score cannot be less than 0")
  .max(9, "Score cannot exceed 9.0")
  .refine(validIeltsScore, "IELTS scores must be in increments of 0.5 (e.g. 6.5, 7.0)");

export const ieltsInputSchema = z.object({
  listening: ieltsBandSchema,
  reading: ieltsBandSchema,
  writing: ieltsBandSchema,
  speaking: ieltsBandSchema,
});

export type IeltsInput = z.infer<typeof ieltsInputSchema>;

export interface IeltsEvaluationResult {
  overallBand: number;
  sections: {
    listening: number;
    reading: number;
    writing: number;
    speaking: number;
  };
  interpretation: {
    title: string;
    description: string;
    tag: string;
  };
  lowestSection: {
    name: string;
    score: number;
    advice: string[];
  };
}

export function calculateIelts(input: IeltsInput): IeltsEvaluationResult {
  const { listening, reading, writing, speaking } = input;
  const rawAvg = (listening + reading + writing + speaking) / 4;
  // Official IELTS rounding: average multiplied by 2, rounded to nearest whole number, divided by 2
  const overallBand = Math.round(rawAvg * 2) / 2;

  const interpretation =
    ieltsBandInterpretations.find((item) => overallBand >= item.min) ||
    ieltsBandInterpretations[ieltsBandInterpretations.length - 1];

  const sectionsList = [
    { name: "Listening", score: listening },
    { name: "Reading", score: reading },
    { name: "Writing", score: writing },
    { name: "Speaking", score: speaking },
  ];

  // Lowest score section
  sectionsList.sort((a, b) => a.score - b.score);
  const lowest = sectionsList[0];

  return {
    overallBand,
    sections: { listening, reading, writing, speaking },
    interpretation,
    lowestSection: {
      name: lowest.name,
      score: lowest.score,
      advice: ieltsSkillAdvice[lowest.name] || [],
    },
  };
}

const pteScoreSchema = z
  .number({ error: "Please enter a score between 10 and 90" })
  .int("PTE score must be a whole number")
  .min(10, "Minimum PTE score is 10")
  .max(90, "Maximum PTE score is 90");

export const pteInputSchema = z.object({
  speaking: pteScoreSchema,
  writing: pteScoreSchema,
  reading: pteScoreSchema,
  listening: pteScoreSchema,
});

export type PteInput = z.infer<typeof pteInputSchema>;

export interface PteEvaluationResult {
  overallScore: number;
  sections: {
    speaking: number;
    writing: number;
    reading: number;
    listening: number;
  };
  interpretation: {
    title: string;
    description: string;
    ieltsEquivalent: string;
  };
  lowestSection: {
    name: string;
    score: number;
    advice: string[];
  };
}

export function calculatePte(input: PteInput): PteEvaluationResult {
  const { speaking, writing, reading, listening } = input;
  const overallScore = Math.round((speaking + writing + reading + listening) / 4);

  const interpretation =
    pteInterpretations.find((item) => overallScore >= item.min) ||
    pteInterpretations[pteInterpretations.length - 1];

  const sectionsList = [
    { name: "Speaking", score: speaking },
    { name: "Writing", score: writing },
    { name: "Reading", score: reading },
    { name: "Listening", score: listening },
  ];

  sectionsList.sort((a, b) => a.score - b.score);
  const lowest = sectionsList[0];

  return {
    overallScore,
    sections: { speaking, writing, reading, listening },
    interpretation,
    lowestSection: {
      name: lowest.name,
      score: lowest.score,
      advice: pteSkillAdvice[lowest.name] || [],
    },
  };
}
