
import FrontPage from './Pages/frontPage'
import Gallery from './Pages/Gallery'
import  {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/frontpage" element={<FrontPage />} />
      <Route path ="/gallery"  element={<Gallery />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
