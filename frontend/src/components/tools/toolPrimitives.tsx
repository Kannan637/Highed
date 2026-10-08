"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, RotateCcw, AlertCircle, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb, { BreadcrumbItem } from "@/components/ui/Breadcrumb";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/* ---------------- Tool Shell & Hero ---------------- */

export interface ToolHeroProps {
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  description: string;
}

export const ToolHero: React.FC<ToolHeroProps> = ({
  breadcrumbs,
  eyebrow,
  title,
  description,
}) => {
  return (
    <header className="border-b border-[#E6E7EF] bg-white py-10 sm:py-14">
      <Container size="lg">
        <Breadcrumb items={breadcrumbs} className="mb-6" />
        <div className="max-w-3xl">
          <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-brand-accent">
            {eyebrow}
          </span>
          <h1 className="mt-3 text-[32px] font-bold leading-[1.1] text-brand-primary sm:text-[44px] lg:text-[48px]">
            {title}
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-content-secondary sm:text-[18px]">
            {description}
          </p>
        </div>
      </Container>
    </header>
  );
};

/* ---------------- Stepper & Progress ---------------- */

export interface ToolStepperProps {
  currentStep: number;
  totalSteps: number;
  stepTitles?: string[];
  onStepClick?: (step: number) => void;
  className?: string;
}

export const ToolStepper: React.FC<ToolStepperProps> = ({
  currentStep,
  totalSteps,
  stepTitles,
  onStepClick,
  className,
}) => {
  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between text-[13px] font-semibold text-content-secondary">
        <span>
          Step {currentStep} of {totalSteps}
          {stepTitles && stepTitles[currentStep - 1] && (
            <span className="ml-2 font-bold text-brand-primary">
              · {stepTitles[currentStep - 1]}
            </span>
          )}
        </span>
        <span className="text-brand-accent">{percentage}% completed</span>
      </div>

      <div
        className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-[#E6E7EF]"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-brand-accent transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {stepTitles && (
        <div className="mt-3 hidden items-center justify-between gap-2 md:flex">
          {stepTitles.map((title, idx) => {
            const stepNum = idx + 1;
            const isCurrent = stepNum === currentStep;
            const isCompleted = stepNum < currentStep;

            return (
              <button
                key={title}
                type="button"
                disabled={!onStepClick || stepNum > currentStep}
                onClick={() => onStepClick && onStepClick(stepNum)}
                className={cn(
                  "flex-1 text-left text-[12px] font-medium transition-colors",
                  isCurrent
                    ? "font-bold text-brand-primary"
                    : isCompleted
                    ? "cursor-pointer text-brand-accent hover:underline"
                    : "text-content-secondary/60"
                )}
              >
                {stepNum}. {title}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

/* ---------------- Form Fields ---------------- */

export interface FormFieldWrapperProps {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const FormFieldWrapper: React.FC<FormFieldWrapperProps> = ({
  id,
  label,
  error,
  hint,
  required,
  children,
  className,
}) => {
  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-[14px] font-semibold text-content-primary"
        >
          {label}
          {required && <span className="ml-1 text-brand-accent">*</span>}
        </label>
        {hint && !error && (
          <span className="text-[12px] text-content-secondary">{hint}</span>
        )}
      </div>

      {children}

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="flex items-center gap-1.5 text-[12px] font-medium text-destructive"
        >
          <AlertCircle size={14} className="shrink-0" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

/* ---------------- Results Presentation ---------------- */

export interface ResultMetricProps {
  label: string;
  value: string;
  subValue?: string;
  badge?: string;
  highlight?: boolean;
  className?: string;
}

export const ResultMetric: React.FC<ResultMetricProps> = ({
  label,
  value,
  subValue,
  badge,
  highlight = false,
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border p-5 transition-all sm:p-6",
        highlight
          ? "border-brand-primary/20 bg-brand-primary text-white shadow-md"
          : "border-[#E6E7EF] bg-white text-content-primary",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span
          className={cn(
            "text-[12px] font-semibold uppercase tracking-wider",
            highlight ? "text-white/70" : "text-content-secondary"
          )}
        >
          {label}
        </span>
        {badge && (
          <span
            className={cn(
              "rounded-full px-2.5 py-0.5 text-[11px] font-bold",
              highlight
                ? "bg-white/15 text-white"
                : "bg-brand-accent/10 text-brand-accent"
            )}
          >
            {badge}
          </span>
        )}
      </div>

      <p
        className={cn(
          "mt-2.5 text-[28px] font-bold tracking-tight sm:text-[36px]",
          highlight ? "text-white" : "text-brand-primary"
        )}
      >
        {value}
      </p>

      {subValue && (
        <p
          className={cn(
            "mt-1 text-[13px]",
            highlight ? "text-white/80" : "text-content-secondary"
          )}
        >
          {subValue}
        </p>
      )}
    </div>
  );
};

/* ---------------- Reset & CTA ---------------- */

export interface ToolResetProps {
  onReset: () => void;
  label?: string;
  className?: string;
}

export const ToolReset: React.FC<ToolResetProps> = ({
  onReset,
  label = "Reset Calculator",
  className,
}) => {
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={onReset}
      className={cn(
        "h-9 px-3 text-[13px] font-semibold text-content-secondary hover:bg-neutral-100 hover:text-brand-primary rounded-full cursor-pointer",
        className
      )}
    >
      <RotateCcw size={14} className="shrink-0" />
      <span>{label}</span>
    </Button>
  );
};

export interface ToolResetButtonProps {
  onReset: () => void;
  label?: string;
  className?: string;
}

export const ToolResetButton: React.FC<ToolResetButtonProps> = ({
  onReset,
  label = "Calculate Another",
  className,
}) => {
  return (
    <Button
      type="button"
      variant="outline"
      size="default"
      onClick={onReset}
      className={cn(
        "h-13 rounded-full border-black/15 bg-white px-6 text-[14px] font-semibold text-content-primary hover:bg-white hover:text-content-primary hover:border-black/15 shadow-none transition-none cursor-pointer",
        className
      )}
    >
      <RotateCcw size={15} className="shrink-0 text-content-secondary" />
      <span>{label}</span>
    </Button>
  );
};

export interface ToolCTAProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
  source: string;
  contextTitle?: string;
  className?: string;
}

export const ToolCTA: React.FC<ToolCTAProps> = ({
  headline = "Need a personalised university & cost plan?",
  subtext = "HighEd expert counsellors will review your profile, shortlisted countries, and scholarship eligibility free of charge.",
  buttonText = "Book Free Counselling",
  source,
  contextTitle,
  className,
}) => {
  return (
    <div
      className={cn(
        "mt-8 rounded-2xl border border-brand-primary/15 bg-gradient-to-br from-[#EEF1FA] to-white p-6 sm:p-8",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-white shadow-xs">
          <Sparkles size={18} />
        </span>
        <div>
          <h4 className="text-[18px] font-bold text-brand-primary sm:text-[20px]">
            {headline}
          </h4>
          <p className="mt-1.5 text-[14px] leading-relaxed text-content-secondary">
            {subtext}
          </p>
          <div className="mt-5">
            <LeadCTAButton
              source={source}
              contextTitle={contextTitle}
              forcePopup
              className="w-full sm:w-auto"
            >
              {buttonText}
            </LeadCTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};
