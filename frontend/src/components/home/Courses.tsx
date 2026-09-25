"use client";

import { useState } from "react";
import {
    ArrowDownToLine,
    ArrowLeft,
    ArrowRight,
    Plane,
    BookOpen,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import {
    Card,
    CardContent,
    CardTitle,
    CardDescription,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useLeadPopup } from "@/hooks/useLeadPopup";
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

    if (country.includes("San Francisco") || country.includes("USA")) {
        return "🇺🇸";
    }

    if (country.includes("UK") || country.includes("United Kingdom")) {
        return "🇬🇧";
    }

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
            <BookOpen
                size={48}
                strokeWidth={1.5}
                aria-hidden="true"
            />
        </div>
    );
}

function CourseCard({ course }: { course: Course }) {
    const { openLeadPopup } = useLeadPopup();

    return (
        <Card
            hover
            className="
                col-span-4
                flex
                flex-col
                overflow-hidden
                rounded-2xl
                border-border
                bg-card
                p-0
                shadow-xs
                transition-all
                duration-300
                hover:shadow-md
                sm:col-span-2
                lg:col-span-4
            "
        >
            {/* IMAGE */}
            <div className="relative aspect-[1.83/1] w-full overflow-hidden">
                <ImagePlaceholder />

                {/* COUNTRY BADGE */}
                <Badge
                    variant="brand"
                    className="
                        absolute
                        left-4
                        top-4
                        inline-flex
                        items-center
                        gap-1.5
                        shadow-sm
                    "
                >
                    <Plane
                        size={14}
                        strokeWidth={2.2}
                        aria-hidden="true"
                    />

                    <span>{course.country}</span>
                </Badge>
            </div>

            {/* CONTENT */}
            <CardContent className="flex flex-1 flex-col p-5">
                {/* UNIVERSITY */}
                <div className="mb-2 flex items-center gap-1.5">
                    <span
                        className="text-sm leading-none"
                        aria-hidden="true"
                    >
                        {getFlag(course.country)}
                    </span>

                    <span className="text-body-small font-medium text-content-primary">
                        {course.university}
                    </span>
                </div>

                {/* TITLE */}
                <CardTitle className="min-h-[56px] text-lg font-normal text-content-primary sm:text-xl">
                    {course.title}
                </CardTitle>

                {/* DESCRIPTION */}
                <CardDescription className="mt-2 min-h-[40px] line-clamp-2 text-sm text-content-secondary">
                    {course.description}
                </CardDescription>

                {/* DOWNLOAD BROCHURE */}
                <button
                    type="button"
                    onClick={() =>
                        openLeadPopup({
                            source: "course_brochure",
                        })
                    }
                    className="
                        mt-4
                        inline-flex
                        h-12
                        w-full
                        flex-row
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        border
                        border-border
                        bg-white
                        px-5
                        text-sm
                        font-medium
                        leading-none
                        text-content-primary
                        whitespace-nowrap
                        transition-all
                        duration-200
                        hover:bg-surface-subtle
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-brand-accent
                        active:scale-[0.98]
                    "
                >
                    <span className="whitespace-nowrap">
                        Download Brochure
                    </span>

                    <ArrowDownToLine
                        size={18}
                        strokeWidth={2.2}
                        aria-hidden="true"
                        className="shrink-0"
                    />
                </button>
            </CardContent>
        </Card>
    );
}

export default function TopCoursesSection() {
    const { openLeadPopup } = useLeadPopup();
    const [activeCategory, setActiveCategory] = useState("MBA");

    const activeCourses = courses[activeCategory];
    const activeIndex = categories.indexOf(activeCategory);

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
        <section
            className="
                w-full
                bg-background
                text-content-primary
                tracking-tight-5
                [letter-spacing:var(--tracking-tight-5)]
                [&_*]:[letter-spacing:var(--tracking-tight-5)]
            "
        >
            <Container
                size="lg"
                className="py-12 sm:py-16 md:py-20"
            >
                {/* SECTION HEADER */}
                <SectionHeading
                    eyebrow="Popular Courses"
                    title="Top Courses to Study Abroad"
                    description="High-demand programmes with excellent ROI, global job prospects, and pathways to permanent residency."
                />

                {/* CATEGORY NAVIGATION */}
                <div className="mt-8 flex items-center justify-center gap-3">
                    {/* LEFT ARROW */}
                    <button
                        type="button"
                        onClick={previousCategory}
                        aria-label="Previous course category"
                        className="
                            flex
                            size-10
                            shrink-0
                            cursor-pointer
                            items-center
                            justify-center
                            rounded-full
                            text-brand-accent
                            transition-colors
                            hover:bg-brand-accent/10
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-brand-accent
                        "
                    >
                        <ArrowLeft
                            size={20}
                            strokeWidth={2.2}
                            aria-hidden="true"
                        />
                    </button>

                    {/* CATEGORY PILLS */}
                    <div
                        className="
                            flex
                            max-w-full
                            items-center
                            gap-1.5
                            overflow-x-auto
                            rounded-full
                            border
                            border-border
                            bg-white
                            p-1.5
                            shadow-2xs
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
                                    aria-pressed={isActive}
                                    className={`
                                        flex
                                        h-10
                                        shrink-0
                                        cursor-pointer
                                        items-center
                                        justify-center
                                        rounded-full
                                        px-5
                                        text-sm
                                        font-medium
                                        transition-all
                                        duration-200
                                        ${isActive
                                            ? "bg-brand-accent text-white shadow-xs"
                                            : "text-brand-primary hover:bg-surface-subtle"
                                        }
                                    `}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>

                    {/* RIGHT ARROW */}
                    <button
                        type="button"
                        onClick={nextCategory}
                        aria-label="Next course category"
                        className="
                            flex
                            size-10
                            shrink-0
                            cursor-pointer
                            items-center
                            justify-center
                            rounded-full
                            text-brand-accent
                            transition-colors
                            hover:bg-brand-accent/10
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-brand-accent
                        "
                    >
                        <ArrowRight
                            size={20}
                            strokeWidth={2.2}
                            aria-hidden="true"
                        />
                    </button>
                </div>

                {/* COURSE CARDS */}
                <div className="mt-10 grid grid-cols-4 gap-6 lg:grid-cols-12">
                    {activeCourses.map((course, index) => (
                        <CourseCard
                            key={`${activeCategory}-${index}`}
                            course={course}
                        />
                    ))}
                </div>

                {/* VIEW ALL COURSES */}
                <div className="mt-10 flex justify-center lg:mt-8">
                    <button
                        type="button"
                        onClick={() =>
                            openLeadPopup({
                                source: `view_all_${activeCategory.toLowerCase()}`,
                            })
                        }
                        className="
                            group
                            inline-flex
                            h-12
                            cursor-pointer
                            flex-row
                            items-center
                            justify-center
                            gap-2
                            whitespace-nowrap
                            rounded-full
                            px-6
                            text-sm
                            font-semibold
                            text-brand-accent
                            transition-all
                            hover:bg-brand-accent/10
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-brand-accent
                        "
                    >
                        <span>
                            View All {activeCategory} Courses
                        </span>

                        <ArrowRight
                            size={18}
                            strokeWidth={2.2}
                            aria-hidden="true"
                            className="
                                shrink-0
                                transition-transform
                                duration-200
                                ease-out
                                group-hover:translate-x-1
                            "
                        />
                    </button>
                </div>

                {/* COUNSELLING CTA */}
                <CounsellingCTA />
            </Container>
        </section>
    );
}