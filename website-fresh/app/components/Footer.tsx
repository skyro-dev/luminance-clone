"use client";

export default function Footer() {
  return (
    <footer className="relative py-12">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold gradient-text">Luminance</span>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#process"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              Process
            </a>
            <a
              href="#services"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#faq"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              FAQ
            </a>
          </div>

          <div className="text-sm text-white/30">
            © {new Date().getFullYear()} Luminance AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
