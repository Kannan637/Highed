import React from "react";
import { SearchX, RotateCcw, Headset } from "lucide-react";
import { useLeadPopup } from "@/hooks/useLeadPopup";

interface ExploreEmptyStateProps {
  onReset: () => void;
  query?: string;
}

export const ExploreEmptyState: React.FC<ExploreEmptyStateProps> = ({
  onReset,
  query,
}) => {
  const { openLeadPopup } = useLeadPopup();

  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-neutral-300 bg-white p-8 sm:p-12 text-center shadow-xs">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-400 mb-5">
        <SearchX size={32} />
      </div>

      <h3 className="font-hedvig text-2xl font-bold text-neutral-900">
        No Matching Results Found
      </h3>

      <p className="mt-3 max-w-md text-sm text-neutral-500 leading-relaxed font-dmsans">
        {query
          ? `We couldn't find any listings matching "${query}".`
          : "We couldn't find any listings matching your active filter criteria."}
        {" "}Our database is constantly updating, and some niche programs may not be listed yet.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <button
          type="button"
          onClick={() => openLeadPopup({ source: "explore_empty_state" })}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#E93F61] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#d93657] transition-all active:scale-95 cursor-pointer"
        >
          <Headset size={16} />
          <span>Ask an Expert</span>
        </button>

        <button
          type="button"
          onClick={onReset}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-2.5 text-sm font-semibold text-neutral-700 shadow-sm hover:bg-neutral-50 hover:text-neutral-900 transition-all active:scale-95 cursor-pointer"
        >
          <RotateCcw size={14} />
          <span>Clear Filters</span>
        </button>
      </div>
    </div>
  );
};

export default ExploreEmptyState;
