
import {ReactTyped} from "react-typed";
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import GoldenLine from './GoldenLine';

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
    </>

  );
}