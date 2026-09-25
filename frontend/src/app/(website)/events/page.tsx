import React from "react";
import { Calendar, Clock, Video, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { constructMetadata } from "@/seo/metadata";

export const metadata = constructMetadata({
  title: "Upcoming Study Abroad Events & Virtual Fairs",
  description:
    "Register for virtual education fairs, university webinars, and on-spot assessment sessions with delegates from top global universities.",
  path: "/events",
  keywords: ["study abroad events", "virtual education fair", "university webinars"],
});

const upcomingEvents = [
  {
    title: "Global Higher Education Virtual Fair 2026",
    type: "Virtual Fair",
    date: "October 18, 2026",
    time: "3:00 PM – 7:00 PM IST",
    location: "Online via Zoom",
    icon: Video,
    description:
      "Meet delegates from 50+ accredited universities across USA, UK, Canada, Australia, and Germany. On-spot profile evaluations and scholarship spot offers.",
  },
  {
    title: "USA STEM Master's & OPT Work Rights Webinar",
    type: "Webinar",
    date: "November 5, 2026",
    time: "6:00 PM – 7:30 PM IST",
    location: "Virtual Session",
    icon: Video,
    description:
      "Specialized interactive seminar covering GRE waivers, assistantships, and 3-year STEM OPT post-graduation employment avenues.",
  },
  {
    title: "Germany Tuition-Free Admissions Day",
    type: "Admissions Day",
    date: "November 22, 2026",
    time: "11:00 AM – 4:00 PM IST",
    location: "HighEd Global Centre & Virtual",
    icon: Calendar,
    description:
      "Direct consultation on public German university requirements, APS certification, blocked accounts, and English-taught master's degrees.",
  },
];

export default function EventsPage() {
  return (
    <div className="bg-surface-neutral py-16 sm:py-24 font-body">
      <Container size="lg">
        <SectionHeading
          badge="Global Events"
          title="Upcoming Study Abroad Fairs & Webinars"
          subtitle="Connect face-to-face with international university admissions officers and certified education counsellors."
        />

        <div className="mt-12 space-y-6">
          {upcomingEvents.map((evt) => {
            const IconComp = evt.icon;
            return (
              <Card
                key={evt.title}
                hover
                className="group grid grid-cols-4 items-center gap-6 p-7 sm:p-8 rounded-2xl border-border bg-card shadow-xs transition-all duration-300 hover:shadow-md hover:border-brand-primary/20 lg:grid-cols-12"
              >
                <div className="col-span-4 lg:col-span-9">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="primary">{evt.type}</Badge>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-content-secondary">
                      <Calendar size={14} />
                      <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-content-secondary">
                      <Clock size={14} />
                      <span>{evt.time}</span>
                    </div>
                  </div>

                  <h3 className="mt-3.5 card-title text-content-primary transition-colors group-hover:text-brand-primary">
                    {evt.title}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-content-secondary">
                    {evt.description}
                  </p>

                  <div className="mt-3.5 flex items-center gap-1.5 text-xs font-medium text-content-secondary">
                    <IconComp size={15} className="text-brand-accent" />
                    <span>{evt.location}</span>
                  </div>
                </div>

                <div className="col-span-4 flex justify-start lg:col-span-3 lg:justify-end">
                  <LeadCTAButton
                    source={`event_${evt.title.toLowerCase().replace(/\s+/g, '_')}`}
                    variant="accent"
                    size="default"
                    fullWidth
                    className="sm:w-auto"
                    iconBadge={<ArrowRight size={16} />}
                  >
                    Register Free
                  </LeadCTAButton>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
