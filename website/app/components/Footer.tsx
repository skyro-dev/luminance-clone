"use client";

import { navLinks } from "../data/content";

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-black relative">
      {/* Top Gradient Line */}
      <div className="gradient-line" />
      
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-xl font-bold text-white">
            Luminance Labs
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://calendly.com/hiren-luminance-labs/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-vercel-cyan transition-colors"
            >
              Book a call
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-600">
            © 2024 Luminance Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
