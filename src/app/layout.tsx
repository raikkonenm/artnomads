import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const sfProDisplay = localFont({
  variable: "--font-sf-display",
  display: "swap",
  src: [
    {
      path: "../assets/fonts/sf-pro/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/sf-pro/SF-Pro-Display-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/sf-pro/SF-Pro-Display-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/sf-pro/SF-Pro-Display-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

const sfProText = localFont({
  variable: "--font-sf-text",
  display: "swap",
  src: [
    {
      path: "../assets/fonts/sf-pro/SF-Pro-Text-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/sf-pro/SF-Pro-Text-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/sf-pro/SF-Pro-Text-Semibold.otf",
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
