import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- REGAL GOLD STYLING ---
const REGAL_GOLD_GRADIENT = 'linear-gradient(145deg, #FFEFD5 0%, #D4AF37 35%, #FFEFD5 65%, #C9A028 100%)';
const GOLD_HEX = '#D4AF37';

const regalGoldText = {
  background: REGAL_GOLD_GRADIENT,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  filter: 'drop-shadow(0 0px 5px rgba(255, 215, 0, 0.4))', // Gold shadow for shine
};

const cards = [
  {
    heading: "Angular",
    description: "TypeScript-based web application framework developed by Google. Angular is ideal for building large-scale enterprise applications with its comprehensive toolset including dependency injection, routing, and form handling.",
  },
  {
    heading: "React",
    description: "A JavaScript library for building user interfaces, created and maintained by Facebook. Reacts component-based architecture makes it perfect for creating interactive and reusable UI elements.",
  },
  {
    heading: "Javascript",
    description: "Programming language of the web that brings interactivity and dynamic behavior to websites. JavaScript runs natively in browsers and powers everything from simple form validations to complex single-page applications.",
  },
  {
    heading: "TypeScript",
    description: "A strongly-typed superset of JavaScript that compiles to plain JavaScript. TypeScript adds static typing, interfaces, and advanced tooling support, making code more maintainable and catching errors during development.",
  },
  {
    heading: "CSS",
    description: "Styling language that controls the visual presentation of web pages. CSS is essential for creating layouts, animations, responsive designs, and overall aesthetic appeal.",
  },
  {
    heading: "Tailwind",
    description: "CSS framework that allows developers to build custom designs rapidly without writing traditional CSS. Tailwind provides low-level utility classes that can be composed to create any design directly in your markup.",
  },
  {
    heading: "C#",
    description: "Object-oriented programming language developed by Microsoft as part of the .NET ecosystem. C# is versatile and powerful, used for building Windows desktop applications, web applications with ASP.NET, and game development with Unity.",
  },
  {
    heading: ".NET Core",
    description: "Cross-platform, open-source framework developed by Microsoft for building modern applications. .NET Core is used for creating web applications, APIs, microservices, and cloud-based solutions.",
  },
  {
    heading: "Node.js",
    description: "JavaScript runtime built on Chromes V8 engine that allows JavaScript to run on the server side. Node.js is perfect for building scalable network applications, RESTful APIs, and real-time applications.",
  },
  {
    heading: "Python",
    description: "Python is used across various domains including web development, data science, machine learning, automation, and scripting. Its extensive library ecosystem and clean syntax make it an excellent choice for rapid development.",
  },
  {
    heading: "R",
    description: "Excels at data visualization, statistical modeling, and machine learning with its vast collection of packages like ggplot2 and dplyr. It is widely used by data scientists, statisticians, and researchers.",
  },
  {
    heading: "SAS",
    description: "Industry standard in pharmaceuticals, healthcare, finance, and government sectors for statistical analysis, predictive modeling, and regulatory compliance.",
  },
  {
    heading: "SQL",
    description: "SQL is essential for storing, retrieving, updating, and manipulating structured data. It is used across virtually all database systems and is fundamental for any application that needs to persist and query data.",
  },
  {
    heading: "MongoDB",
    description: "NoSQL document database that stores data in flexible, JSON-like documents. MongoDB is perfect for applications requiring flexible schemas, horizontal scalability, and rapid development.",
  },
  {
    heading: "Postgres",
    description: "A powerful, open-source relational database known for its reliability, feature robustness, and performance. PostgreSQL supports advanced data types, complex queries, and ACID compliance.",
  },
];

const Card: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // FIX: Changed from NodeJS.Timeout to number for browser compatibility
  const transitionTimeoutRef = useRef<number | null>(null);

  const handleStart = (clientX: number) => {
    // Only allow starting a drag if a transition isn't already active
    if (transitionTimeoutRef.current) return;
    setStartX(clientX);
    setIsDragging(true);
  };

  const handleEnd = (clientX: number) => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = startX - clientX;
    // Minimum distance threshold to trigger a swipe
    if (Math.abs(diff) < 50) return;

    // Start transition cooldown
    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);

    if (diff > 0 && currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (diff < 0 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }

    // Set a timeout to prevent rapid swipes/index changes
    transitionTimeoutRef.current = setTimeout(() => {
      transitionTimeoutRef.current = null;
    }, 900); // Matches the motion duration

  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    handleEnd(e.changedTouches[0].clientX);
  };
  const handleMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);
  const handleMouseUp = (e: React.MouseEvent) => handleEnd(e.clientX);

  const handleDotClick = (index: number) => {
    if (transitionTimeoutRef.current) return;
    setCurrentIndex(index);

    // Apply cooldown after dot click
    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    transitionTimeoutRef.current = setTimeout(() => {
      transitionTimeoutRef.current = null;
    }, 900);
  };

  const renderStackedCards = () => {
    const backs = [];
    const totalCards = cards.length;
    // Only show cards *after* the current one. Min of 3, or whatever is left.
    const visibleStackCards = Math.min(totalCards, totalCards - currentIndex - 1);

    for (let i = 1; i <= visibleStackCards; i++) {
      const offset = i * 44;
      const rotation = i * -10;
      const scale = 1 - i * 0.05;
      const opacity = 1 - i * 0.25;

      backs.push(
        // Note: These are intentionally kept as standard divs inside the animated wrapper
        <div
          key={`stack-item-${currentIndex + i}`} // Key based on the actual card index being shown
          className="absolute"
          style={{
            left: `-${offset + 50}px`,
            top: `${i * 7}px`,
            width: "340px",
            height: "580px",
            // --- STACKED CARD STYLING: MAINTAINING SUBTLETY ---
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))",
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)",
            borderRadius: "36px",
            border: `1px solid rgba(255, 255, 255, 0.5)`,
            boxShadow: `
              0 30px 90px rgba(10, 10, 10, 0.58),
              inset 0 1px 0 rgba(255, 64, 166, 0.3)
            `,
            transform: `rotateY(${rotation + 30}deg) rotateX(3deg) translateZ(${i * 50}px) scale(${scale})`,
            transformStyle: "preserve-3d",
            opacity: opacity * 0.9,
            pointerEvents: "none",
          }}
        />
      );
    }

    return backs;
  };

  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center w-full py-24 snap-start text-center"
    >

      {/* SECTION TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.1 }}
        className="text-5xl font-serif font-light mb-16 tracking-widest uppercase text-center"
        style={regalGoldText}
      >
        Core Skills & Expertise
      </motion.h2>

      <div className="relative mx-auto" style={{ width: "80px", height: "580px", perspective: "2000px" }}>

        {/* --- STACKED BACKGROUND CARDS WRAPPER (NEW ANIMATION) --- */}
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={`stack-wrapper-${currentIndex}`} // Key change triggers the transition
            // Use the same animation as the main card to make the stack move with the main card
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.9, ease: [0.17, 0.67, 0.83, 0.98] }}
            className="absolute top-0 left-0 z-5" // z-5 to be behind the main card (z-10)
          >
            {renderStackedCards()}
          </motion.div>
        </AnimatePresence>

        {/* --- MAIN CARD CONTAINER --- */}
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 200, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -200, scale: 0.8 }}
            transition={{ duration: 0.9, ease: [0.17, 0.67, 0.83, 0.98] }} // Smoother custom ease
            className="absolute w-[340px] h-[580px] rounded-[36px] backdrop-blur-xl text-center flex flex-col justify-center z-10" // z-10 to ensure it's on top
            style={{
              // Maintain card position relative to perspective origin
              transform: "perspective(1000px) rotateY(15deg) rotateX(-15deg) translateZ(30deg)",
              perspective: "1000px",
              transformStyle: "preserve-3d",
              overflow: "hidden",
            }}
          >
            {/* Main Card Container with High-Contrast Glass Styling */}
            <div
              className="relative cursor-grab active:cursor-grabbing select-none w-[340px] h-[580px] rounded-[36px]"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              style={{
                // 1. CORE GLASS BASE: EXTREME TRANSPARENCY
                background: "linear-gradient(145deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))",

                // 2. BACKDROP FILTER: LOW BLUR FOR CLARITY, INCREASED BRIGHTNESS
                backdropFilter: "blur(60px) saturate(150%) brightness(1.2)",
                WebkitBackdropFilter: "blur(60px) saturate(150%) brightness(1.2)",

                borderRadius: "36px",

                // 3. SOFTER SHADOWS & BRIGHT INNER RIM LIGHT
                border: "none",
                boxShadow: `
                      0 40px 100px rgba(0, 0, 0, 0.7), 
                      inset 0 0 100px rgba(255, 255, 255, 0.06), 
                      inset 0 2px 0 rgba(255, 255, 255, 0.4), 
                      0 0 0 1px rgba(255, 255, 255, 0.08) 
                  `,
                padding: "48px 32px",
              }}
            >
              {/* 5. TOP GLASS SHINE (The brightest reflection layer) */}
              <div
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                  borderRadius: "36px",
                  opacity: 1,
                  filter: 'blur(1px)',
                }}
              />

              {/* Top Edge Glow - Brightened */}
              <div
                className="absolute top-0 left-8 right-8 h-1 pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 20%, rgba(255, 255, 255, 0.8) 80%, transparent 100%)",
                  filter: "blur(2px)",
                  boxShadow: "0 0 30px rgba(255, 255, 255, 0.7)",
                }}
              />

              {/* Content Container - NOW VERTICALLY CENTERED */}
              <div className="relative z-10 flex flex-col h-full justify-center items-center text-center">

                {/* Card Title - Applied Regal Gold Text */}
                <h3 className="text-xl font-bold mb-6" style={regalGoldText}>
                  {cards[currentIndex].heading}
                </h3>

                {/* Description Text (White) */}
                <p
                  className="text-base leading-relaxed text-white/90 px-4"
                  style={{
                    fontWeight: "300",
                    letterSpacing: "0.02em",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  {cards[currentIndex].description}
                </p>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- NAVIGATION DOTS PANEL --- */}
      <div className="flex justify-center space-x-3 mt-16">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className="w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 focus:outline-none"
            aria-label={`Go to skill ${index + 1}`}
            style={{
              // Active dot uses the Regal Gold Gradient
              background: index === currentIndex
                ? REGAL_GOLD_GRADIENT
                : 'rgba(255, 255, 255, 0.2)', // Inactive dot is frosted white
              boxShadow: index === currentIndex
                ? `0 0 5px ${GOLD_HEX}`
                : 'none',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>

    </div>
  );
}

const Skills: React.FC = () => {
  return (
    <>
      <div className="px-3 flex items-center justify-center overflow-hidden gap-8">
        <p className="text-left text-lg md:text-lg leading-relaxed text-white">
          This section is a description of the technical skills that I offer to the client as a software developer/engineer or service provider.
        </p>
      </div >
      <div className="flex-1">
        <Card />
      </div>
    </>
  );
}

export default Skills;