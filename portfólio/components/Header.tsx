import React, { useState, useEffect } from "react";
import { Github, Linkedin, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-yellow-400/20 shadow-2xl shadow-yellow-400/10"
          : "bg-transparent"
      }`}
      role="navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="#home"
              className="group relative text-white font-bold text-2xl tracking-wide transition-all duration-300"
              aria-label="Ir para Home"
            >
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-400 group-hover:from-yellow-400 group-hover:to-amber-500 transition-all duration-300">
                Leonardo Fragoso
              </span>
              
              {/* Decorative sparkle */}
              <motion.div
                className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  rotate: [0, 180, 360],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
              </motion.div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml-10 space-x-8">
            {[
              { href: "#home", label: t.nav.home },
              { href: "#about", label: t.nav.about },
              { href: "#projects", label: t.nav.projects },
              { href: "#contact", label: t.nav.contact },
            ].map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative text-white/80 hover:text-yellow-300 px-4 py-2 text-lg font-medium transition-all duration-300 group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                
                {/* Animated underline */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-300 group-hover:w-full"></span>
                
                {/* Glow effect on hover */}
                <span className="absolute inset-0 rounded-lg bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-all duration-300 blur-xl"></span>
              </motion.a>
            ))}
          </nav>

          {/* Language Toggle & Social Links */}
          <div className="hidden md:flex items-center space-x-6">
            <LanguageToggle />
            <motion.a
              href="https://github.com/LeonardoRFragoso"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group relative p-2 text-white/70 hover:text-yellow-400 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-6 w-6" />
              <span className="absolute inset-0 rounded-lg bg-yellow-400/0 group-hover:bg-yellow-400/20 transition-all duration-300 blur-lg"></span>
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/leonardorfragoso"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group relative p-2 text-white/70 hover:text-yellow-400 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-6 w-6" />
              <span className="absolute inset-0 rounded-lg bg-yellow-400/0 group-hover:bg-yellow-400/20 transition-all duration-300 blur-lg"></span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 text-white/80 hover:text-yellow-400 transition-all duration-300"
              aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-yellow-400/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="px-4 py-6 space-y-4">
              {[
                { href: "#home", label: t.nav.home },
                { href: "#about", label: t.nav.about },
                { href: "#projects", label: t.nav.projects },
                { href: "#contact", label: t.nav.contact },
              ].map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block text-white/80 hover:text-yellow-400 px-4 py-3 text-lg font-medium transition-all duration-300 rounded-lg hover:bg-yellow-400/10"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </motion.a>
              ))}
              
              {/* Mobile Language Toggle & Social Links */}
              <motion.div
                className="flex items-center justify-center space-x-8 pt-4 mt-6 border-t border-yellow-400/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <motion.a
                  href="https://github.com/LeonardoRFragoso"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group relative p-3 text-white/70 hover:text-yellow-400 transition-all duration-300 rounded-full hover:bg-yellow-400/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-6 w-6" />
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/leonardorfragoso"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group relative p-3 text-white/70 hover:text-yellow-400 transition-all duration-300 rounded-full hover:bg-yellow-400/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
                
                <LanguageToggle />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Particles for Header */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * 80,
              opacity: 0.2,
            }}
            animate={{
              x: [null, Math.random() * 20 - 10],
              y: [null, Math.random() * 10 - 5],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.header>
  );
}