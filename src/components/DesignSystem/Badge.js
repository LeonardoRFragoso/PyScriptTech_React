import React from 'react';
import { motion } from 'framer-motion';
import './Badge.css';

const Badge = ({ 
  children, 
  variant = 'default',
  icon,
  className = '' 
}) => {
  return (
    <motion.span
      className={`ds-badge ds-badge--${variant} ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {icon && <span className="ds-badge__icon">{icon}</span>}
      {children}
    </motion.span>
  );
};

export default Badge;
