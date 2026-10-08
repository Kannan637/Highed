"use client";

import React, {
    useState,
    useRef,
    useEffect,
    useCallback,
} from "react";

import {
    X,
    Calendar,
    Clock,
    MapPin,
    Video,
    User,
    Mail,
    CheckCircle2,
    CalendarPlus,
    ChevronDown,
    Loader2,
    AlertCircle,
    Users,
} from "lucide-react";

import gsap from "gsap";
import { EventItem } from "@/data/events";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import PhoneInput from "@/components/forms/PhoneInput";
import EyebrowBadge from "../ui/EyebrowBadge";

interface EventRegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
    event: EventItem | null;
    onSuccess?: (registrationData: any) => void;
}

interface RegistrationInfo {
    eventTitle: string;
    eventDate: string;
    eventTime: string;
    location: string;
    isOnline: boolean;
    fullName: string;
    email: string;
    phone: string;
    countryCode: string;
    destinationCountry: string;
    studyLevel: string;
    attendeeCount: number;
}

const STUDY_LEVEL_OPTIONS = [
    "12th / High School Senior",
    "Undergraduate Student (Final Year)",
    "Undergraduate Student (Pre-Final Year)",
    "Bachelor's Degree Graduate",
    "Master's Aspirant",
    "Working Professional",
    "Parent / Guardian",
];

const DESTINATION_OPTIONS = [
    "United Kingdom (UK)",
    "United States (USA)",
    "Canada",
    "Australia",
    "Germany",
    "Dubai (UAE)",
    "Ireland",
    "Undecided / Open to Advice",
];

const ATTENDEE_OPTIONS = [
    {
        value: 1,
        label: "1 Person",
    },
    {
        value: 2,
        label: "2 People",
    },
    {
        value: 3,
        label: "3 People",
    },
];

export default function EventRegistrationModal({
    isOpen,
    onClose,
    event,
    onSuccess,
}: EventRegistrationModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);
    const isSubmittingRef = useRef(false);

    // =========================================================
    // FORM
    // =========================================================

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [countryCode, setCountryCode] = useState("+91");
    const [phone, setPhone] = useState("");

    const [studyLevel, setStudyLevel] = useState(
        "Undergraduate Student (Final Year)",
    );

    const [destinationCountry, setDestinationCountry] = useState(
        "United Kingdom (UK)",
    );

    const [attendeeCount, setAttendeeCount] = useState(1);

    const [company, setCompany] = useState("");

    // =========================================================
    // STATE
    // =========================================================

    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
    const [submitError, setSubmitError] = useState("");
    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [registration, setRegistration] =
        useState<RegistrationInfo | null>(null);

    // =========================================================
    // BODY SCROLL LOCK
    // =========================================================

    useEffect(() => {
        if (!isOpen) return;

        previousFocusRef.current = document.activeElement as HTMLElement;

        const currentScrollY = window.scrollY;

        const handleTouchMove = (e: TouchEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(e.target as Node)
            ) {
                e.preventDefault();
            }
        };

        const handleWheel = (e: WheelEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(e.target as Node)
            ) {
                e.preventDefault();
            }
        };

        document.body.style.position = "fixed";
        document.body.style.top = `-${currentScrollY}px`;
        document.body.style.width = "100%";

        window.addEventListener("touchmove", handleTouchMove, {
            passive: false,
        });

        window.addEventListener("wheel", handleWheel, {
            passive: false,
        });

        return () => {
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";

            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("wheel", handleWheel);

            window.scrollTo({
                top: currentScrollY,
                left: 0,
                behavior: "instant",
            });
        };
    }, [isOpen]);

    // =========================================================
    // RESET
    // =========================================================

    const resetForm = useCallback(() => {
        setFullName("");
        setEmail("");
        setPhone("");
        setCountryCode("+91");

        setStudyLevel("Undergraduate Student (Final Year)");
        setDestinationCountry("United Kingdom (UK)");
        setAttendeeCount(1);

        setCompany("");

        setFieldErrors({});
        setSubmitError("");
        setLoading(false);
        setIsSuccess(false);
        setRegistration(null);

        isSubmittingRef.current = false;
    }, []);

    // =========================================================
    // CLOSE
    // =========================================================

    const animateClose = useCallback(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (
            prefersReducedMotion ||
            !overlayRef.current ||
            !modalRef.current
        ) {
            resetForm();
            onClose();
            return;
        }

        gsap.to(modalRef.current, {
            opacity: 0,
            scale: 0.96,
            y: 12,
            duration: 0.2,
            ease: "power2.in",
        });

        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.25,
            ease: "power2.in",
            onComplete: () => {
                resetForm();
                onClose();
                previousFocusRef.current?.focus();
            },
        });
    }, [onClose, resetForm]);

    // =========================================================
    // FOCUS TRAP
    // =========================================================

    useFocusTrap(modalRef, {
        isActive: isOpen,
        onEscape: animateClose,
        autoFocus: false,
    });

    // =========================================================
    // ENTER ANIMATION
    // =========================================================

    useEffect(() => {
        if (!isOpen || !overlayRef.current || !modalRef.current) {
            return;
        }

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (prefersReducedMotion) {
            gsap.set(overlayRef.current, {
                opacity: 1,
            });

            gsap.set(modalRef.current, {
                opacity: 1,
                scale: 1,
                y: 0,
            });

            return;
        }

        gsap.fromTo(
            overlayRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 0.25,
                ease: "power2.out",
            },
        );

        gsap.fromTo(
            modalRef.current,
            {
                opacity: 0,
                scale: 0.96,
                y: 20,
            },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.35,
                ease: "power3.out",
                delay: 0.05,
            },
        );
    }, [isOpen]);

    // =========================================================
    // VALIDATION
    // =========================================================

    const validateForm = (): boolean => {
        const errors: Record<string, string> = {};

        if (!fullName.trim() || fullName.trim().length < 2) {
            errors.fullName = "Please enter your full name.";
        }

        if (
            !email.trim() ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
        ) {
            errors.email = "Please enter a valid email address.";
        }

        const cleanPhone = phone.replace(/\D/g, "");

        if (!cleanPhone) {
            errors.phone = "Mobile number is required.";
        } else if (
            countryCode === "+91" &&
            !/^[6-9]\d{9}$/.test(cleanPhone)
        ) {
            errors.phone = "Enter a valid 10-digit Indian mobile number.";
        } else if (
            cleanPhone.length < 7 ||
            cleanPhone.length > 15
        ) {
            errors.phone = "Enter a valid phone number.";
        }

        setFieldErrors(errors);

        return Object.keys(errors).length === 0;
    };

    // =========================================================
    // SUBMIT
    // =========================================================

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setSubmitError("");

        if (
            !validateForm() ||
            isSubmittingRef.current ||
            loading
        ) {
            return;
        }

        isSubmittingRef.current = true;
        setLoading(true);

        const cleanPhone = phone.replace(/\D/g, "");

        const payload = {
            fullName: fullName.trim(),
            email: email.trim().toLowerCase(),
            phone: cleanPhone,
            countryCode,
            destinationCountry,
            studyLevel,
            preferredCourse: `Intake 2026/2027 • ${destinationCountry}`,

            message: `[Event Registration: ${event?.title || "Higher Education Conclave"
                }] | Venue: ${event?.location || "Main Center"
                } | City: ${event?.city || "Chennai"
                } | Attendees: ${attendeeCount}`,

            source: `event_registration_${event?.id || "general"
                }`,

            page: "/events",
            company,

            eventId: event?.id,
            eventTitle: event?.title,
            city: event?.city,
            attendeeCount,
        };

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (data.success) {
                const registrationDetails: RegistrationInfo = {
                    eventTitle:
                        event?.title ||
                        "HighEd International Education Conclave",

                    eventDate:
                        event?.date ||
                        "Upcoming Admissions Conclave 2026",

                    eventTime:
                        event?.time ||
                        "10:30 AM – 5:30 PM",

                    location:
                        event?.location ||
                        "HighEd Center, Saidapet, Chennai",

                    isOnline: event?.isOnline || false,

                    fullName: fullName.trim(),

                    email: email.trim(),

                    phone: `${countryCode} ${cleanPhone}`,

                    countryCode,

                    destinationCountry,

                    studyLevel,

                    attendeeCount,
                };

                setRegistration(registrationDetails);
                setIsSuccess(true);

                if (onSuccess) {
                    onSuccess(registrationDetails);
                }
            } else {
                setSubmitError(
                    data.message ||
                    "Could not register at this moment. Please try again.",
                );
            }
        } catch (err) {
            console.error("Event registration error:", err);

            setSubmitError(
                "A network error occurred. Please check your connection and try again.",
            );
        } finally {
            isSubmittingRef.current = false;
            setLoading(false);
        }
    };

    // =========================================================
    // GOOGLE CALENDAR
    // =========================================================

    const generateGoogleCalendarUrl = () => {
        if (!registration) return "#";

        const title = encodeURIComponent(
            registration.eventTitle,
        );

        const details = encodeURIComponent(
            `HighEd Event Registration\nAttendee: ${registration.fullName}\nPeople: ${registration.attendeeCount}`,
        );

        const location = encodeURIComponent(
            registration.location,
        );

        const now = new Date();
        const year = now.getFullYear();

        const startIso = `${year}1018T050000Z`;
        const endIso = `${year}1018T120000Z`;

        return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startIso}/${endIso}`;
    };

    // =========================================================
    // RENDER
    // =========================================================

    if (!isOpen) return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto bg-black/75 p-3 backdrop-blur-md sm:p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-reg-modal-title"
            onClick={(e) => {
                if (e.target === overlayRef.current) {
                    animateClose();
                }
            }}
        >
            <div
                ref={modalRef}
                className="relative my-auto w-full max-w-lg overflow-hidden rounded-2xl border border-neutral-200 bg-white text-neutral-900 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >

                {/* =====================================================
                    COMPACT EVENT HEADER
                ===================================================== */}

                <header className="relative overflow-hidden bg-linear-to-r from-[#253A7B] to-[#16234F] text-white px-5 py-3.5 sm:px-6 sm:py-4">
                    {/* Close button */}
                    <button
                        type="button"
                        onClick={animateClose}
                        aria-label="Close registration dialog"
                        className="absolute right-3.5 top-3.5 z-30 flex size-8 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 backdrop-blur-md transition-colors hover:bg-white/20 hover:text-white"
                    >
                        <X size={15} />
                    </button>

                    {/* Header content */}
                    <div className="relative z-10 flex flex-col gap-1 pr-8">
                        {/* Top label / Eyebrow */}
                        {event?.type && (
                            <div className="flex items-center gap-2 mb-0.5">
                                <EyebrowBadge>
                                    {event.type}
                                </EyebrowBadge>
                            </div>
                        )}

                        {/* Main title */}
                        <h4
                            id="event-reg-modal-title"
                            className="text-base sm:text-lg font-bold leading-snug tracking-[-0.02em] text-white line-clamp-2"
                        >
                            {event?.title || "Global Higher Education Conclave"}
                        </h4>

                        {/* Event metadata */}
                        <div className="mt-1 flex flex-wrap items-center gap-x-3.5 gap-y-1 text-[11px] text-white/80">
                            <span className="flex items-center gap-1.5">
                                <Calendar
                                    size={12}
                                    className="shrink-0 text-[#E93F61]"
                                />
                                <span>{event?.date || "October 18, 2026"}</span>
                            </span>

                            <span className="text-white/30">•</span>

                            <span className="flex items-center gap-1.5">
                                <Clock
                                    size={12}
                                    className="shrink-0 text-[#E93F61]"
                                />
                                <span>{event?.time || "10:30 AM – 5:30 PM"}</span>
                            </span>

                            <span className="text-white/30">•</span>

                            <span className="flex min-w-0 items-center gap-1.5">
                                {event?.isOnline ? (
                                    <Video
                                        size={12}
                                        className="shrink-0 text-[#E93F61]"
                                    />
                                ) : (
                                    <MapPin
                                        size={12}
                                        className="shrink-0 text-[#E93F61]"
                                    />
                                )}
                                <span className="truncate">
                                    {event?.location || "Chennai Central"}
                                </span>
                            </span>
                        </div>
                    </div>
                </header>

                {/* =====================================================
                    BODY
                ===================================================== */}

                <div className="max-h-[calc(88vh-110px)] overflow-y-auto p-4 sm:p-5">
                    {!isSuccess ? (
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            className="space-y-3"
                        >

                            {/* Honeypot */}
                            <input
                                type="text"
                                name="company"
                                tabIndex={-1}
                                autoComplete="off"
                                aria-hidden="true"
                                value={company}
                                onChange={(e) =>
                                    setCompany(e.target.value)
                                }
                                className="hidden"
                            />

                            {/* Error */}
                            {submitError && (
                                <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-2.5 text-xs text-red-700">
                                    <AlertCircle
                                        size={14}
                                        className="mt-0.5 shrink-0"
                                    />

                                    <span>{submitError}</span>
                                </div>
                            )}

                            {/* Full Name + Email */}
                            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">

                                {/* Full Name */}
                                <div>
                                    <label
                                        htmlFor="event-reg-fullname"
                                        className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-neutral-700"
                                    >
                                        Full Name{" "}
                                        <span className="text-red-500">*</span>
                                    </label>

                                    <div className="relative">
                                        <User
                                            size={13}
                                            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
                                        />

                                        <input
                                            id="event-reg-fullname"
                                            type="text"
                                            required
                                            placeholder="e.g. Rahul Sharma"
                                            value={fullName}
                                            onChange={(e) => {
                                                setFullName(e.target.value);

                                                if (fieldErrors.fullName) {
                                                    setFieldErrors((prev) => ({
                                                        ...prev,
                                                        fullName: "",
                                                    }));
                                                }
                                            }}
                                            className={`h-9 w-full rounded-lg border bg-white pl-8 pr-2.5 text-xs text-neutral-900 outline-none transition-all placeholder:text-xs placeholder:text-neutral-400 focus:ring-2 ${fieldErrors.fullName
                                                ? "border-red-500 focus:ring-red-200"
                                                : "border-neutral-300 focus:border-[#253A7B] focus:ring-[#253A7B]/20"
                                                }`}
                                        />
                                    </div>

                                    {fieldErrors.fullName && (
                                        <p className="mt-0.5 text-[11px] text-red-600">
                                            {fieldErrors.fullName}
                                        </p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="event-reg-email"
                                        className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-neutral-700"
                                    >
                                        Email Address{" "}
                                        <span className="text-red-500">*</span>
                                    </label>

                                    <div className="relative">
                                        <Mail
                                            size={13}
                                            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
                                        />

                                        <input
                                            id="event-reg-email"
                                            type="email"
                                            required
                                            placeholder="e.g. rahul@example.com"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);

                                                if (fieldErrors.email) {
                                                    setFieldErrors((prev) => ({
                                                        ...prev,
                                                        email: "",
                                                    }));
                                                }
                                            }}
                                            className={`h-9 w-full rounded-lg border bg-white pl-8 pr-2.5 text-xs text-neutral-900 outline-none transition-all placeholder:text-xs placeholder:text-neutral-400 focus:ring-2 ${fieldErrors.email
                                                ? "border-red-500 focus:ring-red-200"
                                                : "border-neutral-300 focus:border-[#253A7B] focus:ring-[#253A7B]/20"
                                                }`}
                                        />
                                    </div>

                                    {fieldErrors.email && (
                                        <p className="mt-0.5 text-[11px] text-red-600">
                                            {fieldErrors.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Phone */}
                            <div>
                                <label
                                    htmlFor="event-reg-phone"
                                    className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-neutral-700"
                                >
                                    WhatsApp / Mobile Number{" "}
                                    <span className="text-red-500">*</span>
                                </label>

                                <PhoneInput
                                    id="event-reg-phone"
                                    countryCode={countryCode}
                                    phone={phone}
                                    onCountryCodeChange={setCountryCode}
                                    onPhoneChange={(val) => {
                                        setPhone(val);

                                        if (fieldErrors.phone) {
                                            setFieldErrors((prev) => ({
                                                ...prev,
                                                phone: "",
                                            }));
                                        }
                                    }}
                                    error={fieldErrors.phone}
                                    disabled={loading}
                                    hideLabel={true}
                                    size="sm"
                                />
                            </div>

                            {/* Education + Destination */}
                            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">

                                {/* Education */}
                                <div>
                                    <label
                                        htmlFor="event-reg-study-level"
                                        className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-neutral-700"
                                    >
                                        Current Education Level
                                    </label>

                                    <div className="relative">
                                        <select
                                            id="event-reg-study-level"
                                            value={studyLevel}
                                            onChange={(e) =>
                                                setStudyLevel(e.target.value)
                                            }
                                            className="h-9 w-full cursor-pointer appearance-none rounded-lg border border-neutral-300 bg-white px-3 pr-7 text-xs text-neutral-900 outline-none transition-all focus:border-[#253A7B] focus:ring-2 focus:ring-[#253A7B]/20"
                                        >
                                            {STUDY_LEVEL_OPTIONS.map((option) => (
                                                <option
                                                    key={option}
                                                    value={option}
                                                >
                                                    {option}
                                                </option>
                                            ))}
                                        </select>

                                        <ChevronDown
                                            size={14}
                                            className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400"
                                        />
                                    </div>
                                </div>

                                {/* Destination */}
                                <div>
                                    <label
                                        htmlFor="event-reg-destination"
                                        className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-neutral-700"
                                    >
                                        Preferred Destination
                                    </label>

                                    <div className="relative">
                                        <select
                                            id="event-reg-destination"
                                            value={destinationCountry}
                                            onChange={(e) =>
                                                setDestinationCountry(
                                                    e.target.value,
                                                )
                                            }
                                            className="h-9 w-full cursor-pointer appearance-none rounded-lg border border-neutral-300 bg-white px-3 pr-7 text-xs text-neutral-900 outline-none transition-all focus:border-[#253A7B] focus:ring-2 focus:ring-[#253A7B]/20"
                                        >
                                            {DESTINATION_OPTIONS.map((option) => (
                                                <option
                                                    key={option}
                                                    value={option}
                                                >
                                                    {option}
                                                </option>
                                            ))}
                                        </select>

                                        <ChevronDown
                                            size={14}
                                            className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Number of People */}
                            <div>
                                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-neutral-700">
                                    Number of People
                                </label>

                                <div className="grid grid-cols-3 gap-2">
                                    {ATTENDEE_OPTIONS.map((option) => (
                                        <button
                                            key={option.value}
                                            type="button"
                                            onClick={() =>
                                                setAttendeeCount(option.value)
                                            }
                                            className={`flex cursor-pointer items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-xs font-medium transition-colors ${attendeeCount === option.value
                                                ? "border-[#253A7B] bg-[#253A7B]/10 font-semibold text-[#253A7B]"
                                                : "border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100"
                                                }`}
                                        >
                                            <Users size={12} />
                                            <span>{option.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Submit */}
                            <div className="pt-1">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="flex min-h-[42px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#E93F61] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#E93F61]/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="size-4 animate-spin" />
                                            <span>Registering...</span>
                                        </>
                                    ) : (
                                        <>
                                            <CalendarPlus size={15} />
                                            <span>Register for Event</span>
                                        </>
                                    )}
                                </button>

                                <p className="mt-1.5 text-center text-[10px] text-neutral-500">
                                    By registering, you agree to receive event
                                    reminders. There are no registration charges.
                                </p>
                            </div>
                        </form>
                    ) : (
                        /* =====================================================
                           SUCCESS SCREEN
                        ===================================================== */

                        <div className="space-y-5 py-2">

                            {/* Success */}
                            <div className="text-center">
                                <div className="mb-3 inline-flex size-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                                    <CheckCircle2 size={25} />
                                </div>

                                <h4 className="text-lg font-bold text-neutral-900">
                                    Registration Confirmed
                                </h4>

                                <p className="mx-auto mt-1 max-w-sm text-[12px] leading-relaxed text-neutral-600">
                                    Your registration has been confirmed.
                                    We look forward to seeing you at the event.
                                </p>
                            </div>

                            {/* Event Summary */}
                            {registration && (
                                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">

                                    <div className="mb-3">
                                        <p className="text-[10px] font-semibold uppercase tracking-wider text-[#253A7B]">
                                            Event
                                        </p>

                                        <h6 className="mt-1 text-sm font-bold leading-snug text-neutral-900">
                                            {registration.eventTitle}
                                        </h6>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 text-xs">

                                        <div>
                                            <span className="text-[10px] text-neutral-400">
                                                Date
                                            </span>

                                            <p className="mt-0.5 font-semibold text-neutral-800">
                                                {registration.eventDate}
                                            </p>
                                        </div>

                                        <div>
                                            <span className="text-[10px] text-neutral-400">
                                                Time
                                            </span>

                                            <p className="mt-0.5 font-semibold text-neutral-800">
                                                {registration.eventTime}
                                            </p>
                                        </div>

                                        <div>
                                            <span className="text-[10px] text-neutral-400">
                                                Registered Name
                                            </span>

                                            <p className="mt-0.5 font-semibold text-neutral-800">
                                                {registration.fullName}
                                            </p>
                                        </div>

                                        <div>
                                            <span className="text-[10px] text-neutral-400">
                                                People
                                            </span>

                                            <p className="mt-0.5 font-semibold text-neutral-800">
                                                {registration.attendeeCount}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-4 border-t border-neutral-200 pt-3">
                                        <span className="text-[10px] text-neutral-400">
                                            Venue / Mode
                                        </span>

                                        <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-neutral-800">
                                            {registration.isOnline ? (
                                                <Video
                                                    size={13}
                                                    className="text-[#E93F61]"
                                                />
                                            ) : (
                                                <MapPin
                                                    size={13}
                                                    className="text-[#E93F61]"
                                                />
                                            )}

                                            <span>
                                                {registration.location}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Email */}
                            {registration && (
                                <div className="rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-center">
                                    <p className="text-[10px] text-neutral-500">
                                        Registration details
                                    </p>

                                    <p className="mt-0.5 text-xs font-semibold text-neutral-800">
                                        {registration.email}
                                    </p>
                                </div>
                            )}

                            {/* Actions */}
                            <div className="flex flex-col gap-2 sm:flex-row">

                                <a
                                    href={generateGoogleCalendarUrl()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#253A7B] px-3.5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#253A7B]/90"
                                >
                                    <CalendarPlus size={14} />
                                    <span>Add to Google Calendar</span>
                                </a>

                                <button
                                    type="button"
                                    onClick={animateClose}
                                    className="inline-flex items-center justify-center rounded-lg bg-neutral-100 px-4 py-2.5 text-xs font-semibold text-neutral-700 transition-colors hover:bg-neutral-200"
                                >
                                    Done
                                </button>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}