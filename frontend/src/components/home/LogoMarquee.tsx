import Image from "next/image";

interface UniversityLogo {
    name: string;
    src: string;
}

const universities: UniversityLogo[] = [
    {
        name: "American College Dublin",
        src: "/icons/University/American-College-Dublin.webp",
    },
    {
        name: "Amity University Dubai",
        src: "/icons/University/Amity-University,-Dubai,-UAE.webp",
    },
    {
        name: "AURA Business School",
        src: "/icons/University/AURA-Business-School.webp",
    },
    {
        name: "Brescia University College",
        src: "/icons/University/Brescia-University-College.webp",
    },
    {
        name: "EAE Business School",
        src: "/icons/University/EAE.webp",
    },
    {
        name: "Griffith College",
        src: "/icons/University/griffith.webp",
    },
    {
        name: "Holmes Institute Dublin",
        src: "/icons/University/Holmes-Instittue-of-Dublin.webp",
    },
    {
        name: "IT Carlow",
        src: "/icons/University/it-carlow.webp",
    },
];

// Doubled array for seamless 0% -> -50% CSS looping
const loopedLogos = [...universities, ...universities];

function MarqueeRow({ direction }: { direction: "left" | "right" }) {
    const animationClass =
        direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

    return (
        <div className="marquee-container relative col-span-12 overflow-hidden py-1">
            {/* Left gradient fade */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    z-10
                    h-full
                    w-10
                    bg-gradient-to-r
                    from-background
                    via-background/80
                    to-transparent
                    sm:w-16
                    md:w-24
                    lg:w-28
                "
            />

            {/* Right gradient fade */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    right-0
                    top-0
                    z-10
                    h-full
                    w-10
                    bg-gradient-to-l
                    from-background
                    via-background/80
                    to-transparent
                    sm:w-16
                    md:w-24
                    lg:w-28
                "
            />

            {/* CSS Moving track */}
            <div
                className={`
                    ${animationClass}
                    items-center
                    gap-8
                    sm:gap-10
                    md:gap-12
                    lg:gap-16
                `}
            >
                {loopedLogos.map((item, index) => (
                    <div
                        key={`${item.name}-${index}`}
                        className="
                            flex
                            h-16
                            w-[110px]
                            shrink-0
                            items-center
                            justify-center
                            sm:h-18
                            sm:w-[130px]
                            md:h-20
                            md:w-[150px]
                            lg:w-[160px]
                        "
                    >
                        <Image
                            src={item.src}
                            alt={`${item.name} logo`}
                            width={140}
                            height={60}
                            loading="lazy"
                            style={{ width: "auto", height: "auto" }}
                            className="
                                h-auto
                                max-h-[42px]
                                w-auto
                                max-w-[100px]
                                object-contain
                                sm:max-h-[48px]
                                sm:max-w-[115px]
                                md:max-h-[54px]
                                md:max-w-[130px]
                                lg:max-h-[60px]
                                lg:max-w-[140px]
                            "
                            draggable={false}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function LogoMarquee() {
    return (
        <section
            aria-labelledby="universities-marquee-heading"
            className="
                w-full
                overflow-hidden
                bg-background
                py-12
                sm:py-14
                md:py-16
                lg:py-20
            "
        >
            <div
                className="
                    mx-auto
                    grid
                    w-full
                    max-w-[1440px]
                    grid-cols-12
                    gap-4
                    px-4
                    sm:px-6
                    md:px-8
                    lg:px-12
                "
            >
                {/* Heading (Semantic H2 with proper hierarchy) */}
                <div
                    className="
                        col-span-12
                        mb-5
                        flex
                        justify-center
                        sm:mb-6
                        md:mb-8
                    "
                >
                    <h2
                        id="universities-marquee-heading"
                        className="
                            max-w-[90%]
                            text-center
                            text-[20px]
                            font-semibold
                            leading-[25px]
                            tracking-[-0.04em]
                            text-[#121314]
                            sm:text-[22px]
                            sm:leading-[27px]
                            md:text-[24px]
                            md:leading-[29px]
                            lg:text-[26px]
                            lg:leading-[31.2px]
                        "
                    >
                        Top Universities we work with
                    </h2>
                </div>

                {/* Row 1 — Left */}
                <MarqueeRow direction="left" />

                {/* Row 2 — Right */}
                <MarqueeRow direction="right" />
            </div>
        </section>
    );
}