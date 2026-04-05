import React, { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dark/95 backdrop-blur-sm border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tight">
          Amina<span className="text-brand">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-brand ${
                  activeSection === l.href.replace("#", "")
                    ? "text-brand"
                    : "text-gray-400"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/1K4mki3sDVt1QRTnNtYq61fFZKAqfW5X4/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border border-brand text-brand text-sm font-medium rounded-full hover:bg-brand hover:text-white transition-all"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-white/5 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-brand transition-colors font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://drive.google.com/file/d/1Ukw_68I1dPBJsL5WdIPAHMfEaYOz-hxt/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-4 py-2 border border-brand text-brand text-sm font-medium rounded-full hover:bg-brand hover:text-white transition-all"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
