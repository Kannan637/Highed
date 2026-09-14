"use client";

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
        w-full
        bg-white
        px-5
        py-20
        text-[#121314]
        sm:px-8
        lg:px-12
        lg:py-[90px]
      `}
        >
            <div className="mx-auto max-w-[906px]">
                {/* =========================
            HEADER
        ========================== */}
                <div className="text-center">
                    <div className="mb-7 flex items-center justify-center gap-2">
                        <span className="h-[7px] w-[7px] rounded-full bg-[#253A7B]" />

                        <span className="text-[14px] font-medium text-[#253A7B]">
                            Why Choose Us
                        </span>
                    </div>

                    <h2
                        className="
              mx-auto
              max-w-[700px]
              text-[40px]
              font-normal
              leading-[1.02]
              tracking-[-1.8px]
              text-[#121314]
              sm:text-[44px]
              lg:text-[46px]
            "
                    >
                        Your Success Starts With the
                        <br className="hidden sm:block" />
                        Right Guidance
                    </h2>
                </div>

                {/* =========================
            COMPARISON CONTAINER
        ========================== */}
                <div
                    className="
            mt-14
            overflow-hidden
            rounded-[36px]
            border
            border-[#e3e5ea]
            bg-gradient-to-r
            from-white
            via-[#eef2ff]
            to-[#dfe7ff]
            p-1
            sm:mt-[52px]
          "
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* =========================
                OTHER CONSULTANTS
            ========================== */}
                        <div
                            className="
                px-8
                py-9
                sm:px-10
                sm:py-10
                lg:px-9
                lg:py-10
              "
                        >
                            <h3
                                className="
                  text-[23px]
                  font-medium
                  leading-tight
                  tracking-[-0.6px]
                  text-[#121314]
                "
                            >
                                Other Consultants
                            </h3>

                            <div className="mt-12 space-y-7">
                                {otherConsultants.map((item) => (
                                    <ComparisonItem
                                        key={item.title}
                                        title={item.title}
                                        description={item.description}
                                        variant="other"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* =========================
                OUR APPROACH
            ========================== */}
                        <div
                            className="
                rounded-[30px]
                bg-[#253A7B]
                px-8
                py-9
                text-white
                sm:px-10
                sm:py-10
                lg:px-9
                lg:py-10
              "
                        >
                            <h3
                                className="
                  text-[23px]
                  font-medium
                  leading-tight
                  tracking-[-0.6px]
                "
                            >
                                Our Approach
                            </h3>

                            <div className="mt-12 space-y-7">
                                {ourApproach.map((item) => (
                                    <ComparisonItem
                                        key={item.title}
                                        title={item.title}
                                        description={item.description}
                                        variant="approach"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ComparisonItem({
    title,
    description,
    variant,
}: {
    title: string;
    description: string;
    variant: "other" | "approach";
}) {
    const isApproach = variant === "approach";

    return (
        <div className="flex items-start gap-4">
            {/* Check Icon */}
            <span
                className={`
          mt-[2px]
          flex
          h-5
          w-5
          shrink-0
          items-center
          justify-center
          rounded-full
          ${isApproach
                        ? "bg-[#E93F61] text-white"
                        : "bg-[#d8d9db] text-[#6f7175]"
                    }
        `}
            >
                <Check size={12} strokeWidth={2.8} />
            </span>

            {/* Text */}
            <div className="min-w-0">
                <h4
                    className={`
            text-[20px]
            font-medium
            leading-[1.2]
            tracking-[-0.45px]
            sm:text-[21px]
            ${isApproach ? "text-white" : "text-[#121314]"}
          `}
                >
                    {title}
                </h4>

                <p
                    className={`
            mt-1.5
            max-w-[330px]
            text-[14px]
            leading-[1.55]
            ${isApproach
                            ? "text-[#e0e5f5]"
                            : "text-[#121314]"
                        }
          `}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}