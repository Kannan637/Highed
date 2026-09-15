import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { articles } from "@/data/articles";

interface CountryRelatedBlogsProps {
  country: Country;
}

export const CountryRelatedBlogs: React.FC<CountryRelatedBlogsProps> = ({ country }) => {
  // Find articles matching country, backfilling with general top guides if needed
  const countryArticles = articles.filter((a) => a.countrySlug === country.slug);
  const otherArticles = articles.filter((a) => a.countrySlug !== country.slug);
  const displayArticles = [...countryArticles, ...otherArticles].slice(0, 3);

  if (displayArticles.length === 0) return null;

  return (
    <section className="bg-white py-20">
      <Container size="lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <SectionHeading
              badge="Destination Guides"
              title={`Expert Guides for Studying in ${country.name}`}
              subtitle={`Practical guides on visas, university admissions, post-study work regulations, and living expenses.`}
              className="text-left mb-0"
            />
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#253A7B] hover:text-[#E93F61] transition-colors pb-2 shrink-0 self-start md:self-end"
          >
            <span>View All Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-6 lg:grid-cols-12 lg:gap-8">
          {displayArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog`}
              className="col-span-4 sm:col-span-2 lg:col-span-4 group flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-neutral-50/40 p-6 transition-all duration-300 hover:border-[#253A7B]/40 hover:bg-white hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#EEF1FA] px-3 py-1 text-xs font-semibold text-[#253A7B]">
                    <Tag size={11} />
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-neutral-400">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-neutral-900 group-hover:text-[#253A7B] transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3 font-body">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#253A7B] group-hover:text-[#E93F61] transition-colors">
                <span className="flex items-center gap-1.5">
                  <BookOpen size={14} />
                  Read Destination Guide
                </span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CountryRelatedBlogs;
