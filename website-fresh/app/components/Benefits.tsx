"use client";

import { Clock, Rocket, Puzzle, Settings, TrendingUp, Code } from "lucide-react";
import { benefits } from "../data/content";

const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock size={24} />,
  Rocket: <Rocket size={24} />,
  Puzzle: <Puzzle size={24} />,
  Settings: <Settings size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  Code: <Code size={24} />,
};

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Why Choose Us</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Real results, real fast. Here's what you can expect.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan mb-4">
                {iconMap[benefit.icon]}
              </div>
              {benefit.metric && (
                <div className="text-3xl font-bold gradient-text mb-1">
                  {benefit.metric}
                </div>
              )}
              <h3 className="text-lg font-semibold text-white mb-2">
                {benefit.claim}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {benefit.explanation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
