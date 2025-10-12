import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

// --- REGAL GOLD STYLING CONSTANTS (Copied from Skills.tsx for consistency) ---
const REGAL_GOLD_GRADIENT = 'linear-gradient(145deg, #FFEFD5 0%, #D4AF37 35%, #FFEFD5 65%, #C9A028 100%)';
const GOLD_HEX = '#D4AF37';
const LIGHT_GOLD_HEX = '#FFEFD5';

const regalGoldText = {
  background: REGAL_GOLD_GRADIENT,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  filter: 'drop-shadow(0 0px 3px rgba(255, 215, 0, 0.2))', // Reduced shadow for demure look
};
// -----------------------------------------------------------------------------

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
  }
  ,
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
    <section 
      id="projects" 
      // Solid black background - clean and simple
      className="snap-start flex items-center justify-center relative overflow-hidden" 
    >
      {/* Removed ambient gold background glows */}
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Title with Regal Gold Gradient Text */}
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 font-serif tracking-widest uppercase"
            style={regalGoldText}
          >
            Projects
          </h2>
          {/* Subtitle in light gray text for contrast on the dark background */}
          <p className="text-gray-300 text-lg">A showcase of my recent work and innovations</p>
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
              
              {/* Main Clean Card with Subtle Outline */}
              <div 
                className="relative rounded-lg p-6 transition-all duration-300 border border-gray-800/50 hover:border-gray-700 bg-zinc-900/30 backdrop-blur-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  {/* Title: White text, very subtle gold hover */}
                  <h3 className="text-xl font-semibold text-white group-hover:text-amber-100 transition-colors">
                    {project.title}
                  </h3>
                  {/* Status Tag: Minimal styling */}
                  <span className={`px-3 py-1 rounded-md text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-zinc-800 text-gray-300 border border-zinc-700'
                      : 'bg-zinc-800/60 text-gray-400 border border-zinc-700/60'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                {/* Description Text: Light gray for contrast */}
                <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>
                
                {/* Technologies: Minimal gray pills with subtle gold accent on hover */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-zinc-800/60 text-gray-300 px-3 py-1 rounded-md text-xs font-medium border border-zinc-700/50 hover:border-zinc-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links: Minimal gold accent only on hover */}
                <div className="flex space-x-4">
                  <a
                    href={project.links.live}
                    className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-amber-200 transition-colors group/link"
                  >
                    <ExternalLink size={16} className="text-gray-500 group-hover/link:text-amber-300 transition-colors" />
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-amber-200 transition-colors group/link"
                  >
                    <Github size={16} className="text-gray-500 group-hover/link:text-amber-300 transition-colors" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;