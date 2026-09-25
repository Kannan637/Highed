import React from "react";
import Link from "next/link";
import { Award, Globe2, Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import IconBox from "@/components/ui/IconBox";
import CTASection from "@/components/ui/CTASection";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import EyebrowBadge from "@/components/ui/EyebrowBadge";
import { buttonVariants } from "@/components/ui/Button";
import { constructMetadata } from "@/seo/metadata";

export const metadata = constructMetadata({
  title: "About HighEd — Study Abroad Consultants",
  description:
    "Learn about HighEd, our mission, certified counsellors, and partnerships with 500+ global universities across USA, UK, Canada, Australia, Germany, and Dubai.",
  path: "/about",
  keywords: ["about high education", "study abroad consultants", "overseas education agency"],
});

export default function AboutPage() {
  return (
    <div className="bg-surface-neutral py-16 sm:py-24 font-body">
      <Container size="lg">
        {/* Hero Section */}
        <div className="text-center">
          <EyebrowBadge>Official University Representative</EyebrowBadge>

          <h1 className="mt-4 text-content-primary">
            Empowering Ambitious Minds to Study Globally
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-body-large text-content-secondary">
            HighEd is an international education advisory firm representing over 500 accredited universities. We provide transparent, end-to-end guidance from profile evaluation to post-study work visas.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <LeadCTAButton
              source="about_hero"
            >
              Book Free Counselling
            </LeadCTAButton>
            <Link
              href="/study-in"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Explore Destinations
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-4 gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-6">
          {[
            { value: "500+", label: "Partner Universities", color: "text-brand-primary" },
            { value: "10,000+", label: "Students Counselled", color: "text-brand-accent" },
            { value: "98.6%", label: "Visa Success Rate", color: "text-feedback-success" },
            { value: "100%", label: "Free Counselling", color: "text-brand-primary" },
          ].map((stat) => (
            <Card key={stat.label} hover className="col-span-2 lg:col-span-3 text-center p-6 rounded-2xl border-border bg-card">
              <div className={`font-heading text-h3 ${stat.color}`}>{stat.value}</div>
              <div className="mt-2 text-body-small text-content-secondary">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Why Choose HighEd */}
        <div id="why-choose-us" className="mt-24">
          <SectionHeading
            badge="Our Advantage"
            title="Why Students Trust HighEd"
            subtitle="We prioritize your academic and career aspirations above all else."
          />

          <div className="mt-12 grid grid-cols-4 gap-6 lg:grid-cols-12 lg:gap-8">
            <Card hover className="col-span-4 lg:col-span-4 p-8 rounded-2xl border-border bg-card">
              <IconBox icon={Building2} variant="primary" />
              <h3 className="mt-6 card-title text-content-primary">Direct University Portals</h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-content-secondary">
                Official representation means your application is processed directly through verified university agent channels for faster offer turnaround.
              </p>
            </Card>

            <Card hover className="col-span-4 lg:col-span-4 p-8 rounded-2xl border-border bg-card">
              <IconBox icon={Award} variant="accent" />
              <h3 className="mt-6 card-title text-content-primary">Maximum Scholarships</h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-content-secondary">
                Our advisors cross-reference hundreds of merit, athletic, and governmental scholarships to maximize fee waivers for eligible students.
              </p>
            </Card>

            <Card hover className="col-span-4 lg:col-span-4 p-8 rounded-2xl border-border bg-card">
              <IconBox icon={Globe2} variant="success" />
              <h3 className="mt-6 card-title text-content-primary">Global Visas &amp; Housing</h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-content-secondary">
                Complete mock visa interview preparation, financial documentation verification, and pre-departure accommodation support.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-24">
          <CTASection
            title="Ready to Start Your Study Abroad Journey?"
            subtitle="Connect with a certified counsellor today. Zero consultation fees, 100% personalized advisory."
            ctaLabel="Book Free Counselling"
            ctaSource="about_bottom"
          />
        </div>
      </Container>
    </div>
  );
}
