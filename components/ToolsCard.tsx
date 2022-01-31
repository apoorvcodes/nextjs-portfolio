import React from "react";
import tools from "../assets/tools.svg";
import Image from "next/image";
import { DiGit, DiGithubBadge } from "react-icons/di";
import { SiVisualstudiocode, SiInsomnia } from "react-icons/si";
const ToolsCard = () => {
  const tags = { start: "<Tools>", end: "</tools>" };
  return (
    <div className="container mx-auto pt-16">
      <div className="flex flex-col items-center md:flex-row  md:space-x-24 md:justify-start">
        <Image src={tools} alt=""/>
        <div className="flex flex-col justify-center">
          <div className="text-2xl text-gry font-brd pb-1">{tags.start}</div>
          <div className="text-7xl text-cream font-sora">
            {" "}
            Too<span className="text-prime">ls</span>
          </div>
          <div className="flex  text-6xl pt-2 space-x-6 ">
            <DiGit className="text-cream hover:text-prime" />
            <DiGithubBadge className="text-cream hover:text-prime" />
            <SiVisualstudiocode className="text-cream hover:text-prime" />
            <SiInsomnia className="text-cream hover:text-prime" />
          </div>
          <div className="text-2xl text-gry font-brd pb-1">{tags.end}</div>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;
