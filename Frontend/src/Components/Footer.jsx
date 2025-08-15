import React from "react";
import { Link } from "react-router-dom";
import {assets} from "../assets/assets";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
   <footer className="relative mt-20 bottom-0 w-full dark:text-white border-t border-gray-700">
  <div className="container px-4 py-10">
    {/* Flex container - stacks on mobile, row on desktop */}
    <div className="flex flex-col md:flex-row justify-between gap-8">
      
      {/* Portfolio Section */}
      <div className="flex-1 max-w-md">
        <span className="text-xl font-semibold block mb-2">Portfolio</span>
        <p className="text-lg">
          &copy; {year} Tyrone Mrenje. All rights reserved.
        </p>
      </div>

      {/* Links Section */}
      <div className="flex-1 md:ml-10">
        <span className="text-xl font-semibold block mb-2">Links</span>
        <div className="flex flex-col gap-2">
           <Link 
            to="/" 
            className="text-lg transition duration-300 hover:text-orange-300"
          >
            Home
          </Link>
          
          <Link 
            to="/about"
            className="text-lg transition duration-300 hover:text-orange-300"
          >
            About
          </Link>
          <Link 
            to="/resume" 
            className="text-lg transition duration-300 hover:text-orange-300"
          >
            Resume
          </Link>
         
        </div>
      </div>


      <div className="flex-1">
        <span className="text-xl font-semibold block mb-2">Connect</span>
        <div className="flex gap-4">
          <a href="https://github.com/TyroneMrenje" aria-label="Github">
            <img 
              src={assets.git_icon} 
              className="w-7 transition duration-300 hover:-translate-y-1 hover:scale-110 dark:invert"
              alt="GitHub"
            />
          </a>
          <a href="https://www.linkedin.com/in/tyrone-mrenje/" aria-label="Linkedin">
            <img 
              src={assets.linkedin} 
              className="w-7 invert transition duration-300 hover:-translate-y-1 hover:scale-110"
              alt="LinkedIn"
            />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tyronemrenje1985@gmail.com" aria-label="Gmail">
            <img 
              src={assets.gmail_icon} 
              className="w-7 transition duration-300 hover:-translate-y-1 hover:scale-110 dark:invert"
              alt="Email"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
)}
export default Footer;
   



