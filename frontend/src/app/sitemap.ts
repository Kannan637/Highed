import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { getAllCountrySlugs } from "@/data/countries";
import { getAllBlogArticles } from "@/data/blogArticles";

// Stable revision date for baseline site content
const STATIC_PAGE_DATE = new Date("2026-10-01T00:00:00.000Z");

const CANONICAL_SERVICES = [
  "career-counselling",
  "university-application",
  "scholarship-assistance",
  "sop-lor-assistance",
  "visa-assistance",
  "education-loan",
  "accommodation-pre-departure",
];

const CANONICAL_TOOLS = [
  "study-abroad-cost",
  "education-loan-emi",
  "profile-checker",
  "test-score-evaluator",
];


export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const countrySlugs = getAllCountrySlugs();
  const blogArticles = getAllBlogArticles();

  // Country Pillar Pages
  const countryUrls: MetadataRoute.Sitemap = countrySlugs.map((slug) => ({
    url: `${baseUrl}/study-in/${slug}`,
    lastModified: STATIC_PAGE_DATE,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Service Detail Pages
  const serviceUrls: MetadataRoute.Sitemap = CANONICAL_SERVICES.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: STATIC_PAGE_DATE,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Tool & Calculator Pages
  const toolUrls: MetadataRoute.Sitemap = CANONICAL_TOOLS.map((slug) => ({
    url: `${baseUrl}/tools/${slug}`,
    lastModified: STATIC_PAGE_DATE,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Blog Articles (uses individual article lastUpdated date)
  const blogUrls: MetadataRoute.Sitemap = blogArticles.map((article) => {
    const lastMod = new Date(article.lastUpdated || article.publishedDate);
    return {
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: isNaN(lastMod.getTime()) ? STATIC_PAGE_DATE : lastMod,
      changeFrequency: "monthly",
      priority: 0.75,
    };
  });

  // Core Static Pages
  const coreUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/study-in`,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/scholarships`,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/success-stories`,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/our-story`,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/book-counselling`,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [
    ...coreUrls,
    ...countryUrls,
    ...serviceUrls,
    ...toolUrls,
    ...blogUrls,
  ];
}

