import React from "react";
import { Button } from "@/components/ui/button";

const Features = () => {
  return (
    <div className="lg:flex lg:h-screen">
      {/* Left side Panel */}
      <div className="max-w-full py-40 object-cover lg:w-2/5 lg:p-12 flex flex-col items-baseline bg-detail-image bg-cover"></div>

      {/* Right Side Panel  */}
      <div className="max-w-full lg:w-3/5">
        <div className="p-12 lg:pt-12 lg:px-24 flex flex-col">
          <h2 className="scroll-m-20 pb-2 font-bold text-3xl lg:text-4xl w-full lg:w-3/4 text-gray-800 tracking-wide leading-10 transition-colors first:mt-4">
            We Value Your Trust & Build Your Dream Since 2014
          </h2>
          <div className="flex-row lg:flex gap-8 mt-6 lg:mt-16">
            <div>
              <p className="leading-7 [&:not(:first-child)]:mt-2 mb-6 text-gray-700 font-normal text-justify tracking-wide">
                We deliver value over mony and make trusted clients.We Value
                Your Trust & Build Your Dreams. We deliver value over mony and
                make trusted clients.We Value Your Trust & Build Your Dreams.
              </p>
            </div>
            <div>
              <p className="leading-7 [&:not(:first-child)]:mt-2 mb-6 text-gray-700 font-normal text-justify tracking-wide">
                We deliver value over mony and make trusted clients.We Value
                Your Trust & Build Your Dreams. We deliver value over mony and
                make trusted clients.We Value Your Trust & Build Your Dreams.
              </p>
              <Button variant="outline">LEARN MORE</Button>
            </div>
          </div>
        </div>
        <div className="flex lg:mt-[115px]">
          <div className="flex flex-col justify-center items-center bg-[#F5AA0E] text-gray-800 p-5 flex-auto">
            <h2 className="scroll-m-20 pb-2 font-bold text-3xl tracking-wide leading-10 transition-colors first:mt-0">
              09
            </h2>
            <h3 className="scroll-m-20 font-medium text-xs tracking-wide leading-6 transition-colors first:mt-0">
              YEARS ESTABLISHED
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center bg-black text-gray-300 p-5 flex-auto">
            <h2 className="scroll-m-20 pb-2 font-bold text-3xl tracking-wider leading-10 transition-colors first:mt-0">
              175+
            </h2>
            <h3 className="scroll-m-20 font-font-medium text-xs tracking-wider leading-6 transition-colors first:mt-0">
              PROJECTS
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
