import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Award, FileText, ShieldCheck, Banknote, Plane, Home } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { constructMetadata } from "@/seo/metadata";

export const metadata = constructMetadata({
  title: "Study Abroad Services — Career Counselling, Visa, Scholarships & More",
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
    color: "#EEF1FA",
    iconColor: "#253A7B",
    description:
      "One-on-one profile evaluation with certified counsellors. We assess your academic background, career goals, and target country to build a personalized study-abroad roadmap.",
  },
  {
    id: "university-application",
    icon: GraduationCap,
    title: "University Application",
    href: "/study-in",
    color: "#FDF0F3",
    iconColor: "#E93F61",
    description:
      "End-to-end application management including shortlisting, document checklist, deadline tracking, and direct portal submission to 500+ partner universities.",
  },
  {
    id: "scholarship-assistance",
    icon: Award,
    title: "Scholarship Assistance",
    href: "/scholarships",
    color: "#FEF9EC",
    iconColor: "#B38728",
    description:
      "We match your academic profile to government, university, and merit-based scholarships worth up to 100% tuition waiver across all major study destinations.",
  },
  {
    id: "sop-lor-assistance",
    icon: FileText,
    title: "SOP & LOR Assistance",
    href: "/book-counselling",
    color: "#EBF5EE",
    iconColor: "#1E7B47",
    description:
      "Expert writing and editing support for your Statement of Purpose and Letters of Recommendation — crafted to meet each university's admissions rubric.",
  },
  {
    id: "visa-assistance",
    icon: ShieldCheck,
    title: "Visa Assistance",
    href: "/book-counselling",
    color: "#EEF1FA",
    iconColor: "#253A7B",
    description:
      "Comprehensive F-1, Tier-4, Student Direct Stream, and Schengen visa filing support. 98%+ visa success rate across all partner countries.",
  },
  {
    id: "education-loan",
    icon: Banknote,
    title: "Education Loan",
    href: "/book-counselling",
    color: "#FEF9EC",
    iconColor: "#B38728",
    description:
      "We partner with leading NBFCs and banks to help students secure collateral and non-collateral education loans from ₹7.5 Lakhs to ₹1.5 Crore.",
  },
  {
    id: "accommodation",
    icon: Home,
    title: "Student Accommodation",
    href: "/book-counselling",
    color: "#EBF5EE",
    iconColor: "#1E7B47",
    description:
      "Safe, verified on-campus and off-campus housing near your university. We assist with booking student dorms, private apartments, and homestays before you fly.",
  },
  {
    id: "pre-departure-support",
    icon: Plane,
    title: "Pre-Departure Support",
    href: "/book-counselling",
    color: "#FDF0F3",
    iconColor: "#E93F61",
    description:
      "Arrival orientation, accommodation shortlisting, forex guidance, travel insurance, and a dedicated post-arrival helpdesk to settle you in confidently.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#FAFAFC] py-16 sm:py-24 font-dmsans">
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
              <div
                key={svc.title}
                id={svc.id}
                className="col-span-4 sm:col-span-2 lg:col-span-4 group flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-7 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#253A7B]/20 hover:shadow-lg scroll-mt-28"
              >
                <div>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: svc.color }}
                  >
                    <Icon size={22} style={{ color: svc.iconColor }} />
                  </div>

                  <h3 className="mt-5 font-hedvig text-xl font-bold text-[#121314] transition-colors group-hover:text-[#253A7B]">
                    {svc.title}
                  </h3>

                  <p className="mt-2.5 font-dmsans text-sm leading-relaxed text-gray-600">
                    {svc.description}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-1.5 font-dmsans text-sm font-semibold text-[#253A7B] transition-colors hover:text-[#E93F61]"
                  >
                    Learn More
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center gap-5 rounded-3xl bg-[linear-gradient(135deg,#253A7B,#142456)] px-8 py-14 text-center text-white sm:px-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 font-dmsans text-xs font-semibold tracking-wide text-white backdrop-blur-xs">
            <ShieldCheck size={14} className="text-[#E93F61]" />
            Official University Representative — 500+ Global Partners
          </span>
          <h2 className="font-hedvig text-3xl font-bold tracking-tight sm:text-4xl">
            Not Sure Where to Start?
          </h2>
          <p className="max-w-xl font-dmsans text-base text-white/85">
            Book a free 30-minute strategy session with a certified HighEd counsellor. We&apos;ll evaluate your profile and recommend the best pathway for your goals.
          </p>
          <LeadCTAButton
            source="services_page_cta"
            className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#E93F61] px-8 font-dmsans text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#d93657] active:scale-[0.98] cursor-pointer"
          >
            <span>Book Free Counselling</span>
            <ArrowRight size={18} />
          </LeadCTAButton>
        </div>
      </Container>
    </div>
  );
}
