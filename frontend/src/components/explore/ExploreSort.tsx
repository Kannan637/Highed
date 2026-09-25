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
      <ArrowUpDown size={15} className="text-muted-foreground shrink-0" />
      <span className="text-xs font-semibold text-muted-foreground hidden sm:inline">Sort:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as ExploreSortOption)}
        aria-label="Sort listings"
        className="h-10 rounded-full border border-black/10 bg-card px-4 text-xs sm:text-sm font-medium text-foreground shadow-2xs focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 cursor-pointer"
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
