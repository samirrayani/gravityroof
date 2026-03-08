"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-purple/10 border border-purple/30 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-purple"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-white font-heading text-xl font-bold mb-2">
          Message Sent!
        </h3>
        <p className="text-gray">
          We&apos;ll get back to you within 24 hours. For immediate assistance,
          call us at{" "}
          <a href="tel:4074610234" className="text-purple hover:underline">
            (407) 461-0234
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm text-gray-light mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-colors"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm text-gray-light mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-colors"
            placeholder="(407) 555-0123"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-gray-light mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-colors"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label htmlFor="address" className="block text-sm text-gray-light mb-2">
          Property Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-colors"
          placeholder="123 Main St, Orlando, FL"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm text-gray-light mb-2">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-colors"
        >
          <option value="" className="bg-dark">Select a service</option>
          <option value="repair" className="bg-dark">Roof Repair</option>
          <option value="replacement" className="bg-dark">Roof Replacement</option>
          <option value="inspection" className="bg-dark">Free Roof Inspection</option>
          <option value="emergency" className="bg-dark">Emergency Roofing</option>
          <option value="storm" className="bg-dark">Storm Damage</option>
          <option value="metal" className="bg-dark">Metal Roofing</option>
          <option value="other" className="bg-dark">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-gray-light mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-colors resize-none"
          placeholder="Tell us about your roofing needs..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-purple hover:bg-purple-light text-white font-semibold py-4 rounded-lg transition-colors text-lg"
      >
        Get Your Free Estimate
      </button>
      <p className="text-gray text-xs text-center">
        We&apos;ll respond within 24 hours. No spam, ever.
      </p>
    </form>
  );
}
