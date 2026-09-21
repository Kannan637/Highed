import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
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
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <Container size="lg">
        <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-10 gap-6">
          <div className="w-full flex justify-center">
            <SectionHeading
              badge="Destination Guides"
              title={`Expert Guides for Studying in ${country.name}`}
              subtitle={`Practical guides on visas, university admissions, post-study work regulations, and living expenses.`}
              className="text-center mb-0 max-w-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-8">
          {displayArticles.map((article) => (
            <Card
              key={article.slug}
              className="col-span-4 sm:col-span-2 lg:col-span-4 group flex flex-col justify-between"
            >
              <Link href={`/blog`} className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-icon-bg-primary px-3 py-1 text-caption font-medium text-brand-primary">
                      <Tag size={11} />
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-caption font-medium text-neutral-400">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-normal text-h5 text-content-primary group-hover:text-brand-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="mt-2.5 text-body-small text-content-secondary leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-body-small font-medium text-brand-primary group-hover:text-brand-accent transition-colors">
                  <span className="flex items-center gap-1.5">
                    <BookOpen size={14} />
                    Read Destination Guide
                  </span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </Card>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-8 sm:mt-10 flex justify-center px-4">
          <Link
            href={`/blog`}
            className="inline-flex items-center justify-center font-medium rounded-[var(--radius-btn)] transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-content-inverse min-h-[44px] h-auto py-2.5 px-6 text-btn gap-2 max-w-full text-center"
          >
            <span>View All Guides</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CountryRelatedBlogs;
