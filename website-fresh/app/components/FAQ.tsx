"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "../data/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">FAQ</span>
          </h2>
          <p className="text-white/50 text-lg">
            Common questions about our AI automation services.
          </p>
        </div>

        <div className="divide-y divide-white/10">
          {faqItems.map((item, i) => (
            <div key={i} className="faq-item">
              <button
                className="w-full py-6 flex items-center justify-between text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-white font-medium pr-4 group-hover:text-cyan transition-colors">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-white/40 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`faq-answer ${openIndex === i ? "open" : ""}`}
              >
                <p className="text-white/50 leading-relaxed pb-4">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
