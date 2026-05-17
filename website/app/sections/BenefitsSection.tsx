"use client";

import { Clock, Rocket, Puzzle, Settings, TrendingUp, Code } from "lucide-react";
import { SectionLabel } from "../components/SectionLabel";
import { AnimatedSection } from "../components/AnimatedSection";
import { benefits } from "../data/content";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Clock,
  Rocket,
  Puzzle,
  Settings,
  TrendingUp,
  Code,
};

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-vercel-dark to-black" />
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <SectionLabel text="BENEFITS" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
            Why <span className="gradient-text">Choose Us?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover the advantages of partnering with our AI automation agency
          </p>
        </AnimatedSection>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon];

            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="glass-card p-6 card-hover h-full">
                  <div className="flex items-center gap-3 mb-4">
                    {IconComponent && (
                      <IconComponent size={28} className="text-vercel-cyan" />
                    )}
                    {benefit.metric && (
                      <span className="text-2xl font-extrabold gradient-text">
                        {benefit.metric}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.claim}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {benefit.explanation}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
