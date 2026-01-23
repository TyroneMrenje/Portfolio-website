import { SiUdemy, SiCisco } from "react-icons/si";
import Icon from "../about/dorcasamimo.png";
import lighticon from "../about/image.png"
import { FaBookOpenReader } from "react-icons/fa6";
import { MdEvent, MdSportsGymnastics } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";
import { SiLetterboxd } from "react-icons/si";

export const education = [
    {
        
        start:"September 2021",
        end: "April 2025",
        degree:"Bachelor of Science, Computer Science",
        gpa:"Second Upper Class Honours",
        sch:"Chuka University",
        location:"Tharaka Nithi, Kenya",
        
    },

    { 
        start:"2017",
        end:"2020",
        degree:"Kenya Certificate of Seondary Education",
        sch: "Nyambaria High School",
        gpa:"B+, 67points",
        location:"Nyamira, Kenya"


    }
]


const year = new Date().getFullYear();

export const experience =[

    {
        org:"Upwork",
        pos:"Freelancer",
        start:year,
        end:"present",
        location:"Kwale, Kenya",
        jobs:[
            "I partner with local businesses and people in order to transform their ideas into digital solutions",
            "Scouting potential customers at Upwork and on the ground in order to grow my network",
            "Optimizing websites for performance, SEO, and user experience",
            "Providing ongoing support and maintenance for client projects",
        ]
    },
    {
        org:"SwahilipotHub Foundation",
        pos:"Intern",
        start:"May 2024",
        end:"August 2024",
        location:"Mombasa, Kenya",
        jobs:[
            "I was tutored on various frameworks and tools such as Django,Next Js,Git for web development",
            "Learnt to collaborate with developers in designing and building websites",
            "Supported the development of Swahilipot Hub website in a team of peers",
            "Got the chance to attend exhibitions , speaker meet-ups and events hosted by the community"
        ]
        
    }
]

export const certifications = [
    {
        Icon: SiUdemy,
        link:"https://www.udemy.com/certificate/UC-460c7d8c-1d92-486d-9b35-b4873a93c7b5/",
        name:"Learn React and Next Js in No Time"
    },

    {
        Icon: SiCisco,
        link:"https://www.credly.com/badges/3824df72-2d85-4f91-b49b-f27cf4ab3afd",
        name:"Cisco Network Devices and Initial Configuration"
    },

    {
        Icon: SiCisco,
        link:"https://www.credly.com/badges/9727e77f-8241-415e-bbb8-f12f2440dc76",
        name:"Cisco Networking Basics"

    }
]


export const hobbies = [
    {
        title:FaBookOpenReader,
        sport:"Reading",
        info:"Learnt a lot throughout the years"

    },

    {
        title:MdEvent,
        sport:"Attending expos",
        info:"Pulling up on local exhibitions and networking"

    },

    {
        title:IoMdFootball,
        sport:"Football",
        info:"For the love of the game"
    },

    {
        title:MdSportsGymnastics,
        sport:"Gym",
        info:"Passionate about keeping in shape"
    },
    {
        title:SiLetterboxd,
        sport:"Cinemas",
        info: "I judge your favorite movies on Letterboxd"
    }
]

export const projects = [
    {  
        icon: lighticon,
        name:"Portfolio",
        info:"A comprehensive web app detailing what i do and how i do it."
    },
    {
        icon:Icon,
        name:" Amimo Spices",
        info:"An e-commerce web app for purchasing spices both whole and ground"

    },
    
]

