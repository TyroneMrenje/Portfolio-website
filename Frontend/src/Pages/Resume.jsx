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
 const [numPages, setNumPages] = useState();
const [pageNumber, setPageNumber] = useState(1);


  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(pageNumber);
  };

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    changePage(-1)
  }

  function changePageNext(){
    changePage(+1)
  }

  

   return(
   <div className="w-full relative snap-center overflow-x-hidden scroll-smooth">
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
       <div className="flex relative left-20 mt-10 justify-center">
         <Document
         file={pdf} 
         onLoadSuccess={onDocumentLoadSuccess}
         >
         <Page pageNumber={pageNumber} scale={width > 786 ? 1.4 : 0.4} />
         </Document>
         <div className="flex flex-col jusitfy-center items-center h-50 relative left-10">
         <p className="text-white text-lg mt-2 font-semibold">Page {pageNumber} of {numPages}</p>
          {pageNumber > 1 && (
          <button onClick={changePageBack} className="h-10 w-35 mt-5 bg-white font-semibold text-gray-800 hover:bg-indigo-600 hover:text-white hover:cursor-pointer rounded">
            Previous Page
          </button>
        )}

        {pageNumber < numPages && (
          <button onClick={changePageNext} className="h-10 w-35 mt-5 bg-white font-semibold text-gray-800 hover:bg-indigo-600 hover:text-white hover:cursor-pointer rounded">
            Next Page
          </button>
        )}
        </div>
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
      <div className="relative mt-10">
      <Footer />
      </div>
    </div>
   )

}

export default Resume;
