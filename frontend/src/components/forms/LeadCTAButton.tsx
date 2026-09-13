"use client";

import React from "react";
import { useLeadPopup } from "@/hooks/useLeadPopup";

interface LeadCTAButtonProps {
  source?: string;
  contextTitle?: string;
  contextCTA?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const LeadCTAButton: React.FC<LeadCTAButtonProps> = ({
  source = "cta",
  contextTitle,
  contextCTA,
  className = "",
  children,
  onClick,
}) => {
  const { openLeadPopup } = useLeadPopup();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) onClick();
    openLeadPopup({ source, contextTitle, contextCTA });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
};

export default LeadCTAButton;
