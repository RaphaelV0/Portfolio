"use client";

import { useState } from "react";
import { FaCheck, FaCopy, FaFileDownload, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("raphaelverchain@gmail.com")
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 3000);
      })
      .catch(err => console.error("Erreur copie:", err));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 bg-[#070A1B] opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-[#0a0a1a]/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
            {/* Effet de brillance sur la bordure supérieure */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-50" />
            
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400">
                Travaillons ensemble
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Je suis actuellement à la recherche d'opportunités en <span className="text-violet-400 font-semibold">alternance</span> ou en <span className="text-blue-400 font-semibold">CDI</span>. 
                N'hésitez pas à me contacter !
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {/* Bouton Email */}
              <div className="relative group">
                <motion.button 
                  onClick={handleCopyEmail}
                  className="relative px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl text-white font-bold text-lg shadow-lg shadow-violet-900/20 flex items-center gap-3 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <FaPaperPlane />
                  <span>raphaelverchain@gmail.com</span>
                  {emailCopied ? <FaCheck className="text-green-300" /> : <FaCopy className="text-white/70" />}
                </motion.button>
                
                {/* Tooltip confirmation */}
                {emailCopied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-teal-400 font-medium bg-black/50 px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap"
                  >
                    Copié !
                  </motion.div>
                )}
              </div>

              {/* Bouton CV */}
              <motion.a 
                href="/CV_Raphael_Verchain.pdf" // Assurez-vous que le fichier est bien dans le dossier public
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#1a1a2e] border border-gray-700 hover:border-teal-500/50 rounded-xl text-white font-medium text-lg flex items-center gap-3 transition-colors duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaFileDownload className="text-teal-400 group-hover:translate-y-1 transition-transform" />
                <span>Télécharger mon CV</span>
              </motion.a>
            </div>
        
            {/* Footer de la carte */}
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
              <p>Basé à Saint-Quentin, France</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400">Disponible immédiatement</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}