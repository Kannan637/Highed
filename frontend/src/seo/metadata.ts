import { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

export interface CreateMetadataParams {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  path = "",
  image = siteConfig.ogImage,
  keywords = [],
}: CreateMetadataParams = {}): Metadata {
  const fullTitle = title || siteConfig.name;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "study abroad",
      "overseas education",
      "international universities",
      "scholarships for international students",
      "student visa",
      ...keywords,
    ],
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
