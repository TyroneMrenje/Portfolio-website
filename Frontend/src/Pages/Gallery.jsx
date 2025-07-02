import Type from "../Components/type"
import Particles from "../Components/particle"


const Gallery = () =>{
    
    return(
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
           <div className="absolute right-10 top-40  flex flex-row  dark:text-white text-3xl font-bold">
                < Type />
            </div>
            
        </div>
        
    )
}
export default Gallery