import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaPencilRuler, FaCode, FaCheckCircle, FaRocket } from 'react-icons/fa';
import './ProcessSection.css';

const ProcessSection = () => {
  const steps = [
    {
      icon: <FaSearch />,
      number: '01',
      title: 'Descoberta',
      duration: '1-3 dias',
      description: 'Entendemos seu negócio, objetivos e público-alvo. Definimos requisitos e expectativas em reunião detalhada.',
      deliverables: ['Briefing completo', 'Proposta comercial', 'Cronograma']
    },
    {
      icon: <FaPencilRuler />,
      number: '02',
      title: 'Planejamento',
      duration: '3-5 dias',
      description: 'Criamos wireframes, protótipos interativos e definimos arquitetura técnica. Você aprova antes de começarmos a codificar.',
      deliverables: ['Protótipos navegáveis', 'Arquitetura do sistema', 'Design UI/UX']
    },
    {
      icon: <FaCode />,
      number: '03',
      title: 'Desenvolvimento',
      duration: '15-45 dias',
      description: 'Codificamos com entregas semanais. Você acompanha o progresso em tempo real e pode solicitar ajustes durante o processo.',
      deliverables: ['Código fonte', 'Entregas semanais', 'Ambiente de homologação']
    },
    {
      icon: <FaCheckCircle />,
      number: '04',
      title: 'Testes & QA',
      duration: '3-7 dias',
      description: 'Testamos exaustivamente em múltiplos dispositivos e navegadores. Garantimos performance, segurança e acessibilidade.',
      deliverables: ['Relatórios de teste', 'Correções de bugs', 'Otimizações']
    },
    {
      icon: <FaRocket />,
      number: '05',
      title: 'Lançamento',
      duration: '1-2 dias',
      description: 'Colocamos no ar, configuramos domínio e SSL, treinamos sua equipe e entregamos documentação completa.',
      deliverables: ['Sistema no ar', 'Documentação', 'Treinamento da equipe']
    }
  ];

  return (
    <section className="processSection">
      <div className="processContainer">
        <motion.div
          className="processHeader"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="processBadge">🎯 Nosso Processo</span>
          <h2>Do Briefing ao Lançamento: Transparência Total</h2>
          <p>Metodologia ágil testada em mais de 70 projetos. Você acompanha cada etapa e recebe entregas semanais.</p>
        </motion.div>

        <div className="processTimeline">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="processStep"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="stepConnector">
                {index < steps.length - 1 && <div className="connectorLine"></div>}
              </div>
              
              <div className="stepIcon">
                <div className="iconWrapper">{step.icon}</div>
                <span className="stepNumber">{step.number}</span>
              </div>

              <div className="stepContent">
                <div className="stepHeader">
                  <h3>{step.title}</h3>
                  <span className="stepDuration">{step.duration}</span>
                </div>
                <p className="stepDescription">{step.description}</p>
                <div className="stepDeliverables">
                  <span className="deliverablesLabel">Você recebe:</span>
                  <ul>
                    {step.deliverables.map((item, i) => (
                      <li key={i}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="processCTA"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="ctaContent">
            <h3>Pronto para Começar Seu Projeto?</h3>
            <p>Agende uma reunião gratuita de 30 minutos e receba uma proposta personalizada em até 24 horas.</p>
            <div className="ctaButtons">
              <a href="/contact" className="ctaButtonPrimary">
                Solicitar Orçamento Gratuito
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="https://calendly.com/pyscripttech" target="_blank" rel="noopener noreferrer" className="ctaButtonSecondary">
                Agendar Reunião
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
