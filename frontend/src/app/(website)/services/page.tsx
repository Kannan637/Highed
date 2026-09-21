import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Award, FileText, ShieldCheck, Banknote, Plane, Home } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import IconBox from "@/components/ui/IconBox";
import CTASection from "@/components/ui/CTASection";
import { constructMetadata } from "@/seo/metadata";

export const metadata = constructMetadata({
  title: "Study Abroad Services | Counselling, Admissions & Visa",
  description:
    "Explore HighEd's full range of overseas education services including career counselling, university application, SOP & LOR assistance, scholarship guidance, visa support, and education loan processing.",
  path: "/services",
  keywords: ["study abroad services", "overseas education consultant", "university application assistance", "visa assistance india"],
});

const services = [
  {
    id: "career-counselling",
    icon: BookOpen,
    title: "Career Counselling",
    href: "/book-counselling",
    variant: "primary" as const,
    description:
      "One-on-one profile evaluation with certified counsellors. We assess your academic background, career goals, and target country to build a personalized study-abroad roadmap.",
  },
  {
    id: "university-application",
    icon: GraduationCap,
    title: "University Application",
    href: "/study-in",
    variant: "accent" as const,
    description:
      "End-to-end application management including shortlisting, document checklist, deadline tracking, and direct portal submission to 500+ partner universities.",
  },
  {
    id: "scholarship-assistance",
    icon: Award,
    title: "Scholarship Assistance",
    href: "/scholarships",
    variant: "gold" as const,
    description:
      "We match your academic profile to government, university, and merit-based scholarships worth up to 100% tuition waiver across all major study destinations.",
  },
  {
    id: "sop-lor-assistance",
    icon: FileText,
    title: "SOP & LOR Assistance",
    href: "/book-counselling",
    variant: "success" as const,
    description:
      "Expert writing and editing support for your Statement of Purpose and Letters of Recommendation — crafted to meet each university's admissions rubric.",
  },
  {
    id: "visa-assistance",
    icon: ShieldCheck,
    title: "Visa Assistance",
    href: "/book-counselling",
    variant: "primary" as const,
    description:
      "Comprehensive F-1, Tier-4, Student Direct Stream, and Schengen visa filing support. 98%+ visa success rate across all partner countries.",
  },
  {
    id: "education-loan",
    icon: Banknote,
    title: "Education Loan",
    href: "/book-counselling",
    variant: "gold" as const,
    description:
      "We partner with leading NBFCs and banks to help students secure collateral and non-collateral education loans from ₹7.5 Lakhs to ₹1.5 Crore.",
  },
  {
    id: "accommodation",
    icon: Home,
    title: "Student Accommodation",
    href: "/book-counselling",
    variant: "success" as const,
    description:
      "Safe, verified on-campus and off-campus housing near your university. We assist with booking student dorms, private apartments, and homestays before you fly.",
  },
  {
    id: "pre-departure-support",
    icon: Plane,
    title: "Pre-Departure Support",
    href: "/book-counselling",
    variant: "accent" as const,
    description:
      "Arrival orientation, accommodation shortlisting, forex guidance, travel insurance, and a dedicated post-arrival helpdesk to settle you in confidently.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-surface-neutral py-16 sm:py-24 font-body">
      <Container size="lg">
        <SectionHeading
          badge="Our Services"
          title="Everything You Need to Study Abroad"
          subtitle="From profile evaluation to pre-departure, our certified counsellors handle every step of your international education journey — completely free of charge."
        />

        <div className="grid grid-cols-4 gap-6 lg:grid-cols-12 lg:gap-8">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <Card
                key={svc.title}
                className="col-span-4 sm:col-span-2 lg:col-span-4 group flex flex-col justify-between p-7 scroll-mt-28"
              >
                <div>
                  <IconBox icon={Icon} variant={svc.variant} />

                  <h3 className="mt-5 text-h5 text-content-primary transition-colors group-hover:text-brand-primary">
                    {svc.title}
                  </h3>

                  <p className="mt-2.5 text-body-small text-content-secondary leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    href={svc.href}
                    aria-label={`Learn more about ${svc.title}`}
                    className="inline-flex items-center gap-1.5 text-body-small font-medium text-brand-primary transition-colors hover:text-brand-accent"
                  >
                    Learn More
                    <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <CTASection
            badge="Official University Representative — 500+ Global Partners"
            title="Not Sure Where to Start?"
            subtitle="Book a free 30-minute strategy session with a certified HighEd counsellor. We'll evaluate your profile and recommend the best pathway for your goals."
            ctaLabel="Book Free Counselling"
            ctaSource="services_page_cta"
          />
        </div>
      </Container>
    </div>
  );
}
