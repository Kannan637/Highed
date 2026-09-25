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
            className="
                font-body
                relative
                mx-auto
                mt-6
                w-[1850px]
                max-w-[calc(100%-24px)]
                overflow-hidden
                rounded-[28px]
                min-h-fit
                shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                tracking-tight-5
                [letter-spacing:var(--tracking-tight-5)]
                [&_*]:[letter-spacing:var(--tracking-tight-5)]
                sm:mt-8
                sm:max-w-[calc(100%-48px)]
                sm:rounded-[36px]
                xl:h-[956px]
                2xl:max-w-[1600px]
            "
        >
            {/* BACKGROUND IMAGE */}
            <Image
                src="/images/whychooseus/ChatGPT Image Sep 24, 2026, 12_21_45 PM.webp"
                alt="Student studying outdoors with educational guidance"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1600px"
                className="object-cover object-center"
            />

            {/* MAIN CONTENT */}
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-between py-10 sm:py-14 xl:block xl:py-0">
                {/* HEADER */}
                <div
                    className="
                        relative
                        z-20
                        flex
                        w-full
                        max-w-[680px]
                        flex-col
                        items-center
                        px-4
                        text-center
                        xl:absolute
                        xl:left-1/2
                        xl:top-[24px]
                        xl:-translate-x-1/2
                        xl:px-0
                    "
                >
                    {/* BADGE */}
                    <div className="mb-5 inline-flex h-8 items-center gap-2 rounded-full bg-[#E93F61] px-4">
                        <span className="h-2 w-2 rounded-full bg-white" />

                        <span className="font-dm-sans text-sm font-medium text-white">
                            Why Choose Us
                        </span>
                    </div>

                    {/* MAIN HEADING */}
                    <h2 className="text-center text-white">
                        Your Success Starts With
                        <br className="hidden sm:inline" />
                        {" "}the Right Guidance
                    </h2>
                </div>

                {/* CARDS CONTAINER */}
                <div
                    className="
                        relative
                        z-20
                        mt-8
                        flex
                        w-full
                        flex-col
                        items-center
                        justify-center
                        gap-6
                        px-4
                        sm:mt-12
                        sm:px-8
                        lg:flex-row
                        lg:items-stretch
                        lg:gap-8
                        xl:static
                        xl:mt-0
                        xl:px-0
                    "
                >
                    {/* LEFT CARD — OTHER CONSULTANTS */}
                    <div
                        className="
                            flex
                            min-h-[440px]
                            w-full
                            max-w-[460px]
                            flex-col
                            justify-between
                            rounded-[28px]
                            bg-white
                            p-7
                            shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-[0_28px_70px_rgba(0,0,0,0.18)]
                            sm:rounded-[30px]
                            sm:p-8
                            xl:absolute
                            xl:bottom-[48px]
                            xl:left-[36px]
                            xl:w-[440px]
                            xl:max-w-none
                            xl:px-[34px]
                            xl:py-[36px]
                            2xl:left-[60px]
                            2xl:bottom-[60px]
                        "
                    >
                        <div>
                            {/* CARD TITLE */}
                            <h3 className="card-title text-content-primary">
                                Other Consultants
                            </h3>

                            {/* ITEMS */}
                            <div className="mt-7 flex flex-col gap-6 sm:mt-9 sm:gap-[26px]">
                                {otherConsultants.map((item) => (
                                    <div
                                        key={item.title}
                                        className="flex items-start gap-[16px]"
                                    >
                                        {/* CHECK CIRCLE */}
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

                                        {/* TEXT */}
                                        <div className="min-w-0">
                                            <h4 className="card-title text-content-primary">
                                                {item.title}
                                            </h4>

                                            <p className="mt-1.5 max-w-[320px] text-content-secondary">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CARD — OUR APPROACH */}
                    <div
                        className="
                            flex
                            min-h-[440px]
                            w-full
                            max-w-[460px]
                            flex-col
                            justify-between
                            rounded-[28px]
                            bg-[#2E4389]
                            p-7
                            shadow-[0_20px_50px_rgba(37,58,123,0.30)]
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-[0_28px_70px_rgba(37,58,123,0.42)]
                            sm:rounded-[30px]
                            sm:p-8
                            xl:absolute
                            xl:right-[36px]
                            xl:top-[280px]
                            xl:w-[440px]
                            xl:max-w-none
                            xl:px-[34px]
                            xl:py-[36px]
                            2xl:right-[60px]
                            2xl:top-[290px]
                        "
                    >
                        <div>
                            {/* CARD TITLE */}
                            <h3 className="card-title text-white">
                                Our Approach
                            </h3>

                            {/* ITEMS */}
                            <div className="mt-7 flex flex-col gap-6 sm:mt-9 sm:gap-[26px]">
                                {ourApproach.map((item) => (
                                    <div
                                        key={item.title}
                                        className="flex items-start gap-[16px]"
                                    >
                                        {/* ACCENT CHECK CIRCLE */}
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

                                        {/* TEXT */}
                                        <div className="min-w-0">
                                            <h4 className="card-title text-white">
                                                {item.title}
                                            </h4>

                                            <p className="mt-1.5 max-w-[320px] text-white/90">
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
        </section>
    );
}