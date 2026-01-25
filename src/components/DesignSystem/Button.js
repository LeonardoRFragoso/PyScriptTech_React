import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  icon,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  ...props 
}) => {
  const buttonClasses = `ds-button ds-button--${variant} ds-button--${size} ${className}`;

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {children}
      {icon && <span className="ds-button__icon">{icon}</span>}
    </motion.button>
  );
};

export default Button;
