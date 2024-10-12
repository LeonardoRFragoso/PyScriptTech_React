// src/pages/HomePage/ServiceSection/ServicesSection.js
import React from 'react';
import Slider from "react-slick"; // Importa o Slider
import styles from './ServicesSection.module.css';
import webdevImage from '../../../assets/img/webdev.png'; // Caminho correto
import botdevImage from '../../../assets/img/botdev.png'; // Caminho correto
import softdevImage from '../../../assets/img/Softdev.png'; // Corrigido para 'Softdev.png'

const ServicesSection = () => {
  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Nossos Serviços</h2>
      <Slider {...settings} className={styles.servicesCarousel}>
        <div className={styles.serviceItem}>
          <div className={styles.serviceContent}>
            <img src={webdevImage} alt="Desenvolvimento Web" className={styles.serviceImage} />
            <div className={styles.serviceText}>
              <h3 className={styles.serviceTitle}>Desenvolvimento Web</h3>
              <p className={styles.serviceDescription}>
                Construímos sites e aplicações web de alta qualidade. Nossa equipe utiliza as melhores práticas de desenvolvimento e design responsivo para garantir uma experiência de usuário excepcional.
              </p>
              <button className={styles.serviceButton}>Saiba Mais</button>
            </div>
          </div>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.serviceContent}>
            <img src={botdevImage} alt="Desenvolvimento de Bots" className={styles.serviceImage} />
            <div className={styles.serviceText}>
              <h3 className={styles.serviceTitle}>Desenvolvimento de Bots</h3>
              <p className={styles.serviceDescription}>
                Automatize processos com nossos bots personalizados. Nós desenvolvemos soluções que aumentam a eficiência e reduzem custos operacionais, adaptadas às necessidades específicas do seu negócio.
              </p>
              <button className={styles.serviceButton}>Saiba Mais</button>
            </div>
          </div>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.serviceContent}>
            <img src={softdevImage} alt="Desenvolvimento de Software" className={styles.serviceImage} />
            <div className={styles.serviceText}>
              <h3 className={styles.serviceTitle}>Desenvolvimento de Software</h3>
              <p className={styles.serviceDescription}>
                Soluções de software sob medida para sua empresa. Analisamos suas necessidades e criamos sistemas que otimizam seus processos e melhoram a produtividade.
              </p>
              <button className={styles.serviceButton}>Saiba Mais</button>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default ServicesSection;
