// src/components/Footer/footer.js
import React from 'react';
import styles from './footer.module.css'; // Importando os estilos como um módulo
import gmailIcon from '../../assets/Icons/gmail.png'; // Caminho ajustado para o diretório src
import linkedinIcon from '../../assets/Icons/linkedin-logo.png';
import instagramIcon from '../../assets/Icons/instagram-icon.png';
import whatsappIcon from '../../assets/Icons/whatsapp.png';
import githubIcon from '../../assets/Icons/github.png'; // Novo ícone do GitHub

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>&copy; {new Date().getFullYear()} Pyscript.tech. Todos os direitos reservados.</p>
        
        <div className={styles.footerLinks}>
          <a href="/" className={styles.footerLink}>Home</a>
          <a href="/services" className={styles.footerLink}>Serviços</a>
          <a href="/projects" className={styles.footerLink}>Projetos</a>
          <a href="/contact" className={styles.footerLink}>Contato</a>
        </div>

        <div className={styles.footerSocials}>
          <a href="mailto:leonardorfragoso@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
            <img src={gmailIcon} alt="Gmail" />
          </a>
          <a href="https://www.linkedin.com/in/leonardo-fragoso-921b166a/" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/pyscript.tech/" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://wa.me/+5521980292791" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a href="https://github.com/LeonardoRFragoso" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;