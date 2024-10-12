// src/components/Navbar/navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css'; // Importando o CSS Module

// Caminho atualizado da logo
import logo from '../../assets/img/logopyscript.png'; 

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Link para a página inicial com a logo */}
        <Link to="/" className={styles.navbarLogo}>
          <img src={logo} alt="Pyscript.tech Logo" className={styles.logoImage} />
        </Link>
        <nav className={styles.navbarLinks}>
          {/* Links de navegação */}
          <Link to="/" className={styles.navbarItem}>Home</Link>
          <Link to="/services" className={styles.navbarItem}>Serviços</Link>
          <Link to="/projects" className={styles.navbarItem}>Projetos</Link>
          <Link to="/contact" className={styles.navbarItem}>Contato</Link>
        </nav>
        <div className={styles.navbarAction}>
          {/* Botão de ação */}
          <button className={styles.ctaButton}>Solicite um Orçamento</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
