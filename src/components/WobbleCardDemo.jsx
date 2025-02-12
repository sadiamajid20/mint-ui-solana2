"use client";
import React from "react";
import { WobbleCard } from "../components/ui/wobble-card";
import phiBg from "../assets/cards/cardImg1.png";
import linearBg from "../assets/cards/cardImg2.png";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:px-24 px-2 pb-24 mx-auto w-full ">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 bg-[#184e77] min-h-[300px] "
        className=""
      >
        <div className="max-w-xl">
          <h2 className="text-center md:text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            What We Aim to Achieve?
          </h2>
          <p className="jura-font mt-4 text-center md:text-left text-base/6 text-neutral-200">
            At the core of this project is a mission to preserve and celebrate
            street art through the digital world. By combining Phi’s timeless
            artwork with a platform for emerging street artists, we aim to
            create a thriving community of art enthusiasts who appreciate
            creativity and imagination.
          </p>
        </div>
        <img
          src={phiBg}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain -z-10 md:opacity-[100%] opacity-24 rounded-2xl"
        />
      </WobbleCard>

      <WobbleCard containerClassName="jura-font col-span-1 md:min-h-[300px] h-[200px] bg-green-800 ">
        <h2 className="max-w-80 text-center md:text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Preserving Creativity, Inspiring Generations: A Movement for Art and
          Artists.
        </h2>
        {/* <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p> */}
      </WobbleCard>

      <WobbleCard containerClassName="jura-font col-span-1 lg:col-span-3 bg-[#3c1642] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-3xl">
          <h2 className="max-w-sm md:max-w-xl text-center md:text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Our goals include:
          </h2>
          <p className="mt-4  text-center md:text-left text-base/6 text-neutral-200">
            Honoring the Legacy of Phi: Keep the spirit of Phi alive through
            NFTs that represent his playful characters like birds, cats, mice,
            and earthworms from his imaginary world of Pamparigouste.
          </p>
          <p className="mt-4 text-center md:text-left text-base/6 text-neutral-200">
            Supporting Street Artists Globally: Provide a platform for emerging
            street artists to showcase their work, vote on their submissions,
            and reward the best with NFTs from Phi’s collection.
          </p>
          <p className="mt-4 text-center md:text-left text-base/6 text-neutral-200">
            Building a Vibrant Community: Engage art lovers in a collaborative,
            creative community where NFT holders can vote on street art,
            participate in exclusive events, and influence the direction of
            future projects.
          </p>
          <p className="mt-12 text-center md:text-left text-base/6 text-neutral-200 italic">
            Join us in preserving street art’s vibrant culture and become part
            of a creative movement that bridges the physical and digital worlds.
          </p>
        </div>
        <img
          src={linearBg}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl -z-10 md:opacity-[100%] opacity-24"
        />
      </WobbleCard>
    </div>
  );
}
