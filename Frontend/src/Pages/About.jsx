import App from "../ui/particle";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Techstack from "../sections/tech_Skills";
import About_Me from "../sections/Me";
import Tools from "../sections/Tools";
import  Interests from "../sections/Interests";
import { assets } from "../assets/assets";



function About(){
    return(
     <div className="box-border scroll-smooth overflow-x-hidden">
       <App />
       <Navbar />
      <div className="relative flex items-center justify-center mt-50 md:h-90">
      <div className="flex flex-col md:flex-row md:mr-20 items-center p-4 gap-10  w-[80%] rounded-md backdrop-blur bg-gray-700/30 border border-gray-900">
         <img src={assets.profile_icon} className="w-50 rounded-full object-cover" />
         <About_Me />
      </div>
      </div>
     
    <div className="relative ml-5  md:mt-20 py-10 w-[90%] ">
        <h1 className="text-white text-center md:text-left text-3xl py-3 md:text-4xl font-semibold">Areas of Expertise</h1>
       <Interests />
    </div> 

    <Techstack />
    <Tools />
   
    <div className="relative md:h-140 my-10 md:my-15 ">
      <p className="text-white text-3xl md:text-4xl text-center font-semibold py-7 px-20">Featured Projects</p>
      <div className=" grid md:grid-cols-4 grid-cols-1 grid-flow-row md:h-100 px-5 gap-4">
        <div className="bg-orange-200 rounded-lg h-60 md:h-100">

        </div>

        <div className="bg-orange-400 rounded-lg h-60 md:h-100">

        </div>

        <div className="bg-orange-600 rounded-lg h-60 md:h-100">

        </div>

        <div div className="bg-orange-800 rounded-lg h-60 ">

        </div>

      </div>
    </div>
    <div className="relative w-4/5 h-90 bg-yellow-300 rounded-lg mx-10  md:mx-20">
      <p className="text-white  text-2xl md:text-4xl font-semibold py-7"> Hobbies and activities</p>
      <div className="grid md:grid-cols-3 grid-cols-1 grid-flow-row gap-3 h-60 px-10">
        <div className="bg-red-800 rounded-lg">

        </div>

        <div className="bg-red-800 rounded-lg">

        </div>
        <div className="bg-red-800 rounded-lg">

        </div>
        <div className="bg-red-800 rounded-lg">

        </div>
      </div>

    </div>
    <div className="relative mt-20">
      <Footer />
    </div> 
   </div>
      
 )
}

export default About;