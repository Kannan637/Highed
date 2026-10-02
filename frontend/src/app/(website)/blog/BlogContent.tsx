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
  Calendar,
  Globe,
  CheckCircle2,
  ArrowRight,
  X,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTA";
import { Badge } from "@/components/ui/Badge";

export interface BlogArticle {
  title: string;
  slug: string;
  readingTime: string;
  date?: string;
  country?: string;
  description: string;
  image: string;
  href: string;
  category: string;
  highlights?: string[];
}

interface BlogContentProps {
  articles: BlogArticle[];
}

const POSTS_PER_PAGE = 6;

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
  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / POSTS_PER_PAGE));
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
      {/* HERO SECTION — 12-Column Grid System at 1200px Max Width */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#16234B_0%,#253A7B_60%,#1B2958_100%)] py-12 text-white sm:py-16 md:py-20 border-b border-white/10">
        {/* Ambient Glows */}
        <div
          className="pointer-events-none absolute -left-20 top-0 h-[320px] w-[320px] rounded-full bg-blue-400/15 blur-[100px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-[320px] w-[320px] rounded-full bg-brand-accent/20 blur-[100px]"
          aria-hidden="true"
        />

        {/* Decorative Material 3 doodle accents */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {/* M3 4-point star in top right */}
          <svg
            className="absolute right-8 top-10 h-16 w-16 text-[#D6B66A]/20 sm:right-24 sm:top-12"
            viewBox="0 0 48 48"
            fill="currentColor"
          >
            <path d="M24 0C24 13.2548 34.7452 24 48 24C34.7452 24 24 34.7452 24 48C24 34.7452 13.2548 24 0 24C13.2548 24 24 13.2548 24 0Z" />
          </svg>

          {/* M3 squircle in bottom right */}
          <svg
            className="absolute -bottom-10 right-1/4 h-28 w-28 rotate-12 text-white/5"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray="6 6"
          >
            <rect x="10" y="10" width="80" height="80" rx="26" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] w-full px-4 sm:px-6">
          <div className="grid grid-cols-12 gap-y-3 sm:gap-y-4">
            {/* Breadcrumb — 12 Columns */}
            <div className="col-span-12 mb-2 sm:mb-3">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Blog & Insights" },
                ]}
                className="[&_span]:text-white/70 [&_a]:text-white/70 [&_a:hover]:text-white [&_svg]:text-white/40 [&_span[aria-current]]:text-white"
              />
            </div>

            {/* Eyebrow Badge — 12 Columns */}
            <div className="col-span-12">
              <div className="inline-flex items-center gap-2 rounded-2xl bg-brand-accent px-3.5 py-2 text-xs font-semibold text-white">
                <Sparkles className="size-3.5 text-white" />
                <span>Verified Guides &amp; Insights</span>
              </div>
            </div>

            {/* H1 Heading — 12 Columns */}
            <div className="col-span-12 lg:col-span-10">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-heading font-semibold leading-tight">
                Study Abroad Guides &amp; News
              </h1>
            </div>

            {/* Subtitle — 12 Columns */}
            <div className="col-span-12 lg:col-span-10">
              <p className="max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg font-body font-normal">
                Stay informed with expert breakdowns of immigration policies, scholarship criteria, post-study work regulations, and global campus life.
              </p>
            </div>

            {/* Trust Highlights — 12 Columns */}
            <div className="col-span-12 mt-2 sm:mt-3">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/80">
                <Badge variant="inverse" size="sm" className="gap-1.5 font-normal">
                  <BookOpen className="size-3.5 text-brand-accent" />
                  <span>{articles.length} In-Depth Articles</span>
                </Badge>
                <Badge variant="inverse" size="sm" className="gap-1.5 font-normal">
                  <ShieldCheck className="size-3.5 text-emerald-400" />
                  <span>2026 Policy Verified</span>
                </Badge>
                <Badge variant="inverse" size="sm" className="gap-1.5 font-normal">
                  <Clock className="size-3.5 text-[#D6B66A]" />
                  <span>Updated Regularly</span>
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG CONTENT SECTION — 12-Column Grid System at 1200px Max Width */}
      <section className="w-full bg-surface-neutral px-4 py-12 font-body sm:py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] w-full grid grid-cols-12 gap-y-6 sm:gap-y-8">
          {/* Search Bar — 12 Columns */}
          <div className="col-span-12 relative w-full">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles by title, country or keyword..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full h-12 rounded-xl border border-input bg-card py-3.5 pl-11 pr-10 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-shadow focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 size-8 flex items-center justify-center rounded-lg text-muted-foreground hover:bg-neutral-100 hover:text-foreground cursor-pointer"
                aria-label="Clear search"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills — 12 Columns */}
          <div className="col-span-12 flex w-full items-center gap-2 overflow-x-auto pb-1 pt-0.5 scrollbar-none sm:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`shrink-0 min-h-[40px] rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "bg-brand-primary text-white shadow-xs"
                    : "border border-border bg-card text-muted-foreground hover:bg-brand-primary/5 hover:text-brand-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article Cards Grid — 12 Columns (2 Columns on Tablet/Desktop Matching Events Card Style) */}
          <div className="col-span-12 w-full">
            {paginatedArticles.length === 0 ? (
              <div className="flex flex-col items-center gap-3 rounded-2xl py-16 text-center px-4 bg-neutral-100/60 border border-border">
                <Search className="size-10 text-muted-foreground/40" />
                <p className="text-base font-semibold text-foreground">No articles found</p>
                <p className="max-w-xs text-sm text-muted-foreground">
                  Try adjusting your search query or selecting a different category filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                    setCurrentPage(1);
                  }}
                  className="mt-2 min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-primary underline underline-offset-4 hover:text-brand-primary/80 cursor-pointer"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {paginatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={article.href}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xs transition-all duration-300 hover:shadow-lg hover:border-brand-primary/20 h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                  >
                    <article className="flex flex-col h-full justify-between">
                      {/* Top Image Banner */}
                      <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-neutral-100">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span className="rounded-full bg-brand-primary/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white shadow-xs">
                            {article.category}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md shadow-xs bg-white/95 text-neutral-800">
                            <Clock size={12} className="text-brand-accent" />
                            <span>{article.readingTime}</span>
                          </span>
                        </div>

                        {/* Date & Country Overlay Bar */}
                        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center gap-3 text-white text-xs font-medium">
                          {article.date && (
                            <div className="inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-xs px-2.5 py-1">
                              <Calendar size={13} className="text-[#D6B66A]" />
                              <span>{article.date}</span>
                            </div>
                          )}
                          {article.country && (
                            <div className="inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-xs px-2.5 py-1">
                              <Globe size={13} className="text-[#D6B66A]" />
                              <span>{article.country}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Content Card Body */}
                      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                        <div>
                          <h2 className="font-heading text-lg sm:text-xl font-semibold leading-snug text-content-primary group-hover:text-brand-primary transition-colors line-clamp-2">
                            {article.title}
                          </h2>

                          <p className="mt-2 text-sm text-content-secondary line-clamp-2 leading-relaxed">
                            {article.description}
                          </p>

                          {/* Key Highlights Chips */}
                          {article.highlights && article.highlights.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-1.5">
                              {article.highlights.map((hl) => (
                                <span
                                  key={hl}
                                  className="inline-flex items-center gap-1 rounded-lg bg-surface-subtle px-2.5 py-1 text-[11px] font-medium text-neutral-700"
                                >
                                  <CheckCircle2 size={12} className="text-emerald-600 shrink-0" />
                                  <span>{hl}</span>
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Action Footer */}
                        <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between gap-3">
                          <div className="text-xs text-content-muted flex items-center gap-1">
                            <BookOpen size={13} className="shrink-0 text-brand-primary" />
                            <span className="truncate max-w-[180px] sm:max-w-[220px]">
                              {article.country ? `${article.country} Guide` : "Admissions Guide"}
                            </span>
                          </div>

                          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary/5 group-hover:bg-brand-primary group-hover:text-white text-brand-primary border border-brand-primary/20 px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 shrink-0">
                            <span>Read Guide</span>
                            <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Pagination Controls — 12 Columns */}
          {totalPages > 1 && (
            <div className="col-span-12 flex items-center justify-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex size-11 sm:size-12 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-brand-primary/5 disabled:cursor-not-allowed disabled:opacity-40 shadow-xs cursor-pointer"
                aria-label="Previous page"
              >
                <ChevronLeft className="size-5" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`flex size-11 sm:size-12 items-center justify-center rounded-xl text-sm font-semibold transition-colors shadow-xs cursor-pointer ${
                    currentPage === page
                      ? "bg-brand-primary text-white"
                      : "border border-border bg-card text-foreground hover:bg-brand-primary/5"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="flex size-11 sm:size-12 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-brand-primary/5 disabled:cursor-not-allowed disabled:opacity-40 shadow-xs cursor-pointer"
                aria-label="Next page"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          )}

          {/* Lead Generation CTA Callout — 12 Columns */}
          <div className="col-span-12 pt-4">
            <CTASection />
          </div>
        </div>
      </section>
    </div>
  );
}
