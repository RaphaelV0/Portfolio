"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("TRANSMITTING_DATA...");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("SUCCESS: Packet delivered.");
        (e.target as HTMLFormElement).reset(); // Vide le formulaire
      } else {
        setStatus("ERROR: Connection refused.");
      }
    } catch (error) {
      setStatus("ERROR: Network failure.");
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-b border-[#30363d] bg-[#0D1117]">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[1fr_400px] gap-12 items-start"
        >
          {/* Colonne Gauche */}
          <div>
            <p className="font-mono text-[#7EE787] text-sm">/usr/bin/init_contact.sh</p>
            <h2 className="text-3xl font-semibold text-[#e5e9ec] mt-2 mb-6">Initier une connexion</h2>
            
            <div className="space-y-6 text-slate-400 font-mono text-sm leading-7">
              <p>Recherche active : <span className="text-white">Alternance M2 Cloud, Infra, DevOps & DevSecOps</span>.</p>
              <p>Disponible pour échanger sur vos besoins en automatisation et infrastructure scalable.</p>
              
              {/* CV Download intégré */}
              <a
                href="/CV_Raphael_VERCHAIN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D2A8FF] hover:text-white transition-colors"
              >
                <span>&gt; wget</span> CV_Raphael_VERCHAIN.pdf
              </a>

              <div className="pt-2 flex flex-wrap gap-4">
                <span className="border border-[#7EE787] text-[#7EE787] px-3 py-1 font-mono text-xs">✔ Disponible immédiatement</span>
                <span className="border border-[#30363d] text-slate-500 px-3 py-1 font-mono text-xs">Saint-Quentin, Hauts-de-France</span>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Formulaire CLI */}
          <div className="border border-[#30363d] bg-[#0d1117] p-6">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-[#30363d] pb-4 mb-6">
              <span>root@terminal:~$</span>
              <div className="w-2 h-2 rounded-full bg-[#7EE787] animate-pulse" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-sm">
              <input 
                name="name" 
                required 
                type="text" 
                placeholder="name@user" 
                className="w-full bg-transparent border-b border-[#30363d] focus:border-[#7EE787] outline-none text-slate-300 py-1" 
              />
              <input 
                name="email" 
                required 
                type="email" 
                placeholder="email@address" 
                className="w-full bg-transparent border-b border-[#30363d] focus:border-[#7EE787] outline-none text-slate-300 py-1" 
              />
              <textarea 
                name="message" 
                required 
                placeholder="message_body..." 
                className="w-full bg-transparent border-b border-[#30363d] focus:border-[#7EE787] outline-none text-slate-300 py-1 h-20 resize-none" 
              />
              
              <button 
                type="submit" 
                className="w-full py-2 border border-[#7EE787] text-[#7EE787] hover:bg-[#7EE787]/10 transition-all font-mono text-xs mt-2"
              >
                RUN_SEND_REQUEST
              </button>
            </form>

            {status && (
              <p className={`mt-4 text-xs font-mono animate-pulse ${status.includes('ERROR') ? 'text-red-400' : 'text-[#7EE787]'}`}>
                {status}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}