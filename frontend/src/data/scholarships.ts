import { Scholarship, ScholarshipType } from "@/types/explore";
import { countries } from "@/data/countries";

// Infer scholarship type from name/content
function inferScholarshipType(name: string, eligibility: string): ScholarshipType {
  const lower = (name + " " + eligibility).toLowerCase();
  if (lower.includes("government") || lower.includes("federal") || lower.includes("state")) return "Government";
  if (lower.includes("research") || lower.includes("phd") || lower.includes("doctoral")) return "Research";
  if (lower.includes("merit") || lower.includes("academic") || lower.includes("excellence") || lower.includes("gpa") || lower.includes("score")) return "Merit";
  return "University";
}

function buildScholarships(): Scholarship[] {
  const result: Scholarship[] = [];
  for (const country of Object.values(countries)) {
    country.scholarshipsList.forEach((s, idx) => {
      result.push({
        id: `${country.slug}-scholarship-${idx + 1}`,
        countrySlug: country.slug,
        name: s.name,
        amount: s.amount,
        eligibility: s.eligibility,
        coverage: s.coverage,
        type: inferScholarshipType(s.name, s.eligibility),
      });
    });
  }
  return result;
}

export const allScholarships: Scholarship[] = buildScholarships();

export function getScholarshipsByCountry(countrySlug: string): Scholarship[] {
  return allScholarships.filter((s) => s.countrySlug === countrySlug);
}

export function getScholarshipsByType(type: ScholarshipType): Scholarship[] {
  return allScholarships.filter((s) => s.type === type);
}

export function searchScholarships(query: string): Scholarship[] {
  const q = query.toLowerCase();
  return allScholarships.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.eligibility.toLowerCase().includes(q) ||
      s.coverage.toLowerCase().includes(q)
  );
}
