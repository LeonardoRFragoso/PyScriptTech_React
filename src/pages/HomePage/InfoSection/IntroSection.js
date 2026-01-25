// src/pages/HomePage/IntroSection/IntroSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './IntroSection.module.css';
import logo from '../../../assets/img/logopyscript.png';

const IntroSection = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/contact');
  };

  return (
    <section className={styles.introSection}>
      <div className={styles.introContent}>
        <div className={styles.badge}>
          🚀 Software House • Rio de Janeiro • +70 Projetos Entregues
        </div>
        <h1>
          Transforme Sua Ideia em um
          <span>Sistema que Gera Resultados Reais</span>
        </h1>
        <p>
          Desenvolvemos software sob medida que aumenta sua receita, reduz custos operacionais 
          e automatiza processos. De e-commerce de alta conversão a sistemas enterprise escaláveis 
          — <strong>entregamos em até 30 dias com garantia de satisfação</strong>.
        </p>
        <div className={styles.ctaWrapper}>
          <button className={styles.ctaButton} onClick={handleCTAClick}>
            Fale com um Especialista
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button className={styles.ctaSecondary} onClick={() => navigate('/projects')}>
            Ver Projetos
          </button>
        </div>
      </div>
      <div className={styles.introImage}>
        <img 
          src={logo} 
          alt="PyScript.tech - Software House" 
          className={styles.logoImage} 
        />
      </div>
    </section>
  );
};

export default IntroSection;
