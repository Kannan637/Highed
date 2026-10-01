import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { ExploreResult, ExploreContentType, ExploreSortOption } from "@/types/explore";
import { countries } from "@/data/countries";
import UniversityCard from "./UniversityCard";
import CourseCard from "./CourseCard";
import ScholarshipCard from "./ScholarshipCard";
import ExploreEmptyState from "./ExploreEmptyState";
import ExploreSort from "./ExploreSort";
import { Button } from "@/components/ui/Button";

interface ExploreResultsProps {
  results: ExploreResult[];
  countryName?: string;
  onReset: () => void;
  query?: string;
  totalCount: number;
  activeSort: ExploreSortOption;
  onSortChange: (sort: ExploreSortOption) => void;
  activeType: ExploreContentType;
  onOpenFiltersMobile: () => void;
}

export const ExploreResults: React.FC<ExploreResultsProps> = ({
  results,
  countryName,
  onReset,
  query,
  totalCount,
  activeSort,
  onSortChange,
  activeType,
  onOpenFiltersMobile,
}) => {
  return (
    <div className="tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] [&_*]:[letter-spacing:var(--tracking-tight-5)]">
      {/* Results Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-200 mb-6">
        <div className="flex items-center gap-3">
          <p className="text-xs sm:text-sm font-semibold text-neutral-800">
            Showing <span className="text-brand-primary font-bold">{totalCount}</span> {totalCount === 1 ? "result" : "results"}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile Filter Button */}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onOpenFiltersMobile}
            className="lg:hidden h-10 rounded-full px-4 font-semibold border-black/10 gap-2 cursor-pointer"
          >
            <SlidersHorizontal size={15} />
            <span>Filters</span>
          </Button>

          {/* Sort Dropdown */}
          <ExploreSort
            value={activeSort}
            onChange={onSortChange}
            type={activeType}
          />
        </div>
      </div>

      {/* Grid or Empty State */}
      {results.length === 0 ? (
        <ExploreEmptyState onReset={onReset} query={query} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((item) => {
            const resolvedCountryName =
              countryName || countries[item.data.countrySlug]?.name || undefined;

            if (item.kind === "university") {
              return (
                <UniversityCard
                  key={item.data.id}
                  university={item.data}
                  countryName={resolvedCountryName}
                />
              );
            }
            if (item.kind === "course") {
              return (
                <CourseCard
                  key={item.data.id}
                  course={item.data}
                  countryName={resolvedCountryName}
                />
              );
            }
            if (item.kind === "scholarship") {
              return (
                <ScholarshipCard
                  key={item.data.id}
                  scholarship={item.data}
                  countryName={resolvedCountryName}
                />
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default ExploreResults;
