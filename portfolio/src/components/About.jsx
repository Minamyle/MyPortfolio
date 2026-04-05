import React from "react";
import aminaImg from "../assets/Amina.jpeg";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={aminaImg}
                  alt="Amina Ismaila"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 md:w-80 md:h-80 rounded-2xl border border-brand/30 -z-10" />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="text-4xl font-bold mb-6">
              Frontend Developer based in Lagos, Nigeria
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm Amina Ismaila, a frontend developer with 3+ years of experience
              building responsive, performant, and visually polished web
              applications. I specialize in React.js, JavaScript, and modern CSS
              frameworks like Tailwind.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I have worked across diverse industries — from telecom and blockchain
              to healthcare and e-commerce — delivering production-grade UIs that
              users love. I care deeply about clean code, great UX, and shipping
              things that actually work.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1K4mki3sDVt1QRTnNtYq61fFZKAqfW5X4/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 bg-brand text-white font-semibold rounded-full hover:opacity-90 transition-opacity text-sm"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 border border-white/20 text-white font-semibold rounded-full hover:border-brand hover:text-brand transition-all text-sm"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
