import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

const Card = ({ 
  children, 
  variant = 'default', 
  hover = true,
  className = '',
  onClick,
  ...props 
}) => {
  const cardClasses = `ds-card ds-card--${variant} ${hover ? 'ds-card--hover' : ''} ${className}`;

  return (
    <motion.div
      className={cardClasses}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`ds-card__header ${className}`}>{children}</div>
);

export const CardBody = ({ children, className = '' }) => (
  <div className={`ds-card__body ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`ds-card__footer ${className}`}>{children}</div>
);

export default Card;
