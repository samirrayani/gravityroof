import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Metal Roofing",
  description:
    "Metal roofing installation in Central Florida. Durable, energy-efficient, and storm-resistant. Expert installation from Gravity Roofing.",
};

export default function MetalRoofingPage() {
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
            Metal <span className="text-purple">Roofing</span>
          </h1>
          <p className="text-lg text-gray-light leading-relaxed max-w-2xl">
            Built for Florida&apos;s toughest conditions. Metal roofing delivers unmatched durability, energy efficiency, and a lifespan that outlasts traditional materials by decades.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-white font-heading font-bold text-2xl mb-4">Benefits of Metal Roofing</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["50+ year lifespan", "Wind resistance up to 140 mph", "Energy efficient — reflects heat", "Fire resistant", "Low maintenance", "Environmentally friendly", "Insurance premium discounts", "Increases home value"].map((item) => (
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
                <h2 className="text-white font-heading font-bold text-2xl mb-4">Metal Roofing Styles</h2>
                <div className="space-y-4">
                  {[
                    { name: "Standing Seam", desc: "Clean, modern lines with concealed fasteners. The premium choice for residential metal roofing." },
                    { name: "Metal Shingles", desc: "The look of traditional shingles with the performance of metal. Available in multiple profiles." },
                    { name: "Corrugated Metal", desc: "A classic, cost-effective option with excellent durability and weather resistance." },
                    { name: "Stone-Coated Steel", desc: "Combines the strength of steel with the aesthetic of tile, shake, or shingle profiles." },
                  ].map((style) => (
                    <div key={style.name} className="border-l-2 border-purple/30 pl-4">
                      <h3 className="text-white font-semibold mb-1">{style.name}</h3>
                      <p className="text-gray text-sm">{style.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-purple/10 border border-purple/30 rounded-2xl p-8 text-center">
                <h3 className="text-white font-heading font-bold text-xl mb-3">Is Metal Right for You?</h3>
                <p className="text-gray text-sm mb-6">Get a free consultation and compare options for your home.</p>
                <Link href="/contact" className="inline-flex items-center justify-center w-full bg-purple hover:bg-purple-light text-white font-semibold py-3 rounded-lg transition-colors">
                  Free Consultation
                </Link>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-white font-heading font-bold text-lg mb-3">Metal vs. Shingles</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-white font-medium">Lifespan</div>
                    <div className="text-gray">Metal: 50+ yrs &bull; Shingles: 20-30 yrs</div>
                  </div>
                  <div>
                    <div className="text-white font-medium">Wind Rating</div>
                    <div className="text-gray">Metal: 140 mph &bull; Shingles: 110 mph</div>
                  </div>
                  <div>
                    <div className="text-white font-medium">Energy Savings</div>
                    <div className="text-gray">Metal: Up to 25% &bull; Shingles: Minimal</div>
                  </div>
                  <div>
                    <div className="text-white font-medium">Maintenance</div>
                    <div className="text-gray">Metal: Very low &bull; Shingles: Moderate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
