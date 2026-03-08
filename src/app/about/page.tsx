import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind Gravity Roofing. Founded by Taz Crumpler with 15+ years of experience, we protect Central Florida homes with integrity.",
};

const values = [
  {
    title: "Communication",
    description:
      "We keep you informed at every stage — from inspection to final cleanup. You'll never be left wondering what's happening with your roof.",
    icon: (
      <svg className="w-7 h-7 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description:
      "No hidden fees, no vague answers. We provide upfront pricing, honest assessments, and clear documentation every time.",
    icon: (
      <svg className="w-7 h-7 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Accountability",
    description:
      "We follow through on every commitment. If something isn't right, we own it and fix it. Your satisfaction is our reputation.",
    icon: (
      <svg className="w-7 h-7 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Built on <span className="text-purple">Integrity</span>
            </h1>
            <p className="text-lg text-gray-light leading-relaxed">
              Gravity Roofing is a locally owned and operated roofing contractor
              serving Central Florida homeowners. We don&apos;t just install
              roofs — we protect families and homes.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 rounded-full px-4 py-2 mb-6">
                <span className="text-purple text-sm font-medium">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
                Meet Taz Crumpler
              </h2>
              <div className="space-y-4 text-gray-light leading-relaxed">
                <p>
                  Growing up in a family of contractors, Taz learned early that
                  good work starts with good character. After spending over 15
                  years in the construction industry, he founded Gravity Roofing
                  with a clear mission: deliver roofing that homeowners can
                  trust.
                </p>
                <p>
                  What drives him is simple — seeing the relief on a
                  homeowner&apos;s face when a stressful roofing situation is
                  handled with care and professionalism. Every project is
                  personal.
                </p>
                <p>
                  Today, Gravity Roofing serves communities across Central
                  Florida with a dedicated team that shares Taz&apos;s
                  commitment to quality, honesty, and customer-first service.
                </p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">
              <div className="w-32 h-32 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-16 h-16 text-purple"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-heading font-bold text-2xl mb-1">
                Taz Crumpler
              </h3>
              <p className="text-purple font-medium mb-4">
                President &amp; Founder
              </p>
              <p className="text-gray text-sm">
                15+ years in construction &bull; Florida Licensed &bull;
                CertainTeed Certified
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              Three principles that guide every inspection, every repair, and
              every conversation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 bg-purple/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-white font-heading font-bold text-xl mb-3">
                  {value.title}
                </h3>
                <p className="text-gray text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Credentials &amp; Recognition
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Florida Licensed", sub: "#CCC1334209" },
              { label: "Fully Insured", sub: "Complete coverage" },
              { label: "BBB Accredited", sub: "A+ Rating" },
              { label: "CertainTeed", sub: "Certified Contractor" },
            ].map((cred) => (
              <div
                key={cred.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
              >
                <div className="text-white font-heading font-bold text-lg mb-1">
                  {cred.label}
                </div>
                <div className="text-gray text-sm">{cred.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-purple/20 via-dark-lighter to-dark-lighter border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
            Ready to Work with a Team You Can Trust?
          </h2>
          <p className="text-gray-light text-lg mb-10 max-w-2xl mx-auto">
            Schedule your free roof inspection today and experience the Gravity
            difference.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-purple hover:bg-purple-light text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
