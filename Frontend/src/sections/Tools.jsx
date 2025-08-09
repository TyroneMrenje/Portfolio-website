
import { TbBrandVscode } from "react-icons/tb";
import { DiLinux } from "react-icons/di";
import { SiBlender, SiPostman} from "react-icons/si"

const tools=[
    <TbBrandVscode key="vscode" />,
    <DiLinux key="linux" />,
    < SiBlender key="blender"/>,
    < SiPostman key="postman" />
]


 function Tools(){
  return (
    <div className="flex flex-col relative my-10 w-full items-center justify-center ">
       <p className="text-white text-4xl font-semibold">Tools I use</p>
    <div className="flex flex-row items-center justify-center p-8 gap-10 h-40 w-200 backdrop-blur bg-gray-800/20 rounded-lg pt-10 mt-10">

    {tools.map((Tool, index) =>(
        <div
          key={index}
          className="text-7xl text-white hover:text-blue-500 transition duration-300 ease-in-out"
        >
          {Tool}
        </div>
      ))}
    </div>
  </div>
  );
}

export default Tools;


