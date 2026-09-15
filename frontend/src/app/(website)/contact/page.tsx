import React from "react";
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { siteConfig } from "@/config/site.config";
import { constructMetadata } from "@/seo/metadata";

export const metadata = constructMetadata({
  title: "Contact Us — Get in Touch with an Education Counsellor",
  description:
    "Reach HighEd for overseas education counselling, university shortlisting, and visa support. Call +91 90501 80501 or visit our admissions offices.",
  path: "/contact",
  keywords: ["contact study abroad consultant", "overseas education phone number", "highed office"],
});

export default function ContactPage() {
  return (
    <div className="bg-[#FAFAFC] py-16 sm:py-24 font-body">
      <Container size="lg">
        <SectionHeading
          badge="Get in Touch"
          title="Connect with HighEd Admissions"
          subtitle="Our expert counsellors are available to assist with university shortlisting, document reviews, and visa applications."
        />

        <div className="mt-12 grid grid-cols-4 gap-8 lg:grid-cols-12">
          {/* Contact Information */}
          <div className="col-span-4 space-y-6 lg:col-span-6">
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEF1FA] text-[#253A7B]">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#121314]">Direct Phone Support</h3>
                  <p className="mt-1 text-sm text-gray-500">Call or WhatsApp our admissions desk directly:</p>
                  <p className="mt-2">
                    <a href="tel:+919050180501" className="text-lg font-bold text-[#253A7B] hover:underline">
                      +91 90501 80501
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">
                    International Desk:{" "}
                    <a href={`tel:${siteConfig.contact.phone}`} className="font-semibold text-gray-700 hover:underline">
                      {siteConfig.contact.phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FDF0F3] text-[#E93F61]">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#121314]">Email Enquiries</h3>
                  <p className="mt-1 text-sm text-gray-500">Send application documents or general questions:</p>
                  <p className="mt-2">
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-base font-bold text-[#253A7B] hover:underline">
                      {siteConfig.contact.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EBF5EE] text-[#1E7B47]">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#121314]">Our Admissions Office</h3>
                  <p className="mt-1 text-sm font-semibold text-gray-700">Chennai</p>
                  <p className="mt-1 text-sm text-gray-600">{siteConfig.contact.address}</p>
                  <p className="mt-2 text-xs text-[#E93F61] font-semibold leading-relaxed">
                    Serving students across Tamil Nadu and beyond through online counselling and remote application support.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <Clock size={14} />
                    <span>Monday – Saturday: 9:30 AM – 6:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Consultation Request Card */}
          <div className="col-span-4 lg:col-span-6">
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-md sm:p-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF1FA] px-3.5 py-1 text-xs font-semibold text-[#253A7B]">
                <ShieldCheck size={14} />
                100% Free Service
              </span>

              <h2 className="mt-5 font-heading text-3xl font-bold text-[#121314]">
                Book Instant Counselling
              </h2>

              <p className="mt-3 text-base text-gray-600">
                Enter your mobile number in our quick popup and an admissions advisor will call you to discuss university shortlists and scholarship options.
              </p>

              <div className="mt-8">
                <LeadCTAButton
                  source="contact_page"
                  className="flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#E93F61] text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#D93657] active:scale-[0.98] cursor-pointer"
                >
                  <span>Request Callback Now</span>
                  <ArrowRight size={18} />
                </LeadCTAButton>
              </div>

              <div className="mt-8 rounded-2xl bg-[#FAFAFC] p-5 text-center text-xs text-gray-500">
                Our counsellors typically respond within 15 minutes during standard office hours.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
