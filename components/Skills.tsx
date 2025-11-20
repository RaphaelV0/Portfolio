"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FaCode, FaLaptopCode, FaServer, FaCloud } from "react-icons/fa";
import { MouseEvent, ReactNode } from "react";

// Définition du type pour éviter l'erreur "Unexpected any"
interface SkillType {
    icon: ReactNode;
    title: string;
    description: string;
    technologies: string[];
}

const skills: SkillType[] = [
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
        technologies: ["Symfony", "Node.js", "Express", "Python", "PHP", "SQL"]
    },
    {
        icon: <FaLaptopCode className="text-4xl text-teal-400" />,
        title: "Développement",
        description: "Maîtrise du développement full-stack avec une approche orientée qualité et performance.",
        technologies: ["TypeScript", "JavaScript", "Python", "PHP", "REST API"]
    },
    {
        icon: <FaCloud className="text-4xl text-violet-400" />,
        title: "DevOps & Cloud",
        description: "Automatisation des déploiements, conteneurisation et gestion d'infrastructure.",
        technologies: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Linux", "Git"]
    }
];

function SkillCard({ skill, index }: { skill: SkillType; index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            onMouseMove={handleMouseMove}
            className="group relative rounded-xl bg-[#0a0a1a] border border-white/10 overflow-hidden h-full"
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                          650px circle at ${mouseX}px ${mouseY}px,
                          rgba(139, 92, 246, 0.15),
                          transparent 80%
                        )
                    `,
                }}
            />
            
            {/* Border Glow */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                          400px circle at ${mouseX}px ${mouseY}px,
                          rgba(139, 92, 246, 0.3),
                          transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative h-full p-6 flex flex-col">
                <div className="flex flex-col items-start h-full">
                    <div className="mb-4 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                        {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-violet-300 transition-colors">
                        {skill.title}
                    </h3>
                    <p className="text-gray-400 mb-6 text-sm flex-grow">
                        {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {skill.technologies.map((tech: string, techIndex: number) => (
                            <span
                                key={techIndex}
                                className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded-md text-gray-300 group-hover:border-violet-500/30 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Skills() {
    return (
        <section id="competences" className="py-24 relative">
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
                        Un ensemble de technologies et d&apos;outils maîtrisés pour développer des applications web performantes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}