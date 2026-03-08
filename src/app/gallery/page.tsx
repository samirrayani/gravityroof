import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See our completed roofing projects across Central Florida. Roof replacements, repairs, and metal roofing installations by Gravity Roofing.",
};

const projects = [
  { title: "Full Shingle Replacement", location: "Orlando, FL", type: "Replacement" },
  { title: "Emergency Storm Repair", location: "Winter Garden, FL", type: "Emergency" },
  { title: "Standing Seam Metal Roof", location: "Clermont, FL", type: "Metal" },
  { title: "Roof Repair & Flashing", location: "Apopka, FL", type: "Repair" },
  { title: "Complete Re-Roof", location: "Sanford, FL", type: "Replacement" },
  { title: "Hurricane Damage Restoration", location: "Kissimmee, FL", type: "Storm Damage" },
  { title: "Metal Roof Installation", location: "Lake Mary, FL", type: "Metal" },
  { title: "Architectural Shingle Upgrade", location: "Winter Park, FL", type: "Replacement" },
  { title: "Tile Roof Repair", location: "Ocoee, FL", type: "Repair" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Project <span className="text-purple">Gallery</span>
            </h1>
            <p className="text-lg text-gray-light leading-relaxed">
              Browse our completed projects across Central Florida. Every roof
              tells a story of quality craftsmanship and homeowner satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple/40 transition-all"
              >
                {/* Placeholder image area */}
                <div
                  className="aspect-[4/3] bg-gradient-to-br from-purple/20 to-purple/5 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, hsl(${260 + i * 10}, 70%, ${15 + i * 2}%) 0%, hsl(${260 + i * 10}, 50%, ${8 + i}%) 100%)`,
                  }}
                >
                  <svg
                    className="w-16 h-16 text-purple/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-heading font-semibold">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray text-sm">{project.location}</span>
                    <span className="text-purple text-xs font-medium bg-purple/10 px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray mb-6">
              Want to see more? We have hundreds of completed projects across
              Central Florida.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-purple hover:bg-purple-light text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Get a Free Estimate for Your Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
