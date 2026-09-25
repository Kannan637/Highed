"use client";

import React from "react";
import { SearchX, RotateCcw, Headset } from "lucide-react";
import { Button } from "@/components/ui/Button";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface ExploreEmptyStateProps {
  onReset: () => void;
  query?: string;
}

export const ExploreEmptyState: React.FC<ExploreEmptyStateProps> = ({
  onReset,
  query,
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-black/10 bg-white p-8 sm:p-12 text-center shadow-xs">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-400 mb-5">
        <SearchX size={32} />
      </div>

      <h3 className="font-heading text-2xl font-bold text-neutral-900">
        No Matching Results Found
      </h3>

      <p className="mt-3 max-w-md text-sm text-neutral-500 leading-relaxed font-body">
        {query
          ? `We couldn't find any listings matching "${query}".`
          : "We couldn't find any listings matching your active filter criteria."}
        {" "}Our database is constantly updating, and some niche programs may not be listed yet.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <LeadCTAButton
          source="explore_empty_state"
          variant="accent"
          size="default"
          className="w-full sm:w-auto gap-2"
        >
          <Headset size={16} />
          <span>Ask an Expert</span>
        </LeadCTAButton>

        <Button
          type="button"
          variant="outline"
          size="default"
          onClick={onReset}
          className="w-full sm:w-auto gap-2"
        >
          <RotateCcw size={14} />
          <span>Clear Filters</span>
        </Button>
      </div>
    </div>
  );
};

export default ExploreEmptyState;
