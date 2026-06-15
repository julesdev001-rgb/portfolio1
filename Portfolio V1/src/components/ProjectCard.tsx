import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-[#111] border border-white/5 overflow-hidden cursor-pointer"
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[#C9A227] flex items-center justify-center text-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <ArrowUpRight size={24} />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-light text-[#F5F5F5] group-hover:text-[#C9A227] transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-xs font-mono text-white/30">{project.year}</span>
        </div>
        
        <p className="text-sm text-white/50 mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest text-white/30 border border-white/10 px-2 py-1 rounded-sm group-hover:border-[#C9A227]/30 group-hover:text-[#C9A227]/70 transition-all duration-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
