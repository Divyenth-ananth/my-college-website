import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion for animations
import "../styles/metaverse.css"; // Import styles

const Metaverse = () => {
  const navigate = useNavigate();

  const enterMetaverse = () => {
    // Open the 3D Metaverse with a fade-out effect
    document.querySelector(".metaverse-container").classList.add("fade-out");
    setTimeout(() => {
      window.open("/metaverse/index.html", "_blank");
    }, 800); // Delay to match animation
  };

  return (
    <motion.div
      className="metaverse-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <h1>Welcome to the Metaverse</h1>
      <p>
        Explore our interactive 3D environment designed to showcase our vision of sustainability and technology.
      </p>
      <motion.button 
        className="enter-button"
        onClick={enterMetaverse}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Enter Metaverse
      </motion.button>
    </motion.div>
  );
};

export default Metaverse;

