import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site.config";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = siteConfig.url;

  const ardManifest = {
    $schema: "https://agenticresourcediscovery.org/schemas/v1/ard.json",
    specVersion: "1.0",
    host: {
      identifier: baseUrl,
      displayName: "HighEd Study Abroad Advisory",
      description:
        "Premier international education consultancy in Tamil Nadu providing university admissions, scholarship assistance, education loans, and visa advisory for USA, UK, Canada, Australia, Germany, Ireland, and Dubai.",
      documentationUrl: `${baseUrl}/llms.txt`,
      logoUrl: `${baseUrl}/logos/Highed%20Logo/Highed.png`,
    },
    entries: [
      {
        identifier: "submit_counselling_inquiry",
        displayName: "Book Free Study Abroad Counselling",
        type: "application/json",
        description:
          "Submit a student consultation request for free overseas education advisory, university shortlisting, scholarships, and student visa processing.",
        url: `${baseUrl}/api/leads`,
        representativeQueries: [
          "How can I book free study abroad counselling with HighEd?",
          "Apply for overseas university admission consultation",
          "Get student visa guidance for USA, UK, Canada, Australia, Germany",
        ],
      },
      {
        identifier: "search_courses_and_destinations",
        displayName: "Search Study Abroad Destinations & Requirements",
        type: "text/html",
        description:
          "Search destination countries (USA, UK, Canada, Australia, Germany, Ireland, Dubai) with admission requirements, intake deadlines, tuition costs, and post-study work rights.",
        url: `${baseUrl}/explore`,
        representativeQueries: [
          "What are the requirements to study in Germany for Indian students?",
          "Cost of studying in Canada vs Australia",
          "Universities offering scholarships in UK and USA",
        ],
      },
      {
        identifier: "calculate_study_abroad_cost",
        displayName: "Study Abroad Cost & Loan EMI Calculator",
        type: "text/html",
        description:
          "Calculate tuition fees, living expenses, currency exchange, and education loan EMIs for overseas education.",
        url: `${baseUrl}/tools/study-abroad-cost`,
        representativeQueries: [
          "Calculate total cost of MS in USA for Indian students",
          "Education loan monthly EMI calculation for abroad studies",
        ],
      },
      {
        identifier: "evaluate_student_profile",
        displayName: "Student Profile & Eligibility Evaluator",
        type: "text/html",
        description:
          "Assess academic background, GRE/GMAT, IELTS/TOEFL scores to determine university admission chances and scholarship eligibility.",
        url: `${baseUrl}/tools/profile-checker`,
        representativeQueries: [
          "Evaluate my profile for Canadian universities",
          "Check eligibility for Australian university scholarships",
        ],
      },
    ],
  };

  return NextResponse.json(ardManifest, {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
    },
  });
}
