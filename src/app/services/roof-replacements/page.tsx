import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roof Replacements",
  description:
    "Full roof replacement services in Central Florida. Premium materials, expert installation, and financing available. Gravity Roofing — 465+ five-star reviews.",
};

export default function RoofReplacementsPage() {
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
            Roof <span className="text-purple">Replacements</span>
          </h1>
          <p className="text-lg text-gray-light leading-relaxed max-w-2xl">
            When repairs aren&apos;t enough, a full roof replacement gives your home the protection it deserves. We use premium materials and guide you through every decision.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-white font-heading font-bold text-2xl mb-4">Signs You Need a Replacement</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Roof is 20+ years old", "Multiple active leaks", "Widespread shingle damage", "Sagging or structural issues", "Storm damage beyond repair", "Rising energy bills", "Visible daylight in attic", "Granule loss in gutters"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-purple shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span className="text-gray-light text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-white font-heading font-bold text-2xl mb-4">Materials We Install</h2>
                <div className="space-y-4">
                  {[
                    { name: "Architectural Shingles", desc: "The most popular choice. Durable, attractive, and available in a wide range of colors and styles." },
                    { name: "Metal Roofing", desc: "Maximum durability and energy efficiency. Built to withstand Florida's toughest storms." },
                    { name: "Tile Roofing", desc: "Classic Florida aesthetic with excellent longevity and weather resistance." },
                    { name: "Flat Roofing Systems", desc: "TPO and modified bitumen systems for flat or low-slope roof sections." },
                  ].map((material) => (
                    <div key={material.name} className="border-l-2 border-purple/30 pl-4">
                      <h3 className="text-white font-semibold mb-1">{material.name}</h3>
                      <p className="text-gray text-sm">{material.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-purple/10 border border-purple/30 rounded-2xl p-8 text-center">
                <h3 className="text-white font-heading font-bold text-xl mb-3">Financing Available</h3>
                <p className="text-gray text-sm mb-2">12-month interest-free, no-payment options</p>
                <p className="text-gray-light text-sm mb-6">Don&apos;t let budget stop you from protecting your home.</p>
                <Link href="/contact" className="inline-flex items-center justify-center w-full bg-purple hover:bg-purple-light text-white font-semibold py-3 rounded-lg transition-colors">
                  Get Free Estimate
                </Link>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-white font-heading font-bold text-lg mb-3">What&apos;s Included</h3>
                <ul className="space-y-3 text-gray text-sm">
                  <li>Complete tear-off &amp; disposal</li>
                  <li>New underlayment &amp; ice shield</li>
                  <li>Premium roofing materials</li>
                  <li>New flashing &amp; drip edge</li>
                  <li>Ridge vent installation</li>
                  <li>Full cleanup &amp; debris removal</li>
                  <li>Final walkthrough inspection</li>
                  <li>Manufacturer warranty</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
