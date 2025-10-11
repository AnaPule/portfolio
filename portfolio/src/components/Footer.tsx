// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] text-[#F0F0F0] py-12 border-t border-[#3B0A0E]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2 text-[#8F8F8F]">Morwetsana Pule</div>
            <p className="text-left text-[#8F8F8F]">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-[#8F8F8F] hover:text-[#FF40A6] transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-[#8F8F8F] hover:text-[#FF40A6] transition-colors">
              GitHub
            </a>
            <a href="#" className="text-[#8F8F8F] hover:text-[#FF40A6] transition-colors">
              Twitter
            </a>
          </div>
        </div>
        
        <div className="border-t border-[#3B0A0E] mt-8 pt-8 text-center text-[#8F8F8F]">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;