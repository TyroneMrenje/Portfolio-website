import App from "../ui/particle";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaGithub,FaLinkedin,  } from "react-icons/fa";
import { SiGmail, SiLetterboxd } from "react-icons/si";


const Resume = () =>{

   return(
   <div className="w-full overflow-x-hidden scroll-smooth">
      <App />
      <Navbar />
      <div className="flex flex-col relative gap-2 mt-30 mx-10 p-7 bg-stone-900/40 border border-gray-100/30 backdrop-blur rounded-md">
        <div className="flex flex-col w-[40%]">
          <span className="text-3xl">Get in touch</span>
          <p className="text-balanced p-2">Hey There, Have a project in mind or you just want to read my random Letterboxd reviews. I'm always open to new opportunities and ideas.</p>
          <div className="grid grid-cols-2">
            <a href="https://github.com/TyroneMrenje" aria-label="Github">
               <FaGithub className="w-7 h-7 md:w-6 md:h-6 transition delay-70 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 "/>
            </a>
      
            <a href="https://www.linkedin.com/in/tyrone-mrenje/" aria-label="Linkedin">
              <FaLinkedin className="w-7 h-7 md:w-10 md:h-10 transition delay-70 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500"/>
            </a>
            
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tyronemrenje1985@gmail.com" aria-label="Gmail">
              <SiGmail className=" w-7 h-7 md:w-10  md:h-10 transition delay-30 duration-120 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500"/>
            </a>  

           <a href="https://letterboxd.com/mrenje/" aria-label="Letterboxd">
              <SiLetterboxd className=" w-7 h-7 md:w-10  md:h-10 transition delay-30 duration-120 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500"/>
            </a>  
          </div>
          <div>

          </div>
        </div>
        <div></div>
      </div>
      <div className="relative mt-20">
      <Footer />
      </div>
    </div>
   )

}

export default Resume;
