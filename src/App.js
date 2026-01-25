// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar/navbar';
import HomePage from './pages/HomePage/HomePage';
import ServicesPage from './pages/Services/ServicesPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import BlogPage from './pages/BlogPage/BlogPage';
import Footer from './components/Footer/footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="app-container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
