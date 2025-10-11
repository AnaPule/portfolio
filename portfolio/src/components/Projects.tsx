// src/sections/Projects.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Capstone Project',
    description: 'A comprehensive full-stack application showcasing advanced development skills and innovative solutions.',
    status: 'Completed',
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    links: {
      live: '#',
      github: '#'
    }
  },
  {
    title: 'Daily Digest',
    description: 'A news aggregation platform that curates personalized content based on user preferences.',
    status: 'Completed',
    technologies: ['Next.js', 'Python', 'PostgreSQL', 'Tailwind'],
    links: {
      live: '#',
      github: '#'
    }
  },
  {
    title: 'Bookmark API',
    description: 'RESTful API for managing bookmarks with user authentication and advanced filtering.',
    status: 'In Progress',
    technologies: ['Express.js', 'MongoDB', 'JWT', 'Docker'],
    links: {
      live: '#',
      github: '#'
    }
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="snap-start min-h-screen flex items-center justify-center bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#F4007A] to-[#FF40A6] rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#335B9D] to-[#FF40A6] rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#FF0000] to-[#F4007A] rounded-full blur-3xl opacity-5 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF40A6] to-[#335B9D] bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-[#8F8F8F] text-lg">A showcase of my recent work and innovations</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4007A] via-[#FF40A6] to-[#335B9D] rounded-2xl blur-sm opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              {/* Main Card */}
              <div 
                className="relative rounded-2xl p-6 border border-transparent backdrop-blur-xl"
                style={{
                  background: 'linear-gradient(145deg, rgba(59, 10, 14, 0.8), rgba(10, 10, 10, 0.9))',
                  backgroundImage: `
                    linear-gradient(145deg, rgba(59, 10, 14, 0.8), rgba(10, 10, 10, 0.9)),
                    radial-gradient(circle at top left, rgba(244, 0, 122, 0.1), transparent 50%),
                    radial-gradient(circle at bottom right, rgba(51, 91, 157, 0.1), transparent 50%)
                  `
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#F0F0F0] group-hover:text-[#FF40A6] transition-colors">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    project.status === 'Completed' 
                      ? 'bg-gradient-to-r from-[#F4007A]/20 to-[#FF40A6]/20 text-[#FF40A6] border-[#FF40A6]/30'
                      : 'bg-gradient-to-r from-[#335B9D]/20 to-[#FF40A6]/20 text-[#335B9D] border-[#335B9D]/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-[#8F8F8F] mb-4 leading-relaxed group-hover:text-[#F0F0F0] transition-colors">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-[#F4007A]/10 to-[#FF40A6]/10 text-[#FF40A6] px-3 py-1 rounded-full text-xs font-medium border border-[#FF40A6]/20 hover:border-[#335B9D]/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.links.live}
                    className="flex items-center gap-2 text-sm font-medium text-[#FF40A6] hover:text-[#335B9D] transition-colors group/link"
                  >
                    <div className="p-1 bg-gradient-to-r from-[#F4007A] to-[#FF40A6] rounded group-hover/link:from-[#335B9D] group-hover/link:to-[#FF40A6] transition-all">
                      <ExternalLink size={14} className="text-[#0A0A0A]" />
                    </div>
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 text-sm font-medium text-[#FF40A6] hover:text-[#335B9D] transition-colors group/link"
                  >
                    <div className="p-1 bg-gradient-to-r from-[#F4007A] to-[#FF40A6] rounded group-hover/link:from-[#335B9D] group-hover/link:to-[#FF40A6] transition-all">
                      <Github size={14} className="text-[#0A0A0A]" />
                    </div>
                    Code
                  </a>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F4007A]/10 via-[#FF40A6]/5 to-[#335B9D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;