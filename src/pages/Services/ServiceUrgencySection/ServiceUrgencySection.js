import React from 'react';
import { motion } from 'framer-motion';
import { FaFire, FaGift, FaCalendarCheck, FaHeadset } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ServiceUrgencySection.css';

const ServiceUrgencySection = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <FaGift />,
      title: '15% OFF',
      description: 'Na contratação este mês'
    },
    {
      icon: <FaCalendarCheck />,
      title: 'Início Imediato',
      description: 'Começamos na próxima semana'
    },
    {
      icon: <FaHeadset />,
      title: 'Consultoria Grátis',
      description: '1h de análise técnica sem custo'
    }
  ];

  return (
    <section className="serviceUrgencySection">
      <div className="serviceUrgencyContainer">
        <motion.div
          className="urgencyContent"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="urgencyBadge">
            <FaFire />
            <span>Oferta Exclusiva Janeiro/2026</span>
          </div>

          <h2>
            Apenas <span className="highlight">2 Vagas Restantes</span> para Novos Projetos
          </h2>

          <p className="urgencyDescription">
            Para manter nossa qualidade excepcional, limitamos a capacidade mensal. 
            <strong> Contrate agora e receba benefícios exclusivos:</strong>
          </p>

          <div className="benefitsGrid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefitCard"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="benefitIcon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="urgencyActions">
            <button className="urgencyButton" onClick={() => navigate('/contact')}>
              Garantir Minha Vaga com Desconto
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <p className="urgencyDisclaimer">
              ✓ Resposta em até 2h • ✓ Orçamento personalizado • ✓ Sem compromisso
            </p>
          </div>

          <div className="urgencySocial">
            <div className="socialAvatars">
              <div className="avatar">MR</div>
              <div className="avatar">JS</div>
              <div className="avatar">TF</div>
              <span className="avatarMore">+8</span>
            </div>
            <p><strong>11 empresas</strong> solicitaram orçamento nas últimas 24 horas</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceUrgencySection;
