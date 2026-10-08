"use client";

import React, { useState } from "react";
import {
  BedDouble,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  FileCheck2,
  GraduationCap,
  Luggage,
  MapPin,
  PhoneCall,
  Plane,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import Container from "@/components/ui/Container";
import EyebrowBadge from "@/components/ui/EyebrowBadge";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { cn } from "@/lib/utils";
import {
  CARD_BG_COLORS,
  CardDecorativeIcons,
} from "@/components/home/service-constants";

type ServiceCard = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

const accommodationServices: ServiceCard[] = [
  {
    icon: Search,
    title: "Curated Housing Search",
    description:
      "Find student-friendly residences vetted for university proximity, budget limits, lease flexibility, and safety standards.",
  },
  {
    icon: MapPin,
    title: "Prime Campus Proximity",
    description:
      "Secure properties within walking distance or direct public transit connections to your campus and academic libraries.",
  },
  {
    icon: ShieldCheck,
    title: "100% Verified Providers",
    description:
      "Avoid rental scams with our contracted Purpose-Built Student Accommodation (PBSA) and verified landlord networks.",
  },
  {
    icon: BedDouble,
    title: "Flexible Room Typologies",
    description:
      "Choose from private en-suite rooms, self-contained studio apartments, shared twin flats, and family accommodations.",
  },
  {
    icon: CreditCard,
    title: "Zero Guarantor Options",
    description:
      "Access student housing partners that do not require local in-country guarantors or multi-month upfront deposits.",
  },
  {
    icon: Users,
    title: "Roommate Matching Support",
    description:
      "Connect with peer international students from your home university or intake cohort to share apartments and reduce costs.",
  },
];

const preDepartureServices: ServiceCard[] = [
  {
    icon: FileCheck2,
    title: "Port of Entry Document Audit",
    description:
      "Organize an airtight travel folder with original CAS/I-20, offer letters, financial proofs, medical tests, and immigration approvals.",
  },
  {
    icon: Luggage,
    title: "Airlines Baggage & Packing Guide",
    description:
      "Get weight allowances, country-specific customs declarations, forbidden items lists, and climate-specific wardrobe recommendations.",
  },
  {
    icon: Plane,
    title: "Airport Transit & Pickup Coordination",
    description:
      "Navigate airport immigration smoothly and schedule university airport shuttle services or direct taxi transfers to your stay.",
  },
  {
    icon: CreditCard,
    title: "Forex Cards & Multi-Currency Accounts",
    description:
      "Zero-markup international student Forex cards, blocked account payouts, and guidance on opening local overseas bank accounts.",
  },
  {
    icon: PhoneCall,
    title: "International SIM & Connectivity",
    description:
      "Receive pre-activated UK, USA, Canada, or Europe eSIMs/SIM cards with high-speed data before you even board your flight.",
  },
  {
    icon: GraduationCap,
    title: "Campus Onboarding & Orientation",
    description:
      "Guidance on university registration, biometric residence permits (BRP/e-Visa), student ID cards, and campus healthcare registration.",
  },
];

const accommodationProcess: ProcessStep[] = [
  {
    number: "01",
    title: "Specify Preferences & Budget",
    description:
      "Share your target university, room type preference (studio, en-suite, shared), maximum weekly budget, and tenancy start dates.",
  },
  {
    number: "02",
    title: "Shortlist Verified Stays",
    description:
      "Receive 360-degree virtual room tours, verified pricing, transparent utility inclusions (heating/WiFi), and commute distance maps.",
  },
  {
    number: "03",
    title: "Reserve Room & Lease Review",
    description:
      "Our team reviews the tenancy agreement to ensure fair cancellation policies in case of visa delays, with minimal deposit requirements.",
  },
  {
    number: "04",
    title: "Move-In Confirmation",
    description:
      "Receive your digital lease pack, key-collection protocol, and emergency contact details for check-in day.",
  },
];

const preDepartureProcess: ProcessStep[] = [
  {
    number: "01",
    title: "Immigration File Preparation",
    description:
      "Audit physical and digital copies of your visa stamp, university certificates, tuition receipts, and health insurance documents.",
  },
  {
    number: "02",
    title: "Financial & Travel Logistics",
    description:
      "Load Forex cards, book student-discounted airline flights with extra baggage allowance, and secure travel insurance.",
  },
  {
    number: "03",
    title: "Pre-Flight Briefing Session",
    description:
      "Attend our live webinar covering customs clearance questions, currency rules, cultural adaptation, and university check-in.",
  },
  {
    number: "04",
    title: "First 48 Hours Abroad",
    description:
      "Follow our step-by-step landing checklist: SIM activation, key collection, local grocery access, and university registry check-in.",
  },
];

const faqs = [
  {
    question: "When should I begin booking student accommodation?",
    answer:
      "We recommend booking accommodation as soon as you receive your conditional or unconditional offer letter, ideally 3 to 5 months before intake. Student rooms near popular universities in the UK, USA, Canada, and Australia fill up quickly, and early bookings lock in lower rates.",
  },
  {
    question: "What happens to my booking deposit if my visa is delayed or refused?",
    answer:
      "All our verified housing partners operate with a 'No Visa, No Pay' policy. If your student visa is refused or delayed past the semester start date, your tenancy is cancelled and your deposit is refunded upon submitting official embassy proof.",
  },
  {
    question: "Do university accommodations include utility bills?",
    answer:
      "Most Purpose-Built Student Accommodations (PBSA) and on-campus halls include all utilities — high-speed Wi-Fi, heating, electricity, water, contents insurance, and 24/7 security — in the weekly or monthly rent with no hidden fees.",
  },
  {
    question: "What documents must I carry in my hand luggage at port of entry?",
    answer:
      "Never place primary documents in checked luggage. Always carry: Original passport with valid visa, Form I-20 (USA) or CAS Statement (UK) or Letter of Acceptance (Canada/Australia), tuition fee payment receipts, scholarship letters, official transcripts, and accommodation confirmation.",
  },
  {
    question: "How do I arrange money and local currency for my first few weeks?",
    answer:
      "We recommend carrying a student Forex multi-currency card loaded with the destination currency, a small amount of physical cash (approx. $300 to $500 / £250 / €300) for initial transit, and an active international debit card for emergencies.",
  },
];

export default function AccommodationAndPreDeparturePage() {
  const [activeTab, setActiveTab] = useState<"accommodation" | "predeparture">("accommodation");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full bg-white tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] [&_*]:[letter-spacing:var(--tracking-tight-5)]">
      {/* =========================================================
          HERO SECTION
      ========================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-[#1D2F64] to-[#12204C] py-16 text-white sm:py-20 lg:py-24">
        {/* Glows */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-accent/20 blur-[100px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-blue-400/10 blur-[100px]" />

        <Container size="lg" className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <EyebrowBadge className="mb-6">
              Complete Relocation Support
            </EyebrowBadge>

            <h1 className="text-white">
              Student Accommodation &amp; Pre-Departure Briefing
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-body-large text-white/85">
              From finding secure, fully-furnished student housing near campus to airport pickup, SIM cards, Forex, and port-of-entry checklists — travel abroad with total peace of mind.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <LeadCTAButton source="acc_pre_departure_hero">
                Get Relocation Guidance
              </LeadCTAButton>
            </div>

            {/* Quick stats pills */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["100% Verified Housing", "No Visa, No Pay guarantee on student bookings"],
                ["Port-of-Entry Ready", "Complete document audit & packing framework"],
                ["Zero Guarantor", "Accessible private rooms & studios near universities"],
              ].map(([stat, label]) => (
                <div
                  key={stat}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4.5 backdrop-blur-sm"
                >
                  <div className="font-heading text-h5 text-white font-semibold">{stat}</div>
                  <div className="mt-1 text-caption text-white/70">{label}</div>
                </div>
              ))}
            </div>

            {/* TAB SELECTOR */}
            <div className="mt-10 inline-flex rounded-full border border-white/20 bg-white/10 p-1.5 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setActiveTab("accommodation")}
                className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  activeTab === "accommodation"
                    ? "bg-white text-brand-primary shadow-sm"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <BedDouble className="size-4" />
                Student Accommodation
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("predeparture")}
                className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  activeTab === "predeparture"
                    ? "bg-white text-brand-primary shadow-sm"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <Plane className="size-4" />
                Pre-Departure Support
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          MAIN TAB CONTENT: ACCOMMODATION OR PRE-DEPARTURE
      ========================================================== */}
      {activeTab === "accommodation" ? (
        <>
          {/* ACCOMMODATION SERVICES */}
          <section className="bg-surface-neutral py-16 sm:py-20 lg:py-24">
            <Container size="lg">
              <div className="mx-auto max-w-2xl text-center">
                <EyebrowBadge>Vetted Housing Network</EyebrowBadge>
                <h2 className="mt-3 text-content-primary">
                  Student Accommodation Built Around Your Needs
                </h2>
                <p className="mt-4 text-content-secondary">
                  Whether you prefer a private studio, on-campus dormitory, or shared apartment, we help you find the right stay with transparent contracts.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {accommodationServices.map((service, index) => {
                  const Icon = service.icon;
                  const cardBg = CARD_BG_COLORS[index % CARD_BG_COLORS.length];
                  const DecorativeIcon =
                    CardDecorativeIcons[index % CardDecorativeIcons.length];

                  return (
                    <div
                      key={service.title}
                      className={cn(
                        "group/card relative isolate flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl p-7 sm:p-8",
                        "border border-black/[0.06]",
                        "shadow-[0_2px_8px_rgba(0,0,0,0.03)]",
                        "transition-all duration-300 ease-out",
                        "hover:-translate-y-1.5",
                        "hover:border-black/[0.12]",
                        "hover:shadow-[0_16px_32px_rgba(0,0,0,0.07)]"
                      )}
                      style={{
                        backgroundColor: cardBg,
                      }}
                    >
                      {DecorativeIcon && (
                        <DecorativeIcon
                          aria-hidden="true"
                          className={cn(
                            "pointer-events-none absolute -right-10 -top-10 z-0",
                            "h-55 w-55",
                            "opacity-30",
                            "text-black/[0.08]",
                            "transition-all duration-500 ease-out",
                            "group-hover/card:scale-105",
                            "group-hover/card:text-black/[0.10]"
                          )}
                        />
                      )}

                      <div className="relative z-10 flex h-full flex-col justify-between">
                        <div>
                          <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-xs transition-transform duration-300 group-hover/card:scale-105">
                            <Icon
                              className="size-6 text-brand-primary"
                              strokeWidth={2}
                            />
                          </div>
                        </div>

                        <div className="flex flex-1 flex-col justify-center py-6">
                          <h3 className="card-title text-content-primary">
                            {service.title}
                          </h3>

                          <p className="mt-3 text-body-small text-content-secondary leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Container>
          </section>

          {/* ACCOMMODATION PROCESS */}
          <section className="bg-white py-16 sm:py-20 lg:py-24">
            <Container size="lg">
              <div className="mx-auto max-w-2xl text-center">
                <EyebrowBadge>Simple 4-Step Booking</EyebrowBadge>
                <h2 className="mt-3 text-content-primary">
                  How We Find Your Stay Abroad
                </h2>
                <p className="mt-4 text-content-secondary">
                  A transparent booking process with zero hassle and verified terms.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {accommodationProcess.map((step) => (
                  <div
                    key={step.number}
                    className="relative flex flex-col justify-between rounded-3xl border border-border-default bg-surface-subtle/50 p-6 sm:p-7 transition-all duration-300 hover:bg-white hover:shadow-md"
                  >
                    <div>
                      <span className="inline-flex size-9 items-center justify-center rounded-xl bg-brand-primary text-body-small font-bold text-white">
                        {step.number}
                      </span>
                      <h3 className="card-title mt-5 text-content-primary">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-body-small text-content-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* ROOM TYPES BREAKDOWN */}
          <section className="bg-surface-neutral py-16 sm:py-20 lg:py-24">
            <Container size="lg">
              <div className="mx-auto max-w-2xl text-center">
                <EyebrowBadge>Housing Options</EyebrowBadge>
                <h2 className="mt-3 text-content-primary">
                  Popular Student Housing Typologies
                </h2>
                <p className="mt-4 text-content-secondary">
                  Choose the stay format that best matches your lifestyle and budget.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  {
                    title: "Private En-Suite Room",
                    badge: "Most Popular",
                    desc: "Your own private bedroom and attached private bathroom with a shared modern kitchen and communal living area.",
                    features: ["Private bathroom & desk", "Shared social kitchen", "All utilities included", "Regular communal cleaning"],
                  },
                  {
                    title: "Self-Contained Studio",
                    badge: "Complete Privacy",
                    desc: "Fully private apartment with your own en-suite bathroom, private kitchenette, study area, and double bed.",
                    features: ["Private kitchen & bath", "Independent living space", "Quiet study atmosphere", "Free high-speed WiFi"],
                  },
                  {
                    title: "Shared Student Apartment",
                    badge: "Budget Friendly",
                    desc: "Share an apartment or twin room with peer students to significantly lower rental costs and build immediate friendships.",
                    features: ["Lowest weekly cost", "Shared kitchen & bathroom", "Great peer community", "Close to campus bus routes"],
                  },
                ].map((room) => (
                  <div
                    key={room.title}
                    className="flex flex-col justify-between rounded-3xl border border-border-card bg-white p-7 shadow-xs"
                  >
                    <div>
                      <span className="inline-flex rounded-full bg-brand-primary/10 px-3 py-1 text-caption font-semibold text-brand-primary mb-3">
                        {room.badge}
                      </span>
                      <h3 className="font-heading text-body-large font-bold text-content-primary">
                        {room.title}
                      </h3>
                      <p className="mt-3 text-body-small text-content-secondary leading-relaxed">
                        {room.desc}
                      </p>
                      <ul className="mt-6 space-y-2.5 border-t border-border-subtle pt-5">
                        {room.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2 text-body-small text-content-secondary">
                            <CheckCircle2 className="size-4 shrink-0 text-brand-primary" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </>
      ) : (
        <>
          {/* PRE-DEPARTURE SERVICES */}
          <section className="bg-surface-neutral py-16 sm:py-20 lg:py-24">
            <Container size="lg">
              <div className="mx-auto max-w-2xl text-center">
                <EyebrowBadge>Before You Fly</EyebrowBadge>
                <h2 className="mt-3 text-content-primary">
                  Essential Pre-Departure Assistance
                </h2>
                <p className="mt-4 text-content-secondary">
                  Everything you need to arrange before taking off — from foreign exchange to airport pickup and local SIM cards.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {preDepartureServices.map((service, index) => {
                  const Icon = service.icon;
                  const cardBg = CARD_BG_COLORS[index % CARD_BG_COLORS.length];
                  const DecorativeIcon =
                    CardDecorativeIcons[index % CardDecorativeIcons.length];

                  return (
                    <div
                      key={service.title}
                      className={cn(
                        "group/card relative isolate flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl p-7 sm:p-8",
                        "border border-black/[0.06]",
                        "shadow-[0_2px_8px_rgba(0,0,0,0.03)]",
                        "transition-all duration-300 ease-out",
                        "hover:-translate-y-1.5",
                        "hover:border-black/[0.12]",
                        "hover:shadow-[0_16px_32px_rgba(0,0,0,0.07)]"
                      )}
                      style={{
                        backgroundColor: cardBg,
                      }}
                    >
                      {DecorativeIcon && (
                        <DecorativeIcon
                          aria-hidden="true"
                          className={cn(
                            "pointer-events-none absolute -right-10 -top-10 z-0",
                            "h-55 w-55",
                            "opacity-30",
                            "text-black/[0.08]",
                            "transition-all duration-500 ease-out",
                            "group-hover/card:scale-105",
                            "group-hover/card:text-black/[0.10]"
                          )}
                        />
                      )}

                      <div className="relative z-10 flex h-full flex-col justify-between">
                        <div>
                          <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-xs transition-transform duration-300 group-hover/card:scale-105">
                            <Icon
                              className="size-6 text-brand-primary"
                              strokeWidth={2}
                            />
                          </div>
                        </div>

                        <div className="flex flex-1 flex-col justify-center py-6">
                          <h3 className="card-title text-content-primary">
                            {service.title}
                          </h3>

                          <p className="mt-3 text-body-small text-content-secondary leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Container>
          </section>

          {/* PRE-DEPARTURE PROCESS */}
          <section className="bg-white py-16 sm:py-20 lg:py-24">
            <Container size="lg">
              <div className="mx-auto max-w-2xl text-center">
                <EyebrowBadge>Preparation Roadmap</EyebrowBadge>
                <h2 className="mt-3 text-content-primary">
                  Step-by-Step Departure Timeline
                </h2>
                <p className="mt-4 text-content-secondary">
                  A structured protocol ensuring nothing is left to the last minute.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {preDepartureProcess.map((step) => (
                  <div
                    key={step.number}
                    className="relative flex flex-col justify-between rounded-3xl border border-border-default bg-surface-subtle/50 p-6 sm:p-7 transition-all duration-300 hover:bg-white hover:shadow-md"
                  >
                    <div>
                      <span className="inline-flex size-9 items-center justify-center rounded-xl bg-brand-primary text-body-small font-bold text-white">
                        {step.number}
                      </span>
                      <h3 className="card-title mt-5 text-content-primary">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-body-small text-content-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* CHECKLIST HIGHLIGHT */}
          <section className="bg-surface-neutral py-16 sm:py-20 lg:py-24">
            <Container size="lg">
              <div className="mx-auto max-w-2xl text-center">
                <EyebrowBadge>Airport Hand Luggage</EyebrowBadge>
                <h2 className="mt-3 text-content-primary">
                  Mandatory Flight Day Checklist
                </h2>
                <p className="mt-4 text-content-secondary">
                  Ensure all these vital items are placed in your cabin bag for immediate border control inspection.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "Valid Passport & Visa Stamp",
                  "Original CAS / Form I-20 / LOA",
                  "University Offer & Enrolment Letter",
                  "Tuition & Housing Payment Receipts",
                  "Active Forex Card & Local Cash",
                  "Medical & TB Clearance Certificate",
                  "Official Transcripts & Degrees",
                  "Accommodation Contract & Address",
                ].map((item, idx) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-border-card bg-white p-4.5 shadow-xs"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-caption font-bold text-brand-primary">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-body-small font-medium text-content-primary">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </>
      )}

      {/* =========================================================
          FAQ ACCORDION
      ========================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container size="md">
          <div className="mx-auto max-w-2xl text-center">
            <EyebrowBadge>Student FAQ</EyebrowBadge>
            <h2 className="mt-3 text-content-primary">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-content-secondary">
              Clear answers regarding student accommodations, tenancy safety, and flight preparations.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-border-default bg-surface-subtle/30 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-body-large font-medium text-content-primary pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-content-secondary transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-brand-primary" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-200 ease-in-out px-5 sm:px-6 ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-body-small text-content-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================
          BOTTOM CTA BANNER
      ========================================================== */}
      <section className="bg-surface-neutral py-16 sm:py-20">
        <Container size="lg">
          <div className="relative overflow-hidden rounded-3xl bg-brand-primary px-6 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-accent/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-white">
                Ready for a Seamless Transition Abroad?
              </h2>
              <p className="mt-4 text-body-large text-white/85">
                Lock in verified student accommodation with flexible cancellation and get your pre-departure checklist sorted today.
              </p>
              <div className="mt-8 flex justify-center">
                <LeadCTAButton source="acc_pre_departure_bottom_cta">
                  Book Your Housing &amp; Pre-Departure Call
                </LeadCTAButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export function AccommodationPage() {
  return <AccommodationAndPreDeparturePage />;
}

export function PreDeparturePage() {
  return <AccommodationAndPreDeparturePage />;
}