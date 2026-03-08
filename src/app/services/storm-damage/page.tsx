import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Storm Damage Repair",
  description:
    "Expert storm damage roof repair in Central Florida. Wind, hail, and hurricane damage restoration with full insurance coordination. Gravity Roofing.",
};

export default function StormDamagePage() {
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
            Storm Damage <span className="text-purple">Repair</span>
          </h1>
          <p className="text-lg text-gray-light leading-relaxed max-w-2xl">
            Central Florida weather doesn&apos;t play nice. When storms damage your roof, we handle everything from assessment to insurance coordination to full restoration.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-white font-heading font-bold text-2xl mb-4">Types of Storm Damage</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Wind damage & lifted shingles", "Hail impact damage", "Hurricane & tropical storm damage", "Fallen tree/branch damage", "Flying debris impact", "Water intrusion & leaks", "Soffit & fascia blow-off", "Gutter damage"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-purple shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                      <span className="text-gray-light text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-white font-heading font-bold text-2xl mb-4">Insurance Claim Process</h2>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Free Damage Assessment", desc: "We inspect your roof, document all damage with photos, and provide a detailed report." },
                    { step: "2", title: "Claim Filing Support", desc: "We help you file your insurance claim with proper documentation and damage reports." },
                    { step: "3", title: "Adjuster Meeting", desc: "We meet with your insurance adjuster on-site to ensure all damage is properly documented." },
                    { step: "4", title: "Full Restoration", desc: "Once approved, we complete the repair or replacement to restore your home's protection." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-purple font-heading font-bold">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-purple/10 border border-purple/30 rounded-2xl p-8 text-center">
                <h3 className="text-white font-heading font-bold text-xl mb-3">Storm Hit Your Area?</h3>
                <p className="text-gray text-sm mb-6">Get a free damage assessment before filing your claim.</p>
                <Link href="/contact" className="inline-flex items-center justify-center w-full bg-purple hover:bg-purple-light text-white font-semibold py-3 rounded-lg transition-colors">
                  Free Storm Assessment
                </Link>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-white font-heading font-bold text-lg mb-3">We Handle Insurance</h3>
                <ul className="space-y-3 text-gray text-sm">
                  <li>Damage documentation</li>
                  <li>Claim filing assistance</li>
                  <li>Adjuster coordination</li>
                  <li>Supplement negotiations</li>
                  <li>Full project management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
