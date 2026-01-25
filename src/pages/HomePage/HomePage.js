// src/pages/HomePage/HomePage.js
import React from 'react';
import SEO from '../../components/SEO/SEO';
import IntroSection from './InfoSection/IntroSection';
import ValueProposition from './ValueProposition/ValueProposition';
import StatsSection from './StatsSection/StatsSection';
import TrustSection from './TrustSection/TrustSection';
import ServicesSection from './ServiceSection/ServicesSection';
import ProcessSection from './ProcessSection/ProcessSection';
import FeaturedProjects from './FeaturedProjects/FeaturedProjects';
import TestimonialsSection from './TestimonialsSection/TestimonialsSection';
import FAQSection from './FAQSection/FAQSection';
import UrgencySection from './UrgencySection/UrgencySection';
import ContactSection from './ContactSection/ContactSection';
import '../../assets/styles/responsive.css';

const HomePage = () => {
  // Schema.org structured data para SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PyScript.tech",
    "description": "Software House especializada em desenvolvimento de sistemas sob medida, e-commerce e automações",
    "url": "https://pyscript.tech",
    "logo": "https://pyscript.tech/images/Leo-Perfil.png",
    "foundingDate": "2019",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rio de Janeiro",
      "addressRegion": "RJ",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-21-98029-2791",
      "contactType": "Sales",
      "email": "contato@pyscript.tech",
      "availableLanguage": ["pt-BR", "en"]
    },
    "sameAs": [
      "https://github.com/LeonardoRFragoso",
      "https://linkedin.com/company/pyscripttech"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "ratingCount": "70"
    }
  };

  return (
    <>
      <SEO
        title="PyScript.tech - Desenvolvimento de Software que Gera Resultados | +70 Projetos Entregues"
        description="Software sob medida que aumenta receita em 40% e reduz custos em 65%. E-commerce, sistemas enterprise e automações. Garantia de 30 dias. Entrega em até 30 dias."
        url="https://pyscript.tech"
        keywords="desenvolvimento de software, software house rio de janeiro, desenvolvimento web, e-commerce, automação de processos, sistemas sob medida, react, django, python"
      />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div className="homepage-container">
        <IntroSection />
        <ValueProposition />
        <StatsSection />
        <TrustSection />
        <ServicesSection />
        <ProcessSection />
        <FeaturedProjects />
        <TestimonialsSection />
        <FAQSection />
        <UrgencySection />
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;
