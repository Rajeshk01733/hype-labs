import React from 'react';
import { Project } from '../data/types';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card border border-white/5 hover:border-purple-500/30 transition-all duration-500 h-full flex flex-col font-lato">
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110 will-change-transform"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase text-white bg-black/60 backdrop-blur-md rounded-full border border-white/10">
            {project.category}
          </span>
        </div>

        {/* Hover Action */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <ExternalLink className="text-white" size={24} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow relative z-10">
        <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-purple-400">{project.client}</p>
        </div>
        <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 grow">
          {project.description}
        </p>
        <div className="h-0.5 w-0 bg-linear-to-r from-purple-500 to-blue-500 transition-all duration-500 group-hover:w-full mt-auto" />
      </div>
    </div>
  );
};

export default ProjectCard;