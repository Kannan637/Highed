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
            country: "Study in USA",
            university: "University of Texas at Dallas",
            title: "Full-Time MBA (STEM Designated)",
            description:
                "AACSB accredited programme offering specialized concentrations in Business Analytics, Supply Chain, and Finance with up to 36 months STEM OPT.",
        },
        {
            country: "Study in UK",
            university: "University of Birmingham",
            title: "The Birmingham MBA (Triple Crown)",
            description:
                "AMBA, EQUIS, and AACSB accredited 1-year intensive MBA featuring corporate consulting projects and strong European corporate recruitment.",
        },
        {
            country: "Study in Ireland",
            university: "Trinity College Dublin",
            title: "Trinity Full-Time MBA",
            description:
                "Ireland's top-ranked business degree located in the heart of Dublin's European tech hub with 2-year post-study work visa rights.",
        },
    ],

    Management: [
        {
            country: "Study in Germany",
            university: "Frankfurt School of Finance & Management",
            title: "Master in Management (MSc)",
            description:
                "Ranked among Europe's top business degrees with direct recruitment pipelines into leading Frankfurt multinational financial firms.",
        },
        {
            country: "Study in UK",
            university: "University of Leeds",
            title: "MSc International Business",
            description:
                "Consistently ranked among the UK's top programmes for strategic management, global trade policy, and multinational leadership.",
        },
        {
            country: "Study in Australia",
            university: "University of Melbourne",
            title: "Master of Management",
            description:
                "Prepares ambitious graduates for leadership careers across Asia-Pacific with a 2-year post-study work visa pathway.",
        },
    ],

    "Data Science": [
        {
            country: "Study in USA",
            university: "Northeastern University",
            title: "MS in Data Science (STEM)",
            description:
                "Comprehensive curriculum covering machine learning, big data systems, and algorithmic analysis with up to 36 months STEM OPT.",
        },
        {
            country: "Study in Ireland",
            university: "University College Dublin",
            title: "MSc in Data & Computational Science",
            description:
                "Hands-on training in statistical modelling, data visualization, and computational frameworks in Europe's tech capital.",
        },
        {
            country: "Study in Australia",
            university: "University of Sydney",
            title: "Master of Data Science",
            description:
                "Accredited by the Australian Computer Society, featuring advanced coursework in machine learning and distributed computing systems.",
        },
    ],

    "AI & ML": [
        {
            country: "Study in USA",
            university: "Arizona State University",
            title: "MS in Artificial Intelligence (STEM)",
            description:
                "Cutting-edge specialization in deep learning, autonomous systems, computer vision, and neural network engineering.",
        },
        {
            country: "Study in UK",
            university: "University of Manchester",
            title: "MSc Artificial Intelligence",
            description:
                "One of Europe's founding centres of AI research, exploring symbolic AI, natural language processing, and autonomous robotics.",
        },
        {
            country: "Study in Germany",
            university: "RWTH Aachen University",
            title: "MSc in Data Science & Machine Learning",
            description:
                "World-class German technical education combining industrial AI applications with advanced mathematical foundations.",
        },
    ],

    Engineering: [
        {
            country: "Study in Germany",
            university: "Technical University of Munich (TUM)",
            title: "MSc in Mechanical & Automotive Engineering",
            description:
                "Prestigious German TU9 technical degree with access to state-of-the-art BMW, Siemens, and Audi automotive engineering partnerships.",
        },
        {
            country: "Study in Canada",
            university: "University of Windsor",
            title: "Master of Engineering (MEng)",
            description:
                "Co-op enabled professional engineering degree with industry placements across Ontario's manufacturing and automotive corridor.",
        },
        {
            country: "Study in USA",
            university: "University of Texas at Arlington",
            title: "MS in Computer Science & Engineering",
            description:
                "Industry-aligned engineering programme with comprehensive laboratory training and high graduate employment in the Dallas-Fort Worth tech corridor.",
        },
    ],

    Healthcare: [
        {
            country: "Study in UK",
            university: "University of Glasgow",
            title: "Master of Public Health (MPH)",
            description:
                "World-leading epidemiological and health systems curriculum accredited for global healthcare and clinical leadership roles.",
        },
        {
            country: "Study in Australia",
            university: "Monash University",
            title: "Master of Health Administration",
            description:
                "Designed for clinicians and healthcare professionals seeking executive hospital leadership across Commonwealth health services.",
        },
        {
            country: "Study in Ireland",
            university: "Royal College of Surgeons in Ireland (RCSI)",
            title: "MSc in Healthcare Management",
            description:
                "Pioneering medical management institution preparing graduates for strategic health services direction and clinical leadership.",
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
                        btn-motion
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
                        hover:bg-surface-subtle
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

export default function TopCoursesSection({
    id = "courses",
}: {
    id?: string;
} = {}) {
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
            id={id}
            className="
                w-full
                bg-background
                text-content-primary
                tracking-tight-5
                [letter-spacing:var(--tracking-tight-5)]
                [&_*]:[letter-spacing:var(--tracking-tight-5)]
                scroll-mt-6
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
                    accentText="Study Abroad"
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
                            btn-motion
                            flex
                            size-10
                            shrink-0
                            cursor-pointer
                            items-center
                            justify-center
                            rounded-full
                            text-brand-accent
                            hover:bg-brand-accent/10
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
                                        btn-motion
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
                            btn-motion
                            flex
                            size-10
                            shrink-0
                            cursor-pointer
                            items-center
                            justify-center
                            rounded-full
                            text-brand-accent
                            hover:bg-brand-accent/10
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
                            btn-motion
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
                            hover:bg-brand-accent/10
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