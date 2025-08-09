import React from "react";
import 'animate.css';
import Type from "../ui/type";
import Navbar from "../Components/Navbar";
import App from "../ui/particle";
import Profile from "../ui/profilecard";

const FrontPage = () => {
  return (
    <div className=" box-border m-0 p-0">
      <App />
      <Navbar />
      
      <div className="flex flex-row relative items-center justify-around mt-50">
          <div className="flex flex-col gap-5 justify-center relative ">
              <span className="text-white text-4xl">Hello, World</span>
              <p  className="text-white text-6xl font-bold" >
              My name is Tyrone Chama 
             </p>
            < Type />
          </div> 
            <Profile />       
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
