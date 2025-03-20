// Awards.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Awards.css';
import awards from '../data/awards'; // Adjust the path based on where you store awards.js

const Awards = () => {
  const [selectedAward, setSelectedAward] = useState(null);

  return (
    <div className="awards-container">
      <h2>Recognitions & Achievements</h2>
      
      <div className="awards-list">
        {awards.map((award) => (
          <motion.div
            key={award.id}
            className="award-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ 
              x: 20,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
            }}
            onHoverStart={() => setSelectedAward(award.id)}
            onHoverEnd={() => setSelectedAward(null)}
          >
            <div className="award-content">
              <div className="award-year">{award.year}</div>
              <div className="award-main">
                <h3>{award.title}</h3>
                <p className="issuer">{award.issuer}</p>
              </div>
            </div>

            <AnimatePresence>
              {selectedAward === award.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="award-description"
                >
                  {award.description}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
