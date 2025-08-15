import React from "react";
import { assets } from "../assets/assets";
import Type from "../ui/type";
import Navbar from "../Components/Navbar";
import App from "../ui/particle";
import Footer from "../Components/Footer";
import Carousel from "../sections/Carousel";



const FrontPage = () => {
  return (
    <div className=" box-border  overflow-x-hidden scroll-smooth">
      <App />
      <Navbar />
      
      <div className="flex flex-col relative items-center justify-center mt-30  md:mt-15 md:min-h-screen">   
        <div className="">
          <img src={assets.profile_icon} className=" h-40 w-40 md:w-50 md:h-50 object-cover rounded-full" />
        </div>
          <div className="flex flex-col gap-5 text-center">
              <span className="text-transparent bg-clip-text  bg-gradient-to-r from-blue-500 to-green-500 text-3xl mt-5 md:text-4xl">Build. Innovate .Learn</span>
              <p  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-6xl md:text-8xl font-bold p-5 " >
                Tyrone Mrenje
             </p>
          </div> 
          <div className="p-5 text-center">
             < Type />
          </div>
      </div>

      <section className="container mx-auto px-4 pt-10 md:pt-20 md:bg-gray-900/25 backdrop-blur rounded-xl my-10">
        <div className="flex flex-col md:flex-row justify-around gap-10 items-center">
          <div className="prose prose-invert max-w-none"> {/* For better text styling */}
            <p className=" text-medium  md:text-lg leading-relaxed text-white text-pretty">
              <span className="text-lg text-orange-300">Hello World</span> — (I'll never get tired of saying that 😁😁).
              <br /><br />
              My name is Tyrone. I'm a software developer who builds web systems 
              that aim to be both functional and enjoyable to use. I'm fluent in 
              Python, JavaScript, and Go, with a growing passion for AI and 
              creating agentic workflows.
              <br /><br />
              What inspired me was "fun code" — projects with no real purpose 
              but were cool in their own way. That curiosity has evolved into 
              crafting meaningful solutions. When I'm not coding, you'll find me 
              watching football, gaming, or enjoying animation.
              <br />
              (Yes. I'm cool. I know😎)
            </p>
          </div>

          <div className="md:py-0 mb-10" >
         <Carousel />
         </div>
        </div>
      </section>

     
    <div className="flex relative flex-col text-white justify-center items-center md:mt-30 space-y-8">
    <p className=" text-2xl md:text-4xl font-medium"> Lets connect </p>
    <div className="gap-6 flex flex-row">
      <a href="https://github.com/TyroneMrenje" aria-label="Github">
      <img src={assets.git_icon} className="w-7 h-7 md:w-10 md:h-10 transition delay-70 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 dark:invert"/>
      </a>

      <a href="https://www.linkedin.com/in/tyrone-mrenje/" aria-label="Linkedin">
      <img src={assets.linkedin} className="w-7 h-7 md:w-10 md:h-10 invert transition delay-70 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"/>
      </a>

      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tyronemrenje1985@gmail.com" aria-label="Gmail">
      <img src={assets.gmail_icon} className=" w-7 h-7 md:w-10  md:h-10 transition delay-70 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 dark:invert"/>
      </a>             
    </div>
    </div> 
      <Footer />

     </div> 
  );
};

export default FrontPage;
