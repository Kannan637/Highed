import React from "react";
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import IconBox from "@/components/ui/IconBox";
import { Badge } from "@/components/ui/Badge";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { siteConfig } from "@/config/site.config";
import { constructMetadata } from "@/seo/metadata";

export const metadata = constructMetadata({
  title: "Contact HighEd — Study Abroad Counsellors",
  description:
    "Reach HighEd for overseas education counselling, university shortlisting, and visa support. Call +91 90501 80501 or visit our admissions offices.",
  path: "/contact",
  keywords: ["contact study abroad consultant", "overseas education phone number", "highed office"],
});

export default function ContactPage() {
  return (
    <div className="bg-surface-neutral py-16 sm:py-24 font-body">
      <Container size="lg">
        <SectionHeading
          badge="Get in Touch"
          title="Connect with HighEd Admissions"
          subtitle="Our expert counsellors are available to assist with university shortlisting, document reviews, and visa applications."
        />

        <div className="mt-12 grid grid-cols-4 gap-8 lg:grid-cols-12">
          {/* Contact Information */}
          <div className="col-span-4 space-y-6 lg:col-span-6">
            <Card hover className="p-6 sm:p-8 rounded-2xl border-border bg-card">
              <div className="flex items-start gap-4">
                <IconBox icon={Phone} variant="primary" />
                <div>
                  <h3 className="text-lg font-semibold text-content-primary">Direct Phone Support</h3>
                  <p className="mt-1 text-sm text-content-secondary">Call or WhatsApp our admissions desk directly:</p>
                  <p className="mt-2">
                    <a href="tel:+919050180501" className="text-base font-semibold text-brand-primary hover:underline">
                      +91 90501 80501
                    </a>
                  </p>
                  <p className="text-xs text-content-secondary">
                    International Desk:{" "}
                    <a href={`tel:${siteConfig.contact.phone}`} className="font-medium text-content-primary hover:underline">
                      {siteConfig.contact.phone}
                    </a>
                  </p>
                </div>
              </div>
            </Card>

            <Card hover className="p-6 sm:p-8 rounded-2xl border-border bg-card">
              <div className="flex items-start gap-4">
                <IconBox icon={Mail} variant="accent" />
                <div>
                  <h3 className="text-lg font-semibold text-content-primary">Email Enquiries</h3>
                  <p className="mt-1 text-sm text-content-secondary">Send application documents or general questions:</p>
                  <p className="mt-2">
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-base font-semibold text-brand-primary hover:underline">
                      {siteConfig.contact.email}
                    </a>
                  </p>
                </div>
              </div>
            </Card>

            <Card hover className="p-6 sm:p-8 rounded-2xl border-border bg-card">
              <div className="flex items-start gap-4">
                <IconBox icon={MapPin} variant="success" />
                <div>
                  <h3 className="text-lg font-semibold text-content-primary">Our Admissions Office</h3>
                  <p className="mt-1 text-sm font-semibold text-content-primary">Chennai</p>
                  <p className="mt-1 text-sm text-content-secondary">{siteConfig.contact.address}</p>
                  <p className="mt-2 text-xs text-brand-accent font-medium leading-relaxed">
                    Serving students across Tamil Nadu and beyond through online counselling and remote application support.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs font-medium text-content-secondary">
                    <Clock size={14} />
                    <span>Monday – Saturday: 9:30 AM – 6:30 PM</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Consultation Request Card */}
          <div className="col-span-4 lg:col-span-6">
            <Card hover className="p-8 sm:p-10 rounded-2xl border-border bg-card shadow-sm">
              <Badge variant="primary" className="gap-1.5">
                <ShieldCheck size={14} />
                <span>100% Free Service</span>
              </Badge>

              <h2 className="mt-5 text-2xl sm:text-3xl font-bold text-content-primary">
                Book Instant Counselling
              </h2>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-content-secondary">
                Enter your details in our quick popup and an admissions advisor will call you to discuss university shortlists and scholarship options.
              </p>

              <div className="mt-8">
                <LeadCTAButton
                  source="contact_page"
                  variant="accent"
                  size="lg"
                  fullWidth
                  iconBadge={<ArrowRight size={18} />}
                >
                  Request Callback Now
                </LeadCTAButton>
              </div>

              <div className="mt-8 rounded-xl bg-surface-neutral p-5 text-center text-xs text-content-secondary">
                Our counsellors typically respond within 15 minutes during standard office hours.
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
