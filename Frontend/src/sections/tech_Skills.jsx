
import { TbBrandGolang,TbBrandVscode } from "react-icons/tb";
import { FaDatabase, FaTools } from "react-icons/fa";
import { IoStorefront } from "react-icons/io5";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiDjango,
  DiLaravel,
  DiMysql
} from "react-icons/di";
import {
  SiRedis,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiPostman, 
  SiGithub,
  SiVuedotjs,
  SiLangchain
} from "react-icons/si";

export const tools=[
  {
    title: FaTools,
    tag:"Tools",
    icons:[
      SiPostman,
      SiGithub,
      TbBrandVscode
    ]
  }
]

 export const frontend= [
    {
      title: IoStorefront,
      tag:"Frontend",
      icons:[        
      SiTypescript,
      DiJavascript1,
      DiReact,
      SiTailwindcss,
      SiNextdotjs,
      SiVuedotjs,
      ]
      
    }

 


]

export const backend= [  
  {
    title: FaDatabase,
    tag:"Backend",
    icons:[
       TbBrandGolang,
       DiPython,
       DiLaravel,
       DiNodejs,
       DiMysql,
       SiRedis,
       SiPostgresql,
       DiDjango,
       SiLangchain

    ]
  }
];






