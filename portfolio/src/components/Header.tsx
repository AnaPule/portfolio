// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'HOME', href: '#hero' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'WORK', href: '#work' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#F4007A]/30' 
        : 'bg-transparent'
    }`}>
      <nav className="w-full px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with neon pink glow */}
          <div className="relative">
            <div className="text-xl font-bold text-[#F4007A] tracking-wider glow-pink">
              DEVELOPER
            </div>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#F4007A] rounded-full glow-pink-sm"></div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group"
              >
                <span className="text-sm font-light text-[#F0F0F0] group-hover:text-[#FF40A6] transition-all duration-300 tracking-wider">
                  {item.name}
                </span>
                
                {/* Animated neon underline */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF40A6] group-hover:w-full transition-all duration-500 delay-100 rounded-full glow-pink-sm"></div>
                
                {/* Neon glow effect on hover */}
                <div className="absolute -inset-2 bg-[#F4007A]/10 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 -z-10"></div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              {isMenuOpen ? (
                <X size={24} className="text-[#FF40A6] transition-transform duration-300 glow-pink" />
              ) : (
                <Menu size={24} className="text-[#F0F0F0] group-hover:text-[#FF40A6] transition-all duration-300" />
              )}
              <div className="absolute -inset-2 bg-[#F4007A]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 space-y-6 pb-6 border-t border-[#F4007A]/30 pt-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-sm font-light text-[#F0F0F0] hover:text-[#FF40A6] transition-all duration-300 tracking-wider group"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#FF40A6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-pink-sm"></div>
                  <span>{item.name}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#F4007A]/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-24 h-24 bg-[#FF40A6]/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
    </header>
  );
};

export default Header;