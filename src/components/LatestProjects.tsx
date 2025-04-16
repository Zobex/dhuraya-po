import React from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";

const LatestProjects = () => {
  return (
    <div className="p-14">
      <div className="flex justify-center">
        <h2 className="scroll-m-20 font-bold text-3xl lg:text-4xl pb-10 text-gray-800 tracking-wide leading-10 transition-colors first:mt-0">
          Latest Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="flex justify-center p-14">
        <Button variant="outline">LEARN MORE</Button>
      </div>
    </div>
  );
};

export default LatestProjects;
