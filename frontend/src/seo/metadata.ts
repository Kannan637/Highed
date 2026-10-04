import { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

export interface CreateMetadataParams {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
}

/**
 * Clean title to prevent duplicate brand suffixes (e.g. "Page | HighEd | HighEd")
 * since RootLayout sets title.template = "%s | HighEd".
 */
function cleanPageTitle(rawTitle?: string): string {
  if (!rawTitle) return siteConfig.name;
  return rawTitle
    .replace(/\s*\|\s*HighEd\s*(Insights|Resources)?\s*$/i, "")
    .trim();
}

/**
 * Normalize canonical URL: ensures single canonical hostname and no trailing slash.
 */
function normalizeCanonicalUrl(path = ""): string {
  const cleanPath = path.trim().replace(/^\/+/, "").replace(/\/+$/, "");
  return cleanPath ? `${siteConfig.url}/${cleanPath}` : siteConfig.url;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  path = "",
  image = siteConfig.ogImage,
  keywords = [],
  noIndex = false,
}: CreateMetadataParams = {}): Metadata {
  const pageTitle = cleanPageTitle(title);
  const canonicalUrl = normalizeCanonicalUrl(path);

  const fullImageUrl = image.startsWith("http")
    ? image
    : `${siteConfig.url}${image.startsWith("/") ? "" : "/"}${image}`;

  return {
    title: pageTitle,
    description,
    keywords: [
      "study abroad consultants in tamil nadu",
      "overseas education advisors chennai",
      "student visa counselling",
      ...keywords,
    ],
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${pageTitle} | ${siteConfig.name}`,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_IN",
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: `${pageTitle} — HighEd`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | ${siteConfig.name}`,
      description,
      images: [fullImageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large" as const,
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

