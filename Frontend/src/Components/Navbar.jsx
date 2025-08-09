import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";



const Navbar = () => {

 const [isOpen, setIsOpen] = useState(false); 
 const [selectedValue, setSelectedValue] = useState(null); 

 const toggleDropdown = () => setIsOpen(!isOpen); 

 const handleOptionClick = (value) => { 
  setSelectedValue(value); 
  setIsOpen(false); 
 }
  const NavSeparator = () => (
  <span className="text-white font-bold" >|</span>
  );

 
 

  return (
     <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/40 z-50 border-b border-gray-900 shadow-lg" >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between text-white">
          <Link to="/" className="text-2xl font-bold relative ml-5 mt-2">
            Tyrone Chama 
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center relative gap-4 font-bold text-xl text-white">
            <Link to="/" className="after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-150 after:origin-left hover:after:scale-x-100 hover:text-white/80">
              Home
            </Link>
            <NavSeparator />
            <Link to="/about" className="after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-150 after:origin-left hover:after:scale-x-100 hover:text-white/80">
              About
            </Link>
            <NavSeparator />
            <Link to="/resume" className="after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-150 after:origin-left hover:after:scale-x-100 hover:text-white/80">
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleDropdown}
            className="md:hidden sm:w-6 relative mr-5 mt-2 rounded-md text-white z-50"
            aria-label="Toggle menu"
          >
           {selectedValue ||  <img src={assets.menu_icon} alt="Menu Icon" className=" h-10" />} 
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4 w-full h-25 items-center text-xl text-white">
              <Link
                to="/"
                className=" after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-150 after:origin-left hover:after:scale-x-100"
                onClick={() => handleOptionClick('Home')}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-150 after:origin-left hover:after:scale-x-100"
                onClick={() => handleOptionClick('About')}
              >
                About
              </Link>
              <Link
                to="/resume"
                className="after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-150 after:origin-left hover:after:scale-x-100"
                onClick={() => handleOptionClick('Resume')}
              >
                Resume
              </Link>
            </div>
          </div>
        )}
         
      </div>
    </nav>

  );
};

export default Navbar;
    