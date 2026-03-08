import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about roofing services from Gravity Roofing. Answers about repairs, replacements, insurance, financing, and more.",
};

const faqs = [
  {
    q: "How much does a new roof cost?",
    a: "Every roof is different. Cost depends on size, material, pitch, and accessibility. We provide free, no-obligation estimates so you know exactly what to expect — no surprises.",
  },
  {
    q: "Do you offer free roof inspections?",
    a: "Yes! Every inspection is completely free with no strings attached. We'll give you an honest assessment of your roof's condition and only recommend work that's genuinely needed.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "Most residential roof replacements are completed in 1-3 days, depending on the size and complexity of your roof. We'll give you a clear timeline before we start.",
  },
  {
    q: "Do you help with insurance claims?",
    a: "Absolutely. We document all damage thoroughly, help you file your claim, meet with your adjuster on-site, and manage the process from start to finish.",
  },
  {
    q: "What financing options do you offer?",
    a: "We offer 12-month interest-free, no-payment financing options. Don't let budget concerns keep you from protecting your home — we'll find a solution that works.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Gravity Roofing is fully licensed (FL #CCC1334209) and insured. We're also BBB accredited and CertainTeed certified.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Orlando and all of Central Florida, including Apopka, Clermont, Sanford, Winter Garden, Kissimmee, Lake Mary, Winter Park, Ocoee, and surrounding communities.",
  },
  {
    q: "What roofing materials do you install?",
    a: "We install architectural shingles, metal roofing (standing seam, metal shingles, corrugated), tile roofing, and flat roofing systems. We'll help you choose the best option for your home and budget.",
  },
  {
    q: "Do you offer emergency roofing services?",
    a: "Yes — we provide 24/7 emergency response including tarping, leak containment, and temporary repairs. Call (407) 461-0234 for immediate assistance.",
  },
  {
    q: "How do I know if I need a repair or a full replacement?",
    a: "That's exactly what our free inspection answers. We'll assess the damage and give you an honest recommendation. If a repair will do the job, that's what we'll suggest — we don't upsell.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Frequently Asked <span className="text-purple">Questions</span>
            </h1>
            <p className="text-lg text-gray-light leading-relaxed">
              Got questions? We&apos;ve got answers. If you don&apos;t see what
              you&apos;re looking for, reach out — we&apos;re happy to help.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-white font-heading font-semibold text-lg mb-3">
                  {faq.q}
                </h2>
                <p className="text-gray text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-purple/10 border border-purple/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-white font-heading font-bold text-2xl mb-3">
              Still Have Questions?
            </h2>
            <p className="text-gray-light mb-6">
              We&apos;re here to help. Reach out and we&apos;ll get you a
              straight answer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-purple hover:bg-purple-light text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:4074610234"
                className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                (407) 461-0234
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
