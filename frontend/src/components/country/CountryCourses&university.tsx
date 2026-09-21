"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Phone,
  BookOpen,
} from "lucide-react";

import Container from "@/components/ui/Container";
import { useLeadPopup } from "@/hooks/useLeadPopup";

type Course = {
  country: string;
  university: string;
  title: string;
  description: string;
};

const categories = [
  "MBA",
  "Management",
  "Data Science",
  "AI & ML",
  "Engineering",
  "Healthcare",
];

const courses: Record<string, Course[]> = {
  MBA: [
    {
      country: "Study in Finland",
      university: "International Business School",
      title: "MBA in Strategic Data Driven Management",
      description:
        "Accredited by British Accreditation Council (BAC) in MBA in Strategic Data Driven Management...",
    },
    {
      country: "Study in Ireland",
      university: "Dublin Business School",
      title: "MBA in Global Business & Leadership",
      description:
        "Develop essential leadership acumen and strategic perspective for competitive international markets...",
    },
    {
      country: "Study in San Francisco, USA",
      university: "University of San Francisco",
      title: "MBA in Innovation & Tech Strategy",
      description:
        "Silicon Valley focused programme preparing leaders for high-growth ventures and digital transformation...",
    },
    {
      country: "Study in Germany",
      university: "Munich Business School",
      title: "Executive MBA in Digital Transformation",
      description:
        "Master business management frameworks alongside industry 4.0 paradigms and European corporate strategy...",
    },
    {
      country: "Study in UK",
      university: "University of Leeds",
      title: "MBA in International Business Strategy",
      description:
        "Triple-accredited UK MBA delivering robust consulting skills, global immersion, and senior executive readiness...",
    },
    {
      country: "Study in Canada",
      university: "Rotman School of Management",
      title: "International MBA in Financial Management",
      description:
        "Pioneering curriculum combining integrative thinking, financial modelling, and global career mobility...",
    },
  ],

  Management: [
    {
      country: "Study in Finland",
      university: "International Business School",
      title: "MSc in International Management",
      description:
        "Build advanced management skills with a globally focused business programme...",
    },
    {
      country: "Study in Ireland",
      university: "Trinity College Dublin",
      title: "MSc in Business Management",
      description:
        "Develop strategic business knowledge and international management expertise with European industry links...",
    },
    {
      country: "Study in San Francisco, USA",
      university: "San Francisco State University",
      title: "Master of Global Management",
      description:
        "Prepare for leadership roles with a practical, internationally focused corporate management curriculum...",
    },
    {
      country: "Study in Germany",
      university: "ESMT Berlin",
      title: "Master in Management & Strategic Operations",
      description:
        "Leading German programme emphasizing corporate consulting, analytical decision-making, and supply agility...",
    },
    {
      country: "Study in UK",
      university: "University of Manchester",
      title: "MSc in International Operations Management",
      description:
        "Equip yourself to navigate global value chains, strategic procurement, and cross-border enterprise leadership...",
    },
    {
      country: "Study in Australia",
      university: "University of Melbourne",
      title: "Master of Management & Organizational Change",
      description:
        "Accelerate your career trajectory across the Asia-Pacific region with premier management pedagogy...",
    },
  ],

  "Data Science": [
    {
      country: "Study in Finland",
      university: "University of Helsinki",
      title: "MSc in Data Science & Big Data",
      description:
        "Learn advanced analytics, machine learning, scalable data architectures and data-driven decision making...",
    },
    {
      country: "Study in Ireland",
      university: "University College Dublin",
      title: "MSc Data Analytics & Visualization",
      description:
        "Develop practical expertise in modern data analytics, statistical modelling, and business intelligence...",
    },
    {
      country: "Study in San Francisco, USA",
      university: "San Francisco State University",
      title: "MS in Applied Data Science",
      description:
        "Build industry-ready skills in data pipelines, deep learning foundations, and intelligent automated systems...",
    },
    {
      country: "Study in Germany",
      university: "Technical University of Munich",
      title: "MSc in Data Engineering & Analytics",
      description:
        "World-class German curriculum focused on high-throughput database systems, distributed algorithms, and math...",
    },
    {
      country: "Study in UK",
      university: "University of Edinburgh",
      title: "MSc in Data Science & AI Systems",
      description:
        "Study at Europe's leading informatics powerhouse with deep roots in natural computing and predictive models...",
    },
    {
      country: "Study in Canada",
      university: "University of British Columbia",
      title: "Master of Data Science (MDS)",
      description:
        "Accelerated professional master's focused on real-world capstones, statistical inference, and software...",
    },
  ],

  "AI & ML": [
    {
      country: "Study in Finland",
      university: "Aalto University",
      title: "MSc in Artificial Intelligence",
      description:
        "Explore modern artificial intelligence technologies, autonomous agents, and intelligent applications...",
    },
    {
      country: "Study in Ireland",
      university: "Trinity College Dublin",
      title: "MSc in Machine Learning & Neural Nets",
      description:
        "Gain practical expertise in machine learning algorithms, deep architectures, and computer vision...",
    },
    {
      country: "Study in San Francisco, USA",
      university: "Northeastern University",
      title: "MS in AI & Machine Learning",
      description:
        "Prepare for high-demand Bay Area careers in large language models, generative AI, and intelligent software...",
    },
    {
      country: "Study in Germany",
      university: "RWTH Aachen",
      title: "MSc in Applied Artificial Intelligence",
      description:
        "Interdisciplinary technical programme fusing neural networks, robotics perception, and industrial ML...",
    },
    {
      country: "Study in UK",
      university: "Imperial College London",
      title: "MSc in Artificial Intelligence & Robotics",
      description:
        "Elite UK master's exploring advanced reinforcement learning, autonomous agents, and mathematical foundations...",
    },
    {
      country: "Study in Australia",
      university: "Monash University",
      title: "Master of Artificial Intelligence",
      description:
        "Industry-embedded Australian qualification in ethical AI, computer vision, and cognitive computing...",
    },
  ],

  Engineering: [
    {
      country: "Study in Finland",
      university: "LUT University",
      title: "MSc in Engineering Management",
      description:
        "Combine engineering expertise with advanced leadership, green technology, and operational management skills...",
    },
    {
      country: "Study in Ireland",
      university: "University of Limerick",
      title: "MSc in Software Engineering",
      description:
        "Develop advanced software engineering skills, microservices architecture, and cloud systems for tech careers...",
    },
    {
      country: "Study in San Francisco, USA",
      university: "San Jose State University",
      title: "MS in Computer Engineering",
      description:
        "Build strong hardware-software co-design foundations for careers across modern computing and semiconductor tech...",
    },
    {
      country: "Study in Germany",
      university: "TU Munich",
      title: "MSc in Systems & Automotive Engineering",
      description:
        "Cutting-edge German engineering curriculum covering mechatronics, smart mobility, and autonomous controls...",
    },
    {
      country: "Study in UK",
      university: "University of Sheffield",
      title: "MSc in Advanced Mechanical Engineering",
      description:
        "Renowned UK engineering degree focusing on computational mechanics, aerodynamics, and composite materials...",
    },
    {
      country: "Study in Canada",
      university: "McGill University",
      title: "MEng in Sustainable Engineering & Infrastructure",
      description:
        "Canadian credential emphasizing renewable systems, life-cycle analysis, and smart municipal networks...",
    },
  ],

  Healthcare: [
    {
      country: "Study in Finland",
      university: "Arcada University",
      title: "MSc in Healthcare Management",
      description:
        "Develop the skills required to lead and optimize modern European healthcare organisations and digital health...",
    },
    {
      country: "Study in Ireland",
      university: "University College Cork",
      title: "MSc in Public Health & Health Informatics",
      description:
        "Gain advanced knowledge in healthcare systems, preventative policy, epidemiological analytics, and data...",
    },
    {
      country: "Study in San Francisco, USA",
      university: "Golden Gate University",
      title: "Master of Health Administration (MHA)",
      description:
        "Prepare for executive leadership positions across hospitals, clinical systems, and modern biotech organizations...",
    },
    {
      country: "Study in Germany",
      university: "Charité - Universitätsmedizin Berlin",
      title: "MSc in International Health & Global Systems",
      description:
        "Study at Europe's largest university clinic, mastering disease control, health economics, and global health policy...",
    },
    {
      country: "Study in UK",
      university: "King's College London",
      title: "MSc in Healthcare Leadership & Management",
      description:
        "Renowned London medical school programme developing visionary clinical executives and healthcare consultants...",
    },
    {
      country: "Study in Australia",
      university: "University of Sydney",
      title: "Master of Health Policy & Administration",
      description:
        "Premier Asia-Pacific degree focused on clinical governance, health financing, and strategic policy reform...",
    },
  ],
};

function getFlag(country: string) {
  if (country.includes("Finland")) return "🇫🇮";
  if (country.includes("Ireland")) return "🇮🇪";
  if (country.includes("San Francisco") || country.includes("USA"))
    return "🇺🇸";
  if (country.includes("UK") || country.includes("United Kingdom"))
    return "🇬🇧";
  if (country.includes("Australia")) return "🇦🇺";
  if (country.includes("Canada")) return "🇨🇦";
  if (
    country.includes("Germany") ||
    country.includes("Munich") ||
    country.includes("Berlin")
  )
    return "🇩🇪";

  return "🌎";
}

function ImagePlaceholder() {
  return (
    <div
      className="
        flex
        h-full
        w-full
        flex-col
        items-center
        justify-center
        bg-gradient-to-br
        from-[#f3f4f7]
        to-[#e2e4e9]
        text-brand-primary/40
      "
      aria-label="Course image placeholder"
    >
      <BookOpen size={48} strokeWidth={1.5} />
    </div>
  );
}

function CourseCard({ course }: { course: Course }) {
  const { openLeadPopup } = useLeadPopup();

  return (
    <article
      data-course-card
      className="
        group
        flex
        w-[85vw]
        max-w-[340px]
        shrink-0
        snap-start
        min-w-0
        flex-col
        overflow-hidden
        rounded-[22px]
        border
        border-border-card
        bg-white
        sm:w-[calc(50%-10px)]
        sm:max-w-none
        lg:w-[calc((100%-48px)/3)]
      "
    >
      {/* Image */}
      <div className="relative aspect-[1.83/1] overflow-hidden">
        <ImagePlaceholder />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-[18px] pb-4 pt-4">
        {/* University */}
        <div className="mb-2.5 flex items-center gap-1.5">
          <span className="text-[14px] leading-none">
            {getFlag(course.country)}
          </span>

          <span className="text-body-small font-medium text-content-primary">
            {course.university}
          </span>
        </div>

        {/* Title */}
        <h3
          className="
            min-h-[66px]
            font-heading
            font-normal
            text-h4
            text-content-primary
          "
        >
          {course.title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-3
            line-clamp-2
            min-h-[44px]
            text-body-small
            text-content-secondary
          "
        >
          {course.description}
        </p>

        {/* Card Actions */}
        <div className="mt-auto flex items-center gap-3 pt-4">
          {/* Download Brochure */}
          <button
            type="button"
            onClick={() =>
              openLeadPopup({
                source: "course_brochure",
              })
            }
            className="
              flex
              h-[47px]
              flex-1
              items-center
              justify-center
              gap-2.5
              rounded-full
              border
              border-brand-accent
              bg-white
              px-4
              text-btn
              font-medium
              text-brand-accent
              transition-all
              duration-200
              hover:bg-brand-accent
              hover:text-white
            "
          >
            <span>Download Brochure</span>

            <ArrowDownToLine
              size={18}
              strokeWidth={2.2}
            />
          </button>

          {/* Arrow */}
          <button
            type="button"
            onClick={() =>
              openLeadPopup({
                source: "course_details",
              })
            }
            aria-label={`View ${course.title}`}
            className="
              group/arrow
              flex
              h-[47px]
              w-[47px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-brand-primary
              text-white
              transition-all
              duration-200
              hover:translate-x-0.5
              hover:bg-brand-accent
            "
          >
            <ArrowRight
              size={19}
              strokeWidth={2.2}
              className="
                transition-transform
                duration-200
                group-hover/arrow:translate-x-0.5
              "
            />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function TopCoursesSection({ country }: { country?: any } = {}) {
  const { openLeadPopup } = useLeadPopup();

  const [activeCategory, setActiveCategory] = useState("MBA");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const activeCourses = courses[activeCategory] || [];
  const activeIndex = categories.indexOf(activeCategory);

  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollPrev(scrollLeft > 10);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 10);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    const observer = new ResizeObserver(checkScroll);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
      observer.disconnect();
    };
  }, [checkScroll, activeCategory]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeCategory]);

  const scrollCarousel = (direction: "prev" | "next") => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>("[data-course-card]");
    const cardWidth = firstCard?.offsetWidth || el.clientWidth * 0.85;
    const gap = window.innerWidth >= 1024 ? 24 : 20;
    const scrollAmount = cardWidth + gap;

    el.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const previousCategory = () => {
    const nextIndex =
      activeIndex === 0
        ? categories.length - 1
        : activeIndex - 1;

    setActiveCategory(categories[nextIndex]);
  };

  const nextCategory = () => {
    const nextIndex =
      activeIndex === categories.length - 1
        ? 0
        : activeIndex + 1;

    setActiveCategory(categories[nextIndex]);
  };

  return (
    <section className="w-full bg-white text-content-primary">
      <Container
        size="lg"
        className="py-12 sm:py-16"
      >
        {/* =========================
            SECTION HEADER
        ========================== */}
        <header className="mx-auto max-w-[720px] text-center">
          {/* Eyebrow */}
          <div
            className="
              mx-auto
              mb-5
              flex
              w-fit
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#E93E60]
              px-6
              py-3
            "
          >
            <span className="h-[7px] w-[7px] rounded-full bg-white" />

            <span
              className="
                text-[14px]
                font-medium
                tracking-[-0.1px]
                text-white
              "
            >
              Popular Courses
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-h2 font-normal text-content-primary">
            Top Courses to Study
            <br />
            Abroad
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-7
              max-w-[570px]
              text-body
              text-content-secondary
            "
          >
            High-demand programmes with excellent ROI,
            global job prospects, and pathways to
            permanent residency.
          </p>
        </header>

        {/* =========================
            CATEGORY NAVIGATION
        ========================== */}
        <div className="mt-11 flex items-center justify-center gap-3">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={previousCategory}
            aria-label="Previous course category"
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              text-brand-accent
              transition-colors
              hover:bg-[#fff0f3]
            "
          >
            <ArrowLeft
              size={21}
              strokeWidth={2.2}
            />
          </button>

          {/* Category Pills */}
          <div
            className="
              flex
              max-w-full
              items-center
              gap-1
              overflow-x-auto
              rounded-full
              border
              border-border-default
              bg-[#F5F5F9]
              p-1.5
              scrollbar-none
            "
          >
            {categories.map((category) => {
              const isActive =
                category === activeCategory;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  className={`
                    shrink-0
                    rounded-full
                    px-[17px]
                    py-[11px]
                    text-body-small
                    font-medium
                    transition-all
                    duration-200
                    ${isActive
                      ? "bg-brand-accent text-white"
                      : "text-brand-primary hover:bg-surface-subtle"
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={nextCategory}
            aria-label="Next course category"
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              text-brand-accent
              transition-colors
              hover:bg-[#fff0f3]
            "
          >
            <ArrowRight
              size={21}
              strokeWidth={2.2}
            />
          </button>
        </div>

        {/* =========================
            COURSE CARDS CAROUSEL
        ========================== */}
        <div
          ref={scrollContainerRef}
          tabIndex={0}
          role="region"
          aria-label={`${activeCategory} courses carousel`}
          className="
            mt-11
            flex
            gap-5
            overflow-x-auto
            scrollbar-none
            snap-x
            snap-mandatory
            scroll-smooth
            pb-2
            pt-2
            
            px-0.5
            focus:outline-none
            lg:gap-6
          "
        >
          {activeCourses.map((course, index) => (
            <CourseCard
              key={`${activeCategory}-${index}`}
              course={course}
            />
          ))}
        </div>

        {/* =========================
            CAROUSEL NAVIGATION (LEFT & RIGHT ARROWS BELOW CARDS)
        ========================== */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => scrollCarousel("prev")}
            disabled={!canScrollPrev}
            aria-label="Previous courses"
            className={`
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              transition-all
              duration-200
              ${canScrollPrev
                ? "border-border-card bg-white text-content-primary shadow-sm hover:border-brand-primary hover:bg-brand-primary hover:text-white active:scale-95 cursor-pointer"
                : "border-border-card/50 bg-neutral-100 text-neutral-300 cursor-not-allowed opacity-50"
              }
            `}
          >
            <ArrowLeft
              size={20}
              strokeWidth={2.2}
            />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => scrollCarousel("next")}
            disabled={!canScrollNext}
            aria-label="Next courses"
            className={`
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              transition-all
              duration-200
              ${canScrollNext
                ? "border-border-card bg-white text-content-primary shadow-sm hover:border-brand-primary hover:bg-brand-primary hover:text-white active:scale-95 cursor-pointer"
                : "border-border-card/50 bg-neutral-100 text-neutral-300 cursor-not-allowed opacity-50"
              }
            `}
          >
            <ArrowRight
              size={20}
              strokeWidth={2.2}
            />
          </button>
        </div>

        {/* =========================
            VIEW ALL
        ========================== */}
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            className="
              inline-flex
              items-center
              gap-2
              text-btn
              font-medium
              text-brand-accent
              transition-all
              hover:gap-3
            "
          >
            <span>
              View All {activeCategory} Courses
            </span>

            <ArrowRight
              size={18}
              strokeWidth={2.2}
            />
          </button>
        </div>

        {/* =========================
            COUNSELLING CTA
        ========================== */}
        <div
          className="
            mt-9
            flex
            flex-col
            gap-6
            rounded-[22px]
            bg-brand-primary
            px-6
            py-5
            sm:px-8
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:px-24
          "
        >
          {/* Left Content */}
          <div className="flex items-center gap-5">
            {/* Icon */}
            <div
              className="
                flex
                h-[80px]
                w-[80px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white
              "
            >
              <GraduationCap
                size={38}
                strokeWidth={1.8}
                className="text-brand-primary"
              />
            </div>

            {/* Text */}
            <div>
              <h3
                className="
                  font-heading
                  font-normal
                  text-h4
                  text-white
                "
              >
                Not sure which course fits your
                profile?
              </h3>

              <p
                className="
                  mt-1.5
                  max-w-[610px]
                  text-body-small
                  text-content-on-primary
                  sm:text-body
                "
              >
                Our counsellors will analyse your
                academics, budget & career goals to
                recommend the perfect programme.
              </p>
            </div>
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={() =>
              openLeadPopup({
                source: "course_counselling",
              })
            }
            className="
              group
              flex
              h-[52px]
              shrink-0
              items-center
              justify-between
              gap-5
              rounded-full
              bg-brand-accent
              pl-5
              pr-2
              text-btn
              font-medium
              text-white
              transition-all
              duration-200
              hover:scale-[1.02]
              hover:bg-brand-accent-hover
            "
          >
            <span>Book Free Counselling</span>

            <span
              className="
                flex
                h-[38px]
                w-[38px]
                items-center
                justify-center
                rounded-full
                bg-white
                text-content-primary
              "
            >
              <Phone
                size={17}
                fill="currentColor"
                strokeWidth={1.5}
              />
            </span>
          </button>
        </div>
      </Container>
    </section>
  );
}
