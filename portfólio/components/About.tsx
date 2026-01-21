import React from "react";
import { Code2, Database, Globe, Server, BookOpen, Sparkles, Zap, Star, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n";

const skillIcons = [<Code2 />, <Database />, <Globe />, <Server />, <Code2 />, <Server />];
const skillFeatured = [true, true, true, false, true, false];

const educationLinks = [
  "https://portal.estacio.br",
  "https://www.rocketseat.com.br",
  "https://www.rocketseat.com.br",
  "https://pycode.com.br",
  "https://www.rocketseat.com.br",
  "https://cubos.academy",
];

const SkillCard = ({ 
  icon, 
  name, 
  description, 
  level,
  featured = false 
}: { 
  icon: JSX.Element; 
  name: string; 
  description: string;
  level?: string;
  featured?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className={`group relative p-8 rounded-2xl transition-all duration-500 ${
      featured 
        ? 'bg-gradient-to-br from-black/90 via-yellow-400/5 to-black/90 border-2 border-yellow-400/30' 
        : 'bg-black/60 border border-white/10'
    } backdrop-blur-md shadow-2xl hover:shadow-yellow-400/20`}
  >
    {/* Level Badge */}
    {level && (
      <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-bold rounded-full">
        {level}
      </div>
    )}

    {/* Icon with Glow Effect */}
    <div className="relative mb-6">
      <motion.div
        className="w-16 h-16 rounded-xl bg-gradient-to-r from-yellow-400/20 to-amber-500/20 flex items-center justify-center group-hover:from-yellow-400/30 group-hover:to-amber-500/30 transition-colors duration-500"
        whileHover={{ rotate: 5 }}
      >
        {React.cloneElement(icon, { 
          className: "h-8 w-8 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" 
        })}
      </motion.div>
      
      {/* Sparkle Effect */}
      <motion.div
        className="absolute -top-1 -right-1"
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
        <Sparkles className="w-4 h-4 text-yellow-400/70" />
      </motion.div>
    </div>

    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
      {name}
    </h3>
    <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300 text-sm">
      {description}
    </p>

    {/* Hover Effect Border */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/10 to-amber-500/10 blur-xl"></div>
    </div>
  </motion.div>
);

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  featured = false,
  badgeLabel,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
  featured?: boolean;
  badgeLabel?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className={`group relative p-8 rounded-2xl transition-all duration-500 ${
      featured 
        ? 'bg-gradient-to-br from-black/90 via-yellow-400/5 to-black/90 border-2 border-yellow-400/30' 
        : 'bg-black/60 border border-white/10'
    } backdrop-blur-md shadow-2xl hover:shadow-yellow-400/20`}
  >
    {/* Featured Badge */}
    {featured && (
      <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-bold rounded-full">
        {badgeLabel}
      </div>
    )}

    {/* Icon */}
    <div className="relative mb-6">
      <motion.div
        className="w-16 h-16 rounded-xl bg-gradient-to-r from-yellow-400/20 to-amber-500/20 flex items-center justify-center group-hover:from-yellow-400/30 group-hover:to-amber-500/30 transition-colors duration-500"
        whileHover={{ rotate: 5 }}
      >
        <TrendingUp className="h-8 w-8 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
      </motion.div>
    </div>

    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
      {title}
    </h4>
    <p className="text-yellow-400 font-semibold mb-1">{company}</p>
    <p className="text-white/60 text-sm mb-3">{period}</p>
    <p className="text-white/70 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const EducationCard = ({
  degree,
  institution,
  link,
  year,
  description,
  certificate,
  featured = false,
  badgeLabel,
}: {
  degree: string;
  institution: string;
  link: string;
  year: string;
  description?: string;
  certificate?: string;
  featured?: boolean;
  badgeLabel?: string;
}) => (
  <motion.a
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -8, scale: 1.02 }}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative block p-8 rounded-2xl transition-all duration-500 ${
      featured 
        ? 'bg-gradient-to-br from-black/90 via-yellow-400/5 to-black/90 border-2 border-yellow-400/30' 
        : 'bg-black/60 border border-white/10'
    } backdrop-blur-md shadow-2xl hover:shadow-yellow-400/20`}
  >
    {/* Featured Badge */}
    {featured && (
      <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-bold rounded-full">
        {badgeLabel}
      </div>
    )}

    {/* Icon with Animation */}
    <div className="relative mb-6">
      <motion.div
        className="w-16 h-16 rounded-xl bg-gradient-to-r from-yellow-400/20 to-amber-500/20 flex items-center justify-center group-hover:from-yellow-400/30 group-hover:to-amber-500/30 transition-colors duration-500"
        whileHover={{ rotate: 5 }}
      >
        {featured ? (
          <Award className="h-8 w-8 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
        ) : (
          <BookOpen className="h-8 w-8 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
        )}
      </motion.div>
      
      {/* Star Effect */}
      <motion.div
        className="absolute -top-1 -right-1"
        animate={{
          scale: [0.8, 1.2, 0.8],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2,
        }}
      >
        <Star className="w-4 h-4 text-yellow-400/70" />
      </motion.div>
    </div>

    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
      {degree}
    </h4>
    <p className="text-yellow-400 font-semibold mb-1 group-hover:text-yellow-300 transition-colors duration-300">
      {institution}
    </p>
    <p className="text-white/60 text-sm mb-2">{year}</p>
    
    {description && (
      <p className="text-white/70 text-sm mb-2 leading-relaxed">{description}</p>
    )}
    
    {certificate && (
      <p className="text-yellow-400/80 text-xs font-medium">{certificate}</p>
    )}

    {/* Hover Effect */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/10 to-amber-500/10 blur-xl"></div>
    </div>
  </motion.a>
);

export default function About() {
  const { t } = useLanguage();
  
  const skillsData = t.skillsData.map((skill, index) => ({
    icon: skillIcons[index],
    name: skill.name,
    description: skill.description,
    level: skill.level,
    featured: skillFeatured[index],
  }));

  const experienceData = t.experienceData;
  const educationData = t.educationData.map((edu, index) => ({
    ...edu,
    link: educationLinks[index],
  }));

  return (
    <section id="about" className="relative py-20 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-radial from-yellow-400/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.06),transparent_50%)]"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-3">
          <div className="h-full w-full bg-[linear-gradient(to_right,#fbbf24_0.3px,transparent_0.3px),linear-gradient(to_bottom,#fbbf24_0.3px,transparent_0.3px)] bg-[size:4rem_4rem] animate-pulse-slow"></div>
        </div>
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-full blur-2xl"
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

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 ${
              i % 2 === 0 ? 'bg-yellow-400' : 'bg-amber-400'
            } rounded-full`}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0.4,
            }}
            animate={{
              y: [null, -20, 20],
              opacity: [0.4, 0.8, 0.4],
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
            {t.about.title}
          </motion.h2>
          
          {/* Decorative Line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <motion.p
            className="text-xl text-white/80 max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 font-bold text-2xl">
              Desenvolvedor Full Stack
            </span>{" "}
            com sólida experiência em{" "}
            <span className="text-yellow-400 font-semibold">gestão de TI e infraestrutura</span>. 
            Atualmente{" "}
            <span className="text-yellow-400 font-semibold">Desenvolvedor de Sistemas Junior</span> na iTracker Logística Inteligente,
            com experiência anterior como{" "}
            <span className="text-yellow-400 font-semibold">Gerente de TI</span> liderando equipes técnicas.
            Especializado em{" "}
            <span className="text-yellow-400 font-semibold">Python, Django, Flask, FastAPI e React</span>, 
            com foco em{" "}
            <span className="text-yellow-400 font-semibold">automação de processos, APIs REST e extração de dados</span>. 
            Combino{" "}
            <span className="text-yellow-400 font-semibold">visão estratégica de negócios com habilidades técnicas avançadas</span>{" "}
            para criar soluções completas e escaláveis, desde back-end robusto até interfaces modernas e intuitivas.
          </motion.p>

          {/* Stats Counter */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { number: "20+", label: "Projetos Entregues" },
              { number: "3+", label: "Anos em TI" },
              { number: "6", label: "Certificações" },
              { number: "10+", label: "Tecnologias" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-black/40 border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.span
                  className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                >
                  {stat.number}
                </motion.span>
                <p className="text-white/70 mt-2 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="space-y-20">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <motion.h3
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {t.about.experience.title}
              </motion.h3>
              
              <div className="flex items-center justify-center space-x-6 mb-8">
                <motion.div
                  className="w-12 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <TrendingUp className="w-6 h-6 text-yellow-400" />
                <motion.div
                  className="w-12 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ExperienceCard {...exp} badgeLabel={t.about.experience.current} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <motion.h3
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {t.about.skills.title}
              </motion.h3>
              
              <div className="flex items-center justify-center space-x-6 mb-8">
                <motion.div
                  className="w-12 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Zap className="w-6 h-6 text-yellow-400" />
                </motion.div>
                <motion.div
                  className="w-12 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <SkillCard {...skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <motion.h3
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {t.about.education.title}
              </motion.h3>
              
              <div className="flex items-center justify-center space-x-6 mb-8">
                <motion.div
                  className="w-12 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Award className="w-6 h-6 text-yellow-400" />
                </motion.div>
                <motion.div
                  className="w-12 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <EducationCard {...edu} badgeLabel={t.about.education.featured} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative Divider */}
        <motion.div
          className="my-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <motion.div
              className="w-3/4 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: '75%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}