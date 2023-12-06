import React from "react";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="flex absolute text-3xl ml-14 w-3/4 items-center justify-center mt-20 font-bold z-20 text-white md:text-5xl md:ml-48 md:mt-44">
          Accent Furniture Collections
        </div>
        <div className="flex absolute text-lg mt-36 p-8 justify-start z-20 text-white md:text-3xl md:w-1/2 md:ml-96 md:mt-60">
          These products are made with wood from forest certified to be
          responsibly managed. enviromentally sound and socially beneficial.
        </div>
      </div>
      <img
        className="md:h-[90vh] h-[40vh] w-[100vw] rounded-3xl px-2"
        src="/images/hero.jpg"
      />

      <div className="bg-black absolute md:h-[90vh] md:w-[98vw] md:rounded-3xl md:px-2 z-10 h-[40vh] top-[63px] rounded-2xl w-[96vw] opacity-50 ml-2 "></div>
    </div>
  );
};

export default Hero;
