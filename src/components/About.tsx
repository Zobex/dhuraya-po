import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const About = () => {
  return (
    <div className="lg:flex lg:h-screen">
      {/* Left side Panel */}
      <div className="max-w-full py-8 lg:w-2/5 lg: p-12 flex flex-col items-baseline bg-gray-800">
        <div className="flex flex-col gap-y-10 lg:p-8">
          <h2 className="scroll-m-20 font-bold text-3xl lg:text-4xl text-gray-200 tracking-wide leading-10 transition-colors first:mt-0">
            We&#39;ve Been Building For Over 09 Years.
          </h2>
          <div>
            <p className="leading-7 [&:not(:first-child)] mb-6 text-gray-200 font-light text-sm text-justify tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              quia optio sapiente iusto dolore harum! Repellat magni, optio
              eaque maxime recusandae voluptatem earum consectetur laboriosam
              quia vel tempora tempore velit?
            </p>
            <Button variant="outlineorng">ABOUT US</Button>
          </div>
        </div>
      </div>

      {/* Right Side Panel  */}
      <div className="max-w-full lg:w-3/5 bg-ceo-bg bg-cover">
        <div className="flex flex-col justify-center items-center lg:mt-14">
          <div className="w-40 h-40 lg:w-72 lg:h-72 mt-6 rounded-full overflow-hidden">
            <Image
              src="/assets/ceo.png"
              width={320}
              height={320}
              alt="ceo-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="mt-6">
            <h2 className="scroll-m-20 p-4 font-semibold text-xl lg:text-2xl text-white tracking-wide leading-8 transition-colors first:mt-0">
              <span className="text-[#F5AA0E]">C.E.O </span>CH SHAHID ABBAS ARAIN
            </h2>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:mt-[127px]">
          <div className="flex flex-col justify-center items-center bg-[#F5AA0E] text-gray-800 p-5 flex-auto">
            <h2 className="scroll-m-20 pb-2 font-bold text-3xl tracking-wide leading-10 transition-colors first:mt-0">
              Call For a Quote
            </h2>
            <h3 className="scroll-m-20 font-semibold text-xl tracking-wide leading-6 transition-colors first:mt-0">
              +92 323-6854958
            </h3>
          </div>
          <div className="flex justify-center items-center bg-gray-300 p-5 flex-auto">
            <Button variant="outline">ABOUT US</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
