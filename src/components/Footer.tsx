import React from 'react';

// --- REGAL GOLD STYLING CONSTANTS (Consistent with other components) ---
const REGAL_GOLD_GRADIENT = 'linear-gradient(145deg, #FFEFD5 0%, #D4AF37 35%, #FFEFD5 65%, #C9A028 100%)';
const GOLD_HEX = '#D4AF37';

const regalGoldText = {
  background: REGAL_GOLD_GRADIENT,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  filter: 'drop-shadow(0 0px 3px rgba(255, 215, 0, 0.2))',
};
// ---------------------------------------------------------------------

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            {/* Name uses Regal Gold Gradient */}
            <div 
              className="text-2xl font-bold mb-2 tracking-wide font-serif"
              style={regalGoldText}
            >
              Morwetsana Pule
            </div>
            {/* Job Title */}
            <p className="text-left text-gray-400 text-sm">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            {/* Social Links with Gold Hover Effect */}
            <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors duration-300">
              LinkedIn
            </a>
            <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors duration-300">
              GitHub
            </a>
            <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors duration-300">
              Twitter
            </a>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; 2024 Morwetsana Pule. All rights reserved.</p>
          <p>Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;