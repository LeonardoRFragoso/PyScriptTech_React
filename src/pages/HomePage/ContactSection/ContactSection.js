// src/pages/HomePage/ContactSection/ContactSection.js
import React, { useState } from 'react';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para enviar os dados do formulário
    console.log('Formulário enviado:', formData);
    // Resetar o formulário após o envio
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className={styles.contactSection}>
    <h2>Entre em contato</h2>
    <p>Se você está interessado em nossos serviços, não hesite em nos contatar!</p>
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <input
        type="text"
        name="name"
        placeholder="Seu nome"
        value={formData.name}
        onChange={handleChange}
        className={styles.inputField}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Seu e-mail"
        value={formData.email}
        onChange={handleChange}
        className={styles.inputField}
        required
      />
      <textarea
        name="message"
        placeholder="Sua mensagem"
        value={formData.message}
        onChange={handleChange}
        className={styles.textareaField}
        required
      />
      <button type="submit" className={styles.ctaButton}>Enviar</button>
    </form>
  </section>
  
  );
};

export default ContactSection;
