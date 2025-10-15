import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Agence from "./pages/Agence"
import Projects from "./pages/Projects"

function App() {
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/agence" element={<Agence></Agence>} />
        <Route path="/projects" element={<Projects></Projects>} />
      </Routes>
    </div>
  )
}

export default App
