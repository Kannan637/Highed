import { DESTINATIONS, STUDY_LEVELS } from "./costConfig";

export const QUALIFICATIONS = ["12th", "Bachelor's", "Master's"] as const;
export type Qualification = (typeof QUALIFICATIONS)[number];

export const WORK_EXPERIENCES = [
  "No experience",
  "<1 year",
  "1–2 years",
  "3–5 years",
  "5+ years",
] as const;
export type WorkExperience = (typeof WORK_EXPERIENCES)[number];

export const ENGLISH_TESTS = ["IELTS", "PTE", "TOEFL", "Not taken"] as const;
export type EnglishTest = (typeof ENGLISH_TESTS)[number];

export const BUDGET_RANGES = [
  "Under ₹15L",
  "₹15–25L",
  "₹25–40L",
  "₹40L+",
] as const;
export type BudgetRange = (typeof BUDGET_RANGES)[number];

export interface CountryAdmissionBenchmark {
  country: (typeof DESTINATIONS)[number];
  minPercentGeneral: number;
  maxToleratedBacklogs: number;
  minIeltsOverall: number;
  minPteOverall: number;
  minBudgetRangeIndex: number; // 0: Under 15L, 1: 15-25L, 2: 25-40L, 3: 40L+
  notes: string;
}

export const countryBenchmarks: Record<(typeof DESTINATIONS)[number], CountryAdmissionBenchmark> = {
  USA: {
    country: "USA",
    minPercentGeneral: 65,
    maxToleratedBacklogs: 5,
    minIeltsOverall: 6.5,
    minPteOverall: 58,
    minBudgetRangeIndex: 2, // 25-40L+
    notes: "Requires strong academics, GRE for select top STEM programs, and holistic profile proof.",
  },
  UK: {
    country: "UK",
    minPercentGeneral: 60,
    maxToleratedBacklogs: 8,
    minIeltsOverall: 6.5,
    minPteOverall: 58,
    minBudgetRangeIndex: 1, // 15-25L+
    notes: "Offers 1-year master's degrees with flexible backlog policies up to 10 for select Russell Group partners.",
  },
  Canada: {
    country: "Canada",
    minPercentGeneral: 65,
    maxToleratedBacklogs: 4,
    minIeltsOverall: 6.5,
    minPteOverall: 60,
    minBudgetRangeIndex: 1, // 15-25L+
    notes: "Strict backlogs vetting for SDS visa processing; requires 6.0 minimum in each IELTS band.",
  },
  Australia: {
    country: "Australia",
    minPercentGeneral: 60,
    maxToleratedBacklogs: 6,
    minIeltsOverall: 6.5,
    minPteOverall: 58,
    minBudgetRangeIndex: 2, // 25-40L+
    notes: "GTE (Genuine Student) assessment strictly evaluates study gaps and financial capability.",
  },
  Germany: {
    country: "Germany",
    minPercentGeneral: 70,
    maxToleratedBacklogs: 3,
    minIeltsOverall: 6.5,
    minPteOverall: 58,
    minBudgetRangeIndex: 0, // Under 15L (Tuition is low / blocked account needed)
    notes: "APS certificate mandatory for Indian students; public universities require high percentage (ECTS credits).",
  },
  Ireland: {
    country: "Ireland",
    minPercentGeneral: 60,
    maxToleratedBacklogs: 5,
    minIeltsOverall: 6.5,
    minPteOverall: 60,
    minBudgetRangeIndex: 1, // 15-25L+
    notes: "Rapidly expanding tech hub offering 2-year post-study work visa for master's graduates.",
  },
  Dubai: {
    country: "Dubai",
    minPercentGeneral: 50,
    maxToleratedBacklogs: 12,
    minIeltsOverall: 6.0,
    minPteOverall: 50,
    minBudgetRangeIndex: 0, // Under 15L+
    notes: "Fast visa approvals with branch campuses of top UK, Australian, and US universities.",
  },
};
