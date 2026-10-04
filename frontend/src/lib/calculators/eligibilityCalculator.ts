import { z } from "zod";
import { DESTINATIONS, STUDY_LEVELS } from "@/data/tools/costConfig";
import {
  BUDGET_RANGES,
  countryBenchmarks,
  ENGLISH_TESTS,
  QUALIFICATIONS,
  WORK_EXPERIENCES,
} from "@/data/tools/eligibilityConfig";

export const eligibilityInputSchema = z
  .object({
    qualification: z.enum(QUALIFICATIONS, {
      error: "Please select your current/highest academic qualification",
    }),
    percentage: z
      .number({ error: "Please enter your academic percentage or CGPA" })
      .min(35, "Percentage cannot be below 35%")
      .max(100, "Percentage cannot exceed 100%"),
    backlogs: z
      .number({ error: "Please enter total backlogs (enter 0 if none)" })
      .int("Backlogs must be a whole number")
      .min(0, "Backlogs cannot be negative")
      .max(40, "Value too high, please verify"),
    workExperience: z.enum(WORK_EXPERIENCES, {
      error: "Please select your work experience",
    }),
    englishTest: z.enum(ENGLISH_TESTS, {
      error: "Please select an English test option",
    }),
    score: z.number().optional(),
    country: z.enum(DESTINATIONS, {
      error: "Please select your preferred destination",
    }),
    studyLevel: z.enum(STUDY_LEVELS, {
      error: "Please select your preferred study level",
    }),
    budget: z.enum(BUDGET_RANGES, {
      error: "Please select your budget range",
    }),
  })
  .refine(
    (data) => {
      if (data.englishTest !== "Not taken" && (data.score === undefined || isNaN(data.score))) {
        return false;
      }
      return true;
    },
    {
      message: "Please enter your test score",
      path: ["score"],
    }
  );

export type EligibilityInput = z.infer<typeof eligibilityInputSchema>;

export interface EligibilityResult {
  score: number; // 0-100
  matchLevel: "Strong Match" | "Moderate Match" | "Needs Improvement";
  summary: string;
  checklist: {
    label: string;
    status: "pass" | "warn" | "fail";
    detail: string;
  }[];
  strengths: string[];
  improvements: string[];
  recommendedSteps: string[];
}

export function evaluateProfileEligibility(input: EligibilityInput): EligibilityResult {
  const benchmark = countryBenchmarks[input.country] || countryBenchmarks.USA;
  let totalScore = 0;
  const strengths: string[] = [];
  const improvements: string[] = [];
  const checklist: EligibilityResult["checklist"] = [];

  // 1. Academic Percentage Evaluation (Weight: 35 points)
  let academicPoints = 0;
  if (input.percentage >= 75) {
    academicPoints = 35;
    strengths.push(`Distinction-grade academic score (${input.percentage}%) gives you access to competitive institutions.`);
    checklist.push({
      label: "Academic Profile",
      status: "pass",
      detail: `${input.percentage}% meets high-ranking university criteria`,
    });
  } else if (input.percentage >= benchmark.minPercentGeneral) {
    academicPoints = 28;
    strengths.push(`Academics meet baseline requirements for ${input.country}.`);
    checklist.push({
      label: "Academic Profile",
      status: "pass",
      detail: `${input.percentage}% meets ${input.country} baseline benchmark (${benchmark.minPercentGeneral}%)`,
    });
  } else if (input.percentage >= 50) {
    academicPoints = 18;
    improvements.push(`Percentage is below ${input.country}'s standard tier threshold (${benchmark.minPercentGeneral}%). Consider pathway or private institutions.`);
    checklist.push({
      label: "Academic Profile",
      status: "warn",
      detail: `${input.percentage}% is slightly below target for direct Tier-1 entry`,
    });
  } else {
    academicPoints = 10;
    improvements.push(`Academic score requires pre-master's or foundational credit transfer programs.`);
    checklist.push({
      label: "Academic Profile",
      status: "fail",
      detail: `${input.percentage}% requires foundation/pathway entry`,
    });
  }
  totalScore += academicPoints;

  // 2. Backlogs Impact (Deductions / bonus: up to -15)
  let backlogPenalty = 0;
  if (input.backlogs === 0) {
    strengths.push("Clean academic record with zero backlogs facilitates faster visa and admissions clearance.");
    checklist.push({
      label: "Backlog Clearance",
      status: "pass",
      detail: "Zero backlogs (Excellent)",
    });
  } else if (input.backlogs <= benchmark.maxToleratedBacklogs) {
    backlogPenalty = input.backlogs * 2;
    checklist.push({
      label: "Backlog Clearance",
      status: "pass",
      detail: `${input.backlogs} backlog(s) within ${input.country}'s acceptable limit (≤ ${benchmark.maxToleratedBacklogs})`,
    });
  } else {
    backlogPenalty = 15;
    improvements.push(`Total backlogs (${input.backlogs}) exceed typical limits for ${input.country} (≤ ${benchmark.maxToleratedBacklogs}). Provide backlog summary letters.`);
    checklist.push({
      label: "Backlog Clearance",
      status: "warn",
      detail: `${input.backlogs} backlog(s) exceed preferred limit`,
    });
  }
  totalScore -= backlogPenalty;

  // 3. English Proficiency (Weight: 25 points)
  let englishPoints = 0;
  if (input.englishTest === "Not taken") {
    englishPoints = 10;
    improvements.push(`Take an official English test (IELTS 6.5+ or PTE 58+) to unlock direct offers and visa clearance.`);
    checklist.push({
      label: "English Proficiency",
      status: "warn",
      detail: "Test pending (Conditional offer possible)",
    });
  } else {
    const s = input.score || 0;
    if (input.englishTest === "IELTS") {
      if (s >= 7.0) {
        englishPoints = 25;
        strengths.push(`IELTS Band ${s} satisfies 95%+ of courses with no pre-sessional language conditions.`);
        checklist.push({ label: "English Proficiency", status: "pass", detail: `IELTS Band ${s} (Exceeds requirement)` });
      } else if (s >= benchmark.minIeltsOverall) {
        englishPoints = 20;
        strengths.push(`IELTS Band ${s} satisfies standard ${input.country} admission guidelines.`);
        checklist.push({ label: "English Proficiency", status: "pass", detail: `IELTS Band ${s} meets requirement` });
      } else {
        englishPoints = 12;
        improvements.push(`IELTS Band ${s} is below preferred benchmark (${benchmark.minIeltsOverall}). Target re-test or pre-sessional course.`);
        checklist.push({ label: "English Proficiency", status: "warn", detail: `IELTS Band ${s} below ${benchmark.minIeltsOverall}` });
      }
    } else {
      // PTE or TOEFL
      if (s >= 65) {
        englishPoints = 25;
        strengths.push(`English score (${s}) satisfies premier program criteria.`);
        checklist.push({ label: "English Proficiency", status: "pass", detail: `Score ${s} meets top guidelines` });
      } else if (s >= benchmark.minPteOverall) {
        englishPoints = 20;
        checklist.push({ label: "English Proficiency", status: "pass", detail: `Score ${s} meets standard criteria` });
      } else {
        englishPoints = 12;
        improvements.push(`Score ${s} is borderline for direct matriculation.`);
        checklist.push({ label: "English Proficiency", status: "warn", detail: `Score ${s} requires improvement` });
      }
    }
  }
  totalScore += englishPoints;

  // 4. Work Experience (Weight: 15 points)
  let workPoints = 5;
  if (input.workExperience === "3–5 years" || input.workExperience === "5+ years") {
    workPoints = 15;
    strengths.push(`Substantial work experience (${input.workExperience}) adds immense weight to MBA/Master's SOP and job prospects.`);
  } else if (input.workExperience === "1–2 years") {
    workPoints = 12;
    strengths.push(`Relevant work experience (${input.workExperience}) helps bridge academic gaps.`);
  } else if (input.workExperience === "<1 year") {
    workPoints = 8;
  }
  totalScore += workPoints;

  // 5. Budget Alignment (Weight: 25 points)
  const budgetIdx = BUDGET_RANGES.indexOf(input.budget);
  let budgetPoints = 0;
  if (budgetIdx >= benchmark.minBudgetRangeIndex) {
    budgetPoints = 25;
    strengths.push(`Budget (${input.budget}) aligns realistically with tuition and living costs in ${input.country}.`);
    checklist.push({
      label: "Financial Feasibility",
      status: "pass",
      detail: `Budget (${input.budget}) matches typical expenses`,
    });
  } else {
    budgetPoints = 12;
    improvements.push(`Budget (${input.budget}) is lower than typical estimates for ${input.country}. Consider education loans or merit scholarships.`);
    checklist.push({
      label: "Financial Feasibility",
      status: "warn",
      detail: `Budget may require scholarship or loan support`,
    });
  }
  totalScore += budgetPoints;

  // Clamp score between 20 and 98 (never 100% guarantee)
  const finalScore = Math.max(20, Math.min(98, Math.round(totalScore)));

  let matchLevel: EligibilityResult["matchLevel"] = "Moderate Match";
  let summary = "";

  if (finalScore >= 78) {
    matchLevel = "Strong Match";
    summary = `Your profile demonstrates strong alignment for ${input.studyLevel} admissions in ${input.country}. You have competitive chances at renowned universities.`;
  } else if (finalScore >= 58) {
    matchLevel = "Moderate Match";
    summary = `Your profile is eligible for a solid selection of accredited institutions in ${input.country}, with opportunities to strengthen applications through tailored SOPs and funding.`;
  } else {
    matchLevel = "Needs Improvement";
    summary = `Certain areas in your profile (academics, test scores, or financial planning) require strategic bridge preparation to maximize university admit success in ${input.country}.`;
  }

  const recommendedSteps = [
    "Shortlist 4-6 target and safe universities tailored to your GPA and budget",
    input.englishTest === "Not taken"
      ? "Register and prepare for IELTS or PTE Academic"
      : "Verify course-specific subject prerequisites and credit recognitions",
    "Prepare tailored Statement of Purpose (SOP) addressing career motivations and gap/backlog justifications",
    "Connect with a HighEd certified advisor for free 1-on-1 profile shortlisting and scholarship vetting",
  ];

  return {
    score: finalScore,
    matchLevel,
    summary,
    checklist,
    strengths,
    improvements,
    recommendedSteps,
  };
}
