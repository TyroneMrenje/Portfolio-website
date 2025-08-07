import React from "react";
import 'animate.css';
import Type from "../ui/type";
import Navbar from "../Components/Navbar";
import App from "../ui/particle";
import Profile from "../ui/profilecard";

const FrontPage = () => {
  return (
    <div className=" box-border relative min-h-screen w-full bg-white dark:bg-gray-800 m-0">
      <App />
        <Navbar />
          <div className="flex flex-row justify-between relative top-40 left-15 w-300 center" >
            <div className="flex flex-col gap-5 justify-center relative bottom-15 ">
                <span className="text-white text-4xl">Hello, World</span>
                <p  className="text-white text-6xl font-bold" >
                My name is Tyrone Chama 
                </p>
            <div className="text-[2.0rem] text-white">
              < Type />
             </div>
            </div> 
            <div className="relative right-10 botto-20"> 
              <Profile />
            </div>
         </div>
         
         <div className=" flex relative top-90 h-120 left-15 w-[90%] items-center justify-around ]">
          <div className="h-80 w-80 bg-red-100 rounded-lg z-50">

          </div>

           <div className="h-80 w-80 bg-blue-100 rounded-lg">

          </div>

           <div className="h-80 w-80 bg-green-100 rounded-lg">

          </div>

         </div>
       
     </div> 
  );
};

export default FrontPage;
