// pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-section"
      >
        <h1>Discover the Ecological Wonders of IIT Tirupati</h1>
        <p className="hero-subtext">Exploring biodiversity, sustainability, and nature's harmony</p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
        >
          Start Exploring
        </motion.button>
      </motion.div>

      <div className="highlights-section">
  {[ 
    { id: 1, title: 'Flora & Fauna', description: 'Discover 150+ native species thriving in our ecosystem' },
    { id: 2, title: 'Mountain Views', description: 'Burns sometimes but ok' },
    { id: 3, title: 'Water Tank', description: 'Can Watch sunset and also become the sunset' }
  ].map((item) => (
    <motion.div 
      key={item.id}
      className="highlight-card"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </motion.div>
  ))}
</div>

    </div>
  );
};

export default Home;