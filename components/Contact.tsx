"use client";

import { useState } from "react";
import { FaCheck, FaCopy, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleContactClick = () => {
    // On laisse le comportement par défaut du mailto: fonctionner
    
    navigator.clipboard.writeText("raphaelverchain@gmail.com")
      .then(() => {
        setEmailCopied(true);
        
        // Réinitialiser après 3 secondes
        setTimeout(() => {
          setEmailCopied(false);
        }, 3000);
      })
      .catch(err => {
        console.error("Impossible de copier l&apos;email: ", err);
      });
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Overlay léger spécifique à cette section */}
      <div className="absolute inset-0 bg-[#070A1B] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center bg-[#0a0a1a] p-12 rounded-2xl border border-gray-800 shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Intéressé par mon profil ?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            N&apos;hésitez pas à me contacter pour discuter de vos projets ou pour toute opportunité de collaboration.
          </p>
          
          {/* Bouton principal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <div className="relative flex flex-col items-center">
              <motion.a 
                href="mailto:raphaelverchain@gmail.com"
                onClick={handleContactClick}
                className="px-8 py-3 bg-gradient-to-r from-violet-500 to-blue-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Me contacter
                {emailCopied ? <FaCheck className="text-teal-300" /> : <FaCopy className="text-white/70" />}
              </motion.a>
              
              {/* Message de confirmation */}
              {emailCopied && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-500/90 to-blue-500/90 text-white text-sm py-2 px-4 rounded-lg shadow-lg backdrop-blur-sm border border-teal-400/30 flex items-center gap-2"
                >
                  <FaCheck size={12} />
                  <span>Email copié dans le presse-papiers</span>
                </motion.div>
              )}
            </div>
          </div>
      
          
          {/* Information supplémentaire */}
          <div className="mt-10 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              Basé à <span className="text-teal-400">Saint-Quentin, France</span> • Disponible pour des opportunités en <span className="text-violet-400">alternance</span> et <span className="text-blue-400">CDI</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}