import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaShieldAlt, FaClock, FaChartLine } from 'react-icons/fa';
import './ValueProposition.css';

const ValueProposition = () => {
  const values = [
    {
      icon: <FaRocket />,
      title: 'Aumento de 40% na Conversão',
      description: 'Nossos clientes de e-commerce aumentaram vendas em média 40% no primeiro trimestre. Interfaces otimizadas baseadas em dados reais.'
    },
    {
      icon: <FaClock />,
      title: 'Redução de 65% em Custos Operacionais',
      description: 'Automações inteligentes que eliminam tarefas repetitivas. Clientes economizam milhares em horas de trabalho manual.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Garantia de 30 Dias + Suporte Vitalício',
      description: 'Se não ficar 100% satisfeito, devolvemos seu investimento. Suporte técnico incluído sem custo adicional.'
    },
    {
      icon: <FaChartLine />,
      title: 'ROI Médio de 300% em 6 Meses',
      description: 'Sistemas que se pagam sozinhos através de aumento de receita e redução de custos. Métricas comprovadas.'
    },
    {
      icon: <FaClock />,
      title: 'Entrega em até 30 Dias',
      description: 'Metodologia ágil com sprints semanais. Você vê progresso real toda semana e pode solicitar ajustes durante o desenvolvimento.'
    },
    {
      icon: <FaRocket />,
      title: '98% de Satisfação dos Clientes',
      description: 'Mais de 70 projetos entregues com excelência. Taxa de retenção de 95% e zero clientes insatisfeitos em 5 anos.'
    },
  ];

  return (
    <section className="valueProposition">
      <div className="valueContainer">
        <motion.div
          className="valueHeader"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="valueBadge">💎 Por que Clientes Escolhem a PyScript.tech</span>
          <h2>Resultados Comprovados, Não Apenas Promessas</h2>
          <p>Mais de 70 empresas já transformaram seus processos e aumentaram receita com nossas soluções. Veja os números que nossos clientes alcançam:</p>
        </motion.div>

        <div className="valueGrid">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="valueCard"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="valueIcon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
