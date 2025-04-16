import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  BiSolidMap,
  BiSolidPhone,
  BiLogoYoutube,
  BiLogoFacebook,
} from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="lg:flex lg:h-screen">
        {/* Left Side Panel  pt-12 pl-24 pr-16 */}
        <div className="max-w-full lg:w-2/3 bg-[#F5AA0E]">
          <div className="flex flex-col justify-center p-12 lg:p-36 space-y-8">
            <h2 className="scroll-m-20 pb-2 font-bold text-3xl w-3/4 text-gray-800 tracking-wider leading-10 transition-colors first:mt-0">
              Get In Touch
            </h2>
            <div className="space-y-8">
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Type your message here." />
              <div className="flex justify-end">
                <Button variant="outlinewhite">SEND MESSAGE</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right side Panel */}
        <div className="max-w-full lg:flex flex-col lg:w-1/3">
          <div className="flex justify-center text-3xl w-full p-3 lg:p-6 bg-gray-800 text-white gap-5">
            <span className="hover:text-red-600 cursor-pointer">
              <BiLogoYoutube />
            </span>
            <span className="hover:text-blue-600 cursor-pointer">
              <BiLogoFacebook />
            </span>
          </div>
          <div className="flex flex-col gap-4 lg:mt-20 p-12 lg:p-24 text-gray-500">
            <h2 className="scroll-m-20 font-bold text-3xl pb-4 text-gray-800 tracking-wider leading-10 transition-colors first:mt-0">
              Reach Us
            </h2>
            <div className="flex items-center gap-x-3 font-medium text-base tracking-wide cursor-default">
              <span>
                <BiSolidMap />
              </span>
              <p>Main Market Phase 2 Ajwa City Sahiwal</p>
            </div>
            <div className="flex items-center gap-x-3 font-medium text-base tracking-wide cursor-default">
              <span>
                <BiSolidMap />
              </span>
              <p>20 K.M. Paijan Stop, Raiwind Road Lahore.</p>
            </div>
            <div className="flex items-center gap-x-3 font-medium text-base tracking-wide cursor-default">
              <span>
                <BiSolidPhone />
              </span>
              <p>+92 323-6854958</p>
              <br />
            </div>
            <div className="flex items-center gap-x-3 font-medium text-base tracking-wide cursor-default">
              <span>
                <MdEmail />
              </span>
              <p>babafaridconstructiondevel4007@gmail.com</p>
            </div>
            <div className="flex text-4xl gap-4">
              <span className="hover:text-red-600 cursor-pointer">
                <BiLogoYoutube />
              </span>
              <span className="hover:text-blue-600 cursor-pointer">
                <BiLogoFacebook />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
