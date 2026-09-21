import React from "react";
import { ArrowUpDown } from "lucide-react";
import { ExploreSortOption, ExploreContentType } from "@/types/explore";

interface ExploreSortProps {
  value: ExploreSortOption;
  onChange: (sort: ExploreSortOption) => void;
  type: ExploreContentType;
}

export const ExploreSort: React.FC<ExploreSortProps> = ({
  value,
  onChange,
  type,
}) => {
  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown size={14} className="text-neutral-400 shrink-0" />
      <span className="text-xs font-medium text-neutral-500 hidden sm:inline">Sort:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as ExploreSortOption)}
        aria-label="Sort listings"
        className="rounded-xl border border-neutral-300 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 shadow-2xs focus:border-brand-primary focus:outline-none cursor-pointer"
      >
        <option value="recommended">Recommended</option>
        <option value="name">Alphabetical (A-Z)</option>
        {type === "universities" && <option value="ranking">Global Ranking</option>}
        {(type === "universities" || type === "courses") && (
          <option value="tuition">Tuition (Lowest)</option>
        )}
        {type === "courses" && <option value="duration">Duration</option>}
        {type === "scholarships" && <option value="coverage">Coverage (Highest)</option>}
      </select>
    </div>
  );
};

export default ExploreSort;
