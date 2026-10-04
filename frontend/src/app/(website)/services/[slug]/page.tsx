import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/seo/metadata";

// Import all service view components
import CareerCounsellingPage from "../CareerCounselling";
import EducationLoanPage from "../EducationLoan";
import ScholarshipAssistancePage from "../ScholarshipAssistance";
import SOPAndLORAssistancePage from "../SOP&LOPAssistance";
import UniversityApplicationPage from "../UnviersityApplication";
import VisaAssistancePage from "../VisaAssistance";
import AccommodationAndPreDeparturePage from "../Acc&pre";

interface ServiceRouteConfig {
  title: string;
  description: string;
  component: React.ComponentType;
}

const SERVICE_ROUTES: Record<string, ServiceRouteConfig> = {
  "career-counselling": {
    title: "Study Abroad Career Counselling & Profile Evaluation",
    description:
      "Get free one-on-one study abroad career counselling. Expert profile evaluation, course mapping, and personalized university roadmaps with certified advisors.",
    component: CareerCounsellingPage,
  },
  "university-application": {
    title: "University Application & Admissions Assistance",
    description:
      "End-to-end university application guidance with fee waiver assistance and admission support across accredited universities worldwide.",
    component: UniversityApplicationPage,
  },
  "scholarship-assistance": {
    title: "Study Abroad Scholarships & Merit Grants Guidance",
    description:
      "Guidance on international student scholarships, merit bursaries, and tuition fee waiver opportunities for USA, UK, Canada, Australia, Germany, and Ireland.",
    component: ScholarshipAssistancePage,
  },
  "sop-lor-assistance": {
    title: "SOP & LOR Writing & Review Assistance",
    description:
      "Assistance with Statement of Purpose and Letter of Recommendation drafting, tailored to global university admissions rubrics.",
    component: SOPAndLORAssistancePage,
  },
  "visa-assistance": {
    title: "Student Visa Guidance & Mock Interview Preparation",
    description:
      "Comprehensive student visa filing guidance, documentation review, and 1-on-1 consular mock interviews for USA, UK, Canada, Australia, and Germany.",
    component: VisaAssistancePage,
  },
  "education-loan": {
    title: "Study Abroad Education Loan Assistance",
    description:
      "Guidance on collateral and non-collateral education loan applications through leading nationalized banks and NBFCs for international studies.",
    component: EducationLoanPage,
  },
  "accommodation-pre-departure": {
    title: "Student Accommodation & Pre-Departure Guidance",
    description:
      "Guidance on verified student housing near universities, port-of-entry document checklists, Forex, SIM cards, and overseas travel preparation.",
    component: AccommodationAndPreDeparturePage,
  },
};

// Aliases are redirected via next.config.ts permanent 301 redirects
const SLUG_ALIASES: Record<string, string> = {
  "sop-lop-assistance": "sop-lor-assistance",
  "sop-and-lor-assistance": "sop-lor-assistance",
  "accommodation": "accommodation-pre-departure",
  "pre-departure-support": "accommodation-pre-departure",
  "acc-pre": "accommodation-pre-departure",
  "Acc&pre": "accommodation-pre-departure",
};

function resolveSlug(slug: string): string {
  const decoded = decodeURIComponent(slug);
  return SLUG_ALIASES[decoded] || SLUG_ALIASES[slug] || slug;
}

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(SERVICE_ROUTES).map((slug) => ({
    slug,
  }));
}


export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const canonicalKey = resolveSlug(slug);
  const route = SERVICE_ROUTES[canonicalKey];

  if (!route) {
    return constructMetadata({
      title: "Service Not Found | HighEd",
      description: "The requested study abroad service page could not be found.",
      path: `/services/${slug}`,
    });
  }

  return constructMetadata({
    title: route.title,
    description: route.description,
    path: `/services/${canonicalKey}`,
    keywords: [
      "study abroad services",
      "overseas education consultant",
      "international student admissions",
      canonicalKey.replace(/-/g, " "),
    ],
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const canonicalKey = resolveSlug(slug);
  const route = SERVICE_ROUTES[canonicalKey];

  if (!route) {
    notFound();
  }

  const ServiceComponent = route.component;
  return <ServiceComponent />;
}
