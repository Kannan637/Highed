import React from "react";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import IconBox from "@/components/ui/IconBox";
import LeadForm from "@/components/forms/LeadForm";
import { siteConfig } from "@/config/site.config";
import { constructMetadata } from "@/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = constructMetadata({
  title: "Contact HighEd — Study Abroad Counsellors in Chennai",
  description:
    "Reach HighEd for overseas education counselling, university shortlisting, and visa support. Call +91 90439 82424 or visit our admissions headquarters in Chennai.",
  path: "/contact",
  keywords: [
    "contact study abroad consultant",
    "overseas education phone number chennai",
    "highed office saidapet",
    "study abroad counselling address",
  ],
});

export default function ContactPage() {
  const email = siteConfig.contact.email || "admissions@highed.in";
  const phone = siteConfig.contact.formattedPhone || "+91 90439 82424";
  const address =
    siteConfig.contact.address ||
    "1st Floor, 11, 1st St, Venus Colony, CIT Nagar, Saidapet, Chennai, Tamil Nadu 600017";

  const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: `${siteConfig.url}/contact`,
    logo: `${siteConfig.url}/images/brand/og-image.jpg`,
    image: `${siteConfig.url}/images/contact/consultation.jpg`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.addressDetails.streetAddress,
      addressLocality: siteConfig.contact.addressDetails.addressLocality,
      addressRegion: siteConfig.contact.addressDetails.addressRegion,
      postalCode: siteConfig.contact.addressDetails.postalCode,
      addressCountry: siteConfig.contact.addressDetails.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.0245",
      longitude: "80.2238",
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
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil"],
    },
  };

  return (
    <div className="w-full font-body">
      <JsonLd data={localBusinessSchema} />

      {/* ====================================================================
          SECTION 1: HERO & CONTACT FORM (IMAGE ON LEFT, FORM ON RIGHT)
      ===================================================================== */}
      <section className="bg-linear-to-b from-surface-subtle via-white to-surface-subtle py-12 sm:py-16 lg:py-20">
        <Container size="lg">
          <SectionHeading
            badge="Admissions Advisory Desk"
            title="Connect with HighEd Admissions"
            accentText="HighEd"
            subtitle="Speak directly with an expert counsellor for free guidance on universities, admissions, scholarships, and student visas."
            className="mb-10 lg:mb-12"
          />

          <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-md">
            <LeadForm
              id="contact-consultation-form"
              imagePosition="left"
              imageSrc="/images/contact/consultation.jpg"
              imageAlt="HighEd student receiving study abroad counselling in Chennai"
              title="Book Free Counselling"
              subtitle="Fill out the details below and an admissions counsellor will connect with you within 2 hours."
              defaultCountry="USA"
            />
          </div>
        </Container>
      </section>

      {/* ====================================================================
          SECTION 2: CONTACT DETAILS & MAP (DETAILS ON LEFT, MAP ON RIGHT)
      ===================================================================== */}
      <section className="border-t border-black/5 bg-surface-neutral py-12 sm:py-16 lg:py-20">
        <Container size="lg">
          <SectionHeading
            badge="Direct Support & Location"
            title="Reach Us Directly or Visit Head Office"
            accentText="Directly"
            subtitle="Get in touch via Email or Phone, or visit our central walk-in admissions desk in Chennai."
            className="mb-10 lg:mb-14"
          />

          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
            {/* LEFT SIDE: EMAIL, MOBILE NUMBER, WORKING HOURS, OFFICE ADDRESS */}
            <div className="flex flex-col space-y-4 lg:col-span-5 sm:space-y-4.5">
              {/* 1. EMAIL */}
              <Card hover className="p-4.5 sm:p-5 border-black/10 bg-card">
                <div className="flex items-start gap-4">
                  <IconBox icon={Mail} variant="primary" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-content-secondary">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="mt-1 block truncate text-sm font-bold text-brand-primary hover:text-brand-accent hover:underline sm:text-base"
                    >
                      {email}
                    </a>
                    <p className="mt-1 text-xs text-content-secondary">
                      Document evaluations, application support & general inquiries.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 2. MOBILE NUMBER */}
              <Card hover className="p-4.5 sm:p-5 border-black/10 bg-card">
                <div className="flex items-start gap-4">
                  <IconBox icon={Phone} variant="accent" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-content-secondary">
                      Mobile Number
                    </p>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="mt-1 block text-sm font-bold text-brand-primary hover:text-brand-accent hover:underline sm:text-base"
                    >
                      {phone}
                    </a>
                    <p className="mt-1 text-xs text-content-secondary">
                      Call our study abroad advisors directly for immediate consultation.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 3. WORKING HOURS */}
              <Card hover className="p-4.5 sm:p-5 border-black/10 bg-card">
                <div className="flex items-start gap-4">
                  <IconBox icon={Clock} variant="gold" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-content-secondary">
                      Working Hours
                    </p>
                    <p className="mt-1 text-sm font-bold text-content-primary sm:text-base">
                      Monday – Saturday: 9:30 AM – 6:30 PM IST
                    </p>
                    <p className="mt-1 text-xs text-content-secondary">
                      Sundays: Closed (Special 1-on-1 sessions by prior appointment).
                    </p>
                  </div>
                </div>
              </Card>

              {/* 4. HEAD OFFICE ADDRESS */}
              <Card hover className="p-4.5 sm:p-5 border-black/10 bg-surface-subtle">
                <div className="flex items-start gap-4">
                  <IconBox icon={MapPin} variant="primary" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                      Chennai Headquarters
                    </p>
                    <p className="mt-1 text-xs font-medium leading-relaxed text-content-primary sm:text-sm">
                      {address}
                    </p>
                    <p className="mt-1.5 text-[11px] text-content-secondary">
                      Walk-in consultations welcome without prior appointment during office hours.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* RIGHT SIDE: INTERACTIVE MAP (CLEAN, NO OVERLAY BUTTONS) */}
            <div className="flex flex-col lg:col-span-7">
              <Card className="flex h-full flex-col overflow-hidden rounded-3xl border-black/10 bg-card shadow-md p-0">
                <iframe
                  title="HighEd Overseas Education Advisory Head Office Location Map"
                  src={mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "420px" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full flex-1 min-h-[420px] sm:min-h-[480px] lg:min-h-full"
                />
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
