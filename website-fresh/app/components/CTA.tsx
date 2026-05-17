"use client";

import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Radial gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,229,255,0.08) 0%, rgba(41,121,255,0.04) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Ready to Automate?</span>
        </h2>
        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Book a free 30-minute consultation and discover how AI automation can
          transform your business operations.
        </p>
        <a
          href="mailto:astro.guru.420@gmail.com"
          className="gradient-border-btn px-10 py-4 text-base font-semibold text-white hover:text-cyan transition-colors inline-flex items-center gap-2 glow-cyan"
        >
          Book a Free Consultation
          <ArrowRight size={18} />
        </a>
        <p className="mt-6 text-white/30 text-sm">
          No commitment required. We'll explore your needs and recommend the
          best path forward.
        </p>
      </div>
    </section>
  );
}
