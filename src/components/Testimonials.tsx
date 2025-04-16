import React from "react";
import { Button } from "./ui/button";
import ClientCard from "./ClientCard";
import Image from "next/image";

const Testimonials = () => {
  return (
    <>
      <div className="p-14 lg:h-screen">
        <div className="flex justify-center">
          <h2 className="scroll-m-20 font-bold text-3xl lg:text-4xl pb-10 text-gray-800 tracking-wide leading-10 transition-colors first:mt-0">
            Client Testimonials
          </h2>
        </div>
        <div className="lg:flex justify-center gap-8">
          <ClientCard />
          <ClientCard />
          <ClientCard />
        </div>
        <div className="flex justify-center p-14 gap-28">
          <Image
            src="/assets/ajwalogo.png"
            width={100}
            height={100}
            alt="logo"
          />
          <Image
            src="/assets/ajwalogo.png"
            width={100}
            height={100}
            alt="logo"
          />
          <Image
            src="/assets/ajwalogo.png"
            width={100}
            height={100}
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
