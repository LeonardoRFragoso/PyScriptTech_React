import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css'; // Importando os estilos
import logo from '../../assets/img/logopyscript.png'; // Caminho atualizado da logo

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Logo e link para a página inicial */}
        <Link to="/" className={styles.navbarLogo}>
          <img src={logo} alt="Pyscript.tech Logo" className={styles.logoImage} />
        </Link>

        {/* Botão Hamburguer */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>

        {/* Menu de navegação, controlado pelo estado isMenuOpen */}
        <nav className={`${styles.navbarLinks} ${isMenuOpen ? styles.showMenu : ''}`}>
          <Link to="/" className={styles.navbarItem}>Home</Link>
          <Link to="/services" className={styles.navbarItem}>Serviços</Link>
          <Link to="/projects" className={styles.navbarItem}>Projetos</Link>
          <Link to="/contact" className={styles.navbarItem}>Contato</Link>
        </nav>

        {/* Botão de ação (CTA) */}
        <div className={styles.navbarAction}>
          <button className={styles.ctaButton}>Solicite um Orçamento</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
