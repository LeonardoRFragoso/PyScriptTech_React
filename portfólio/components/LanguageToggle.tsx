import { motion } from "framer-motion";
import { useLanguage } from "../i18n";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      <div className="relative flex items-center">
        <motion.span
          className={`text-sm font-bold transition-colors duration-300 ${
            language === 'pt' 
              ? 'text-yellow-400' 
              : 'text-white/50 group-hover:text-white/70'
          }`}
          animate={{ opacity: 1 }}
        >
          PT
        </motion.span>
        
        <span className="mx-1.5 text-white/30">/</span>
        
        <motion.span
          className={`text-sm font-bold transition-colors duration-300 ${
            language === 'en' 
              ? 'text-yellow-400' 
              : 'text-white/50 group-hover:text-white/70'
          }`}
          animate={{ opacity: 1 }}
        >
          EN
        </motion.span>
      </div>

      <motion.div
        className="absolute inset-0 rounded-full bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
    </motion.button>
  );
}
