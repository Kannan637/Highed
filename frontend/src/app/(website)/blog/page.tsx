import React from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { constructMetadata } from "@/seo/metadata";

export const metadata = constructMetadata({
  title: "Study Abroad Blog & Insights",
  description:
    "Expert articles on overseas education, student visas, scholarships, admission deadlines, and university rankings.",
  path: "/blog",
  keywords: ["study abroad blog", "overseas education articles", "student visa guides"],
});

const articles = [
  {
    title: "USA STEM OPT 3-Year Extension: Complete 2026 Roadmap",
    slug: "usa-stem-opt-guide",
    category: "Visas & Immigration",
    readTime: "6 min read",
    date: "Sep 2026",
    summary:
      "Learn how STEM degree graduates from US universities can extend their work authorization to 36 months under the F-1 OPT regulations.",
    href: "/study-in/usa",
  },
  {
    title: "Tuition-Free Universities in Germany: Admission Requirements",
    slug: "germany-tuition-free-universities",
    category: "Scholarships & Costs",
    readTime: "5 min read",
    date: "Aug 2026",
    summary:
      "Discover how international students can study bachelor's and master's programs at public German universities paying zero tuition fees.",
    href: "/study-in/germany",
  },
  {
    title: "Canada PGWP Rules: What International Students Need to Know",
    slug: "canada-pgwp-rules",
    category: "Visas & PR",
    readTime: "7 min read",
    date: "Aug 2026",
    summary:
      "A comprehensive breakdown of post-graduation work permit criteria, eligible designated learning institutions, and express entry points.",
    href: "/study-in/canada",
  },
  {
    title: "UK Graduate Route: 2-Year Post-Study Work Visa Explained",
    slug: "uk-graduate-route-visa",
    category: "Career & Visas",
    readTime: "5 min read",
    date: "Jul 2026",
    summary:
      "Everything you need to know about working in the UK after graduating from top Russell Group and partner institutions.",
    href: "/study-in/uk",
  },
  {
    title: "Dubai Student Visa & Golden Visa: Fast-Track Pathways",
    slug: "dubai-student-visa-guide",
    category: "Destination Guides",
    readTime: "4 min read",
    date: "Jul 2026",
    summary:
      "Explore the 100% tax-free income potential and premier international branch campuses in Dubai's Academic City and Knowledge Park.",
    href: "/study-in/dubai",
  },
  {
    title: "Australia Subclass 500 Visa: Financial Requirements & Health Insurance",
    slug: "australia-subclass-500-visa",
    category: "Visa Documentation",
    readTime: "6 min read",
    date: "Jun 2026",
    summary:
      "Step-by-step checklist of Genuine Student requirements, OSHC health cover, and bank proof required for Australian student visas.",
    href: "/study-in/australia",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#FAFAFC] py-16 sm:py-24 font-dmsans">
      <Container size="lg">
        <SectionHeading
          badge="Insights & Advice"
          title="Study Abroad Guides & News"
          subtitle="Stay informed with expert breakdowns of immigration policies, scholarship criteria, and global campus life."
        />

        <div className="mt-12 grid grid-cols-4 gap-6 lg:grid-cols-12 lg:gap-8">
          {articles.map((article) => (
            <div
              key={article.slug}
              className="col-span-4 sm:col-span-2 lg:col-span-4 group flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-7 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#253A7B]/20 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="rounded-full bg-[#EEF1FA] px-3 py-1 font-semibold text-[#253A7B]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="mt-5 font-hedvig text-xl font-bold leading-snug text-[#121314] transition-colors group-hover:text-[#253A7B]">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-4">
                <Link
                  href={article.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#253A7B] transition-colors group-hover:text-[#E93F61]"
                >
                  <span>Explore Destination Guide</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Lead Generation Callout */}
        <div className="mt-16 rounded-3xl bg-[#EEF1FA] p-8 text-center sm:p-12">
          <h3 className="font-hedvig text-2xl font-bold text-[#253A7B] sm:text-3xl">
            Have Questions About Admission Deadlines or Visas?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-600 sm:text-base">
            Skip the guesswork. Speak directly with a dedicated country specialist advisor today.
          </p>
          <div className="mt-6">
            <LeadCTAButton
              source="blog_cta"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#E93F61] px-8 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#D93657] active:scale-[0.98] cursor-pointer"
            >
              <span>Get Free Expert Guidance</span>
              <ArrowRight size={16} />
            </LeadCTAButton>
          </div>
        </div>
      </Container>
    </div>
  );
}
