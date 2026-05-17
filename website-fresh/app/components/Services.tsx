"use client";

import {
  Bot,
  MessageSquare,
  BarChart3,
  Zap,
  ArrowRight,
} from "lucide-react";
import { services } from "../data/content";

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot size={28} />,
  MessageSquare: <MessageSquare size={28} />,
  BarChart3: <BarChart3 size={28} />,
  Zap: <Zap size={28} />,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            End-to-end AI solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan group-hover:text-white group-hover:bg-cyan/20 transition-all">
                  {iconMap[service.icon]}
                </div>
                {service.hasDemo && (
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-cyan/10 text-cyan border border-cyan/20">
                    Demo
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/50 leading-relaxed mb-4">
                {service.description}
              </p>
              <a
                href="#cta"
                className="inline-flex items-center gap-2 text-sm text-cyan hover:text-white transition-colors"
              >
                Learn more <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
