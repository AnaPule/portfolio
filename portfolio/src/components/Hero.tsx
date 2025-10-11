// src/sections/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'YourName_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="snap-start min-h-screen flex items-center justify-center bg-black relative">
      
      {/* Animated Female Silhouette - EXACTLY like the reference */}
      <div className="absolute inset-0">
        {/* Main animated woman silhouette */}
        <motion.div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-3/4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          {/* Glowing outline effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/10 to-pink-500/20 blur-xl"></div>
          
          {/* Pixelated/glitch effect layers */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/30 to-blue-500/20"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              maskImage: `url("data:image/svg+xml,%3Csvg width='400' height='600' viewBox='0 0 400 600' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M200 100 C250 150 250 250 200 300 C150 350 150 450 200 500 L200 600 L300 500 L300 100 Z' fill='black'/%3E%3C/svg%3E")`,
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              maskSize: 'contain'
            }}
          />
          
          {/* Main silhouette shape */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500"
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              maskImage: `url("data:image/svg+xml,%3Csvg width='400' height='600' viewBox='0 0 400 600' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M200 100 C250 150 250 250 200 300 C150 350 150 450 200 500 L200 600 L300 500 L300 100 Z' fill='black'/%3E%3C/svg%3E")`,
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              maskSize: 'contain',
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
            }}
          />
          
          {/* Glitch effect overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-400 to-pink-400 mix-blend-overlay"
            animate={{
              x: [0, -2, 2, 0],
              y: [0, 1, -1, 0],
            }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              maskImage: `url("data:image/svg+xml,%3Csvg width='400' height='600' viewBox='0 0 400 600' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M200 100 C250 150 250 250 200 300 C150 350 150 450 200 500 L200 600 L300 500 L300 100 Z' fill='black'/%3E%3C/svg%3E")`,
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              maskSize: 'contain',
              opacity: 0.3
            }}
          />
        </motion.div>

        {/* Background glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Software Engineer
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Creating powerful and innovative solutions with modern technologies. 
            Passionate about building robust, scalable, and secure applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={downloadCV}
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors">
              Get In Touch
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-white animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;