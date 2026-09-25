import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import CTASection from "@/components/ui/CTASection";
import { constructMetadata } from "@/seo/metadata";

export const metadata = constructMetadata({
  title: "Study Abroad Scholarships | University & Government Aid",
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
    variant: "primary" as const,
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
    variant: "accent" as const,
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
    variant: "success" as const,
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
    variant: "gold" as const,
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
    variant: "primary" as const,
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
    variant: "accent" as const,
    scholarships: [
      { name: "KHDA Merit Scholarship", type: "Government", coverage: "Up to 50% Tuition" },
      { name: "University Partner Scholarships", type: "University", coverage: "Up to 30% Tuition" },
      { name: "Early Bird Scholarship", type: "University", coverage: "Up to 20% Tuition" },
      { name: "Academic Excellence Award", type: "University", coverage: "Merit-Based" },
    ],
  },
];

const typeVariantMap: Record<string, "primary" | "success" | "gold" | "gray"> = {
  Government: "primary",
  University: "success",
  Foundation: "gold",
};

const variantBgMap = {
  primary: "bg-icon-bg-primary",
  accent: "bg-icon-bg-accent",
  success: "bg-icon-bg-success",
  gold: "bg-icon-bg-gold",
};

export default function ScholarshipsPage() {
  return (
    <div className="bg-surface-neutral py-16 sm:py-24 font-body">
      <Container size="lg">
        <SectionHeading
          badge="Scholarship Finder"
          title="Fund Your Study Abroad Dream"
          subtitle="Explore 100+ scholarships across 6 top destinations. Our counsellors will match your academic profile to the best funding opportunities — completely free."
        />

        <div className="grid grid-cols-4 gap-6 lg:grid-cols-12 lg:gap-8">
          {scholarshipsByCountry.map((dest) => (
            <Card
              key={dest.country}
              hover
              className="col-span-4 sm:col-span-2 lg:col-span-4 group flex flex-col overflow-hidden p-0 rounded-2xl border-border bg-card shadow-xs transition-all duration-300 hover:shadow-md hover:border-brand-primary/20"
            >
              {/* Header */}
              <div className={`flex items-center gap-3.5 p-6 pb-4 ${variantBgMap[dest.variant]}`}>
                <span className="flex size-12 items-center justify-center overflow-hidden rounded-full bg-surface-default shadow-xs">
                  <ReactCountryFlag
                    countryCode={dest.code}
                    svg
                    style={{ width: "30px", height: "30px", borderRadius: "50%", objectFit: "cover" }}
                  />
                </span>
                <div>
                  <h3 className="card-title text-content-primary">Study in {dest.country}</h3>
                  <p className="text-xs text-content-secondary">{dest.scholarships.length} scholarships available</p>
                </div>
              </div>

              {/* Scholarship List */}
              <div className="flex flex-1 flex-col gap-3.5 p-6">
                {dest.scholarships.map((s) => (
                  <div key={s.name} className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-content-primary">{s.name}</p>
                      <p className="mt-0.5 text-xs text-content-secondary">{s.coverage}</p>
                    </div>
                    <Badge variant={typeVariantMap[s.type] || "gray"} className="mt-0.5 shrink-0 text-xs">
                      {s.type}
                    </Badge>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-border px-6 py-4">
                <Link
                  href={`/study-in/${dest.slug}#scholarships`}
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-primary transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-lg"
                >
                  <span>View All {dest.country} Scholarships</span>
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <CTASection
            badge="Free Scholarship Profile Matching"
            title="Find Your Best Scholarship Match"
            subtitle="Share your profile with our counsellors and we'll identify every scholarship opportunity you qualify for across all 6 destinations."
            ctaLabel="Book Free Counselling"
            ctaSource="scholarships_page_cta"
          />
        </div>
      </Container>
    </div>
  );
}
