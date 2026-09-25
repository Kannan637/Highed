import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.ComponentProps<"div"> {
  size?: "default" | "sm";
  hover?: boolean;
}

function Card({
  className,
  size = "default",
  hover = false,
  ...props
}: CardProps) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-2xl bg-card border border-black/10 py-(--card-spacing) text-sm text-card-foreground shadow-card-resting [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-2xl *:[img:last-child]:rounded-b-2xl",
        hover && "transition-all duration-300 hover:shadow-card-hover hover:border-black/15 hover:-translate-y-0.5",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-2xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm text-content-primary",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export interface CardActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "arrow" | "pill" | "outline" | "slot";
  href?: string;
  showArrow?: boolean;
}

function CardAction({
  className,
  variant = "arrow",
  href,
  showArrow = true,
  children,
  ...props
}: CardActionProps) {
  if (variant === "slot") {
    return (
      <div
        data-slot="card-action"
        className={cn(
          "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
          className
        )}
      >
        {children}
      </div>
    );
  }

  const baseClasses =
    variant === "pill"
      ? "group/cardaction inline-flex h-11 pl-4 pr-1.5 items-center justify-between gap-2.5 rounded-full bg-brand-primary text-white text-xs sm:text-sm font-semibold hover:bg-brand-primary-hover shadow-xs transition-all active:scale-95 cursor-pointer"
      : variant === "outline"
      ? "group/cardaction inline-flex h-11 px-5 items-center justify-between gap-2 rounded-full border border-black/10 bg-white text-brand-primary text-xs sm:text-sm font-semibold hover:border-brand-primary hover:bg-brand-primary/5 transition-all cursor-pointer w-full"
      : "group/cardaction inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-primary transition-colors hover:text-brand-accent cursor-pointer";

  const renderIcon = () => {
    if (!showArrow) return null;
    if (variant === "pill") {
      return (
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-primary shadow-xs transition-transform duration-200 group-hover/cardaction:translate-x-0.5">
          <ArrowRight className="size-3.5 text-brand-primary" />
        </span>
      );
    }
    return (
      <ArrowRight
        size={15}
        className="transition-transform group-hover/cardaction:translate-x-1 shrink-0"
      />
    );
  };

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseClasses, className)}
      >
        <span>{children}</span>
        {renderIcon()}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cn(baseClasses, className)}
      {...props}
    >
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-(--card-spacing)", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-2xl border-t border-black/10 bg-muted/30 p-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}

export default Card;
