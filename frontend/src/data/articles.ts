export interface Article {
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  href: string;
  countrySlug?: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    title: "USA STEM OPT 3-Year Extension: Complete 2026 Roadmap",
    slug: "usa-stem-opt-guide",
    category: "Visas & Immigration",
    readTime: "6 min read",
    date: "Sep 2026",
    summary:
      "Learn how STEM degree graduates from US universities can extend their work authorization to 36 months under the F-1 OPT regulations.",
    href: "/study-in/usa",
    countrySlug: "usa",
    tags: ["visa", "usa", "career", "stem"],
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
    countrySlug: "germany",
    tags: ["scholarships", "germany", "cost", "admissions"],
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
    countrySlug: "canada",
    tags: ["visa", "canada", "career", "immigration"],
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
    countrySlug: "uk",
    tags: ["visa", "uk", "career"],
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
    countrySlug: "dubai",
    tags: ["visa", "dubai", "destination", "cost"],
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
    countrySlug: "australia",
    tags: ["visa", "australia", "documentation"],
  },
];

export function getArticlesByCountry(countrySlug: string): Article[] {
  return articles.filter(
    (a) =>
      a.countrySlug === countrySlug ||
      a.tags.includes(countrySlug)
  );
}

export function getRelatedArticles(countrySlug: string, limit: number = 4): Article[] {
  // Prioritize country-specific articles, then fill with general ones
  const countryArticles = articles.filter((a) => a.countrySlug === countrySlug);
  const otherArticles = articles.filter((a) => a.countrySlug !== countrySlug);
  return [...countryArticles, ...otherArticles].slice(0, limit);
}
