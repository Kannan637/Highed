"use client";

import { useLeadPopup } from "@/hooks/useLeadPopup";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

export function MobileStickyCTA() {
    const { openLeadPopup } = useLeadPopup();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down a bit (e.g., 300px)
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden animate-in slide-in-from-bottom-4 duration-300">
            <button
                type="button"
                onClick={() => openLeadPopup({ source: "mobile_sticky_cta" })}
                className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#E93F61]
                    px-6
                    py-3.5
                    text-[15px]
                    font-medium
                    text-white
                    shadow-[0_4px_14px_rgba(233,63,97,0.4)]
                    transition-all
                    active:scale-[0.98]
                "
            >
                <Phone size={18} fill="currentColor" strokeWidth={1.5} />
                <span>Book Free Counselling</span>
            </button>
        </div>
    );
}
