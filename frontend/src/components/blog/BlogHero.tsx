"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Clock, Calendar, ArrowRight } from "lucide-react";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import EyebrowBadge from "../ui/EyebrowBadge";

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
  const authorInitials = author.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <section className="relative w-full overflow-hidden border-b border-brand-primary/20 bg-gradient-to-br from-brand-primary via-[#1D2F64] to-[#12204C] text-white">
      {/* Ambient background glows */}

      <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        {/* 12-Column Grid: 6 / 6 Balanced Split for a Larger Right Image */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* =========================================================
              LEFT COLUMN: 6 columns in 12-Grid Structure
              ========================================================= */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
            {/* Minimal Category Eyebrow Badge */}
            <div className="mb-4">

              <EyebrowBadge>{category}</EyebrowBadge>
            </div>

            {/* Main Article Title: Clean, Minimal, Proportional Font Size */}
            <h1 className="text-xl sm:text-2xl lg:text-[28px] font-bold leading-[1.25] tracking-tight text-white m-0 max-w-xl">
              {title}
            </h1>

            {/* Author / Metadata Row with shadcn UI Avatar */}
            <div className="mt-4 flex items-center gap-3 text-xs text-white/80 flex-wrap">
              {/* shadcn UI Avatar */}
              <Avatar className="size-8 sm:size-9 border border-white/25 shadow-xs shrink-0">
                {author.avatar ? (
                  <AvatarImage src={author.avatar} alt={author.name} />
                ) : null}
                <AvatarFallback className="bg-white/20 text-white text-[11px] font-bold">
                  {authorInitials}
                </AvatarFallback>
              </Avatar>

              {/* Author Name */}
              <span className="font-semibold text-white">
                {author.name}
              </span>

              {/* Separator */}
              <span className="text-white/40 select-none">•</span>

              {/* Date Information */}
              <span className="inline-flex items-center gap-1.5 text-white/80">
                <Calendar className="size-3.5 text-white/70" />
                <span>{lastUpdated || publishedDate}</span>
              </span>

              {/* Separator */}
              <span className="text-white/40 select-none">•</span>

              {/* Reading Time */}
              <span className="inline-flex items-center gap-1.5 font-medium text-brand-accent">
                <Clock className="size-3.5 text-brand-accent" />
                <span>{readingTime}</span>
              </span>
            </div>

            {/* Brand Guideline Action Buttons: Master CTA + Frosted Pill */}
            <div className="mt-6 flex items-center gap-3 sm:gap-3.5 flex-wrap">
              {/* Primary Lead CTA Button with Brand Master Red Gradient */}
              <LeadCTAButton
                source="blog-hero"
                contextTitle={title}
                contextCTA="Book Free Counselling"
                forcePopup={true}
                size="sm"
                className="w-fit h-[48px]"
              >
                Book Free Counselling
              </LeadCTAButton>

              {/* Secondary Pill Button under Brand Guidelines */}
              <a
                href="#key-takeaways"
                className="group/btn inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-4 py-2.5 text-xs font-semibold text-white hover:border-white/50 hover:bg-white/20 transition-all cursor-pointer"
              >
                <span>Key Takeaways</span>
                <ArrowRight className="size-3 text-white/80 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: 6 columns (Enlarged Photo Framing)
              ========================================================= */}
          <div className="col-span-12 lg:col-span-6">
            <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] lg:aspect-[16/11] min-h-[300px] sm:min-h-[360px] lg:min-h-[400px] rounded-2xl overflow-hidden border border-white/20 bg-white/5  group">
              <Image
                src={heroImage}
                alt={title}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
              />

              {/* Verified Editorial Badge */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/60 backdrop-blur-md px-3.5 py-1.5 text-xs font-medium text-white shadow-sm">
                <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                <span>Verified 2026 Guide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogHero;
