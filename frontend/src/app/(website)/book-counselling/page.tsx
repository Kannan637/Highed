import React from "react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import IconBox from "@/components/ui/IconBox";
import LeadForm from "@/components/forms/LeadForm";
import { ShieldCheck, Award, Clock, Users } from "lucide-react";
import { constructMetadata } from "@/seo/metadata";
import { AutoOpenLeadPopup } from "./AutoOpenLeadPopup";

export const metadata = constructMetadata({
  title: "Book Free Study Abroad Counselling",
  description:
    "Book a free 1-on-1 counseling session with certified overseas education advisors. Get guidance on universities in Dubai, USA, UK, Canada, Australia, and Germany.",
  path: "/book-counselling",
  keywords: ["free counselling", "study abroad advisor", "overseas education guidance"],
});

export default function BookCounsellingPage() {
  return (
    <div className="bg-surface-neutral py-16 sm:py-24">
      {/* Auto-open modal on route entry */}
      <AutoOpenLeadPopup />

      <Container size="lg">
        <div className="grid grid-cols-4 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Information & Trust */}
          <div className="col-span-4 lg:col-span-6">
            <Badge variant="primary">
              <ShieldCheck size={16} />
              <span>Official University Representative</span>
            </Badge>

            <h1 className="mt-4 text-h1 text-content-primary">
              Take the First Step Towards Your Global Degree
            </h1>

            <p className="mt-4 text-body leading-relaxed text-content-secondary sm:text-body-large">
              Our experienced counselors provide step-by-step guidance on program selection, university admissions, scholarship filings, and visa documentation. Completely free of charge.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <IconBox icon={Users} variant="primary" size="sm" className="bg-surface-default shadow-card-resting" />
                <div>
                  <h3 className="text-body font-medium text-content-primary">
                    1-on-1 Dedicated Advisor
                  </h3>
                  <p className="text-body-small text-content-secondary">
                    Get an advisor dedicated to your application from profile evaluation to pre-departure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <IconBox icon={Award} variant="accent" size="sm" className="bg-surface-default shadow-card-resting" />
                <div>
                  <h3 className="text-body font-medium text-content-primary">
                    Maximum Scholarship Opportunities
                  </h3>
                  <p className="text-body-small text-content-secondary">
                    We match your profile with university and government scholarships up to 100% tuition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <IconBox icon={Clock} variant="success" size="sm" className="bg-surface-default shadow-card-resting" />
                <div>
                  <h3 className="text-body font-medium text-content-primary">
                    Fast-Track Offers &amp; Visa Support
                  </h3>
                  <p className="text-body-small text-content-secondary">
                    Direct university portal access for priority processing and 98%+ visa success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="col-span-4 lg:col-span-6">
            <Card className="p-6 sm:p-8 rounded-2xl border-border bg-card shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-content-primary">
                Book Your Free Counselling Session
              </h2>
              <p className="mt-2 text-sm text-content-secondary">
                Fill out the form below. A certified education advisor will review your profile and contact you within 24 hours.
              </p>

              <div className="mt-6">
                <LeadForm defaultCountry="General" />
              </div>

              <div className="mt-6 border-t border-border pt-5 text-center">
                <p className="text-xs sm:text-sm text-content-secondary">
                  Prefer calling directly?{" "}
                  <a
                    href="tel:+919050180501"
                    className="font-semibold text-brand-primary hover:underline"
                  >
                    +91 90501 80501
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
