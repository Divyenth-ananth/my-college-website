import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Ecology from "./pages/Ecology";
import Awards from "./pages/Awards";
import ToggleSwitch from "./components/ToggleSwitch";
import Chatbot from "./pages/Chatbot"; // Import the Chatbot component
import "./App.css";
import logo from "./assets/Images/Logo.svg";
import Metaverse from "./pages/Metaverse";
import Games from './pages/Games';
import GamePage from './pages/GamePage';

const Layout = ({ children }) => {
  const location = useLocation();
  const isGamePage = location.pathname.startsWith('/game/');

  return (
    <div>
      {!isGamePage && (
        <>
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
              <li><Link to="/games">Games</Link></li>
            </ul>
            <ToggleSwitch isDarkMode={children.props.darkMode} toggleDarkMode={children.props.toggleDarkMode} />
          </nav>
          <Chatbot /> {/* Add Chatbot here */}
        </>
      )}
      {children}
    </div>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`} data-theme={darkMode ? "dark" : "light"}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
              </Layout>
            }
          />
          <Route
            path="/ecology"
            element={
              <Layout>
                <Ecology darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
              </Layout>
            }
          />
          <Route
            path="/awards"
            element={
              <Layout>
                <Awards darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
              </Layout>
            }
          />
          <Route
            path="/metaverse"
            element={
              <Layout>
                <Metaverse darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
              </Layout>
            }
          />
          <Route
            path="/games"
            element={
              <Layout>
                <Games darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
              </Layout>
            }
          />
          <Route
            path="/games/:gameFile"
            element={
              <GamePage darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
            }
          />
        </Routes>
        <footer className="footer">
          <p>© {new Date().getFullYear()} IIT Tirupati Ecology Initiative. Cultivating sustainability.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;