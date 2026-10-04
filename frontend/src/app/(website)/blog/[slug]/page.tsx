import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site.config";
import { constructMetadata } from "@/seo/metadata";
import {
  getBlogArticleBySlug,
  getAllBlogSlugs,
  getAllBlogArticles,
} from "@/data/blogArticles";
import BlogHero from "@/components/blog/BlogHero";
import BlogQuickActions from "@/components/blog/BlogQuickActions";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested study abroad guide could not be found.",
    };
  }

  return constructMetadata({
    title: `${article.title} | HighEd Insights`,
    description: article.summary,
    path: `/blog/${article.slug}`,
    image: article.heroImage.startsWith("http")
      ? article.heroImage
      : `${siteConfig.url}${article.heroImage}`,
    keywords: article.tags,
  });
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Related articles (excluding current article)
  const relatedArticles = getAllBlogArticles()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  // Form multiple paragraphs of introductory text
  const introParagraphs = [
    article.intro,
    article.summary,
    `Whether you are evaluating entry requirements, post-study work authorization, or long-term residency routes, understanding the exact regulatory benchmarks is essential. Below is HighEd's complete breakdown and verified checklist to guide your decisions.`,
  ];

  // Article JSON-LD Schema
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.summary,
    image: `${siteConfig.url}${article.heroImage}`,
    datePublished: article.publishedDate,
    dateModified: article.lastUpdated,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logos/Highed Logo/Highed.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${article.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides & Insights",
        item: `${siteConfig.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${siteConfig.url}/blog/${article.slug}`,
      },
    ],
  };

  return (
    <div className="w-full">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb Bar */}
      <div className="w-full border-b border-border bg-surface-neutral/40 py-2.5">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-xs text-muted-foreground flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-brand-primary transition-colors">
            Home
          </Link>
          <span className="text-border">/</span>
          <Link href="/blog" className="hover:text-brand-primary transition-colors">
            Guides &amp; Insights
          </Link>
          <span className="text-border">/</span>
          <span className="text-foreground font-medium truncate max-w-[280px] sm:max-w-md">
            {article.title}
          </span>
        </div>
      </div>

      {/* =========================================================
          1. HERO SECTION: Full-Width 2-Column Split Layout
          ========================================================= */}
      <BlogHero
        title={article.title}
        category={article.category}
        readingTime={article.readingTime}
        publishedDate={article.publishedDate}
        lastUpdated={article.lastUpdated}
        author={article.author}
        heroImage={article.heroImage}
      />

      {/* =========================================================
          4. CONTENT SECTION BELOW HERO: Centered 12-Grid Container
          ========================================================= */}
      <div className="w-full bg-background min-h-screen">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start">
            {/* 5. LEFT ARTICLE SIDEBAR: 4 Columns in 12-Grid Structure */}
            <div className="col-span-12 lg:col-span-4">
              <BlogQuickActions
                items={article.quickActions}
                articleTitle={article.title}
              />
            </div>

            {/* 6. MAIN ARTICLE CONTENT: 8 Columns in 12-Grid Structure */}
            <article
              id="blog-article-content"
              className="col-span-12 lg:col-span-8 font-body text-foreground"
            >
              {/* Answer-First / Key Takeaways Box (improve.md Phase 27 & 43) */}
              {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                <div className="mb-8 rounded-2xl border border-brand-primary/20 bg-brand-primary/[0.03] p-5 sm:p-6 max-w-[680px] xl:max-w-[720px]">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex size-2 rounded-full bg-brand-primary" />
                    <h3 className="text-sm sm:text-base font-bold text-foreground m-0 uppercase tracking-wider">
                      Key Takeaways &amp; Summary
                    </h3>
                  </div>
                  <ul className="space-y-2 m-0 pl-5 list-disc text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
                    {article.keyTakeaways.map((point, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Introductory Paragraphs (Constrained to readable line length) */}
              <div className="max-w-[680px] xl:max-w-[720px] space-y-5 text-base sm:text-[17px] leading-[1.75] text-muted-foreground">
                <p className="m-0 font-medium text-foreground/90">
                  {article.intro}
                </p>
                {article.summary && article.summary !== article.intro && (
                  <p className="m-0">
                    {article.summary}
                  </p>
                )}
              </div>

              {/* Primary Call-to-Action Button Aligned with Article Content */}
              <div className="my-8 sm:my-10">
                <LeadCTAButton
                  source={`Blog Intro CTA: ${article.title}`}
                  variant="primary"
                  size="lg"
                  className="rounded-full px-8 py-3.5 shadow-xs"
                >
                  Speak with a Study Abroad Advisor
                </LeadCTAButton>
              </div>

              {/* Structured Article Sections */}
              <div className="space-y-12 sm:space-y-14 border-t border-border pt-10 sm:pt-12">
                {article.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24 sm:scroll-mt-28 space-y-4 max-w-[680px] xl:max-w-[720px]"
                  >
                    {/* Section Heading (H2 hierarchy) */}
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground m-0 leading-snug">
                      {section.sectionNumber
                        ? `${section.sectionNumber}. `
                        : ""}
                      {section.title}
                    </h2>


                    {/* Section Intro or Paragraphs */}
                    {section.intro && (
                      <p className="text-sm sm:text-base leading-relaxed text-muted-foreground m-0">
                        {section.intro}
                      </p>
                    )}

                    {section.paragraphs?.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-sm sm:text-base leading-relaxed text-muted-foreground m-0"
                      >
                        {p}
                      </p>
                    ))}

                    {/* Bullet Points */}
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="list-disc pl-5 space-y-2.5 text-sm sm:text-base leading-relaxed text-muted-foreground marker:text-muted-foreground/60 m-0">
                        {section.bullets.map((b, bIdx) => (
                          <li key={bIdx}>
                            {b.strong && (
                              <strong className="font-semibold text-foreground">
                                {b.strong}{" "}
                              </strong>
                            )}
                            <span>{b.text}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Comparison Table */}
                    {section.table && (
                      <div className="mt-4 overflow-x-auto rounded-xl border border-border bg-card shadow-2xs">
                        <table className="w-full text-left text-xs sm:text-sm text-muted-foreground border-collapse">
                          <thead className="bg-surface-neutral/60 text-foreground font-semibold text-xs border-b border-border">
                            <tr>
                              {section.table.headers.map((h, hIdx) => (
                                <th
                                  key={hIdx}
                                  className="px-4 py-3 whitespace-nowrap"
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border">
                            {section.table.rows.map((row, rIdx) => (
                              <tr
                                key={rIdx}
                                className="hover:bg-surface-neutral/40 transition-colors"
                              >
                                {row.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    className={`px-4 py-3 ${
                                      cIdx === 0
                                        ? "font-medium text-foreground"
                                        : ""
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Callout Advisory Card */}
                    {section.callout && (
                      <div className="mt-4 rounded-xl border border-border bg-surface-neutral/40 p-5 sm:p-6 text-sm leading-relaxed text-muted-foreground">
                        {section.callout.badge && (
                          <span className="inline-block rounded-full bg-brand-primary/10 text-brand-primary px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider mb-2">
                            {section.callout.badge}
                          </span>
                        )}
                        <h4 className="font-semibold text-sm sm:text-base text-foreground m-0">
                          {section.callout.title}
                        </h4>
                        <p className="mt-1.5 text-muted-foreground m-0 leading-relaxed">
                          {section.callout.content}
                        </p>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Consultation Advisory Box */}
              <div className="mt-14 max-w-[680px] xl:max-w-[720px] rounded-2xl border border-border bg-surface-neutral/40 p-6 sm:p-8 text-sm leading-relaxed text-muted-foreground">
                <h4 className="font-bold text-base sm:text-lg text-foreground m-0">
                  Speak with a HighEd Senior Education &amp; Visa Advisor
                </h4>
                <p className="mt-2 text-muted-foreground leading-relaxed m-0">
                  Have questions about your eligibility, required documents, or application strategy for studying in{" "}
                  <strong className="text-foreground font-semibold">
                    {article.countryName}
                  </strong>
                  ? Our counsellors provide 1-on-1 profile evaluations with zero consultancy fees.
                </p>

                <div className="mt-4 text-xs sm:text-sm text-muted-foreground space-y-1">
                  <p className="m-0">Address: {siteConfig.contact.address}</p>
                  <p className="m-0">
                    Email:{" "}
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-brand-primary font-medium hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <LeadCTAButton
                    source={`Blog End: ${article.title}`}
                    variant="primary"
                    size="md"
                    className="rounded-full px-6"
                  >
                    Book Free Counselling Session
                  </LeadCTAButton>
                  <Link
                    href={`/study-in/${article.countrySlug}`}
                    className="btn-motion inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-surface-neutral transition-colors"
                  >
                    <span>Explore Study in {article.countryName}</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>

              {/* Related Articles Section */}
              <div className="mt-14 max-w-[680px] xl:max-w-[720px] pt-8 border-t border-border">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-lg font-bold text-foreground m-0">
                      Related Articles &amp; Insights
                    </h4>
                    <p className="text-xs text-muted-foreground m-0 mt-0.5">
                      Explore more verified guides for your study abroad journey
                    </p>
                  </div>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-primary hover:underline"
                  >
                    <span>View all</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedArticles.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group flex flex-col justify-between rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:border-brand-primary/40 hover:shadow-xs"
                    >
                      <div className="space-y-2">
                        <span className="inline-block rounded-md bg-brand-primary/10 px-2 py-0.5 text-[11px] font-semibold text-brand-primary">
                          {rel.category}
                        </span>
                        <h4 className="text-xs sm:text-[13.5px] font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-brand-primary transition-colors m-0">
                          {rel.title}
                        </h4>
                      </div>

                      <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground pt-2 border-t border-border">
                        <span>{rel.readingTime}</span>
                        <span className="font-semibold text-brand-primary flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                          Read <ArrowRight className="size-2.5" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
