import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => setIsOpen(!isOpen);

  const NavSeparator = () => (
    <span className="text-white font-bold">|</span>
  );

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/40 z-50 border-b border-gray-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between text-green-300">
          <Link to="/" className="text-xl font-bold relative ml-5 mt-2 ">
            Tyrone Chama
          </Link>
          <div className="hidden md:flex items-center gap-4 font-bold text-xl text-white">
            <Link 
              to="/" 
              className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-150 after:origin-left hover:after:scale-x-100 hover:text-white/80"
            >
              Home
            </Link>
            <NavSeparator />
            <Link 
              to="/about" 
              className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-150 after:origin-left hover:after:scale-x-100 hover:text-white/80"
            >
              About
            </Link>
            <NavSeparator />
            <Link 
              to="/resume" 
              className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-150 after:origin-left hover:after:scale-x-100 hover:text-white/80"
            >
              Contact
            </Link>
          </div>

          <button
            onClick={toggleDropdown}
            className="md:hidden relative mr-5 mt-2 rounded-md text-white"
            aria-label="Toggle menu"
          >
            <MdOutlineMenu className="h-7 w-7" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4 w-full h-30 items-center text-xl text-white">
              <Link
                to="/"
                className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-150 after:origin-left hover:after:scale-x-100"
                onClick={toggleDropdown}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-150 after:origin-left hover:after:scale-x-100"
                onClick={toggleDropdown}
              >
                About
              </Link>
              <Link
                to="/resume"
                className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-150 after:origin-left hover:after:scale-x-100"
                onClick={toggleDropdown}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;