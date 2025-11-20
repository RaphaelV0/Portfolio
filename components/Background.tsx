"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Optimisation : on utilise requestAnimationFrame pour ne pas surcharger le navigateur
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Gradient de base */}
      <div 
        className="absolute inset-0 opacity-30 bg-gradient-to-r from-violet-900/50 via-blue-900/50 to-teal-900/50"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          transition: "transform 0.2s ease-out"
        }}
      />
      
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-[#050816] opacity-90" />
      
      {/* Motif de grille futuriste */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(100, 116, 139, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100, 116, 139, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }} 
      />
      
      {/* Spotlight qui suit la souris */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />

      {/* Orbes flottants */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-600/20 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-teal-600/20 blur-[100px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -30, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
}