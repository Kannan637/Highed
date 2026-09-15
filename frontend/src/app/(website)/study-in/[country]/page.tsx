import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCountryBySlug, getAllCountrySlugs } from "@/data/countries";
import { constructMetadata } from "@/seo/metadata";
import { generateBreadcrumbSchema } from "@/seo/breadcrumb";
import { generateFAQSchema } from "@/seo/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site.config";

import CountryHero from "@/components/country/CountryHero";
import CountryFeatureCards from "@/components/country/CountryFeatureCards";
import CountryWhyStudy from "@/components/country/CountryWhyStudy";
import CountryUniversities from "@/components/country/CountryUniversities";
import CountryCourses from "@/components/country/CountryCourses";
import CountryScholarships from "@/components/country/CountryScholarships";
import CountryIntakes from "@/components/country/CountryIntakes";
import CountryVisa from "@/components/country/CountryVisa";
import CountryTestimonials from "@/components/country/CountryTestimonials";
import CountryWhyHighEd from "@/components/country/CountryWhyHighEd";
import CountryFAQ from "@/components/country/CountryFAQ";
import CountryRelatedBlogs from "@/components/country/CountryRelatedBlogs";
import CountryCTA from "@/components/country/CountryCTA";

interface CountryPageProps {
  params: Promise<{
    country: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllCountrySlugs();
  return slugs.map((country) => ({
    country,
  }));
}

export async function generateMetadata({
  params,
}: CountryPageProps): Promise<Metadata> {
  const { country: slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    return {
      title: "Country Not Found",
      description: "The requested study abroad destination could not be found.",
    };
  }

  return constructMetadata({
    title: country.title,
    description: country.description,
    path: `/study-in/${country.slug}`,
    image: country.heroImage.startsWith("http")
      ? country.heroImage
      : `${siteConfig.url}${country.heroImage}`,
    keywords: [
      `study in ${country.name}`,
      `${country.name} universities`,
      `${country.name} scholarships`,
      `${country.name} student visa`,
      `higher education in ${country.name}`,
      `${country.name} courses for international students`,
    ],
  });
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { country: slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Study Abroad", url: `${siteConfig.url}/study-in` },
    { name: country.name, url: `${siteConfig.url}/study-in/${country.slug}` },
  ]);

  const faqSchema = generateFAQSchema(
    country.faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    }))
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <CountryHero country={country} />
      <CountryFeatureCards country={country} />
      <CountryWhyStudy country={country} />
      <CountryUniversities country={country} />
      <CountryCourses country={country} />
      <CountryScholarships country={country} />
      <CountryIntakes country={country} />
      <CountryVisa country={country} />
      <CountryTestimonials country={country} />
      <CountryWhyHighEd country={country} />
      <CountryFAQ country={country} />
      <CountryRelatedBlogs country={country} />
      <CountryCTA country={country} />
    </>
  );
}
