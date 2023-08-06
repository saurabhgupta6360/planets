import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./components/styles/header.css";
import "./components/styles/App.css";
import "./components/styles/home.css";
import "./components/styles/footer.css";
import "./components/styles/planets.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Planets from "./components/planets/Planets";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets-about" element={<Planets />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <div className="text-center mb-11 text-3xl text-red-600/100 font-medium">
              404 Page Not Found
            </div>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
