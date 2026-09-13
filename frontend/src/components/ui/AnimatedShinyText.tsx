import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
}) => {
  return (
    <span
      className={cn(
        "inline-block whitespace-nowrap select-none",
        // Text clipping & gradient
        "bg-clip-text text-transparent",
        "bg-[linear-gradient(90deg,#171717_0%,#171717_40%,#ffffff_50%,#171717_60%,#171717_100%)]",
        "bg-[length:300%_100%]",
        // Animation
        "animate-shiny-text",
        className
      )}
    >
      {children}
    </span>
  );
};

export default AnimatedShinyText;
