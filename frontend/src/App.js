import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import ThreeScene from "./components/ThreeScene";  // Import the 3D page
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar">
          <h1>My College Website</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {/* Optional: Add direct link to Metaverse if you want */}
            {/* <li><Link to="/metaverse">Metaverse</Link></li> */}
          </ul>
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/metaverse" element={<ThreeScene />} />   {/* New Route for Metaverse */}
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} My College. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

