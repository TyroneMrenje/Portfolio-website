
import Typewriter from "typewriter-effect";

function Type() {
  
  return (
    <div className="relative text-white text-4xl">
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