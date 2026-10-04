"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";
import { LeadService } from "@/services/lead.service";
import { LeadSubmission } from "@/types/lead";
import { validateLeadSubmission } from "@/lib/validations";
import PhoneInput from "./PhoneInput";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { cn } from "@/lib/utils";
import LeadCTAButton from "./LeadCTAButton";
interface LeadFormProps {
  id?: string;
  defaultCountry?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  /** Image to display on the right panel. Pass `null` to hide the image panel entirely. */
  imageSrc?: string | null;
  imageAlt?: string;
  /** Whether to show the top gradient header banner. Defaults to true. */
  showHeader?: boolean;
}

/* =========================================================
   TRUST SIGNAL CHIPS
========================================================= */

const trustSignals = [
  { icon: ShieldCheck, text: "100% Confidential" },
  { icon: Clock, text: "Callback in 2 hrs" },
  { icon: Sparkles, text: "Free Expert Guidance" },
];

/* =========================================================
   LEAD FORM COMPONENT
========================================================= */

export const LeadForm: React.FC<LeadFormProps> = ({
  id = "lead-form",
  defaultCountry = "Dubai",
  title = "Book Your Free Counselling",
  subtitle = "Speak directly with an expert advisor about admissions, scholarships, and visas.",
  className = "",
  imageSrc = "/images/form/oo1.webp",
  imageAlt = "Student receiving study abroad counselling",
  showHeader = true,
}) => {
  const [formData, setFormData] = useState<LeadSubmission>({
    fullName: "",
    email: "",
    phone: "",
    destinationCountry: defaultCountry,
    studyLevel: "Master's Degree",
    preferredCourse: "",
    countryCode: "+91",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const isSubmittingRef = React.useRef(false);

  const clearStatus = () => {
    if (status.type !== null) {
      setStatus({ type: null, message: "" });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Editing the form means the previous server/submit message is no
    // longer the most useful feedback.
    clearStatus();

    // Clear error for edited field
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate submissions from rapid clicks / double events.
    if (isSubmittingRef.current || loading) return;

    setStatus({ type: null, message: "" });

    let validationErrors;
    try {
      validationErrors = validateLeadSubmission(formData);
    } catch {
      setFieldErrors({});
      setStatus({
        type: "error",
        message: "Please check the form details and try again.",
      });
      return;
    }

    if (validationErrors.length > 0) {
      const errorMap: Record<string, string> = {};

      validationErrors.forEach((err) => {
        if (err?.field) {
          errorMap[err.field] = err.message || "Please check this field.";
        }
      });

      setFieldErrors(errorMap);
      setStatus({
        type: "error",
        message:
          "Please correct the highlighted fields before submitting.",
      });

      // Move focus to the first invalid field when possible.
      const firstInvalidField = validationErrors[0]?.field;
      if (firstInvalidField) {
        window.requestAnimationFrame(() => {
          document
            .querySelector<HTMLElement>(`[name="${firstInvalidField}"]`)
            ?.focus();
        });
      }

      return;
    }

    setFieldErrors({});
    isSubmittingRef.current = true;
    setLoading(true);

    try {
      const result = await LeadService.submitLead(formData);

      if (result?.success) {
        setStatus({
          type: "success",
          message:
            result.message ||
            "Your counselling request has been submitted successfully. Our advisor will contact you shortly.",
        });

        // Reset only after the API confirms success.
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          countryCode: "+91",
          destinationCountry: defaultCountry,
          studyLevel: "Master's Degree",
          preferredCourse: "",
        });
      } else {
        setStatus({
          type: "error",
          message:
            result?.message ||
            "We couldn't submit your request. Please check your details and try again.",
        });
      }
    } catch (error) {
      console.error("Lead form submission failed:", error);

      setStatus({
        type: "error",
        message:
          "We couldn't submit your request right now. Please try again in a moment.",
      });
    } finally {
      isSubmittingRef.current = false;
      setLoading(false);
    }
  };

  /* -------------------------------------------------------
     Split title around "Free" to render accent text
  ------------------------------------------------------- */
  const renderTitle = () => {
    if (typeof title !== "string") return title;
    const target = "Free";
    const idx = title.indexOf(target);
    if (idx === -1) return title;

    const before = title.slice(0, idx);
    const matched = title.slice(idx, idx + target.length);
    const after = title.slice(idx + target.length);

    return (
      <>
        {before}
        <span className="text-brand-accent">{matched}</span>
        {after}
      </>
    );
  };

  const showImage = imageSrc !== null;

  return (
    <div
      id={id}
      className={cn(
        "scroll-mt-28 overflow-hidden rounded-3xl ",
        className
      )}
    >
      <div
        className={cn(
          "grid min-h-[620px] grid-cols-1",
          showImage && "lg:grid-cols-12"
        )}
      >
        {/* =====================================================
            LEFT — Header + Form
        ====================================================== */}
        <div
          className={cn(
            "flex flex-col",
            showImage ? "lg:col-span-7" : "lg:col-span-12"
          )}
        >
          {/* Header — Brand gradient panel */}
          {showHeader && (
            <div className="relative overflow-hidden  px-6 pb-7 pt-6 sm:px-8 sm:pb-8 sm:pt-7">
              {/* Eyebrow badge */}
              <div className="mb-4 inline-flex h-7 items-center gap-1.5 rounded-full bg-brand-accent px-3 ">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffffff]" />
                <span className="font-body text-xs font-semibold text-white">
                  Free 1-on-1 Consultation
                </span>
              </div>

              <h3 className="relative z-10 max-w-xl text-2xl font-semibold leading-tight tracking-tight text-brand-primary sm:text-3xl">
                {renderTitle()}
              </h3>
              <p className="relative z-10 mt-2 max-w-md text-sm leading-relaxed text-content-secondary">
                {subtitle}
              </p>
            </div>
          )}

          {/* Form Body */}
          <div className="flex flex-1 flex-col px-6 pb-7 pt-6 sm:px-8 sm:pb-8 sm:pt-7">
            {status.type === "success" ? (
              <div
                className="flex items-start gap-3 rounded-2xl border border-[#BFE8CF] bg-icon-bg-success p-5 text-sm text-[#1E7B47]"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2 size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <div className="font-bold">Request Submitted Successfully</div>
                  <div className="mt-1 leading-relaxed">{status.message}</div>
                  <button
                    type="button"
                    onClick={() => setStatus({ type: null, message: "" })}
                    className="mt-3 text-xs font-semibold underline underline-offset-2"
                  >
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-1 flex-col space-y-4"
                noValidate
              >
                {status.type === "error" && (
                  <div
                    className="flex items-start gap-2 rounded-xl border border-[#F3B6C3] bg-icon-bg-accent p-3 text-sm text-brand-accent"
                    role="alert"
                    aria-live="assertive"
                  >
                    <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="leading-relaxed">{status.message}</span>
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="lead-fullName"
                    className="mb-1.5 block font-body text-xs font-semibold text-content-secondary"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="lead-fullName"
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={formData.fullName}
                    onChange={handleChange}
                    error={!!fieldErrors.fullName}
                    aria-invalid={!!fieldErrors.fullName}
                    aria-describedby={
                      fieldErrors.fullName
                        ? "lead-fullName-error"
                        : undefined
                    }
                  />
                  {fieldErrors.fullName && (
                    <p
                      id="lead-fullName-error"
                      className="mt-1 font-body text-xs text-brand-accent"
                      role="alert"
                    >
                      {fieldErrors.fullName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="lead-email"
                      className="mb-1.5 block font-body text-xs font-semibold text-content-secondary"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="lead-email"
                      type="email"
                      name="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!fieldErrors.email}
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={
                        fieldErrors.email
                          ? "lead-email-error"
                          : undefined
                      }
                    />
                    {fieldErrors.email && (
                      <p
                        id="lead-email-error"
                        className="mt-1 font-body text-xs text-brand-accent"
                        role="alert"
                      >
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <PhoneInput
                      id="lead-phone"
                      countryCode={formData.countryCode || "+91"}
                      phone={formData.phone}
                      onCountryCodeChange={(code) =>
                        setFormData((prev) => ({
                          ...prev,
                          countryCode: code,
                        }))
                      }
                      onPhoneChange={(phone) => {
                        setFormData((prev) => ({ ...prev, phone }));
                        if (fieldErrors.phone) {
                          setFieldErrors((prev) => {
                            const next = { ...prev };
                            delete next.phone;
                            return next;
                          });
                        }
                      }}
                      error={fieldErrors.phone}
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Target Country */}
                  <div>
                    <label
                      htmlFor="lead-destinationCountry"
                      className="mb-1.5 block font-body text-xs font-semibold text-content-secondary"
                    >
                      Target Country
                    </label>
                    <Select
                      id="lead-destinationCountry"
                      name="destinationCountry"
                      value={formData.destinationCountry}
                      onChange={handleChange}
                    >
                      <option value="Dubai">Dubai (UAE)</option>
                      <option value="USA">United States (USA)</option>
                      <option value="UK">United Kingdom (UK)</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                    </Select>
                  </div>

                  {/* Study Level */}
                  <div>
                    <label
                      htmlFor="lead-studyLevel"
                      className="mb-1.5 block font-body text-xs font-semibold text-content-secondary"
                    >
                      Study Level
                    </label>
                    <Select
                      id="lead-studyLevel"
                      name="studyLevel"
                      value={formData.studyLevel}
                      onChange={handleChange}
                    >
                      <option value="Undergraduate">
                        Bachelor&apos;s Degree
                      </option>
                      <option value="Master's Degree">
                        Master&apos;s / Postgraduate
                      </option>
                      <option value="MBA">MBA / Business</option>
                      <option value="Doctorate">Doctorate / PhD</option>
                      <option value="Diploma">Diploma / Pathway</option>
                    </Select>
                  </div>
                </div>

                {/* Spacer to push button down in tall layouts */}
                <div className="flex-1" />

                {/* Submit — iconBadge pill style */}
                <LeadCTAButton
                  type="submit"
                  variant="accent"
                  size="default"
                  fullWidth
                  disabled={loading}
                  aria-busy={loading}
                  iconBadge={
                    loading ? (
                      <Loader2 size={17} className="animate-spin" />
                    ) : (
                      <ArrowRight size={17} />
                    )
                  }
                  className="mt-3 h-[52px] w-fit text-base font-semibold text-white"
                >
                  {loading
                    ? "Submitting..."
                    : "Confirm My Counselling Session"}
                </LeadCTAButton>

                {/* Trust signal chips */}
                <div className="flex flex-wrap justify-start gap-2 pt-1">
                  {trustSignals.map((signal) => (
                    <div
                      key={signal.text}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border-default bg-surface-neutral px-3 py-1.5 text-[11px] font-medium text-content-secondary"
                    >
                      <signal.icon
                        size={12}
                        className="shrink-0 text-brand-primary"
                      />
                      <span>{signal.text}</span>
                    </div>
                  ))}
                </div>
              </form>
            )}
          </div>
        </div>

        {/* =====================================================
            RIGHT — Image Panel (hidden on mobile)
        ====================================================== */}
        {showImage && (
          <div className="relative hidden min-h-[620px] lg:col-span-5 lg:block">
            {/* Image */}
            <div className="relative z-10 flex h-full items-end justify-center">
              <div className="relative h-full w-full overflow-hidden rounded-4xl">
                <Image
                  src={imageSrc!}
                  alt={imageAlt || "Student counselling"}
                  fill
                  sizes="(min-width: 1024px) 42vw, 0vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Floating stat card — top-right (matches Hero.tsx pattern) */}
              <div className="absolute right-4 top-6 z-20 w-[140px] rounded-[20px] bg-[#FFE59A] p-3.5 text-[#253A7B] shadow-[0_15px_35px_rgba(8,18,55,0.18)]">
                <div className="text-[32px] font-normal leading-none tracking-[-0.06em]">
                  7
                </div>
                <div className="mt-1 text-[12px] font-medium leading-tight">
                  Top Destinations
                </div>
              </div>

              {/* Floating stat card — bottom-left */}
              <div className="absolute bottom-8 left-4 z-20 rounded-[20px] bg-white px-4 py-3 text-[#253A7B] shadow-[0_15px_35px_rgba(8,18,55,0.18)]">
                <div className="text-[28px] font-semibold leading-none tracking-[-0.06em]">
                  100%
                </div>
                <div className="mt-1 text-[11px] font-medium leading-tight">
                  Free Advisory
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div >
  );
};

export default LeadForm;