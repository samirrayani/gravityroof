import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

const stats = [
  { value: "465+", label: "5-Star Reviews" },
  { value: "15+", label: "Years Experience" },
  { value: "5.0", label: "Google Rating" },
  { value: "24/7", label: "Emergency Service" },
];

const services = [
  {
    title: "Roof Repairs",
    description:
      "From missing shingles to hidden leaks, our team quickly diagnoses and fixes roofing issues to protect your home.",
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
      "Premium materials and expert installation. We guide you through every option to find the perfect roof for your home.",
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
      "Catch small issues before they become costly problems. Our thorough inspections are always honest — and always free.",
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
      "Rapid response when you need it most. We provide emergency tarping and repairs to stop damage in its tracks.",
    href: "/services/emergency-roofing",
    icon: (
      <svg className="w-7 h-7 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Storm Damage",
    description:
      "Wind, hail, or hurricane — we handle the full restoration process, including insurance coordination.",
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
      "Durable, energy-efficient, and built for Florida weather. A long-lasting alternative for your home.",
    href: "/services/metal-roofing",
    icon: (
      <svg className="w-7 h-7 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const reviews = [
  {
    name: "Sarah M.",
    location: "Orlando, FL",
    text: "From inspection to completion, Gravity Roofing was professional and thorough. They found damage we didn't even know about and walked us through every step. Our new roof looks incredible.",
    rating: 5,
  },
  {
    name: "James R.",
    location: "Winter Garden, FL",
    text: "After the hurricane, Taz and his crew were out within hours. They got our roof tarped same-day and completed the full replacement in under a week. Can't recommend them enough.",
    rating: 5,
  },
  {
    name: "Maria L.",
    location: "Clermont, FL",
    text: "No pressure sales, honest assessment, and the quality of work is outstanding. They treated our home like their own. Five stars across the board.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple/10 via-dark to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-purple)_0%,_transparent_50%)] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-purple rounded-full animate-pulse" />
              <span className="text-purple text-sm font-medium">
                465+ Five-Star Google Reviews
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6">
              Central Florida&apos;s
              <br />
              <span className="text-purple">Trusted Roofer</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-light max-w-xl mb-10 leading-relaxed">
              Expert residential roofing with accountability, communication, and
              transparency at our core. Licensed, insured, and committed to
              protecting your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-purple hover:bg-purple-light text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
              >
                Get a Free Estimate
              </Link>
              <a
                href="tel:4074610234"
                className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (407) 461-0234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative border-y border-white/10 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-heading font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              Comprehensive roofing solutions for Central Florida homeowners,
              backed by 15+ years of experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Gravity */}
      <section className="py-24 md:py-32 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Why Homeowners
                <br />
                Choose <span className="text-purple">Gravity</span>
              </h2>
              <p className="text-gray-light text-lg mb-8 leading-relaxed">
                Founded by Taz Crumpler with over 15 years in the industry,
                Gravity Roofing was built on three principles that guide
                everything we do.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Communication",
                    desc: "You'll always know where your project stands. No ghosting, no guessing.",
                  },
                  {
                    title: "Transparency",
                    desc: "Upfront pricing, honest assessments, and no hidden fees. Ever.",
                  },
                  {
                    title: "Accountability",
                    desc: "We stand behind our work. If something isn't right, we make it right.",
                  },
                ].map((value) => (
                  <div key={value.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-purple"
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
                    <div>
                      <h3 className="text-white font-heading font-semibold text-lg mb-1">
                        {value.title}
                      </h3>
                      <p className="text-gray text-sm">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                <div className="text-4xl font-heading font-bold text-purple mb-2">
                  5.0
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-gray text-sm">Google Rating</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                <div className="text-4xl font-heading font-bold text-white mb-2">
                  BBB
                </div>
                <div className="text-purple text-sm font-medium mb-1">
                  Accredited
                </div>
                <div className="text-gray text-sm">Business</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                <div className="text-4xl font-heading font-bold text-white mb-2">
                  FL
                </div>
                <div className="text-purple text-sm font-medium mb-1">
                  Licensed
                </div>
                <div className="text-gray text-sm">#CCC1334209</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                <div className="text-3xl font-heading font-bold text-white mb-2">
                  CT
                </div>
                <div className="text-purple text-sm font-medium mb-1">
                  CertainTeed
                </div>
                <div className="text-gray text-sm">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray text-lg">
              Don&apos;t take our word for it — hear from homeowners we&apos;ve
              helped.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-light text-sm leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <div className="text-white font-medium text-sm">
                    {review.name}
                  </div>
                  <div className="text-gray text-xs">{review.location}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-purple hover:text-purple-light font-medium transition-colors"
            >
              See all reviews
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-purple/20 via-dark-lighter to-dark-lighter border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to Protect Your Home?
          </h2>
          <p className="text-gray-light text-lg mb-10 max-w-2xl mx-auto">
            Get a free roof inspection and honest assessment from Central
            Florida&apos;s most trusted roofing team. No pressure, no hidden
            fees.
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
              className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors gap-2"
            >
              Call (407) 461-0234
            </a>
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Flexible Financing Available
            </h2>
            <p className="text-gray-light text-lg max-w-2xl mx-auto mb-8">
              Don&apos;t let budget stop you from protecting your home. We offer
              12-month interest-free, no-payment financing options to make your
              new roof affordable.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-purple hover:bg-purple-light text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Learn About Financing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
