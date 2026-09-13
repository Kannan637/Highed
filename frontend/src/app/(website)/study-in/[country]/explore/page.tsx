import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCountryBySlug, getAllCountrySlugs } from "@/data/countries";
import { constructMetadata } from "@/seo/metadata";
import { generateBreadcrumbSchema } from "@/seo/breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site.config";
import ExploreHero from "@/components/explore/ExploreHero";
import ExploreContent from "@/components/explore/ExploreContent";

interface ExplorePageProps {
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
}: ExplorePageProps): Promise<Metadata> {
  const { country: slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    return {
      title: "Directory Not Found",
      description: "The requested study abroad explore directory could not be found.",
    };
  }

  return constructMetadata({
    title: `Explore Universities, Courses & Scholarships in ${country.name}`,
    description: `Search top universities, undergraduate and master's degree courses, and scholarship opportunities in ${country.name}. Compare tuition fees and admission requirements.`,
    path: `/study-in/${country.slug}/explore`,
    keywords: [
      `study in ${country.name}`,
      `${country.name} university directory`,
      `${country.name} courses list`,
      `${country.name} scholarships 2026`,
      `explore degrees in ${country.name}`,
    ],
  });
}

export default async function ExplorePage({ params }: ExplorePageProps) {
  const { country: slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Study Abroad", url: `${siteConfig.url}/study-in` },
    { name: country.name, url: `${siteConfig.url}/study-in/${country.slug}` },
    { name: "Explore", url: `${siteConfig.url}/study-in/${country.slug}/explore` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <ExploreHero country={country} />
      <ExploreContent country={country} />
    </>
  );
}
