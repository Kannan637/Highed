import type { Metadata } from "next";
import { constructMetadata } from "@/seo/metadata";
import { generateBreadcrumbSchema } from "@/seo/breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site.config";
import ExploreHero from "@/components/explore/ExploreHero";
import ExploreContent from "@/components/explore/ExploreContent";

export const metadata: Metadata = constructMetadata({
  title: "Explore Global Universities, Courses & Scholarships",
  description:
    "Search and compare 500+ top-ranked international universities, degree courses, tuition fees, and scholarship opportunities worldwide across USA, UK, Canada, Australia, Dubai, and Germany.",
  path: "/explore",
  keywords: [
    "explore universities worldwide",
    "global study abroad directory",
    "international degrees",
    "study abroad courses",
    "scholarships directory",
    "university search portal",
  ],
});

export default function CommonExplorePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Explore Directory", url: `${siteConfig.url}/explore` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="bg-[#FAFAFC] min-h-screen">
        <ExploreHero />
        <ExploreContent />
      </div>
    </>
  );
}
