import React from "react";
import { constructMetadata } from "@/seo/metadata";

import BlogContent, { type BlogArticle } from "./BlogContent";

export const metadata = constructMetadata({
  title: "Study Abroad Blog & Insights",
  description:
    "Expert articles on overseas education, student visas, scholarships, admission deadlines, and university rankings.",
  path: "/blog",
  keywords: ["study abroad blog", "overseas education articles", "student visa guides"],
});

const articles: BlogArticle[] = [
  {
    title: "USA STEM OPT 3-Year Extension: Complete 2026 Roadmap",
    slug: "usa-stem-opt-guide",
    category: "Visas & Immigration",
    readingTime: "6 min read",
    description:
      "Learn how STEM degree graduates from US universities can extend their work authorization to 36 months under the F-1 OPT regulations.",
    image: "/images/blog/USA STEM OPT 3Year Extension Complete 2026 Roadmap.webp",
    href: "/study-in/usa",
  },
  {
    title: "Tuition-Free Universities in Germany: Admission Requirements",
    slug: "germany-tuition-free-universities",
    category: "Scholarships & Costs",
    readingTime: "5 min read",
    description:
      "Discover how international students can study bachelor's and master's programs at public German universities paying zero tuition fees.",
    image: "/images/blog/Tuition Free Universities in Germany Admission Requirements.webp",
    href: "/study-in/germany",
  },
  {
    title: "Canada PGWP Rules: What International Students Need to Know",
    slug: "canada-pgwp-rules",
    category: "Visas & Immigration",
    readingTime: "7 min read",
    description:
      "A comprehensive breakdown of post-graduation work permit criteria, eligible designated learning institutions, and express entry points.",
    image: "/images/blog/Canada PGWP Rules What International Students Need to Know.webp",
    href: "/study-in/canada",
  },
  {
    title: "UK Graduate Route: 2-Year Post-Study Work Visa Explained",
    slug: "uk-graduate-route-visa",
    category: "Visas & Immigration",
    readingTime: "5 min read",
    description:
      "Everything you need to know about working in the UK after graduating from top Russell Group and partner institutions.",
    image: "/images/blog/UK Graduate Route 2Year Post Study Work Visa Explained.webp",
    href: "/study-in/uk",
  },
  {
    title: "Dubai Student Visa & Golden Visa: Fast-Track Pathways",
    slug: "dubai-student-visa-guide",
    category: "Destination Guides",
    readingTime: "4 min read",
    description:
      "Explore the 100% tax-free income potential and premier international branch campuses in Dubai's Academic City and Knowledge Park.",
    image: "/images/blog/Dubai Student Visa & Golden Visa Fast-Track Pathways.webp",
    href: "/study-in/dubai",
  },
  {
    title: "Australia Subclass 500 Visa: Financial Requirements & Health Insurance",
    slug: "australia-subclass-500-visa",
    category: "Visa Documentation",
    readingTime: "6 min read",
    description:
      "Step-by-step checklist of Genuine Student requirements, OSHC health cover, and bank proof required for Australian student visas.",
    image: "/images/blog/Australia Subclass 500 Visa Financial Requirements & Health Insurance.webp",
    href: "/study-in/australia",
  },
];

export default function BlogPage() {
  return (
    <div className="w-full tracking-[-0.04em] [letter-spacing:-0.04em]">
      <BlogContent articles={articles} />
    </div>
  );
}

