import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Ecology from "./pages/Ecology";
import Awards from "./pages/Awards";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`} data-theme={darkMode ? "dark" : "light"}>
        <nav className="navbar">
          <div className="navbar-brand">
            <Link to="/" className="logo-link">
              <span className="allorah-logo">ALLORAH</span>
            </Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/ecology">Ecology</Link></li>
            <li><Link to="/awards">Awards</Link></li>
          </ul>
          <button 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ecology" element={<Ecology />} />
          <Route path="/awards" element={<Awards />} />
        </Routes>

        <footer className="footer">
          <p>© {new Date().getFullYear()} IIT Tirupati Ecology Initiative. Cultivating sustainability.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;