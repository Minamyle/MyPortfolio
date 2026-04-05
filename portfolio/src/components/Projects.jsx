import React, { useState } from "react";
import { projects } from "../data";

const techColors = {
  "React": "bg-blue-500/10 text-blue-400",
  "React.js": "bg-blue-500/10 text-blue-400",
  "TypeScript": "bg-blue-600/10 text-blue-300",
  "JavaScript": "bg-yellow-500/10 text-yellow-400",
  "JavaScript (ES6+)": "bg-yellow-500/10 text-yellow-400",
  "Tailwind CSS": "bg-cyan-500/10 text-cyan-400",
  "HTML5 & CSS3": "bg-orange-500/10 text-orange-400",
  "HTML": "bg-orange-500/10 text-orange-400",
  "CSS": "bg-blue-400/10 text-blue-300",
  "Web3": "bg-purple-500/10 text-purple-400",
  "Web3 / DeFi": "bg-purple-500/10 text-purple-400",
  "StarkNet": "bg-purple-600/10 text-purple-300",
  "REST API": "bg-green-500/10 text-green-400",
  "REST APIs": "bg-green-500/10 text-green-400",
  "Vercel / Netlify": "bg-gray-500/10 text-gray-400",
  "Vercel": "bg-gray-500/10 text-gray-400",
  "E-commerce": "bg-pink-500/10 text-pink-400",
  "Responsive Design": "bg-teal-500/10 text-teal-400",
  "API Integration": "bg-green-600/10 text-green-300",
};

function getTechClass(tech) {
  return techColors[tech] || "bg-white/5 text-gray-400";
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "React", "JavaScript", "Web3", "HTML"];

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) =>
          p.tech.some((t) => t.toLowerCase().includes(filter.toLowerCase()))
        );

  return (
    <section id="projects" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
          Work
        </p>
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-gray-400 mb-10 max-w-xl">
          A selection of projects I've built — from real client work to personal
          builds and open source contributions.
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? "bg-brand text-white"
                  : "bg-card border border-white/10 text-gray-400 hover:border-brand hover:text-brand"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="bg-card border border-white/5 rounded-2xl p-6 flex flex-col hover:border-brand/40 transition-all group"
            >
              {/* Top icon */}
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${getTechClass(t)}`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-brand hover:underline font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
