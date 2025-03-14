import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Ecology from "./pages/Ecology";
import Awards from "./pages/Awards";
import ToggleSwitch from "./components/ToggleSwitch"; // Import the toggle component
import "./App.css";
import logo from "./assets/Images/Logo.svg";
import Metaverse from "./pages/Metaverse";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`} data-theme={darkMode ? "dark" : "light"}>
        <nav className="navbar">
          <div className="navbar-brand">
            <Link to="/" className="logo-link">
              <span>
                <img src={logo} alt="Allorah Logo" width="220" height="50" />
              </span>
            </Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/ecology">Ecology</Link></li>
            <li><Link to="/awards">Awards</Link></li>
            <li><Link to="/metaverse">Metaverse</Link></li>
          </ul>

          {/* Replace old button with the custom toggle */}
          <ToggleSwitch isDarkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ecology" element={<Ecology />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/metaverse" element={<Metaverse />} />
        </Routes>

        <footer className="footer">
          <p>© {new Date().getFullYear()} IIT Tirupati Ecology Initiative. Cultivating sustainability.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
