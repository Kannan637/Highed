import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site.config";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Study Abroad Consultants in Tamil Nadu | HighEd",
    template: "%s | HighEd",
  },
  description:
    "HighEd helps students in Tamil Nadu with study abroad counselling, university applications, scholarships, education loans and student visa guidance.",
  keywords: [
    "study abroad consultants chennai",
    "overseas education consultants tamil nadu",
    "study abroad",
    "overseas education",
    "study abroad consultants",
    "foreign universities",
    "student visa",
  ],
  applicationName: "HighEd",
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: "HighEd",
    title: "Study Abroad Consultants in Tamil Nadu | HighEd",
    description:
      "Study abroad counselling, university admissions, scholarships and student visa guidance for students in Tamil Nadu.",
    images: [
      {
        url: `${siteConfig.url}/images/brand/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "HighEd Study Abroad Consultants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Abroad Consultants in Tamil Nadu | HighEd",
    description:
      "Study abroad counselling, university admissions, scholarships and visa guidance.",
    images: [`${siteConfig.url}/images/brand/og-image.jpg`],
  },
  icons: {
    icon: "/icons/Favicon.png",
    apple: "/icons/Favicon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logos/Highed Logo/Highed.png`,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  description:
    "Study abroad consultancy providing university admissions, scholarships, education loan and student visa guidance.",
  areaServed: ["Chennai", "Coimbatore", "Tamil Nadu", "India"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    contactType: "admissions",
    areaServed: "IN",
    availableLanguage: ["English", "Tamil"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address,
    addressLocality: "Chennai",
    addressCountry: "IN",
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
      className={`${dmSans.variable} h-full antialiased`}
    >
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="min-h-full flex flex-col font-body font-medium tracking-tight-5">{children}</body>
    </html>
  );
}
