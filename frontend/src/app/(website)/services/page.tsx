import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Award,
  FileText,
  ShieldCheck,
  Banknote,
  Plane,
  Home,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import { constructMetadata } from "@/seo/metadata";
import { cn } from "@/lib/utils";
import {
  CARD_BG_COLORS,
  CardDecorativeIcons,
} from "@/components/home/service-constants";

export const metadata = constructMetadata({
  title: "Study Abroad Services | Counselling, Admissions & Visa",
  description:
    "Explore HighEd's full range of overseas education services including career counselling, university application, SOP & LOR assistance, scholarship guidance, visa support, and education loan processing.",
  path: "/services",
  keywords: [
    "study abroad services",
    "overseas education consultant",
    "university application assistance",
    "visa assistance india",
  ],
});

const services = [
  {
    id: "career-counselling",
    icon: BookOpen,
    title: "Career Counselling",
    href: "/services/career-counselling",
    description:
      "One-on-one profile evaluation with certified counsellors. We assess your academic background, career goals, and target country to build a personalized study-abroad roadmap.",
  },
  {
    id: "university-application",
    icon: GraduationCap,
    title: "University Application",
    href: "/services/university-application",
    description:
      "End-to-end application management including shortlisting, document checklist, deadline tracking, and direct portal submission to 500+ partner universities.",
  },
  {
    id: "scholarship-assistance",
    icon: Award,
    title: "Scholarship Assistance",
    href: "/services/scholarship-assistance",
    description:
      "We match your academic profile to government, university, and merit-based scholarships worth up to 100% tuition waiver across all major study destinations.",
  },
  {
    id: "sop-lor-assistance",
    icon: FileText,
    title: "SOP & LOR Assistance",
    href: "/services/sop-lor-assistance",
    description:
      "Expert writing and editing support for your Statement of Purpose and Letters of Recommendation — crafted to meet each university's admissions rubric.",
  },
  {
    id: "visa-assistance",
    icon: ShieldCheck,
    title: "Visa Assistance",
    href: "/services/visa-assistance",
    description:
      "Comprehensive F-1, Tier-4, Student Direct Stream, and Schengen visa filing support. 98%+ visa success rate across all partner countries.",
  },
  {
    id: "education-loan",
    icon: Banknote,
    title: "Education Loan",
    href: "/services/education-loan",
    description:
      "We partner with leading NBFCs and banks to help students secure collateral and non-collateral education loans from ₹7.5 Lakhs to ₹1.5 Crore.",
  },
  {
    id: "accommodation",
    icon: Home,
    title: "Student Accommodation",
    href: "/services/accommodation-pre-departure",
    description:
      "Safe, verified on-campus and off-campus housing near your university. We assist with booking student dorms, private apartments, and homestays before you fly.",
  },
  {
    id: "pre-departure-support",
    icon: Plane,
    title: "Pre-Departure Support",
    href: "/services/accommodation-pre-departure",
    description:
      "Arrival orientation, accommodation shortlisting, forex guidance, travel insurance, and a dedicated post-arrival helpdesk to settle you in confidently.",
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full bg-white py-12 tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] [&_*]:[letter-spacing:var(--tracking-tight-5)] sm:py-16 md:py-20">
      <Container size="lg">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything You Need to Study Abroad"
          subtitle="From profile evaluation to pre-departure, our certified counsellors handle every step of your international education journey — completely free of charge."
          className="mb-8"
        />

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, index) => {
            const Icon = svc.icon;
            const cardBg = CARD_BG_COLORS[index % CARD_BG_COLORS.length];
            const DecorativeIcon =
              CardDecorativeIcons[index % CardDecorativeIcons.length];

            return (
              <Link
                key={svc.title}
                id={svc.id}
                href={svc.href}
                className="group/card block h-full rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 scroll-mt-28"
              >
                <div
                  className={cn(
                    "group relative isolate flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl p-7 sm:p-8",
                    /* Border */
                    "border border-black/[0.06]",
                    /* Shadow */
                    "shadow-[0_2px_8px_rgba(0,0,0,0.03)]",
                    /* Animation */
                    "transition-all duration-300 ease-out",
                    "group-hover/card:-translate-y-1.5",
                    "group-hover/card:border-black/[0.12]",
                    "group-hover/card:shadow-[0_16px_32px_rgba(0,0,0,0.07)]"
                  )}
                  style={{
                    backgroundColor: cardBg,
                  }}
                >
                  {/* =================================================
                      DECORATIVE BACKGROUND SVG
                  ================================================== */}
                  {DecorativeIcon && (
                    <DecorativeIcon
                      aria-hidden="true"
                      className={cn(
                        "pointer-events-none absolute -right-10 -top-10 z-0",
                        "h-55 w-55",
                        "opacity-30",
                        "text-black/[0.08]",
                        "transition-all duration-500 ease-out",
                        "group-hover/card:scale-105",
                        "group-hover/card:text-black/[0.10]"
                      )}
                    />
                  )}

                  {/* =================================================
                      CONTENT LAYER
                      z-10 keeps all content above the SVG.
                  ================================================== */}
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    {/* =================================================
                        ICON
                    ================================================== */}
                    <div>
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-xs transition-transform duration-300 group-hover/card:scale-105">
                        <Icon
                          className="size-6 text-brand-primary"
                          strokeWidth={2}
                        />
                      </div>
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================== */}
                    <div className="flex flex-1 flex-col justify-center py-6">
                      <h3 className="card-title text-content-primary">
                        {svc.title}
                      </h3>

                      {svc.description && (
                        <p className="mt-3 text-body-small text-content-secondary leading-relaxed">
                          {svc.description}
                        </p>
                      )}
                    </div>

                    {/* =================================================
                        CARD CTA
                    ================================================== */}
                    <div className="flex items-center justify-end pt-2">
                      <span
                        className="
                          inline-flex
                          h-10
                          items-center
                          gap-1.5
                          rounded-full
                          bg-brand-primary
                          px-5
                          text-xs
                          font-semibold
                          text-white
                          shadow-xs
                          transition-all
                          duration-200
                          group-hover/card:bg-brand-primary-hover
                          group-hover/card:shadow-sm
                        "
                      >
                        Explore
                        <ArrowUpRight
                          className="size-4 transition-transform duration-200 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5"
                          strokeWidth={2.2}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
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
