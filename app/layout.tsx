import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import { Roboto } from "next/font/google";
import { IBM_Plex_Sans } from "next/font/google";

export const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const ibm_plex_sans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlickBOX",
  description: "The places to buy your ticket for your Entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Nav />

        <div className="py-[80px] container mx-auto">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
