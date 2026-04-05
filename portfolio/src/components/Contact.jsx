import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:minamyle@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
          Contact
        </p>
        <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          I'm open to frontend roles, freelance projects, and collaborations.
          Drop me a message and I'll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-card border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-card border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand transition-colors"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full bg-card border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full py-3.5 bg-brand text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 flex items-center justify-center gap-2 text-gray-500 text-sm">
          <span>Or reach me directly at</span>
          <a href="mailto:minamyle@gmail.com" className="text-brand hover:underline">
            minamyle@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
