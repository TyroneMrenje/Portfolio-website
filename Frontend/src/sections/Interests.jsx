
import { FaNetworkWired, FaLaptopCode, FaCode } from "react-icons/fa";


const Interests =()=>{
  return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-5 mb-10 shadow-lg text-white backdrop-blur bg-bg/30 border border-gray-500 rounded-lg">

  <div className="bg-stone-600/80 p-4 rounded-md flex flex-col gap-3 hover:bg-stone-600 transition-colors min-h-[280px]">
    <div className="flex items-center gap-3">
      <FaCode className="text-2xl hover:text-blue-400" /> 
      <h1 className="text-2xl  font-semibold">Programming</h1>
    </div>
    <p className="text-pretty text-lg font-medium mt-2">
      I design, build, and optimize software solutions to solve real-world problems. With expertise in full-stack development, algorithms, and system design, I turn ideas into functional, scalable applications.
    </p>
  </div>

  {/* System Design Card */}
  <div className="bg-stone-800/80 p-4 rounded-md flex flex-col gap-3 hover:bg-stone-600 transition-colors min-h-[280px]">
    <div className="flex items-center gap-3">
      <FaLaptopCode className="text-2xl hover:text-blue-400" /> 
      <h1 className="text-2xl font-semibold">System Design</h1>
    </div>
    <p className="text-pretty text-lg font-medium mt-2">
      It involves defining the architecture, components, modules, interfaces, and data flow of a system to meet specific functional and non-functional requirements.
    </p>
  </div>

  {/* Network Support Card */}
  <div className="bg-stone-950/80 p-4 rounded-md flex flex-col gap-3 hover:bg-stone-800 transition-colors min-h-[280px]">
    <div className="flex items-center gap-3">
      <FaNetworkWired className="text-2xl hover:text-blue-400" /> 
      <h1 className="text-2xl font-semibold">Network Support</h1>
    </div>
    <p className="text-pretty text-lg font-medium mt-2">
      I install, maintain, troubleshoot and repair network infrastructure to ensure smooth network communication and data transfer within an organization.
    </p>
  </div>
</div>
  )
  
};

export default Interests;