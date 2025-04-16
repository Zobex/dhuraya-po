import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const ProjectCard = () => {
  return (
    <div className="">
      <div>
        <Image
          src={"/assets/bg-detail.jpg"}
          alt="projectImg"
          width={500}
          height={700}
        />
      </div>
      <div className="mt-4 border p-6 border-gray-300 flex flex-col space-y-4">
        <h4 className="scroll-m-20 text-base lg:text-lg font-semibold tracking-wide">
          Project Title
        </h4>
        <p className=" text-xs text-justify lg:text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas laborum
          asperiores maiores recusandae voluptate qui quasi perspiciatis ipsam
          eos mollitia.
        </p>
        <div>
          <Button variant="smoutline">VIEW PROJECT</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
