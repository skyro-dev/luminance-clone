"use client";

import { Bot, MessageSquare, BarChart3, Zap } from "lucide-react";
import { SectionLabel } from "../components/SectionLabel";
import { AnimatedSection } from "../components/AnimatedSection";
import { ChatDemo } from "../components/ChatDemo";
import { services } from "../data/content";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Bot,
  MessageSquare,
  BarChart3,
  Zap,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-black relative">
      {/* Top Gradient Line */}
      <div className="gradient-line" />
      
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-24">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <SectionLabel text="SERVICES" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
            Next-Gen <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We don&apos;t just deploy AI. We architect intelligent systems that
            work with your teams and for your business.
          </p>
        </AnimatedSection>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 stagger-children">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];

            return (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <div className="glass-card p-8 card-hover h-full glow-border-hover">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-vercel-cyan/10 rounded-xl glow-cyan">
                      {IconComponent && (
                        <IconComponent size={24} className="text-vercel-cyan" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-base text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Chat Demo for Conversational Knowledge */}
                  {service.hasDemo && (
                    <div className="mt-6">
                      <ChatDemo />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
