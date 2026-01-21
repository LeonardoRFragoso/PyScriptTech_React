export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    // Header
    nav: {
      home: 'Home',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
    },

    // Hero
    hero: {
      roles: [
        'Full Stack Developer',
        'Python Specialist',
        'Backend Engineer',
        'Automation Expert',
      ],
      tagline: 'Transformando ideias em',
      taglineHighlight: 'soluções tecnológicas',
      taglineEnd: 'inovadoras',
      specialist: 'Especialista em',
      techStack: 'Python, Django, Flask e React',
      focusOn: 'com foco em',
      focusAreas: 'automação, APIs e soluções empresariais',
      viewProjects: 'Ver Projetos',
      getInTouch: 'Entrar em Contato',
      scroll: 'Scroll',
    },

    // About
    about: {
      title: 'Sobre Mim',
      role: 'Desenvolvedor Full Stack',
      description: 'com sólida experiência em',
      itManagement: 'gestão de TI e infraestrutura',
      currently: 'Atualmente',
      currentRole: 'Desenvolvedor de Sistemas Junior',
      atCompany: 'na iTracker Logística Inteligente,',
      previousExp: 'com experiência anterior como',
      previousRole: 'Gerente de TI',
      leadingTeams: 'liderando equipes técnicas.',
      specializedIn: 'Especializado em',
      techSpecialty: 'Python, Django, Flask, FastAPI e React',
      focusOn: 'com foco em',
      focusAreas: 'automação de processos, APIs REST e extração de dados',
      combining: 'Combino',
      vision: 'visão estratégica de negócios com habilidades técnicas avançadas',
      toCreate: 'para criar soluções completas e escaláveis, desde back-end robusto até interfaces modernas e intuitivas.',
      stats: {
        projects: 'Projetos Entregues',
        years: 'Anos em TI',
        certifications: 'Certificações',
        technologies: 'Tecnologias',
      },
      experience: {
        title: 'Experiência Profissional',
        current: 'ATUAL',
      },
      skills: {
        title: 'Stack Tecnológico',
        levels: {
          advanced: 'Avançado',
          intermediate: 'Intermediário',
        },
      },
      education: {
        title: 'Formação & Certificações',
        featured: 'DESTAQUE',
      },
    },

    // Skills Data
    skillsData: [
      { 
        name: 'Python & Frameworks', 
        description: 'Django, Flask, FastAPI | APIs RESTful e GraphQL | Selenium, Pandas, NumPy | Celery, Redis | Desenvolvimento back-end robusto', 
        level: 'Avançado',
      },
      { 
        name: 'Banco de Dados', 
        description: 'PostgreSQL, MySQL, SQLite, Firebase | ORM (Django/SQLAlchemy) | Modelagem de dados, migrations e queries otimizadas', 
        level: 'Intermediário',
      },
      { 
        name: 'Frontend & Web', 
        description: 'React, TypeScript, Next.js | HTML5, CSS3, JavaScript ES6+ | Tailwind CSS, Framer Motion, shadcn/ui | PWA e SPA', 
        level: 'Intermediário',
      },
      { 
        name: 'DevOps & Cloud', 
        description: 'Git/GitHub, Docker, CI/CD | AWS (EC2, S3, RDS) | Vercel, Railway | Power BI | Linux | Metodologias Ágeis (Scrum/Kanban)', 
        level: 'Intermediário',
      },
      { 
        name: 'Automação & Dados', 
        description: 'Selenium WebDriver, BeautifulSoup, Scrapy | ETL e pipelines de dados | Streamlit para dashboards | pytest, unittest', 
        level: 'Avançado',
      },
      { 
        name: 'Infraestrutura & TI', 
        description: 'Windows Server, Active Directory, GPO | Redes TCP/IP, VPN, Firewall | Virtualização | Gestão de equipes técnicas', 
        level: 'Avançado',
      },
    ],

    // Experience Data
    experienceData: [
      {
        title: 'Desenvolvedor de Sistemas Junior',
        company: 'iTracker Logística Inteligente',
        period: 'dez 2024 - Presente',
        description: 'Desenvolvimento de sistemas de automação e extração de dados para otimização de processos logísticos. Criação de APIs REST, dashboards gerenciais e integração de sistemas com Python, Django e React.',
        featured: true,
      },
      {
        title: 'Gerente de TI',
        company: 'RWE Telemedicina e Diagnósticos', 
        period: 'jan 2024 - jul 2024',
        description: 'Liderança de equipe de suporte técnico e infraestrutura. Implementação de melhorias em processos, governança de TI, gestão de projetos e tomada de decisões estratégicas.',
        featured: false,
      },
      {
        title: 'Analista de Suporte de TI',
        company: 'Experiência Corporativa',
        period: 'nov 2023 - jul 2024',
        description: 'Desenvolvimento back-end com Python e Django. Automação de processos, criação de scripts e ferramentas internas. Suporte N2/N3 e documentação técnica.',
        featured: false,
      },
    ],

    // Education Data
    educationData: [
      {
        degree: 'Gestão de Tecnologia da Informação',
        institution: 'Estácio de Sá',
        year: '2016 - 2019',
        description: 'Graduação com foco em gestão estratégica de TI, governança corporativa, gerenciamento de projetos e processos',
        featured: true,
      },
      {
        degree: 'Formação Python Developer',
        institution: 'Rocketseat',
        year: 'abr 2024 - ago 2024',
        description: 'Python avançado, APIs RESTful, testes automatizados, clean code e design patterns',
        certificate: 'Certificado verificado',
        featured: true,
      },
      {
        degree: 'Formação Full Stack',
        institution: 'Rocketseat',
        year: 'jun 2024 - set 2024',
        description: 'React, Node.js, TypeScript, PostgreSQL, Docker e deploy em produção na AWS',
        certificate: 'Certificado verificado',
        featured: true,
      },
      {
        degree: 'Django Master Bootcamp',
        institution: 'PyCode',
        year: 'abr 2024 - set 2024',
        description: 'Django avançado, Django REST Framework, ORM otimizado, AWS, Redis, Celery e WebSockets',
        certificate: '140h de carga horária',
      },
      {
        degree: 'Formação Explorer',
        institution: 'Rocketseat',
        year: 'abr 2024 - jul 2024', 
        description: 'HTML5, CSS3, JavaScript, Git, algoritmos, estruturas de dados e lógica de programação',
        certificate: 'Certificado verificado',
      },
      {
        degree: 'Analista de Dados',
        institution: 'Cubos Academy',
        year: 'jan 2024 - set 2024',
        description: 'Python para análise de dados, Pandas, NumPy, Matplotlib, SQL avançado e Machine Learning básico',
        certificate: 'Projeto final aprovado',
      },
    ],

    // Projects
    projects: {
      title: 'Projetos',
      subtitle: 'Explorando ideias através do código e criando',
      subtitleHighlight: 'soluções inovadoras',
      featured: 'DESTAQUE',
      saas: 'SaaS EM PRODUÇÃO',
      live: 'LIVE',
      photos: 'fotos',
      viewGallery: 'Ver Galeria',
      code: 'Código',
      visitSite: 'Visitar Site',
      projectsList: [
        {
          title: 'Sistema de Gestão Pátio',
          description: 'Sistema completo para gestão de pátios e estacionamentos com controle de vagas em tempo real, relatórios gerenciais, dashboard analítico e interface responsiva. Desenvolvido com arquitetura MVC e APIs REST.',
        },
        {
          title: 'Sistema de Gestão de Não-Conformidades',
          description: 'Sistema robusto para gestão de não-conformidades com workflow de aprovação multinível, notificações automáticas, relatórios PDF, dashboard executivo com KPIs e histórico completo de ações corretivas.',
        },
        {
          title: 'Sistema GR - Gestão de Risco',
          description: 'Sistema para gestão de riscos empresariais com identificação, avaliação e monitoramento de riscos, planos de mitigação, relatórios gerenciais automatizados e dashboard interativo com métricas de performance.',
        },
        {
          title: 'Dashboard de Multas - Streamlit',
          description: 'Dashboard interativo para análise de multas de trânsito com ETL automatizado, integração Google Drive, visualizações dinâmicas (Plotly/Altair), filtros avançados e exportação de relatórios personalizados.',
        },
        {
          title: 'Sistema para Andaimes Pini',
          description: 'Sistema empresarial customizado para locação de equipamentos com controle de estoque, gestão de contratos, faturamento automático, relatórios financeiros e dashboard gerencial com indicadores de negócio.',
        },
        {
          title: 'Sistema de Monitoramento TVs ICTSI',
          description: 'Sistema de digital signage para terminal portuário com gerenciamento de displays informativos, agendamento de conteúdo, monitoramento em tempo real, integração com sistemas operacionais e painel administrativo.',
        },
        {
          title: 'ProFlow - Plataforma para Freelancers',
          description: 'SaaS completo para freelancers com IA consultiva que sugere preços, gera propostas automáticas e protege contra calotes com sistema de pagamento em custódia. Inclui verificação de identidade (ProFlow Score), taxa fixa de 8% e suporte prioritário.',
        },
        {
          title: 'Base Corporativa - E-commerce',
          description: 'E-commerce completo para roupas corporativas com catálogo de produtos, carrinho de compras, checkout integrado com Mercado Pago, sistema de gestão de pedidos, analytics com Google Analytics e Meta Pixel, e PWA para experiência mobile.',
        },
        {
          title: 'MedFlow Finance',
          description: 'Sistema de faturamento inteligente para clínicas médicas que recupera dinheiro perdido por erros de faturamento e glosas. Automação de validação e processamento com dashboard de métricas ROI.',
        },
        {
          title: 'BI-as-a-Service',
          description: 'Plataforma SaaS de Business Intelligence com IA que cria dashboards automáticos a partir de CSV. Análise inteligente via GPT-4o-mini, detecção de tendências, KPIs dinâmicos e gestão multi-tenant.',
        },
        {
          title: 'APM Platform',
          description: 'Plataforma de Monitoramento de Sistemas e APIs inspirada em New Relic e Datadog. Clean Architecture, coleta assíncrona de métricas, health checks, alertas em tempo real via WebSocket.',
        },
        {
          title: 'FinanceControl',
          description: 'Gerenciador financeiro pessoal com dashboard interativo, controle de receitas e despesas, categorização automática, relatórios visuais e gráficos de evolução financeira.',
        },
      ],
    },

    // Contact
    contact: {
      title: 'Contato',
      subtitle: 'Entre em contato e',
      subtitleHighlight: 'vamos criar algo incrível juntos!',
      preferred: 'PREFERIDO',
      email: {
        title: 'Email',
        description: 'Envie uma mensagem direta para discutir projetos, oportunidades ou colaborações',
        action: 'Entrar em contato',
      },
      github: {
        title: 'GitHub',
        description: 'Explore meus repositórios, contribuições open source e projetos pessoais',
        action: 'Visitar perfil',
      },
      linkedin: {
        title: 'LinkedIn',
        description: 'Conecte-se para networking profissional e acompanhe minha trajetória',
        action: 'Conectar',
      },
      footer: 'Respondo rapidamente e estou sempre aberto a novas',
      opportunities: 'oportunidades',
      and: 'e',
      collaborations: 'colaborações',
    },

    // Footer
    footer: {
      description: 'Transformando ideias em soluções tecnológicas inovadoras com Python, Django, React e muito mais',
      visitGithub: 'Visite o perfil de Leonardo no GitHub',
      visitLinkedin: 'Visite o perfil de Leonardo no LinkedIn',
      sendEmail: 'Envie um e-mail para Leonardo Fragoso',
      copyright: 'Todos os direitos reservados.',
      madeWith: 'Desenvolvido com',
      and: 'e Python',
    },
  },

  en: {
    // Header
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },

    // Hero
    hero: {
      roles: [
        'Full Stack Developer',
        'Python Specialist',
        'Backend Engineer',
        'Automation Expert',
      ],
      tagline: 'Transforming ideas into',
      taglineHighlight: 'innovative tech solutions',
      taglineEnd: '',
      specialist: 'Specialist in',
      techStack: 'Python, Django, Flask and React',
      focusOn: 'focused on',
      focusAreas: 'automation, APIs and enterprise solutions',
      viewProjects: 'View Projects',
      getInTouch: 'Get in Touch',
      scroll: 'Scroll',
    },

    // About
    about: {
      title: 'About Me',
      role: 'Full Stack Developer',
      description: 'with solid experience in',
      itManagement: 'IT management and infrastructure',
      currently: 'Currently',
      currentRole: 'Junior Systems Developer',
      atCompany: 'at iTracker Intelligent Logistics,',
      previousExp: 'with previous experience as',
      previousRole: 'IT Manager',
      leadingTeams: 'leading technical teams.',
      specializedIn: 'Specialized in',
      techSpecialty: 'Python, Django, Flask, FastAPI and React',
      focusOn: 'focused on',
      focusAreas: 'process automation, REST APIs and data extraction',
      combining: 'I combine',
      vision: 'strategic business vision with advanced technical skills',
      toCreate: 'to create complete and scalable solutions, from robust back-end to modern and intuitive interfaces.',
      stats: {
        projects: 'Projects Delivered',
        years: 'Years in IT',
        certifications: 'Certifications',
        technologies: 'Technologies',
      },
      experience: {
        title: 'Professional Experience',
        current: 'CURRENT',
      },
      skills: {
        title: 'Tech Stack',
        levels: {
          advanced: 'Advanced',
          intermediate: 'Intermediate',
        },
      },
      education: {
        title: 'Education & Certifications',
        featured: 'FEATURED',
      },
    },

    // Skills Data
    skillsData: [
      { 
        name: 'Python & Frameworks', 
        description: 'Django, Flask, FastAPI | RESTful & GraphQL APIs | Selenium, Pandas, NumPy | Celery, Redis | Robust back-end development', 
        level: 'Advanced',
      },
      { 
        name: 'Databases', 
        description: 'PostgreSQL, MySQL, SQLite, Firebase | ORM (Django/SQLAlchemy) | Data modeling, migrations and optimized queries', 
        level: 'Intermediate',
      },
      { 
        name: 'Frontend & Web', 
        description: 'React, TypeScript, Next.js | HTML5, CSS3, JavaScript ES6+ | Tailwind CSS, Framer Motion, shadcn/ui | PWA and SPA', 
        level: 'Intermediate',
      },
      { 
        name: 'DevOps & Cloud', 
        description: 'Git/GitHub, Docker, CI/CD | AWS (EC2, S3, RDS) | Vercel, Railway | Power BI | Linux | Agile Methodologies (Scrum/Kanban)', 
        level: 'Intermediate',
      },
      { 
        name: 'Automation & Data', 
        description: 'Selenium WebDriver, BeautifulSoup, Scrapy | ETL and data pipelines | Streamlit for dashboards | pytest, unittest', 
        level: 'Advanced',
      },
      { 
        name: 'Infrastructure & IT', 
        description: 'Windows Server, Active Directory, GPO | TCP/IP Networks, VPN, Firewall | Virtualization | Technical team management', 
        level: 'Advanced',
      },
    ],

    // Experience Data
    experienceData: [
      {
        title: 'Junior Systems Developer',
        company: 'iTracker Intelligent Logistics',
        period: 'Dec 2024 - Present',
        description: 'Development of automation and data extraction systems for logistics process optimization. Creation of REST APIs, management dashboards and system integration with Python, Django and React.',
        featured: true,
      },
      {
        title: 'IT Manager',
        company: 'RWE Telemedicine and Diagnostics', 
        period: 'Jan 2024 - Jul 2024',
        description: 'Leadership of technical support and infrastructure team. Implementation of process improvements, IT governance, project management and strategic decision-making.',
        featured: false,
      },
      {
        title: 'IT Support Analyst',
        company: 'Corporate Experience',
        period: 'Nov 2023 - Jul 2024',
        description: 'Back-end development with Python and Django. Process automation, script creation and internal tools. N2/N3 support and technical documentation.',
        featured: false,
      },
    ],

    // Education Data
    educationData: [
      {
        degree: 'Information Technology Management',
        institution: 'Estácio de Sá',
        year: '2016 - 2019',
        description: 'Degree focused on strategic IT management, corporate governance, project and process management',
        featured: true,
      },
      {
        degree: 'Python Developer Training',
        institution: 'Rocketseat',
        year: 'Apr 2024 - Aug 2024',
        description: 'Advanced Python, RESTful APIs, automated testing, clean code and design patterns',
        certificate: 'Verified certificate',
        featured: true,
      },
      {
        degree: 'Full Stack Training',
        institution: 'Rocketseat',
        year: 'Jun 2024 - Sep 2024',
        description: 'React, Node.js, TypeScript, PostgreSQL, Docker and production deployment on AWS',
        certificate: 'Verified certificate',
        featured: true,
      },
      {
        degree: 'Django Master Bootcamp',
        institution: 'PyCode',
        year: 'Apr 2024 - Sep 2024',
        description: 'Advanced Django, Django REST Framework, optimized ORM, AWS, Redis, Celery and WebSockets',
        certificate: '140h course load',
      },
      {
        degree: 'Explorer Training',
        institution: 'Rocketseat',
        year: 'Apr 2024 - Jul 2024', 
        description: 'HTML5, CSS3, JavaScript, Git, algorithms, data structures and programming logic',
        certificate: 'Verified certificate',
      },
      {
        degree: 'Data Analyst',
        institution: 'Cubos Academy',
        year: 'Jan 2024 - Sep 2024',
        description: 'Python for data analysis, Pandas, NumPy, Matplotlib, advanced SQL and basic Machine Learning',
        certificate: 'Final project approved',
      },
    ],

    // Projects
    projects: {
      title: 'Projects',
      subtitle: 'Exploring ideas through code and creating',
      subtitleHighlight: 'innovative solutions',
      featured: 'FEATURED',
      saas: 'SaaS IN PRODUCTION',
      live: 'LIVE',
      photos: 'photos',
      viewGallery: 'View Gallery',
      code: 'Code',
      visitSite: 'Visit Site',
      projectsList: [
        {
          title: 'Parking Lot Management System',
          description: 'Complete system for parking lot management with real-time space control, management reports, analytical dashboard and responsive interface. Developed with MVC architecture and REST APIs.',
        },
        {
          title: 'Non-Conformance Management System',
          description: 'Robust system for non-conformance management with multi-level approval workflow, automatic notifications, PDF reports, executive dashboard with KPIs and complete corrective action history.',
        },
        {
          title: 'GR System - Risk Management',
          description: 'Enterprise risk management system with risk identification, assessment and monitoring, mitigation plans, automated management reports and interactive dashboard with performance metrics.',
        },
        {
          title: 'Traffic Fines Dashboard - Streamlit',
          description: 'Interactive dashboard for traffic fine analysis with automated ETL, Google Drive integration, dynamic visualizations (Plotly/Altair), advanced filters and customized report export.',
        },
        {
          title: 'Pini Scaffolding System',
          description: 'Customized enterprise system for equipment rental with inventory control, contract management, automatic billing, financial reports and management dashboard with business indicators.',
        },
        {
          title: 'ICTSI TV Monitoring System',
          description: 'Digital signage system for port terminal with informative display management, content scheduling, real-time monitoring, integration with operating systems and admin panel.',
        },
        {
          title: 'ProFlow - Freelancer Platform',
          description: 'Complete SaaS for freelancers with consultive AI that suggests prices, generates automatic proposals and protects against defaults with escrow payment system. Includes identity verification (ProFlow Score), 8% flat fee and priority support.',
        },
        {
          title: 'Base Corporativa - E-commerce',
          description: 'Complete e-commerce for corporate clothing with product catalog, shopping cart, checkout integrated with Mercado Pago, order management system, analytics with Google Analytics and Meta Pixel, and PWA for mobile experience.',
        },
        {
          title: 'MedFlow Finance',
          description: 'Intelligent billing system for medical clinics that recovers money lost due to billing errors and denials. Validation and processing automation with ROI metrics dashboard.',
        },
        {
          title: 'BI-as-a-Service',
          description: 'SaaS Business Intelligence platform with AI that creates automatic dashboards from CSV. Intelligent analysis via GPT-4o-mini, trend detection, dynamic KPIs and multi-tenant management.',
        },
        {
          title: 'APM Platform',
          description: 'Application Performance Monitoring Platform inspired by New Relic and Datadog. Clean Architecture, async metrics collection, health checks, real-time alerts via WebSocket.',
        },
        {
          title: 'FinanceControl',
          description: 'Personal finance manager with interactive dashboard, income and expense tracking, automatic categorization, visual reports and financial evolution charts.',
        },
      ],
    },

    // Contact
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch and',
      subtitleHighlight: "let's create something amazing together!",
      preferred: 'PREFERRED',
      email: {
        title: 'Email',
        description: 'Send a direct message to discuss projects, opportunities or collaborations',
        action: 'Get in touch',
      },
      github: {
        title: 'GitHub',
        description: 'Explore my repositories, open source contributions and personal projects',
        action: 'Visit profile',
      },
      linkedin: {
        title: 'LinkedIn',
        description: 'Connect for professional networking and follow my journey',
        action: 'Connect',
      },
      footer: 'I respond quickly and am always open to new',
      opportunities: 'opportunities',
      and: 'and',
      collaborations: 'collaborations',
    },

    // Footer
    footer: {
      description: 'Transforming ideas into innovative tech solutions with Python, Django, React and more',
      visitGithub: "Visit Leonardo's GitHub profile",
      visitLinkedin: "Visit Leonardo's LinkedIn profile",
      sendEmail: 'Send an email to Leonardo Fragoso',
      copyright: 'All rights reserved.',
      madeWith: 'Made with',
      and: 'and Python',
    },
  },
};

export type Translations = typeof translations.pt;
