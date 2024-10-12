// src/pages/Services/ServicesPage.js
import React from 'react';
import '../../assets/styles/responsive.css'; // Importação do arquivo responsivo
import './ServicesPage.css'; // Importação do arquivo de estilo local

// Importação das imagens utilizadas na seção de serviços
import serviceImage1 from '../../assets/img/Softdev.png';
import serviceImage2 from '../../assets/img/webdev.png';
import serviceImage3 from '../../assets/img/botdev.png';

const servicesData = [
  {
    title: "Desenvolvimento de Software",
    description:
      "Nós oferecemos soluções de software sob medida para atender às necessidades da sua empresa. Nossa equipe altamente qualificada trabalha em conjunto com você para analisar seus requisitos e entregar sistemas que otimizam seus processos e aumentam a produtividade.",
    image: serviceImage1,
    link: "/contact", // Link para página de contato ou detalhes
    buttonLabel: "Saiba Mais",
  },
  {
    title: "Desenvolvimento Web",
    description:
      "Construímos sites e aplicações web modernas, rápidas e com design responsivo. Utilizamos as melhores práticas de desenvolvimento para garantir uma experiência de usuário impecável e uma forte presença online.",
    image: serviceImage2,
    link: "/contact", // Link para página de contato ou detalhes
    buttonLabel: "Saiba Mais",
  },
  {
    title: "Automatização de Processos",
    description:
      "Oferecemos soluções de automação de processos que ajudam a otimizar tarefas repetitivas e aumentar a eficiência do seu negócio. Integramos sistemas e ferramentas para facilitar o fluxo de trabalho da sua empresa.",
    image: serviceImage3,
    link: "/contact", // Link para página de contato ou detalhes
    buttonLabel: "Saiba Mais",
  },
];

const ServicesPage = () => {
  return (
    <div className="servicesPage">
      <h1 className="servicesTitle">Nossos Serviços</h1>
      <div className="servicesContainer">
        {servicesData.map((service, index) => (
          <div key={index} className="serviceItem">
            <img src={service.image} alt={service.title} className="serviceImage" />
            <div className="serviceDescription">
              <h2 className="serviceTitle">{service.title}</h2>
              <p className="serviceText">{service.description}</p>
              <a href={service.link} className="serviceButton">
                {service.buttonLabel}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
