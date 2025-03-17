"use client";

import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import ScrollSection from "@/components/ScrollSection";
import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";
import { TimelineDemo } from "@/components/TimelineDemo";
import { ExpandableCardDemo } from "@/components/ExpandableCardDemo";
import Footer from "@/components/Footer";

const WalletProvider = dynamic(() => import("@/components/WalletProvider"), {
  ssr: false,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>The Birds of Pamparigouste</title>
        <link rel="icon" href="/phi-logo-transparent.png" />
      </head>
      <body>
        <div id="navbar">
          <Navbar />
        </div>
        <div id="background" className="h-screen">
          <BackgroundLinesDemo />
        </div>
        <div id="scroll-section" className="w-full">
          <ScrollSection />
        </div>
        <div id="wobble-card" className="bg-black">
          <WobbleCardDemo />
        </div>
        <div id="wallet-provider" className="bg-black">
          <WalletProvider>{children}</WalletProvider>
        </div>
        <div id="timeline">
          <TimelineDemo />
        </div>
        <div id="expandable-card" className="bg-black py-24">
          <ExpandableCardDemo />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </body>
    </html>
  );
}
