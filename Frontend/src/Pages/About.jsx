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
     <div className="box-border">
       <App />
       <Navbar />

      <div className="flex justify-around mt-50 h-90 relative">
      <div className="flex justify-between mr-20 items-center w-[80%] rounded-md backdrop-blur bg-gray-700/30 border border-gray-900 p-4">
         <img src={assets.profile_icon} className="w-50 rounded-full object-cover" />
         <About_Me />
      </div>
      </div>
     
    <div className="relative ml-5 mt-20 py-10 w-[90%] ">
        <h1 className="text-white text-4xl font-semibold">Areas of Expertise</h1>
       <Interests />
    </div> 

    <Techstack />
    <Tools />
    <div className="relative mt-20">
      <Footer />
    </div>
   </div>
      
 )
}

export default About;