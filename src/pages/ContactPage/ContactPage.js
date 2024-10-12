// src/pages/ContactPage/ContactPage.js
import React from 'react';
import './ContactPage.css';  // Certifique-se de que o caminho está correto
import whatsappIcon from '../../assets/Icons/whatsapp.png';  // Caminho correto para a imagem do WhatsApp
import gmailIcon from '../../assets/Icons/gmail.png';  // Caminho correto para a imagem do Gmail

const ContactPage = () => {
  return (
    <div className="contactPage">  {/* Certifique-se de usar a classe CSS correta */}
      <h1 className="contactTitle">Contato</h1>
      <p className="contactEmail">
        Entre em contato através do formulário abaixo ou clicando no ícone do Gmail para nos enviar um email.
      </p>

      <form className="contactForm">
        <div className="formGroup">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="formGroup">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="formGroup">
          <label htmlFor="phone">Telefone:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>

        <div className="formGroup">
          <label htmlFor="description">Descrição do Projeto:</label>
          <textarea id="description" name="description" rows="5" required />
        </div>

        <button type="submit" className="submitButton">Enviar</button>
      </form>

      <div className="whatsappSection">
        {/* Ícone do WhatsApp */}
        <a href="https://wa.me/5521980292791" target="_blank" rel="noopener noreferrer" className="whatsappButton">
          <img src={whatsappIcon} alt="WhatsApp" className="whatsappIcon" />
          Fale pelo WhatsApp
        </a>

        {/* Ícone do Gmail */}
        <a href="mailto:leonardorfragoso@gmail.com" target="_blank" rel="noopener noreferrer" className="gmailButton">
          <img src={gmailIcon} alt="Enviar Email" className="gmailIcon" />
          Enviar Email
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
