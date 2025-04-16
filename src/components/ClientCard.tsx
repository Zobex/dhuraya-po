import React from "react";
import { Button } from "./ui/button";
import { AiFillStar } from "react-icons/ai";

const ClientCard = () => {
  return (
    <div className="space-y-4">
      <div className="bg-gray-100 w-72 h-78 p-8 space-y-5">
        <div className="flex justify-center text-lg text-yellow-400 gap-1">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          nisi ullam quam laboriosam molestiae, unde nemo a optio ducimus
          officia nulla?
        </p>
        <h4 className="scroll-m-20 text-xs font-semibold tracking-widest flex justify-center">
          JHON SMITH
        </h4>
      </div>
      <div className="grid items-center lg:flex justify-center">
        <Button variant="smoutline">VIEW PROJECT</Button>
      </div>
    </div>
  );
};

export default ClientCard;
