import { useRef } from 'react';
import TopImage from '../assets/react.svg';
import GoldenLine from './GoldenLine';
import {ReactTyped} from "react-typed";
import { motion } from 'framer-motion';
import generatePDF from 'react-to-pdf';
import { useState } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
// --- REGAL GOLD STYLING ---
// Gradient for shiny, reflective text and borders
const REGAL_GOLD_GRADIENT = 'linear-gradient(145deg, #FFEFD5 0%, #D4AF37 35%, #FFEFD5 65%, #C9A028 100%)';

export default function Hero() {
  // Corrected Name and Title
  const namePrimary = "Morwetsana Pule";

  // Splitting logic updated to reliably separate the first word (Morwetsana) and the rest (Pule)
  const nameParts = namePrimary.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  // Placeholder for the large, faint script letter from the inspiration image
  const giantFaintLetter = firstName.charAt(0) + '.' + lastName.charAt(0);

  // Styling object for text using the regal gold gradient clip
  const regalGoldText = {
    background: REGAL_GOLD_GRADIENT,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))',
  };

  const DownloadCV = () => {
    const targetRef = useRef();

    const options = {
    filename: 'morwetsana-pule-CV.pdf',
  };
  }
  const [hoverButton, setHoverButton] = useState(false);
  return (
    <>
    <GoldenLine />
      <div
        id="hero"
        className="relative flex items-center justify-center w-full min-h-screen pt-24 pb-5 overflow-hidden snap-start"
      >

        <div className="relative z-10 text-center px-4 max-w-4xl w-full">

          {/* --- GIANT FAINT LETTER (Simulating the script overlay) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 select-none"
            style={{
              ...regalGoldText,
              fontSize: '40vh', // Huge size for the background effect
              opacity: 0.05, // Very faint
              filter: 'none', // Remove shadow from background element
              lineHeight: 1,
              userSelect: 'none',
              // Using a script-like font for the large letter simulation
              fontFamily: 'Playfair Display, serif',
            }}
          >
            {giantFaintLetter}
          </motion.div>

          {/* --- MAIN NAME (Large, spaced, Gold) --- */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            // Reduced tracking slightly for the longer name to fit better on small screens
            className="text-right text-6xl sm:text-7xl lg:text-6xl font-serif font-light tracking-[0.4em] sm:tracking-[0.6em] uppercase mb-4"
            style={{ ...regalGoldText }}
          >
            {/* Ensure the space between first and last name is maintained */}
            {firstName} <span className='text-gray-900'>&mdash;</span> {lastName}
          </motion.h1>

          {/* --- SUBTITLE (Smaller, spaced, Gold) --- */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="text-xl sm:text-2xl font-sans font-medium tracking-[0.4em] uppercase"
            style={{
              ...regalGoldText,
              filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.3))', // Slightly less shadow for the subtitle
            }}
          >
            I AM A{" "}
            <ReactTyped
              strings={['Published Author',"UI/UX Designer", 'Software Engineer', 'Software Developer', 'Business analyst', 'Network Engineer', 'Cloud Practitioner']}
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar="|"
              showCursor={true}
            />
          </motion.p>

          {/* --- CTA BUTTON (Small, clean, gold-framed) --- */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2, type: 'spring', stiffness: 100 }}
            className="mt-16 px-8 py-3 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-[1.03]"
            style={{
              // Faux Gold Border using Box Shadow and Transparent background
              background: 'rgba(255, 255, 255, 0.15)',
              boxShadow: `
              inset 0 0 0 2px #D4AF37, /* Inner gold frame */
              0 4px 15px rgba(0, 0, 0, 0.2) /* Subtle shadow for lift */
            `,
              color: '#D4AF37', // Gold text
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            <span
              style={{
                display: 'flex',
                gap: '5px',
                alignItems: 'center'
              }}
              onClick={() => window.open('/morwetsana-pule-cv.pdf', '_blank', 'noopener,noreferrer')}
            >
              <Download size={20} />
              Download CV
            </span>

          </motion.button>
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

      {/* Hero Section - Full Screen */}
            <div style={{ 
                width: '100vw',
                height: '100vh',
                marginTop: '60px',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
            }}>
                {/* Blurred background image */}
                <img 
                    src={TopImage} 
                    alt="Mountains" 
                    style={{
                        position: 'absolute',
                        width: 'auto',
                        height: 'auto',
                        minWidth: '150%',
                        minHeight: '150%',
                        top: '50%',
                        left: '50%',
                        transform: 'rotate(90deg) translate(-50%, -50%)',
                        objectFit: 'cover',
                        maxWidth: 'none',
                        maxHeight: 'none',
                        filter: 'blur(2px) brightness(0.85)',
                    }}
                />
                
                {/* Brown vignette overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at center, transparent 20%, rgba(70, 40, 15, 0.6) 90%)',
                    pointerEvents: 'none',
                    zIndex: 1,
                }} />

                {/* Hero Content */}
                <div style={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    maxWidth: '900px',
                    padding: '20px',
                }}>
                    {/* Top Navigation */}
                    <div style={{
                        position: 'absolute',
                        top: '-250px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '40px',
                        fontSize: '12px',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        opacity: 0.7,
                    }}>
                        <span>Profile</span>
                        <span>Save</span>
                    </div>

                    {/* Main Title */}
                    <h1 style={{
                        fontSize: 'clamp(40px, 8vw, 72px)',
                        fontWeight: '300',
                        letterSpacing: 'clamp(4px, 2vw, 12px)',
                        marginBottom: '15px',
                        textTransform: 'uppercase',
                        borderBottom: '1px solid rgba(255,255,255,0.3)',
                        paddingBottom: '15px',
                        lineHeight: '1.2',
                    }}>
                        COUNTRY HARMONY
                    </h1>

                    {/* Subtitle */}
                    <p style={{
                        fontSize: 'clamp(14px, 2vw, 18px)',
                        letterSpacing: '4px',
                        marginBottom: '40px',
                        textTransform: 'uppercase',
                        opacity: 0.8,
                        fontWeight: '300',
                    }}>
                        О КОМПАНИИ
                    </p>

                    {/* Description */}
                    <p style={{
                        fontSize: 'clamp(14px, 1.5vw, 16px)',
                        lineHeight: '1.8',
                        maxWidth: '600px',
                        margin: '0 auto 40px',
                        opacity: 0.7,
                        fontStyle: 'italic',
                        fontFamily: 'system-ui, sans-serif',
                    }}>
                        Презентация для недвижимости, презентация для аренды домов, 
                        премиум-презентация, аренда дома
                    </p>

                    {/* Bottom Bar with Location and Button */}
                    <div style={{
                        borderTop: '1px solid rgba(255,255,255,0.2)',
                        paddingTop: '30px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        maxWidth: '600px',
                        margin: '0 auto',
                        gap: '20px',
                    }}>
                        <span style={{
                            fontSize: 'clamp(12px, 1.5vw, 14px)',
                            opacity: 0.7,
                            letterSpacing: '1px',
                        }}>
                            Сайт Буи - Тричі Сонг Sơn
                        </span>
                        
                        <button 
                            style={{
                                background: hoverButton ? 'white' : 'transparent',
                                border: '1px solid white',
                                color: hoverButton ? 'black' : 'white',
                                padding: '12px 35px',
                                fontSize: '14px',
                                letterSpacing: '2px',
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={() => setHoverButton(true)}
                            onMouseLeave={() => setHoverButton(false)}
                        >
                            VISIT SITE
                        </button>
                    </div>
                </div>
            </div>
    </>

  );
}