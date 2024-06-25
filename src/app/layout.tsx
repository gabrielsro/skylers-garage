import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/ui/fonts";
import Navbar from "@/ui/home/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Skyler's Garage",
  description: "Marketplace for Nissan Skylines and Nissan Skyline parts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
