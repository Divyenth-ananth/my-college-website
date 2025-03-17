// pages/Ecology.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Ecology.css';
import species from '../data/species'; // Adjust the path if needed

const Ecology = () => {
  return (
    <div className="ecology-container">
      <h2>Campus Biodiversity</h2>
      
      <div className="species-grid">
        {species.map((specie, index) => (
          <motion.div 
            key={specie.name}
            className="species-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{specie.name}</h3>
            <div className="species-info">
              <p>Habitat: {specie.habitat}</p>
              <p>Status: {specie.status}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Ecology;
