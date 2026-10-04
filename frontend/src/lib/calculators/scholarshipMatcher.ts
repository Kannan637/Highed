import {
  FundingAmount,
  sampleScholarships,
  Scholarship,
  ScholarshipType,
} from "@/data/tools/scholarshipsData";
import { Destination, StudyLevel } from "@/data/tools/costConfig";

export interface ScholarshipFilterCriteria {
  query?: string;
  country?: Destination | "";
  studyLevel?: StudyLevel | "";
  type?: ScholarshipType | "";
  fundingCategory?: FundingAmount | "";
  deadlineRange?: "all" | "upcoming" | "this-month" | "next-3-months";
  // User profile matching criteria
  userPercentage?: number;
}

export interface MatchedScholarship extends Scholarship {
  matchPercentage: number;
  matchBadge: "High Match" | "Good Match" | "Eligible";
}

export function filterAndMatchScholarships(
  criteria: ScholarshipFilterCriteria,
  scholarships: Scholarship[] = sampleScholarships
): MatchedScholarship[] {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  const q = criteria.query?.trim().toLowerCase() || "";

  const results: MatchedScholarship[] = [];

  for (const s of scholarships) {
    // 1. Text search
    if (q) {
      const haystack = [s.name, s.organization, s.country, s.description, s.eligibility]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) continue;
    }

    // 2. Country filter
    if (criteria.country && s.country !== criteria.country) continue;

    // 3. Study level filter
    if (criteria.studyLevel && !s.studyLevels.includes(criteria.studyLevel)) continue;

    // 4. Type filter
    if (criteria.type && s.type !== criteria.type) continue;

    // 5. Funding category filter
    if (criteria.fundingCategory && s.fundingCategory !== criteria.fundingCategory) continue;

    // 6. Deadline range filter
    if (criteria.deadlineRange && criteria.deadlineRange !== "all") {
      const deadline = new Date(s.deadlineDate);
      if (criteria.deadlineRange === "upcoming") {
        if (deadline < now) continue;
      } else if (criteria.deadlineRange === "this-month") {
        if (
          deadline.getFullYear() !== currentYear ||
          deadline.getMonth() !== currentMonth
        ) {
          continue;
        }
      } else if (criteria.deadlineRange === "next-3-months") {
        const diffMonths =
          (deadline.getFullYear() - currentYear) * 12 +
          (deadline.getMonth() - currentMonth);
        if (diffMonths < 0 || diffMonths > 3) continue;
      }
    }

    // 7. Calculate match score
    let matchScore = 70; // baseline eligible
    const userPct = criteria.userPercentage;

    if (userPct !== undefined && userPct > 0) {
      if (userPct >= s.minPercentageRequired + 10) {
        matchScore = 95;
      } else if (userPct >= s.minPercentageRequired) {
        matchScore = 85;
      } else if (userPct >= s.minPercentageRequired - 5) {
        matchScore = 65;
      } else {
        matchScore = 50;
      }
    } else {
      // If no percentage entered, give higher weights if country & level explicitly selected
      if (criteria.country && criteria.studyLevel) {
        matchScore = 90;
      } else if (criteria.country || criteria.studyLevel) {
        matchScore = 80;
      }
    }

    let matchBadge: MatchedScholarship["matchBadge"] = "Eligible";
    if (matchScore >= 90) {
      matchBadge = "High Match";
    } else if (matchScore >= 75) {
      matchBadge = "Good Match";
    }

    results.push({
      ...s,
      matchPercentage: matchScore,
      matchBadge,
    });
  }

  // Sort descending by match percentage, then by deadline
  results.sort((a, b) => b.matchPercentage - a.matchPercentage);

  return results;
}
