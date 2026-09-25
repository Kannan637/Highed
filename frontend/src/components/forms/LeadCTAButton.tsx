"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useLeadPopup } from "@/hooks/useLeadPopup";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const MASTER_CTA_CLASSNAME =
  "group/primary inline-flex h-[48px] w-fit items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#E93F61] to-[#D93657] text-center text-[16px] font-normal text-white shadow-[0_6px_20px_rgba(233,63,97,0.25)] outline-2 -outline-offset-2 outline-white/20 transition-all duration-200 ease-out hover:from-[#D93657] hover:to-[#C92F4F] hover:shadow-[0_8px_24px_rgba(233,63,97,0.32)] active:scale-[0.96]";

export const MasterCtaIcon = () => (
  <ArrowRight
    size={20}
    strokeWidth={2}
    aria-hidden="true"
    className="transition-transform duration-300 group-hover/primary:translate-x-0.5"
  />
);

export interface LeadCTAButtonProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Button>, "onClick"> {
  source?: string;
  contextTitle?: string;
  contextCTA?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const LeadCTAButton: React.FC<LeadCTAButtonProps> = ({
  source = "cta",
  contextTitle,
  contextCTA,
  className = "",
  variant = "accent",
  size = "default",
  iconBadge,
  children = "Book Free Counselling",
  onClick,
  ...props
}) => {
  const { openLeadPopup } = useLeadPopup();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) onClick();
    openLeadPopup({ source, contextTitle, contextCTA });
  };

  const isMasterAccent = variant === "accent";

  return (
    <Button
      type="button"
      onClick={handleClick}
      variant={variant}
      size={size}
      className={cn(isMasterAccent && MASTER_CTA_CLASSNAME, className)}
      iconBadge={
        iconBadge !== undefined
          ? iconBadge
          : isMasterAccent
          ? <MasterCtaIcon />
          : undefined
      }
      {...props}
    >
      {children}
    </Button>
  );
};

export default LeadCTAButton;