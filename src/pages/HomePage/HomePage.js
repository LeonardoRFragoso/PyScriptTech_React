// src/pages/HomePage/HomePage.js
import React from 'react';
import IntroSection from './InfoSection/IntroSection'; // Importa a seção de introdução
import ServicesSection from './ServiceSection/ServicesSection'; // Importa a seção de serviços
import TestimonialsSection from './TestimonialsSection/TestimonialsSection'; // Importa a seção de depoimentos
import ContactSection from './ContactSection/ContactSection'; // Importa a seção de contato
import '../../assets/styles/responsive.css'; // Importação do arquivo responsivo

const HomePage = () => {
  return (
    <div className="homepage-container"> {/* Adicione uma classe para estilização geral, se necessário */}
      <IntroSection /> {/* Seção de introdução */}
      <ServicesSection /> {/* Seção de serviços */}
      <TestimonialsSection /> {/* Seção de depoimentos */}
      <ContactSection /> {/* Seção de contato */}
    </div>
  );
};

export default HomePage;
