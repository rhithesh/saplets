import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileCallBar from "./components/MobileCall";
import "leaflet/dist/leaflet.css"
import "./globals.css"
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
  title: "Saplpets | Premium Pet Food Manufacturers",
  description:
    "One-stop premium private label pet food manufacturer. Organic, custom formulations & global supply for dogs, cats & other pets.",
  keywords: [
    "pet food manufacturer",
    "private label pet food",
    "organic pet food",
    "custom pet food formulations",
    "dog food manufacturer",
    "cat food manufacturer",
    "pet treats wholesale",
  ],
  openGraph: {
    type: "website",
    url: "https://www.Saplpets.com",
    title: "Saplpets | Premium Pet Food Manufacturers",
    description:
      "Premium Private Label Pet Food Manufacturer — Organic, healthy & custom formulations for global pet brands.",
    siteName: "Saplpets",
    images: [
      {
        url: "https://www.Saplpets.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saplpets Pet Food Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Saplpets",
    title: "Saplpets | Premium Pet Food Manufacturers",
    description:
      "Organic & custom private label pet food manufacturing for dogs, cats & more.",
    images: ["https://www.Saplpets.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://www.Saplpets.com",
  },
  authors: [{ name: "Saplpets Team", url: "https://www.Saplpets.com/story" }],
  metadataBase: new URL("https://www.Saplpets.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}

        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossOrigin="" />
{/* <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script> */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Saplpets",
              url: "https://www.Saplpets.com",
              logo: "https://www.Saplpets.com/logo.png",
              sameAs: [
                "https://www.facebook.com/Saplpets",
                "https://www.instagram.com/Saplpets",
                "https://www.linkedin.com/company/sapl-pets/",
              ],
              description:
                "Premium private label pet food manufacturer. Organic & custom formulations for dogs, cats, and more.",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  bg-white antialiased`}
      >
        <TopBar />
        <Navbar />
        {children}
        <div className=" bg-white">
                  <Cta/>


        </div>
        <Footer />

        <MobileCallBar />
      </body>
    </html>
  );
}
