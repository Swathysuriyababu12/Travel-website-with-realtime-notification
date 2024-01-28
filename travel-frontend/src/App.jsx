import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Book from "./components/Book";
import Packages from "./components/Packages";
import Services from "./components/Services"
import Navbar from "./components/Navbar"
import Testimonials from "./components/Testimonials";
import About from "./components/About";
function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<About/>} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
