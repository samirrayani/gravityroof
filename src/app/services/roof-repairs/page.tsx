import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roof Repairs",
  description:
    "Expert roof repair services in Central Florida. From leaks to missing shingles, Gravity Roofing fixes it fast and right. Free inspections available.",
};

export default function RoofRepairsPage() {
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
            Roof <span className="text-purple">Repairs</span>
          </h1>
          <p className="text-lg text-gray-light leading-relaxed max-w-2xl">
            Whether it&apos;s a small leak or significant damage, our experienced team quickly identifies the problem and delivers lasting repairs that protect your home.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-white font-heading font-bold text-2xl mb-4">What We Repair</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Missing or damaged shingles", "Roof leaks and water damage", "Flashing repairs", "Soffit and fascia damage", "Gutter issues", "Vent pipe boot repairs", "Cracked or curling shingles", "Ridge cap replacement"].map((item) => (
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
                <h2 className="text-white font-heading font-bold text-2xl mb-4">Our Repair Process</h2>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Inspect", desc: "We thoroughly assess the damage and identify the root cause — not just the symptoms." },
                    { step: "2", title: "Report", desc: "You get a clear, honest report with photos and our recommended course of action." },
                    { step: "3", title: "Repair", desc: "Our trained crew handles the repair using quality materials, completed on your timeline." },
                    { step: "4", title: "Verify", desc: "A final inspection ensures the repair is watertight and built to last." },
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
                <h3 className="text-white font-heading font-bold text-xl mb-3">Free Roof Inspection</h3>
                <p className="text-gray text-sm mb-6">Not sure if you need a repair? We&apos;ll take a look for free and give you an honest answer.</p>
                <Link href="/contact" className="inline-flex items-center justify-center w-full bg-purple hover:bg-purple-light text-white font-semibold py-3 rounded-lg transition-colors">
                  Schedule Inspection
                </Link>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-white font-heading font-bold text-lg mb-3">Why Gravity?</h3>
                <ul className="space-y-3 text-gray text-sm">
                  <li>No unnecessary upselling</li>
                  <li>Honest damage assessments</li>
                  <li>Quality materials &amp; workmanship</li>
                  <li>Insurance claim assistance</li>
                  <li>Financing available</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <div className="text-2xl font-heading font-bold text-white mb-1">24/7</div>
                <div className="text-gray text-sm">Emergency service available</div>
                <a href="tel:4074610234" className="block mt-4 text-purple hover:text-purple-light font-medium transition-colors">
                  (407) 461-0234
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
