import FrontPage from './Pages/frontPage'
import Resume from './Pages/Resume'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/footer" element={<Footer />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/" element={<FrontPage />} />
        <Route path="/resume" element={<Resume />} />
        <Route  path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App