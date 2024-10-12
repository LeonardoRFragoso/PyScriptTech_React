// src/pages/HomePage/TestimonialsSection/TestimonialsSection.js
import React from 'react';
import styles from './TestimonialsSection.module.css'; // Importa os estilos como módulo
import avatar1 from '../../../assets/img/avatar1.jpg'; // Caminho para a imagem do avatar
import avatar2 from '../../../assets/img/avatar2.jpg'; // Caminho para a imagem do avatar
import avatar3 from '../../../assets/img/avatar3.jpg'; // Caminho para a imagem do avatar

const TestimonialsSection = () => {
  return (
    <section className={`${styles.testimonialsSection} ${styles.sectionWithNeonBorder}`}>
      <h2 className={styles.testimonialsTitle}>O que nossos clientes dizem</h2> {/* Título da seção com classe CSS correta */}
      <div className={styles.testimonialsContainer}>
        {/* Testimonial 1 */}
        <div className={styles.testimonialItem}>
          <img src={avatar1} alt="Cliente 1" className={styles.testimonialAvatar} />
          <blockquote>
            "A Pyscript.tech transformou nossa presença online! O site ficou incrível!" - Cliente Satisfeito
          </blockquote>
        </div>
        {/* Testimonial 2 */}
        <div className={styles.testimonialItem}>
          <img src={avatar2} alt="Cliente 2" className={styles.testimonialAvatar} />
          <blockquote>
            "Os bots criados pela Pyscript.tech otimizaram nossos processos internos, uma verdadeira revolução!" - Outro Cliente
          </blockquote>
        </div>
        {/* Testimonial 3 */}
        <div className={styles.testimonialItem}>
          <img src={avatar3} alt="Cliente 3" className={styles.testimonialAvatar} />
          <blockquote>
            "Trabalhar com a Pyscript.tech foi uma experiência incrível! Altamente recomendados!" - Cliente Feliz
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
