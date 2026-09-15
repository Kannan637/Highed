import React from "react";
import { Clock, Briefcase, BookOpen, ArrowRight, Layers } from "lucide-react";
import { Course } from "@/types/explore";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface CourseCardProps {
  course: Course;
  countryName?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, countryName }) => {
  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#253A7B]/40 hover:shadow-xl hover:-translate-y-0.5">
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="rounded-full bg-[#EEF1FA] px-3 py-1 text-xs font-semibold text-[#253A7B]">
            {course.level}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
            <Clock size={13} />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl font-bold leading-snug text-neutral-900 group-hover:text-[#253A7B] transition-colors">
          {course.name}
        </h3>

        {/* Study Area */}
        <div className="mt-2 flex items-center gap-1.5 text-xs text-neutral-500">
          <Layers size={13} className="text-neutral-400" />
          <span>{course.studyArea}</span>
          {countryName && <span>• {countryName}</span>}
        </div>

        {/* Tuition Box */}
        <div className="mt-4 rounded-xl bg-neutral-50 border border-neutral-200/70 p-3">
          <div className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
            Average Annual Fee
          </div>
          <div className="mt-0.5 text-sm font-bold text-[#253A7B]">
            {course.averageFee}
          </div>
        </div>

        {/* Career Prospects */}
        {course.careerProspects && course.careerProspects.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
              <Briefcase size={12} />
              Career Outcomes
            </div>
            <div className="flex flex-wrap gap-1.5">
              {course.careerProspects.map((career) => (
                <span
                  key={career}
                  className="rounded-md border border-neutral-200 bg-neutral-50/80 px-2 py-0.5 text-[11px] font-medium text-neutral-700"
                >
                  {career}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-4 border-t border-neutral-100">
        <LeadCTAButton
          source={`explore_course_${course.id}`}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#253A7B] py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-[#1c2c5c] transition-all cursor-pointer active:scale-95"
        >
          <BookOpen size={16} />
          <span>Check Course Eligibility</span>
          <ArrowRight size={14} />
        </LeadCTAButton>
      </div>
    </div>
  );
};

export default CourseCard;
