"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  BookOpen,
} from "lucide-react";

import Container from "@/components/ui/Container";
import { useLeadPopup } from "@/hooks/useLeadPopup";
import { Country } from "@/types/country";
import EyebrowBadge from "@/components/ui/EyebrowBadge";
import CounsellingCTA from "@/components/ui/CounsellingCTA";

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
      country: "Study in USA",
      university: "University of Texas at Dallas",
      title: "Full-Time MBA (STEM Designated)",
      description:
        "AACSB-accredited curriculum featuring dual STEM degree options, specialized concentrations, and up to 36 months OPT authorization...",
    },
    {
      country: "Study in Ireland",
      university: "Trinity College Dublin",
      title: "Trinity Full-Time MBA",
      description:
        "Ranked among Europe's top MBA degrees, immersed in Dublin's multinational technology hub with a 2-year post-study work visa...",
    },
    {
      country: "Study in USA",
      university: "Arizona State University",
      title: "Full-Time MBA (W. P. Carey)",
      description:
        "Consistently ranked top-tier for innovation and supply chain management, offering extensive US corporate project partnerships...",
    },
    {
      country: "Study in Germany",
      university: "Frankfurt School of Finance & Management",
      title: "Full-Time MBA",
      description:
        "Triple-crown accredited German MBA with dedicated career tracks into continental European financial and consulting institutions...",
    },
    {
      country: "Study in UK",
      university: "University of Birmingham",
      title: "The Birmingham MBA (Triple Crown)",
      description:
        "AMBA, EQUIS, and AACSB accredited 1-year intensive MBA featuring corporate consultancy projects and London financial recruitment...",
    },
    {
      country: "Study in Canada",
      university: "Rotman School of Management (U of T)",
      title: "Full-Time MBA Programme",
      description:
        "Canada's leading business school delivering integrative thinking, finance labs, and a 3-year post-graduation work permit (PGWP)...",
    },
  ],

  Management: [
    {
      country: "Study in Germany",
      university: "ESMT Berlin",
      title: "Master in Management (MIM)",
      description:
        "Top-ranked European programme emphasizing data-driven business analytics, international consultancies, and European corporate ties...",
    },
    {
      country: "Study in Ireland",
      university: "University College Dublin (Smurfit)",
      title: "MSc in International Management",
      description:
        "CEMS-aligned European business masters connecting candidates directly with global enterprise headquarters across Dublin...",
    },
    {
      country: "Study in USA",
      university: "Northeastern University",
      title: "MS in Global Management",
      description:
        "Practical curriculum emphasizing global enterprise consulting, operational supply strategy, and experiential co-op placements...",
    },
    {
      country: "Study in Germany",
      university: "Munich Business School",
      title: "Master in International Business",
      description:
        "Specialized European management tracks in digital enterprise, consulting, and Bavarian industry collaborations...",
    },
    {
      country: "Study in UK",
      university: "University of Leeds",
      title: "MSc International Business",
      description:
        "World-renowned British business school training leaders in multinational corporate operations and global trade strategy...",
    },
    {
      country: "Study in Australia",
      university: "University of Melbourne",
      title: "Master of Management",
      description:
        "Premier Asia-Pacific business foundation delivering strategic leadership skills alongside Australian post-study work visa rights...",
    },
  ],

  "Data Science": [
    {
      country: "Study in USA",
      university: "Northeastern University",
      title: "MS in Data Science (STEM)",
      description:
        "Comprehensive training in machine learning algorithms, scalable distributed data architectures, and 36-month STEM OPT eligibility...",
    },
    {
      country: "Study in Ireland",
      university: "University College Dublin",
      title: "MSc in Data & Computational Science",
      description:
        "Rigorous quantitative training combining statistical modeling, cloud pipelines, and direct hiring access to Silicon Docks...",
    },
    {
      country: "Study in USA",
      university: "University of Texas at Arlington",
      title: "MS in Applied Data Science",
      description:
        "STEM-designated degree focusing on end-to-end predictive modeling, big data frameworks, and practical industry internships...",
    },
    {
      country: "Study in Germany",
      university: "Technical University of Munich",
      title: "MSc in Data Engineering & Analytics",
      description:
        "Elite German research curriculum focused on high-throughput database systems, distributed algorithms, and mathematical rigor...",
    },
    {
      country: "Study in UK",
      university: "University of Edinburgh",
      title: "MSc in Data Science",
      description:
        "World-renowned UK informatics center delivering foundational knowledge in machine learning, statistical inference, and big data...",
    },
    {
      country: "Study in Canada",
      university: "University of British Columbia",
      title: "Master of Data Science (MDS)",
      description:
        "Intensive 10-month professional degree focused on data workflows, cloud computation, and real-world capstone partner projects...",
    },
  ],

  "AI & ML": [
    {
      country: "Study in USA",
      university: "Arizona State University",
      title: "MS in Artificial Intelligence",
      description:
        "STEM-certified advanced curriculum spanning neural networks, autonomous agents, and scalable generative models...",
    },
    {
      country: "Study in Ireland",
      university: "Trinity College Dublin",
      title: "MSc in Computer Science (Intelligent Systems)",
      description:
        "Specialized master's covering computer vision, deep reinforcement learning, and natural language understanding in Dublin...",
    },
    {
      country: "Study in USA",
      university: "Stevens Institute of Technology",
      title: "MS in Applied Artificial Intelligence",
      description:
        "New York metro area STEM programme delivering cutting-edge training in automated reasoning, computer vision, and robotics...",
    },
    {
      country: "Study in Germany",
      university: "RWTH Aachen University",
      title: "MSc in Data Science & Machine Learning",
      description:
        "Interdisciplinary technical programme fusing mathematical optimization, neural architectures, and industrial AI implementations...",
    },
    {
      country: "Study in UK",
      university: "University of Manchester",
      title: "MSc in Artificial Intelligence",
      description:
        "World-leading research institution offering comprehensive training in symbolic reasoning, machine learning, and cognitive computing...",
    },
    {
      country: "Study in Australia",
      university: "Monash University",
      title: "Master of Artificial Intelligence",
      description:
        "Australia's dedicated AI qualification covering machine learning, deep learning architectures, and modern autonomous robotics...",
    },
  ],

  Engineering: [
    {
      country: "Study in Germany",
      university: "Technical University of Munich",
      title: "MSc in Mechanical & Systems Engineering",
      description:
        "World-class German engineering education in mechatronics, smart automotive systems, and advanced robotics...",
    },
    {
      country: "Study in Ireland",
      university: "University of Limerick",
      title: "MSc in Software Engineering",
      description:
        "Industry-integrated curriculum covering cloud systems, distributed architectures, and microservices for international tech careers...",
    },
    {
      country: "Study in USA",
      university: "San Jose State University",
      title: "MS in Computer Engineering",
      description:
        "Silicon Valley located STEM degree delivering hardware-software co-design foundations with top regional tech placement...",
    },
    {
      country: "Study in Germany",
      university: "RWTH Aachen University",
      title: "MSc in Automotive Engineering",
      description:
        "Leading German automotive credential emphasizing electrification, autonomous vehicle dynamics, and sustainable mobility...",
    },
    {
      country: "Study in UK",
      university: "University of Sheffield",
      title: "MSc in Advanced Mechanical Engineering",
      description:
        "Russell Group degree focusing on computational fluid mechanics, advanced materials, and sustainable energy systems...",
    },
    {
      country: "Study in Canada",
      university: "University of Windsor",
      title: "Master of Applied Computing & Engineering",
      description:
        "Canadian professional master's emphasizing software engineering, embedded systems, and generous 3-year PGWP work permits...",
    },
  ],

  Healthcare: [
    {
      country: "Study in Ireland",
      university: "RCSI University of Medicine and Health Sciences",
      title: "MSc in Healthcare Management",
      description:
        "Dedicated health sciences institution training clinical and corporate leaders in health systems governance and patient safety...",
    },
    {
      country: "Study in Ireland",
      university: "University College Cork",
      title: "MSc in Public Health & Health Informatics",
      description:
        "Gain advanced knowledge in epidemiological analytics, healthcare delivery systems, and preventative health policy...",
    },
    {
      country: "Study in USA",
      university: "Johns Hopkins University",
      title: "Master of Health Administration (MHA)",
      description:
        "Global leader in healthcare education preparing executive managers for hospitals, clinical systems, and biotech enterprises...",
    },
    {
      country: "Study in Germany",
      university: "Charité - Universitätsmedizin Berlin",
      title: "MSc in International Health & Global Systems",
      description:
        "Study at Europe's largest university clinic, mastering disease control strategies, health economics, and global health policy...",
    },
    {
      country: "Study in UK",
      university: "King's College London",
      title: "MSc in Healthcare Leadership & Management",
      description:
        "Renowned London medical institution preparing visionary clinical managers, healthcare economists, and policy advisors...",
    },
    {
      country: "Study in Australia",
      university: "University of Sydney",
      title: "Master of Health Policy & Administration",
      description:
        "Premier Asia-Pacific degree focused on clinical governance, international health financing, and strategic policy reform...",
    },
  ],
};

function getFlag(country: string) {
  if (country.includes("Ireland")) return "🇮🇪";
  if (country.includes("USA")) return "🇺🇸";
  if (country.includes("UK") || country.includes("United Kingdom")) return "🇬🇧";
  if (country.includes("Australia")) return "🇦🇺";
  if (country.includes("Canada")) return "🇨🇦";
  if (country.includes("Germany") || country.includes("Munich") || country.includes("Berlin")) return "🇩🇪";
  if (country.includes("Dubai") || country.includes("UAE")) return "🇦🇪";
  return "🌍";
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
        <h3 className="card-title min-h-[66px] text-content-primary">
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
              btn-motion
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
              btn-motion
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

export default function TopCoursesSection({ country: _country }: { country?: Country } = {}) {
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
    <section className="w-full bg-white text-content-primary tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] [&_*]:[letter-spacing:var(--tracking-tight-5)]">
      <Container
        size="lg"
        className="py-12 sm:py-16"
      >
        {/* =========================
            SECTION HEADER
        ========================== */}
        <header className="mx-auto max-w-[720px] text-center">
          {/* Eyebrow */}
          <EyebrowBadge>Popular Courses</EyebrowBadge>

          {/* Heading */}
          <h2 className="text-brand-primary">
            Top Courses to <span className="text-brand-accent">Study Abroad</span>
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
              btn-motion
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              text-brand-accent
              hover:bg-brand-accent/10
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
              bg-surface-subtle
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
                    btn-motion
                    shrink-0
                    rounded-full
                    px-[17px]
                    py-[11px]
                    text-body-small
                    font-medium
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
              btn-motion
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              text-brand-accent
              hover:bg-brand-accent/10
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
              btn-motion
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              ${canScrollPrev
                ? "border-border-card bg-white text-content-primary shadow-sm hover:border-brand-primary hover:bg-brand-primary hover:text-white cursor-pointer"
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
              btn-motion
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              ${canScrollNext
                ? "border-border-card bg-white text-content-primary shadow-sm hover:border-brand-primary hover:bg-brand-primary hover:text-white cursor-pointer"
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
              btn-motion
              inline-flex
              items-center
              gap-2
              text-btn
              font-medium
              text-brand-accent
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
        <CounsellingCTA />
      </Container>
    </section>
  );
}
