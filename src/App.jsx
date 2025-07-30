import { Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/result";
import './App.css'

function App() {

  return (
    <div className="boxApp">
      <div className="stars"></div>
      <div className="horizon-glow"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
        </Routes>
    </div>
  )
}

export default App
