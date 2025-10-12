// src/sections/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

//components
//import Avatar from './Avatar';
//import Glasses from './glasses';

// New, more definitive female silhouette path (generic standing figure)
const FEMALE_SILHOUETTE_PATH = `
    M300 100 
    C320 120, 320 160, 300 180 
    C250 230, 250 300, 270 350 
    C290 400, 300 450, 300 500 
    L300 600 
    L400 600 
    C400 450, 350 350, 350 250 
    C350 150, 400 100, 400 50 
    L300 50 Z 
    M300 100 
    C280 120, 280 160, 300 180 
    C350 230, 350 300, 330 350 
    C310 400, 300 450, 300 500
    L300 600
`;

// Encode the path for use in CSS mask-image URL
const encodedPath = encodeURIComponent(`
  <svg width='600' height='800' viewBox='200 50 250 600' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d="${FEMALE_SILHOUETTE_PATH}" fill='black'/>
  </svg>
`);

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
    <section id="hero" className="snap-start min-h-screen flex items-center justify-center bg-black relative overflow-hidden">

      {/* DEFINITIVE FEMALE AVATAR - BIG AND VISIBLE */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main animated avatar container: Increased size (600x800px) */}
        <motion.div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full h-full max-w-[600px] max-h-[800px] perspective-2000"
          initial={{ opacity: 0, x: 150, rotateY: 20 }}
          animate={{ opacity: 1, x: 0, rotateY: 10 }} // Subtle perspective shift
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
        >

          {/* 1. Neon Glow Outline (Very wide and soft) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-fuchsia-500/10 to-purple-500/20 blur-[150px]"></div>

          {/* 2. Glitch/Flicker Effect Layer (Low opacity, rapid animation) */}
          <motion.div
            className="absolute inset-0 mix-blend-overlay"
            style={{
              background: 'linear-gradient(45deg, rgba(50,255,255,0.4), rgba(255,0,255,0.4))',
              maskImage: `url("data:image/svg+xml,${encodedPath}")`,
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              maskSize: 'contain',
              opacity: 0.3,
            }}
            animate={{
              x: [0, 4, -4, 0],
              y: [0, -2, 2, 0],
              opacity: [0.3, 0.6, 0.1, 0.3],
            }}
            transition={{
              duration: 0.08,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* 3. Main Silhouette Shape (The solid color/pulse) */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 via-indigo-600 to-cyan-500 shadow-2xl shadow-fuchsia-900/50"
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              maskImage: `url("data:image/svg+xml,${encodedPath}")`,
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              maskSize: 'contain',
            }}
          />

          {/* 4. Scanline/Data Flow Effect (Overlaid on top) */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'repeating-linear-gradient(0deg, #FFFFFF30, #FFFFFF10 1px, transparent 1px, transparent 3px)',
              maskImage: `url("data:image/svg+xml,${encodedPath}")`,
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              maskSize: 'contain',
              mixBlendMode: 'screen',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '0% 100%'],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          />

        </motion.div>

        {/* glasses model */}
        <motion.div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full z-0 flex items-center justify-center" // Added flex for centering
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
        >
          <Canvas
            camera={{ position: [0, 0, 3], fov: 75 }} // Adjusted camera for glasses (closer, center)
            className="w-full h-full"
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[1, 1, 1]} intensity={0.8} color="#00ffff" /> {/* Cyan highlight */}
            <pointLight position={[-1, -1, 1]} intensity={0.8} color="#ff00ff" /> {/* Magenta highlight */}

            <Environment preset="night" /> {/* Dark environment to make neon pop */}

            {/* Render the CyberGlasses component */}


            <OrbitControls enableZoom={true} enablePan={false} /> {/* For easy viewing in dev, disable in prod */}

          </Canvas>
        </motion.div>

        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] opacity-70 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] opacity-70 animate-pulse-slow delay-1000"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-left relative z-10 w-full max-w-lg md:ml-32">
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
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <ChevronDown size={32} className="text-white animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;