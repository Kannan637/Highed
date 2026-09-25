import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { allCountries } from "@/data/countries";
import { constructMetadata } from "@/seo/metadata";

export const metadata = constructMetadata({
  title: "Study Abroad Destinations",
  description:
    "Explore top overseas study destinations including Dubai, USA, UK, Canada, Australia, and Germany. Discover universities, courses, and visas.",
  path: "/study-in",
  keywords: ["study abroad destinations", "overseas education countries", "best countries to study abroad"],
});

export default function StudyInPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <Container size="lg">
        <SectionHeading
          badge="Global Destinations"
          title="Explore Study Abroad Countries"
          subtitle="Select your preferred destination to explore accredited universities, living costs, post-study work visas, and scholarships."
        />

        <div className="grid grid-cols-4 gap-6 lg:grid-cols-12 lg:gap-8">
          {allCountries.map((country) => (
            <Link
              key={country.slug}
              href={`/study-in/${country.slug}`}
              className="col-span-4 sm:col-span-2 lg:col-span-4 group"
            >
              <Card hover className="h-full flex flex-col justify-between rounded-2xl border-border bg-card p-6 sm:p-8">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex size-14 items-center justify-center overflow-hidden rounded-2xl bg-neutral-50 border border-border shadow-2xs">
                      <ReactCountryFlag
                        countryCode={country.code}
                        svg
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    </span>
                    <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                      Popular
                    </Badge>
                  </div>

                  <h3 className="mt-6 card-title text-foreground transition-colors group-hover:text-brand-primary">
                    Study in {country.name}
                  </h3>

                  <p className="mt-3 text-content-secondary line-clamp-3">
                    {country.tagline}
                  </p>

                  <div className="mt-6 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                    <div>
                      <span className="font-semibold text-foreground">Currency:</span>{" "}
                      {country.currency.split("(")[0]}
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Visa Processing:</span>{" "}
                      {country.visaDetails.processingTime}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between min-h-[44px] text-sm font-semibold text-brand-primary transition-colors group-hover:text-brand-accent">
                  <span>Explore {country.name} Guide</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
