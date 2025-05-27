"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Fonction pour ajouter le style de grille dans le CSS global
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .bg-grid-pattern {
        background-image: 
          linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        background-size: 40px 40px;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-x-hidden relative">
      {/* Fond commun pour toute la page */}
      <div className="fixed inset-0 z-0">
        {/* Gradient de base */}
        <div 
          className="absolute inset-0 opacity-30 bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />
        
        {/* Overlay pour assombrir */}
        <div className="absolute inset-0 bg-[#050816] opacity-80" />
        
        {/* Motif de grille */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        {/* Éléments décoratifs flottants */}
        <motion.div
          className="absolute top-1/4 left-1/5 w-20 h-20 rounded-full bg-violet-500/10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-32 h-32 rounded-full bg-teal-500/10 blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute top-2/3 left-1/3 w-24 h-24 rounded-full bg-blue-500/10 blur-xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Cercles décoratifs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-violet-500/20 opacity-20" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full border border-teal-500/20 opacity-20" />
      </div>
      
      {/* Barre de progression */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Contenu du site */}
      <div className="relative z-10">
        <Navbar />
        <Hero mousePosition={mousePosition} />
        <Skills mousePosition={mousePosition} />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}