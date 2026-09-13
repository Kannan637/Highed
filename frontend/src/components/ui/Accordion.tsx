"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className,
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || ""]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white shadow-xs", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="overflow-hidden first:rounded-t-2xl last:rounded-b-2xl">
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between px-6 py-5 text-left font-dmsans text-[16px] font-semibold text-[#121314] transition-colors hover:text-[#253A7B]"
            >
              <span className="pr-4">{item.title}</span>
              <ChevronDown
                size={18}
                className={cn(
                  "shrink-0 text-gray-400 transition-transform duration-300",
                  isOpen && "rotate-180 text-[#253A7B]"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="px-6 pb-6 pt-1 font-dmsans text-[15px] leading-relaxed text-gray-600">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
