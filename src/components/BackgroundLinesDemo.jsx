import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import CountdownTimer from "./CountdownTimer";
import { CoverDemo } from "./CoverDemo";
import "./ui/fonts.css";
import BtnOne from "./btnOne";

export function BackgroundLinesDemo() {
  const targetDate = "2023-12-31T23:59:59";

  return (
    <>
      <BackgroundLines className=" items-center  w-full">

      <div className="relative h-100vh pt-30 md:pt-0">
        <p className="jura-font md:text-4xl text-lg  pt-[15%] text-white text-center">Street Art Awakening</p>
      </div>
        <div>
          <CoverDemo />
        </div>
        <div className="flex justify-center pt-4">
        <CountdownTimer />
      </div>
      {/* <BtnOne /> */}
      <div className="absolute inset-0 bg-[url('/phi-bg.png')] bg-cover bg-center -z-10 "></div>
      </BackgroundLines>

      
      
    </>
  );
}
