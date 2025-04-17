import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Component & Config imports
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "cyan" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Rahul Gajbhiye",
    template: "%s | Rahul Gajbhiye",
  },
  description:
    "Rahul Gajbhiye is a full-stack developer & devops engineer, coding and crafting products.",
  keywords: ["Developer", "Designer", "Entrepreneur"],
  authors: { name: "Rahul Gajbhiye", url: "https://rahulgajbhiye.com" },
  creator: "Rahul Gajbhiye",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  twitter: {
    card: "summary_large_image",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${inter.className} w-full`}>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
          {children}
        </main>
        <Footer />
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
