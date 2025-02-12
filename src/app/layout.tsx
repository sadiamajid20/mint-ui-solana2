"use client";

import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import ScrollSection from "@/components/ScrollSection";
import {BackgroundLinesDemo} from "@/components/BackgroundLinesDemo";
import {WobbleCardDemo} from "@/components/WobbleCardDemo";
import {TimelineDemo} from "@/components/TimelineDemo";
import {ExpandableCardDemo} from "@/components/ExpandableCardDemo";
import Footer from "@/components/Footer";


const WalletProvider = dynamic(() => import("@/components/WalletProvider"), {
  ssr: false,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar/>
        </div>
        <div className="h-screen ">
        <BackgroundLinesDemo/>
      </div>
      <div className="w-full">
        <ScrollSection />
      </div>
      <div className="bg-black">
        <WobbleCardDemo />
      </div>
      <div className="bg-black">
        <WalletProvider >{children}</WalletProvider>
        </div>
        <div>
      <TimelineDemo />
      </div>
      <div  className="bg-black py-24">
      <ExpandableCardDemo/>
      </div>
      <div>
        <Footer/>
      </div>
      </body>
    </html>
  );
}
