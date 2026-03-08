import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Gravity Roofing serves Orlando and all of Central Florida. See our full service area map and find roofing services near you.",
};

const areas = [
  { name: "Orlando", featured: true },
  { name: "Apopka", featured: true },
  { name: "Clermont", featured: true },
  { name: "Sanford", featured: true },
  { name: "Winter Garden", featured: true },
  { name: "Kissimmee", featured: true },
  { name: "Lake Mary", featured: false },
  { name: "Winter Park", featured: false },
  { name: "Ocoee", featured: false },
  { name: "Altamonte Springs", featured: false },
  { name: "Casselberry", featured: false },
  { name: "DeBary", featured: false },
  { name: "Deltona", featured: false },
  { name: "Longwood", featured: false },
  { name: "Maitland", featured: false },
  { name: "Oviedo", featured: false },
  { name: "St. Cloud", featured: false },
  { name: "Windermere", featured: false },
  { name: "Winter Springs", featured: false },
  { name: "Mount Dora", featured: false },
  { name: "Tavares", featured: false },
  { name: "Eustis", featured: false },
  { name: "Leesburg", featured: false },
  { name: "Daytona Beach", featured: false },
];

export default function ServiceAreasPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Service <span className="text-purple">Areas</span>
            </h1>
            <p className="text-lg text-gray-light leading-relaxed">
              Gravity Roofing proudly serves Orlando and communities throughout
              Central Florida. If you&apos;re in the area, we&apos;ve got you
              covered.
            </p>
          </div>
        </div>
      </section>

      {/* Main Areas */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-white mb-8">
            Primary Service Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {areas
              .filter((a) => a.featured)
              .map((area) => (
                <div
                  key={area.name}
                  className="bg-purple/10 border border-purple/30 rounded-2xl p-6 flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-purple/20 rounded-lg flex items-center justify-center shrink-0">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-heading font-semibold">
                      {area.name}, FL
                    </div>
                    <div className="text-gray text-sm">Full roofing services</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Additional Areas */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-white mb-8">
            We Also Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {areas
              .filter((a) => !a.featured)
              .map((area) => (
                <div
                  key={area.name}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center"
                >
                  <div className="text-gray-light text-sm font-medium">
                    {area.name}
                  </div>
                </div>
              ))}
          </div>
          <p className="text-gray text-sm mt-8">
            Don&apos;t see your city listed? Give us a call — we likely serve
            your area too.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-purple/20 via-dark-lighter to-dark-lighter border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
            Roofing Services Near You
          </h2>
          <p className="text-gray-light text-lg mb-10 max-w-2xl mx-auto">
            No matter where you are in Central Florida, Gravity Roofing
            delivers the same exceptional service, quality, and integrity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-purple hover:bg-purple-light text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:4074610234"
              className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
            >
              (407) 461-0234
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
