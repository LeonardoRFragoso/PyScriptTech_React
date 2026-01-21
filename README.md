# PyScript.tech - Website Institucional

Website institucional e portfólio da **PyScript.tech**, empresa especializada em desenvolvimento de software sob medida, aplicações web e automação de processos.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Modules-1572B6?style=flat&logo=css3)

## Visão Geral

Este projeto é o site oficial da PyScript.tech, desenvolvido em React com design moderno e futurista. O site apresenta os serviços oferecidos, portfólio de projetos e formulário de contato integrado com EmailJS.

## Funcionalidades

- **Home Page** - Apresentação da empresa com seções de serviços, depoimentos e contato
- **Página de Serviços** - Detalhamento dos serviços oferecidos (Software Sob Medida, Aplicações Web, Automação & Bots)
- **Página de Projetos** - Portfólio completo com projetos em destaque e filtro por categoria
- **Página de Contato** - Formulário completo integrado com EmailJS para envio de orçamentos
- **Design Responsivo** - Layout adaptável para todos os dispositivos
- **Animações Modernas** - Efeitos de glassmorphism, gradientes animados e transições suaves

## Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **React Router DOM** - Navegação entre páginas (SPA)
- **CSS Modules** - Estilização modular e escopada
- **EmailJS** - Integração para envio de emails pelo formulário
- **Slick Carousel** - Carrossel para seção de depoimentos

## Estrutura do Projeto

```
src/
├── components/
│   ├── Navbar/          # Barra de navegação
│   ├── Footer/          # Rodapé
│   └── ScrollToTop/     # Componente para scroll ao topo
├── pages/
│   ├── HomePage/        # Página inicial
│   │   ├── HeroSection/
│   │   ├── ServicesSection/
│   │   ├── TestimonialsSection/
│   │   └── ContactSection/
│   ├── Services/        # Página de serviços
│   ├── ProjectsPage/    # Página de projetos/portfólio
│   └── ContactPage/     # Página de contato
├── assets/              # Imagens e recursos
└── App.js               # Componente principal com rotas
```

## Instalação

```bash
# Clone o repositório
git clone https://github.com/LeonardoRFragoso/PyScriptTech_React.git

# Acesse a pasta do projeto
cd PyScriptTech_React

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

O projeto será executado em [http://localhost:3000](http://localhost:3000).

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm start` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build de produção otimizado |
| `npm test` | Executa os testes |

## Configuração do EmailJS

Para o formulário de contato funcionar, configure as variáveis do EmailJS em:
- `src/pages/ContactPage/ContactPage.js`
- `src/pages/HomePage/ContactSection/ContactSection.js`

## Contato

- **Website:** [pyscript.tech](https://pyscript.tech)
- **Email:** contato@pyscript.tech
- **WhatsApp:** +55 (21) 98029-2791
- **LinkedIn:** [PyScript.tech](https://linkedin.com/company/pyscripttech)

## Licença

Este projeto é proprietário da PyScript.tech. Todos os direitos reservados.
