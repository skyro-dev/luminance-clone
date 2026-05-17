"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionLabel } from "../components/SectionLabel";
import { AnimatedSection } from "../components/AnimatedSection";
import { faqItems } from "../data/content";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-black relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-vercel-dark/50 to-black" />
      
      <div className="relative z-10 max-w-[800px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <SectionLabel text="FAQ" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
            Your Questions, <span className="gradient-text">Answered</span>
          </h2>
          <p className="text-lg text-gray-400">
            Answers to your most common questions about our AI services
          </p>
        </AnimatedSection>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqItems.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div className="border-b border-white/10">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-medium text-white pr-4 group-hover:text-vercel-cyan transition-colors">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={cn(
                      "text-gray-500 flex-shrink-0 transition-transform duration-300",
                      openIndex === index && "rotate-180 text-vercel-cyan"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                  )}
                >
                  <p className="text-base text-gray-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
