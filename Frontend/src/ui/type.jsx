
import Typewriter from "typewriter-effect";

function Type() {
  
  return (
    <div className="relative text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-blue-300 to-gray-300">
      <Typewriter
        options={{
          strings: [
            "Software  Writer", 
            "Freelancer",
            "Network Technician",
            "Upcoming VFX Artist"
        ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
   </div> 
  );
}

export default Type;