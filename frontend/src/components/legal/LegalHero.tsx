import React from "react";

interface LegalHeroProps {
  title: string;
  lastUpdated?: string;
}



export function LegalHero({
  title,
  lastUpdated = "Nov 11, 2026",
}: LegalHeroProps) {
  return (
    <section className="relative flex min-h-[250px] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#000000] to-brand-primary px-4 py-7 text-center sm:min-h-[270px] lg:min-h-[300px]">
      {/* Left Corner Pattern */}


      {/* Centered Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center justify-center">
        <h1 className="text-[20px] font-bold leading-snug tracking-tight text-white sm:text-[22px] lg:text-[24px]">
          {title}
        </h1>

        {lastUpdated && (
          <p className="mt-1.5 text-[11px] font-normal tracking-normal text-[#98A2B3] sm:text-[12px]">
            Last updated on {lastUpdated}
          </p>
        )}
      </div>

      {/* Atmospheric Bottom Glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1.5px] opacity-85"
        style={{
          background:
            "linear-gradient(90deg, #253A7B 0%, #19C9E8 50%, #253A7B 100%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom Glow */}
      <div
        className="pointer-events-none absolute -bottom-1 left-1/4 right-1/4 h-[8px] blur-[6px] opacity-35"
        style={{
          background:
            "linear-gradient(90deg, #253A7B 0%, #19C9E8 50%, #253A7B 100%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}

export default LegalHero;