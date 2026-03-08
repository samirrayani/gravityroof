import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Roof Inspections",
  description:
    "Free, no-obligation roof inspections from Gravity Roofing. Thorough assessment, honest report, and professional recommendations for Central Florida homeowners.",
};

export default function RoofInspectionsPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-purple text-sm mb-6 hover:text-purple-light transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Services
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Free Roof <span className="text-purple">Inspections</span>
          </h1>
          <p className="text-lg text-gray-light leading-relaxed max-w-2xl">
            Regular inspections catch small issues before they become costly repairs. Ours are thorough, honest, and always free — no strings attached.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-white font-heading font-bold text-2xl mb-4">What We Inspect</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Shingle condition & wear", "Flashing & sealant integrity", "Gutter & drainage systems", "Vent pipe boots & penetrations", "Soffit & fascia condition", "Attic ventilation", "Signs of water damage", "Structural integrity"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-purple shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-light text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-white font-heading font-bold text-2xl mb-4">When to Get an Inspection</h2>
                <div className="space-y-4">
                  {[
                    { title: "After a Storm", desc: "High winds, hail, and flying debris can cause hidden damage that worsens over time." },
                    { title: "Before Buying a Home", desc: "Know exactly what you're getting. A roof inspection can save you thousands in unexpected repairs." },
                    { title: "Annual Maintenance", desc: "Florida weather is tough on roofs. An annual check keeps small issues from becoming emergencies." },
                    { title: "Before Insurance Renewal", desc: "Documentation of your roof's condition can help with insurance questions and claims." },
                  ].map((item) => (
                    <div key={item.title} className="border-l-2 border-purple/30 pl-4">
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-purple/10 border border-purple/30 rounded-2xl p-8 text-center">
                <h3 className="text-white font-heading font-bold text-xl mb-3">100% Free</h3>
                <p className="text-gray text-sm mb-6">No cost, no obligation. Just an honest assessment of your roof&apos;s condition.</p>
                <Link href="/contact" className="inline-flex items-center justify-center w-full bg-purple hover:bg-purple-light text-white font-semibold py-3 rounded-lg transition-colors">
                  Book Free Inspection
                </Link>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-white font-heading font-bold text-lg mb-3">What You&apos;ll Get</h3>
                <ul className="space-y-3 text-gray text-sm">
                  <li>Detailed roof assessment</li>
                  <li>Photo documentation</li>
                  <li>Honest condition report</li>
                  <li>Repair recommendations (if any)</li>
                  <li>Cost estimates (no pressure)</li>
                  <li>Insurance-ready documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
