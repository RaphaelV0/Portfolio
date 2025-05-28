"use client";

import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaServer, FaTools } from "react-icons/fa";

const skills = [
    {
        icon: <FaCode className="text-4xl text-violet-400" />,
        title: "Front-End",
        description: "Création d'interfaces modernes et réactives avec des frameworks JavaScript avancés.",
        technologies: ["Vue.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"]
    },
    {
        icon: <FaServer className="text-4xl text-blue-400" />,
        title: "Back-End",
        description: "Développement de serveurs et APIs robustes adaptés aux besoins des projets.",
        technologies: ["Symfony ", "Node.js", "Express", "Python", "PHP", "SQL"]
    },
    {
        icon: <FaLaptopCode className="text-4xl text-teal-400" />,
        title: "Développement",
        description: "Maîtrise du développement full-stack avec une approche orientée qualité et performance.",
        technologies: ["TypeScript", "JavaScript", "Python", "PHP", "REST API"]
    },
    {
        icon: <FaTools className="text-4xl text-blue-400" />,
        title: "Outils",
        description: "Utilisation d'outils modernes pour un développement efficace et collaboratif.",
        technologies: ["Git", "Docker", "Figma", "Trello", "VS Code", "IntelliJ"]
    }
];

export default function Skills() {
    return (
        <section id="competences" className="py-24 relative">
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
                        Mes Compétences
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Un ensemble de technologies et d&apos;outils maîtrisés pour développer des applications web performantes et élégantes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="bg-[#0a0a1a] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
                        >
                            <div className="flex flex-col items-start">
                                <div className="mb-4">{skill.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm">{skill.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {skill.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="text-xs bg-[#151530] px-2 py-1 rounded-full text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}