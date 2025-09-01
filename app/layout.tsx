import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileCallBar from "./components/MobileCall";
import "leaflet/dist/leaflet.css";
import { Cta } from "./components/Cta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Top Pet Food Manufacturer in India | SAPLPets",
  description:
    "SAPLPets is a leading private-label pet food manufacturer in India, specializing in premium, organic, and custom formulations. Full-service solutions from R&D to export.",
  keywords: [
    "top pet food manufacturer India",
    "pet food production India",
    "private label pet food India",
    "organic pet food India",
    "custom pet food formulations India",
    "dog food manufacturer India",
    "cat food manufacturer India",
    "pet treats manufacturer India",
  ],
  openGraph: {
    type: "website",
    url: "https://www.saplpets.com",
    title: "Top Pet Food Manufacturer in India | SAPLPets",
    description:
      "SAPLPets – Trusted private-label pet food manufacturer in India. Organic, premium, and custom formulations with global export support.",
    siteName: "SAPLPets",
    images: [
      {
        url: "https://www.saplpets.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SAPLPets Pet Food Manufacturer India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Saplpets",
    title: "Top Pet Food Manufacturer in India | SAPLPets",
    description:
      "Premium private-label & organic pet food manufacturer in India — end-to-end solutions from formulation to export.",
    images: ["https://www.saplpets.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.saplpets.com",
  },
  authors: [{ name: "SAPLPets Team", url: "https://www.saplpets.com/story" }],
  metadataBase: new URL("https://www.saplpets.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Leaflet CSS */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SAPLPets",
              url: "https://www.saplpets.com",
              logo: "https://www.saplpets.com/logo.png",
              image: "https://www.saplpets.com/og-image.jpg",
              description:
                "Premium private-label pet food manufacturer in India. Organic, custom formulations, packaging, QA/QC, and export support.",
              telephone: "+91 79904 70199",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "G-305, Silora Industrial Area, Phase-1, Kishangarh",
                addressLocality: "Kishangarh",
                addressRegion: "Rajasthan",
                postalCode: "305801",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.facebook.com/Saplpets",
                "https://www.instagram.com/Saplpets",
                "https://www.linkedin.com/company/sapl-pets/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white antialiased`}
      >
        <TopBar />
        <Navbar />
        {children}
        <div className="bg-white">
          <Cta />
        </div>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
