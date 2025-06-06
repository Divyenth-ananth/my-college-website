import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Games.css';

const Games = () => {
  const games = [
    { name: 'Game 1', file: 'game1.html' },
    { name: 'Game 2', file: 'game2.html' },
    { name: 'Game 3', file: 'game3.html' }
  ];

  const openGame = (gameFile) => {
    // Add fade-out animation before redirection
    document.querySelector(".games-container").classList.add("fade-out");
    setTimeout(() => {
      window.location.href = `/games/${gameFile}`;  // Redirect to full-screen game
    }, 800); // Delay for animation
  };

  return (
    <motion.div 
      className="games-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="games-title">Play for Fun!</h2>
      <p className="games-description">Choose a game and have fun right here on this page.</p>

      <div className="games-buttons">
        {games.map((game, index) => (
          <motion.button
            key={game.name}
            className="game-btn"
            onClick={() => openGame(game.file)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: index * 0.2, duration: 0.3 }}
          >
            {game.name}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default Games;
