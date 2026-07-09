"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Artiste — Nicolas Cousin",
    description:
      "Architecture Jamstack complète. Automatisation du déploiement via Terraform sur Cloudflare et pipelines CI/CD.",
    tags: ["Next.js", "Sanity.io", "Terraform", "Docker", "GitHub Actions"],
    link: "https://portfolio-artiste-nicolas-cousin.pages.dev/",
    isLink: true,
  },
  {
    title: "Cluster WordPress Haute Disponibilité",
    description:
      "Déploiement d'une infra 7 nœuds Ubuntu, HAProxy, MariaDB Master-Replica et stockage chiffré via Ansible.",
    tags: ["Proxmox", "Ansible", "OpenBao", "Grafana", "Zabbix"],
    link: "Private Infrastructure (InnovQube)",
    isLink: false,
  },
  {
    title: "Site Web Associatif AESA",
    description:
      "Développement et optimisation technique d'une plateforme de gestion d'événements et espace membre.",
    tags: ["Symfony", "Vue.js", "Docker", "MySQL", "CI/CD"],
    link: "https://github.com/RaphaelV0/AESA",
    isLink: true,
  },
  {
    title: "Web App League of Legends",
    description:
      "Interface interactive de consultation de statistiques de personnages via API REST.",
    tags: ["Express", "JavaScript", "API REST", "Vue.js"],
    link: "https://github.com/RaphaelV0/WebAppLOL",
    isLink: true,
  },
];
export default function Projects() {
  return (
    <section id="projets" className="py-24 border-b border-[#30363d] bg-[#0D1117]">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[#7EE787] text-sm">/usr/local/bin/project_registry</p>
          <h2 className="mt-2 text-4xl font-semibold text-[#e5e9ec]">Réalisations techniques</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-[#30363d] p-8 hover:border-[#7ee787] transition-all duration-300 flex flex-col bg-[#0D1117] hover:bg-[#161b22]/20"
            >
              {/* Header YAML plus grand */}
              <div className="flex items-center gap-2 mb-6 font-mono text-xs text-slate-500">
                <span className="text-[#d2a8ff]">FILE:</span>
                <span>{project.title.toLowerCase().replace(/ /g, "_")}.yaml</span>
              </div>

              {/* Contenu agrandi */}
              <div className="flex-grow space-y-4">
                <h3 className="text-lg font-bold text-[#d2a8ff]">{project.title}</h3>
                <p className="text-sm font-mono text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Stack & Link agrandis */}
              <div className="mt-6 pt-6 border-t border-[#30363d] space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs text-[#79c0ff]">
                      [{tag}]
                    </span>
                  ))}
                </div>
                
                <div>
                  {project.isLink ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" 
                       className="font-mono text-xs text-[#7ee787] hover:underline block">
                      &gt; ACCESS: {project.link.replace(/^https?:\/\//, "")}
                    </a>
                  ) : (
                    <span className="font-mono text-xs text-slate-600 italic">
                      &gt; STATUS: {project.link}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}