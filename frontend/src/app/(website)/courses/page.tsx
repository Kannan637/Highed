import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import IconBox from "@/components/ui/IconBox";
import CTASection from "@/components/ui/CTASection";
import { constructMetadata } from "@/seo/metadata";

export const metadata = constructMetadata({
  title: "Study Abroad Courses — Engineering, Business, Medicine & More",
  description:
    "Explore popular courses for international students: MBA, MS, Engineering, Medicine, Data Science, and more. HighEd helps you shortlist the best program for your goals and budget.",
  path: "/courses",
  keywords: [
    "study abroad courses",
    "ms in usa courses",
    "mba abroad",
    "engineering courses abroad",
    "data science abroad",
    "medicine abroad",
  ],
});

const courseCategories = [
  {
    title: "Engineering & Technology",
    variant: "primary" as const,
    courses: [
      "Computer Science & AI",
      "Data Science & Analytics",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Civil & Structural Engineering",
      "Cybersecurity",
    ],
    popularIn: ["USA", "Canada", "Germany"],
    slug: "usa",
  },
  {
    title: "Business & Management",
    variant: "accent" as const,
    courses: [
      "MBA",
      "Finance & Accounting",
      "Marketing & Digital Strategy",
      "International Business",
      "Project Management",
      "Supply Chain Management",
    ],
    popularIn: ["UK", "USA", "Dubai"],
    slug: "uk",
  },
  {
    title: "Medicine & Healthcare",
    variant: "success" as const,
    courses: [
      "MBBS / Medicine",
      "Dentistry",
      "Pharmacy",
      "Nursing",
      "Public Health",
      "Biomedical Science",
    ],
    popularIn: ["UK", "Australia", "Canada"],
    slug: "australia",
  },
  {
    title: "Arts, Design & Creative",
    variant: "gold" as const,
    courses: [
      "Graphic Design & UX",
      "Architecture",
      "Film & Media Studies",
      "Fashion Design",
      "Fine Arts",
      "Interior Design",
    ],
    popularIn: ["UK", "USA", "Dubai"],
    slug: "uk",
  },
  {
    title: "Law & Social Sciences",
    variant: "primary" as const,
    courses: [
      "LLM / Law",
      "International Relations",
      "Political Science",
      "Sociology",
      "Psychology",
      "Economics",
    ],
    popularIn: ["UK", "USA", "Australia"],
    slug: "usa",
  },
  {
    title: "Sciences & Research",
    variant: "accent" as const,
    courses: [
      "Biotechnology",
      "Environmental Science",
      "Physics & Mathematics",
      "Chemistry",
      "Robotics",
      "Aerospace Engineering",
    ],
    popularIn: ["Germany", "USA", "Canada"],
    slug: "germany",
  },
];

const variantBgMap = {
  primary: "bg-icon-bg-primary",
  accent: "bg-icon-bg-accent",
  success: "bg-icon-bg-success",
  gold: "bg-icon-bg-gold",
};

export default function CoursesPage() {
  return (
    <div className="bg-surface-neutral py-16 sm:py-24 font-body">
      <Container size="lg">
        <SectionHeading
          badge="Course Explorer"
          title="Find Your Perfect Course Abroad"
          subtitle="Browse popular disciplines and discover the best universities for each program. Our counsellors will match your GPA, budget, and career goals to the right course."
        />

        <div className="grid grid-cols-4 gap-6 lg:grid-cols-12 lg:gap-8">
          {courseCategories.map((cat) => (
            <Card
              key={cat.title}
              className="col-span-4 sm:col-span-2 lg:col-span-4 group flex flex-col overflow-hidden p-0"
            >
              {/* Header */}
              <div className={`p-6 pb-4 ${variantBgMap[cat.variant]}`}>
                <IconBox icon={BookOpen} variant={cat.variant} className="bg-surface-default shadow-card-resting mb-4" />
                <h3 className="text-h5 text-content-primary">{cat.title}</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {cat.popularIn.map((country) => (
                    <span
                      key={country}
                      className="rounded-full bg-white/70 px-2.5 py-0.5 text-caption font-medium text-content-secondary"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>

              {/* Courses List */}
              <div className="flex flex-1 flex-col p-5">
                <ul className="space-y-2">
                  {cat.courses.map((course) => (
                    <li key={course} className="flex items-center gap-2 text-body-small text-content-secondary">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="border-t border-border-default px-5 py-4">
                <Link
                  href={`/study-in/${cat.slug}#courses`}
                  className="inline-flex items-center gap-1.5 text-body-small font-medium text-brand-primary transition-colors hover:text-brand-accent"
                >
                  Explore Universities
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <CTASection
            badge="Personalised Course Matching — 100% Free"
            title="Not Sure Which Course to Pick?"
            subtitle="Tell us your interests, GPA, and career goals. Our counsellors will recommend the best course-country-university combination within 24 hours."
            ctaLabel="Get My Course Recommendation"
            ctaSource="courses_page_cta"
          />
        </div>
      </Container>
    </div>
  );
}
