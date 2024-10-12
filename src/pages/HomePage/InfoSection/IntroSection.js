// src/pages/HomePage/IntroSection/IntroSection.js
import React from 'react';
import styles from './IntroSection.module.css'; // CSS Module
import logo from '../../../assets/img/logopyscript.png'; // Caminho correto para a logo

const IntroSection = () => {
  return (
    <section className={styles.introSection}>
      <div className={styles.introContent}>
        <h1>Bem-vindo à Pyscript.tech</h1>
        <p>Somos especialistas em desenvolvimento web, sistemas e bots para automação.</p>
        <button className={styles.ctaButton}>Saiba Mais</button>
      </div>
      <div className={styles.introImage}>
        <img 
          src={logo} 
          alt="Logo da Pyscript.tech" 
          className={styles.logoImage} 
        />
      </div>
    </section>
  );
};

export default IntroSection;
