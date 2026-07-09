"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative py-32 border-b bg-[#0D1117] border-[#30363d]"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-12"
        >
          {/* Header minimaliste */}
          <div className="space-y-4">
            <p className="font-mono text-[#7EE787] text-sm">
              &gt; system_identity --load
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Raphaël Verchain
            </h1>
            <p className="font-mono text-xl text-slate-400">
              Cloud & DevOps Engineer / Alternance M2
            </p>
          </div>

          {/* Bloc de status mis à jour */}
          <div className="border border-[#30363d] bg-[#0d1117] p-8 font-mono">
            <div className="flex items-center gap-2 mb-6 border-b border-[#30363d] pb-4">
              <span className="text-[#D2A8FF]">root@raphael:~$</span>
              <span className="text-slate-300">cat profile.log</span>
            </div>
            <div className="text-slate-400 leading-relaxed space-y-4">
              <p>
                Passionné par l&apos;automatisation et l&apos;infrastructure scalable.
              </p>
              <p>
                Recherche alternance M2 en <span className="text-[#79C0FF]">Cloud, Infra, DevOps & DevSecOps</span> pour 2026-2027.
              </p>
              <p className="text-[#7EE787]">
                &gt; Statut : Disponible immédiatement
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="flex items-center gap-8">
            <a
              href="#competences"
              className="font-mono text-sm text-white hover:text-[#7EE787] transition-colors border-b border-transparent hover:border-[#7EE787]"
            >
              [CD ./STACK]
            </a>
            <a
              href="#projets"
              className="font-mono text-sm text-white hover:text-[#7EE787] transition-colors border-b border-transparent hover:border-[#7EE787]"
            >
              [CD ./PROJETS]
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}