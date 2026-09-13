"use client";

import { useEffect } from "react";
import { useLeadPopup } from "@/hooks/useLeadPopup";

export const AutoOpenLeadPopup = () => {
  const { openLeadPopup } = useLeadPopup();

  useEffect(() => {
    const timer = setTimeout(() => {
      openLeadPopup({ source: "book_counselling_page" });
    }, 400);

    return () => clearTimeout(timer);
  }, [openLeadPopup]);

  return null;
};

export default AutoOpenLeadPopup;
