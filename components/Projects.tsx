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
    <section
      id="projets"
      className="py-24 border-b bg-[#0D1117] border-[#30363d]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="font-mono text-[#7EE787] text-sm">
            /usr/local/bin/project_registry
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-[#e5e9ec]">
            Réalisations techniques
          </h2>
          <p className="mt-4 font-mono text-sm leading-7 text-slate-400">
            Configuration des déploiements et architectures de référence.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-[#30363d] bg-[#0d1117] p-6 hover:border-[#7ee787] transition-colors"
            >
              <div className="flex items-center gap-2 mb-6 border-b border-[#30363d] pb-4">
                <span className="text-[#d2a8ff] font-mono">FILE:</span>
                <span className="text-[#e5e9ec] font-mono">
                  {project.title.toLowerCase().replace(/ /g, "_")}.yaml
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#d2a8ff]">
                  {project.title}
                </h3>
                <p className="text-sm font-mono text-slate-400">
                  {project.description}
                </p>

                <div className="pt-4 border-t border-[#30363d]">
                  <p className="text-[10px] uppercase text-slate-600 mb-2 font-mono">
                    stack_config
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs text-[#79c0ff]"
                      >
                        [{tag}]
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  {project.isLink ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[#7ee787] hover:underline"
                    >
                      &gt; ACCESS_TARGET:{" "}
                      {project.link
                        .replace(/^https?:\/\//, "")
                        .substring(0, 35)}
                      {project.link.length > 35 ? "..." : ""}
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
