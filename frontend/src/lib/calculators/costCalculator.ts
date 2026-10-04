import { z } from "zod";
import { ACCOMMODATION_TYPES, DESTINATIONS, STUDY_LEVELS } from "@/data/tools/costConfig";

const money = (label: string, max = 50_000_000) =>
  z
    .number({ error: `Please enter ${label}.` })
    .min(0, `${label[0].toUpperCase()}${label.slice(1)} cannot be negative.`)
    .max(max, `${label[0].toUpperCase()}${label.slice(1)} looks too high — please check.`);

export const costCalculatorSchema = z.object({
  country: z.enum(DESTINATIONS, { error: "Please select a destination." }),
  studyLevel: z.enum(STUDY_LEVELS, { error: "Please select a study level." }),
  duration: z.number({ error: "Please select a course duration." }).int().min(1).max(4, "Duration must be 1–4 years."),
  tuition: money("the annual tuition fee").refine((v) => v > 0, "Tuition fee must be greater than ₹0."),
  accommodationType: z.enum(ACCOMMODATION_TYPES, { error: "Please select an accommodation type." }),
  accommodation: money("monthly accommodation cost", 1_000_000),
  living: money("monthly living expenses", 1_000_000),
  travel: money("annual travel cost", 2_000_000),
  insurance: money("annual insurance cost", 2_000_000),
  visa: money("visa & application costs", 2_000_000),
  other: money("other annual expenses", 5_000_000),
});

export type CostCalculatorInput = z.infer<typeof costCalculatorSchema>;

export interface CostBreakdownItem {
  key: "tuition" | "accommodation" | "living" | "travel" | "insurance" | "visa" | "other";
  label: string;
  total: number;
}

export interface CostCalculatorResult {
  /** Recurring yearly cost (excludes one-time visa/application). */
  annualRecurring: number;
  /** First-year cost including one-time visa/application fees. */
  firstYear: number;
  total: number;
  monthly: number;
  breakdown: CostBreakdownItem[];
}

/** Pure calculation. Visa/application is treated as a one-time cost, not multiplied by duration. */
export function calculateStudyCost(input: CostCalculatorInput): CostCalculatorResult {
  const years = input.duration;
  const annual = {
    tuition: input.tuition,
    accommodation: input.accommodation * 12,
    living: input.living * 12,
    travel: input.travel,
    insurance: input.insurance,
    other: input.other,
  };
  const annualRecurring = Object.values(annual).reduce((a, b) => a + b, 0);
  const total = annualRecurring * years + input.visa;

  const breakdown: CostBreakdownItem[] = [
    { key: "tuition", label: "Tuition", total: annual.tuition * years },
    { key: "accommodation", label: "Accommodation", total: annual.accommodation * years },
    { key: "living", label: "Living", total: annual.living * years },
    { key: "travel", label: "Travel", total: annual.travel * years },
    { key: "insurance", label: "Insurance", total: annual.insurance * years },
    { key: "visa", label: "Visa & application", total: input.visa },
    { key: "other", label: "Other", total: annual.other * years },
  ];

  return {
    annualRecurring,
    firstYear: annualRecurring + input.visa,
    total,
    monthly: total / (years * 12),
    breakdown,
  };
}
