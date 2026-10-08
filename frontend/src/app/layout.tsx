import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site.config";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-heading",
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
    "HighEd helps students across Tamil Nadu with study abroad counselling, university admissions, scholarships, education loans, and student visa guidance for USA, UK, Canada, Australia, Germany, Ireland, and Dubai.",
  keywords: [
    "study abroad consultants in tamil nadu",
    "overseas education consultants chennai",
    "study abroad consultancy chennai",
    "study abroad consultants coimbatore",
    "foreign education counselling tamil nadu",
    "student visa guidance",
  ],
  applicationName: "HighEd",
  alternates: {
    canonical: siteConfig.url,
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
    siteName: siteConfig.name,
    title: "Study Abroad Consultants in Tamil Nadu | HighEd",
    description:
      "Study abroad counselling, university admissions, scholarships, education loan guidance, and student visa advisory for students in Tamil Nadu.",
    images: [
      {
        url: `${siteConfig.url}/images/brand/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "HighEd Study Abroad Consultants in Tamil Nadu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Abroad Consultants in Tamil Nadu | HighEd",
    description:
      "Study abroad counselling, university admissions, scholarships, and student visa guidance for students in Tamil Nadu.",
    images: [`${siteConfig.url}/images/brand/og-image.jpg`],
  },
  icons: {
    icon: "/icons/Favicon.png",
    apple: "/icons/Favicon.png",
  },
  verification: {
    google: "googled594c6eef5138b0f",
  },
};


const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logos/Highed Logo/Highed.png`,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  description: siteConfig.description,
  areaServed: [
    "Chennai",
    "Coimbatore",
    "Vellore",
    "Tirupathi",
    "Thiruvallur",
    "Tamil Nadu",
    "India",
  ],
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
    streetAddress: siteConfig.contact.addressDetails.streetAddress,
    addressLocality: siteConfig.contact.addressDetails.addressLocality,
    addressRegion: siteConfig.contact.addressDetails.addressRegion,
    postalCode: siteConfig.contact.addressDetails.postalCode,
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
    target: `${siteConfig.url}/study-in?query={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};


import { WebMcpProvider } from "@/components/agentic/WebMcpProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syne.variable} h-full antialiased`}
    >
      <head>
        {/* Agentic Resource Discovery & LLM Documentation Standards */}
        <link rel="ai-catalog" href="/.well-known/ard.json" />
        <link rel="ard" href="/.well-known/ard.json" />
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Content Summary" />
        <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="Full LLM Documentation" />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="min-h-full flex flex-col font-body font-medium tracking-tight-5">
        <WebMcpProvider />
        {children}
      </body>
    </html>
  );
}
