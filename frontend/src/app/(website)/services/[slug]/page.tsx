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
    title: "Study Abroad Career Counselling & Profile Evaluation | HighEd",
    description:
      "Get free one-on-one study abroad career counselling. Expert profile evaluation, course mapping, and personalized university roadmaps with certified advisors.",
    component: CareerCounsellingPage,
  },
  "university-application": {
    title: "University Application & Admissions Assistance | HighEd",
    description:
      "End-to-end university application filing with 100% fee waivers, fast-track offer turnaround in 48h-14 days, and representation across 500+ top universities worldwide.",
    component: UniversityApplicationPage,
  },
  "scholarship-assistance": {
    title: "Study Abroad Scholarships & Merit Grants | HighEd",
    description:
      "Unlock up to 100% tuition fee waivers, merit bursaries, and government grants for international studies in USA, UK, Canada, Australia, and Europe.",
    component: ScholarshipAssistancePage,
  },
  "sop-lor-assistance": {
    title: "SOP & LOR Writing & Editing Assistance | HighEd",
    description:
      "Craft compelling, plagiarism-free Statements of Purpose and Letters of Recommendation tailored to global university admissions rubrics.",
    component: SOPAndLORAssistancePage,
  },
  "visa-assistance": {
    title: "Student Visa Guidance & Mock Interview Training | HighEd",
    description:
      "98.4% visa clearance rate. Comprehensive visa filing, financial solvency vetting, and 1-on-1 consular mock interviews for USA, UK, Canada, Australia, and Germany.",
    component: VisaAssistancePage,
  },
  "education-loan": {
    title: "Study Abroad Education Loans | Collateral & Non-Collateral | HighEd",
    description:
      "Fast-track education loan approval up to ₹1.5 Cr with 15+ partner banks and NBFCs. Competitive interest rates, zero collateral options, and 48-hour sanction letters.",
    component: EducationLoanPage,
  },
  "accommodation-pre-departure": {
    title: "Student Accommodation & Pre-Departure Briefing | HighEd",
    description:
      "Verified student housing near top universities with No Visa, No Pay guarantee. Port of entry document checklist, Forex, SIM cards, and travel guidance.",
    component: AccommodationAndPreDeparturePage,
  },
};

// Aliases for seamless redirection/fallback
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
  const canonicalSlugs = Object.keys(SERVICE_ROUTES);
  const aliasSlugs = Object.keys(SLUG_ALIASES);
  const allSlugs = Array.from(new Set([...canonicalSlugs, ...aliasSlugs]));

  return allSlugs.map((slug) => ({
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
