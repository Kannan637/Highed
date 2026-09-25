"use client";

import React from "react";
import { Search, X } from "lucide-react";
import {
  ExploreFilters as FiltersType,
  ExploreContentType,
  CourseLevel,
  ScholarshipType,
} from "@/types/explore";
import { allCountries } from "@/data/countries";

interface ExploreFiltersProps {
  filters: FiltersType;
  onChange: (filters: FiltersType) => void;
  studyAreas: string[];
  counts: {
    all: number;
    universities: number;
    courses: number;
    scholarships: number;
  };
  showCountryFilter?: boolean;
}

export const ExploreFilters: React.FC<ExploreFiltersProps> = ({
  filters,
  onChange,
  studyAreas,
  counts,
  showCountryFilter = false,
}) => {
  const handleCountryChange = (countrySlug: string) => {
    onChange({
      ...filters,
      country: countrySlug === "all" ? undefined : countrySlug,
    });
  };

  const handleTypeChange = (type: ExploreContentType) => {
    onChange({
      ...filters,
      type,
      // Clear inapplicable filters
      ...(type === "universities" ? { level: undefined, scholarshipType: undefined } : {}),
      ...(type === "scholarships" ? { level: undefined, area: undefined } : {}),
      ...(type === "courses" ? { scholarshipType: undefined } : {}),
    });
  };

  const handleLevelChange = (level?: CourseLevel) => {
    onChange({ ...filters, level });
  };

  const handleAreaChange = (area?: string) => {
    onChange({ ...filters, area });
  };

  const handleScholarshipTypeChange = (scholarshipType?: ScholarshipType) => {
    onChange({ ...filters, scholarshipType });
  };

  const handleQueryChange = (query: string) => {
    onChange({ ...filters, query: query || undefined });
  };

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div>
        <label htmlFor="explore-search" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
          Keyword Search
        </label>
        <div className="relative">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            id="explore-search"
            type="text"
            value={filters.query || ""}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Search degrees, universities..."
            className="w-full h-12 rounded-xl border border-input bg-background py-2.5 pl-10 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
          />
          {filters.query && (
            <button
              type="button"
              onClick={() => handleQueryChange("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 size-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground"
              aria-label="Clear search query"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Content Type Filter */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
          Directory Category
        </h4>
        <div className="space-y-1.5">
          {[
            { id: "all", label: "All Categories", count: counts.all },
            { id: "universities", label: "Universities", count: counts.universities },
            { id: "courses", label: "Degree Courses", count: counts.courses },
            { id: "scholarships", label: "Scholarships", count: counts.scholarships },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleTypeChange(item.id as ExploreContentType)}
              className={`flex w-full items-center justify-between min-h-[44px] sm:min-h-12 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all cursor-pointer ${
                filters.type === item.id
                  ? "bg-brand-primary text-white shadow-xs"
                  : "text-foreground hover:bg-neutral-100"
              }`}
            >
              <span>{item.label}</span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                  filters.type === item.id
                    ? "bg-white/20 text-white"
                    : "bg-neutral-100 text-muted-foreground"
                }`}
              >
                {item.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Destination Country Filter (for common/global explore directory) */}
      {showCountryFilter && (
        <div className="pt-5 border-t border-border">
          <div className="flex items-center justify-between mb-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Destination Country
            </h4>
            {filters.country && (
              <button
                type="button"
                onClick={() => handleCountryChange("all")}
                className="text-xs font-semibold text-brand-primary hover:underline cursor-pointer"
              >
                Reset
              </button>
            )}
          </div>
          <div className="space-y-1">
            <button
              type="button"
              onClick={() => handleCountryChange("all")}
              className={`flex w-full items-center justify-between min-h-[44px] rounded-xl px-3.5 py-2 text-sm font-semibold transition-all cursor-pointer ${
                !filters.country
                  ? "bg-brand-primary text-white shadow-xs"
                  : "text-foreground hover:bg-neutral-100"
              }`}
            >
              <span className="flex items-center gap-2">
                <span>🌐</span>
                <span>All Countries</span>
              </span>
            </button>

            {allCountries.map((c) => {
              const isSelected = filters.country === c.slug;
              return (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => handleCountryChange(c.slug)}
                  className={`flex w-full items-center justify-between min-h-[44px] rounded-xl px-3.5 py-2 text-sm font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-brand-primary text-white shadow-xs"
                      : "text-foreground hover:bg-neutral-100"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{c.flag}</span>
                    <span>{c.name}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Course Level Filter (shown for all or courses) */}
      {(filters.type === "all" || filters.type === "courses") && (
        <div className="pt-5 border-t border-border">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
            Degree Level
          </h4>
          <div className="space-y-1">
            {[
              { id: undefined, label: "All Levels" },
              { id: "undergraduate", label: "Undergraduate (Bachelor's)" },
              { id: "postgraduate", label: "Postgraduate (Master's)" },
              { id: "doctorate", label: "Doctorate / PhD" },
              { id: "diploma", label: "Diplomas & Certificates" },
            ].map((lvl, idx) => (
              <label
                key={idx}
                className="flex items-center gap-3 min-h-[44px] rounded-xl px-3 py-2 text-sm text-foreground hover:bg-neutral-50 cursor-pointer"
              >
                <input
                  type="radio"
                  name="course-level"
                  checked={filters.level === lvl.id}
                  onChange={() => handleLevelChange(lvl.id as CourseLevel | undefined)}
                  className="size-4 accent-[#253A7B] cursor-pointer"
                />
                <span>{lvl.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Study Area / Field of Study Filter */}
      {(filters.type === "all" || filters.type === "courses") && studyAreas.length > 0 && (
        <div className="pt-5 border-t border-border">
          <label htmlFor="study-area-select" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
            Field of Study
          </label>
          <select
            id="study-area-select"
            value={filters.area || ""}
            onChange={(e) => handleAreaChange(e.target.value || undefined)}
            className="w-full h-12 rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground shadow-2xs focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 cursor-pointer"
          >
            <option value="">All Disciplines ({studyAreas.length})</option>
            {studyAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Scholarship Type Filter */}
      {(filters.type === "all" || filters.type === "scholarships") && (
        <div className="pt-5 border-t border-border">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
            Scholarship Funding Type
          </h4>
          <div className="space-y-1">
            {[
              { id: undefined, label: "All Scholarship Types" },
              { id: "Government", label: "Government Sponsored" },
              { id: "University", label: "University Specific" },
              { id: "Merit", label: "Academic Merit" },
              { id: "Research", label: "Doctoral & Research" },
            ].map((st, idx) => (
              <label
                key={idx}
                className="flex items-center gap-3 min-h-[44px] rounded-xl px-3 py-2 text-sm text-foreground hover:bg-neutral-50 cursor-pointer"
              >
                <input
                  type="radio"
                  name="scholarship-type"
                  checked={filters.scholarshipType === st.id}
                  onChange={() =>
                    handleScholarshipTypeChange(st.id as ScholarshipType | undefined)
                  }
                  className="size-4 accent-[#253A7B] cursor-pointer"
                />
                <span>{st.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreFilters;
