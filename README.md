# 🐍 PyScript.tech - Website Institucional

<div align="center">

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)]()

**Website institucional e portfólio da PyScript.tech - empresa especializada em desenvolvimento de software sob medida.**

[🌐 Website](https://pyscript.tech) • [Funcionalidades](#-funcionalidades) • [Instalação](#-instalação) • [Contato](#-contato)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Deploy](#-deploy)
- [Contato](#-contato)

---

## 🎯 Sobre o Projeto

Site oficial da **PyScript.tech**, desenvolvido em React com design moderno e futurista. Apresenta os serviços oferecidos, portfólio de projetos e formulário de contato integrado com EmailJS.

### Serviços Oferecidos

- **Software Sob Medida** - Soluções personalizadas para cada necessidade
- **Aplicações Web** - Sistemas web modernos e responsivos
- **Automação & Bots** - Automatização de processos e chatbots

---

## ✨ Funcionalidades

### 🏠 Home Page
| Seção | Descrição |
|-------|-----------|
| **Hero** | Apresentação impactante com CTA |
| **Serviços** | Cards dos principais serviços |
| **Depoimentos** | Carrossel com feedback de clientes |
| **Contato** | Formulário de contato rápido |

### 📄 Páginas
| Página | Descrição |
|--------|-----------|
| **Serviços** | Detalhamento completo dos serviços |
| **Projetos** | Portfólio com filtro por categoria |
| **Contato** | Formulário completo integrado com EmailJS |

### 🎨 Design
| Recurso | Descrição |
|---------|-----------|
| **Responsivo** | Layout adaptável para todos os dispositivos |
| **Glassmorphism** | Efeitos de vidro modernos |
| **Gradientes** | Transições de cores animadas |
| **Animações** | Micro-interações suaves |

---

## 🛠 Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **React 18** | Biblioteca para construção de interfaces |
| **React Router DOM** | Navegação SPA |
| **CSS Modules** | Estilização modular e escopada |
| **EmailJS** | Envio de emails pelo formulário |
| **Slick Carousel** | Carrossel de depoimentos |
| **Create React App** | Tooling e build |

---

## 📁 Estrutura do Projeto

```
PyScriptTech_React/
├── public/
│   └── images/              # Imagens públicas
├── src/
│   ├── assets/              # Imagens e recursos
│   ├── components/
│   │   ├── Navbar/          # Barra de navegação
│   │   ├── Footer/          # Rodapé
│   │   └── ScrollToTop/     # Componente de scroll
│   ├── pages/
│   │   ├── HomePage/        # Página inicial
│   │   │   ├── HeroSection/
│   │   │   ├── ServicesSection/
│   │   │   ├── TestimonialsSection/
│   │   │   └── ContactSection/
│   │   ├── Services/        # Página de serviços
│   │   ├── ProjectsPage/    # Portfólio
│   │   └── ContactPage/     # Página de contato
│   ├── styles/              # Estilos globais
│   ├── App.js               # Componente principal
│   └── index.js             # Entry point
├── package.json
└── README.md
```

---

## 🚀 Instalação

### Pré-requisitos

- **Node.js** 16 ou superior
- **npm** ou **yarn**

### Passos

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

O projeto será executado em: `http://localhost:3000`

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm start` | Servidor de desenvolvimento |
| `npm run build` | Build de produção otimizado |
| `npm test` | Executa os testes |
| `npm run eject` | Ejeta configurações CRA |

---

## ⚙ Configuração

### EmailJS

Para o formulário de contato funcionar, configure as credenciais do EmailJS:

1. Crie uma conta em [emailjs.com](https://www.emailjs.com/)
2. Configure um serviço de email
3. Crie um template de email
4. Atualize as variáveis nos arquivos:
   - `src/pages/ContactPage/ContactPage.js`
   - `src/pages/HomePage/ContactSection/ContactSection.js`

```javascript
// Exemplo de configuração
emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);
```

---

## ☁ Deploy

### Build de Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `build/`.

### Plataformas Recomendadas

- **Netlify** - Deploy automático via GitHub
- **Vercel** - Integração com React
- **GitHub Pages** - Hospedagem gratuita

---

## 📞 Contato

<div align="center">

| Canal | Link |
|-------|------|
| 🌐 **Website** | [pyscript.tech](https://pyscript.tech) |
| 📧 **Email** | contato@pyscript.tech |
| 📱 **WhatsApp** | +55 (21) 98029-2791 |
| 💼 **LinkedIn** | [PyScript.tech](https://linkedin.com/company/pyscripttech) |

</div>

---

## 📄 Licença

**Proprietário** - PyScript.tech. Todos os direitos reservados.

---

## 👤 Desenvolvido por

**Leonardo Fragoso** - Full Stack Developer

- GitHub: [@LeonardoRFragoso](https://github.com/LeonardoRFragoso)
- LinkedIn: [Leonardo Fragoso](https://www.linkedin.com/in/leonardo-fragoso-921b166a/)

---

<div align="center">

**⭐ Gostou do projeto? Entre em contato para solicitar um orçamento!**

</div>
