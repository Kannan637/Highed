"use client";

import { useState } from "react";
import {
    ArrowDownToLine,
    ArrowLeft,
    ArrowRight,
    GraduationCap,
    Phone,
    Plane,
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
            university: "International Business School",
            title: "MBA IBM at XAMK Finland",
            description:
                "Accredited by British Accreditation Council (BAC) in MBA in Strategic Data Driven Management...",
        },
        {
            country: "Study in San Francisco",
            university: "International Business School",
            title: "MBA in Strategic Data Driven Management",
            description:
                "Accredited by British Accreditation Council (BAC) in MBA in Strategic Data Driven Management...",
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
            university: "International Business School",
            title: "MSc in Business Management",
            description:
                "Develop strategic business knowledge and international management expertise...",
        },
        {
            country: "Study in San Francisco",
            university: "International Business School",
            title: "Master of Global Management",
            description:
                "Prepare for leadership roles with a practical, internationally focused curriculum...",
        },
    ],

    "Data Science": [
        {
            country: "Study in Finland",
            university: "International Business School",
            title: "MSc in Data Science",
            description:
                "Learn advanced analytics, machine learning and data-driven decision making...",
        },
        {
            country: "Study in Ireland",
            university: "International Business School",
            title: "MSc Data Analytics",
            description:
                "Develop practical expertise in modern data analytics and business intelligence...",
        },
        {
            country: "Study in San Francisco",
            university: "International Business School",
            title: "MS in Applied Data Science",
            description:
                "Build industry-ready skills in data science, analytics and intelligent systems...",
        },
    ],

    "AI & ML": [
        {
            country: "Study in Finland",
            university: "International Business School",
            title: "MSc in Artificial Intelligence",
            description:
                "Explore modern artificial intelligence technologies and intelligent applications...",
        },
        {
            country: "Study in Ireland",
            university: "International Business School",
            title: "MSc in Machine Learning",
            description:
                "Gain practical expertise in machine learning algorithms and intelligent systems...",
        },
        {
            country: "Study in San Francisco",
            university: "International Business School",
            title: "MS in AI & Machine Learning",
            description:
                "Prepare for high-demand careers in artificial intelligence and machine learning...",
        },
    ],

    Engineering: [
        {
            country: "Study in Finland",
            university: "International Business School",
            title: "MSc in Engineering Management",
            description:
                "Combine engineering expertise with advanced leadership and management skills...",
        },
        {
            country: "Study in Ireland",
            university: "International Business School",
            title: "MSc in Software Engineering",
            description:
                "Develop advanced software engineering skills for global technology careers...",
        },
        {
            country: "Study in San Francisco",
            university: "International Business School",
            title: "MS in Computer Engineering",
            description:
                "Build strong technical foundations for careers across modern computing industries...",
        },
    ],

    Healthcare: [
        {
            country: "Study in Finland",
            university: "International Business School",
            title: "MSc in Healthcare Management",
            description:
                "Develop the skills required to manage modern healthcare organisations...",
        },
        {
            country: "Study in Ireland",
            university: "International Business School",
            title: "MSc in Public Health",
            description:
                "Gain advanced knowledge in healthcare systems, policy and population health...",
        },
        {
            country: "Study in San Francisco",
            university: "International Business School",
            title: "Master of Health Administration",
            description:
                "Prepare for leadership positions across healthcare and health services...",
        },
    ],
};

function getFlag(country: string) {
    if (country.includes("Finland")) return "🇫🇮";
    if (country.includes("Ireland")) return "🇮🇪";
    if (country.includes("San Francisco") || country.includes("USA")) return "🇺🇸";
    if (country.includes("UK") || country.includes("United Kingdom")) return "🇬🇧";
    if (country.includes("Australia")) return "🇦🇺";
    if (country.includes("Canada")) return "🇨🇦";
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
            className="
        group
        col-span-4
        sm:col-span-2
        lg:col-span-4
        flex
        min-w-0
        flex-col
        overflow-hidden
        rounded-[22px]
        border
        border-border-card
        bg-white
      "
        >
            {/* Image */}
            <div className="relative aspect-[1.83/1] overflow-hidden">
                <ImagePlaceholder />

                {/* Country Badge */}
                <div
                    className="
            absolute
            left-4
            top-4
            inline-flex
            items-center
            gap-2
            rounded-[12px]
            bg-brand-primary
            px-4
            py-2.5
            text-body-small
            font-medium
            text-white
            shadow-sm
          "
                >
                    <Plane size={16} strokeWidth={2.2} />
                    <span>{course.country}</span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col px-[18px] pb-3 pt-4">
                {/* University */}
                <div className="mb-2.5 flex items-center gap-1.5">
                    <span className="text-[14px] leading-none">{getFlag(course.country)}</span>
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

                {/* CTA */}
                <button
                    type="button"
                    onClick={() => openLeadPopup({ source: "course_brochure" })}
                    className="
            mt-3
            flex
            h-[47px]
            w-full
            items-center
            justify-center
            gap-3
            rounded-full
            border
            border-brand-accent
            bg-white
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
                    <ArrowDownToLine size={18} strokeWidth={2.2} />
                </button>
            </div>
        </article>
    );
}

export default function TopCoursesSection() {
    const { openLeadPopup } = useLeadPopup();
    const [activeCategory, setActiveCategory] = useState("MBA");

    const activeCourses = courses[activeCategory];

    const activeIndex = categories.indexOf(activeCategory);

    const previousCategory = () => {
        const nextIndex =
            activeIndex === 0 ? categories.length - 1 : activeIndex - 1;

        setActiveCategory(categories[nextIndex]);
    };

    const nextCategory = () => {
        const nextIndex =
            activeIndex === categories.length - 1 ? 0 : activeIndex + 1;

        setActiveCategory(categories[nextIndex]);
    };

    return (
        <section className="w-full bg-white text-content-primary">
            <Container size="lg" className="py-12 sm:py-16">
                {/* =========================
            SECTION HEADER
        ========================== */}
                <header className="mx-auto max-w-[720px] text-center">
                    {/* Eyebrow */}
                    <div className="mb-5 flex items-center justify-center gap-2">
                        <span className="h-[7px] w-[7px] rounded-full bg-brand-primary" />

                        <span className="text-body-small font-medium tracking-[-0.1px] text-brand-primary">
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
                    <p className="mx-auto mt-7 max-w-[570px] text-body text-content-secondary">
                        High-demand programmes with excellent ROI, global job prospects,
                        and pathways to permanent residency.
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
                        <ArrowLeft size={21} strokeWidth={2.2} />
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
              bg-white
              p-1.5
              scrollbar-none
            "
                    >
                        {categories.map((category) => {
                            const isActive = category === activeCategory;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setActiveCategory(category)}
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
                        <ArrowRight size={21} strokeWidth={2.2} />
                    </button>
                </div>

                {/* =========================
            COURSE CARDS
        ========================== */}
                <div className="mt-11 grid grid-cols-4 gap-5 lg:grid-cols-12 lg:gap-6">
                    {activeCourses.map((course, index) => (
                        <CourseCard key={`${activeCategory}-${index}`} course={course} />
                    ))}
                </div>

                {/* =========================
            VIEW ALL
        ========================== */}
                <div className="mt-8 flex justify-center">
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
                        <span>View All {activeCategory} Courses</span>
                        <ArrowRight size={18} strokeWidth={2.2} />
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
                                Not sure which course fits your profile?
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
                                Our counsellors will analyse your academics, budget & career
                                goals to recommend the perfect programme.
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <button
                        type="button"
                        onClick={() => openLeadPopup({ source: "course_counselling" })}
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
                            <Phone size={17} fill="currentColor" strokeWidth={1.5} />
                        </span>
                    </button>
                </div>
            </Container>
        </section>
    );
}