import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import logo from '../../assets/img/logopyscript.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fechar o menu se clicar fora dele
  useEffect(() => {
    const closeMenu = (e) => {
      if (isMenuOpen && !e.target.closest(`.${styles.navbarContainer}`)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [isMenuOpen]);

  // Ajustar o deslocamento do conteúdo com base na altura da navbar
  useEffect(() => {
    const navbarElement = document.querySelector(`.${styles.navbar}`);
    if (navbarElement) {
      setNavbarHeight(navbarElement.offsetHeight);
    }
  }, []);

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.navbarContainer}>
          {/* Logo e link para a página inicial */}
          <Link to="/" className={styles.navbarLogo}>
            <img src={logo} alt="Pyscript.tech Logo" className={styles.logoImage} />
          </Link>

          {/* Links de navegação para desktop */}
          <nav className={styles.navbarLinks}>
            <Link to="/" className={styles.navbarItem}>Home</Link>
            <Link to="/services" className={styles.navbarItem}>Serviços</Link>
            <Link to="/projects" className={styles.navbarItem}>Projetos</Link>
            <Link to="/contact" className={styles.navbarItem}>Contato</Link>
          </nav>

          {/* Botão Hamburguer, só aparece em telas menores */}
          <button className={styles.hamburger} onClick={toggleMenu}>
            ☰
          </button>

          {/* Menu de navegação para dispositivos móveis, controlado pelo estado isMenuOpen */}
          <nav className={`${styles.navbarLinksMobile} ${isMenuOpen ? styles.showMenu : ''}`}>
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

      {/* Aplicar margem ao conteúdo para evitar que seja cortado pela navbar */}
      <div style={{ marginTop: navbarHeight }} className="content-section">
        {/* Conteúdo da página abaixo da navbar */}
      </div>
    </>
  );
};

export default Navbar;
