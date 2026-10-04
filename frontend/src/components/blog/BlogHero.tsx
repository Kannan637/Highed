"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, BookOpen, ArrowRight } from "lucide-react";
import { useLeadPopup } from "@/hooks/useLeadPopup";

interface BlogHeroProps {
  title: string;
  category: string;
  readingTime: string;
  publishedDate: string;
  lastUpdated?: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  heroImage: string;
}

export function BlogHero({
  title,
  category,
  readingTime,
  publishedDate,
  lastUpdated,
  author,
  heroImage,
}: BlogHeroProps) {
  const { openLeadPopup } = useLeadPopup();

  const handleConsultation = () => {
    openLeadPopup({
      source: "blog-hero",
      contextTitle: title,
      contextCTA: "Book Free Consultation",
    });
  };

  const authorInitials = author.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <section className="w-full border-b border-border bg-background">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        {/* 12-Column Grid Structure */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* =========================================================
              LEFT COLUMN: 7 columns in 12-Grid Structure
              ========================================================= */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
            {/* Small Category / Eyebrow */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-neutral/60 px-3 py-1 text-xs font-semibold text-muted-foreground">
                <span className="size-1.5 rounded-full bg-brand-primary" aria-hidden="true" />
                {category}
              </span>
            </div>

            {/* Main Article Title (Single H1 per page) */}
            <h1 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-bold leading-[1.22] tracking-tight text-foreground m-0 max-w-[560px]">
              {title}
            </h1>


            {/* Author / Metadata Row */}
            <div className="mt-5 flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground flex-wrap">
              {/* Circular Avatar */}
              <div
                className="size-8 rounded-full overflow-hidden bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-xs font-bold text-brand-primary shrink-0"
                aria-hidden="true"
              >
                {author.avatar ? (
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    width={32}
                    height={32}
                    className="size-full object-cover"
                  />
                ) : (
                  <span>{authorInitials}</span>
                )}
              </div>

              {/* Author Name */}
              <span className="font-semibold text-foreground">
                {author.name}
              </span>

              {/* Separator */}
              <span className="text-muted-foreground/50 select-none">•</span>

              {/* Date Information */}
              <span className="flex items-center gap-1">
                <span>{lastUpdated || publishedDate}</span>
              </span>

              {/* Separator */}
              <span className="text-muted-foreground/50 select-none">•</span>

              {/* Reading Time */}
              <span className="flex items-center gap-1 font-medium text-brand-primary">
                <span>{readingTime}</span>
              </span>
            </div>

            {/* Horizontal Action Row: Two Pill-Shaped Buttons */}
            <div className="mt-7 flex items-center gap-3 sm:gap-4 flex-wrap">
              {/* Primary Pill Button */}
              <button
                type="button"
                onClick={handleConsultation}
                className="btn-motion inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-brand-primary-hover cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="size-3.5" />
              </button>

              {/* Secondary Pill Button */}
              <a
                href="#key-takeaways"
                className="btn-motion inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs sm:text-sm font-medium text-foreground hover:bg-surface-neutral transition-colors cursor-pointer"
              >
                <span>Key Takeaways</span>
              </a>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: 5 columns in 12-Grid Structure
              ========================================================= */}
          <div className="col-span-12 lg:col-span-5 relative flex items-center justify-center p-4 sm:p-6 lg:p-8 rounded-2xl overflow-hidden bg-surface-neutral/30 border border-border/60">
            {/* Main Illustration Composition Centered */}
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-sm border border-border bg-white">
              <Image
                src={heroImage}
                alt={title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 42vw, 480px"
              />
            </div>

            {/* Floating Graphic Element 1: Top Right */}
            <div className="absolute top-6 right-6 rounded-xl border border-border bg-white/95 backdrop-blur-xs px-3 py-1.5 shadow-2xs text-[11px] font-semibold flex items-center gap-1.5 text-foreground">
              <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
              <span>Verified 2026 Guide</span>
            </div>

            {/* Floating Graphic Element 2: Bottom Left */}
            <div className="absolute bottom-6 left-6 rounded-xl border border-border bg-white/95 backdrop-blur-xs px-3 py-1.5 shadow-2xs text-[11px] font-medium flex items-center gap-1.5 text-foreground">
              <BookOpen className="size-3.5 text-brand-primary shrink-0" />
              <span>Policy Roadmap</span>
            </div>

            {/* Subtle Horizontal Baseline near Bottom of Visual Area */}
            <div
              className="absolute bottom-2 left-6 right-6 h-px bg-border/60"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogHero;
