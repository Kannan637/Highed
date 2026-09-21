import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GridContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function GridContainer({
  children,
  className,
  ...props
}: GridContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto grid w-full max-w-[1440px] grid-cols-12 gap-x-5 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
