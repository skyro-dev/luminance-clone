"use client";

import { ArrowDown, Sparkles } from "lucide-react";

export function HeroSection() {
  const handleScrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 radial-gradient-bg" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vercel-cyan/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vercel-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
        {/* Label */}
        <div className="hero-headline inline-flex items-center gap-2 px-4 py-2 rounded-full border border-vercel-cyan/30 bg-vercel-cyan/5 mb-8">
          <Sparkles size={16} className="text-vercel-cyan" />
          <span className="text-sm text-vercel-cyan font-medium tracking-wide uppercase">
            AI Automation Agency
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-headline text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.1] mb-6">
          <span className="gradient-text">Unlock 10x</span>
          <br />
          <span className="text-white">Efficiency</span>
        </h1>

        {/* Subheadline */}
        <p className="hero-subheadline text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Empowering CIOs and Innovation Leaders to streamline workflows,
          enhance efficiency, and drive growth through cutting-edge AI solutions.
        </p>

        {/* Terminal Window */}
        <div className="hero-cta max-w-2xl mx-auto mb-10 terminal">
          <div className="terminal-header">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <span className="ml-2 text-xs text-gray-500">luminance-agent</span>
          </div>
          <div className="p-4 text-left">
            <p className="text-sm text-gray-400">
              <span className="text-vercel-cyan">$</span> luminance deploy --agent
            </p>
            <p className="text-sm text-gray-300 mt-1">
              <span className="text-green-400">✓</span> AI agent initialized
            </p>
            <p className="text-sm text-gray-300">
              <span className="text-green-400">✓</span> Workflow automation active
            </p>
            <p className="text-sm text-gray-300">
              <span className="text-green-400">✓</span> 10x efficiency unlocked
            </p>
            <p className="text-sm text-vercel-cyan mt-2 animate-pulse">_</p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleScrollToServices}
          className="hero-cta inline-flex items-center gap-2 px-8 py-4 gradient-border text-white font-semibold text-lg rounded-xl btn-gradient"
        >
          See Services
          <ArrowDown size={20} className="text-vercel-cyan" />
        </button>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
