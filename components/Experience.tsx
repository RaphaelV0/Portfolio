"use client";

import { useState } from "react";

interface ExperienceItem {
  type: "work" | "study";
  title: string;
  entity: string;
  date: string;
  description?: string[];
}

// Données triées manuellement de la plus récente à la plus ancienne
const experiencesData: ExperienceItem[] = [
  {
    type: "work",
    title: "Administrateur Systèmes & DevOps — Stage M2",
    entity: "InnovQube (Noisy-le-Grand)",
    date: "Avril 2026 - Juillet 2026",
    description: [
      "Cluster HA : 7 nœuds Ubuntu, HAProxy, MariaDB Master-Replica.",
      "IaC via Ansible & stockage centralisé chiffré.",
      "Zero Trust avec OpenBao (AppRole, JWT GitLab CI).",
      "DevSecOps: Trivy/Grype, Dependency-Track, Harbor.",
      "Virtualisation : Proxmox, Docker. Supervision: Grafana, Zabbix.",
    ],
  },
  {
    type: "work",
    title: "Développeur FullStack & DevOps — Stage M2",
    entity: "Cousin Nicolas (Amiens)",
    date: "Février 2026 - Avril 2026",
    description: [
      "Portfolio Jamstack : Next.js SSG, Sanity.io headless.",
      "IaC Cloudflare Pages via Terraform (provider, DNS).",
      "CI/CD pipelines GitHub Actions. Docker/Docker Compose.",
    ],
  },
  {
    type: "study",
    title: "Master Cloud Computing & Mobility (M2)",
    entity: "INSSET",
    date: "Septembre 2025 - Juillet 2027",
    description: ["Formation cloud, mobilité et infrastructures modernes."],
  },
  {
    type: "study",
    title: "Licence Métiers du Numérique",
    entity: "INSSET",
    date: "Septembre 2024 - Juillet 2025",
    description: ["Développement et technologies numériques."],
  },
  {
    type: "work",
    title: "Développeur Web Full Stack — Stage",
    entity: "AESA (Amiens)",
    date: "Mars 2025 - Mai 2025",
    description: [
      "Stack : Symfony (backend), Vue.js (frontend).",
      "Optimisation SEO, performance et accessibilité.",
    ],
  },
  {
    type: "work",
    title: "Technicien Support IT — Intérim",
    entity: "Sulzer Ensival Moret (Saint-Quentin)",
    date: "Juillet 2023 - Août 2023",
    description: [
      "Déploiement Windows 11 : 30 postes.",
      "Support niveau 1 et 2.",
    ],
  },
  {
    type: "study",
    title: "DUT Informatique",
    entity: "IUT d'Amiens",
    date: "Septembre 2019 - Juillet 2021",
    description: ["Développement logiciel, BDD et réseau."],
  },
];

type FilterType = "all" | "work" | "study";

export default function Experience() {
  const [filterType, setFilterType] = useState<FilterType>("all");

  return (
    <section
      id="parcours"
      className="py-24 bg-[#0D1117] border-t border-b border-[#30363d]"
    >
      <div className="container  mx-auto px-4 max-w-4xl">
        {/* Header Console */}
        <div className="mb-12">
          <p className="font-mono text-[#7EE787] text-sm">
            /usr/bin/logs_experience
          </p>
          <h2 className="text-3xl font-semibold text-[#e5e9ec]">Parcours</h2>
        </div>

        {/* CLI Filter Buttons */}
        <div className="flex gap-4 mb-12 font-mono text-xs">
          {(["all", "work", "study"] as FilterType[]).map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-2 border transition-colors duration-200 ${
                filterType === type
                  ? "border-[#7EE787] text-[#7EE787] bg-[#7EE787]/10"
                  : "border-[#30363d] text-slate-500 hover:text-[#D2A8FF]"
              }`}
            >
              {`> ${type.toUpperCase()}`}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {experiencesData
            .filter((item) => filterType === "all" || item.type === filterType)
            .map((item, index) => (
              <div key={index} className="grid md:grid-cols-[140px_1fr] gap-6">
                <div className="font-mono text-slate-500 pt-1">{item.date}</div>
                <div className="border-l border-[#30363d] pl-6 pb-6">
                  <div className="text-[#D2A8FF] font-mono text-sm uppercase mb-1">
                    {item.type}
                  </div>
                  <h3 className="text-xl text-[#e5e9ec] font-semibold">
                    {item.title}
                  </h3>
                  <div className="text-[#7EE787] font-mono mb-4">
                    {item.entity}
                  </div>

                  {item.description && (
                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li
                          key={i}
                          className="font-mono text-sm text-slate-400 flex gap-2"
                        >
                          <span className="text-[#D2A8FF]">#</span> {desc}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
