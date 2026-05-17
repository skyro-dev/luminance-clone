"use client";

import { SectionLabel } from "../components/SectionLabel";
import { AnimatedSection } from "../components/AnimatedSection";
import { processSteps } from "../data/content";

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-black relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <SectionLabel text="PROCESS" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
            Our Proven Process
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From concept to execution, see how we bring AI to life in your business
          </p>
        </AnimatedSection>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
          {processSteps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 0.1}>
              <div className="glass-card p-8 card-hover h-full">
                <span className="text-6xl font-extrabold gradient-text">
                  {step.number}
                </span>
                <h3 className="text-2xl font-semibold text-white mt-6 mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
