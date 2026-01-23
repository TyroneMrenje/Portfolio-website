import App from "../ui/particle";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import Footer from "../Components/Footer";
import { FaGithub,FaLinkedin,  } from "react-icons/fa";
import { SiGmail, SiLetterboxd } from "react-icons/si";
import { IoMdSend } from "react-icons/io";


const Resume = () =>{

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] =useState(false);
  const  [status, setStatus] =useState(null);

  const handleChange = (e) => {
    const {name, value} =e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!formData.email || !formData.name || !formData.message ){
      setStatus("error");
      return;
    }
    setLoading(true);
    setStatus(null);
    

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
       
      if(!response.ok){
        throw new Error("Failed to send a message")
      }
      setStatus("Success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
       setStatus("error");
    } finally {
      setLoading(false);
    }
  };

   return(
   <div className="w-full overflow-x-hidden scroll-smooth">
      <App />
      <Navbar />
      <div className="flex flex-col md:flex-row justify-around relative gap-2 mt-25 md:mx-10 p-5">
        <div className="flex flex-col items-center md:justify-normal justify-center mb-5  md:w-[40%] space-y-2">
          <span className="text-3xl text-[#f7f0ff] font-bold">Get in Touch</span>
          <p className="text-pretty text-lg text-[#f0f7ff] p-2">Hey There &#128075;, Have a project in mind or you just want to read my random Letterboxd reviews. I'm always open to new opportunities and ideas.</p>
          <div className="flex flex-row gap-4 ">
            <a href="https://github.com/TyroneMrenje" aria-label="Github">
               <FaGithub className="w-7 h-7 text-green-300 transition delay-70 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 "/>
            </a>
      
            <a href="https://www.linkedin.com/in/tyrone-mrenje/" aria-label="Linkedin">
              <FaLinkedin className="w-7 h-7 text-green-300 transition delay-70 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500"/>
            </a>
            
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tyronemrenje@gmail.com" aria-label="Gmail">
              <SiGmail className=" w-7 h-7 text-green-300 transition delay-30 duration-120 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500"/>
            </a>  

           <a href="https://letterboxd.com/mrenje/" aria-label="Letterboxd">
              <SiLetterboxd className=" w-7 h-7 text-green-300 transition delay-30 duration-120 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500"/>
            </a>  
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col items-center border border-gray-100/10 text-[#ffffff] md:w-[55%] rounded-md backdrop-blur bg-stone-900/40  p-5 space-y-2">
          {status==="Success" && (
             <p className="text-green-400 text-sm"> Message sent successfully</p> )
          }

          {status==="error" && (
             <p className="text-red-400 text-sm"> Message not sent successfully</p> )
          }
        
           <div className="flex flex-col md:flex-row justify-between  w-[88%]">
             <input type="text" name="name" id="name" onChange={handleChange} value={formData.name}  placeholder="Enter name" className="text-left p-2  rounded-md border border-gray-100/10 bg-stone-700/40" />
             <input type="email" id="email" name="email" onChange={handleChange} value={formData.email}  placeholder="Enter email" className=" text-left mt-4 md:mt-0 p-3 rounded-md border border-gray-100/10 bg-stone-700/40" />
           </div>
           <input placeholder="Re: Subject" name="subject" onChange={handleChange} value={formData.subject}  className=" mt-4 text-left p-2 rounded-md w-[88%] border border-gray-100/10 bg-stone-700/40"/>
           <textarea  onChange={handleChange} name="message" value={formData.message} className="w-[88%] mt-4 min-h-[120px] p-3 rounded-md border border-gray-300 bg-stone-700/40"
            placeholder="Write your message...">
           </textarea>
           <button type="submit" disabled={loading} className=" flex flex-row items-center justify-center gap-2 mt-4 p-2 w-[88%]  bg-green-300 border border-gray-100/10 rounded-md">
            <span className="text-blue-900  text-lg font-bold"> {loading ? "Sending...": "Send message"}</span>
            <IoMdSend className="text-lg text-blue-900 font-bold"/>
           </button>
        </form>      
      </div>
      <Footer />
    </div>
   )

}

export default Resume;
