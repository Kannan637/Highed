"use client";

import { useContext } from "react";
import { LeadPopupContext } from "@/components/forms/LeadPopupProvider";

export function useLeadPopup() {
  const context = useContext(LeadPopupContext);
  if (!context) {
    throw new Error("useLeadPopup must be used within a LeadPopupProvider");
  }
  return context;
}

export default useLeadPopup;
