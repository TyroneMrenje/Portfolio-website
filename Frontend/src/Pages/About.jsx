import App from "../ui/particle";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { assets } from "../assets/assets";



function About(){
    return(
     <div className="box-border m-0 p-0">
       <App />

       <Navbar />

    <div className="flex items-center justify-center mt-60 relative">
       <div className="flex flex-col w-[80%] h-90 b rounded-md backdrop-blur bg-gray-700/30  border border-gray-900">
       <div className="">
         <img src={assets.profile_icon} className="w-20 rounded-xl"/>
       </div>
       </div>
    </div> 

    <div className="relative h-120 mt-12 w-full backdrop-blur bg-gray-700/30  border border-gray-900">
        <h3>Areas of Expertise</h3>
    </div>  
  
    <div className=" flex relative h-120 mt-12 w-[75%] backdrop-blur bg-gray-700/30  border border-gray-900">
       <span>My skillset</span>
    </div>

    </div>
     
 )
}

export default About;