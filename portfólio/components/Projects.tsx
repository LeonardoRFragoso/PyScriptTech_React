import { useState } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n";

interface Project {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  saas?: boolean;
}

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    // SaaS em Produção - Primeiro na lista
    {
      title: t.projects.projectsList[6].title,
      description: t.projects.projectsList[6].description,
      images: [
        "/images/proflow/proflow.png",
        "/images/proflow/proflow2.png",
        "/images/proflow/proflow3.png"
      ],
      tags: ["Vue.js", "TypeScript", "Node.js", "PostgreSQL", "IA", "Stripe"],
      demo: "https://www.proflow.pro/",
      featured: true,
      saas: true,
    },
    {
      title: t.projects.projectsList[7].title,
      description: t.projects.projectsList[7].description,
      images: [
        "/images/base/base1.png",
        "/images/base/base2.png",
        "/images/base/base3.png",
        "/images/base/base4.png",
        "/images/base/base5.png",
        "/images/base/base6.png"
      ],
      tags: ["React", "TypeScript", "Node.js", "Mercado Pago", "PWA"],
      demo: "https://basecorporativa.store/",
      featured: true,
      saas: true,
    },
    // Sistema de Monitoramento TVs ICTSI
    {
      title: t.projects.projectsList[5].title,
      description: t.projects.projectsList[5].description,
      images: [
        "/images/Tvs-ICTSI/1.jpg",
        "/images/Tvs-ICTSI/2.jpg",
        "/images/Tvs-ICTSI/3.jpg",
        "/images/Tvs-ICTSI/4.jpg",
        "/images/Tvs-ICTSI/5.jpg",
        "/images/Tvs-ICTSI/6.jpg",
        "/images/Tvs-ICTSI/7.jpg",
        "/images/Tvs-ICTSI/8.jpg",
        "/images/Tvs-ICTSI/9.jpg"
      ],
      tags: ["Python", "Django", "JavaScript", "PostgreSQL"],
      github: "https://github.com/LeonardoRFragoso/Tvs-ICTSI",
      featured: true,
    },
    // Projetos em Destaque
    {
      title: t.projects.projectsList[8].title,
      description: t.projects.projectsList[8].description,
      images: [
        "/images/medflow/medflow1.png",
        "/images/medflow/medflow2.png",
        "/images/medflow/medflow3.png",
        "/images/medflow/medflow4.png",
        "/images/medflow/medflow5.png",
        "/images/medflow/medflow6.png",
        "/images/medflow/medflow7.png",
        "/images/medflow/medflow8.png"
      ],
      tags: ["Laravel 11", "Vue 3", "PostgreSQL", "API REST"],
      github: "https://github.com/LeonardoRFragoso/MedFlow_Finance",
      featured: true,
    },
    {
      title: t.projects.projectsList[9].title,
      description: t.projects.projectsList[9].description,
      images: [
        "/images/SaaS/1SaaS - 1.png",
        "/images/SaaS/1SaaS - 2.png",
        "/images/SaaS/1SaaS - 3.png",
        "/images/SaaS/1SaaS - 4.png",
        "/images/SaaS/1SaaS - 5.png",
        "/images/SaaS/1SaaS - 6.png",
        "/images/SaaS/1SaaS - 7.png"
      ],
      tags: ["Python", "FastAPI", "React", "GPT-4", "Docker"],
      github: "https://github.com/LeonardoRFragoso/SaaS",
      featured: true,
    },
    {
      title: t.projects.projectsList[10].title,
      description: t.projects.projectsList[10].description,
      images: [
        "/images/APM/APM1.png",
        "/images/APM/APM2.png",
        "/images/APM/APM3.png",
        "/images/APM/APM4.png",
        "/images/APM/APM5.png",
        "/images/APM/APM6.png",
        "/images/APM/APM7.png"
      ],
      tags: ["Java 21", "Spring Boot", "WebSocket", "Clean Architecture"],
      github: "https://github.com/LeonardoRFragoso/Plataforma-de-Monitoramento-de-Sistemas-e-APIs",
      featured: true,
    },
    {
      title: t.projects.projectsList[11].title,
      description: t.projects.projectsList[11].description,
      images: [
        "/images/FinanceControl/financecontrol1.png",
        "/images/FinanceControl/financecontrol2.png",
        "/images/FinanceControl/financecontrol5.png",
        "/images/FinanceControl/financecontrol6.png"
      ],
      tags: ["React", "Django", "Python", "SQLite"],
      github: "https://github.com/LeonardoRFragoso/gerenciador-financeiro",
      featured: true,
    },
    // Outros projetos
    {
      title: t.projects.projectsList[4].title,
      description: t.projects.projectsList[4].description,
      images: [
        "/images/Andaimes Pini/pini1.png",
        "/images/Andaimes Pini/pini2.png",
        "/images/Andaimes Pini/pini3.png",
        "/images/Andaimes Pini/pini4.png",
        "/images/Andaimes Pini/pini5.png",
        "/images/Andaimes Pini/Pini6.png",
        "/images/Andaimes Pini/Pini7.png",
        "/images/Andaimes Pini/pini8.png",
        "/images/Andaimes Pini/pini9.png",
        "/images/Andaimes Pini/Pini10.png",
        "/images/Andaimes Pini/pini11.png",
        "/images/Andaimes Pini/pini12.png",
        "/images/Andaimes Pini/pini13.png",
        "/images/Andaimes Pini/pini14.png",
        "/images/Andaimes Pini/pini15.png"
      ],
      tags: ["Flask", "React", "PostgreSQL"],
      github: "https://github.com/LeonardoRFragoso/AndaimesPini_Project",
      featured: true,
    },
    // Projetos Corporativos - Por último
    {
      title: t.projects.projectsList[0].title,
      description: t.projects.projectsList[0].description,
      images: [
        "/images/Pátio/1.jpg",
        "/images/Pátio/2.jpg",
        "/images/Pátio/3.jpg",
        "/images/Pátio/4.jpg",
        "/images/Pátio/5.jpg",
        "/images/Pátio/6.jpg"
      ],
      tags: ["Python", "Django", "JavaScript", "PostgreSQL"],
      github: "https://github.com/LeonardoRFragoso/Patio",
    },
    {
      title: t.projects.projectsList[1].title,
      description: t.projects.projectsList[1].description,
      images: [
        "/images/não-conformidade/1.jpg",
        "/images/não-conformidade/2.jpg",
        "/images/não-conformidade/3.jpg",
        "/images/não-conformidade/4.jpg",
        "/images/não-conformidade/5.jpg",
        "/images/não-conformidade/6.jpg",
        "/images/não-conformidade/7.jpg",
        "/images/não-conformidade/8.jpg"
      ],
      tags: ["Django", "Python", "JavaScript", "PostgreSQL"],
      github: "https://github.com/LeonardoRFragoso/nao-conformidade",
    },
    {
      title: t.projects.projectsList[2].title,
      description: t.projects.projectsList[2].description,
      images: [
        "/images/GR/1.jpg",
        "/images/GR/2.jpg",
        "/images/GR/3.jpg",
        "/images/GR/4.jpg",
        "/images/GR/5.jpg",
        "/images/GR/6.jpg",
        "/images/GR/7.jpg",
        "/images/GR/8.jpg",
        "/images/GR/9.jpg",
        "/images/GR/10.jpg",
        "/images/GR/11.jpg",
        "/images/GR/12.jpg"
      ],
      tags: ["Python", "Django", "JavaScript", "PostgreSQL"],
      github: "https://github.com/LeonardoRFragoso/GR",
    },
    {
      title: t.projects.projectsList[3].title,
      description: t.projects.projectsList[3].description,
      images: [
        "/images/dash-multas/1.jpg",
        "/images/dash-multas/2.jpg",
        "/images/dash-multas/3.jpg",
        "/images/dash-multas/4.jpg",
        "/images/dash-multas/5.jpg",
        "/images/dash-multas/6.jpg",
        "/images/dash-multas/7.jpg",
        "/images/dash-multas/8.jpg",
        "/images/dash-multas/9.jpg"
      ],
      tags: ["Streamlit", "Python", "Google Drive API", "Data Analysis"],
      github: "https://github.com/LeonardoRFragoso/DashboardMultas",
    },
  ];

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-yellow-400/3 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,191,36,0.04),transparent_50%)]"></div>
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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
            {t.projects.title}
          </motion.h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {t.projects.subtitle}{" "}
            <span className="text-yellow-400 font-semibold">{t.projects.subtitleHighlight}</span>
          </p>
          
          {/* Decorative line */}
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1, 
              transition: { 
                duration: 0.8, 
                staggerChildren: 0.2 
              } 
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{ 
                hidden: { opacity: 0, y: 50 }, 
                visible: { opacity: 1, y: 0 } 
              }}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 ${
                project.featured 
                  ? 'bg-gradient-to-br from-black/90 via-yellow-400/5 to-black/90 border-2 border-yellow-400/30' 
                  : 'bg-black/60 border border-white/10'
              } backdrop-blur-md shadow-2xl hover:shadow-yellow-400/20`}
              whileHover={{ scale: 1.02 }}
            >
              {/* Featured/SaaS Badge */}
              {project.saas ? (
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <div className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs font-bold rounded-full flex items-center gap-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                    </span>
                    {t.projects.saas}
                  </div>
                </div>
              ) : project.featured && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-bold rounded-full">
                  {t.projects.featured}
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  onLoad={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '1';
                  }}
                  style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                
                {/* Image counter */}
                {project.images.length > 1 && (
                  <div className="absolute top-4 right-4 px-2 py-1 bg-black/70 text-white text-xs rounded-lg backdrop-blur-sm">
                    +{project.images.length - 1} {t.projects.photos}
                  </div>
                )}

                {/* View Gallery Button */}
                <button
                  onClick={() => openModal(project)}
                  className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <div className="flex items-center space-x-2 px-4 py-2 bg-yellow-400/90 text-black font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="h-5 w-5" />
                    <span>{t.projects.viewGallery}</span>
                  </div>
                </button>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-400/10 text-yellow-300 border border-yellow-400/20 hover:bg-yellow-400/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors group/link"
                      aria-label={`Repositório no GitHub para ${project.title}`}
                    >
                      <Github className="h-5 w-5 group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{t.projects.code}</span>
                    </a>
                  )}
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 transition-colors group/link ${
                        project.saas 
                          ? 'px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold rounded-lg hover:from-green-300 hover:to-emerald-400' 
                          : 'text-white hover:text-yellow-400'
                      }`}
                    >
                      <ExternalLink className="h-5 w-5 group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{t.projects.visitSite}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for Image Gallery */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] bg-black/80 rounded-2xl border border-yellow-400/30 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-30 w-10 h-10 flex items-center justify-center bg-black/70 hover:bg-yellow-400 text-white hover:text-black rounded-full transition-all duration-300"
              >
                ×
              </button>

              {/* Image Display */}
              <div className="relative">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                  className="w-full h-96 object-cover"
                />
                
                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/70 hover:bg-yellow-400 text-white hover:text-black rounded-full transition-all duration-300"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/70 hover:bg-yellow-400 text-white hover:text-black rounded-full transition-all duration-300"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/70 text-white rounded-lg backdrop-blur-sm">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-400">
                  {selectedProject.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                {/* Image Thumbnails */}
                {selectedProject.images.length > 1 && (
                  <div className="flex space-x-2 overflow-x-auto py-2">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'border-yellow-400 scale-110' 
                            : 'border-white/20 hover:border-yellow-400/50'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}