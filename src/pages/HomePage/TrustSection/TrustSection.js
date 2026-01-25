import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCreditCard, FaLock, FaHeadset, FaCertificate, FaAward } from 'react-icons/fa';
import './TrustSection.css';

const TrustSection = () => {
  const trustBadges = [
    {
      icon: <FaShieldAlt />,
      title: 'Garantia Total',
      description: '30 dias ou seu dinheiro de volta'
    },
    {
      icon: <FaCreditCard />,
      title: 'Parcelamento',
      description: 'Em até 12x sem juros'
    },
    {
      icon: <FaLock />,
      title: 'Dados Seguros',
      description: 'Criptografia SSL 256-bit'
    },
    {
      icon: <FaHeadset />,
      title: 'Suporte Vitalício',
      description: 'Sem custo adicional'
    },
    {
      icon: <FaCertificate />,
      title: 'Certificado AWS',
      description: 'Solutions Architect'
    },
    {
      icon: <FaAward />,
      title: 'ISO 9001',
      description: 'Qualidade certificada'
    }
  ];

  const guarantees = [
    {
      title: 'Garantia de Satisfação',
      description: 'Se você não ficar 100% satisfeito com o resultado, devolvemos seu investimento. Sem perguntas, sem burocracia.'
    },
    {
      title: 'Prazo Garantido',
      description: 'Entregamos dentro do prazo acordado ou você recebe desconto proporcional aos dias de atraso.'
    },
    {
      title: 'Suporte Sem Limite',
      description: 'Bugs e correções são resolvidos sem custo adicional. Seu sistema funcionará perfeitamente, sempre.'
    }
  ];

  return (
    <section className="trustSection">
      <div className="trustContainer">
        <motion.div
          className="trustHeader"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="trustBadge">🔒 Investimento Seguro e Protegido</span>
          <h2>Por que Você Pode Confiar na PyScript.tech</h2>
          <p>Seu investimento está protegido por garantias reais e certificações reconhecidas internacionalmente</p>
        </motion.div>

        <div className="trustBadges">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              className="trustBadgeCard"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="badgeIcon">{badge.icon}</div>
              <h4>{badge.title}</h4>
              <p>{badge.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="guaranteeSection"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3>Nossas Garantias Irrevogáveis</h3>
          <div className="guaranteeGrid">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="guaranteeCard">
                <div className="guaranteeCheck">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="guaranteeContent">
                  <h4>{guarantee.title}</h4>
                  <p>{guarantee.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="trustProof"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="proofStats">
            <div className="proofStat">
              <span className="statNumber">98%</span>
              <span className="statLabel">Taxa de Satisfação</span>
            </div>
            <div className="proofStat">
              <span className="statNumber">0</span>
              <span className="statLabel">Clientes Insatisfeitos</span>
            </div>
            <div className="proofStat">
              <span className="statNumber">24h</span>
              <span className="statLabel">Tempo de Resposta</span>
            </div>
          </div>
          <p className="proofText">
            💡 <strong>Fato:</strong> Em mais de 5 anos de operação, nunca precisamos acionar nossa garantia de devolução. 
            Isso porque entregamos qualidade desde o primeiro dia.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
