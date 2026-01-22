import App from "../ui/particle";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {frontend,backend, tools} from "../sections/tech_Skills";
import About_Me from "../sections/Me";
import { assets } from "../assets/assets";
import { SiWhatsapp} from "react-icons/si";
import { FaGraduationCap, FaCertificate, FaProjectDiagram} from "react-icons/fa";
import { FaBoxesStacked } from "react-icons/fa6";
import { IoMdBriefcase } from "react-icons/io";
import { education, experience, hobbies, certifications, projects } from "../about/education";




function About(){

    return(
     <div className="box-border scroll-smooth overflow-x-hidden">
       <App />
       <Navbar />
       <div className="mx-10">
       <div className="flex relative mt-30 mx-10">
          <p className="text-3xl text-transparent font-extrabold bg-clip-text bg-linear-to-r from-white to-gray-200">About</p>
       </div>
       <div className="relative flex mt-5 mx-10 md:h-90">
        <div className="flex flex-col md:flex-row md:mr-20 items-center p-5 gap-10  w-[80%] rounded-md backdrop-blur bg-stone-900/40 border border-gray-100/30">
          <img src={assets.profile_icon} className="w-40 rounded-full object-cover" />
          <About_Me />
        </div>
      </div> 
      <div className="grid grid-cols-2 relative mt-6 w-80" >
        <div className=" flex flex-row items-center justify-center text-green-300 mx-15 rounded-md w-35 h-15 gap-2 border border-gray-100/40" >
          <SiWhatsapp className="text-lg font-semibold"/>
          <span className="text-md font-semibold" >0792781047</span>
        </div>
         <div className="flex items-center justify-center  text-[#f7f0ff] mx-15 rounded-md w-33 h-15 border border-gray-100/40 gap-2">
          <a href="https://github.com/TyroneMrenje" aria-label="Github">
              <span className="text-md font-semibold ">View projects</span> 
          </a> 
        </div>
      </div>
       
       <div className="flex flex-row relative mt-10 mx-10 gap-2">
        <FaGraduationCap className="text-2xl text-green-300" />
         <span className="font-semibold text-2xl mb-5 text-[#f0f7ff]"> Education</span>
       </div>
       <div className=" h-80 w-[85%] mx-10 text-[#f0f7ff] divide-y divide-white/40 p-5 rounded-md backdrop-blur bg-stone-900/40 border border-gray-100/30">
             {
            education.map(skill =>(             
              <div className=" flex justify-between p-5 text-[f0f7ff]">
                <div className=" flex flex-col space-y-2">
                  <span className="text-xl font-bold ">{skill.sch}</span>
                  <span className="text-md font-semibold text-green-300">{skill.degree}</span>
                  <span className="text-md text-gray-300">{skill.location}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-300">{skill.start} - {skill.end}</span>
                  <span className="text-md font-semibold">{skill.gpa}</span>
                </div>    
              </div>         
            ))}
      </div>  
      <div className="flex flex-row relative mt-10 mx-10 gap-2">
          <IoMdBriefcase className="text-2xl text-green-300"/>
          <span className="font-semibold text-2xl mb-5 text-[#f7f0ff]">Experience</span>
      </div>  
    <div className=" w-[85%] mx-10 text-[#f0f7ff] divide-y divide-white/40 p-10 rounded-md backdrop-blur bg-stone-900/40 border border-gray-100/30">
  
         {
          experience.map((example, idx) => (
            <div key={idx}> 
              <div className="flex justify-between gap-4 p-5">
                <div className=" flex flex-col space-y-2">
                <span className="text-xl font-bold ">{example.org}</span>
                <span className="text-lg font-semibold text-green-300">{example.pos}</span>
                <ul>
                {example.jobs.map((job, jobIdx) => (
                  <li className="p-1">
                    <span className="text-green-300">&#9900;</span>
                    <span key={jobIdx}>{job}</span>
                  </li>
                ))}
                </ul>
              </div>
               <div className="flex flex-col text-[#f0f7ff] gap-2">
                 <p className="text-sm font-bold text-gray-300">{example.start} - {example.end}</p>
                <p className="text-md font-bold">{example.location}</p>      
              </div>
            </div>
           </div>
          ))
        }
     </div>

     <div className="flex flex-row relative mt-10 mx-10 gap-2">
        <FaCertificate className="text-2xl text-green-300"/>
        <span className="font-semibold text-2xl mb-5 text-[#f7f0ff]">Certifications</span>
      </div>  
      <div className="grid grid-cols-1 md:grid-cols-3 mx-10 w-[85%] relative gap-5">
        {  certifications.map(cert =>(
            <div className="text-[#f0f7ff] bg-stone-900/40 border border-gray-100/30 rounded-md">
             <div className="p-4 space-y-2">
              <cert.Icon className="text-2xl text-green-300"/>
              <a href={cert.link}>
                  <span>{cert.name}</span>
              </a>        
            </div>  
            </div>
          ))
        }
      </div>  
     <div className="flex flex-row relative mt-10 mx-10 gap-2">
        <FaBoxesStacked className="text-2xl text-green-300"/>
        <span className="font-semibold text-2xl mb-5 text-[#f7f0ff]">Tech Stack</span>
      </div>  
      <div className="grid grid-cols-1 md:grid-cols-3 mx-10 w-[90%] p-5 divide-x divide-white/40 relative bg-stone-900/40 border border-gray-100/30 rounded-md"> 
       <div className="mx-5">
        {
          frontend.map(front =>(
            <div className="text-[#f0f7ff] gap-2">
             <div className="flex flex-row items-center gap-2 p-2">
               <front.title  className="text-xl text-green-300 "/>
               <span className="text-xl font-bold text-gray-300">{front.tag}</span>
             </div>
            <div className="grid grid-cols-3 p-5 space-y-5"> 
              {front.icons.map(Con =>(
                <Con className="text-4xl text-green-300"/> 
              ))}  
            </div> 
            </div>            
          ))      
          }
       </div>
        <div className="mx-5">
          {
           backend.map(back =>(
            <div className="text-[#f0f7ff] gap-2">
             <div className="flex flex-row items-center gap-2 p-2">
              <back.title className="text-green-300 text-xl" />
              <span className="text-xl font-bold text-gray-300">{back.tag}</span>
             </div>
              <div className="grid grid-cols-3 p-5 space-y-5">
                {back.icons.map(Con =>(
                  <Con className="text-4xl text-green-300"/> 
                ))}
            </div>  
            </div>  
            ))      
          }
        </div>
        <div className="mx-5">
          {
            tools.map(tool =>(
              <div className="text-[#f0f7ff] gap-2">
                <div className="flex flex-row items-center gap-2 p-2"> 
                 <tool.title className="text-xl text-green-300"/>
                 <span className="text-xl font-bold text-gray-300">{tool.tag}</span>
                </div>
                <div className="grid grid-cols-3 p-5">
                  {tool.icons.map(Con =>(
                   <Con className="text-4xl text-green-300"/> 
                  ))}
                </div>               
              </div>           
            ))      
          }
        </div> 
     </div>
    
      <div className="flex flex-row relative justify-center items-center mt-10 mb-5 gap-2 p-2">
        <FaProjectDiagram className="text-green-300 text-3xl"/>
        <span className="font-bold text-3xl text-[#f0f7ff]"> Projects</span>
      </div>
       <div className="flex flex-row items-center justify-center  gap-8">   
        {
         projects.map(pro => ( 
         <div className="backdrop-blur bg-stone-900/40 border border-gray-100/30 w-80 h-90 rounded-lg">
          <div className="p-4"> 
            <img src={pro.icon} className="h-40 w-80 object-fill"/>
          </div> 
          <div className="flex flex-col text-[#f0f7ff] space-y-2 p-4">
           <span className="text-xl font-semibold">{pro.name}</span>
           <span>{pro.info}</span>
          </div>               
        </div>
       
      ))
        }
     </div>
     <div className="flex flex-row mt-20 mx-10">
      <div className=" backdrop-blur bg-stone-900/40 border border-gray-100/30 rounded-lg p-5 text-[#f7f0ff]">
      <span className="text-white text-2xl font-semibold p-4"> Hobbies and activities</span>
      <div className="grid md:grid-cols-3 grid-cols-1 grid-flow-row gap-5 p-5">
       {
         hobbies.map(hobby =>(
          <div className="flex flex-col">
          <div className="flex items-center flex-row gap-2 p-2">
            <hobby.title className="text-green-300 text-xl" />
            <span className="font-semibold text-xl">{hobby.sport}</span>
          </div>
           <span>{hobby.info}</span>
          </div>        
         ))
       }
      </div>
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