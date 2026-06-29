import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const sfProDisplay = localFont({
  variable: "--font-sf-display",
  display: "swap",
  preload: false,
  src: [
    {
      path: "../assets/fonts/sf-pro/subset/SF-Pro-Display-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/sf-pro/subset/SF-Pro-Display-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/sf-pro/subset/SF-Pro-Display-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/sf-pro/subset/SF-Pro-Display-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const sfProText = localFont({
  variable: "--font-sf-text",
  display: "swap",
  preload: false,
  src: [
    {
      path: "../assets/fonts/sf-pro/subset/SF-Pro-Text-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/sf-pro/subset/SF-Pro-Text-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/sf-pro/subset/SF-Pro-Text-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    default: "Art Curatorial Nomads",
    template: "%s - Art Curatorial Nomads",
  },
  description:
    "International curatorial platform operating across contemporary art, immersive technologies, digital culture, and interdisciplinary exhibition-making.",
  openGraph: {
    siteName: "Art Curatorial Nomads",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sfProDisplay.variable} ${sfProText.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
