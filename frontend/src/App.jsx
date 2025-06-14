import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./main/pages/Home"
import Mentorship from "./main/pages/Mentorship"
import Details from "./main/pages/Details"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mentorship" element={<Mentorship/>} />
        <Route path="/mentorship/:id" element={<Details/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
