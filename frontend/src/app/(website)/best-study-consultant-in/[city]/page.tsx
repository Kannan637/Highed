import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug, getAllCitySlugs } from "@/data/cities";
import { constructMetadata } from "@/seo/metadata";
import { generateBreadcrumbSchema } from "@/seo/breadcrumb";
import { generateFAQSchema } from "@/seo/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site.config";
import { generateLocalBusinessSchema } from "@/seo/localBusiness";

import CityHero from "@/components/city/CityHero";
import CityTrust from "@/components/city/CityTrust";
import CityWhyHighEd from "@/components/city/CityWhyHighEd";
import CityDestinations from "@/components/city/CityDestinations";
import CityCourses from "@/components/city/CityCourses";
import CityServices from "@/components/city/CityServices";
import CityTestimonials from "@/components/city/CityTestimonials";
import CityFAQ from "@/components/city/CityFAQ";
import CityCTA from "@/components/city/CityCTA";

interface CityPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs();
  return slugs.map((city) => ({
    city,
  }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return {
      title: "City Not Found",
      description: "The requested study abroad consultant city page could not be found.",
    };
  }

  return constructMetadata({
    title: city.seo.title,
    description: city.seo.description,
    path: `/best-study-consultant-in/${city.slug}`,
    keywords: city.seo.keywords,
  });
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Locations", url: `${siteConfig.url}/#locations` },
    { name: city.name, url: `${siteConfig.url}/best-study-consultant-in/${city.slug}` },
  ]);

  const faqSchema = generateFAQSchema(
    city.faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    }))
  );

  const localBusinessSchema = generateLocalBusinessSchema({
    cityName: city.name,
    slug: city.slug,
    streetAddress:
      city.slug === "chennai" ? siteConfig.contact.address : undefined,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={localBusinessSchema} />
      <CityHero city={city} />
      <CityTrust city={city} />
      <CityWhyHighEd city={city} />
      <CityDestinations city={city} />
      <CityCourses city={city} />
      <CityServices city={city} />
      <CityTestimonials city={city} />
      <CityFAQ city={city} />
      <CityCTA city={city} />
    </>
  );
}
