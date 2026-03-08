import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Gravity Roofing | Central Florida's Trusted Roofer",
    template: "%s | Gravity Roofing",
  },
  description:
    "Gravity Roofing provides expert residential roofing services in Central Florida. Roof repairs, replacements, inspections, and emergency services. 465+ five-star reviews. Licensed & insured.",
  keywords: [
    "roofing",
    "Orlando roofing",
    "Central Florida roofer",
    "roof repair",
    "roof replacement",
    "roof inspection",
    "emergency roofing",
    "storm damage repair",
    "metal roofing",
  ],
  openGraph: {
    title: "Gravity Roofing | Central Florida's Trusted Roofer",
    description:
      "Expert residential roofing services in Central Florida. 465+ five-star reviews.",
    url: "https://gravityroof.vercel.app",
    siteName: "Gravity Roofing",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
