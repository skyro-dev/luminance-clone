"use client";

import { SectionLabel } from "../components/SectionLabel";
import { AnimatedSection } from "../components/AnimatedSection";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black relative">
      {/* Top Gradient Line */}
      <div className="gradient-line" />
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Heading */}
          <AnimatedSection>
            <SectionLabel text="ABOUT" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">Who</span>
              <br />
              <span className="text-white">We Are</span>
            </h2>
          </AnimatedSection>

          {/* Right - Content */}
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-gray-400 leading-[1.8] mb-8">
              Founded in 2023, Luminance Labs was born from a vision to turn
              complexity into clarity and possibilities into progress. With over 20
              years of combined experience in AI strategy, digital transformation,
              and program management, we specialize in building practical,
              scalable, and high-impact technology solutions.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 text-center">
                <span className="text-4xl font-extrabold gradient-text">2023</span>
                <p className="text-sm text-gray-400 mt-2">Founded</p>
              </div>
              <div className="glass-card p-6 text-center">
                <span className="text-4xl font-extrabold gradient-text">20+</span>
                <p className="text-sm text-gray-400 mt-2">Years Experience</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
