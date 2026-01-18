import { SiUdemy, SiCisco } from "react-icons/si";

export const Education = [
    {
        tag:"Education",
        start:"September 2021",
        end: "April 2025",
        degree:"Bachelor of Science, Computer Science",
        gpa:"Second Upper Class",
        uni:"Chuka University",
        location:"Tharaka Nithi, Kenya",
        thesis:"The Ethics Of Artificial Intelligence.",
        highsch: "Nyambaria High School",
        grade:"B+, 67points",
        location2:"Nyamira"

    },
]


const year = new Date().getFullYear();

export const Experience =[
    {
        org:"Upwork",
        pos:"Freelancer",
        start:year,
        jobs:[
            "I partner with local businesses and people in order to transform their ideas into digital solutions"
        ]
    },
    {
        org:"SwahilipotHub Foundation",
        pos:"Intern",
        start:"May 2024",
        end:"August 2024",
        jobs:[
            
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
    }
]


