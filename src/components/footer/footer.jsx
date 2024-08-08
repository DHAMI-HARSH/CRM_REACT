import React from 'react';
import { motion } from 'framer-motion';
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="icon-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      >
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="fab fa-github"></i>
        </a>
      </motion.div>
      <motion.div
        className="copyright"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 10, delay: 0.8 }}
      >
        <p>&copy; 2024 Harsh Dhami</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
