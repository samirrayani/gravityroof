import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "See what Central Florida homeowners say about Gravity Roofing. 465+ five-star Google reviews. Real experiences from real customers.",
};

const reviews = [
  { name: "Sarah M.", location: "Orlando, FL", text: "From inspection to completion, Gravity Roofing was professional and thorough. They found damage we didn't even know about and walked us through every step. Our new roof looks incredible.", service: "Roof Replacement" },
  { name: "James R.", location: "Winter Garden, FL", text: "After the hurricane, Taz and his crew were out within hours. They got our roof tarped same-day and completed the full replacement in under a week. Can't recommend them enough.", service: "Emergency Roofing" },
  { name: "Maria L.", location: "Clermont, FL", text: "No pressure sales, honest assessment, and the quality of work is outstanding. They treated our home like their own. Five stars across the board.", service: "Roof Inspection" },
  { name: "David P.", location: "Apopka, FL", text: "We had three other companies come out and try to sell us a full replacement. Gravity told us we only needed a repair. That kind of honesty is rare and earned a customer for life.", service: "Roof Repair" },
  { name: "Christine W.", location: "Sanford, FL", text: "The communication throughout the entire process was exceptional. Daily updates, photos of progress, and they cleaned up perfectly when done. Couldn't ask for more.", service: "Roof Replacement" },
  { name: "Robert T.", location: "Kissimmee, FL", text: "Taz personally came out to inspect our roof after a storm. He was straightforward about what we needed and helped us navigate our insurance claim. Smooth process from start to finish.", service: "Storm Damage" },
  { name: "Angela K.", location: "Lake Mary, FL", text: "We went with a metal roof on their recommendation and couldn't be happier. The crew was professional, on time every day, and the end result is stunning.", service: "Metal Roofing" },
  { name: "Mike S.", location: "Winter Park, FL", text: "Had a leak that two other roofers couldn't fix. Gravity found the real issue on their first visit and had it repaired the same day. No runaround, just results.", service: "Roof Repair" },
  { name: "Jennifer H.", location: "Ocoee, FL", text: "From the office staff to the crew on the roof, everyone was friendly, professional, and clearly took pride in their work. This is how a business should be run.", service: "Roof Replacement" },
];

export default function ReviewsPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Customer <span className="text-purple">Reviews</span>
            </h1>
            <p className="text-lg text-gray-light leading-relaxed">
              Don&apos;t just take our word for it. Here&apos;s what Central
              Florida homeowners have to say about working with Gravity Roofing.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/10 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-white mb-1">5.0</div>
              <div className="flex justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-gray text-sm">Google Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-white mb-1">465+</div>
              <div className="text-gray text-sm">Google Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-white mb-1">5.0</div>
              <div className="text-gray text-sm">Facebook Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-white mb-1">A+</div>
              <div className="text-gray text-sm">BBB Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-light text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium text-sm">{review.name}</div>
                    <div className="text-gray text-xs">{review.location}</div>
                  </div>
                  <span className="text-purple text-xs font-medium bg-purple/10 px-3 py-1 rounded-full">
                    {review.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-purple/20 via-dark-lighter to-dark-lighter border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
            Join 465+ Happy Homeowners
          </h2>
          <p className="text-gray-light text-lg mb-10">
            Experience the service that&apos;s earned us a perfect 5-star rating.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-purple hover:bg-purple-light text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
