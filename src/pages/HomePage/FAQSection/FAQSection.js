import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './FAQSection.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Quanto tempo leva para desenvolver um projeto completo?',
      answer: 'O prazo varia conforme a complexidade. Landing pages e sites institucionais ficam prontos em 7-15 dias. E-commerces e sistemas web customizados levam de 30 a 60 dias. Trabalhamos com metodologia ágil, então você vê progresso semanalmente e pode solicitar ajustes durante o desenvolvimento.'
    },
    {
      question: 'Qual o investimento necessário para um projeto?',
      answer: 'Nossos projetos variam de R$ 5.000 (landing pages) até R$ 50.000+ (sistemas enterprise complexos). Oferecemos parcelamento em até 12x e possibilidade de pagamento por etapas. Agende uma consultoria gratuita para receber um orçamento personalizado baseado nas suas necessidades específicas.'
    },
    {
      question: 'Vocês oferecem garantia e suporte após a entrega?',
      answer: 'Sim! Oferecemos 30 dias de garantia total - se não ficar satisfeito, devolvemos 100% do investimento. Além disso, incluímos suporte técnico vitalício sem custo adicional para bugs e correções. Também oferecemos planos de manutenção mensal para evoluções e novos recursos.'
    },
    {
      question: 'Como funciona o processo de desenvolvimento?',
      answer: 'Seguimos 5 etapas: (1) Descoberta - entendemos seu negócio e objetivos; (2) Planejamento - criamos protótipos e definimos funcionalidades; (3) Desenvolvimento - codificamos com entregas semanais; (4) Testes - validamos qualidade e performance; (5) Lançamento - colocamos no ar e treinamos sua equipe. Você acompanha tudo em tempo real.'
    },
    {
      question: 'Posso fazer alterações durante o desenvolvimento?',
      answer: 'Absolutamente! Nossa metodologia ágil permite ajustes durante todo o processo. Fazemos reuniões semanais de alinhamento onde você pode solicitar mudanças. Alterações dentro do escopo não geram custos extras. Para mudanças significativas fora do escopo, apresentamos um orçamento complementar transparente.'
    },
    {
      question: 'Vocês trabalham com tecnologias específicas ou se adaptam?',
      answer: 'Somos especialistas em React, Vue.js, Node.js, Python/Django e bancos de dados modernos (PostgreSQL, MongoDB). Mas nos adaptamos às suas necessidades! Se você já tem uma stack tecnológica, podemos trabalhar com ela. Nossa prioridade é entregar a melhor solução para seu caso específico.'
    },
    {
      question: 'O que acontece após o projeto ser entregue?',
      answer: 'Após a entrega, você recebe todo o código-fonte, documentação completa e treinamento da equipe. Continuamos disponíveis para suporte técnico vitalício. Muitos clientes optam por contratos de manutenção mensal (a partir de R$ 500/mês) para evoluções contínuas, hospedagem gerenciada e monitoramento proativo.'
    },
    {
      question: 'Vocês atendem empresas de qual porte?',
      answer: 'Atendemos desde startups e pequenas empresas até grandes corporações. Nosso portfólio inclui projetos para operações portuárias, e-commerces de médio porte, além de sistemas internos para empresas de diversos setores. Cada projeto recebe atenção personalizada independente do tamanho.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqSection">
      <div className="faqContainer">
        <motion.div
          className="faqHeader"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="faqBadge">❓ Perguntas Frequentes</span>
          <h2>Tudo que Você Precisa Saber Antes de Começar</h2>
          <p>Respostas transparentes para as dúvidas mais comuns dos nossos clientes</p>
        </motion.div>

        <div className="faqList">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faqItem ${activeIndex === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                className="faqQuestion"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <div className="faqIcon">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="faqAnswer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="faqCTA"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>Ainda tem dúvidas? Nossa equipe está pronta para ajudar!</p>
          <a href="/contact" className="faqButton">
            Falar com um Especialista
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
