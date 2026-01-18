
import Typewriter from "typewriter-effect";

function Type() {
  
  return (
    <div className="relative text-2xl md:text-3xl text-[#d1d6e0]">
      <Typewriter
        options={{
          strings: [
            "Software Developer", 
            "Freelancer",
            "Network Technician",
            "A.I Researcher",
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