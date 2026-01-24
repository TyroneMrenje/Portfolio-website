import FrontPage from './Pages/frontPage'
import Resume from './Pages/Resume'
import About from './Pages/About'
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Suspense } from "react";
import Layout from './Pages/layout'


function App() {

  return (
    <BrowserRouter>
     <Suspense>
      <Routes>  
        <Route path="/" element={<Layout />}/>
        <Route index element={ < FrontPage />}/>
        <Route path="/contact" element={<Resume />}/>
        <Route  path="/about" element={<About />}/>
      </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default App