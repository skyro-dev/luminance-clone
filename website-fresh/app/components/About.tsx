"use client";

import { Sparkles, Users, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Building the Future</span>
              <br />
              <span className="text-white">of Work</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-6">
              Luminance AI is a team of engineers, designers, and AI
              specialists passionate about making businesses more efficient
              through intelligent automation. We believe AI should work for
              people—not replace them.
            </p>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              From startups to enterprise teams, we partner with organizations
              ready to embrace the next wave of operational excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70">
                <Sparkles size={14} className="text-cyan" />
                AI-First Approach
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70">
                <Users size={14} className="text-cyan" />
                Human-Centered Design
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70">
                <Target size={14} className="text-cyan" />
                Results-Driven
              </div>
            </div>
          </div>

          {/* Right - stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">10+</div>
              <div className="text-white/50 text-sm">Days to MVP</div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">20+</div>
              <div className="text-white/50 text-sm">Hours Saved Weekly</div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-white/50 text-sm">Custom Built</div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-white/50 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
