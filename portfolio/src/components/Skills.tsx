import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Note: Added AnimatePresence import for proper usage

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

export default function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [locked, setLocked] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const isTransitioning = useRef(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleStart = (clientX: number) => {
    setStartX(clientX);
    setIsDragging(true);
  };

  const handleEnd = (clientX: number) => {
    if (!isDragging) return;
    setIsDragging(false);

    if (isTransitioning.current) return;

    const diff = startX - clientX;
    if (Math.abs(diff) < 50) return;

    isTransitioning.current = true;

    if (diff > 0) {
      setCurrentIndex((prev) => Math.min(prev + 1, cards.length - 1));
    } else {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }

    setTimeout(() => {
      isTransitioning.current = false;
    }, 600);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    handleEnd(e.changedTouches[0].clientX);
  };

  const handleMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);
  const handleMouseUp = (e: React.MouseEvent) => handleEnd(e.clientX);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLocked(true);
          document.body.style.overflow = "hidden";
        } else {
          setLocked(false);
          document.body.style.overflow = "auto";
        }
      },
      { threshold: 0.85 }
    );

    obs.observe(el);
    return () => {
      obs.disconnect();
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (!locked) return;

    let lastTime = 0;
    const deltaCooldown = 600;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isTransitioning.current) return;

      const now = Date.now();
      if (now - lastTime < deltaCooldown) return;
      lastTime = now;

      if (e.deltaY > 0) {
        if (currentIndex < cards.length - 1) {
          isTransitioning.current = true;
          setCurrentIndex((i) => i + 1);
          setTimeout(() => (isTransitioning.current = false), deltaCooldown);
        } else {
          setLocked(false);
          document.body.style.overflow = "auto";
        }
      } else if (e.deltaY < 0) {
        if (currentIndex > 0) {
          isTransitioning.current = true;
          setCurrentIndex((i) => i - 1);
          setTimeout(() => (isTransitioning.current = false), deltaCooldown);
        } else {
          setLocked(false);
          document.body.style.overflow = "auto";
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [locked, currentIndex]);

  const renderStackedCards = () => {
    const backs = [];
    const totalCards = cards.length;
    const visibleStackCards = Math.min(3, totalCards - 1);

    for (let i = 1; i <= visibleStackCards; i++) {
      const cardIndex = (currentIndex + totalCards - i) % totalCards;
      const offset = i * 44;
      const rotation = i * -10;
      const scale = 1 - i * 0.05;
      const opacity = 1 - i * 0.25;

      backs.push(
        <div
          key={`stack-${i}-${cardIndex}`}
          className="absolute"
          style={{
            left: `-${offset + 60}px`,
            top: `${i * 5}px`,
            width: "340px",
            height: "580px",
            // --- STACKED CARD STYLING: MAINTAINING SUBTLETY ---
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))", // Used rgba for clarity
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)",
            borderRadius: "36px",
            border: "1px solid rgba(255, 255, 255, 0.15)", // Slightly crisper border
            boxShadow: `
              0 30px 90px rgba(10, 10, 10, 0.8),
              inset 0 1px 0 rgba(255, 64, 166, 0.1)
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
      ref={sectionRef}
      className="flex items-center justify-center w-full h-full min-h-screen" 
      style={{
        background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #000000 100%)' 
      }}
    >
      <div className="relative mx-auto" style={{ width: "80px", height: "580px", perspective: "2000px" }}>
        {renderStackedCards()}

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute w-[340px] h-[580px] rounded-[36px] border border-black/20 backdrop-blur-xl bg-black/10 text-center flex flex-col justify-center"
        >
          {/* Main Card Container with High-Contrast Glass Styling */}
          <div
            className="relative cursor-grab active:cursor-grabbing select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            style={{
              width: "340px",
              height: "580px",

              // 1. CORE GLASS BASE: EXTREME TRANSPARENCY (NEARLY INVISIBLE BODY)
              // Reduced opacity from 0.2/0.1 down to 0.08/0.04 to make the body much more transparent.
              background: "linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04))",

              // 2. BACKDROP FILTER: LOW BLUR FOR CLARITY, INCREASED BRIGHTNESS
              // Reduced blur further to 60px for minimal distortion, allowing background to be clearer.
              backdropFilter: "blur(60px) saturate(150%) brightness(1.2)",
              WebkitBackdropFilter: "blur(60px) saturate(150%) brightness(1.2)",

              borderRadius: "36px",

              // 3. SOFTER SHADOWS & BRIGHT INNER RIM LIGHT
              border: "none",
              boxShadow: `
            // External Shadow (kept dark for depth)
            0 40px 100px rgba(0, 0, 0, 0.7), 
            // Wide, soft inner glow—THIS IS THE ONLY VISIBLE WHITE LIGHT ON THE BODY
            inset 0 0 100px rgba(255, 255, 255, 0.06), // Increased opacity slightly for visible glow
            // Crisper inner highlight for the top edge definition
            inset 0 2px 0 rgba(255, 255, 255, 0.4), // Increased opacity for a very defined top reflection
            // Very subtle, clear outer edge
            0 0 0 1px rgba(255, 255, 255, 0.08) 
        `,
              padding: "48px 32px",
              transform: "perspective(1000px) rotateY(15deg) rotateX(-15deg) translateZ(30deg)",
              perspective: "1000px",
              transformStyle: "preserve-3d",
              overflow: "hidden",
            }}
          >
            {/* 5. TOP GLASS SHINE (The brightest reflection layer) */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
            borderRadius: "36px",
            // Increased the starting opacity (0.9 to 1.0) for a brilliant, clean highlight
            opacity: 1, // Full opacity for the shine itself
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

            {/* Content Container */}
            <div className="relative z-10 flex flex-col h-full">

              {/* Card Title */}
              <h3 className="text-xl font-bold mb-4 text-white">
                {cards[currentIndex].heading}
              </h3>

              {/* Description Text (White) */}
              <p
                className="text-base leading-relaxed mb-auto text-white" 
                style={{
                  color: 'white',
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
      </div>
    </div>
  );
}