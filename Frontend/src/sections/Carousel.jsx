
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaHandshake, FaLaptop,FaNetworkWired} from "react-icons/fa6";
import { TbCertificate } from "react-icons/tb";


const data=[

  {
    icon: FaHandshake,
    title:'Collaborate',
    text: 'Connecting with devs to build to build awesome products'
  },
  {
    icon:  TbCertificate,
    title:'Learn',
    text: 'To learn and improve one line of code at a time'

  },
  {
    icon: FaLaptop,
    title:'Build',
    text: 'Creating  awesome features and products for betterment'
  },
  {
    icon:  FaNetworkWired,
    title:'Connect',
    text: 'Lets connect and talk about issues on tech, anime and more'
  }
]

function Carousel() {

  let settings = {
    arrows:false,
    dots: true,
    infinite: true,
    speed: 100,
    autoplay:true,
    autoplaySpeed: 3100,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (

    <div className='w-80 h-65 md:h-80 border backdrop-blur border-gray-400 p-3 rounded-lg'>
      <Slider {...settings}>
        {
          data.map((item,index)=>{
            return(
              <div key={index} className='w-60  h-55 md:h-65 border border-gray-400  rounded-lg'>
                <div className="flex items-center gap-3 ml-5 mt-5 text-3xl font-medium text-white">
                   <item.icon />
                    <p>{item.title}</p>
                </div>

                <div className='p-6'>
                   <p className='text-pretty text-white text-xl font-medium'>{item.text}</p>
                </div>
              </div>
            )
          })
        }
      </Slider>
      </div>
  );
}

export default Carousel;