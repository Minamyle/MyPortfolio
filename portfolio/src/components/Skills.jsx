import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
          Expertise
        </p>
        <h2 className="text-4xl font-bold mb-12">Technologies I Work With</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2.5 bg-card border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:border-brand hover:text-brand transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
