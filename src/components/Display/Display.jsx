import './display.css';
import React from 'react';
import { motion } from 'framer-motion';

const Display = ({ formData = {} }) => {
  const { first = 'No data', second = 'No data', num = 'No data', mail = 'No data' } = formData;

  return (
    <motion.div
    id='container'
      className="container" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.div
        className="mainD"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        DISPLAY DATA
      </motion.div>
      <motion.div
        className="display"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 id='main'>Form Data:</h2>
        <p id='main'>First Name: {first}</p>
        <p id='main'>Last Name: {second}</p>
        <p id='main'>Number: {num}</p>
        <p id='main'>Email: {mail}</p>
      </motion.div>
    </motion.div>
  );
};

export default Display;

