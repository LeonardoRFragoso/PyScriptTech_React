// src/pages/Services/ServicesPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ServicesPage.css';

// Importação das imagens
import serviceImage1 from '../../assets/img/Softdev.png';
import serviceImage2 from '../../assets/img/webdev.png';
import serviceImage3 from '../../assets/img/botdev.png';

const servicesData = [
  {
    number: "01",
    title: "Software Sob Medida",
    subtitle: "Sistemas que trabalham do seu jeito",
    description: "Desenvolvemos soluções personalizadas que se integram perfeitamente ao seu fluxo de trabalho. Da análise de requisitos à implementação, criamos sistemas robustos que automatizam processos, reduzem erros e aumentam a produtividade da sua equipe.",
    features: [
      "Análise completa de requisitos",
      "Arquitetura escalável e segura",
      "Integração com APIs e sistemas legados",
      "Banco de dados otimizado",
      "Painel administrativo intuitivo",
      "Suporte e manutenção contínuos"
    ],
    benefits: [
      { icon: "⚡", text: "Redução de 60% no tempo de processos" },
      { icon: "🛡️", text: "Segurança e backup automatizado" },
      { icon: "📈", text: "Escalável conforme seu crescimento" }
    ],
    technologies: ["Python", "Django", "FastAPI", "Node.js", "PostgreSQL", "Docker", "Java", "Spring Boot"],
    image: serviceImage1,
  },
  {
    number: "02",
    title: "Aplicações Web",
    subtitle: "Presença digital que converte",
    description: "Sites e aplicações web de alta performance construídos com as tecnologias mais modernas do mercado. Design responsivo, SEO otimizado e foco total em experiência do usuário para maximizar suas conversões e fortalecer sua marca.",
    features: [
      "React, Next.js & TypeScript",
      "Design UI/UX personalizado",
      "SEO técnico avançado",
      "Otimização de performance",
      "PWA (Progressive Web App)",
      "Analytics e tracking integrados"
    ],
    benefits: [
      { icon: "🚀", text: "Carregamento em menos de 2 segundos" },
      { icon: "📱", text: "100% responsivo em todos dispositivos" },
      { icon: "🎯", text: "Aumento médio de 45% em conversões" }
    ],
    technologies: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind", "JavaScript ES6+"],
    image: serviceImage2,
  },
  {
    number: "03",
    title: "Automação & Bots",
    subtitle: "Tecnologia que trabalha 24/7",
    description: "Bots inteligentes e sistemas de automação que eliminam tarefas repetitivas, reduzem erros humanos e liberam sua equipe para focar no que realmente importa. Atendimento automatizado que nunca dorme.",
    features: [
      "Bots para WhatsApp Business",
      "Chatbots com IA integrada",
      "Automação de processos (RPA)",
      "Integração com CRM e ERPs",
      "Notificações automáticas",
      "Dashboards em tempo real"
    ],
    benefits: [
      { icon: "💰", text: "Redução de até 70% em custos operacionais" },
      { icon: "⏰", text: "Atendimento 24/7 sem interrupção" },
      { icon: "📊", text: "Relatórios e métricas detalhadas" }
    ],
    technologies: ["Python", "Selenium", "Puppeteer", "BeautifulSoup", "RPA", "OpenAI"],
    image: serviceImage3,
  },
];

const statsData = [
  { number: "70+", label: "Projetos Entregues" },
  { number: "98%", label: "Clientes Satisfeitos" },
  { number: "24h", label: "Tempo de Resposta" },
  { number: "2", label: "Sistemas em Produção" },
];

const processSteps = [
  {
    step: "01",
    title: "Descoberta",
    description: "Entendemos seu negócio, desafios e objetivos através de reuniões consultivas.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
    )
  },
  {
    step: "02",
    title: "Planejamento",
    description: "Criamos um roadmap detalhado com escopo, prazos e tecnologias ideais.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <line x1="10" y1="9" x2="8" y2="9"></line>
      </svg>
    )
  },
  {
    step: "03",
    title: "Desenvolvimento",
    description: "Construímos sua solução com sprints semanais e validações constantes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    step: "04",
    title: "Entrega & Suporte",
    description: "Deploy em produção, treinamento da equipe e suporte contínuo.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    )
  },
];

const faqData = [
  {
    question: "Quanto tempo leva para desenvolver um projeto?",
    answer: "Depende da complexidade. Um site institucional leva de 2-4 semanas. Sistemas mais complexos podem levar de 2-6 meses. Sempre fornecemos um cronograma detalhado antes de iniciar."
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer: "Sim! Todos os projetos incluem 30 dias de suporte gratuito. Depois, oferecemos planos de manutenção mensal que incluem atualizações, correções e melhorias contínuas."
  },
  {
    question: "Como funciona o processo de pagamento?",
    answer: "Trabalhamos com 40% de entrada para iniciar o projeto e 60% na entrega final. Para projetos maiores, podemos dividir em mais parcelas conforme os milestones."
  },
  {
    question: "Posso acompanhar o desenvolvimento do projeto?",
    answer: "Com certeza! Utilizamos metodologia ágil com entregas semanais. Você terá acesso a um ambiente de preview e reuniões regulares de alinhamento."
  },
];

const ServicesPage = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="servicesPage">
      {/* Hero Section */}
      <section className="servicesHero">
        <div className="heroContent">
          <span className="heroBadge">Nossas Soluções</span>
          <h1>
            Tecnologia que impulsiona
            <span>resultados reais</span>
          </h1>
          <p>
            Cada projeto é único. Por isso, desenvolvemos soluções personalizadas 
            que se adaptam às necessidades específicas do seu negócio.
          </p>
        </div>

        {/* Stats */}
        <div className="heroStats">
          {statsData.map((stat, index) => (
            <div key={index} className="statItem">
              <span className="statNumber">{stat.number}</span>
              <span className="statLabel">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="servicesGrid">
        {servicesData.map((service, index) => (
          <div key={index} className="serviceCard">
            <div className="cardImageWrapper">
              <img src={service.image} alt={service.title} className="cardImage" />
              <span className="cardNumber">{service.number}</span>
            </div>
            <div className="cardContent">
              <span className="cardSubtitle">{service.subtitle}</span>
              <h2 className="cardTitle">{service.title}</h2>
              <p className="cardDescription">{service.description}</p>
              
              {/* Features */}
              <ul className="cardFeatures">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Benefits */}
              <div className="cardBenefits">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="benefitItem">
                    <span className="benefitIcon">{benefit.icon}</span>
                    <span className="benefitText">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="cardTechnologies">
                <span className="techLabel">Tecnologias:</span>
                <div className="techTags">
                  {service.technologies.map((tech, i) => (
                    <span key={i} className="techTag">{tech}</span>
                  ))}
                </div>
              </div>

              <button className="cardButton" onClick={() => navigate('/contact')}>
                <span>Solicitar Proposta</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Process Section */}
      <section className="processSection">
        <div className="sectionHeader">
          <span className="sectionBadge">Nossa Metodologia</span>
          <h2>Como trabalhamos</h2>
          <p>Um processo transparente e colaborativo do início ao fim</p>
        </div>
        <div className="processGrid">
          {processSteps.map((item, index) => (
            <div key={index} className="processCard">
              <div className="processIcon">{item.icon}</div>
              <div className="processStep">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {index < processSteps.length - 1 && (
                <div className="processConnector"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faqSection">
        <div className="sectionHeader">
          <span className="sectionBadge">Dúvidas Frequentes</span>
          <h2>Perguntas & Respostas</h2>
          <p>Tudo que você precisa saber antes de começar</p>
        </div>
        <div className="faqList">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faqItem ${openFaq === index ? 'active' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faqQuestion">
                <span>{item.question}</span>
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="faqIcon"
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </div>
              <div className="faqAnswer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="servicesCTA">
        <div className="ctaContent">
          <h2>Pronto para transformar seu negócio?</h2>
          <p>
            Agende uma conversa gratuita com nossos especialistas e descubra 
            como podemos ajudar sua empresa a crescer.
          </p>
          <div className="ctaButtons">
            <button className="ctaButton" onClick={() => navigate('/contact')}>
              <span>Agendar Conversa</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <a 
              href="https://wa.me/+5521980292791" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ctaButtonSecondary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
