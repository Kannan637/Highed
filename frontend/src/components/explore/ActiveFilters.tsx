import React from "react";
import { X, RotateCcw } from "lucide-react";
import { ExploreFilters } from "@/types/explore";
import { countries } from "@/data/countries";

interface ActiveFiltersProps {
  filters: ExploreFilters;
  onRemove: (key: keyof ExploreFilters) => void;
  onClearAll: () => void;
  isCountryFixed?: boolean;
}

export const ActiveFilters: React.FC<ActiveFiltersProps> = ({
  filters,
  onRemove,
  onClearAll,
  isCountryFixed = false,
}) => {
  const chips: { key: keyof ExploreFilters; label: string; value: string }[] = [];

  if (filters.query) {
    chips.push({ key: "query", label: "Search", value: `"${filters.query}"` });
  }
  if (!isCountryFixed && filters.country && filters.country !== "all") {
    const cName = countries[filters.country.toLowerCase()]?.name || filters.country;
    chips.push({
      key: "country",
      label: "Country",
      value: cName,
    });
  }
  if (filters.type && filters.type !== "all") {
    chips.push({
      key: "type",
      label: "Type",
      value: filters.type.charAt(0).toUpperCase() + filters.type.slice(1),
    });
  }
  if (filters.level) {
    chips.push({
      key: "level",
      label: "Level",
      value: filters.level.charAt(0).toUpperCase() + filters.level.slice(1),
    });
  }
  if (filters.area) {
    chips.push({ key: "area", label: "Field", value: filters.area });
  }
  if (filters.scholarshipType) {
    chips.push({
      key: "scholarshipType",
      label: "Scholarship",
      value: filters.scholarshipType,
    });
  }

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6 pt-2">
      <span className="text-xs font-semibold text-neutral-400">Active Filters:</span>

      {chips.map((chip) => (
        <span
          key={chip.key}
          className="inline-flex items-center gap-1.5 rounded-full border border-[#253A7B]/20 bg-[#EEF1FA] px-3 py-1 text-xs font-semibold text-[#253A7B]"
        >
          <span>{chip.label}:</span>
          <span className="text-neutral-900">{chip.value}</span>
          <button
            type="button"
            onClick={() => onRemove(chip.key)}
            className="rounded-full p-0.5 hover:bg-[#253A7B]/10 transition-colors cursor-pointer"
            aria-label={`Remove ${chip.label} filter`}
          >
            <X size={12} />
          </button>
        </span>
      ))}

      <button
        type="button"
        onClick={onClearAll}
        className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-500 hover:text-[#E93F61] transition-colors ml-2 cursor-pointer"
      >
        <RotateCcw size={11} />
        <span>Clear All</span>
      </button>
    </div>
  );
};

export default ActiveFilters;
