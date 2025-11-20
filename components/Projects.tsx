"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Web App League of Legends",
        description: "Application web interactive présentant les personnages et leurs caractéristiques du célèbre jeu League of Legends.",
        tags: ["Express", "JavaScript", "API REST", "Vue.js"],
        image: "/Projet/WebAppLOL.jpg",
        link: "https://github.com/RaphaelV0/WebAppLOL",
        gradient: null // Pas de gradient pour ce projet
    },
    {
        title: "Site Web Associatif AESA",
        description: "Plateforme pour l'Association des Étudiants en Sciences d'Amiens avec gestion d'événements et espace membre.",
        tags: ["Vue.js", "Tailwind CSS", "Symfony", "MySQL", "Docker"],
        image: "/Projet/AESA.jpg",
        link: "https://github.com/RaphaelV0/AESA",
        gradient: null // Pas de gradient pour ce projet
    },
    {
        title: "Blog Personnel",
        description: "Plateforme de blog avec système de gestion de contenu, authentification et commentaires.",
        tags: ["Symfony", "PHP", "MySQL"],
        image: "/blog-project.jpg",
        gradient: "from-teal-500 to-blue-500", 
        link: "https://github.com/RaphaelV0/Blog-Symfony"
    }
];

export default function Projects() {
    return (
        <section id="projets" className="py-24 relative">
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
                        Mes Projets
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Découvrez quelques-unes de mes réalisations récentes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group relative rounded-xl overflow-hidden h-[400px]"
                        >
                            {/* Background image */}
                            <div className="absolute inset-0 bg-gray-800">
                                <div
                                    className="h-full w-full group-hover:scale-110 transition-transform duration-500"
                                    style={{
                                        backgroundImage: `url(${project.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                />
                            </div>

                            {/* Gradient overlay - seulement si gradient est défini */}
                            {project.gradient && (
                                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                            )}

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Lien vers le projet */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-white bg-violet-500/30 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-violet-500/50"
                                >
                                    Voir le projet <span className="ml-1">→</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bouton "Voir plus" (optionnel) */}
                <div className="flex justify-center mt-12">
                    <motion.a
                        href="https://github.com/RaphaelV0"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="px-6 py-3 bg-[#0a0a1a] border border-gray-800 hover:border-violet-500 rounded-full text-white font-medium transition-all duration-300"
                    >
                        Voir plus sur GitHub <span className="ml-1">→</span>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}