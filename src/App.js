import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Features from "./pages/Features";
import Careers from "./pages/Careers";
import Company from "./pages/Company";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/company" element={<Company />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
