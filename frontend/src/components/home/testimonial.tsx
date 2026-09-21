
"use client";

import Image from "next/image";
import { Card } from "@/components/ui/Card";

const testimonials = [
  {
    id: 1,
    heading: '"Ship faster without chaos"',
    quote:
      "We went from scattered financial ops to a clean, structured workflow. The visibility alone helped us move faster without breaking things.",
    author: "Guillermo Rauch",
    role: "CEO",
    company: "@vercel",
    companyColor: "text-orange-400",
    avatarUrl: "https://github.com/rauchg.png",
  },
  {
    id: 2,
    heading: '"Built for real teams"',
    quote:
      "The onboarding was seamless, and the product just clicks. It fits naturally into how modern teams actually work.",
    author: "Lee Robinson",
    role: "VP of Developer Experience",
    company: "@vercel",
    companyColor: "text-orange-500",
    avatarUrl: "https://github.com/leerob.png",
  },
  {
    id: 3,
    heading: '"Clarity at scale"',
    quote:
      "As systems grow, things get messy. This gave us clarity across teams without adding complexity.",
    author: "Dan Abramov",
    role: "Software Engineer",
    company: "@meta",
    companyColor: "text-blue-500",
    avatarUrl: "https://github.com/gaearon.png",
  },
  {
    id: 4,
    heading: '"Actually enjoyable to use"',
    quote:
      "Most tools feel like a chore. This one doesn't. It's fast, predictable, and genuinely pleasant to work with.",
    author: "Kent C. Dodds",
    role: "Educator",
    company: "@kentcdodds",
    companyColor: "text-indigo-500",
    avatarUrl: "https://github.com/kentcdodds.png",
  },
];

export default function Testimonials1() {
  return (
    <section className="bg-background w-full py-16 h-full items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 my-auto">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">
            Trusted by teams who lead people
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl text-lg">
            Save hours every week, reduce complexity, and let your team focus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="flex h-full min-h-[320px] flex-col justify-between rounded-2xl p-6 ring-0 select-none"
            >
              <div>
                <h3 className="text-foreground mb-2 text-xl font-medium leading-tight">
                  {testimonial.heading}
                </h3>
                <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border border-border-default">
                  <Image
                    src={testimonial.avatarUrl}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    {testimonial.role}{" "}
                    <span className={testimonial.companyColor}>
                      {testimonial.company}
                    </span>
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
