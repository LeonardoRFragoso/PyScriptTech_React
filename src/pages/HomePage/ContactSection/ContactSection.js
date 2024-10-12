// src/pages/HomePage/ContactSection/ContactSection.js
import React, { useState } from 'react';
import styles from './ContactSection.module.css';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Adicionando o campo telefone
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send('service_mpvslhm', 'template_EmailJS', {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone, // Enviando o telefone para o EmailJS
      user_message: formData.message,
    }, 'Wok3mV-Bl-3UNJa9I')
    .then((response) => {
      console.log('Email enviado com sucesso!', response.status, response.text);
      setSuccessMessage('Mensagem enviada com sucesso!');
      setErrorMessage('');
      // Resetar o formulário após o envio
      setFormData({ name: '', email: '', phone: '', message: '' }); // Resetando o campo de telefone
    }, (err) => {
      console.error('Falha ao enviar email:', err);
      setErrorMessage('Falha ao enviar a mensagem. Tente novamente mais tarde.');
      setSuccessMessage('');
    });
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
        <input
          type="tel" // Definindo o tipo como telefone
          name="phone"
          placeholder="Seu telefone"
          value={formData.phone}
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
      {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </section>
  );
};

export default ContactSection;
