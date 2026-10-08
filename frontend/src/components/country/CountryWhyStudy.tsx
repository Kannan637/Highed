"use client";

import {
  Building2,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";
import { useState } from "react";
import { Country } from "@/types/country";
import EyebrowBadge from "@/components/ui/EyebrowBadge";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

const features = [
  {
    pill: "Study & Universities",
    title: "Study at Global Universities",
    description:
      "Dubai has become a major international education hub, with branch campuses of leading universities from the UK, Australia, and the US. Students can access internationally recognised programmes while studying in a modern, globally connected city.",
    points: [
      "International university branch campuses",
      "UK, US and Australian degree options",
      "Wide range of undergraduate and postgraduate programmes",
      "Modern campuses with industry-focused learning",
    ],
    icon: Building2,
  },
  {
    pill: "Work & Earnings",
    title: "Build Your Career in Dubai",
    description:
      "Dubai offers students access to a dynamic international business environment across technology, finance, hospitality, engineering, construction, healthcare, and other fast-growing sectors.",
    points: [
      "Access to a global business environment",
      "Opportunities to build professional networks",
      "Strong demand across multiple industries",
      "Career opportunities after graduation",
    ],
    icon: BriefcaseBusiness,
  },
  {
    pill: "Visa & Residency",
    title: "Flexible Visa & Residency Options",
    description:
      "International students can benefit from university-sponsored student visa pathways, while eligible high-achieving graduates may explore longer-term UAE residency options such as the Golden Visa.",
    points: [
      "University-supported student visa process",
      "Dedicated support for visa documentation",
      "Potential long-term residency pathways",
      "Golden Visa opportunities for eligible graduates",
    ],
    icon: GraduationCap,
  },
];

interface CountryWhyStudyProps {
  country?: Country;
}

export default function WhyChooseCountry({
  country,
}: CountryWhyStudyProps = {}) {
  const countryName = country?.name || "Dubai";
  const imageSrc = country?.heroImage || "/images/whychooseus/ChatGPT Image Sep 24, 2026, 12_21_45 PM.webp";

  const [activeFeature, setActiveFeature] = useState(0);

  const activeItem = features[activeFeature];
  const ActiveIcon = activeItem.icon;

  return (
    <section
      className="
        w-full
        bg-surface-neutral/60
        py-16
        sm:py-20
        lg:py-24
        tracking-tight-5
        [letter-spacing:var(--tracking-tight-5)]
        [&_*]:[letter-spacing:var(--tracking-tight-5)]
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          grid-cols-1
          items-stretch
          gap-10
          px-6
          sm:px-10
          lg:grid-cols-[0.85fr_1.15fr]
          lg:gap-12
          xl:grid-cols-[0.9fr_1.1fr]
          xl:gap-16
          lg:px-[80px]
        "
      >
        {/* =====================================================
            LEFT — WHY STUDY
        ===================================================== */}

        <div
          className="
            flex
            h-full
            w-full
            flex-col
            justify-center
            py-2
            lg:py-6
          "
        >
          {/* Badge */}
          <EyebrowBadge className="w-fit">Why Study in {countryName}</EyebrowBadge>

          {/* Heading */}

          <h2
            className="
              max-w-[600px]
              text-brand-primary
            "
          >
            Why do you need to study in{" "}
            <span className="text-brand-accent">{countryName}</span>?
          </h2>

          {/* Intro */}

          <p
            className="
              mt-4
              max-w-[560px]
              text-sm
              leading-relaxed
              text-content-secondary
              sm:text-base
            "
          >
            Discover the academic opportunities, career advantages, and
            residency pathways available to international students choosing{" "}
            {countryName} for higher education.
          </p>

          {/* =================================================
              FEATURE TABS
          ================================================= */}

          <div className="mt-7 w-full">
            <div
              className="
                flex
                w-fit
                max-w-full
                items-center
                gap-1.5
                overflow-x-auto
                rounded-full
                border
                border-border/80
                bg-muted/40
                p-1.5
                shadow-2xs
                scrollbar-none
              "
            >
              {features.map((feature, index) => {
                const isActive = activeFeature === index;

                return (
                  <button
                    key={feature.pill}
                    type="button"
                    onClick={() => setActiveFeature(index)}
                    aria-pressed={isActive}
                    className={`
                      btn-motion
                      inline-flex
                      min-h-9
                      shrink-0
                      cursor-pointer
                      items-center
                      justify-center
                      whitespace-nowrap
                      rounded-full
                      px-4
                      py-2
                      text-xs
                      font-medium
                      sm:text-sm
                      ${isActive
                        ? "bg-[#E93F61] text-white shadow-sm"
                        : "text-content-secondary hover:bg-[#E93F61]/10 hover:text-[#E93F61]"
                      }
                    `}
                  >
                    {feature.pill}
                  </button>
                );
              })}
            </div>
          </div>

          {/* =================================================
              DETAILED INFORMATION CARD
          ================================================= */}

          <article
            className="
              mt-4
              w-full
              rounded-2xl
              border
              border-border/80
              bg-card
              p-5
              shadow-2xs
              sm:p-6
              lg:p-6
            "
          >
            {/* Header */}

            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  size-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#E93F61]/10
                  text-[#E93F61]
                  sm:size-12
                "
              >
                <ActiveIcon
                  aria-hidden="true"
                  className="size-5"
                  strokeWidth={2}
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3
                  className="
                    text-lg
                    font-semibold
                    leading-snug
                    text-foreground
                    sm:text-xl
                  "
                >
                  {activeItem.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-content-secondary
                    sm:text-[15px]
                  "
                >
                  {activeItem.description}
                </p>
              </div>
            </div>

          </article>
        </div>

        {/* =====================================================
            RIGHT — IMAGE BACKGROUND + FORM
        ===================================================== */}

        <div className="relative flex h-full w-full">
          <div
            className="
              relative
              flex
              h-full
              min-h-[620px]
              w-full
              overflow-hidden
              rounded-3xl
              bg-[#253A7B]
              lg:min-h-[640px]
            "
          >
            {/* Background Image */}

            <img
              src={imageSrc}
              alt={`${countryName} study destination`}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            {/* Image Overlay */}

            <div className="absolute inset-0 bg-black/40" />

            {/* Bottom Gradient */}

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                h-2/3
                bg-gradient-to-t
                from-[#12204C]/90
                via-[#12204C]/40
                to-transparent
              "
            />

            {/* =================================================
                FORM
            ================================================= */}

            <div
              className="
                relative
                z-10
                flex
                h-full
                w-full
                items-start
                justify-center
                p-5
                sm:p-7
                lg:p-10
              "
            >
              <div
                className="
                  w-full
                  max-w-[560px]
                  rounded-2xl
                  border
                  border-white/20
                  bg-white
                  p-6
                  sm:p-7
                  lg:p-8
                "
              >
                {/* Form Header */}

                <div className="mb-6">
                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.08em]
                      text-[#E93F61]
                    "
                  >
                    Free Counselling
                  </p>

                  <h3
                    className="
                      mt-1.5
                      text-xl
                      font-semibold
                      leading-tight
                      text-[#253A7B]
                      sm:text-2xl
                    "
                  >
                    Start Your {countryName} Journey
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-[460px]
                      text-sm
                      leading-relaxed
                      text-content-secondary
                    "
                  >
                    Get personalised guidance from our study abroad experts.
                  </p>
                </div>

                {/* Form */}

                <form className="space-y-4">
                  {/* Full Name */}

                  <div>
                    <label
                      htmlFor="study-name"
                      className="
                        mb-1.5
                        block
                        text-sm
                        font-medium
                        text-foreground
                      "
                    >
                      Full Name{" "}
                      <span className="text-xs text-muted-foreground">*</span>
                    </label>

                    <input
                      id="study-name"
                      type="text"
                      placeholder="Enter your name"
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-border
                        bg-background
                        px-4
                        text-sm
                        text-foreground
                        outline-none
                        transition
                        placeholder:text-muted-foreground
                        focus:border-[#253A7B]
                        focus:ring-2
                        focus:ring-[#253A7B]/10
                      "
                    />
                  </div>

                  {/* Mobile */}

                  <div>
                    <label
                      htmlFor="study-phone"
                      className="
                        mb-1.5
                        block
                        text-sm
                        font-medium
                        text-foreground
                      "
                    >
                      Mobile Number{" "}
                      <span className="text-xs text-muted-foreground">*</span>
                    </label>

                    <input
                      id="study-phone"
                      type="tel"
                      placeholder="Enter your mobile number"
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-border
                        bg-background
                        px-4
                        text-sm
                        text-foreground
                        outline-none
                        transition
                        placeholder:text-muted-foreground
                        focus:border-[#253A7B]
                        focus:ring-2
                        focus:ring-[#253A7B]/10
                      "
                    />
                  </div>

                  {/* Study Level */}

                  <div>
                    <label
                      htmlFor="study-level"
                      className="
                        mb-1.5
                        block
                        text-sm
                        font-medium
                        text-foreground
                      "
                    >
                      Study Level
                    </label>

                    <select
                      id="study-level"
                      defaultValue=""
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-border
                        bg-background
                        px-4
                        text-sm
                        text-foreground
                        outline-none
                        focus:border-[#253A7B]
                        focus:ring-2
                        focus:ring-[#253A7B]/10
                      "
                    >
                      <option value="" disabled>
                        Select study level
                      </option>

                      <option value="undergraduate">
                        Undergraduate
                      </option>

                      <option value="postgraduate">
                        Postgraduate
                      </option>

                      <option value="phd">PhD</option>
                    </select>
                  </div>

                  {/* Preferred Destination */}


                  {/* CTA */}

                  <div className="pt-1">
                    <LeadCTAButton
                      source="country_why_study"
                      variant="accent"
                      size="default"
                      className="h-12 w-full"
                    >
                      Get Free Counselling
                    </LeadCTAButton>
                  </div>

                  {/* Privacy */}

                  <p
                    className="
                      text-center
                      text-[11px]
                      leading-relaxed
                      text-muted-foreground
                    "
                  >
                    Your details are safe with us. Our counsellor will contact
                    you shortly.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}