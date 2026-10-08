import React from "react";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { ArrowRight, Clock } from "lucide-react";

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

import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* =========================================================
   DESIGN TOKENS
========================================================= */

const CONTAINER =
  "mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8";

const BUTTON =
  "h-12 min-h-12 rounded-full px-5 text-[13px] font-semibold";

const CARD =
  "rounded-[24px] border border-black/[0.08]";

const BODY =
  "text-[12px] leading-[1.8] text-[#666] sm:text-[13px]";

const ARTICLE_WIDTH =
  "max-w-[720px]";

/* =========================================================
   STATIC PARAMS
========================================================= */

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = getBlogArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description:
        "The requested study abroad guide could not be found.",
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

/* =========================================================
   PAGE
========================================================= */

export default async function BlogPostPage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const article = getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  /* =======================================================
     RELATED ARTICLES
  ======================================================= */

  const relatedArticles = getAllBlogArticles()
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  /* =======================================================
     ARTICLE JSON-LD
  ======================================================= */

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

  /* =======================================================
     BREADCRUMB JSON-LD
  ======================================================= */

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
    <main className="w-full bg-white text-[#121314]">

      {/* =====================================================
          JSON-LD
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* =====================================================
          BREADCRUMB
      ===================================================== */}



      {/* =====================================================
          HERO
      ===================================================== */}
      <BlogHero
        title={article.title}
        category={article.category}
        readingTime={article.readingTime}
        publishedDate={article.publishedDate}
        lastUpdated={article.lastUpdated}
        author={article.author}
        heroImage={article.heroImage}
      />

      {/* =====================================================
          ARTICLE CONTENT
          
          24 COLUMN SYSTEM

          01–02  → outer breathing room
          03–06  → Quick Actions
          07–08  → gutter
          09–24  → Article
      ===================================================== */}

      <section className="w-full bg-white">
        <div
          className={cn(
            CONTAINER,
            "py-10 sm:py-12 lg:py-16"
          )}
        >

          <div className="grid grid-cols-1 items-start gap-y-10 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-12">

            {/* =================================================
                QUICK ACTIONS (Sticky Sidebar on Desktop)
            ================================================= */}

            <aside className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
              <BlogQuickActions
                items={article.quickActions}
                articleTitle={article.title}
              />
            </aside>

            {/* =================================================
                MAIN ARTICLE
            ================================================= */}

            <article
              id="blog-article-content"
              className="min-w-0 col-span-1 lg:col-span-8 font-body"
            >

              <div className="w-full">

                {/* =================================================
                    KEY TAKEAWAYS
                ================================================= */}

                {article.keyTakeaways &&
                  article.keyTakeaways.length > 0 && (
                    <div
                      id="key-takeaways"
                      className={cn(
                        CARD,
                        "mb-8 scroll-mt-24 bg-[#F5F5F9] p-5 sm:p-6"
                      )}
                    >
                      <div className="mb-3 flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-[#E93F61]" />

                        <h4
                          className="
                            m-0
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.12em]
                            text-[#253A7B]
                          "
                        >
                          Key Takeaways
                        </h4>
                      </div>

                      <ul
                        className="
                          m-0
                          space-y-1.5
                          pl-4
                          text-[11px]
                          leading-[1.7]
                          text-[#666]
                          marker:text-[#999]
                          sm:text-[12px]
                        "
                      >
                        {article.keyTakeaways.map(
                          (point, index) => (
                            <li key={index}>
                              {point}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                {/* =================================================
                    INTRODUCTION
                ================================================= */}

                <div className="max-w-[680px]">

                  <p
                    className="
                      m-0
                      text-[14px]
                      font-medium
                      leading-[1.75]
                      tracking-[-0.01em]
                      text-[#252525]
                      sm:text-[15px]
                    "
                  >
                    {article.intro}
                  </p>

                  {article.summary &&
                    article.summary !== article.intro && (
                      <p
                        className="
                          m-0
                          mt-4
                          text-[12px]
                          leading-[1.8]
                          text-[#666]
                          sm:text-[13px]
                        "
                      >
                        {article.summary}
                      </p>
                    )}

                </div>

                {/* =================================================
                    INTRO CTA
                ================================================= */}

                <div className="my-8">
                  <LeadCTAButton
                    source={`Blog Intro CTA: ${article.title}`}
                    variant="accent"
                    size="default"
                    forcePopup={true}
                    className={cn(
                      BUTTON,
                      "bg-[#E93F61] text-white"
                    )}
                  >
                    Speak with a Study Abroad Advisor
                  </LeadCTAButton>
                </div>

                {/* =================================================
                    ARTICLE SECTIONS
                ================================================= */}

                <div className="border-t border-black/[0.08] pt-8">

                  <div className="space-y-10 sm:space-y-12">

                    {article.sections.map((section) => (
                      <section
                        key={section.id}
                        id={section.id}
                        className="
                          max-w-[680px]
                          scroll-mt-24
                        "
                      >

                        {/* SECTION TITLE */}

                        <h4
                          className="
                            m-0
                            text-[18px]
                            font-bold
                            leading-[1.3]
                            tracking-[-0.02em]
                            text-[#253A7B]
                            sm:text-[20px]
                          "
                        >
                          {section.sectionNumber
                            ? `${section.sectionNumber}. `
                            : ""}
                          {section.title}
                        </h4>

                        {/* SECTION INTRO */}

                        {section.intro && (
                          <p
                            className={cn(
                              BODY,
                              "mt-3"
                            )}
                          >
                            {section.intro}
                          </p>
                        )}

                        {/* PARAGRAPHS */}

                        {section.paragraphs && section.paragraphs.length > 0 && (
                          <div className="mt-4 space-y-4">
                            {section.paragraphs.map(
                              (paragraph, index) => (
                                <p
                                  key={index}
                                  className={cn(
                                    BODY,
                                    "m-0"
                                  )}
                                >
                                  {paragraph}
                                </p>
                              )
                            )}
                          </div>
                        )}

                        {/* BULLETS */}

                        {section.bullets && section.bullets.length > 0 && (
                          <ul
                            className="
                              mt-5
                              space-y-2
                              pl-5
                              text-[12px]
                              leading-[1.75]
                              text-[#555]
                              marker:text-[#253A7B]
                              sm:text-[13px]
                            "
                          >
                            {section.bullets.map(
                              (bullet, index) => (
                                <li key={index}>
                                  {bullet.strong && (
                                    <strong className="font-semibold text-[#252525]">
                                      {bullet.strong}{" "}
                                    </strong>
                                  )}

                                  {bullet.text}
                                </li>
                              )
                            )}
                          </ul>
                        )}

                        {/* TABLE */}

                        {section.table && (
                          <div
                            className="
                              mt-6
                              overflow-hidden
                              rounded-[16px]
                              border
                              border-black/[0.08]
                            "
                          >
                            <div className="overflow-x-auto">
                              <table className="w-full min-w-[600px] border-collapse text-left text-[11px] sm:text-[12px]">
                                <thead>
                                  <tr className="bg-[#F5F5F9]">
                                    {section.table.headers.map(
                                      (header, index) => (
                                        <th
                                          key={index}
                                          className="
                                            border-b
                                            border-black/[0.08]
                                            px-4
                                            py-3
                                            font-semibold
                                            text-[#253A7B]
                                          "
                                        >
                                          {header}
                                        </th>
                                      )
                                    )}
                                  </tr>
                                </thead>

                                <tbody>
                                  {section.table.rows.map(
                                    (row, rowIndex) => (
                                      <tr
                                        key={rowIndex}
                                        className="border-b border-black/[0.06] last:border-b-0"
                                      >
                                        {row.map(
                                          (
                                            cell,
                                            cellIndex
                                          ) => (
                                            <td
                                              key={cellIndex}
                                              className="
                                                px-4
                                                py-3
                                                align-top
                                                leading-[1.7]
                                                text-[#666]
                                              "
                                            >
                                              {cell}
                                            </td>
                                          )
                                        )}
                                      </tr>
                                    )
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {/* CALLOUT */}

                        {section.callout && (
                          <div
                            className="
                              mt-6
                              rounded-[20px]
                              border
                              border-[#253A7B]/10
                              bg-[#F5F5F9]
                              p-5
                            "
                          >
                            {section.callout.badge && (
                              <span
                                className="
                                  inline-flex
                                  rounded-full
                                  bg-[#253A7B]/10
                                  px-3
                                  py-1
                                  text-[9px]
                                  font-bold
                                  uppercase
                                  tracking-[0.1em]
                                  text-[#253A7B]
                                "
                              >
                                {section.callout.badge}
                              </span>
                            )}

                            {section.callout.title && (
                              <h4
                                className="
                                  mt-3
                                  m-0
                                  text-[14px]
                                  font-bold
                                  leading-[1.4]
                                  text-[#253A7B]
                                "
                              >
                                {section.callout.title}
                              </h4>
                            )}

                            {section.callout.content && (
                              <p
                                className="
                                  m-0
                                  mt-2
                                  text-[12px]
                                  leading-[1.8]
                                  text-[#666]
                                "
                              >
                                {section.callout.content}
                              </p>
                            )}
                          </div>
                        )}

                      </section>
                    ))}

                  </div>
                </div>

                {/* =================================================
                    FINAL CONSULTATION CTA
                ================================================= */}

                <div
                  className="
                    mt-12
                    rounded-[24px]
                    border
                    border-black/[0.08]
                    bg-[#F5F5F9]
                    p-5
                    sm:p-6
                  "
                >

                  <span
                    className="
                      inline-flex
                      rounded-full
                      bg-[#253A7B]/10
                      px-3
                      py-1
                      text-[9px]
                      font-bold
                      w-fit
                      uppercase
                      tracking-[0.1em]
                      text-[#253A7B]
                    "
                  >
                    Talk to an expert
                  </span>

                  <h4
                    className="
                      mt-3
                      m-0
                      text-[17px]
                      font-bold
                      leading-[1.35]
                      tracking-[-0.015em]
                      text-[#253A7B]
                    "
                  >
                    Speak with a HighEd Senior Education &amp; Visa Advisor
                  </h4>

                  <p
                    className="
                      mt-2
                      m-0
                      text-[12px]
                      leading-[1.8]
                      text-[#666]
                      sm:text-[13px]
                    "
                  >
                    Have questions about your eligibility,
                    required documents, or application strategy
                    for studying in{" "}
                    <strong className="font-semibold text-[#252525]">
                      {article.countryName}
                    </strong>
                    ? Our counsellors provide 1-on-1 profile
                    evaluations with zero consultancy fees.
                  </p>

                  <div className="mt-4 space-y-1 text-[11px] text-[#777]">
                    <p className="m-0">
                      Address: {siteConfig.contact.address}
                    </p>

                    <p className="m-0">
                      Email:{" "}
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="font-medium text-[#253A7B] hover:underline"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

                    <LeadCTAButton
                      source={`Blog End: ${article.title}`}
                      variant="accent"
                      size="default"
                      forcePopup={true}
                      className={cn(
                        BUTTON,
                        "w-full bg-[#E93F61] text-white sm:w-fit"
                      )}
                    >
                      Book Free Counselling Session
                    </LeadCTAButton>

                    <Link
                      href={`/study-in/${article.countrySlug}`}
                      className={cn(
                        buttonVariants({
                          variant: "outline",
                          size: "default",
                        }),
                        BUTTON,
                        "group/btn w-full gap-2 border-black/10 bg-white text-[#253A7B] hover:border-[#253A7B] hover:bg-[#253A7B]/5 sm:w-fit"
                      )}
                    >
                      <span>
                        Explore Study in{" "}
                        {article.countryName}
                      </span>

                      <ArrowRight
                        className="size-4 text-[#253A7B]"
                        strokeWidth={1.8}
                      />
                    </Link>

                  </div>
                </div>

                {/* =================================================
                    RELATED ARTICLES
                ================================================= */}

                <div className="mt-14 border-t border-black/[0.08] pt-10">
                  <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-accent mb-1.5">
                        <span>Continue Reading</span>
                      </div>
                      <h3 className="m-0 text-lg sm:text-xl font-bold text-brand-primary">
                        Related Articles &amp; Insights
                      </h3>
                      <p className="m-0 mt-1 text-xs text-content-secondary">
                        Explore more verified guides for your study abroad journey.
                      </p>
                    </div>

                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:text-brand-accent transition-colors shrink-0"
                    >
                      <span>View all guides</span>
                      <ArrowRight className="size-3.5" strokeWidth={2} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {relatedArticles.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/blog/${rel.slug}`}
                        className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-lg"
                      >
                        {/* Thumbnail Image */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                          <Image
                            src={rel.heroImage}
                            alt={rel.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 260px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <span className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur-xs px-2.5 py-0.5 text-[10px] font-semibold text-brand-primary shadow-2xs">
                            {rel.category}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="flex flex-1 flex-col justify-between p-4 sm:p-4.5">
                          <div>
                            <h4 className="m-0 line-clamp-2 text-xs sm:text-[13px] font-bold leading-snug text-foreground transition-colors group-hover:text-brand-primary">
                              {rel.title}
                            </h4>
                          </div>

                          <div className="mt-3.5 flex items-center justify-between border-t border-black/[0.06] pt-2.5 text-[11px] text-muted-foreground">
                            <span className="inline-flex items-center gap-1">
                              <Clock className="size-3 text-brand-primary/70" />
                              <span>{rel.readingTime}</span>
                            </span>

                            <span className="inline-flex items-center gap-1 font-semibold text-brand-primary transition-transform duration-200 group-hover:translate-x-0.5">
                              <span>Read</span>
                              <ArrowRight className="size-3" strokeWidth={2} />
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}