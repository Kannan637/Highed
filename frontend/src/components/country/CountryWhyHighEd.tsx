import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import { Country } from "@/types/country";

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

interface CountryWhyHighEdProps {
  country?: Country;
}

export default function WhyChooseUs({ country }: CountryWhyHighEdProps = {}) {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-[90px] text-content-primary">
      <Container size="lg">
        <div className="grid grid-cols-4 lg:grid-cols-12 gap-6">
          {/* =========================
                        HEADER
                    ========================== */}
          <div className="col-span-4 lg:col-span-8 lg:col-start-3 text-center">
            <div className="mb-7 flex items-center justify-center gap-2">
              <span className="h-[7px] w-[7px] rounded-full bg-brand-primary" />
              <span className="text-body-small font-medium text-brand-primary">
                Why Choose Us
              </span>
            </div>

            <h2
              className="
                                mx-auto
                                max-w-[700px]
                                text-h2
                                text-content-primary
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
                            col-span-4
                            lg:col-span-10
                            lg:col-start-2
                            mt-4
                            sm:mt-8
                            overflow-hidden
                            rounded-[36px]
                            border
                            border-[#e3e5ea]
                            bg-gradient-to-r
                            from-white
                            via-[#eef2ff]
                            to-[#dfe7ff]
                            p-1
                        "
          >
            <div className="grid grid-cols-4 lg:grid-cols-12">
              {/* =========================
                                OTHER CONSULTANTS
                            ========================== */}
              <div
                className="
                                    col-span-4
                                    lg:col-span-6
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
                                        text-h4
                                        text-content-primary
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
                                    col-span-4
                                    lg:col-span-6
                                    rounded-[30px]
                                    bg-brand-primary
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
                                        text-h4
                                        text-white
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
      </Container>
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
            ? "bg-brand-accent text-white"
            : "bg-[#d8d9db] text-[#6f7175]"
          }
        `}
      >
        <Check size={12} strokeWidth={2.8} aria-hidden="true" />
      </span>

      {/* Text */}
      <div className="min-w-0">
        <h4
          className={`
            text-h5
            ${isApproach ? "text-white" : "text-content-primary"}
          `}
        >
          {title}
        </h4>

        <p
          className={`
            mt-1.5
            max-w-[330px]
            text-body-small
            ${isApproach
              ? "text-content-on-primary"
              : "text-content-secondary"
            }
          `}
        >
          {description}
        </p>
      </div>
    </div>
  );
}