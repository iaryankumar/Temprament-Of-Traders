import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Footer from './Component/Footer'
import PNF from './Pages/PNF'
import Mentor from './Pages/Mentor'
import Playlist from './Pages/Playlist'

function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar />
        <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/mentorship' element={<Mentor />} />
              <Route path='/playlist' element={<Playlist />} />
              <Route path='/*' element={<PNF />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
