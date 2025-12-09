// src/pages/HomePage/ServiceSection/ServicesSection.js
import React from 'react';
import Slider from "react-slick"; // Importa o Slider
import styles from './ServicesSection.module.css';
import webdevImage from '../../../assets/img/webdev.png';
import botdevImage from '../../../assets/img/botdev.png';
import softdevImage from '../../../assets/img/Softdev.png';

const ServicesSection = () => {
  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Exibe 1 serviço por vez por padrão
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,  // Para telas maiores que 1024px
        settings: {
          slidesToShow: 2,  // Exibe 2 serviços lado a lado no desktop
          slidesToScroll: 1,
          dots: true,
          arrows: true,  // Mostra setas de navegação
        }
      },
      {
        breakpoint: 768,  // Em telas menores que 768px (mobile)
        settings: {
          slidesToShow: 1,  // Mostra 1 serviço por vez no mobile
          arrows: false,  // Remove as setas no mobile
          dots: true,  // Exibe os pontos de navegação
        }
      }
    ]
  };

  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Nossas Soluções</h2>
      <p className={styles.sectionSubtitle}>
        Tecnologia de ponta para transformar desafios em oportunidades de crescimento
      </p>
      <Slider {...settings} className={styles.servicesCarousel}>
        {/* Serviço 1 */}
        <div className={styles.serviceItem}>
          <div className={styles.serviceContent}>
            <img 
              src={webdevImage} 
              alt="Desenvolvimento Web" 
              className={styles.serviceImage} 
            />
            <div className={styles.serviceText}>
              <span className={styles.serviceNumber}>01</span>
              <h3 className={styles.serviceTitle}>Aplicações Web</h3>
              <p className={styles.serviceDescription}>
                Desenvolvemos plataformas web escaláveis e de alta performance. 
                Utilizamos React, Node.js e as tecnologias mais modernas do mercado 
                para criar experiências digitais que convertem visitantes em clientes.
              </p>
              <button className={styles.serviceButton}>
                Explorar
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Serviço 2 */}
        <div className={styles.serviceItem}>
          <div className={styles.serviceContent}>
            <img 
              src={botdevImage} 
              alt="Automação Inteligente" 
              className={styles.serviceImage} 
            />
            <div className={styles.serviceText}>
              <span className={styles.serviceNumber}>02</span>
              <h3 className={styles.serviceTitle}>Automação & Bots</h3>
              <p className={styles.serviceDescription}>
                Elimine tarefas repetitivas e reduza custos operacionais em até 70%. 
                Criamos bots inteligentes para WhatsApp, Discord, Telegram e sistemas 
                de automação que trabalham 24/7 pelo seu negócio.
              </p>
              <button className={styles.serviceButton}>
                Explorar
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Serviço 3 */}
        <div className={styles.serviceItem}>
          <div className={styles.serviceContent}>
            <img 
              src={softdevImage} 
              alt="Software Sob Medida" 
              className={styles.serviceImage} 
            />
            <div className={styles.serviceText}>
              <span className={styles.serviceNumber}>03</span>
              <h3 className={styles.serviceTitle}>Software Sob Medida</h3>
              <p className={styles.serviceDescription}>
                Sistemas personalizados que se adaptam ao seu fluxo de trabalho, 
                não o contrário. Do planejamento à entrega, desenvolvemos soluções 
                que aumentam a produtividade e geram resultados mensuráveis.
              </p>
              <button className={styles.serviceButton}>
                Explorar
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default ServicesSection;
