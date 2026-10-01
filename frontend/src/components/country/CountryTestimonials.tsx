import { Card, CardContent } from "@/components/ui/Card";
import { Star, ArrowRight } from "lucide-react";
import EyebrowBadge from "@/components/ui/EyebrowBadge";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import Link from "next/link";

const testimonials = [
  {
    text: "HighEd guided me from GRE prep to getting my student visa approved without any stress. Highly recommended!",
    name: "Karthik Subramanian",
    fallback: "KS",
    degree: "MSc Computer Science, Top UK University",
    gradient: "from-brand-primary to-indigo-900",
  },
  {
    text: "Securing a 50% tuition scholarship seemed impossible until HighEd restructured my SOP and university applications.",
    name: "Pooja Ramakrishnan",
    fallback: "PR",
    degree: "MBA, Trinity College Dublin",
    gradient: "from-brand-accent to-rose-800",
  },
  {
    text: "From selecting universities to education loan disbursement, their team was beside me at every single step.",
    name: "Anand Venkatesh",
    fallback: "AV",
    degree: "MEng Software Engineering, Canada",
    gradient: "from-blue-700 to-brand-primary",
  },
  {
    text: "The visa mock interviews gave me immense confidence. Cleared my visa on the very first attempt!",
    name: "Deepika Sundaram",
    fallback: "DS",
    degree: "MS Data Analytics, USA",
    gradient: "from-rose-700 to-brand-accent",
  },
  {
    text: "Transparent, honest, and highly professional counsellors. Best study abroad consultancy in Tamil Nadu.",
    name: "Manoj Kumar",
    fallback: "MK",
    degree: "Master of Management, Australia",
    gradient: "from-indigo-800 to-brand-primary",
  },
  {
    text: "They helped me compare public universities with zero tuition fees and handled all document translations.",
    name: "Sowmya Natarajan",
    fallback: "SN",
    degree: "MSc Automotive Systems, Germany",
    gradient: "from-brand-accent to-amber-700",
  },
];

export default function CountryTestimonials() {
  return (
    <section className="w-full bg-surface-subtle px-4 py-20 md:px-8 md:py-24 tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] [&_*]:[letter-spacing:var(--tracking-tight-5)]">
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
                hover:border-brand-accent/30
                hover:shadow-none
              "
            >
              <CardContent className="relative z-10 flex h-full min-h-[330px] flex-col p-7 md:p-8">

                {/* Rating (High contrast Gold Stars) */}
                <div
                  role="img"
                  className="mb-6 flex items-center gap-1"
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

                {/* Testimonial */}
                <p className="flex-1 text-body-large text-content-primary leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Student Avatar */}
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

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row lg:mt-8">
          <LeadCTAButton
            source="real_stories_bottom"
            className="w-fit max-w-[280px] sm:w-auto sm:max-w-none"
          >
            Book Free Counselling
          </LeadCTAButton>

          <Link
            href="/success-stories"
            aria-label="View all student success stories"
            className="
              group
              inline-flex
              h-12
              w-fit
              max-w-[280px]
              sm:w-auto
              sm:max-w-none
              cursor-pointer
              items-center
              justify-center
              gap-2
              rounded-full
              px-6
              text-btn
              font-semibold
              text-brand-primary
              transition-all
              duration-200
              hover:text-brand-accent
              hover:bg-brand-primary/5
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-brand-accent
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
