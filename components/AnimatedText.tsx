"use client";

import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function AnimatedText() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative">
      {/* Glow effect with improved gradient */}
      <motion.div 
        className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-blue-500 to-teal-400 rounded-lg blur opacity-25"
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
      
      <motion.h2 
        className="relative px-6 py-3 text-lg md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 border border-gray-800 rounded-lg backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typewriter
          words={[
            'Développeur Frontend', 
            'Développeur Backend', 
            'DevOps & Cloud',
            'Créateur de sites modernes', 
            'Passionné de tech ⚡', 
            'Explorateur de nouvelles technologies'
        ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h2>
      
      {/* Decorative elements with matching colors */}
      <div className="absolute -right-2 -top-2 w-4 h-4 border-t-2 border-r-2 border-violet-500 rounded-tr-md"></div>
      <div className="absolute -left-2 -bottom-2 w-4 h-4 border-b-2 border-l-2 border-teal-500 rounded-bl-md"></div>
    </div>
  );
}