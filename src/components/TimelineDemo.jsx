// import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "PHASE 01",
      content: (
        <div>
          <p className="text-2xl font-semibold text-left jura-font text-white mb-6">
            The Legacy Begins (Q4 2024)
          </p>
          <div>
            <p className="text-lg font-semibold text-left jura-font text-white mb-4">
              Website Development: Launch the official website that introduces
              Phi's legacy and the street art voting platform.
            </p>
            <p className="text-lg font-semibold text-left jura-font text-white mb-4">
              NFT Collection Launch: Release Phi’s exclusive NFT collection
              featuring his most iconic characters.
            </p>
            <p className="text-lg font-semibold text-left jura-font text-white mb-4">
              Street Artist Submissions: Open the platform for street artists to
              share their work with the community.
            </p>
            <p className="text-lg font-semibold text-left jura-font text-white mb-4">
              Voting Begins: NFT holders start voting on the street art
              collections submitted by global artists.
            </p>
            <p className="text-lg font-semibold text-left jura-font text-white mb-4">
              Initial Marketing: Begin community engagement on social media and
              NFT platforms to attract art enthusiasts.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "PHASE 02",
      content: (
        <div>
          <p className="text-2xl font-semibold text-left jura-font text-white mb-6">
            Voting and Rewards (Q1 2025)
          </p>
          <div>
            <p className="text-lg font-semibold text-left jura-font text-white mb-4">
              Artist Voting & Rewards: Announce the first round of winners from
              the street art competition, with 30% of proceeds going to the top
              artist.
            </p>
            <p className="text-lg font-semibold text-left jura-font text-white mb-4">
              Phi’s Legacy Expands: Introduce new NFT drops featuring more of
              Phi's whimsical creations.
            </p>
            <p className="text-lg font-semibold text-left jura-font text-white mb-4">
              Lucky Draw Launch: Allow NFT holders to participate in a lucky
              draw for as low as $5.
            </p>
            <p className="text-lg font-semibold text-left jura-font text-white mb-4">
              Community Building: Engage the community through art contests,
              AMAs, and collaborations with street art influencers.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "PHASE 03",
      content: (
        <div>
          <p className="text-2xl font-semibold text-left jura-font text-white mb-6">
            Game and Collaborations (Q2 2025)
          </p>
          <div>
            <p className="text-lg font-semibold text-left jura-font text-white mb-4">
              P2E Game Release: Launch the Play-to-Earn game, where child NFTs
              come into play, allowing holders to engage with Phi’s universe in
              new ways.
            </p>
            <p className="text-lg font-semibold text-left jura-font text-white mb-4">
              Child NFT Drop: Current NFT holders will receive child NFTs for
              free as part of the game’s release.
            </p>
            <p className="text-lg font-semibold text-left jura-font text-white mb-4">
              Global Collaborations: Expand partnerships with international
              street artists, NFT platforms, and collectors to build a global
              network of support for street art.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "PHASE 04",
      content: (
        <div>
          <p className="text-2xl font-semibold text-left jura-font text-white mb-6">
            Long-Term Vision (Q3 2025 - Q3 2026)
          </p>
          <div>
            <p className="text-lg font-semibold text-left jura-font text-white mb-4">
              Animated Adaptations: Begin exploring new formats such as animated
              versions of Phi’s works, or documentaries showcasing his life and
              artistic impact.
            </p>
            <p className="text-lg font-semibold text-left jura-font text-white mb-4">
              Street Art Exhibitions: Plan real-world exhibitions featuring both
              Phi's works and the best street art voted on by the community.
            </p>
            <p className="text-lg font-semibold text-left jura-font text-white mb-4">
              Continued Growth: Evolve the project based on community feedback
              and explore new ways to expand Phi’s legacy and support emerging
              street artists.
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
