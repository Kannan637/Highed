import { siteConfig } from "@/config/site.config";

interface LocalBusinessOptions {
  cityName: string;
  slug: string;
  streetAddress?: string;
  isPhysicalOffice?: boolean;
}

export function generateLocalBusinessSchema({
  cityName,
  slug,
  streetAddress,
  isPhysicalOffice = false,
}: LocalBusinessOptions) {
  const pageUrl = `${siteConfig.url}/best-study-consultant-in/${slug}`;

  if (isPhysicalOffice && streetAddress) {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${pageUrl}#localbusiness`,
      name: `HighEd — Study Abroad Consultants (${cityName})`,
      url: pageUrl,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress,
        addressLocality: cityName,
        addressRegion: "Tamil Nadu",
        postalCode: "600017",
        addressCountry: "IN",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:30",
          closes: "18:30",
        },
      ],
      parentOrganization: {
        "@id": `${siteConfig.url}/#organization`,
      },
    };
  }

  // Virtual counselling / service area schema (improve.md Phase 10 & 31)
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: `Study Abroad Counselling for Students in ${cityName}`,
    serviceType: "Study Abroad Consultancy & University Admissions Guidance",
    url: pageUrl,
    areaServed: {
      "@type": "City",
      name: cityName,
      containedInPlace: {
        "@type": "State",
        name: "Tamil Nadu",
      },
    },
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

