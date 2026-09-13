import React from "react";
import Link from "next/link";
import { ArrowRight, Award, ShieldCheck } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { constructMetadata } from "@/seo/metadata";

export const metadata = constructMetadata({
  title: "Study Abroad Scholarships — Merit, Government & University Awards",
  description:
    "Discover scholarships for Indian students studying in USA, UK, Canada, Australia, Germany, and Dubai. HighEd matches your profile to 100+ funding opportunities including full tuition waivers.",
  path: "/scholarships",
  keywords: ["study abroad scholarships india", "international student scholarships", "scholarship for ms usa", "uk chevening scholarship", "australia scholarship", "daad germany scholarship"],
});

const scholarshipsByCountry = [
  {
    country: "USA",
    code: "US",
    slug: "usa",
    color: "#EEF1FA",
    scholarships: [
      { name: "Fulbright Program", type: "Government", coverage: "Full Tuition + Living" },
      { name: "Hubert H. Humphrey Fellowship", type: "Government", coverage: "Full Funding" },
      { name: "University Merit Scholarships", type: "University", coverage: "Up to 50% Tuition" },
      { name: "STEM Research Assistantships", type: "University", coverage: "Tuition Waiver + Stipend" },
    ],
  },
  {
    country: "UK",
    code: "GB",
    slug: "uk",
    color: "#FDF0F3",
    scholarships: [
      { name: "Chevening Scholarship", type: "Government", coverage: "Full Tuition + Living" },
      { name: "Commonwealth Scholarship", type: "Government", coverage: "Full Funding" },
      { name: "GREAT Scholarship", type: "University", coverage: "£10,000+ Tuition" },
      { name: "Gates Cambridge Scholarship", type: "University", coverage: "Full Funding" },
    ],
  },
  {
    country: "Canada",
    code: "CA",
    slug: "canada",
    color: "#EBF5EE",
    scholarships: [
      { name: "Vanier CGS", type: "Government", coverage: "CA$50,000 / year" },
      { name: "Ontario Trillium Scholarship", type: "Government", coverage: "Full Tuition" },
      { name: "University Merit Awards", type: "University", coverage: "Up to 30% Tuition" },
      { name: "Research Assistantship", type: "University", coverage: "Stipend + Tuition" },
    ],
  },
  {
    country: "Australia",
    code: "AU",
    slug: "australia",
    color: "#FEF9EC",
    scholarships: [
      { name: "Australia Awards", type: "Government", coverage: "Full Tuition + Living" },
      { name: "Endeavour Scholarship", type: "Government", coverage: "AU$25,000+" },
      { name: "University Excellence Scholarships", type: "University", coverage: "Up to 25% Tuition" },
      { name: "Research Training Program", type: "University", coverage: "Tuition Waiver + Stipend" },
    ],
  },
  {
    country: "Germany",
    code: "DE",
    slug: "germany",
    color: "#EEF1FA",
    scholarships: [
      { name: "DAAD Scholarship", type: "Government", coverage: "€934/month + Fees" },
      { name: "Erasmus+ Programme", type: "Government", coverage: "Full Funding" },
      { name: "Public University No Tuition", type: "University", coverage: "Zero Tuition Fees" },
      { name: "Heinrich Böll Foundation", type: "Foundation", coverage: "€850/month Stipend" },
    ],
  },
  {
    country: "Dubai",
    code: "AE",
    slug: "dubai",
    color: "#FDF0F3",
    scholarships: [
      { name: "KHDA Merit Scholarship", type: "Government", coverage: "Up to 50% Tuition" },
      { name: "University Partner Scholarships", type: "University", coverage: "Up to 30% Tuition" },
      { name: "Early Bird Scholarship", type: "University", coverage: "Up to 20% Tuition" },
      { name: "Academic Excellence Award", type: "University", coverage: "Merit-Based" },
    ],
  },
];

const typeColors: Record<string, string> = {
  Government: "bg-[#EEF1FA] text-[#253A7B]",
  University: "bg-[#EBF5EE] text-[#1E7B47]",
  Foundation: "bg-[#FEF9EC] text-[#B38728]",
};

export default function ScholarshipsPage() {
  return (
    <div className="bg-[#FAFAFC] py-16 sm:py-24 font-dmsans">
      <Container size="lg">
        <SectionHeading
          badge="Scholarship Finder"
          title="Fund Your Study Abroad Dream"
          subtitle="Explore 100+ scholarships across 6 top destinations. Our counsellors will match your academic profile to the best funding opportunities — completely free."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {scholarshipsByCountry.map((dest) => (
            <div
              key={dest.country}
              className="group flex flex-col rounded-3xl border border-gray-100 bg-white shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#253A7B]/20 hover:shadow-lg overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-3.5 p-6 pb-4" style={{ backgroundColor: dest.color }}>
                <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white shadow-xs">
                  <ReactCountryFlag
                    countryCode={dest.code}
                    svg
                    style={{ width: "28px", height: "28px", borderRadius: "50%", objectFit: "cover" }}
                  />
                </span>
                <div>
                  <h3 className="font-hedvig text-lg font-bold text-[#121314]">Study in {dest.country}</h3>
                  <p className="font-dmsans text-xs text-gray-500">{dest.scholarships.length} scholarships available</p>
                </div>
              </div>

              {/* Scholarship List */}
              <div className="flex flex-1 flex-col gap-3 p-5">
                {dest.scholarships.map((s) => (
                  <div key={s.name} className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-dmsans text-sm font-semibold text-[#121314]">{s.name}</p>
                      <p className="mt-0.5 font-dmsans text-xs text-gray-500">{s.coverage}</p>
                    </div>
                    <span
                      className={`mt-0.5 shrink-0 rounded-full px-2.5 py-0.5 font-dmsans text-[11px] font-semibold ${typeColors[s.type] || "bg-gray-100 text-gray-600"}`}
                    >
                      {s.type}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-gray-100 px-5 py-4">
                <Link
                  href={`/study-in/${dest.slug}#scholarships`}
                  className="inline-flex items-center gap-1.5 font-dmsans text-sm font-semibold text-[#253A7B] transition-colors hover:text-[#E93F61]"
                >
                  View All {dest.country} Scholarships
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center gap-5 rounded-3xl bg-[linear-gradient(135deg,#253A7B,#142456)] px-8 py-14 text-center text-white sm:px-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 font-dmsans text-xs font-semibold tracking-wide text-white backdrop-blur-xs">
            <Award size={14} className="text-[#E93F61]" />
            Free Scholarship Profile Matching
          </span>
          <h2 className="font-hedvig text-3xl font-bold tracking-tight sm:text-4xl">
            Find Your Best Scholarship Match
          </h2>
          <p className="max-w-xl font-dmsans text-base text-white/85">
            Share your profile with our counsellors and we&apos;ll identify every scholarship opportunity you qualify for across all 6 destinations.
          </p>
          <LeadCTAButton
            source="scholarships_page_cta"
            contextTitle="Check My Scholarship Eligibility"
            contextCTA="Check Eligibility — Free"
            className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#E93F61] px-8 font-dmsans text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#d93657] active:scale-[0.98] cursor-pointer"
          >
            <span>Check My Scholarship Eligibility</span>
            <ShieldCheck size={17} />
          </LeadCTAButton>
        </div>
      </Container>
    </div>
  );
}
