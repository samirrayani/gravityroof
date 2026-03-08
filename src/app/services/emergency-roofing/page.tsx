import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Roofing",
  description:
    "24/7 emergency roofing services in Central Florida. Rapid response tarping, assessment, and repairs from Gravity Roofing. Call (407) 461-0234.",
};

export default function EmergencyRoofingPage() {
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
            Emergency <span className="text-purple">Roofing</span>
          </h1>
          <p className="text-lg text-gray-light leading-relaxed max-w-2xl">
            When disaster strikes, every minute counts. Our emergency team provides rapid response to stop damage and protect your home.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Emergency CTA */}
          <div className="bg-purple/10 border border-purple/30 rounded-2xl p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-white font-heading font-bold text-2xl mb-2">Roof Emergency Right Now?</h2>
              <p className="text-gray-light">Call us immediately for rapid response service.</p>
            </div>
            <a href="tel:4074610234" className="inline-flex items-center justify-center bg-purple hover:bg-purple-light text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors gap-2 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (407) 461-0234
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-white font-heading font-bold text-2xl mb-4">Emergency Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Emergency tarping", "Leak containment", "Tree/debris removal", "Storm damage assessment", "Temporary repairs", "Board-up services", "Water damage mitigation", "Insurance documentation"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-purple shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-gray-light text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-white font-heading font-bold text-2xl mb-4">What to Do in a Roof Emergency</h2>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Stay Safe", desc: "Move your family away from the damaged area. Don't go on the roof yourself." },
                    { step: "2", title: "Contain Water", desc: "Place buckets under leaks and move valuables away from affected areas." },
                    { step: "3", title: "Call Us", desc: "Reach us at (407) 461-0234 for immediate assistance. We'll dispatch our emergency crew." },
                    { step: "4", title: "Document Damage", desc: "Take photos from a safe distance if possible. This helps with insurance claims." },
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
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-white font-heading font-bold text-lg mb-3">Rapid Response</h3>
                <ul className="space-y-3 text-gray text-sm">
                  <li>Available 24/7</li>
                  <li>Same-day emergency tarping</li>
                  <li>Fast damage assessment</li>
                  <li>Insurance claim support</li>
                  <li>Full repair &amp; restoration</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <div className="text-2xl font-heading font-bold text-white mb-1">24/7</div>
                <div className="text-gray text-sm mb-4">Emergency Service</div>
                <a href="tel:4074610234" className="block text-purple hover:text-purple-light font-bold text-lg transition-colors">
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
