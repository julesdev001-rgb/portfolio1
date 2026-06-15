import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-6 bg-[#0A0A0A]">
      <div className="max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-[#F5F5F5] leading-tight mb-8"
        >
          Création de contenu pour les entreprises qui veulent être <span className="text-[#C9A227] italic">remarquées</span>.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Publications, campagnes, scripts et contenus conçus pour générer de l'attention, de l'engagement et de la crédibilité.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2">Défiler</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-[#C9A227]"
        >
          <ChevronDown size={20} strokeWidth={1} />
        </motion.div>
      </motion.div>

      {/* Background subtle glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#C9A227]/5 blur-[120px] rounded-full" />
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#C9A227]/5 blur-[120px] rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
