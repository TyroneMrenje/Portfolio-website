
import React from "react";
import {TbBrandCSharp } from "react-icons/tb";
import { TbBrandGolang } from "react-icons/tb";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiDjango,
  DiPhp
} from "react-icons/di";
import {
  SiRedis,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";


const icons = [
  <TbBrandCSharp key="c#" />,
  <DiJavascript1 key="js" />,
  <TbBrandGolang key="go" />,
  <DiPython key="python" />,
  <DiPhp key="php" />,
  <DiNodejs key="node" />,
  <DiReact key="react" />,
  <SiTailwindcss key="tailwindcss" />,
  <DiMongodb key="mongo" />,
  <SiNextdotjs key="next" />,
  <SiRedis key="redis" />,
  <SiPostgresql key="postgres" />,
  <DiDjango key="django" />,
];

function Techstack() {
  return (
    <div className="flex flex-col relative w-full items-center justify-center ">
       <p className="text-white text-4xl font-semibold">My Tech Stack</p>
    <div className="grid sm:grid-cols-4 md:grid-cols-5 h-120 w-[70%] backdrop-blur bg-gray-800/20 rounded-md pt-10 mt-10 justify-items-center items-center">

    {icons.map((Icon, index) => (
        <div
          key={index}
          className="text-6xl text-white hover:text-blue-500 transition duration-300 ease-in-out"
        >
          {Icon}
        </div>
      ))}
    </div>
  </div>
  );
}

export default Techstack;
