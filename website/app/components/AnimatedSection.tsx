"use client";

import { ReactNode } from "react";
import { useInView } from "../hooks/useInView";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={cn("animate-on-scroll", isInView && "is-visible", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
