"use client";

import {
    Award,
    GraduationCap,
    FileCheck2,
    BadgeDollarSign,
    BadgeCheck,
    Plane,
} from "lucide-react";

const services = [
    {
        icon: Award,
        title: "Free Study\nAbroad Counselling",
        description:
            "Expert counselling to choose the right country and university.",
    },
    {
        icon: GraduationCap,
        title: "University & Course\nSelection",
        description:
            "Find your best-fit program from 500+ universities worldwide.",
    },
    {
        icon: FileCheck2,
        title: "SOP, LOR & Application\nAssistance",
        description:
            "Craft compelling, error-free SOPs and LORs tailored to universities.",
    },
    {
        icon: BadgeDollarSign,
        title: "Scholarship & Education\nLoan Support",
        description:
            "Explore scholarships and education loans to fund your studies.",
    },
    {
        icon: BadgeCheck,
        title: "Visa Documentation &\nInterview Training",
        description:
            "Achieve 95%+ visa success with expert application guidance.",
        customText: "VISA",
    },
    {
        icon: Plane,
        title: "Pre-Departure &\nAccommodation",
        description:
            "Travel stress-free with complete pre-departure support.",
    },
];

export default function ServicesSection() {
    return (
        <section
            className={`
        w-full
        bg-white
        px-5
        py-16
        text-[#121314]
        sm:px-8
        sm:py-20
        lg:px-12
        lg:py-[82px]
      `}
        >
            <div className="mx-auto max-w-[1180px]">
                {/* =========================
            HEADER
        ========================== */}
                <div className="text-center">
                    {/* Eyebrow */}
                    <div className="mb-7 flex items-center justify-center gap-2">
                        <span className="h-[7px] w-[7px] rounded-full bg-[#253A7B]" />

                        <span
                            className="
                text-[14px]
                font-medium
                tracking-[-0.1px]
                text-[#253A7B]
                sm:text-[15px]
              "
                        >
                            Our Services
                        </span>
                    </div>

                    {/* Heading */}
                    <h2
                        className="
              mx-auto
              max-w-[700px]
              text-[40px]
              font-normal
              leading-[1.02]
              tracking-[-1.8px]
              text-[#121314]
              sm:text-[46px]
              lg:text-[48px]
            "
                    >
                        Complete Study Abroad
                        <br />
                        Advisory Services
                    </h2>
                </div>

                {/* =========================
            SERVICES GRID
        ========================== */}
                <div
                    className="
            mt-16
            grid
            grid-cols-1
            gap-x-10
            gap-y-14
            sm:grid-cols-2
            lg:mt-[76px]
            lg:grid-cols-3
            lg:gap-x-[55px]
            lg:gap-y-[60px]
          "
                >
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.title}
                                className="
                  flex
                  flex-col
                  items-center
                  text-center
                "
                            >
                                {/* =========================
                    ICON PLACEHOLDER
                ========================== */}
                                <div
                                    className="
                    flex
                    h-[50px]
                    w-[50px]
                    items-center
                    justify-center
                    rounded-[15px]
                    bg-[#253A7B]

                    /* Outer soft shadow */
                    shadow-[0_6px_16px_rgba(37,58,123,0.20)]

                    /* Inner shadow:
                       X = 0
                       Y = 0
                       Blur = 8px
                       White = 25%
                    */
                    shadow-[inset_0_0_8px_rgba(255,255,255,0.25),0_6px_16px_rgba(37,58,123,0.20)]
                  "
                                >
                                    {service.customText ? (
                                        <span
                                            className="
                        text-[10px]
                        font-bold
                        italic
                        tracking-[-0.2px]
                        text-white
                      "
                                        >
                                            {service.customText}
                                        </span>
                                    ) : (
                                        <Icon
                                            size={24}
                                            strokeWidth={2.4}
                                            className="text-white"
                                        />
                                    )}
                                </div>

                                {/* =========================
                    TITLE
                ========================== */}
                                <h3
                                    className="
                    mt-8
                    whitespace-pre-line
                    text-[21px]
                    font-medium
                    leading-[1.5]
                    tracking-[-0.45px]
                    text-[#121314]
                    sm:text-[22px]
                  "
                                >
                                    {service.title}
                                </h3>

                                {/* =========================
                    DESCRIPTION
                ========================== */}
                                <p
                                    className="
                    mt-2
                    max-w-[330px]
                    whitespace-pre-line
                    text-[16px]
                    font-normal
                    leading-[1.5]
                    tracking-[-0.2px]
                    text-[#121314]
                  "
                                >
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}