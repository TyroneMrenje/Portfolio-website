import React from "react";
import 'animate.css';
import '/src/index.css';
import Particles from "../Components/particle";


const FrontPage = () => {

   
    
    return(
        <div className="p-0 m-0 box-border-0 ">
            <div
                style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
                className="dark:bg-gray-800 bg-white  "
            >
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={400}
                particleSpread={7}
                speed={0.2}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />
        </div >
        <div className="flex justify-between relative dark:text-white text-black shadow-lg cursor-pointer">
            <div className="absolute top-10 left-10 ">
                <img src="" placeholder="pic"/>
                <p className="text-lg font-bold ">Hello</p>
            </div>
            <div className="absolute right-10 top-10 flex flex-row gap-4">
                <p className="text-lg font-bold">Portfolio</p>
                <p className="text-lg font-bold">Web Developer</p>
                <p className="text-lg font-bold">Hobbies</p>
                <p className="text-lg font-bold">Gallery</p>
            </div>
         </div>
         <div className="flex justify-center absolute top-50 field-sizing-fixed w-75 h-50 animate__animated animate__fadeInLeft transition delay-1500 duration-1800  ease-in rounded-lg bg-amber-200 left-10">
            <p className="text-2xl font-bold dark:text-white text-black align-center">Welcome one and all to the amazing nigga that i am</p>

         </div>
       
   </div>
 )
}


export default FrontPage;
