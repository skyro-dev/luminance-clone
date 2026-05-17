"use client";

import { processSteps } from "../data/content";

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Process</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A proven three-step approach to delivering AI solutions that drive
            real results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-6xl font-bold gradient-text mb-4 opacity-80">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/50 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
