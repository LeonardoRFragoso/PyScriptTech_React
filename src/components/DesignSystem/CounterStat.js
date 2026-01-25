import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './CounterStat.css';

const CounterStat = ({ 
  end, 
  duration = 2.5, 
  suffix = '', 
  prefix = '',
  label,
  icon,
  decimals = 0,
  className = ''
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={`counter-stat ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {icon && <div className="counter-stat__icon">{icon}</div>}
      <div className="counter-stat__number">
        {prefix}
        {inView && (
          <CountUp
            end={end}
            duration={duration}
            decimals={decimals}
            separator=","
          />
        )}
        {suffix}
      </div>
      <div className="counter-stat__label">{label}</div>
    </motion.div>
  );
};

export default CounterStat;
