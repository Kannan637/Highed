import type { Metadata } from "next";
import { DM_Sans, Hedvig_Letters_Serif } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site.config";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const hedvig = Hedvig_Letters_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "HighEd | Official Study Abroad Consultants & University Representative",
    template: "%s | HighEd",
  },
  description: siteConfig.description,
  keywords: [
    "study abroad",
    "overseas education",
    "study in dubai",
    "study abroad consultants",
    "foreign universities",
    "education loan",
    "student visa",
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logos/Highed Logo/Highed.png`,
  description: siteConfig.description,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    contactType: "admissions",
    availableLanguage: ["English", "Hindi"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address,
  },
  sameAs: [
    siteConfig.links.twitter,
    siteConfig.links.instagram,
    siteConfig.links.linkedin,
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/explore?query={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${hedvig.variable} h-full antialiased`}
    >
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
