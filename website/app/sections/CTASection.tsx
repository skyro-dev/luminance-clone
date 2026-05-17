"use client";

import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";

export function CTASection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,229,255,0.2) 0%, rgba(59,130,246,0.1) 40%, transparent 70%)',
        }}
      />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vercel-cyan/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-[800px] mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Ready to</span>
            <br />
            <span className="text-white">Transform?</span>
          </h2>
          
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Schedule a consultation with our AI experts and discover how we can help your business.
          </p>
          
          <a
            href="https://calendly.com/hiren-luminance-labs/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-vercel-cyan text-black font-semibold text-lg rounded-xl btn-gradient animate-glow"
          >
            Book a 30-min call
            <ArrowRight size={20} />
          </a>
          
          <p className="text-sm text-gray-500 mt-4">
            It&apos;s 100% free
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
