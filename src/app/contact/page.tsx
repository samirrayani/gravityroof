import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free roof estimate from Gravity Roofing. Call (407) 461-0234 or fill out our contact form. Serving Orlando and all of Central Florida.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Get Your <span className="text-purple">Free Estimate</span>
            </h1>
            <p className="text-lg text-gray-light leading-relaxed">
              Ready to protect your home? Reach out for a free inspection and
              honest assessment. No pressure, no obligation.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-white font-heading font-bold text-xl mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center shrink-0">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-medium mb-1">Phone</div>
                      <a
                        href="tel:4074610234"
                        className="text-gray-light hover:text-purple transition-colors"
                      >
                        (407) 461-0234
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center shrink-0">
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
                      <div className="text-white font-medium mb-1">Office</div>
                      <p className="text-gray-light">
                        14 S Bumby Ave
                        <br />
                        Orlando, FL 32803
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center shrink-0">
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
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-medium mb-1">
                        Service Area
                      </div>
                      <p className="text-gray-light">
                        Orlando &amp; all of Central Florida
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple/10 border border-purple/30 rounded-2xl p-8">
                <h3 className="text-white font-heading font-bold text-lg mb-3">
                  Why a Free Inspection?
                </h3>
                <ul className="space-y-3 text-gray-light text-sm">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-purple shrink-0 mt-0.5"
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
                    Catch small issues before they become costly repairs
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-purple shrink-0 mt-0.5"
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
                    Get an honest assessment — no upselling
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-purple shrink-0 mt-0.5"
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
                    Documentation for insurance claims
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-purple shrink-0 mt-0.5"
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
                    Peace of mind for your family
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <div className="text-gray text-sm mb-2">License</div>
                <div className="text-white font-heading font-bold text-lg">
                  #CCC1334209
                </div>
                <div className="text-gray text-xs mt-1">
                  Florida Licensed &amp; Insured
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
