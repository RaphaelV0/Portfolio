"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { FaGraduationCap, FaBriefcase, FaHandsHelping } from "react-icons/fa";

// Données d'expérience structurées
const experiences = [
  {
    id: 1,
    type: "education",
    title: "Licence 3 Métiers du Numérique",
    location: "INSSET, Saint-Quentin",
    date: "Septembre 2024 - Juin 2025",
    description: "Formation spécialisée dans les technologies web et le développement d'applications numériques.",
    icon: <FaGraduationCap />,
    color: "violet"
  },
  {
    id: 2,
    type: "work",
    title: "Stage - Développeur Full Stack",
    location: "AESA, Amiens",
    date: "Mars - Mai 2025",
    description: "Développement d'un site web pour l'Association des Étudiants en Sciences d'Amiens.",
    details: [
      "Développement d'un site web avec Symfony (backend) et Vue.js (frontend)",
      "Mise en place des bonnes pratiques de référencement SEO",
      "Optimisation des performances et de l'accessibilité",
      "Intégration d'un design responsive et dynamique"
    ],
    icon: <FaBriefcase />,
    color: "blue"
  },
  {
    id: 3,
    type: "work",
    title: "Technicien Informatique (Intérim)",
    location: "Sulzer, Saint-Quentin",
    date: "Juillet - Août 2023",
    description: "Support technique et déploiement de postes de travail.",
    details: [
      "Installation de 30 nouveaux ordinateurs sous Windows 11 avec surcouche entreprise",
      "Configuration des postes de travail",
      "Assistance aux utilisateurs"
    ],
    icon: <FaBriefcase />,
    color: "blue"
  },
  {
    id: 4,
    type: "volunteer",
    title: "Service Civique",
    location: "Collège Sagebien, Amiens",
    date: "Septembre 2021 - Juillet 2022",
    description: "Assistant éducation et support technique informatique.",
    details: [
      "Mise en place du système d'affichage dans le collège",
      "Création et enseignement de cours d'informatique",
      "Accompagnement des élèves dans l'utilisation des outils numériques"
    ],
    icon: <FaHandsHelping />,
    color: "teal"
  },
  {
    id: 5,
    type: "education",
    title: "Licence 3 MIAGE (non terminée)",
    location: "UFR des Sciences, Amiens",
    date: "Septembre 2022 - Juin 2023",
    description: "Formation en méthodes informatiques appliquées à la gestion des entreprises.",
    icon: <FaGraduationCap />,
    color: "violet"
  },
  {
    id: 6,
    type: "education",
    title: "DUT Informatique",
    location: "IUT d'Amiens",
    date: "Septembre 2019 - Juin 2021",
    description: "Formation en développement logiciel, base de données et réseau.",
    icon: <FaGraduationCap />,
    color: "violet"
  },
  {
    id: 7,
    type: "education",
    title: "Baccalauréat S SVT spé Physique-Chimie",
    location: "Lycée Henri Martin, Saint-Quentin",
    date: "Juillet 2019",
    description: "Baccalauréat scientifique avec spécialité Physique-Chimie.",
    icon: <FaGraduationCap />,
    color: "violet"
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeExp, setActiveExp] = useState(null);

  // Fonction pour extraire l'année la plus récente d'une chaîne de date
  const extractYear = (dateStr) => {
    const yearMatches = dateStr.match(/\d{4}/g);
    return yearMatches ? Math.max(...yearMatches.map(y => parseInt(y))) : 0;
  };

  // Tri chronologique des expériences (du plus récent au plus ancien)
  const sortedExperiences = useMemo(() => {
    return [...experiences].sort((a, b) => {
      const yearA = extractYear(a.date);
      const yearB = extractYear(b.date);
      return yearB - yearA; // Ordre décroissant des années
    });
  }, []);

  // Filtrage des expériences selon l'onglet actif
  const filteredExperiences = useMemo(() => {
    return activeTab === "all" 
      ? sortedExperiences 
      : sortedExperiences.filter(exp => exp.type === activeTab);
  }, [activeTab, sortedExperiences]);

  // Génère les classes de couleur pour les gradients
  const getColorClass = (color) => {
    const colors = {
      violet: "from-violet-500 to-purple-700",
      blue: "from-blue-500 to-blue-700",
      teal: "from-teal-500 to-teal-700"
    };
    return colors[color] || colors.violet;
  };

  // Génère les classes de couleur pour les icônes
  const getIconColorClass = (color) => {
    const colors = {
      violet: "text-violet-400",
      blue: "text-blue-400",
      teal: "text-teal-400"
    };
    return colors[color] || colors.violet;
  };

  return (
    <section id="parcours" className="py-24 relative">
      {/* Overlay léger spécifique à cette section */}
      <div className="absolute inset-0 bg-[#070A1B] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 mb-4">
            Mon Parcours
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mon parcours académique et professionnel, des études aux expériences qui ont façonné mes compétences.
          </p>
        </motion.div>

        {/* Filtres de catégories */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#0a0a1a] p-1 rounded-full border border-gray-800">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "all" 
                  ? "bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 text-white" 
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Tout
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "education" 
                  ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white" 
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Formation
            </button>
            <button
              onClick={() => setActiveTab("work")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "work" 
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white" 
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Expérience Pro
            </button>
            <button
              onClick={() => setActiveTab("volunteer")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "volunteer" 
                  ? "bg-gradient-to-r from-teal-500 to-teal-700 text-white" 
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Bénévolat
            </button>
          </div>
        </div>
        
        {/* Timeline verticale */}
        <div className="max-w-4xl mx-auto relative">
          {/* Ligne verticale centrale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-violet-500 via-blue-500 to-teal-500 opacity-50"></div>
          
          {/* Éléments de la timeline */}
          {filteredExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? "left-timeline" : "right-timeline"
              }`}
            >
              <div className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "text-right mr-8" : "ml-8"}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-[#0a0a1a] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 shadow-lg"
                    onClick={() => setActiveExp(activeExp === exp.id ? null : exp.id)}
                  >
                    {/* En-tête de la carte */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`flex-shrink-0 w-6 h-6 ${getIconColorClass(exp.color)}`}>
                        {exp.icon}
                      </span>
                      <span className={`text-sm font-medium px-2 py-1 rounded-full bg-gradient-to-r ${getColorClass(exp.color)} bg-opacity-10 text-white`}>
                        {exp.date}
                      </span>
                    </div>
                    
                    {/* Contenu principal */}
                    <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{exp.location}</p>
                    <p className="text-gray-300">{exp.description}</p>
                    
                    {/* Détails supplémentaires (conditionnels) */}
                    {exp.details && activeExp === exp.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-800"
                      >
                        <ul className="space-y-2">
                          {exp.details.map((detail, i) => (
                            <li key={i} className="text-gray-400 text-sm flex items-start">
                              <span className="mr-2 text-xs mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                    
                    {/* Bouton pour afficher/masquer les détails */}
                    {exp.details && (
                      <button 
                        className={`mt-4 text-sm font-medium ${
                          exp.color === "violet" ? "text-violet-400" : 
                          exp.color === "blue" ? "text-blue-400" : "text-teal-400"
                        } flex items-center transition-all`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveExp(activeExp === exp.id ? null : exp.id);
                        }}
                      >
                        {activeExp === exp.id ? "Voir moins" : "Voir plus"}
                        <svg 
                          className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeExp === exp.id ? "rotate-180" : ""}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Point central de la timeline avec animation */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${getColorClass(exp.color)}`}>
                  <div className="w-full h-full rounded-full animate-ping absolute bg-white opacity-30"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}