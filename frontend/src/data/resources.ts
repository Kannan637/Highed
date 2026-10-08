import type { LucideIcon } from "lucide-react";
import {
  BookOpenText,
  Globe2,
  Building2,
  PenLine,
  MessageCircleQuestion,
  Calculator,
  Landmark,
  UserCheck,
  Award,
  Gauge,
  Languages,
  Mic,
  FileText,
  GraduationCap,
} from "lucide-react";

export interface ResourceCategory {
  id: string;
  label: string;
  target: string;
}

export const resourceCategories: ResourceCategory[] = [
  { id: "all", label: "All", target: "resources-top" },
  { id: "guides", label: "Guides", target: "guides" },
  { id: "countries", label: "Countries", target: "countries" },
  { id: "universities", label: "Universities", target: "universities" },
  { id: "exams", label: "Exams", target: "exams" },
  { id: "calculators", label: "Calculators", target: "tools" },
  { id: "scholarships", label: "Scholarships", target: "scholarship-finder" },
  { id: "faq", label: "FAQ", target: "faq" },
];

export interface GuideResource {
  label: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: LucideIcon;
  meta?: string[];
}

export const featuredGuide: GuideResource = {
  label: "Guide",
  title: "Study Abroad Guide",
  description:
    "A step-by-step handbook covering course selection, applications, finances, visas and life after arrival.",
  href: "/blog",
  cta: "Explore Guide",
  icon: BookOpenText,
  meta: ["Choosing a course", "Applications", "Visas", "Finances"],
};

export const guides: GuideResource[] = [
  {
    label: "Destinations",
    title: "Country Guides",
    description: "Compare 7 leading destinations on cost, courses and work rights.",
    href: "/study-in",
    cta: "Explore Countries",
    icon: Globe2,
  },
  {
    label: "Directory",
    title: "University Directory",
    description: "Discover universities by country, course, ranking and tuition.",
    href: "/study-in",
    cta: "Browse Universities",
    icon: Building2,
  },
  {
    label: "Test Prep",
    title: "Exam & Test Prep Guides",
    description: "IELTS, PTE, TOEFL, GRE and GMAT — formats, scores and strategy.",
    href: "/blog",
    cta: "Explore Exam Guides",
    icon: PenLine,
  },
  {
    label: "Answers",
    title: "Frequently Asked Questions",
    description: "Clear answers to what students ask most before going abroad.",
    href: "/about#faq",
    cta: "Read FAQs",
    icon: MessageCircleQuestion,
  },
];

export interface CountryGuide {
  code: string;
  name: string;
  slug: string;
  courses: string[];
  cost: string;
  tag: string;
}

export const countryGuides: CountryGuide[] = [
  { code: "US", name: "USA", slug: "usa", courses: ["Computer Science", "Business Analytics"], cost: "₹35–60L / yr", tag: "Most popular" },
  { code: "GB", name: "UK", slug: "uk", courses: ["MBA", "Finance"], cost: "₹25–40L / yr", tag: "1-year Masters" },
  { code: "CA", name: "Canada", slug: "canada", courses: ["Engineering", "Healthcare"], cost: "₹20–35L / yr", tag: "PR pathways" },
  { code: "AU", name: "Australia", slug: "australia", courses: ["IT", "Nursing"], cost: "₹25–40L / yr", tag: "Post-study work" },
  { code: "DE", name: "Germany", slug: "germany", courses: ["Mechanical Eng.", "Data Science"], cost: "₹8–15L / yr", tag: "Low tuition" },
  { code: "IE", name: "Ireland", slug: "ireland", courses: ["Data Analytics", "Pharma"], cost: "₹18–30L / yr", tag: "Tech hub" },
  { code: "AE", name: "Dubai", slug: "dubai", courses: ["Business", "Hospitality"], cost: "₹12–25L / yr", tag: "Close to home" },
];

export interface UniversityPreview {
  name: string;
  country: string;
  city: string;
  courses: string[];
  tuition: 1 | 2 | 3;
  ranking: string;
  intake: string;
}

export const universityPreviews: UniversityPreview[] = [
  { name: "University of Toronto", country: "Canada", city: "Toronto", courses: ["Computer Science", "Engineering"], tuition: 3, ranking: "Top 50", intake: "Sep" },
  { name: "University of Manchester", country: "UK", city: "Manchester", courses: ["MBA", "Finance"], tuition: 2, ranking: "Top 50", intake: "Sep" },
  { name: "Technical University of Munich", country: "Germany", city: "Munich", courses: ["Engineering", "Data Science"], tuition: 1, ranking: "Top 50", intake: "Oct" },
  { name: "University of Melbourne", country: "Australia", city: "Melbourne", courses: ["IT", "Healthcare"], tuition: 3, ranking: "Top 50", intake: "Feb" },
  { name: "Trinity College Dublin", country: "Ireland", city: "Dublin", courses: ["Data Analytics", "Business"], tuition: 2, ranking: "Top 100", intake: "Sep" },
  { name: "Arizona State University", country: "USA", city: "Tempe", courses: ["Business Analytics", "Engineering"], tuition: 2, ranking: "Top 200", intake: "Jan" },
];

export interface ExamGuide {
  name: string;
  description: string;
  meta: string;
  icon: LucideIcon;
}

export const examGuides: ExamGuide[] = [
  { name: "IELTS", description: "Practice guides, band scores and preparation strategy.", meta: "Band 6.0–7.5 typical", icon: Languages },
  { name: "PTE", description: "Preparation resources and score guidance.", meta: "Score 58–79 typical", icon: Mic },
  { name: "TOEFL", description: "Exam format, sections and preparation.", meta: "Score 80–100 typical", icon: FileText },
  { name: "GRE / GMAT", description: "Admission test preparation for higher study.", meta: "Masters & MBA", icon: GraduationCap },
];

export interface ToolResource {
  id?: string;
  index: string;
  category: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: LucideIcon;
}

export const tools: ToolResource[] = [
  { index: "01", category: "Calculator", title: "Study Abroad Cost Calculator", description: "Estimate tuition, accommodation, living expenses and total study-abroad costs.", cta: "Calculate Cost", href: "/tools/study-abroad-cost", icon: Calculator },
  { index: "02", category: "Calculator", title: "Education Loan EMI Calculator", description: "Understand monthly EMI and repayment estimates.", cta: "Calculate EMI", href: "/tools/education-loan-emi", icon: Landmark },
  { index: "03", category: "Checker", title: "Profile Eligibility Checker", description: "Check your profile against study-abroad requirements.", cta: "Check Eligibility", href: "/tools/profile-checker", icon: UserCheck },
  { id: "scholarship-finder", index: "04", category: "Finder", title: "Scholarship Finder", description: "Discover scholarships based on destination, course and profile.", cta: "Find Scholarships", href: "/scholarships", icon: Award },
  { index: "05", category: "Evaluator", title: "IELTS / PTE Score Evaluator", description: "Understand your test-score readiness.", cta: "Evaluate Score", href: "/tools/test-score-evaluator", icon: Gauge },
];

export interface ResourceFaq {
  id: string;
  question: string;
  answer: string;
}

export const resourceFaqs: ResourceFaq[] = [
  { id: "cost", question: "How much does it cost to study abroad?", answer: "Total annual cost typically ranges from ₹8–15 lakh in Germany to ₹35–60 lakh in the USA, covering tuition and living expenses. Your course, city and lifestyle make the biggest difference." },
  { id: "country", question: "Which country is best for my course?", answer: "It depends on your field, budget and career goals. For example, Germany is strong for engineering, the UK for one-year Masters, and Canada and Australia for post-study work pathways. A counsellor can shortlist based on your profile." },
  { id: "visa", question: "How do I apply for a student visa?", answer: "After receiving an offer letter, you typically pay a deposit, gather financial proof and test scores, complete the online visa application and attend a biometrics or interview appointment." },
  { id: "loan", question: "Can I study abroad with an education loan?", answer: "Yes. Banks and NBFCs offer secured and unsecured education loans covering tuition and living costs, often with a moratorium until after course completion." },
  { id: "score", question: "What IELTS / PTE score do I need?", answer: "Most universities ask for IELTS 6.0–7.0 overall or PTE 58–65 for postgraduate programs. Competitive universities and some courses require higher scores." },
];
