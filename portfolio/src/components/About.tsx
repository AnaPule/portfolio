import React from 'react';
import ModelContainer from './Earth';
import { motion } from 'framer-motion';
import { Briefcase, Crown, Sparkles } from 'lucide-react';

// --- REGAL GOLD STYLING ---
const REGAL_GOLD_GRADIENT = 'linear-gradient(145deg, #FFEFD5 0%, #D4AF37 35%, #FFEFD5 65%, #C9A028 100%)';
const GOLD_HEX = '#D4AF37'; 

const regalGoldText = {
  background: REGAL_GOLD_GRADIENT,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  filter: 'drop-shadow(0 0px 5px rgba(255, 215, 0, 0.4))',
};


const mockData = {
  title: "Morwetsana Pule: The Full Stack Architect",
  tagline: "Building digital foundations with precision and elegance.",
  bio: [
    "I am a dedicated **Full Stack Architect** with a passion for designing and implementing robust, scalable, and beautifully engineered software solutions. My expertise spans across modern frontend frameworks like **React** and **Angular**, robust backend systems with **C#/.NET** and **Node.js**, and efficient database management using **Postgres** and **MongoDB**.",
    "With a foundation rooted in data science and statistical analysis (**Python, R, SAS**), I bring a unique, analytical perspective to problem-solving, ensuring not only that applications work flawlessly, but that they are optimized for performance and future growth. I believe in writing clean, type-safe code (**TypeScript**) and adopting best practices to deliver enterprise-grade quality.",
    "My goal is to transcend conventional development, transforming complex business requirements into intuitive and high-performance user experiences that stand the test of time."
  ],
  facts: [
    { icon: Briefcase, text: "8+ years of professional development experience." },
    { icon: Crown, text: "Specialist in enterprise architecture design." },
    { icon: Sparkles, text: "Dedicated to elegant and clean code design." },
  ]
};

const AboutCard: React.FC<{ icon: React.ElementType, text: string }> = ({ icon: Icon, text }) => (
  <div className="flex items-start space-x-4">
    <Icon size={20} style={{ color: GOLD_HEX, filter: 'drop-shadow(0 0 3px rgba(255, 215, 0, 0.4))' }} />
    <p className="text-white text-opacity-80 font-light tracking-wide">{text}</p>
  </div>
);

export default function About() {
  return (
    <div
      id="about"
      className="relative flex items-center justify-center w-full py-24 px-[10] snap-start bg-[#0A0A0A]"
    >
      {/* Background Glows */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        
        <h2 className="sr-only">About Morwetsana Pule</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: 3D Model and Title */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            
            {/* 3D Model Container */}
            <ModelContainer />

            {/* Title Block */}
            <h3 
              className="text-4xl font-serif font-light mt-4 tracking-wider" 
              style={regalGoldText}
            >
              {mockData.title.split(":")[0]}
            </h3>
            <p className="text-white/70 text-lg font-light italic tracking-wider">
              {mockData.tagline}
            </p>
          </motion.div>

          {/* RIGHT COLUMN: Biography and Facts */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2 space-y-10"
          >
            
            {/* Biography Text */}
            <div 
              className="p-8 md:p-10 rounded-3xl backdrop-blur-xl border border-white/10 shadow-xl space-y-6"
              style={{
                background: "linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
              }}
            >
              {mockData.bio.map((paragraph, index) => (
                <p key={index} className="text-white text-lg leading-relaxed font-normal">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Facts / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {mockData.facts.map((fact, index) => (
                <AboutCard key={index} icon={fact.icon} text={fact.text} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}