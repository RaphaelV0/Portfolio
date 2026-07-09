"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText("raphaelverchain@gmail.com")
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 3000);
      })
      .catch((err) => console.error("Erreur copie:", err));
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#0D1117] border-t border-b border-[#30363d]"
    >
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-[1fr_400px] gap-8 items-start"
        >
          {/* Colonne Gauche : Message & Infos */}
          <div>
            <p className="font-mono text-[#7EE787] text-sm">
              /usr/bin/init_contact.sh
            </p>
            <h2 className="text-3xl font-semibold text-[#e5e9ec] mb-6">
              Initier une connexion
            </h2>

            <div className="space-y-4 max-w-xl leading-relaxed text-slate-400">
              <p>
                Je suis actuellement à la recherche d'une
                <span
                  className="text-[#7EE787] font-mono bg-[#7EE787]/10 px-1 mx-0.5 rounded-sm relative top-[-2px]"
                  style={{ color: "#e5e9ec" }}
                >
                  alternance
                </span>
                pour ma deuxième année de Master (M2).
              </p>
              <p>
                Échangeons sur vos besoins en infrastructure, Cloud Computing ou
                DevOps. Mes compétences sont orientées vers la résolution de
                problèmes complexes et l&apos;automatisation.
              </p>

              {/* CLI Status Tags */}
              <div className="flex flex-wrap gap-3 mt-6 font-mono text-xs">
                {[
                  "Disponible immédiatement",
                  "Saint-Quentin (02100)",
                  "Full-time available",
                ].map((status, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 border rounded-sm ${
                      i === 0
                        ? "border-[#7EE787] text-[#7EE787]"
                        : "border-[#30363d] text-slate-500"
                    }`}
                  >
                    {i === 0 && <span className="mr-2">✔</span>}
                    {status}
                  </span>
                ))}
              </div>

              {/* Contact Info Block */}
              <div className="mt-8 p-4 rounded-md bg-[#161b22] border-l-2 border-[#D2A8FF]/50 font-mono text-sm space-y-2">
                <p>
                  <span className="text-slate-500 mr-2"># Target:</span> Cloud |
                  DevOps | Infrastructure
                </p>
                <p>
                  <span className="text-slate-500 mr-2"># Location:</span>{" "}
                  Saint-Quentin, France / Hauts-De-France
                </p>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Actions */}
          <div className="space-y-6">
            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 }}
              className="rounded-lg border border-[#30363d] bg-[#161b22]/50 backdrop-blur-sm p-4 font-mono text-xs md:text-sm"
            >
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-[#30363d]">
                <span>./status</span>
                <motion.span
                  animate={{ opacity: [1, 0.5, 1], color: "#7EE787" }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-2 h-2 rounded-full bg-[#7EE787] shadow-[0_0_8px_rgba(126,231,135,0.5)]"
                />
              </div>

              <p className="text-slate-400 mb-1">
                email: raphaelverchain@gmail.com
              </p>
              <p className="text-slate-400 mb-2 location">
                location: Saint-Quentin (Aisne)
              </p>
            </motion.div>

            {/* Copy Email Action */}
            <div className="space-y-3">
              <button
                onClick={handleCopyEmail}
                className={`w-full justify-center rounded-md border px-4 py-2 text-sm font-mono transition-all duration-200 flex items-center gap-3 group ${
                  emailCopied
                    ? "border-[#7EE787] bg-[#7EE787]/10 text-[#7EE787]"
                    : "border-[#30363d] hover:border-[#D2A8FF] hover:text-white"
                }`}
              >
                {emailCopied ? (
                  <>
                    <FaCheck className="text-sm" /> Copié !
                  </>
                ) : (
                  <>
                    <motion.span
                      animate={{ x: [0, -3, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className={emailCopied ? "hidden" : ""}
                    ></motion.span>
                    <span>raphaelverchain@gmail.com</span>
                  </>
                )}
              </button>

              {/* CV Download Action */}
              <a
                href="/CV_Raphael_VERCHAIN.pdf" // Assurez-vous que le fichier existe dans public/ ou src/app/pdf-path...
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full justify-center rounded-md border px-4 py-2 text-sm font-mono transition-all duration-200 flex items-center gap-3 ${
                  "border-[#D2A8FF] hover:bg-[#D2A8FF]/10" // Utilise la couleur violette de Experience.tsx pour l'action principale ou un vert cohérent
                }`}
              >
                <span className="text-xs font-mono">wget</span>{" "}
                CV_Raphael_VERCHAIN.pdf
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
