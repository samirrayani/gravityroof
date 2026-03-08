import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Roofing tips, maintenance guides, and expert advice from Gravity Roofing. Stay informed about protecting your Central Florida home.",
};

const posts = [
  {
    title: "5 Signs Your Roof Needs Attention Before Storm Season",
    excerpt:
      "Florida storm season hits hard. Here are the warning signs every homeowner should check before the first major storm rolls through.",
    date: "Coming Soon",
    category: "Maintenance",
  },
  {
    title: "Metal vs. Shingle Roofing: Which Is Right for Your Florida Home?",
    excerpt:
      "Both options have their advantages. We break down cost, durability, energy efficiency, and insurance benefits to help you decide.",
    date: "Coming Soon",
    category: "Materials",
  },
  {
    title: "How to Navigate Your Roof Insurance Claim Like a Pro",
    excerpt:
      "Filing an insurance claim after storm damage doesn't have to be stressful. Here's what to document and how to work with your adjuster.",
    date: "Coming Soon",
    category: "Insurance",
  },
  {
    title: "Why Regular Roof Inspections Save You Thousands",
    excerpt:
      "A small leak today can become a major repair tomorrow. Learn why annual inspections are the best investment in your home's health.",
    date: "Coming Soon",
    category: "Maintenance",
  },
  {
    title: "What to Expect During a Full Roof Replacement",
    excerpt:
      "From material selection to the final walkthrough, here's a step-by-step look at our roof replacement process.",
    date: "Coming Soon",
    category: "Process",
  },
  {
    title: "Emergency Roof Damage: What to Do in the First 24 Hours",
    excerpt:
      "When a storm damages your roof, quick action prevents further damage. Here's your immediate action plan.",
    date: "Coming Soon",
    category: "Emergency",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Roofing <span className="text-purple">Blog</span>
            </h1>
            <p className="text-lg text-gray-light leading-relaxed">
              Expert tips, maintenance guides, and industry insights to help you
              make informed decisions about your roof.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-purple text-xs font-medium bg-purple/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray text-xs">{post.date}</span>
                </div>
                <h2 className="text-white font-heading font-bold text-lg mb-3 flex-1">
                  {post.title}
                </h2>
                <p className="text-gray text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="text-purple/50 text-sm font-medium">
                  Coming soon
                </span>
              </article>
            ))}
          </div>

          <div className="mt-16 bg-purple/10 border border-purple/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-white font-heading font-bold text-2xl mb-3">
              Have a Roofing Question?
            </h2>
            <p className="text-gray-light mb-6 max-w-xl mx-auto">
              Our blog is launching soon with expert advice and guides. In the
              meantime, reach out directly — we&apos;re happy to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-purple hover:bg-purple-light text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Ask Us Anything
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
