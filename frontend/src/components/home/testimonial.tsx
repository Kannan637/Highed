
"use client";

import { Card, CardContent } from "@/components/ui/Card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Star, ArrowRight } from "lucide-react";
import EyebrowBadge from "@/components/ui/EyebrowBadge";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import Link from "next/link";

const testimonials = [
  {
    text: "Setting up smart spend limits and approvals took minutes — now our team moves faster.",
    name: "Guillermo Rauch",
    avatar: "https://github.com/rauchg.png",
    fallback: "GR",
  },
  {
    text: "Love how fast we integrated our banks, wallets, and started tracking expenses in real-time.",
    name: "Lee Robinson",
    avatar: "https://github.com/leerob.png",
    fallback: "LR",
  },
  {
    text: "Audit prep went from painful to painless. This tool just works and saves hours every week.",
    name: "Dan Abramov",
    avatar: "https://github.com/gaearon.png",
    fallback: "DA",
  },
  {
    text: "We automated multi-step approvals and finally stopped chasing down manual receipts.",
    name: "Kent C. Dodds",
    avatar: "https://github.com/kentcdodds.png",
    fallback: "KD",
  },
  {
    text: "Smart controls, simple interface. It’s the only tool our finance ops actually enjoy using.",
    name: "Evan You",
    avatar: "https://github.com/yyx990803.png",
    fallback: "EY",
  },
  {
    text: "Vendor payments used to be messy. Now we track, approve, and sync everything instantly.",
    name: "Theo Browne",
    avatar: "https://github.com/t3dotgg/t3dotgg.png",
    fallback: "TB",
  },
];

export default function Testimonials2() {
  return (
    <section className="w-full bg-[#F5F5F9] px-4 py-20 font-sans md:px-8 md:py-24 tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] [&_*]:[letter-spacing:var(--tracking-tight-5)]">
      <div className="mx-auto max-w-7xl text-center">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl">
          <EyebrowBadge>Student Success Stories</EyebrowBadge>

          <h2 className="text-content-primary">
            Trusted by students who chose to study abroad
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-content-secondary">
            Real experiences from students who received guidance throughout
            their study abroad journey.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="
                group
                relative
                z-0
                h-full
                overflow-hidden
                rounded-[24px]
                border
                border-[#253A7B]/10
                bg-white
                p-0
                text-left
                shadow-none
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#E93F61]/25
                hover:shadow-none
              "
            >
              <CardContent className="relative z-10 flex h-full min-h-[330px] flex-col p-7 md:p-8">

                {/* Rating */}
                <div
                  className="mb-6 flex items-center gap-1"
                  aria-label="5 out of 5 stars"
                >
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-[17px] w-[17px] fill-[#E93F61] text-[#E93F61]"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="flex-1 text-body-large text-content-primary">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Student */}
                <div className="mt-8 flex items-center gap-3">
                  <Avatar className="h-10 w-10 rounded-full border border-brand-primary/10">
                    <AvatarImage
                      src={t.avatar}
                      alt={t.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-brand-primary text-xs font-medium text-white">
                      {t.fallback}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0">
                    <p className="truncate text-body-small font-medium text-content-primary">
                      {t.name}
                    </p>

                    <p className="mt-0.5 text-caption text-content-secondary">
                      Study Abroad Student
                    </p>
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-8">
          <LeadCTAButton source="real_stories_bottom">
            Book Free Counselling
          </LeadCTAButton>

          <Link
            href="/success-stories"
            aria-label="View all student success stories"
            className="
                            group
                            inline-flex
                            h-12
                            cursor-pointer
                            items-center
                            gap-2
                            rounded-full
                            px-6
                            text-sm
                            font-semibold
                            text-[#E93F61]
                            transition-all
                            duration-200
                            hover:bg-[#E93F61]/10
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-[#E93F61]
                            focus-visible:ring-offset-2
                        "
          >
            <span>View All Stories</span>

            <ArrowRight
              size={18}
              strokeWidth={2.2}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}

