import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getCityBySlug, getAllCitySlugs } from "@/data/cities";
import { constructMetadata } from "@/seo/metadata";
import { generateBreadcrumbSchema } from "@/seo/breadcrumb";
import { generateFAQSchema } from "@/seo/faq";
import { generateLocalBusinessSchema } from "@/seo/localBusiness";

import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site.config";

import CityHero from "@/components/city/CityHero";
import CityTrust from "@/components/city/CityTrust";
import CityWhyHighEd from "@/components/city/CityWhyHighEd";
import CityDestinations from "@/components/city/CityDestinations";
import CityCourses from "@/components/city/CityCourses";
import CityServices from "@/components/city/CityServices";
import CityTestimonials from "@/components/city/CityTestimonials";
import CityFAQ from "@/components/city/CityFAQ";
import CityCTA from "@/components/city/CityCTA";

import CountryMarquee from "@/components/country/CountryMarquee";
import RealStories from "@/components/country/CountryRealStories";

interface CityPageProps {
  params: Promise<{
    city: string;
  }>;
}

export function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({
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
      title: "City Not Found | HighEd",
      description:
        "The requested study abroad consultant city page could not be found.",
      robots: {
        index: false,
        follow: false,
      },
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

  const cityUrl =
    `${siteConfig.url}/best-study-consultant-in/${city.slug}`;

  const breadcrumbSchema = generateBreadcrumbSchema([
    {
      name: "Home",
      url: siteConfig.url,
    },
    {
      name: "Locations",
      url: `${siteConfig.url}/#locations`,
    },
    {
      name: city.name,
      url: cityUrl,
    },
  ]);

  const faqSchema = generateFAQSchema(
    city.faqs.map(({ question, answer }) => ({
      question,
      answer,
    }))
  );

  const localBusinessSchema = generateLocalBusinessSchema({
    cityName: city.name,
    slug: city.slug,
    streetAddress:
      city.slug === "chennai"
        ? siteConfig.contact.address
        : undefined,
  });

  return (
    <>
      {/* SEO */}
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={localBusinessSchema} />

      {/* Hero */}
      <CityHero city={city} />

      {/* Trust */}
      <CityTrust city={city} />

      {/* Country Marquee */}
      <CountryMarquee />

      {/* Why HighEd */}
      <CityWhyHighEd city={city} />

      {/* Destinations */}
      <CityDestinations city={city} />

      {/* Courses */}
      <CityCourses city={city} />

      {/* Services */}
      <CityServices city={city} />

      {/* Real Stories */}
      <RealStories />

      {/* Testimonials */}
      <CityTestimonials city={city} />

      {/* FAQ */}
      <CityFAQ city={city} />

      {/* CTA */}
      <CityCTA city={city} />
    </>
  );
}