import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Building2,
  Phone,
  Mail,
  ArrowRight,
  GraduationCap,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Container from "@/components/ui/Container";
import EyebrowBadge from "@/components/ui/EyebrowBadge";
import Card from "@/components/ui/Card";
import CTASection from "@/components/ui/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata } from "@/seo/metadata";
import { generateBreadcrumbSchema } from "@/seo/breadcrumb";
import { allCities } from "@/data/cities";
import { siteConfig } from "@/config/site.config";

export const metadata = constructMetadata({
  title: "Best Study Abroad Consultants in Tamil Nadu & South India",
  description:
    "Find HighEd overseas education counselling desks across Chennai (Headquarters), Coimbatore, Vellore, Tirupathi, and Thiruvallur. Free 1-on-1 profile evaluation and global university admissions.",
  path: "/best-study-consultant-in",
  keywords: [
    "best study abroad consultant in chennai",
    "overseas education consultant coimbatore",
    "study abroad consultants vellore",
    "study abroad consultants tirupathi",
    "study abroad consultants thiruvallur",
    "abroad education consultants tamil nadu",
  ],
});

export default function BestStudyConsultantHubPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    {
      name: "Best Study Consultant In",
      url: "/best-study-consultant-in",
    },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <main className="min-h-screen bg-surface-neutral py-16 sm:py-24 font-body">
        <Container size="lg">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-xs font-medium text-content-secondary"
          >
            <Link href="/" className="hover:text-brand-primary">
              Home
            </Link>
            <span>/</span>
            <span className="text-brand-primary font-semibold">
              Regional Counselling Desks
            </span>
          </nav>

          {/* Hero Header */}
          <div className="text-center max-w-4xl mx-auto">
            <EyebrowBadge>Regional Counselling Network</EyebrowBadge>

            <h1 className="mt-4 text-content-primary">
              Best Study Abroad Consultants Across{" "}
              <span className="text-brand-primary">Tamil Nadu & South India</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-body-large text-content-secondary leading-relaxed">
              Whether you prefer an in-person consultation at our Chennai headquarters
              or hybrid counselling across Tamil Nadu, HighEd provides ethical,
              100% free guidance for top universities in USA, UK, Canada, Australia,
              Germany, Ireland, and Dubai.
            </p>
          </div>

          {/* Head Office Highlight */}
          <div className="mt-14 overflow-hidden rounded-3xl border-2 border-brand-primary/20 bg-white p-8 sm:p-10 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary px-3.5 py-1 text-xs font-semibold text-white">
                    <Building2 size={13} />
                    Physical Head Office
                  </span>
                  <span className="text-xs font-semibold text-feedback-success flex items-center gap-1">
                    <CheckCircle2 size={13} />
                    Walk-in Counselling Available
                  </span>
                </div>

                <h2 className="mt-4 text-2xl sm:text-3xl font-heading font-bold text-content-primary">
                  HighEd Chennai — Central Admissions & Visa Hub
                </h2>

                <p className="mt-3 text-body text-content-secondary leading-relaxed">
                  Located in CIT Nagar, Saidapet, our primary headquarters handles complete
                  university submissions, visa file auditing, US Consulate mock interviews,
                  and financial documentation for students across South India.
                </p>

                <div className="mt-6 flex flex-col gap-2.5 text-sm text-content-secondary sm:flex-row sm:gap-6">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-brand-accent" />
                    <span>{siteConfig.contact.address}</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link
                    href="/best-study-consultant-in/chennai"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primary/90"
                  >
                    <span>View Chennai Office Details</span>
                    <ArrowRight size={16} />
                  </Link>

                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-surface-neutral px-5 py-3 text-sm font-semibold text-content-primary transition hover:border-brand-primary hover:text-brand-primary"
                  >
                    <Phone size={15} />
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                </div>
              </div>

              <div className="relative h-64 sm:h-72 lg:h-full lg:col-span-5 rounded-2xl overflow-hidden bg-brand-primary/5">
                <Image
                  src="/images/cities/chennai.webp"
                  alt="HighEd Chennai Study Abroad Consultants"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#FCF6BA]">
                    Flagship Office
                  </span>
                  <div className="font-heading font-bold text-lg">
                    Saidapet, Chennai, Tamil Nadu
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Cities Grid */}
          <div className="mt-16">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">
                Regional Desks
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-heading font-bold text-content-primary">
                Explore Advisory by City
              </h2>
              <p className="mt-2 text-content-secondary">
                Tailored counselling aligned with local university boards and engineering institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allCities.map((city) => (
                <Card
                  key={city.slug}
                  hover
                  className="group relative flex flex-col justify-between rounded-2xl border-border bg-card p-6 transition-all duration-300 hover:border-brand-primary/30 hover:shadow-md"
                >
                  <div>
                    <div className="relative h-44 w-full overflow-hidden rounded-xl bg-surface-neutral mb-5">
                      <Image
                        src={city.heroImage}
                        alt={`${city.title} banner`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 text-white">
                        <span className="rounded-full bg-brand-primary/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                          {city.slug === "chennai"
                            ? "Physical Head Office"
                            : "Counselling Desk"}
                        </span>
                        <h3 className="mt-1 font-heading text-lg font-bold text-white">
                          {city.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-body-small text-content-secondary line-clamp-3 leading-relaxed">
                      {city.tagline}
                    </p>

                    <div className="mt-5 border-t border-black/[0.06] pt-4">
                      <div className="text-[11px] font-semibold text-content-secondary">
                        Top Admissions Destinations:
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {city.destinations.slice(0, 4).map((d) => (
                          <span
                            key={d.name}
                            className="inline-flex items-center gap-1 rounded-md bg-surface-neutral px-2 py-0.5 text-xs text-content-primary font-medium"
                          >
                            <span>{d.flag}</span>
                            <span>{d.name}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-black/[0.06] pt-4">
                    <Link
                      href={`/best-study-consultant-in/${city.slug}`}
                      className="inline-flex w-full items-center justify-between text-sm font-semibold text-brand-primary group-hover:text-brand-accent transition-colors"
                    >
                      <span>Explore {city.name} Services</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20">
            <CTASection
              title="Not sure where to begin your application?"
              subtitle="Connect with our Chennai headquarters or schedule a virtual counselling session from any city in Tamil Nadu. 100% free of charge."
              ctaLabel="Book Free Counselling"
              ctaSource="city_hub_bottom"
            />
          </div>
        </Container>
      </main>
    </>
  );
}
