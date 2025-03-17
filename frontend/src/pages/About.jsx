// pages/About.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';
import milestones from '../data/milestones'; // Adjust the path based on where you store milestones.js

const About = () => {
  return (
    <div className="about-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="about-content"
      >
        <h2>Our Ecological Mission</h2>
        <p className="mission-statement">
          Someone pls save me from here. But also, you can write some random text here.
          It's gonna be hilarious when someone sees this. 
          <br/> 
          FR tho, like, What would they think. 
        </p>
        
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <motion.div 
              key={milestone.year}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="timeline-marker" />
              <h3>{milestone.year}</h3>
              <p>{milestone.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
