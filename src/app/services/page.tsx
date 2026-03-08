import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Gravity Roofing offers roof repairs, replacements, inspections, emergency roofing, storm damage repair, and metal roofing in Central Florida.",
};

const services = [
  {
    title: "Roof Repairs",
    description:
      "From missing shingles to hidden leaks, our team quickly diagnoses and fixes roofing issues — without unnecessary upselling.",
    href: "/services/roof-repairs",
    icon: (
      <svg className="w-7 h-7 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    title: "Roof Replacements",
    description:
      "Premium materials and expert installation. We guide you through every option to find the perfect roof for your home and budget.",
    href: "/services/roof-replacements",
    icon: (
      <svg className="w-7 h-7 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Roof Inspections",
    description:
      "Thorough, honest, and always free. We catch small problems before they become big ones and give you a clear picture of your roof's health.",
    href: "/services/roof-inspections",
    icon: (
      <svg className="w-7 h-7 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Emergency Roofing",
    description:
      "Rapid response when disaster strikes. We provide emergency tarping, assessment, and repairs to stop further damage to your home.",
    href: "/services/emergency-roofing",
    icon: (
      <svg className="w-7 h-7 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Storm Damage Repair",
    description:
      "Wind, hail, or hurricane — we handle the full restoration process from documentation through insurance coordination to final repair.",
    href: "/services/storm-damage",
    icon: (
      <svg className="w-7 h-7 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Metal Roofing",
    description:
      "Durable, energy-efficient, and built for Florida's toughest weather. A smart, long-lasting alternative for your home.",
    href: "/services/metal-roofing",
    icon: (
      <svg className="w-7 h-7 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Our <span className="text-purple">Services</span>
            </h1>
            <p className="text-lg text-gray-light leading-relaxed">
              Comprehensive residential roofing solutions backed by 15+ years of
              experience, 465+ five-star reviews, and a commitment to doing
              right by every homeowner.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              From first call to final walkthrough, here&apos;s what to expect.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Free Inspection",
                desc: "We come out, assess your roof, and give you an honest report — no cost, no obligation.",
              },
              {
                step: "02",
                title: "Clear Estimate",
                desc: "Upfront pricing with no hidden fees. We explain every option so you can make an informed decision.",
              },
              {
                step: "03",
                title: "Expert Work",
                desc: "Our trained crew handles the job with premium materials, keeping you updated every step of the way.",
              },
              {
                step: "04",
                title: "Final Walkthrough",
                desc: "We don't leave until you're satisfied. A complete walkthrough ensures everything meets our standard.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-heading font-bold text-purple/30 mb-4">
                  {item.step}
                </div>
                <h3 className="text-white font-heading font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
            Not Sure What You Need?
          </h2>
          <p className="text-gray-light text-lg mb-10 max-w-2xl mx-auto">
            No problem. Schedule a free inspection and we&apos;ll help you
            figure out the best path forward for your roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-purple hover:bg-purple-light text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
            >
              Schedule Free Inspection
            </Link>
            <a
              href="tel:4074610234"
              className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
            >
              Call (407) 461-0234
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
