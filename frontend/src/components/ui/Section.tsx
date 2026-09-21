import React from "react";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg" | "none";
  containerSize?: "sm" | "md" | "lg" | "full";
  bg?: "default" | "subtle" | "neutral";
  children: React.ReactNode;
  /** Render without a Container wrapper (e.g. when children manage their own width) */
  noContainer?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      spacing = "md",
      containerSize = "lg",
      bg = "default",
      noContainer = false,
      children,
      ...props
    },
    ref
  ) => {
    const spacingStyles = {
      none: "",
      sm: "py-12 sm:py-16",
      md: "py-16 sm:py-24",
      lg: "py-20 sm:py-28",
    };

    const bgStyles = {
      default: "bg-surface-default",
      subtle: "bg-surface-subtle",
      neutral: "bg-surface-neutral",
    };

    return (
      <section
        ref={ref}
        className={cn(spacingStyles[spacing], bgStyles[bg], className)}
        {...props}
      >
        {noContainer ? (
          children
        ) : (
          <Container size={containerSize}>{children}</Container>
        )}
      </section>
    );
  }
);

Section.displayName = "Section";
export default Section;
