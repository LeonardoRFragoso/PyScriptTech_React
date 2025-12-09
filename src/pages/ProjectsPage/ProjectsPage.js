// src/pages/ProjectsPage/ProjectsPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectsPage.css'; 
import project1 from '../../assets/img/project1.png';
import project2 from '../../assets/img/project2.png';
import project3 from '../../assets/img/project3.png';
import project4 from '../../assets/img/project4.png';
import project5 from '../../assets/img/project5.png';
import project6 from '../../assets/img/project6.png';
import video1 from '../../assets/video/video1.mp4';
import video2 from '../../assets/video/video2.mp4';
import video3 from '../../assets/video/video3.mp4';
import video4 from '../../assets/video/video4.mp4';
import video5 from '../../assets/video/video5.mp4';
import video6 from '../../assets/video/video6.mp4';

const projectsData = [
  {
    id: 1,
    title: 'Lions Seminovos',
    subtitle: 'Landing Page de Alta Conversão',
    description: 'Página institucional desenvolvida para a maior concessionária de seminovos do Brasil. Design moderno focado em conversão com integração ao sistema de estoque.',
    category: 'web',
    technologies: ['React', 'JavaScript', 'SCSS', 'API REST'],
    results: ['Aumento de 35% nas conversões', 'Tempo de carregamento < 2s'],
    image: project1,
    video: video1,
    featured: true
  },
  {
    id: 2,
    title: 'PyScript.tech',
    subtitle: 'Site Institucional & Blog',
    description: 'Nosso próprio site institucional com sistema de blog integrado, área de portfólio dinâmica e formulário de contato inteligente.',
    category: 'web',
    technologies: ['Python', 'Django', 'React', 'PostgreSQL'],
    results: ['Design responsivo', 'SEO otimizado'],
    image: project2,
    video: video2,
    featured: true
  },
  {
    id: 3,
    title: 'Sistema de Tickets RWE',
    subtitle: 'Plataforma de Help Desk',
    description: 'Sistema completo de gestão de tickets de TI para a RWE Telemedicina. Dashboard administrativo, notificações automáticas e relatórios gerenciais.',
    category: 'software',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'SQLite'],
    results: ['Redução de 50% no tempo de resposta', '+200 tickets/mês processados'],
    image: project3,
    video: video3,
    featured: false
  },
  {
    id: 4,
    title: 'FileConvert Pro',
    subtitle: 'Conversor Universal de Arquivos',
    description: 'Aplicação web para conversão de arquivos entre múltiplos formatos. Interface intuitiva com preview em tempo real e processamento em nuvem.',
    category: 'web',
    technologies: ['React', 'Tailwind CSS', 'Shadcn/UI', 'CloudConvert API'],
    results: ['Suporte a +50 formatos', 'Conversões ilimitadas'],
    image: project4,
    video: video4,
    featured: false
  },
  {
    id: 5,
    title: 'SGE - Gestão de Equipamentos',
    subtitle: 'Sistema de Gestão Empresarial',
    description: 'Sistema completo para controle de ativos de TI. Cadastro de equipamentos, histórico de manutenções, alertas de garantia e relatórios.',
    category: 'software',
    technologies: ['Python', 'Streamlit', 'SQLite', 'Pandas'],
    results: ['Controle de +500 ativos', 'Dashboard em tempo real'],
    image: project5,
    video: video5,
    featured: false
  },
  {
    id: 6,
    title: 'InvestAnalyzer',
    subtitle: 'Análise de Ações & FIIs',
    description: 'Ferramenta de análise fundamentalista para investidores. Comparador de ativos, indicadores técnicos, histórico de dividendos e simulador de carteira.',
    category: 'software',
    technologies: ['Python', 'Streamlit', 'SQLite', 'APIs Financeiras'],
    results: ['Análise de +400 ativos', 'Dados em tempo real'],
    image: project6,
    video: video6,
    featured: false
  }
];

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'web', label: 'Web' },
  { id: 'software', label: 'Software' },
];

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedVideo, setExpandedVideo] = useState(null);

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  const featuredProjects = projectsData.filter(p => p.featured);

  return (
    <div className="projectsPage">
      {/* Hero Section */}
      <section className="projectsHero">
        <div className="heroContent">
          <span className="heroBadge">Nosso Portfólio</span>
          <h1>
            Projetos que
            <span>geram resultados</span>
          </h1>
          <p>
            Conheça alguns dos projetos que desenvolvemos para nossos clientes. 
            Cada solução é única e pensada para resolver desafios reais.
          </p>
        </div>

        {/* Stats */}
        <div className="heroStats">
          <div className="statItem">
            <span className="statNumber">50+</span>
            <span className="statLabel">Projetos Entregues</span>
          </div>
          <div className="statItem">
            <span className="statNumber">6</span>
            <span className="statLabel">Setores Atendidos</span>
          </div>
          <div className="statItem">
            <span className="statNumber">100%</span>
            <span className="statLabel">Taxa de Entrega</span>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featuredSection">
        <div className="sectionHeader">
          <span className="sectionBadge">Destaques</span>
          <h2>Projetos em Evidência</h2>
        </div>
        <div className="featuredGrid">
          {featuredProjects.map((project) => (
            <div key={project.id} className="featuredCard">
              <div className="featuredImage">
                <img src={project.image} alt={project.title} />
                <div className="featuredOverlay">
                  <button 
                    className="playButton"
                    onClick={() => setExpandedVideo(expandedVideo === project.id ? null : project.id)}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="featuredContent">
                <span className="projectCategory">{project.category === 'web' ? 'Aplicação Web' : 'Software'}</span>
                <h3>{project.title}</h3>
                <p className="projectSubtitle">{project.subtitle}</p>
                <p className="projectDesc">{project.description}</p>
                <div className="techTags">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="techTag">{tech}</span>
                  ))}
                </div>
                <div className="projectResults">
                  {project.results.map((result, i) => (
                    <span key={i} className="resultItem">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {result}
                    </span>
                  ))}
                </div>
              </div>
              {expandedVideo === project.id && (
                <div className="videoExpanded">
                  <video controls autoPlay>
                    <source src={project.video} type="video/mp4" />
                  </video>
                  <button className="closeVideo" onClick={() => setExpandedVideo(null)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* All Projects */}
      <section className="allProjectsSection">
        <div className="sectionHeader">
          <span className="sectionBadge">Portfólio Completo</span>
          <h2>Todos os Projetos</h2>
        </div>

        {/* Category Filter */}
        <div className="categoryFilter">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filterButton ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projectsGrid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="projectCard">
              <div className="cardImageWrapper">
                <img src={project.image} alt={project.title} className="cardImage" />
                <div className="cardOverlay">
                  <button 
                    className="watchVideo"
                    onClick={() => setExpandedVideo(expandedVideo === project.id ? null : project.id)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    Ver Demo
                  </button>
                </div>
              </div>
              <div className="cardContent">
                <span className="projectCategory">{project.category === 'web' ? 'Web' : 'Software'}</span>
                <h3 className="cardTitle">{project.title}</h3>
                <p className="cardSubtitle">{project.subtitle}</p>
                <div className="techTags">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="techTag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="techTag">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
              {expandedVideo === project.id && (
                <div className="videoModal">
                  <div className="videoWrapper">
                    <video controls autoPlay>
                      <source src={project.video} type="video/mp4" />
                    </video>
                    <button className="closeVideo" onClick={() => setExpandedVideo(null)}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="projectsCTA">
        <div className="ctaContent">
          <h2>Tem um projeto em mente?</h2>
          <p>
            Vamos transformar sua ideia em realidade. 
            Entre em contato e receba uma proposta personalizada.
          </p>
          <div className="ctaButtons">
            <button className="ctaButton" onClick={() => navigate('/contact')}>
              Iniciar Conversa
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
