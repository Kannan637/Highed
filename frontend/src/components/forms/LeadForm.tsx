"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { LeadService } from "@/services/lead.service";
import { LeadSubmission } from "@/types/lead";
import { validateLeadSubmission } from "@/lib/validations";
import PhoneInput from "./PhoneInput";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

interface LeadFormProps {
  defaultCountry?: string;
  title?: string;
  subtitle?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  defaultCountry = "Dubai",
  title = "Book Your Free Counselling",
  subtitle = "Speak directly with an expert advisor about admissions, scholarships, and visas.",
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
    if (isSubmittingRef.current || loading) return;

    // Client-side validation (ISS-035)
    const validationErrors = validateLeadSubmission(formData);
    if (validationErrors.length > 0) {
      const errorMap: Record<string, string> = {};
      validationErrors.forEach((err) => {
        errorMap[err.field] = err.message;
      });
      setFieldErrors(errorMap);
      setStatus({
        type: "error",
        message: "Please correct the errors in the form below before submitting.",
      });
      return;
    }

    setFieldErrors({});
    isSubmittingRef.current = true;
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const result = await LeadService.submitLead(formData);
      if (result.success) {
        setStatus({
          type: "success",
          message: result.message,
        });
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
          message: result.message,
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      isSubmittingRef.current = false;
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-border-default bg-white p-8 shadow-lg sm:p-10">
      <h3 className="font-heading text-2xl font-bold text-content-primary">{title}</h3>
      <p className="mt-2 font-body text-sm text-content-secondary">{subtitle}</p>

      {status.type === "success" ? (
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-icon-bg-success p-5 text-sm text-[#1E7B47]">
          <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
          <div>
            <div className="font-bold">Request Submitted!</div>
            <div className="mt-1">{status.message}</div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
          {status.type === "error" && (
            <div className="flex items-center gap-2 rounded-xl bg-icon-bg-accent p-3 text-sm text-brand-accent" role="alert">
              <AlertCircle size={16} className="shrink-0" />
              <span>{status.message}</span>
            </div>
          )}

          {/* Full Name */}
          <div>
            <label htmlFor="lead-fullName" className="mb-1.5 block font-body text-xs font-semibold text-content-secondary">
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
              aria-describedby={fieldErrors.fullName ? "lead-fullName-error" : undefined}
            />
            {fieldErrors.fullName && (
              <p id="lead-fullName-error" className="mt-1 font-body text-xs text-brand-accent" role="alert">
                {fieldErrors.fullName}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Email Address */}
            <div>
              <label htmlFor="lead-email" className="mb-1.5 block font-body text-xs font-semibold text-content-secondary">
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
                aria-describedby={fieldErrors.email ? "lead-email-error" : undefined}
              />
              {fieldErrors.email && (
                <p id="lead-email-error" className="mt-1 font-body text-xs text-brand-accent" role="alert">
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
                onCountryCodeChange={(code) => setFormData(prev => ({ ...prev, countryCode: code }))}
                onPhoneChange={(phone) => {
                  setFormData(prev => ({ ...prev, phone }));
                  if (fieldErrors.phone) {
                    setFieldErrors(prev => {
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
              <label htmlFor="lead-destinationCountry" className="mb-1.5 block font-body text-xs font-semibold text-content-secondary">
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
              <label htmlFor="lead-studyLevel" className="mb-1.5 block font-body text-xs font-semibold text-content-secondary">
                Study Level
              </label>
              <Select
                id="lead-studyLevel"
                name="studyLevel"
                value={formData.studyLevel}
                onChange={handleChange}
              >
                <option value="Undergraduate">Bachelor&apos;s Degree</option>
                <option value="Master's Degree">Master&apos;s / Postgraduate</option>
                <option value="MBA">MBA / Business</option>
                <option value="Doctorate">Doctorate / PhD</option>
                <option value="Diploma">Diploma / Pathway</option>
              </Select>
            </div>
          </div>

          <Button
            type="submit"
            variant="accent"
            size="default"
            fullWidth
            disabled={loading}
            className="mt-2 h-12 rounded-full gap-2 text-base font-semibold"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send size={16} />
                <span>Confirm My Counselling Session</span>
              </>
            )}
          </Button>

          <p className="text-center font-body text-[11px] text-gray-400">
            🔒 Your details are 100% confidential. No spam, ever.
          </p>
        </form>
      )}
    </div>
  );
};

export default LeadForm;