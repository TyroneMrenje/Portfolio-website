import React from "react";
import { assets } from "../assets/assets";
import Type from "../ui/type";
import Navbar from "../Components/Navbar";
import App from "../ui/particle";
import Footer from "../Components/Footer";
import { skillsCategory } from "../Components/skills";
import { FaGithub,FaLinkedin, } from "react-icons/fa";
import {SiGmail } from "react-icons/si";



const FrontPage = () => {
  return (
    <div className=" box-border  overflow-x-hidden scroll-smooth">
      <App />
      <Navbar />
      
      <div className="flex flex-col relative items-center justify-center mt-25  md:mt-10 md:min-h-screen ">       
          <img src={assets.profile_icon} className=" h-50 w-50 md:w-69 md:h-70 object-cover rounded-full" />
       
          <div className="flex flex-col gap-3 text-center">
              <span className="text-[#d1d6e0] text-3xl mt-5 md:text-3xl">Build. Innovate .Learn</span>
              <p  className="text-[#d1d6e0] text-3xl md:text-6xl font-bold p-5 " >
                Tyrone Chama Mrenje
             </p>
          </div> 
          <div className="p-3 text-center">
             < Type />
          </div>
      </div>
      <div className="px-2 pt-10 md:pt-7 backdrop-blur  shadow-md bg-linear-to-r from-stone-950 to-stone-850 rounded-xl bg-bg/50 ml-7 h-130 w-[95%]">
       <div className="flex justify-center mb-10">
            <span className="text-[#f0f7ff] text-2xl mr-10 font-bold">About me</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between px-5 ">
          <div className="text-medium text-left text md:text-lg leading-relaxed text-[#f0f7ff] w-100 h-55  p-7 mt-6 rounded-lg bg-stone-800"> 
            <p>
              <span className="text-lg text-orange-300">Hello World.</span>
              <br />
              My name is Tyrone Mrenje.I am a fullstack software developer.
              I specialize in system design, web development and ui/ux design.I leverage this skillset
              to translate user needs into solutions. 
              <br />    
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-2 text-[#f0f7ff] ">
            {
              skillsCategory.map(skill =>(
              <div className="bg-stone-800 rounded-lg p-3 h-40 w-90">
              <div className="flex items-center gap-2">
                <skill.Icon className="text-xl hover:text-blue-400" /> 
                <h1 className="text-xl font-semibold">{skill.name}</h1>
              </div>
              <div className="flex flex-wrap gap-3 mt-4 ">
                {skill.skills.map(skills =>(
                  <p className="font-bold">{skills}</p>
                ))}
              </div>
              </div>
              ))
            }         
          </div>
        </div>
      </div>  
    <div className="flex relative flex-col justify-center text-[#f0f7ff] items-center md:mt-15 ">
    <p className=" text-2xl md:text-4xl font-medium mb-10"> Lets connect </p>
    <div className="gap-5 flex flex-row">
      <a href="https://github.com/TyroneMrenje" aria-label="Github">
      <FaGithub className="w-7 h-7 md:w-10 md:h-10 transition delay-70 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 dark:invert"/>
      </a>

      <a href="https://www.linkedin.com/in/tyrone-mrenje/" aria-label="Linkedin">
      <FaLinkedin className="w-7 h-7 md:w-10 md:h-10 dark:invert transition delay-70 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"/>
      </a>

      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tyronemrenje1985@gmail.com" aria-label="Gmail">
      <SiGmail className=" w-7 h-7 md:w-10  md:h-10 transition delay-70 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 dark:invert"/>
      </a>             
    </div>
    </div> 
      <Footer />

     </div> 
  );
};

export default FrontPage;
