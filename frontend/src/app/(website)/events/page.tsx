import React from "react";
import EventsView from "@/components/events/EventsView";
import { constructMetadata } from "@/seo/metadata";
import { generateBreadcrumbSchema } from "@/seo/breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site.config";

export const metadata = constructMetadata({
  title: "Upcoming Study Abroad Events, Fairs & Webinars",
  description:
    "Register for in-person university fairs, admissions days, and webinars in Chennai, Coimbatore, Tirupathi and online. Direct access to 50+ global universities.",
  path: "/events",
  keywords: [
    "study abroad events",
    "international education fair chennai",
    "overseas education webinars",
    "spot admissions coimbatore",
    "germany education seminar tirupathi",
    "uk admissions day",
  ],
});

export default function EventsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    {
      name: "Home",
      url: siteConfig.url,
    },
    {
      name: "Events",
      url: `${siteConfig.url}/events`,
    },
  ]);

  const eventSeriesSchema = {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    name: "HighEd Global Education Conclaves & Admissions Fairs 2026",
    description:
      "Exclusive education fairs, delegate meetings, and interactive webinars connecting students with accredited universities across UK, USA, Canada, Australia, and Germany.",
    organizer: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    isAccessibleForFree: true,
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={eventSeriesSchema} />
      <EventsView />
    </>
  );
}

