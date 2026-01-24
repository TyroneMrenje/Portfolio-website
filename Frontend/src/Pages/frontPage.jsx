import React from "react";
import { assets } from "../assets/assets";
import Type from "../ui/type";
import Navbar from "../Components/Navbar";
import App from "../ui/particle";
import Footer from "../Components/Footer";
import { skillsCategory } from "../about/skills";
import { FaGithub,FaLinkedin, } from "react-icons/fa";
import {SiGmail } from "react-icons/si";



const FrontPage = () => {
   
  return (
    <div className=" box-border  overflow-hidden scroll-smooth">
      <App /> 
      <Navbar />   
       <div className="flex flex-col relative h-screen items-center justify-center  md:mt-10">  
          <img src={assets.profile_icon} loading="lazy" className="h-50 w-50 md:w-69 md:h-70 object-cover rounded-full" /> 
          <div className="flex flex-col p-5 mx-auto md:gap-3 text-center space-y-2">
            <span className="text-[#d1d6e0] text-2xl md:text-3xl">Build.Innovate.Learn</span>
              <h1  className="text-green-300 text-4xl md:text-6xl  font-bold tracking-tight" >
                Tyrone Chama Mrenje
             </h1>
          </div> 
          <div className="md:p-3 text-center">
             < Type />
          </div>
        </div> 
      <div className="flex relative">
          <div className=" backdrop-blur shadow-md bg-stone-900/40 rounded-xl bg-bg/50 m-3 md:ml-7  md:h-130 md:w-[95%]">
          <div className="flex justify-center py-4">
                <span className="text-[#f0f7ff] text-2xl mr-10 font-bold">About me</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:px-5 ">
              <div className="text-medium text-left text md:text-lg leading-relaxed text-[#f0f7ff] m-5 md:w-100 md:h-55  p-7 md:p-2 rounded-lg bg-stone-800"> 
                <p className="text-lg md:text-md">
                <span className="text-lg text-orange-300 font-semibold">Hello World.</span>
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
                <div className="bg-stone-800 rounded-lg p-3 m-4 md:h-40 md:w-90">
                <div className="flex items-center gap-2 hover:text-blue-300">
                  <skill.Icon className="text-xl text-green-300"/> 
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
      </div>
    <div className="flex relative flex-col justify-center text-[#f0f7ff] items-center mt-7 md:mt-15 ">
    <p className=" text-2xl md:text-4xl font-medium mb-7"> Lets connect </p>
    <div className="gap-5 flex flex-row">
      <a href="https://github.com/TyroneMrenje" aria-label="Github">
      <FaGithub className="w-7 h-7 md:w-10 md:h-10 transition delay-70 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 "/>
      </a>

      <a href="https://www.linkedin.com/in/tyrone-mrenje/" aria-label="Linkedin">
      <FaLinkedin className="w-7 h-7 md:w-10 md:h-10 transition delay-70 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500"/>
      </a>

      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tyronemrenje@gmail.com" aria-label="Gmail">
      <SiGmail className=" w-7 h-7 md:w-10  md:h-10 transition delay-30 duration-120 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500"/>
      </a>             
    </div>
    </div>
      <Footer />
     </div> 
  );
};

export default FrontPage;
