import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentState, setCurrentState] = useState('initial');
  const navigate = useNavigate();
  const location = useLocation();

  // Hide chatbot on game pages
  const isGamePage = location.pathname.startsWith('/games/');
  if (isGamePage) return null;

  const facts = [
    'IIT Tirupati was established in 2015.',
    'The institute is known for its strong focus on research and innovation.',
    'It offers programs in engineering, sciences, and humanities.',
    'The campus is spread over 500 acres.',
    'IIT Tirupati has collaborations with various international universities.'
  ];

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Ecology', path: '/ecology' },
    { name: 'Awards', path: '/awards' },
    { name: 'Metaverse', path: '/metaverse' },
    { name: 'Games', path: '/games' }
  ];

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setCurrentState('initial');
    }
  };

  const closeChatbot = () => {
    setIsOpen(false);
    setCurrentState('initial');
  };

  const navigateToPage = (path) => {
    navigate(path);
    closeChatbot();
  };

  const renderContent = () => {
    switch (currentState) {
      case 'initial':
        return (
          <>
            <p>How can I help you?</p>
            <button className="chatbot-option-button" onClick={() => setCurrentState('navigation')}>
              Help me navigate
            </button>
            <button className="chatbot-option-button" onClick={() => setCurrentState('facts')}>
              Tell me some facts
            </button>
          </>
        );
      case 'navigation':
        return (
          <>
            <p>Choose a page to explore:</p>
            {pages.map((page) => (
              <button
                key={page.path}
                className="chatbot-option-button"
                onClick={() => navigateToPage(page.path)}
              >
                {page.name}
              </button>
            ))}
            <button className="chatbot-option-button" onClick={() => setCurrentState('initial')}>
              Back
            </button>
          </>
        );
      case 'facts':
        const fact = facts[Math.floor(Math.random() * facts.length)];
        return (
          <>
            <p>{fact}</p>
            <button className="chatbot-option-button" onClick={() => setCurrentState('facts')}>
              Another fact
            </button>
            <button className="chatbot-option-button" onClick={() => setCurrentState('initial')}>
              Back
            </button>
          </>
        );
      default:
        return null;
    }
  };

  // Handle Escape key to close chatbot
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        closeChatbot();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      <button
        id="chatbot-icon"
        className="chatbot-icon"
        aria-label="Open chatbot"
        onClick={toggleChatbot}
      >
        ?
      </button>
      <div id="chatbot-container" className={`chatbot-container ${isOpen ? 'show-chatbot' : ''}`}>
        <div className="chatbot-header">
          <span>Hey! How can I help you?</span>
          <button id="close-chatbot-btn" onClick={closeChatbot}>
            X
          </button>
        </div>
        <div id="chatbot-body" className="chatbot-body">
          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default Chatbot;