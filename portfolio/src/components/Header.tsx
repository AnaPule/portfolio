import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// --- REGAL GOLD STYLING ---
// Gradient for shiny, reflective text and borders (Consistent with Hero/Skills)
const REGAL_GOLD_GRADIENT = 'linear-gradient(145deg, #FFEFD5 0%, #D4AF37 35%, #FFEFD5 65%, #C9A028 100%)';
const GOLD_HEX = '#D4AF37'; // Using a stable hex for transitions/simple elements

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past 50px to trigger the frosted background
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
    { name: 'CONTACT', href: '#contact' },
  ];

  // Inline style object for the regal gold text effect
  const regalGoldText = {
    background: REGAL_GOLD_GRADIENT,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: 'drop-shadow(0 0px 5px rgba(255, 215, 0, 0.4))', // Gold shadow for shine
  };

  return (
    // Fixed position with black/70 backdrop blur for the "Frosted Glass" effect when scrolled
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/70 backdrop-blur-lg border-b border-white/10'
        : 'bg-transparent'
    }`}>
      <nav className="w-full px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo: Clean and elegant text with regal gold accent */}
          <div className="relative">
            <div 
              className="text-2xl font-light tracking-widest cursor-pointer"
              style={regalGoldText}
            >
              M. PULE
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group py-1"
              >
                <span 
                  className="text-sm font-light text-white transition-colors duration-300 tracking-wider uppercase"
                  style={{
                    color: GOLD_HEX, // Default text color is white, will be overridden by hover/active styles
                  }}
                >
                  {item.name}
                </span>
                
                {/* Clean, subtle gold underline on hover (using gradient for shine) */}
                <div 
                  className="absolute -bottom-0 left-0 w-0 h-px transition-all duration-300 rounded-full"
                  style={{
                    background: REGAL_GOLD_GRADIENT,
                    boxShadow: '0 0 5px rgba(255, 215, 0, 0.5)',
                    transform: 'translateY(2px)', // Push down slightly
                    transition: 'width 0.3s ease-in-out',
                  }}
                  onMouseEnter={(e) => {
                    // Manually apply full width on hover since we can't use Tailwind's group-hover directly on style props
                    const target = e.currentTarget as HTMLDivElement;
                    target.style.width = '100%';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLDivElement;
                    target.style.width = '0%';
                  }}
                ></div>
                
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden group p-2 rounded-lg transition-colors hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              {isMenuOpen ? (
                // Menu icon uses gold gradient
                <X size={24} style={regalGoldText} className="transition-transform duration-300" />
              ) : (
                // Menu icon uses gold color
                <Menu size={24} style={{ color: GOLD_HEX }} className="group-hover:text-white transition-colors duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation (Frosted background when open) */}
        {isMenuOpen && (
          <div className={`md:hidden mt-6 space-y-6 pb-6 border-t border-white/10 pt-6 bg-black/50 backdrop-blur-sm rounded-b-xl`}>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block text-base font-normal text-white hover:text-[#D4AF37] transition-colors duration-300 tracking-wider uppercase group px-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-4">
                  {/* Subtle hover accent bullet point in solid gold */}
                  <div 
                    className={`w-1.5 h-1.5 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    style={{ boxShadow: '0 0 5px rgba(255, 215, 0, 0.4)' }}
                  ></div>
                  <span>{item.name}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;