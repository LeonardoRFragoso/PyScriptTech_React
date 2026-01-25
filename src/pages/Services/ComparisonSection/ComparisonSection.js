import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './ComparisonSection.css';

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: 'Garantia de satisfação ou dinheiro de volta',
      us: true,
      others: false
    },
    {
      feature: 'Suporte técnico vitalício incluído',
      us: true,
      others: false
    },
    {
      feature: 'Código-fonte 100% documentado',
      us: true,
      others: 'Parcial'
    },
    {
      feature: 'Metodologia ágil com entregas semanais',
      us: true,
      others: 'Às vezes'
    },
    {
      feature: 'Prazo de entrega garantido',
      us: true,
      others: false
    },
    {
      feature: 'Parcelamento em até 12x sem juros',
      us: true,
      others: 'Limitado'
    },
    {
      feature: 'Treinamento completo da equipe',
      us: true,
      others: 'Adicional'
    },
    {
      feature: 'Tempo de resposta < 24h',
      us: true,
      others: 'Variável'
    }
  ];

  return (
    <section className="comparisonSection">
      <div className="comparisonContainer">
        <motion.div
          className="comparisonHeader"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="comparisonBadge">⚡ Por que Escolher a PyScript.tech</span>
          <h2>A Diferença que Gera Resultados</h2>
          <p>Compare e veja por que mais de 70 empresas confiam em nossos serviços</p>
        </motion.div>

        <motion.div
          className="comparisonTable"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="comparisonTableHeader">
            <div className="featureColumn">Diferenciais</div>
            <div className="usColumn">
              <div className="columnContent">
                <span className="columnLabel">PyScript.tech</span>
                <span className="columnBadge">Recomendado</span>
              </div>
            </div>
            <div className="othersColumn">Outras Software Houses</div>
          </div>

          <div className="comparisonTableBody">
            {comparisonData.map((item, index) => (
              <motion.div
                key={index}
                className="comparisonRow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="featureCell">{item.feature}</div>
                <div className="usCell">
                  {item.us === true ? (
                    <div className="checkIcon success">
                      <FaCheck />
                    </div>
                  ) : (
                    <span className="textValue">{item.us}</span>
                  )}
                </div>
                <div className="othersCell">
                  {item.others === true ? (
                    <div className="checkIcon success">
                      <FaCheck />
                    </div>
                  ) : item.others === false ? (
                    <div className="checkIcon fail">
                      <FaTimes />
                    </div>
                  ) : (
                    <span className="textValue limited">{item.others}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="comparisonCTA"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            <strong>Resultado:</strong> 98% de satisfação dos clientes e 0 projetos cancelados em 5 anos de operação
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
