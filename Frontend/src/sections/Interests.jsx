
import { FaNetworkWired, FaLaptopCode, FaCode } from "react-icons/fa";


const Interests =()=>{
  return(
    <div className=" h-140 grid grid-cols-2 gap-6 items-center justify-items-center pt-5 mb-10 shadow-lg text-white backdrop-blur bg-bg/30 border border-gray-500 rounded-lg">

    <div className="bg-stone-600/80 p-2 rounded-md w-140 min-w-[200px] h-50 flex flex-col gap-3 hover:bg-stone-600 transition-colors">
      <div className="flex items-center gap-3 text-3xl font-semibold text-white">
        <FaCode className="hover:text-blue-400 hover:-pointer" /> 
        <h1>Programming</h1>
      </div>
      <p className="text-pretty mt-5 ml-10 text-lg font-normal">I design, build, and optimize software solutions to solve real-world problems. With expertise in full-stack development, algorithms, and system design, I turn ideas into functional, scalable applications.</p>
    </div>

    <div className="bg-stone-800/80 p-2 rounded-md w-140 min-w-[200px] h-50 flex flex-col gap-3 hover:bg-stone-600 transition-colors">
      <div className="flex flaex-start gap-3 text-3xl font-semibold text-white">
        <FaLaptopCode className="hover:text-blue-400 hover:-pointer" /> 
        <h1>System Design</h1>
      </div>
      <p className="text-pretty mt-5 ml-10 text-lg font-normal">It involves defining the architecture, components, modules, interfaces, and data flow of a system to meet specific  functional and non-functional requirements
  
      </p>
    </div>

     <div className="bg-stone-950/80 p-2 rounded-md w-140 min-w-[200px] h-50 flex flex-col gap-3 hover:bg-stone-800 transition-colors">
      <div className="flex flex-start items-center gap-3 text-3xl font-semibold text-white">
        <FaNetworkWired className="hover:text-blue-400 hover:-pointer " /> 
        <h1>Network support</h1>
      </div>
      <p className="text-pretty mt-5 ml-10 text-lg font-normal"> I install, maintain,troubleshoot and repair network infrastructure to ensure smooth network communication and data transfer within an organization</p>
      
    </div>
  </div>
  )
  
};

export default Interests;