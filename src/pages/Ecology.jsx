// pages/Ecology.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import taxonomy from '../data/species.jsx';
import '../styles/Ecology.css';

const Ecology = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [showSpecies, setShowSpecies] = useState(true);
  const [selectedPhylum, setSelectedPhylum] = useState('all');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState('all');
  const [selectedFamily, setSelectedFamily] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Reset filters when category changes
  useEffect(() => {
    setSelectedPhylum('all');
    setSelectedClass('all');
    setSelectedOrder('all');
    setSelectedFamily('all');
    setSelectedStatus('all');
  }, [activeCategory]);

  // Separate taxonomy data
  const faunaData = taxonomy.filter(item => item.kingdom === 'Animalia');
  const floraData = taxonomy.filter(item => item.kingdom === 'Plantae');

  const baseSpeciesList = activeCategory === 'fauna' 
    ? faunaData[0]?.children 
    : activeCategory === 'flora' 
    ? floraData[0]?.children 
    : [];

  // Get unique filter options
  const uniquePhyla = [...new Set(baseSpeciesList?.map(specie => specie.phylum))];
  const uniqueClasses = [...new Set(baseSpeciesList?.map(specie => specie.class))];
  const uniqueOrders = [...new Set(baseSpeciesList?.map(specie => specie.order))];
  const uniqueFamilies = [...new Set(baseSpeciesList?.map(specie => specie.family))]; 
  const uniqueStatuses = [...new Set(baseSpeciesList?.map(specie => specie.conservationStatus))];

  // Filtered species list
  const speciesList = baseSpeciesList?.filter(specie => {
    return (
      (selectedPhylum === 'all' || specie.phylum === selectedPhylum) &&
      (selectedClass === 'all' || specie.class === selectedClass) &&
      (selectedOrder === 'all' || specie.order === selectedOrder) &&
      (selectedFamily === 'all' || specie.family === selectedFamily) &&
      (selectedStatus === 'all' || specie.conservationStatus === selectedStatus)
    );
  
  }) || [];
  // Variants for the category card transformation.
  const cardVariants = {
    initial: {
      width: 300,
      height: 250,
      borderRadius: 20,
      backgroundColor: 'var(--glass-bg)',
      color: 'var(--dark-text)',
      padding: '2rem',
      opacity: 1
    },
    tag: {
      width: 120,
      height: 50,
      borderRadius: 30,
      backgroundColor: 'var(--primary-green)',
      color: '#fff',
      padding: '0.5rem 1rem',
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' }
    }
  };

  // Variants for species content fade transition.
  const speciesVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  // Handle closing the active tag.
  const handleClose = () => {
    // Fade out species content and tag.
    setShowSpecies(false);
    // After 500ms delay (exit transition duration), reset activeCategory to show original cards.
    setTimeout(() => {
      setActiveCategory(null);
      setShowSpecies(true);
    }, 900);
  };

  return (
    <div className="ecology-container">
      <h2 className="ecology-title">Campus Biodiversity Inventory</h2>
      
      <LayoutGroup>
        <div className="category-section">
          <AnimatePresence mode="wait">
            {activeCategory === null ? (
              // Show both category cards when nothing is selected.
              <motion.div
                key="cards"
                className="cards-wrapper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <motion.div
                  className="category-card"
                  layoutId="fauna"
                  variants={cardVariants}
                  initial="initial"
                  animate="initial"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveCategory('fauna')}
                >
                  <h3>Fauna</h3>
                  <p>Explore animal species</p>
                </motion.div>
                <motion.div
                  className="category-card"
                  layoutId="flora"
                  variants={cardVariants}
                  initial="initial"
                  animate="initial"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveCategory('flora')}
                >
                  <h3>Flora</h3>
                  <p>Explore plant species</p>
                </motion.div>
              </motion.div>
            ) : (
              // When a category is selected, show the transformed tag.
              <motion.div
                key="tag"
                className="category-tag"
                layoutId={activeCategory} // "fauna" or "flora"
                variants={cardVariants}
                initial="initial"
                animate="tag"
                exit={{ opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                onClick={handleClose}
              >
                <span>{activeCategory === 'fauna' ? 'Fauna' : 'Flora'}</span>
                <span className="close-tag">×</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </LayoutGroup>

      <AnimatePresence mode="wait">
        {activeCategory && showSpecies && (
          <motion.div
            key="species-content"
            className="species-content"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={speciesVariants}
            // Delay species container appearance until after the tag settles and exit transition completes
            transition={{ duration: 0.5, delay: 0.7, ease: 'easeInOut' }}
          >
            {/* Filter Controls */}
            <div className="filter-controls">
              <div className="filter-group">
                <label>Phylum:</label>
                <select
                  value={selectedPhylum}
                  onChange={(e) => setSelectedPhylum(e.target.value)}
                >
                  <option value="all">All Phyla</option>
                  {uniquePhyla.map(phylum => (
                    <option key={phylum} value={phylum}>{phylum}</option>
                  ))}
                </select>
              </div>
              <div className="filter-group">
                <label>Class:</label>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                >
                  <option value="all">All Classes</option>
                  {uniqueClasses.map(cls => (
                    <option key={cls} value={cls}>{cls}</option>
                  ))}
                </select>
              </div>
              

              <div className="filter-group">
                <label>Family:</label>
                <select
                  value={selectedFamily}
                  onChange={(e) => setSelectedFamily(e.target.value)}
                >
                  <option value="all">All Families</option>
                  {uniqueFamilies.map(family => (
                    <option key={family} value={family}>{family}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label>Conservation Status:</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  {uniqueStatuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>
            <motion.div className="species-list">
            {speciesList?.map(specie => (
              <motion.div

                key={specie.id}
                className="species-card"
                whileHover="hover"
                initial="rest"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="species-image-container">
                  <img
                    src={specie.image}
                    alt={specie.commonName}
                    className="species-photo"
                  />
                  
                  <h3 className="species-common">{specie.commonName}</h3>
                  <p className="species-scientific">{specie.name}</p>
                </div>
                <motion.div
                  className="species-details"
                  variants={{
                    rest: { x: "-100%", opacity: 0 },
                    hover: { x: "0%", opacity: 1 }
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                  <div className="details-content">
                    <p><strong>Scientific Name:</strong> {specie.name}</p>
                    <p><strong>Class:</strong> {specie.class}</p>
                    <p><strong>Order:</strong> {specie.order}</p>
                    <p><strong>Family:</strong> {specie.family}</p>
                    <p><strong>Habitat:</strong> {specie.habitat}</p>
                    <p><strong>Conservation Status:</strong> {specie.conservationStatus}</p>
                    <p><strong>Population:</strong> {specie.population}</p>
                    <p><strong>Diet:</strong> {specie.diet}</p>
                    <p><strong>Lifespan:</strong> {specie.lifespan}</p>
                    <p><strong>Size:</strong> {specie.size}</p>
                    <p><strong>Description:</strong> {specie.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Ecology;
