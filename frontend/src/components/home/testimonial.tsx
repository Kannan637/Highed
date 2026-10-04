import { Card, CardContent } from "@/components/ui/Card";
import { Star, ArrowRight } from "lucide-react";
import EyebrowBadge from "@/components/ui/EyebrowBadge";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import Link from "next/link";

const testimonials = [
  {
    text: "HighEd guided me from GRE prep to getting my UK student visa approved without any stress. Highly recommended!",
    name: "Karthik Subramanian",
    fallback: "KS",
    degree: "MSc Computer Science, University of Leeds",
    destination: "UK",
    intake: "Fall 2026",
    gradient: "from-brand-primary to-indigo-900",
  },
  {
    text: "Securing a 50% tuition scholarship seemed impossible until HighEd restructured my SOP and university applications.",
    name: "Pooja Ramakrishnan",
    fallback: "PR",
    degree: "MBA, Trinity College Dublin",
    destination: "Ireland",
    intake: "Fall 2026",
    gradient: "from-brand-accent to-rose-800",
  },
  {
    text: "From selecting universities in Canada to education loan disbursement, their team was beside me at every single step.",
    name: "Anand Venkatesh",
    fallback: "AV",
    degree: "MEng Software Engineering, University of Windsor",
    destination: "Canada",
    intake: "Fall 2026",
    gradient: "from-blue-700 to-brand-primary",
  },
  {
    text: "The visa mock interviews gave me immense confidence. Cleared my US F-1 visa in the first attempt in Chennai!",
    name: "Deepika Sundaram",
    fallback: "DS",
    degree: "MS Data Analytics, Northeastern University",
    destination: "USA",
    intake: "Fall 2026",
    gradient: "from-rose-700 to-brand-accent",
  },
  {
    text: "Transparent, honest, and highly professional counsellors for Coimbatore students. Best study abroad guidance by far.",
    name: "Manoj Kumar",
    fallback: "MK",
    degree: "Master of Management, University of Melbourne",
    destination: "Australia",
    intake: "Feb 2026",
    gradient: "from-indigo-800 to-brand-primary",
  },
  {
    text: "They helped me compare German public universities with zero tuition fees and handled all document translations.",
    name: "Sowmya Natarajan",
    fallback: "SN",
    degree: "MSc Automotive Systems, RWTH Aachen",
    destination: "Germany",
    intake: "Winter 2026",
    gradient: "from-brand-accent to-amber-700",
  },
];

export default function Testimonials2() {
  return (
    <section className="w-full bg-[#F5F5F9] px-4 py-20 font-sans md:px-8 md:py-24 tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] [&_*]:[letter-spacing:var(--tracking-tight-5)]">
      <div className="mx-auto max-w-7xl text-center">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl">
          <EyebrowBadge>Student Success Stories</EyebrowBadge>

          <h2 className="text-brand-primary">
            Trusted by students who chose to <span className="text-brand-accent">study abroad</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-content-secondary">
            Real experiences from students who received guidance throughout
            their study abroad journey.
          </p>
        </div>

        {/* Testimonials Grid */}
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
                hover:border-brand-accent/30
                hover:shadow-none
              "
            >
              <CardContent className="relative z-10 flex h-full min-h-[330px] flex-col p-7 md:p-8">

                {/* Rating & Destination/Intake Tag */}
                <div className="mb-5 flex items-center justify-between gap-2">
                  <div
                    role="img"
                    className="flex items-center gap-1"
                    aria-label="5 out of 5 stars"
                  >
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-[17px] w-[17px] fill-amber-400 text-amber-500"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>

                  <span className="rounded-full bg-brand-primary/5 px-2.5 py-0.5 text-[11px] font-semibold text-brand-primary">
                    {t.destination} • {t.intake}
                  </span>
                </div>

                {/* Testimonial */}
                <p className="flex-1 text-body-large text-content-primary leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Student Avatar & Metadata (Zero third-party network requests) */}
                <div className="mt-8 flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-white font-semibold text-sm shadow-xs`}
                    aria-hidden="true"
                  >
                    {t.fallback}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-body-small font-semibold text-content-primary">
                      {t.name}
                    </p>

                    <p className="mt-0.5 truncate text-caption text-content-secondary">
                      {t.degree}
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
              btn-motion
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
              text-brand-primary
              hover:text-brand-accent
              hover:bg-brand-primary/5
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
