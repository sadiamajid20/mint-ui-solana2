import React from "react";
import Head from "next/head";

const MintNFT: React.FC = () => {
  return (
    <>
      <Head>
        <title>Mint NFT</title>
        <meta name="description" content="Mint your unique NFT now!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="flex flex-col items-center py-24">
        <div className="flex flex-col items-center bg-gray-900 p-8 rounded-xl border border-gray-700 w-80">
          <h1 className="text-2xl font-bold text-white">Mint Now</h1>
          <p className="text-gray-400 text-center my-4">
            Mint your NFT now via LaunchMyNFT. You will receive a random NFT from the collection.
          </p>

          <a
            href="https://launchmynft.io/collections/Fytbf5oVkgikaor6YjgN1fZKbBPGgCyoabfN3T2H55qt/lcXmRhRShBreLrgPHTW0"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full bg-green-500 text-black font-bold py-2 px-4 rounded hover:bg-green-600 text-center transition"
          >
            Mint Now
          </a>
        </div>
      </main>
    </>
  );
};

export default MintNFT;
