"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export const LeadSuccess: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#EBF5EE]">
        <CheckCircle2 size={32} className="text-[#1E7B47]" />
      </div>

      <h3 className="font-hedvig text-2xl font-bold text-[#121314]">
        Thank you!
      </h3>

      <p className="mt-2 max-w-xs font-dmsans text-sm leading-relaxed text-gray-500">
        Our counsellor will contact you shortly. We typically respond within 2 hours during business hours.
      </p>

      <div className="mt-6 flex items-center gap-2 rounded-xl bg-[#EEF1FA] px-4 py-2.5">
        <span className="font-dmsans text-xs text-gray-500">You can also reach us at</span>
        <a
          href="tel:+919050180501"
          className="font-dmsans text-sm font-semibold text-[#253A7B] hover:underline"
        >
          +91 90501 80501
        </a>
      </div>
    </div>
  );
};

export default LeadSuccess;
