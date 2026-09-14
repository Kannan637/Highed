import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "full";
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  className,
  size = "lg",
  children,
  ...props
}) => {
  const sizeStyles = {
    sm: "max-w-4xl",
    md: "max-w-5xl",
    lg: "max-w-7xl 2xl:max-w-[1440px]",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-8 2xl:px-12",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
