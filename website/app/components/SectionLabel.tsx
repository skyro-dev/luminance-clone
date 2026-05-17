"use client";

interface SectionLabelProps {
  text: string;
}

export function SectionLabel({ text }: SectionLabelProps) {
  return (
    <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-vercel-cyan mb-4">
      {text}
    </span>
  );
}
