import { University } from "@/types/explore";
import { countries } from "@/data/countries";

// Generate university records from existing country data
function buildUniversities(): University[] {
  const result: University[] = [];
  for (const country of Object.values(countries)) {
    country.universitiesList.forEach((uni, idx) => {
      result.push({
        id: `${country.slug}-uni-${idx + 1}`,
        countrySlug: country.slug,
        name: uni.name,
        location: uni.location,
        ranking: uni.ranking,
        tuitionRange: uni.tuitionRange,
        popularPrograms: uni.popularPrograms,
        logo: uni.image,
      });
    });
  }
  return result;
}

export const allUniversities: University[] = buildUniversities();

export function getUniversitiesByCountry(countrySlug: string): University[] {
  return allUniversities.filter((u) => u.countrySlug === countrySlug);
}

export function getUniversityById(id: string): University | undefined {
  return allUniversities.find((u) => u.id === id);
}

export function searchUniversities(query: string): University[] {
  const q = query.toLowerCase();
  return allUniversities.filter(
    (u) =>
      u.name.toLowerCase().includes(q) ||
      u.location.toLowerCase().includes(q) ||
      u.popularPrograms.some((p) => p.toLowerCase().includes(q))
  );
}
