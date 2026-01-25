import React from 'react';
import { motion } from 'framer-motion';
import './TechBadge.css';

const TechBadge = ({ 
  name, 
  icon,
  variant = 'default',
  className = '' 
}) => {
  return (
    <motion.div
      className={`tech-badge tech-badge--${variant} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && <span className="tech-badge__icon">{icon}</span>}
      <span className="tech-badge__name">{name}</span>
    </motion.div>
  );
};

export default TechBadge;
