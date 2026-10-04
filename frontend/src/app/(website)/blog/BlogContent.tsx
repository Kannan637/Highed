"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Search,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen,
  ShieldCheck,
  Clock,
  X,
} from "lucide-react";

import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTA";
import { Badge } from "@/components/ui/Badge";
import { CardAction } from "@/components/ui/Card";

export interface BlogArticle {
  title: string;
  slug: string;
  readingTime: string;
  description: string;
  image: string;
  href: string;
  category: string;
}

interface BlogContentProps {
  articles: BlogArticle[];
}

const POSTS_PER_PAGE = 4;

export default function BlogContent({ articles }: BlogContentProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Derive unique categories from articles
  const categories = useMemo(() => {
    const cats = Array.from(new Set(articles.map((a) => a.category)));
    return ["All", ...cats];
  }, [articles]);

  // Filter articles by search + category
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || article.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [articles, searchQuery, activeCategory]);

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / POSTS_PER_PAGE)
  );

  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Reset to page 1 when filters change
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="w-full tracking-[-0.04em] [letter-spacing:-0.04em]">
      {/* =========================================================
          HERO SECTION
          ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#000000] to-brand-primary py-12 text-white sm:py-16 md:py-20">

        {/* Centered Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1000px] px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            {/* Breadcrumb */}
            <div className="mb-5">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Blog & Insights" },
                ]}
                className="
                  [&_span]:text-white/70
                  [&_a]:text-white/70
                  [&_a:hover]:text-white
                  [&_svg]:text-white/40
                  [&_span[aria-current]]:text-white
                "
              />
            </div>

            {/* Eyebrow Badge */}
            <div className="mb-5">
              <div className="inline-flex items-center gap-2 rounded-2xl bg-brand-accent px-3.5 py-2 text-xs font-semibold text-white">
                <span className="size-2 rounded-full bg-white" aria-hidden="true" />
                <span>Verified Guides &amp; Insights</span>
              </div>
            </div>

            {/* H1 */}
            <div className="w-full max-w-4xl">
              <h1 className="text-center text-white">
                Study Abroad <span className="text-brand-accent">Guides &amp; News</span>
              </h1>
            </div>

            {/* Description */}
            <div className="mt-4 w-full max-w-2xl">
              <p className="font-body text-center text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
                Stay informed with expert breakdowns of immigration policies,
                scholarship criteria, post-study work regulations, and global
                campus life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BLOG CONTENT SECTION
          ========================================================= */}
      <section className="w-full bg-surface-neutral px-4 py-12 font-body sm:py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[1000px] grid-cols-12 gap-y-6 sm:gap-y-8">
          {/* Search Bar */}
          <div className="relative col-span-12 w-full">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <input
              type="text"
              placeholder="Search articles by title or keyword..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="h-12 w-full rounded-xl border border-input bg-card py-3.5 pl-11 pr-10 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 shadow-xs"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearch("")}
                className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-lg text-muted-foreground hover:bg-neutral-100 hover:text-foreground"
                aria-label="Clear search"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="no-scrollbar col-span-12 flex w-full items-center gap-2 overflow-x-auto pb-1 pt-0.5 sm:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`btn-motion min-h-[40px] shrink-0 cursor-pointer rounded-full px-4 py-2 text-xs font-semibold sm:text-sm ${activeCategory === cat
                  ? "bg-brand-primary text-white shadow-xs"
                  : "border border-border bg-card text-muted-foreground hover:bg-brand-primary/5 hover:text-brand-primary"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article Cards */}
          <div className="col-span-12 flex w-full flex-col gap-4 sm:gap-5">
            {paginatedArticles.length === 0 ? (
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-neutral-100/60 px-4 py-16 text-center">
                <Search className="size-10 text-muted-foreground/40" />

                <p className="text-base font-semibold text-foreground">
                  No articles found
                </p>

                <p className="max-w-xs text-sm text-muted-foreground">
                  Try adjusting your search query or selecting a different
                  category filter.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                    setCurrentPage(1);
                  }}
                  className="mt-2 min-h-[44px] cursor-pointer px-4 py-2 text-sm font-semibold text-brand-primary underline underline-offset-4 hover:text-brand-primary/80"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              paginatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={article.href}
                  className="group block w-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                >
                  <article className="grid w-full grid-cols-12 gap-3 sm:gap-4">
                    {/* Left Text Box */}
                    <div className="order-2 col-span-12 flex flex-col justify-between gap-4 rounded-2xl border border-border bg-neutral-50/70 p-6 transition-colors duration-200 group-hover:border-primary/40 group-hover:bg-white group-hover:shadow-md sm:order-1 sm:col-span-7 sm:p-7 md:col-span-8 md:p-8">
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2">
                          <Badge variant="accent" size="sm">
                            {article.category}
                          </Badge>

                          <span className="text-xs text-muted-foreground">
                            •
                          </span>

                          <span className="text-xs font-medium text-brand-primary">
                            {article.readingTime}
                          </span>
                        </div>

                        <h2 className="article-title text-foreground transition-colors group-hover:text-brand-primary">
                          {article.title}
                        </h2>

                        <p className="line-clamp-2 text-pretty text-sm leading-relaxed text-muted-foreground sm:line-clamp-3">
                          {article.description}
                        </p>
                      </div>

                      {/* Card Button */}
                      <div className="mt-2">
                        <CardAction
                          variant="pill"
                          className="min-h-[44px]"
                        >
                          Read more
                        </CardAction>
                      </div>
                    </div>

                    {/* Right Image Box */}
                    <div className="relative order-1 col-span-12 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border sm:order-2 sm:col-span-5 sm:aspect-auto sm:min-h-[240px] md:col-span-4">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 42vw, 340px"
                      />
                    </div>
                  </article>
                </Link>
              ))
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="col-span-12 flex items-center justify-center gap-2 pt-2">
              <button
                type="button"
                onClick={() =>
                  setCurrentPage((p) => Math.max(1, p - 1))
                }
                disabled={currentPage === 1}
                className="btn-motion flex size-11 cursor-pointer items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-xs hover:bg-brand-primary/5 disabled:cursor-not-allowed disabled:opacity-40 sm:size-12"
                aria-label="Previous page"
              >
                <ChevronLeft className="size-5" />
              </button>

              {Array.from(
                { length: totalPages },
                (_, i) => i + 1
              ).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`btn-motion flex size-11 cursor-pointer items-center justify-center rounded-xl text-sm font-semibold shadow-xs sm:size-12 ${currentPage === page
                    ? "bg-brand-primary text-white"
                    : "border border-border bg-card text-foreground hover:bg-brand-primary/5"
                    }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="btn-motion flex size-11 cursor-pointer items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-xs hover:bg-brand-primary/5 disabled:cursor-not-allowed disabled:opacity-40 sm:size-12"
                aria-label="Next page"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          )}

          {/* Lead Generation CTA */}
          <div className="col-span-12 pt-4">
            <CTASection />
          </div>
        </div>
      </section>
    </div>
  );
}