import React from "react";
import Image from "next/image";
import { Clock, Briefcase, BookOpen, ArrowRight, Layers } from "lucide-react";
import { Course } from "@/types/explore";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface CourseCardProps {
  course: Course;
  countryName?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  countryName,
}) => {
  return (
    <div
      className="
        group flex h-full flex-col overflow-hidden
        rounded-2xl
        border border-border
        bg-card
        shadow-xs
        transition-all duration-300
        hover:border-primary/40
        hover:shadow-lg
      "
    >
      {/* ================= IMAGE ================= */}
      <div className="relative p-2.5">
        <div className="relative h-[190px] overflow-hidden rounded-xl bg-neutral-100">
          <Image
            src={course.image || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop"}
            alt={course.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="
              object-cover
              transition-transform duration-500
              group-hover:scale-[1.03]
            "
          />

          {/* Course Level */}
          <span
            className="
              absolute left-3 top-3
              rounded-full
              bg-white/95
              px-3 py-1.5
              text-[11px]
              font-semibold
              text-brand-primary
              shadow-xs
              backdrop-blur-sm
            "
          >
            {course.level}
          </span>

          {/* Duration */}
          <div
            className="
              absolute right-3 top-3
              flex items-center gap-1.5
              rounded-full
              bg-white/95
              px-3 py-1.5
              text-[11px]
              font-medium
              text-neutral-700
              shadow-xs
              backdrop-blur-sm
            "
          >
            <Clock size={12} />
            <span>{course.duration}</span>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-1 flex-col px-5 pb-5">
        {/* Course Name */}
        <div className="mt-1">
          <h3 className="card-title text-foreground line-clamp-2 transition-colors group-hover:text-brand-primary">
            {course.name}
          </h3>

          {/* Study Area */}
          <div
            className="
              mt-2
              flex items-center gap-1.5
              text-[13px]
              font-medium
              text-muted-foreground
            "
          >
            <Layers
              size={14}
              className="shrink-0 text-muted-foreground/70"
            />

            <span className="truncate">
              {course.studyArea}
              {countryName && ` • ${countryName}`}
            </span>
          </div>
        </div>

        {/* ================= FEE ================= */}
        <div className="mt-4">
          <div
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-wider
              text-muted-foreground
            "
          >
            Average Annual Fee
          </div>

          <div
            className="
              mt-0.5
              text-[15px]
              font-bold
              text-brand-primary
            "
          >
            {course.averageFee}
          </div>
        </div>

        {/* ================= CAREER OUTCOMES ================= */}
        {course.careerProspects &&
          course.careerProspects.length > 0 && (
            <div className="mt-4">
              <div
                className="
                  mb-2
                  flex items-center gap-1.5
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-muted-foreground
                "
              >
                <Briefcase size={12} />
                Career Outcomes
              </div>

              <div className="flex flex-wrap gap-1.5">
                {course.careerProspects.slice(0, 3).map((career) => (
                  <span
                    key={career}
                    className="
                      rounded-lg
                      border border-border
                      bg-neutral-50
                      px-2.5 py-1
                      text-[11px]
                      font-medium
                      leading-none
                      text-neutral-700
                    "
                  >
                    {career}
                  </span>
                ))}

                {course.careerProspects.length > 3 && (
                  <span
                    className="
                      rounded-lg
                      bg-neutral-100
                      px-2 py-1
                      text-[11px]
                      font-medium
                      leading-none
                      text-muted-foreground
                    "
                  >
                    +{course.careerProspects.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}

        {/* ================= CTA ================= */}
        <div className="mt-auto pt-5">
          <div className="border-t border-border pt-4">
            <LeadCTAButton
              source={`explore_course_${course.id}`}
              variant="outline"
              size="default"
              className="
                flex w-full items-center justify-between
                h-12 px-4
                rounded-full
                text-sm
                font-semibold
                text-brand-primary
                border border-black/10
                hover:border-brand-primary
                hover:bg-brand-primary/5
                transition-colors
              "
            >
              <span className="flex items-center gap-2">
                <BookOpen size={16} />
                Check Course Eligibility
              </span>

              <ArrowRight size={15} />
            </LeadCTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;