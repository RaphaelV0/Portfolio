"use client";

import { motion, useScroll } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Background from "@/components/Background"; // Import du nouveau composant

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-x-hidden relative selection:bg-teal-500/30 selection:text-teal-200">

      <Background />

      {/* Barre de progression */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 origin-left z-50 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Contenu du site */}
      <div className="relative z-10">
        <LoadingScreen />
        <div className="min-h-screen bg-[#050816] text-white overflow-x-hidden relative selection:bg-teal-500/30 selection:text-teal-200"></div>
        <Navbar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}