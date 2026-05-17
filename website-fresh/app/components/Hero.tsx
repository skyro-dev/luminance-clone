"use client";

import { Terminal, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Floating orbs */}
      <div className="orb orb-1 top-20 -left-20" />
      <div className="orb orb-2 top-40 right-0" />
      <div className="orb orb-3 bottom-20 left-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
            <span className="gradient-text">Intelligent</span>
            <br />
            <span className="text-white">Automation</span>
            <br />
            <span className="gradient-text">Agency</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            We build AI agents and intelligent automations that transform how
            businesses operate—saving time, cutting costs, and unlocking growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#cta"
              className="gradient-border-btn px-8 py-3 text-sm font-semibold text-white hover:text-cyan transition-colors inline-flex items-center justify-center gap-2"
            >
              Book a Free Consultation
              <ChevronRight size={16} />
            </a>
            <a
              href="#services"
              className="px-8 py-3 text-sm font-medium text-white/70 border border-white/15 rounded-full hover:border-white/30 hover:text-white transition-all inline-flex items-center justify-center"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Terminal */}
        <div className="flex-1 w-full max-w-xl">
          <div className="terminal glow-cyan">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500/80" />
              <div className="terminal-dot bg-yellow-500/80" />
              <div className="terminal-dot bg-green-500/80" />
              <span className="ml-2 text-xs text-white/40 font-mono">
                luminance-ai — zsh
              </span>
            </div>
            <div className="terminal-body text-white/80">
              <div className="flex gap-2">
                <span className="text-green-400">➜</span>
                <span className="text-cyan">~</span>
                <span>luminance-ai deploy --agent ops</span>
              </div>
              <div className="mt-2 text-white/50">
                <span className="text-yellow-400">▶</span> Initializing AI
                agent...
              </div>
              <div className="text-white/50">
                <span className="text-green-400">✓</span> Connected to MCP
                servers
              </div>
              <div className="text-white/50">
                <span className="text-green-400">✓</span> Knowledge base
                indexed
              </div>
              <div className="text-white/50">
                <span className="text-green-400">✓</span> Automations active
              </div>
              <div className="mt-2 text-cyan">
                Agent deployed successfully. 20+ hours saved weekly.
              </div>
              <div className="mt-3 flex gap-2">
                <span className="text-green-400">➜</span>
                <span className="text-cyan">~</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
