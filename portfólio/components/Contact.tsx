import React from "react";
import { Mail, Github, Linkedin, Send, MessageCircle, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n";

const ContactCard = ({ 
  icon, 
  title, 
  description, 
  action, 
  href, 
  target, 
  featured = false,
  badgeLabel 
}: {
  icon: JSX.Element;
  title: string;
  description: string;
  action: string;
  href: string;
  target?: string;
  featured?: boolean;
  badgeLabel?: string;
}) => (
  <motion.a
    href={href}
    target={target}
    rel={target ? "noopener noreferrer" : undefined}
    className={`group relative block p-8 rounded-2xl transition-all duration-500 ${
      featured 
        ? 'bg-gradient-to-br from-black/90 via-yellow-400/5 to-black/90 border-2 border-yellow-400/30' 
        : 'bg-black/60 border border-white/10'
    } backdrop-blur-md shadow-2xl hover:shadow-yellow-400/25 transform hover:-translate-y-2`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    aria-label={`${action} - ${title}`}
  >
    {/* Featured Badge */}
    {featured && (
      <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-bold rounded-full">
        {badgeLabel}
      </div>
    )}

    {/* Icon with Premium Effects */}
    <div className="relative mb-6">
      <motion.div
        className="w-20 h-20 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-amber-500/20 flex items-center justify-center group-hover:from-yellow-400/30 group-hover:to-amber-500/30 transition-colors duration-500"
        whileHover={{ rotate: 8 }}
      >
        {React.cloneElement(icon, { 
          className: "h-10 w-10 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" 
        })}
      </motion.div>
      
      {/* Sparkle Effect */}
      <motion.div
        className="absolute -top-2 -right-2"
        animate={{
          scale: [0, 1, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2,
        }}
      >
        <Sparkles className="w-5 h-5 text-yellow-400/80" />
      </motion.div>
    </div>

    {/* Content */}
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
        {description}
      </p>
      
      {/* Call to Action */}
      <div className="flex items-center space-x-2 pt-2">
        <span className="text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors duration-300">
          {action}
        </span>
        <motion.div
          animate={{
            x: [0, 4, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Send className="w-4 h-4 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
        </motion.div>
      </div>
    </div>

    {/* Hover Glow Effect */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/10 to-amber-500/10 blur-xl"></div>
    </div>
  </motion.a>
);

export default function Contact() {
  const { t } = useLanguage();
  
  const contactMethods = [
    {
      icon: <Mail />,
      title: t.contact.email.title,
      description: t.contact.email.description,
      action: t.contact.email.action,
      href: "mailto:leonardorfragoso@gmail.com",
      featured: true,
    },
    {
      icon: <Github />,
      title: t.contact.github.title,
      description: t.contact.github.description,
      action: t.contact.github.action,
      href: "https://github.com/LeonardoRFragoso",
      target: "_blank",
    },
    {
      icon: <Linkedin />,
      title: t.contact.linkedin.title,
      description: t.contact.linkedin.description,
      action: t.contact.linkedin.action,
      href: "https://www.linkedin.com/in/leonardo-fragoso-921b166a/",
      target: "_blank",
      featured: true,
    },
  ];

  return (
    <section id="contact" className="relative py-20 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-radial from-yellow-400/6 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(251,191,36,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(251,191,36,0.08),transparent_50%)]"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-3">
          <div className="h-full w-full bg-[linear-gradient(to_right,#fbbf24_0.3px,transparent_0.3px),linear-gradient(to_bottom,#fbbf24_0.3px,transparent_0.3px)] bg-[size:4rem_4rem] animate-pulse-slow"></div>
        </div>
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-yellow-400/15 to-amber-500/15 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-amber-400/12 to-yellow-500/12 rounded-full blur-xl"
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              i % 3 === 0 ? 'w-1.5 h-1.5' : i % 3 === 1 ? 'w-1 h-1' : 'w-2 h-2'
            } ${
              i % 2 === 0 ? 'bg-yellow-400' : 'bg-amber-400'
            } rounded-full`}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0.4,
            }}
            animate={{
              y: [null, -25, 25],
              x: [null, -15, 15],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-400 to-amber-500 mb-6"
            style={{
              filter: "drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))",
            }}
          >
            {t.contact.title}
          </motion.h2>
          
          {/* Decorative Line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t.contact.subtitle}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 font-bold">
                {t.contact.subtitleHighlight}
              </span>
            </p>
            
            {/* Decorative Elements */}
            <div className="flex items-center justify-center space-x-6 mt-8">
              <motion.div
                className="w-12 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <MessageCircle className="w-6 h-6 text-yellow-400" />
              </motion.div>
              <motion.div
                className="w-12 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ContactCard {...method} badgeLabel={t.contact.preferred} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.p
            className="text-lg text-white/70 max-w-2xl mx-auto"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {t.contact.footer}{" "}
            <span className="text-yellow-400 font-semibold">{t.contact.opportunities}</span> {t.contact.and}{" "}
            <span className="text-yellow-400 font-semibold">{t.contact.collaborations}</span>
          </motion.p>
        </motion.div>

        {/* Decorative Bottom Element */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="relative"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Star className="w-8 h-8 text-yellow-400/50" />
            <motion.div
              className="absolute inset-0"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Star className="w-8 h-8 text-yellow-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}