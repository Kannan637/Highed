export interface University {
  id: string;
  countrySlug: string;
  name: string;
  location: string;
  ranking?: string;
  tuitionRange: string;
  popularPrograms: string[];
  logo?: string;
  type?: "Public" | "Private" | "Branch Campus";
  studentsCount?: string;
  acceptanceRate?: string;
}

export interface Course {
  id: string;
  countrySlug: string;
  name: string;
  level: "Undergraduate" | "Postgraduate" | "Doctorate" | "Diploma";
  duration: string;
  averageFee: string;
  careerProspects: string[];
  studyArea: string;
  universities?: string[];
}

export interface Scholarship {
  id: string;
  countrySlug: string;
  name: string;
  amount: string;
  eligibility: string;
  coverage: string;
  type: "Government" | "University" | "Merit" | "Research";
  provider?: string;
  deadline?: string;
}

export type ExploreContentType = "all" | "universities" | "courses" | "scholarships";
export type CourseLevel = "undergraduate" | "postgraduate" | "doctorate" | "diploma";
export type ScholarshipType = "Government" | "University" | "Merit" | "Research";
export type ExploreSortOption = "recommended" | "ranking" | "name" | "tuition" | "duration" | "deadline" | "coverage";

export interface ExploreFilters {
  type: ExploreContentType;
  country?: string;
  level?: CourseLevel;
  area?: string;
  scholarshipType?: ScholarshipType;
  query?: string;
  sort?: ExploreSortOption;
}

export type ExploreResult =
  | { kind: "university"; data: University }
  | { kind: "course"; data: Course }
  | { kind: "scholarship"; data: Scholarship };
