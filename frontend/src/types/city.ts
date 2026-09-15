export interface CityFAQ {
  question: string;
  answer: string;
}

export interface CityTestimonial {
  studentName: string;
  city: string;
  destination: string;
  course: string;
  quote: string;
  avatar?: string;
}

export interface CityDestination {
  name: string;
  flag: string;
  href: string;
  tagline: string;
}

export interface CityStat {
  label: string;
  value: string;
}

export interface CityWhyPoint {
  title: string;
  description: string;
  icon: string;
}

export interface CityService {
  title: string;
  description: string;
  icon: string;
}

export interface CityData {
  slug: string;
  name: string;

  /** H1 title on the page */
  title: string;

  /** Supporting copy under the H1 */
  tagline: string;

  /** Longer intro paragraph, city-specific */
  intro: string;

  heroImage: string;

  /** City-specific trust numbers displayed in the hero stats bar */
  stats: CityStat[];

  /** City-specific reasons to choose HighEd */
  whyHighEd: CityWhyPoint[];

  /** Study destinations shown as destination cards */
  destinations: CityDestination[];

  /** Popular courses students from this city pursue */
  popularCourses: string[];

  /** Services HighEd provides */
  services: CityService[];

  /** Student success stories from this city */
  testimonials: CityTestimonial[];

  /** City-specific FAQ entries */
  faqs: CityFAQ[];

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
