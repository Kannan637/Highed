import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
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
    color: "#EEF1FA",
    iconColor: "#253A7B",
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
    color: "#FDF0F3",
    iconColor: "#E93F61",
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
    color: "#EBF5EE",
    iconColor: "#1E7B47",
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
    color: "#FEF9EC",
    iconColor: "#B38728",
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
    color: "#EEF1FA",
    iconColor: "#253A7B",
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
    color: "#FDF0F3",
    iconColor: "#E93F61",
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

export default function CoursesPage() {
  return (
    <div className="bg-[#FAFAFC] py-16 sm:py-24 font-dmsans">
      <Container size="lg">
        <SectionHeading
          badge="Course Explorer"
          title="Find Your Perfect Course Abroad"
          subtitle="Browse popular disciplines and discover the best universities for each program. Our counsellors will match your GPA, budget, and career goals to the right course."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {courseCategories.map((cat) => (
            <div
              key={cat.title}
              className="group flex flex-col rounded-3xl border border-gray-100 bg-white shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#253A7B]/20 hover:shadow-lg overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 pb-4" style={{ backgroundColor: cat.color }}>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-xs mb-4">
                  <BookOpen size={20} style={{ color: cat.iconColor }} />
                </div>
                <h3 className="font-hedvig text-xl font-bold text-[#121314]">{cat.title}</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {cat.popularIn.map((country) => (
                    <span
                      key={country}
                      className="rounded-full bg-white/70 px-2.5 py-0.5 font-dmsans text-[11px] font-semibold text-gray-600"
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
                    <li key={course} className="flex items-center gap-2 font-dmsans text-sm text-gray-700">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E93F61]" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-100 px-5 py-4">
                <Link
                  href={`/study-in/${cat.slug}#courses`}
                  className="inline-flex items-center gap-1.5 font-dmsans text-sm font-semibold text-[#253A7B] transition-colors hover:text-[#E93F61]"
                >
                  Explore Universities
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center gap-5 rounded-3xl bg-[linear-gradient(135deg,#253A7B,#142456)] px-8 py-14 text-center text-white sm:px-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 font-dmsans text-xs font-semibold tracking-wide text-white backdrop-blur-xs">
            <ShieldCheck size={14} className="text-[#E93F61]" />
            Personalised Course Matching — 100% Free
          </span>
          <h2 className="font-hedvig text-3xl font-bold tracking-tight sm:text-4xl">
            Not Sure Which Course to Pick?
          </h2>
          <p className="max-w-xl font-dmsans text-base text-white/85">
            Tell us your interests, GPA, and career goals. Our counsellors will recommend the best course-country-university combination within 24 hours.
          </p>
          <LeadCTAButton
            source="courses_page_cta"
            contextTitle="Get My Course Recommendation"
            contextCTA="Get My Recommendation"
            className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#E93F61] px-8 font-dmsans text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#d93657] active:scale-[0.98] cursor-pointer"
          >
            <span>Get My Course Recommendation</span>
            <ArrowRight size={18} />
          </LeadCTAButton>
        </div>
      </Container>
    </div>
  );
}
