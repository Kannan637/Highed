import { siteConfig } from "@/config/site.config";

interface LocalBusinessOptions {
  cityName: string;
  slug: string;
  streetAddress?: string;
}

export function generateLocalBusinessSchema({
  cityName,
  slug,
  streetAddress,
}: LocalBusinessOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/best-study-consultant-in/${slug}#localbusiness`,
    name: `HighEd ${cityName}`,
    url: `${siteConfig.url}/best-study-consultant-in/${slug}`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressCountry: "IN",
      ...(streetAddress && { streetAddress }),
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
