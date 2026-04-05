import React from "react";
import { experience, education } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
          Background
        </p>
        <h2 className="text-4xl font-bold mb-16">Experience & Education</h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-gray-200">Work Experience</h3>
            <div className="space-y-6">
              {experience.map((item, i) => (
                <div
                  key={i}
                  className="relative pl-6 border-l border-white/10 hover:border-brand transition-colors"
                >
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-brand" />
                  <p className="text-xs text-brand font-semibold tracking-wide uppercase mb-1">
                    {item.period}
                  </p>
                  <h4 className="text-lg font-semibold text-white">{item.role}</h4>
                  <p className="text-gray-400 text-sm font-medium mb-2">{item.company}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-gray-200">Education</h3>
            <div className="space-y-6">
              {education.map((item, i) => (
                <div
                  key={i}
                  className="relative pl-6 border-l border-white/10 hover:border-brand transition-colors"
                >
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-brand" />
                  <p className="text-xs text-brand font-semibold tracking-wide uppercase mb-1">
                    {item.period}
                  </p>
                  <h4 className="text-lg font-semibold text-white">{item.degree}</h4>
                  <p className="text-gray-400 text-sm font-medium mb-2">{item.school}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
