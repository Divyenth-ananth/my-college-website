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
    <h2 style={{ textAlign: 'center' }}>Milestones of IIT Tirupati</h2>
        <p className="mission-statement">
        Founded in 2015, IIT Tirupati has swiftly risen as a hub of innovation and learning. From its mentorship under IIT Madras to a thriving campus in Yerpedu, it embodies excellence. This milestone page celebrates a decade of impact and ambition. 
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
