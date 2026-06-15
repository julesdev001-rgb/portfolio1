import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const categories = ['Tout', 'Divertissement', 'Entreprise', 'Éducation', 'Marketing', 'Réseaux sociaux', 'Scripts'];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Tout');

  const filteredProjects = activeFilter === 'Tout' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-[#F5F5F5] mb-4">Portfolio</h2>
            <div className="w-12 h-[1px] bg-[#C9A227]"></div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs uppercase tracking-widest transition-all duration-300 px-4 py-2 rounded-full border ${
                  activeFilter === cat 
                    ? 'bg-[#C9A227] border-[#C9A227] text-black' 
                    : 'border-white/10 text-white/40 hover:border-white/30 hover:text-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
