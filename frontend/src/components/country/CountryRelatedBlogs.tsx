import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Country } from "@/types/country";
import { articles } from "@/data/articles";

interface CountryRelatedBlogsProps {
  country: Country;
}

const articleImages: Record<string, string> = {
  "usa-stem-opt-guide":
    "/images/blog/USA STEM OPT 3Year Extension Complete 2026 Roadmap.webp",
  "germany-tuition-free-universities":
    "/images/blog/Tuition Free Universities in Germany Admission Requirements.webp",
  "canada-pgwp-rules":
    "/images/blog/Canada PGWP Rules What International Students Need to Know.webp",
  "uk-graduate-route-visa":
    "/images/blog/UK Graduate Route 2Year Post Study Work Visa Explained.webp",
  "dubai-student-visa-guide":
    "/images/blog/Dubai Student Visa & Golden Visa Fast-Track Pathways.webp",
  "australia-subclass-500-visa":
    "/images/blog/Australia Subclass 500 Visa Financial Requirements & Health Insurance.webp",
};

export const CountryRelatedBlogs: React.FC<CountryRelatedBlogsProps> = ({
  country,
}) => {
  // Find articles matching country, backfilled with other top articles
  const countryArticles = articles.filter(
    (a) => a.countrySlug === country.slug
  );
  const otherArticles = articles.filter(
    (a) => a.countrySlug !== country.slug
  );
  // Show only 2 horizontal cards
  const displayArticles = [...countryArticles, ...otherArticles].slice(0, 2);

  if (displayArticles.length === 0) return null;

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 font-body">
      <div className="mx-auto max-w-[1000px] w-full px-4 sm:px-6">
        {/* Header: Eyebrow Badge, Title, Description */}
        <div className="flex flex-col items-center text-center gap-3 mb-8 sm:mb-12">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-2xl bg-brand-accent px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs">
            <Sparkles className="size-3.5 text-white" />
            <span>Destination Insights &amp; Guides</span>
          </div>

          {/* Title */}
          <h2 className="font-heading text-2xl font-bold tracking-tight text-content-primary sm:text-3xl md:text-4xl">
            Expert Guides for Studying in {country.name}
          </h2>

          {/* Description */}
          <p className="max-w-2xl text-sm leading-relaxed text-content-secondary sm:text-base font-body">
            Practical breakdowns of visa rules, university admissions, post-study
            work permits, and living expenses in {country.name}.
          </p>
        </div>

        {/* Exactly Two Horizontal Cards (No vertical cards) */}
        <div className="flex flex-col gap-4 sm:gap-5 w-full">
          {displayArticles.map((article) => {
            const imageSrc =
              articleImages[article.slug] ||
              country.heroImage ||
              "/images/blog/USA STEM OPT 3Year Extension Complete 2026 Roadmap.webp";

            return (
              <Link
                key={article.slug}
                href={article.href || `/study-in/${country.slug}`}
                className="group block w-full rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
              >
                {/* 12-Column Grid inside the Article Card */}
                <article className="grid grid-cols-12 gap-3 sm:gap-4 w-full">
                  {/* Left Text Box: 12 cols mobile, 7 cols tablet, 8 cols desktop */}
                  <div
                    className="col-span-12 sm:col-span-7 md:col-span-8 order-2 sm:order-1 flex flex-col justify-between gap-4 rounded-3xl p-6 sm:rounded-4xl sm:p-7 md:p-8 transition-colors duration-200"
                    style={{ backgroundColor: "#F5F5F9" }}
                  >
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-brand-accent px-2.5 py-1 text-xs font-semibold text-white">
                          {article.category}
                        </span>
                        <span className="text-xs text-content-secondary">•</span>
                        <span className="text-xs font-medium text-brand-primary/80">
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold leading-snug text-content-primary transition-colors group-hover:text-brand-primary sm:text-xl md:text-2xl">
                        {article.title}
                      </h3>

                      <p className="text-pretty text-sm leading-relaxed text-content-secondary line-clamp-2 sm:line-clamp-3">
                        {article.summary}
                      </p>
                    </div>

                    {/* Brand Card Button with Circular Arrow Badge */}
                    <div className="mt-2 flex w-fit items-center gap-2.5 rounded-full bg-brand-primary pl-4 pr-1.5 py-1 text-sm font-medium text-white transition-all duration-200 group-hover:bg-[#1B2958] shadow-xs">
                      <span>Read more</span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-primary shadow-xs transition-transform duration-200 group-hover:translate-x-0.5">
                        <ArrowRight className="size-4 text-brand-primary" />
                      </span>
                    </div>
                  </div>

                  {/* Right Image Box: 12 cols mobile, 5 cols tablet, 4 cols desktop */}
                  <div className="col-span-12 sm:col-span-5 md:col-span-4 order-1 sm:order-2 relative aspect-[16/9] sm:aspect-auto sm:min-h-[240px] w-full overflow-hidden rounded-3xl sm:rounded-4xl">
                    <Image
                      src={imageSrc}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 42vw, 340px"
                    />
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* CTA Button: View All Blogs */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <Link
            href="/blog"
            className="flex h-[48px] items-center gap-3 rounded-full bg-brand-primary pl-6 pr-2 text-[16px] font-medium text-white shadow-md transition-all duration-200 hover:bg-[#1B2958] active:scale-[0.98] cursor-pointer"
          >
            <span>View All Blogs</span>
            <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-white text-brand-primary shadow-sm transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight size={17} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CountryRelatedBlogs;
