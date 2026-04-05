import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Amina Ismaila. Built with React & Tailwind CSS.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Minamyle"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-white transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/imeenatv"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-white transition-colors text-sm"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/imeenatv"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-white transition-colors text-sm"
          >
            Instagram
          </a>
          <a
            href="mailto:minamyle@gmail.com"
            className="text-gray-600 hover:text-white transition-colors text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
