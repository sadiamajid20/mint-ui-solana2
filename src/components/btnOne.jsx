import React from "react";

const BtnOne = () => {
  return (
    <div className="pt-24">
      <button1 class="group/button  jura-font relative inline-flex items-center justify-center overflow-hidden rounded-md bg-transparent hover:bg-green-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-green-600/50 border border-white/20 w-[200px]">
        <span class="text-lg">Buy Now</span>
        <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div class="relative h-full w-10 bg-white/20"></div>
        </div>
      </button1>
    </div>
  );
};

export default BtnOne;
