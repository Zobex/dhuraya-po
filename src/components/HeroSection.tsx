import React from "react";
import { Button } from "@/components/ui/button";
import { GiPaintBucket } from "react-icons/gi";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { LuLampFloor } from "react-icons/lu";
import { MdFoundation } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="lg:flex lg:h-screen">
      {/* Left side Panel */}
      <div className="flex flex-col items-baseline max-w-md px-8 py-12 mx-auto bg-cover sm:max-w-xl lg:w-2/3 lg:p-48 bg-hero-image">
        <h2 className="font-bold leading-6 tracking-wide transition-colors scroll-m-20 first:mt-0 lg:leading-8">
          <span className="text-4xl sm:text-5xl lg:text-6xl text-[#F5AA0E]">
            Rayya Muneez
          </span>{" "}
          <br />{" "}
          <span className="text-xl text-white sm:text-2xl lg:text-3xl">
            {" "}
            Construction & Developers Company
          </span>
        </h2>
        <p className="text-sm leading-5 mt-2 mb-4 sm:text-base text-gray-200 font-normal tracking-wide lg:leading-7 lg:text-base [&:not(:first-child)] ">
          Transforming Visions into Reality, Your Trusted Partner in
          Construction Excellence.
        </p>
        <Button>VIEW OUR WORK</Button>
      </div>

      {/* Right Side Panel  */}
      <div className="px-8 py-6 max-w-md mx-auto flex justify-center items-center sm:max-w-xl lg:w-1/3 lg:px-16 lg:py-12 flex-col lg:items-baseline bg-[#F5AA0E]">
        <h2 className="pb-6 mt-6 text-3xl font-bold tracking-wide transition-colors scroll-m-20 lg:first:mt-16">
          Our Services
        </h2>

        {/* Design & Build */}

        <div className="flex gap-8 mt-10 ml-6">
          <div className="text-6xl font-normal text-white">
            <BiSolidBuildingHouse />
          </div>
          <div>
            <h4 className="text-lg font-bold tracking-wide scroll-m-20">
              Design & Build
            </h4>
            <p className="leading-5 [&:not(:first-child)]:mt-2 text-xs text-justify text-white">
              We excel in design and build projects, delivering integrated
              solutions & construction execution.
            </p>
          </div>
        </div>

        {/* Foundation Work */}

        <div className="flex gap-8 mt-10 ml-6">
          <div className="text-6xl font-normal text-white">
            <MdFoundation />
          </div>
          <div>
            <h4 className="text-lg font-bold tracking-wide scroll-m-20">
              Foundation Work
            </h4>
            <p className="leading-5 [&:not(:first-child)]:mt-2 text-xs text-justify text-white">
              our construction company expertise shines through, ensuring
              strong, stable, and enduring bases for every project we undertake.
            </p>
          </div>
        </div>

        {/* Renovation */}

        <div className="flex gap-8 mt-10 ml-6">
          <div className="text-6xl font-normal text-white">
            <GiPaintBucket />
          </div>
          <div>
            <h4 className="text-lg font-bold tracking-wide scroll-m-20">
              Renovation
            </h4>
            <p className="leading-5 [&:not(:first-child)]:mt-2 text-xs text-justify text-white">
              Renovation is where our construction company craftsmanship and
              attention to detail truly transform spaces, breathing new life
              into existing structures and exceeding our clients expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
