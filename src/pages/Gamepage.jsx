import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const GamePage = () => {
  const { gameFile } = useParams();
  const navigate = useNavigate();

  // Ensure game URL updates properly
  const gameSrc = `/games/${gameFile}`;

  return (
    <motion.div 
      key={gameFile} // Force React to reload when gameFile changes
      className="full-screen-game"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className="exit-game-btn" onClick={() => navigate('/games')}>Exit Game</button>
      <iframe 
        key={gameFile} // Force reload of iframe
        src={gameSrc}
        title="Game Frame"
        className="full-screen-iframe"
      />
    </motion.div>
  );
};

export default GamePage;
