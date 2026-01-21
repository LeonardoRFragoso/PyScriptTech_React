import { useState, useEffect } from "react";
import { ArrowRight, Code2, Sparkles, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n";

export default function Hero() {
  const { t } = useLanguage();
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % t.hero.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [t.hero.roles.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black pt-16 overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(to_right,#fbbf24_0.5px,transparent_0.5px),linear-gradient(to_bottom,#fbbf24_0.5px,transparent_0.5px)] bg-[size:3rem_3rem] animate-pulse-slow"></div>
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-radial from-yellow-400/8 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(251,191,36,0.12),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.08),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.05),transparent_60%)]"></div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/6 w-2 h-2 bg-yellow-400 rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/6 w-3 h-3 border border-yellow-400/50"
          animate={{
            rotate: [0, 360],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-1 h-16 bg-gradient-to-b from-yellow-400/30 to-transparent"
          animate={{
            scaleY: [1, 0.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              i % 3 === 0 ? 'w-2 h-2' : i % 3 === 1 ? 'w-1 h-1' : 'w-1.5 h-1.5'
            } ${
              i % 4 === 0 ? 'bg-yellow-400' : 
              i % 4 === 1 ? 'bg-amber-400' : 
              i % 4 === 2 ? 'bg-yellow-300' : 'bg-amber-300'
            } rounded-full`}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0.3,
            }}
            animate={{
              y: [null, -30, 30, -20],
              x: [null, -20, 20, -10],
              opacity: [0.3, 0.8, 0.4, 0.9, 0.3],
              scale: [1, 1.2, 0.8, 1.1, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Enhanced Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-yellow-400/15 to-amber-500/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 0.8, 1.2, 1],
          opacity: [0.3, 0.7, 0.2, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 0.8, 1.5, 1],
          opacity: [0.4, 0.1, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/6 w-24 h-24 bg-gradient-to-r from-yellow-300/10 to-amber-400/10 rounded-full blur-xl"
        animate={{
          scale: [0.8, 1.3, 1, 1.1],
          opacity: [0.2, 0.5, 0.1, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 min-h-[calc(100vh-8rem)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          
          {/* Profile Image - Left Side */}
          <motion.div
            className="order-1 lg:order-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Animated Ring Background */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 opacity-75 blur-md"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Secondary Glow */}
              <motion.div
                className="absolute -inset-6 rounded-full bg-gradient-to-r from-yellow-400/30 to-amber-500/30 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Image Container */}
              <motion.div
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-yellow-400/50 shadow-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/Leo-Perfil.png"
                  alt="Leonardo Fragoso - Full Stack Developer"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 25%' }}
                />
                
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Star className="w-full h-full text-yellow-400 fill-yellow-400" />
              </motion.div>
              
              <motion.div
                className="absolute top-8 -left-4 w-6 h-6"
                animate={{
                  rotate: [0, -360],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <Sparkles className="w-full h-full text-amber-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            className="order-2 lg:order-2 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            {/* Enhanced Tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-black/60 backdrop-blur-xl border-2 border-yellow-400/30 shadow-2xl hover:border-yellow-400/50 transition-all duration-500 group"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-5 w-5 text-yellow-400 mr-3" />
              </motion.div>
              <div className="relative h-5 w-44 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    className="absolute inset-0 text-sm text-yellow-300 tracking-widest font-bold uppercase"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {t.hero.roles[currentRole % t.hero.roles.length]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <motion.div
                className="ml-3 w-2 h-2 bg-yellow-400 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Name */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-white via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  Leonardo{" "}
                </span>
                <span className="text-yellow-400 font-black">Fragoso</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              <p className="text-xl sm:text-2xl text-white/95 leading-relaxed font-light">
                {t.hero.tagline}{" "}
                <span className="text-yellow-400 font-bold">{t.hero.taglineHighlight}</span>{" "}
                {t.hero.taglineEnd}
              </p>
              
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-yellow-400" />
                <Code2 className="w-6 h-6 text-yellow-400" />
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-yellow-400" />
              </div>
              
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                {t.hero.specialist}{" "}
                <span className="text-yellow-400 font-semibold">{t.hero.techStack}</span>
                <br className="hidden sm:block" />
                {" "}{t.hero.focusOn}{" "}
                <span className="text-yellow-400 font-semibold">{t.hero.focusAreas}</span>
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1 }}
            >
              <motion.a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:via-amber-300 hover:to-yellow-400 transition-all duration-500 shadow-xl hover:shadow-yellow-400/50"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-bold text-black text-lg">{t.hero.viewProjects}</span>
                <ArrowRight className="h-5 w-5 text-black ml-2" />
              </motion.a>
              
              <motion.a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-xl bg-black/70 backdrop-blur-xl border-2 border-yellow-400/40 hover:border-yellow-400/80 hover:bg-yellow-400/10 transition-all duration-500 shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-bold text-white text-lg group-hover:text-yellow-300 transition-colors">
                  {t.hero.getInTouch}
                </span>
                <motion.div
                  className="ml-2 w-2.5 h-2.5 bg-yellow-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Posicionado bem abaixo dos botões */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="flex flex-col items-center space-y-3"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-yellow-400/60 rounded-full flex justify-center relative">
            <motion.div
              className="w-1.5 h-3 bg-yellow-400 rounded-full mt-2"
              animate={{
                y: [0, 10, 0],
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <span className="text-yellow-400/80 text-xs font-medium uppercase tracking-wider">{t.hero.scroll}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}