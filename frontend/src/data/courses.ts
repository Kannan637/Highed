import { Course } from "@/types/explore";
import { countries } from "@/data/countries";

const STUDY_AREA_MAP: Record<string, string> = {
  "computer science": "Computer Science",
  "artificial intelligence": "Computer Science",
  "data science": "Computer Science",
  "cybersecurity": "Computer Science",
  "information technology": "Computer Science",
  "software": "Computer Science",
  "machine learning": "Computer Science",
  "business": "Business",
  "management": "Business",
  "mba": "Business",
  "bba": "Business",
  "finance": "Business",
  "fintech": "Business",
  "banking": "Business",
  "marketing": "Business",
  "engineering": "Engineering",
  "mechanical": "Engineering",
  "civil": "Engineering",
  "electrical": "Engineering",
  "robotics": "Engineering",
  "aerospace": "Engineering",
  "automotive": "Engineering",
  "medicine": "Medicine & Health",
  "health": "Medicine & Health",
  "nursing": "Medicine & Health",
  "biomedical": "Medicine & Health",
  "biotechnology": "Sciences",
  "biology": "Sciences",
  "physics": "Sciences",
  "chemistry": "Sciences",
  "environmental": "Sciences",
  "law": "Law",
  "llb": "Law",
  "llm": "Law",
  "psychology": "Arts & Humanities",
  "media": "Arts & Humanities",
  "communication": "Arts & Humanities",
  "journalism": "Arts & Humanities",
  "film": "Arts & Humanities",
  "design": "Arts & Humanities",
  "fashion": "Arts & Humanities",
  "architecture": "Arts & Humanities",
  "tourism": "Hospitality",
  "hospitality": "Hospitality",
  "hotel": "Hospitality",
  "education": "Education",
  "teaching": "Education",
  "public policy": "Social Sciences",
  "international relations": "Social Sciences",
  "international affairs": "Social Sciences",
};

function inferStudyArea(courseName: string): string {
  const lower = courseName.toLowerCase();
  for (const [keyword, area] of Object.entries(STUDY_AREA_MAP)) {
    if (lower.includes(keyword)) return area;
  }
  return "General";
}

function buildCourses(): Course[] {
  const result: Course[] = [];
  for (const country of Object.values(countries)) {
    country.coursesList.forEach((course, idx) => {
      result.push({
        id: `${country.slug}-course-${idx + 1}`,
        countrySlug: country.slug,
        name: course.name,
        level: course.level,
        duration: course.duration,
        averageFee: course.averageFee,
        careerProspects: course.careerProspects,
        studyArea: inferStudyArea(course.name),
      });
    });
  }
  return result;
}

export const allCourses: Course[] = buildCourses();

export function getCoursesByCountry(countrySlug: string): Course[] {
  return allCourses.filter((c) => c.countrySlug === countrySlug);
}

export function getCoursesByLevel(level: string): Course[] {
  return allCourses.filter((c) => c.level.toLowerCase() === level.toLowerCase());
}

export function getStudyAreas(): string[] {
  const areas = new Set(allCourses.map((c) => c.studyArea));
  return Array.from(areas).sort();
}

export function searchCourses(query: string): Course[] {
  const q = query.toLowerCase();
  return allCourses.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.studyArea.toLowerCase().includes(q) ||
      c.careerProspects.some((p) => p.toLowerCase().includes(q))
  );
}
