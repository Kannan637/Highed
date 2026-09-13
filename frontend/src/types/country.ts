export interface CountryUniversity {
  name: string;
  location: string;
  ranking?: string;
  tuitionRange: string;
  popularPrograms: string[];
  image?: string;
}

export interface CountryCourse {
  name: string;
  level: "Undergraduate" | "Postgraduate" | "Doctorate" | "Diploma";
  duration: string;
  averageFee: string;
  careerProspects: string[];
}

export interface CountryCost {
  tuitionMin: string;
  tuitionMax: string;
  livingCostMonthly: string;
  accommodationMonthly: string;
  foodAndTransportMonthly: string;
}

export interface CountryScholarship {
  name: string;
  amount: string;
  eligibility: string;
  coverage: string;
}

export interface CountryVisaStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface CountryIntake {
  season: string;
  months: string;
  deadline: string;
  type: "Major" | "Minor";
}

export interface CountryFAQ {
  question: string;
  answer: string;
}

export interface CountryWhyStudyPoint {
  title: string;
  description: string;
  icon?: string;
}

export interface CountryTestimonial {
  studentName: string;
  university: string;
  course: string;
  country: string;
  rating: number;
  quote: string;
  avatar?: string;
}

export interface Country {
  slug: string;
  name: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  flag: string;
  currency: string;
  capital: string;
  language: string[];
  intakes: CountryIntake[];
  whyStudy: CountryWhyStudyPoint[];
  universitiesList: CountryUniversity[];
  coursesList: CountryCourse[];
  costDetails: CountryCost;
  scholarshipsList: CountryScholarship[];
  visaDetails: {
    visaType: string;
    processingTime: string;
    fundsRequired: string;
    workPermitHours: string;
    postStudyWorkVisa: string;
    steps: CountryVisaStep[];
  };
  faqs: CountryFAQ[];
  testimonial?: CountryTestimonial;
  videoUrl?: string;
}

