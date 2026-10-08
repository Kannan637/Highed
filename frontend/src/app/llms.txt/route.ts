import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site.config";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = siteConfig.url;

  const content = `# HighEd — Study Abroad Consultants

> HighEd is a premier international education consultancy headquartered in Saidapet, Chennai, Tamil Nadu, India. HighEd provides ethical, 100% free overseas education advisory, university admissions processing, scholarship assistance, and student visa guidance for Indian students targeting accredited institutions in the USA, UK, Canada, Australia, Germany, Ireland, and Dubai.

## Verified Organization Details (NAP)
- Organization Name: HighEd (HighEd Education Advisory)
- Founder : #
- Physical Head Office: ${siteConfig.contact.address}
- Primary Phone: ${siteConfig.contact.phone}
- Official Admissions Email: ${siteConfig.contact.email}
- Canonical Website: ${baseUrl}
- Office Hours: Monday - Saturday: 9:30 AM - 6:30 PM IST

## Contact
- Headquarters (Chennai): ${baseUrl}/contact

## Core Study Abroad Destinations
- Study in USA: ${baseUrl}/study-in/usa
- Study in United Kingdom: ${baseUrl}/study-in/uk
- Study in Canada: ${baseUrl}/study-in/canada
- Study in Australia: ${baseUrl}/study-in/australia
- Study in Germany: ${baseUrl}/study-in/germany
- Study in Ireland: ${baseUrl}/study-in/ireland
- Study in Dubai (UAE): ${baseUrl}/study-in/dubai

## Key Advisory Services
- Career Counselling: ${baseUrl}/services/career-counselling
- University Application Processing: ${baseUrl}/services/university-application
- Scholarship Assistance: ${baseUrl}/services/scholarship-assistance
- SOP & LOR Assistance: ${baseUrl}/services/sop-lor-assistance
- Student Visa Documentation & Mock Interviews: ${baseUrl}/services/visa-assistance
- Education Loan Guidance: ${baseUrl}/services/education-loan
- Accommodation & Pre-Departure Support: ${baseUrl}/services/accommodation-pre-departure

## Free Evaluation Tools & Interactive Calculators
- Profile Evaluator: ${baseUrl}/tools/profile-checker
- Study Abroad Cost Calculator: ${baseUrl}/tools/study-abroad-cost
- Education Loan EMI Calculator: ${baseUrl}/tools/education-loan-emi
- Test Score Evaluator: ${baseUrl}/tools/test-score-evaluator
- Scholarship Finder: ${baseUrl}/tools/scholarship-finder

## Editorial & Research Resources
- Study Abroad Blog & Guides: ${baseUrl}/blog
- Student Success Experiences: ${baseUrl}/success-stories
- About HighEd & Educational Philosophy: ${baseUrl}/about
- Leadership & Advisory Team: ${baseUrl}/our-team
- Booking & Free Counselling: ${baseUrl}/book-counselling
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
    },
  });
}
