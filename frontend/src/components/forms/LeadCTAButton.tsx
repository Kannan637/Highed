"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useLeadPopup } from "@/hooks/useLeadPopup";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const MASTER_CTA_CLASSNAME =
  "group/primary rounded-full bg-gradient-to-b from-[#D9254C] to-[#B91C3C] text-center text-[16px] font-semibold text-white shadow-[0_6px_20px_rgba(185,28,60,0.28)] outline-2 -outline-offset-2 outline-white/20 hover:from-[#C71F42] hover:to-[#9F1632] hover:shadow-[0_8px_24px_rgba(185,28,60,0.36)]";

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
  forcePopup?: boolean;
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
  forcePopup = false,
  onClick,
  ...props
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { openLeadPopup } = useLeadPopup();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.type === "submit") {
      if (onClick) onClick();
      return;
    }

    e.preventDefault();
    if (onClick) onClick();

    if (!forcePopup) {
      const isLandingPage = pathname === "/" || pathname === "";

      // On landing page: smooth scroll down to the form
      if (isLandingPage) {
        const formElement = document.getElementById("lead-form");
        if (formElement) {
          formElement.scrollIntoView({ behavior: "smooth", block: "start" });
          const firstInput = formElement.querySelector<HTMLInputElement | HTMLSelectElement>(
            "input:not([type=hidden]), select"
          );
          if (firstInput) {
            setTimeout(() => {
              firstInput.focus({ preventScroll: true });
            }, 450);
          }
          return;
        }
      }

      // If already on the dedicated form page, scroll to the form
      if (pathname === "/book-counselling") {
        const formElement = document.getElementById("lead-form");
        if (formElement) {
          formElement.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      // On other pages: redirect to dedicated form page
      router.push("/book-counselling");
      return;
    }

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