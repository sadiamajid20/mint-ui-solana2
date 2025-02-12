"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./ui/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="flex flex-col md:flex-row md:px-24 px-2">
      {/* Left Side Column */}
      <div className="w-full md:w-2/3">
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black h-full w-full z-10"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[800px] h-full md:h-fit md:max-h-[90%] flex flex-col md:flex-row sm:rounded-3xl overflow-hidden"
              >
                {/* Image on the left */}
                <motion.div
                  layoutId={`image-${active.title}-${id}`}
                  className="w-full md:w-1/2"
                >
                  <img
                    src={active.src}
                    alt={active.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Content on the right */}
                <div className="jura-font w-full md:w-1/2 p-4 flex flex-col justify-between">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="jura-font font-bold text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="jura-font text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                  <div className="flex justify-center">
                    <motion.button
                      layoutId={`button-${active.title}-${id}`}
                      onClick={() => setActive(null)}
                      className="group/button jura-font inline-flex items-center justify-center overflow-hidden rounded-md bg-transparent hover:bg-red-800/30 backdrop-blur-lg px-2 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-red-600/50 border border-white/20 w-[300px]"
                    >
                      <span className="text-lg">Close Answer</span>
                      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                        <div className="relative h-full w-10"></div>
                      </div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <ul className="max-w-full mx-auto w-full gap-4">
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col md:flex-row justify-between items-center dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 flex-col md:flex-row items-center w-full">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <img
                    src={card.src}
                    alt={card.title}
                    className="h-20 w-20 md:h-14 md:w-14 rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="flex flex-col md:flex-row items-center md:items-start w-full">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium jura-font text-white text-center md:text-left"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-400 jura-font text-center md:text-left"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="group/button jura-font relative inline-flex items-center justify-center overflow-hidden rounded-md bg-transparent hover:bg-green-800/30 backdrop-blur-lg px-2 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-green-600/50 border border-white/20 w-[100px] mt-4 md:mt-0"
              >
                <span className="text-lg">Answer</span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                  <div className="relative h-full w-10 bg-white/20"></div>
                </div>
              </motion.button>
            </motion.div>
          ))}
        </ul>
      </div>

      {/* Right Side Column */}
      <div className="w-full md:w-1/3 mt-8 md:mt-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full object-cover rounded-lg shadow-lg"
        >
          <source src="/faq.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Question #01",
    title: "What is The Birds of Pamparigouste?",
    src: "img1.png",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          The Birds of Pamparigouste is A UNIQUE NFT collection of 9,999 NFTs on
          Solana that allows collectors and art lovers to engage with the legacy
          of PHI while supporting street artists worldwide
        </p>
      );
    },
  },
  {
    description: "Question #02",
    title: "What is the purpose of The Birds of Pamparigouste?",
    src: "img2.png",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          This project aims to honor the late French street artist Phi's legacy
          by preserving and showcasing his iconic works through NFTs.
          Additionally, we aim to support the broader street art community by
          providing a platform where artists can share their collections, with
          NFT holders voting on their favorite submissions
        </p>
      );
    },
  },
  {
    description: "Question #03",
    title: "How does voting work for NFT holders?",
    src: "img3.png",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Only NFT holders from our collection will have the power to vote on
          digital street art submissions. The artist with the most votes will
          win exclusive benefits, including a free NFT from Phi’s legendary
          collection.
        </p>
      );
    },
  },
  {
    description: "Question #04",
    title: "What benefits do NFT holders receive?",
    src: "img4.png",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          NFT holders enjoy several perks, including voting rights on street art
          submissions, participation in a lucky draw, exclusive Phi NFT rewards,
          and free child NFTs when our P2E game launches. Holders can also vote
          on which of Phi’s works should be featured in future collections or
          real-world exhibitions.
        </p>
      );
    },
  },
  {
    description: "Question #05",
    title: "How does the project support street artists?",
    src: "img5.png",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          We dedicate 30% of proceeds to street artists, based on community
          voting. Street artists can submit their work to our platform, and the
          most-voted artist will win a free NFT from Phi’s collection along with
          other rewards.
        </p>
      );
    },
  },
];