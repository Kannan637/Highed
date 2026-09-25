import Image from "next/image";
import { Check } from "lucide-react";

const otherConsultants = [
    {
        title: "Limited University Options",
        description:
            "Get recommendations from a restricted list of partner institutions.",
    },
    {
        title: "Generic Counselling",
        description:
            "Standard advice that may not match your goals or profile.",
    },
    {
        title: "Hidden Process Costs",
        description:
            "Unexpected charges can appear at different stages.",
    },
];

const ourApproach = [
    {
        title: "Profile-Based University Selection",
        description:
            "We match your academics, budget, and career goals with the right universities.",
    },
    {
        title: "Personalized Counselling",
        description:
            "Get one-to-one guidance tailored to your study and career plans.",
    },
    {
        title: "Transparent End-to-End Support",
        description:
            "Clear communication and complete assistance from application to visa.",
    },
];

export default function WhyChooseUs() {
    return (
        <section
            className={`
                font-body
                relative
                mx-auto
                mt-6
                sm:mt-8
                w-[1850px]
                max-w-[calc(100%-24px)]
                sm:max-w-[calc(100%-48px)]
                2xl:max-w-[1600px]
                overflow-hidden
                rounded-[28px]
                sm:rounded-[36px]
                min-h-fit
                xl:h-[956px]
                shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                tracking-[-0.04em]
                [letter-spacing:-0.04em]
                [&_*]:[letter-spacing:-0.04em]
            `}
        >
            {/* =====================================================
                BACKGROUND IMAGE
            ====================================================== */}
            <Image
                src="/images/whychooseus/ChatGPT Image Sep 24, 2026, 12_21_45 PM.webp"
                alt="Student studying outdoors with educational guidance"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1600px"
                className="object-cover object-center"
            />

            {/* Subtle multi-layer overlay for WCAG AA readability and vivid photo preservation */}
            {/* <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/15 to-black/55" /> */}

            {/* =====================================================
                MAIN CONTENT WRAPPER
                - Natural responsive column on mobile/tablet (< xl)
                - Staggered editorial floating layout on desktop (>= xl)
            ====================================================== */}
            <div className="relative z-10 h-full w-full flex flex-col justify-between items-center py-10 sm:py-14 xl:py-0 xl:block">

                {/* =================================================
                    HEADER: BADGE & MAIN HEADING
                ================================================== */}
                <div
                    className="
                        relative
                        z-20
                        flex
                        flex-col
                        items-center
                        text-center
                        px-4
                        w-full
                        max-w-[680px]
                        xl:absolute
                        xl:top-[74px]
                        xl:left-1/2
                        xl:-translate-x-1/2
                        xl:px-0
                    "
                >
                    {/* Badge */}
                    <div
                        className="
                            inline-flex
                            h-[31px]
                            items-center
                            gap-[8px]
                            rounded-full
                            bg-brand-accent
                            px-[14px]
                            text-[14px]
                            font-medium
                            leading-none
                            text-white
                            shadow-sm
                        "
                    >
                        <span className="h-[7px] w-[7px] rounded-full bg-white animate-pulse" />
                        <span>Why Choose Us</span>
                    </div>

                    {/* Main Heading */}
                    <h2
                        className="
                            mt-4
                            text-center
                            text-[30px]
                            sm:text-[38px]
                            lg:text-[44px]
                            xl:text-[48px]
                            font-medium
                            leading-[1.12]
                            tracking-[-0.04em]
                            text-white
                            drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]
                        "
                    >
                        Your Success Starts With
                        <br className="hidden sm:inline" />
                        {" "}the Right Guidance
                    </h2>
                </div>

                {/* =================================================
                    CARDS CONTAINER
                    - Mobile/Tablet: Centered responsive grid/flex
                    - Desktop (>= xl): Staggered absolute placement
                ================================================== */}
                <div
                    className="
                        relative
                        z-20
                        w-full
                        mt-8
                        sm:mt-12
                        px-4
                        sm:px-8
                        flex
                        flex-col
                        lg:flex-row
                        items-center
                        lg:items-stretch
                        justify-center
                        gap-6
                        lg:gap-8
                        xl:static
                        xl:mt-0
                        xl:px-0
                    "
                >
                    {/* =================================================
                        LEFT CARD — OTHER CONSULTANTS
                    ================================================== */}
                    <div
                        className="
                            w-full
                            max-w-[460px]
                            xl:max-w-none
                            xl:w-[440px]
                            min-h-[440px]
                            rounded-[28px]
                            sm:rounded-[30px]
                            bg-white
                            p-7
                            sm:p-8
                            xl:px-[34px]
                            xl:py-[36px]
                            shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                            hover:shadow-[0_28px_70px_rgba(0,0,0,0.18)]
                            hover:-translate-y-1
                            transition-all
                            duration-300
                            flex
                            flex-col
                            justify-between
                            xl:absolute
                            xl:left-[36px]
                            2xl:left-[60px]
                            xl:bottom-[48px]
                            2xl:bottom-[60px]
                        "
                    >
                        <div>
                            {/* Card Title */}
                            <h3
                                className="
                                    text-[22px]
                                    sm:text-[24px]
                                    font-medium
                                    leading-[1.2]
                                    tracking-[-0.04em]
                                    text-[#121314]
                                "
                            >
                                Other Consultants
                            </h3>

                            {/* Items */}
                            <div className="mt-7 sm:mt-9 flex flex-col gap-6 sm:gap-[26px]">
                                {otherConsultants.map((item) => (
                                    <div
                                        key={item.title}
                                        className="flex gap-[16px] items-start"
                                    >
                                        {/* Check Circle */}
                                        <div
                                            className="
                                                mt-[3px]
                                                flex
                                                h-[21px]
                                                w-[21px]
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-[#E1E2E4]
                                            "
                                        >
                                            <Check
                                                size={13}
                                                strokeWidth={2.4}
                                                className="text-[#5D6065]"
                                                aria-hidden="true"
                                            />
                                        </div>

                                        {/* Text */}
                                        <div className="min-w-0">
                                            <h4
                                                className="
                                                    text-[19px]
                                                    sm:text-[20px]
                                                    font-medium
                                                    leading-[1.25]
                                                    tracking-[-0.04em]
                                                    text-[#121314]
                                                "
                                            >
                                                {item.title}
                                            </h4>

                                            <p
                                                className="
                                                    mt-1.5
                                                    max-w-[320px]
                                                    text-[15px]
                                                    sm:text-[16px]
                                                    font-normal
                                                    leading-[1.45]
                                                    tracking-[-0.04em]
                                                    text-[#55575A]
                                                "
                                            >
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* =================================================
                        RIGHT CARD — OUR APPROACH
                    ================================================== */}
                    <div
                        className="
                            w-full
                            max-w-[460px]
                            xl:max-w-none
                            xl:w-[440px]
                            min-h-[440px]
                            rounded-[28px]
                            sm:rounded-[30px]
                            bg-[#2E4389]
                            p-7
                            sm:p-8
                            xl:px-[34px]
                            xl:py-[36px]
                            shadow-[0_20px_50px_rgba(37,58,123,0.30)]
                            hover:shadow-[0_28px_70px_rgba(37,58,123,0.42)]
                            hover:-translate-y-1
                            transition-all
                            duration-300
                            flex
                            flex-col
                            justify-between
                            xl:absolute
                            xl:right-[36px]
                            2xl:right-[60px]
                            xl:top-[280px]
                            2xl:top-[290px]
                        "
                    >
                        <div>
                            {/* Card Title */}
                            <h3
                                className="
                                    text-[22px]
                                    sm:text-[24px]
                                    font-medium
                                    leading-[1.2]
                                    tracking-[-0.04em]
                                    text-white
                                "
                            >
                                Our Approach
                            </h3>

                            {/* Items */}
                            <div className="mt-7 sm:mt-9 flex flex-col gap-6 sm:gap-[26px]">
                                {ourApproach.map((item) => (
                                    <div
                                        key={item.title}
                                        className="flex gap-[16px] items-start"
                                    >
                                        {/* Pink Check Circle */}
                                        <div
                                            className="
                                                mt-[3px]
                                                flex
                                                h-[21px]
                                                w-[21px]
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-brand-accent
                                            "
                                        >
                                            <Check
                                                size={13}
                                                strokeWidth={2.6}
                                                className="text-white"
                                                aria-hidden="true"
                                            />
                                        </div>

                                        {/* Text */}
                                        <div className="min-w-0">
                                            <h4
                                                className="
                                                    text-[19px]
                                                    sm:text-[20px]
                                                    font-medium
                                                    leading-[1.25]
                                                    tracking-[-0.04em]
                                                    text-white
                                                "
                                            >
                                                {item.title}
                                            </h4>

                                            <p
                                                className="
                                                    mt-1.5
                                                    max-w-[320px]
                                                    text-[15px]
                                                    sm:text-[16px]
                                                    font-normal
                                                    leading-[1.45]
                                                    tracking-[-0.04em]
                                                    text-white/95
                                                "
                                            >
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}