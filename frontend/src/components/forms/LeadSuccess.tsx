"use client";

import React, { useEffect, useRef } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import gsap from "gsap";

export const LeadSuccess: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const iconSvgRef = useRef<SVGSVGElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const messageRef = useRef<HTMLParagraphElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const icon = iconRef.current;
    const iconSvg = iconSvgRef.current;
    const title = titleRef.current;
    const message = messageRef.current;
    const contact = contactRef.current;

    if (!container || !icon || !iconSvg || !title || !message || !contact) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(
          [container, icon, iconSvg, title, message, contact],
          { opacity: 1, scale: 1, y: 0 }
        );
        return;
      }

      // Initial state
      gsap.set(container, {
        opacity: 1,
      });

      gsap.set(icon, {
        opacity: 0,
        scale: 0.7,
        y: 8,
      });

      gsap.set(iconSvg, {
        scale: 0.7,
        rotation: -12,
      });

      gsap.set([title, message, contact], {
        opacity: 0,
        y: 12,
      });

      // Success entrance
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      tl.to(icon, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.45,
        ease: "back.out(1.6)",
      })
        .to(
          iconSvg,
          {
            scale: 1,
            rotation: 0,
            duration: 0.35,
            ease: "back.out(2)",
          },
          "-=0.25"
        )
        .to(
          title,
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
          },
          "-=0.05"
        )
        .to(
          message,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
          },
          "-=0.15"
        )
        .to(
          contact,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
          },
          "-=0.12"
        );

      // Very subtle success icon pulse
      gsap.to(icon, {
        scale: 1.04,
        duration: 1.4,
        repeat: 1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.7,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex min-h-[360px] flex-col items-center justify-center px-6 py-10 text-center font-body sm:min-h-[380px] sm:px-8"
    >
      {/* Success Icon */}
      <div
        ref={iconRef}
        className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#EAF7F0]"
        aria-hidden="true"
      >
        <CheckCircle2
          ref={iconSvgRef}
          size={34}
          strokeWidth={2}
          className="text-[#1E7B47]"
        />
      </div>

      {/* Title */}
      <h3
        ref={titleRef}
        className="mt-6 text-[28px] font-medium leading-[1.15] tracking-[-0.025em] text-[#121314] sm:text-[30px]"
      >
        Thank you!
      </h3>

      {/* Message */}
      <p
        ref={messageRef}
        className="mt-3 max-w-[310px] text-[14px] font-normal leading-[1.55] tracking-[-0.005em] text-[#6B7280]"
      >
        Your request has been received. Our counsellor will contact you shortly.
      </p>

      {/* Contact CTA */}
      <div
        ref={contactRef}
        className="mt-7 flex w-full max-w-[310px] items-center justify-center gap-2.5 rounded-2xl bg-[#F5F5F9] px-4 py-3"
      >
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white"
          aria-hidden="true"
        >
          <Phone
            size={15}
            strokeWidth={2}
            className="text-[#253A7B]"
          />
        </div>

        <div className="flex flex-col items-start">
          <span className="text-[11px] font-normal leading-none text-[#6B7280]">
            Need help sooner?
          </span>

          <a
            href="tel:+919050180501"
            className="mt-1 text-[14px] font-medium leading-none tracking-[-0.01em] text-[#253A7B] transition-opacity hover:opacity-70"
          >
            +91 90501 80501
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeadSuccess;