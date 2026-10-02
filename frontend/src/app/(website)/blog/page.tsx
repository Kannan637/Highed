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
    date: "September 2026",
    country: "United States",
    description:
      "Learn how STEM degree graduates from US universities can extend their work authorization to 36 months under the F-1 OPT regulations.",
    image: "/images/blog/USA STEM OPT 3Year Extension Complete 2026 Roadmap.webp",
    href: "/study-in/usa",
    highlights: ["36-Month OPT Extension", "F-1 Student Visa", "STEM Degree Mapping"],
  },
  {
    title: "Tuition-Free Universities in Germany: Admission Requirements",
    slug: "germany-tuition-free-universities",
    category: "Scholarships & Costs",
    readingTime: "5 min read",
    date: "August 2026",
    country: "Germany",
    description:
      "Discover how international students can study bachelor's and master's programs at public German universities paying zero tuition fees.",
    image: "/images/blog/Tuition Free Universities in Germany Admission Requirements.webp",
    href: "/study-in/germany",
    highlights: ["Zero-Tuition Public Unis", "APS Verification Guide", "English Master's Degrees"],
  },
  {
    title: "Canada PGWP Rules: What International Students Need to Know",
    slug: "canada-pgwp-rules",
    category: "Visas & Immigration",
    readingTime: "7 min read",
    date: "August 2026",
    country: "Canada",
    description:
      "A comprehensive breakdown of post-graduation work permit criteria, eligible designated learning institutions, and express entry points.",
    image: "/images/blog/Canada PGWP Rules What International Students Need to Know.webp",
    href: "/study-in/canada",
    highlights: ["Post-Grad Work Permit", "Eligible DLI List", "Express Entry Points"],
  },
  {
    title: "UK Graduate Route: 2-Year Post-Study Work Visa Explained",
    slug: "uk-graduate-route-visa",
    category: "Visas & Immigration",
    readingTime: "5 min read",
    date: "July 2026",
    country: "United Kingdom",
    description:
      "Everything you need to know about working in the UK after graduating from top Russell Group and partner institutions.",
    image: "/images/blog/UK Graduate Route 2Year Post Study Work Visa Explained.webp",
    href: "/study-in/uk",
    highlights: ["2-Year Post-Study Visa", "Russell Group Unis", "No Sponsor Needed"],
  },
  {
    title: "Dubai Student Visa & Golden Visa: Fast-Track Pathways",
    slug: "dubai-student-visa-guide",
    category: "Destination Guides",
    readingTime: "4 min read",
    date: "July 2026",
    country: "United Arab Emirates",
    description:
      "Explore the 100% tax-free income potential and premier international branch campuses in Dubai's Academic City and Knowledge Park.",
    image: "/images/blog/Dubai Student Visa & Golden Visa Fast-Track Pathways.webp",
    href: "/study-in/dubai",
    highlights: ["100% Tax-Free Earnings", "Fast-Track Golden Visa", "Academic City Campuses"],
  },
  {
    title: "Australia Subclass 500 Visa: Financial Requirements & Health Insurance",
    slug: "australia-subclass-500-visa",
    category: "Visa Documentation",
    readingTime: "6 min read",
    date: "June 2026",
    country: "Australia",
    description:
      "Step-by-step checklist of Genuine Student requirements, OSHC health cover, and bank proof required for Australian student visas.",
    image: "/images/blog/Australia Subclass 500 Visa Financial Requirements & Health Insurance.webp",
    href: "/study-in/australia",
    highlights: ["Genuine Student Test", "OSHC Health Cover", "Proof of Funds Guide"],
  },
];

export default function BlogPage() {
  return (
    <div className="w-full tracking-[-0.04em] [letter-spacing:-0.04em]">
      <BlogContent articles={articles} />
    </div>
  );
}

