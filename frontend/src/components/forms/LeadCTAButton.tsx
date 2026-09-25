"use client";

import React from "react";
import { useLeadPopup } from "@/hooks/useLeadPopup";
import { Button } from "@/components/ui/Button";

interface LeadCTAButtonProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Button>, "onClick"> {
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
  variant = "primary",
  size = "md",
  children,
  onClick,
  ...props
}) => {
  const { openLeadPopup } = useLeadPopup();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) onClick();
    openLeadPopup({ source, contextTitle, contextCTA });
  };

  return (
    <Button
      type="button"
      onClick={handleClick}
      variant={variant}
      size={size}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
};

export default LeadCTAButton;
