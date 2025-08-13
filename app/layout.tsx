import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileCallBar from "./components/MobileCall";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sapelpets | Premium Pet Food Manufacturers",
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
    url: "https://www.Sapelpets.com",
    title: "Sapelpets | Premium Pet Food Manufacturers",
    description:
      "Premium Private Label Pet Food Manufacturer — Organic, healthy & custom formulations for global pet brands.",
    siteName: "Sapelpets",
    images: [
      {
        url: "https://www.Sapelpets.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sapelpets Pet Food Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Sapelpets",
    title: "Sapelpets | Premium Pet Food Manufacturers",
    description:
      "Organic & custom private label pet food manufacturing for dogs, cats & more.",
    images: ["https://www.Sapelpets.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://www.Sapelpets.com",
  },
  authors: [{ name: "Sapelpets Team", url: "https://www.Sapelpets.com/story" }],
  metadataBase: new URL("https://www.Sapelpets.com"),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sapelpets",
              url: "https://www.Sapelpets.com",
              logo: "https://www.Sapelpets.com/logo.png",
              sameAs: [
                "https://www.facebook.com/Sapelpets",
                "https://www.instagram.com/Sapelpets",
                "https://www.linkedin.com/company/sapl-pets/",
              ],
              description:
                "Premium private label pet food manufacturer. Organic & custom formulations for dogs, cats, and more.",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <TopBar />
        <Navbar />
        {children}
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
