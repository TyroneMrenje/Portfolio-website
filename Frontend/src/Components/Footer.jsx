import React from "react";
import { Link } from "react-router-dom";
import {assets} from "../assets/assets";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className=" bottom-0 w-full dark:text-white h-60 border-t border-gray-700">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 dark-text:white mt-10 ml-10">
          <div className="gap-4">
            <span className="text-xl font-semibold">Portfolio</span>
            <p className="text-lg">
              &copy; {year} Tyrone Mrenje. All rights reserved.
            </p>
          </div>
          <div className="gap-4 ml-15">
            <span className="text-xl font-semibold">Links</span>
            <div className="flex flex-col gap-2">
              <div className="transition delay-50 duration-80 ease-in hover:text-orange-300 ">
              <Link to="/about"
               className=" text-lg">
                About
                </Link>
              </div>

              <div className="transition delay-50 duration-80 ease-in hover:text-orange-300 ">
              <Link to="/resume" 
              className=" text-lg">
                Resume
                </Link>
              </div>

             <div className=" transition delay-50 duration-80 ease-in hover:text-orange-300">
              <Link to="/contact" 
              className=" text-lg">
                Contact
              </Link>
              </div>

            </div>
          </div>
          <div className="space-y-4">
            <span className="text-xl font-semibold">Connect</span>
            <div className="gap-4 flex flex-row">

               <a href="https://github.com/TyroneMrenje" aria-label="Github">
                <img src={assets.git_icon} className=" w-7 transition delay-70 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 dark:invert"/>
                </a>

                <a href="https://www.linkedin.com/in/tyrone-mrenje/" aria-label="Linkedin">
                <img src={assets.linkedin} className="w-7 invert transition delay-70 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"/>
                </a>

                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tyronemrenje1985@gmail.com" aria-label="Gmail">
                <img src={assets.gmail_icon} className="w-7 transition delay-70 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 dark:invert"/>
               </a>    
                    
            </div>
          </div>
        </div>
      </div>
 </footer>
  )
}
export default Footer;
   



