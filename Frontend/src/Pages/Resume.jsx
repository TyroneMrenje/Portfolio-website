import React, {useState, useEffect} from "react";
import App from "../ui/particle";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import pdf from "../assets/Tyrone's_CV.pdf";
import { Page, Document, pdfjs} from 'react-pdf';
import { assets } from "../assets/assets";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();



const Resume = () =>{
   
 const [width, setWidth] = useState(1200);

const [pageNumber, setPageNumber] = useState(1);


  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
  
    setPageNumber(pageNumber);
  };

  
  

   return(
   <div className="w-full overflow-x-hidden scroll-smooth">
      <App />
      <Navbar />
      <div className=" relative flex justify-center transition delay-50 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 mt-30 mr-10">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg--700 font-medium py-2 px-4 rounded flex"
        >
          <img src={assets.download_button} />
          <span>Download CV</span>
        </a>
      </div>
       <div className="flex relative mt-10 justify-center">
         <Document
         file={pdf} 
         onLoadSuccess={onDocumentLoadSuccess}
         >
         <Page pageNumber={pageNumber} scale={width > 767 ? 1.5 : 0.55} />
         </Document>
      </div>

      <div className="relative flex justify-center transition delay-50 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 mt-10 mr-10">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg--700 font-medium py-2 px-4 rounded flex"
        >
          <img src={assets.download_button}/>
          Download CV
        </a>
      </div>
      <div className="relative mt-20">
      <Footer />
      </div>
    </div>
   )

}

export default Resume;
