"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    export default function Navbar() {
        const [scrolled, setScrolled] = useState(false);
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const [activeSection, setActiveSection] = useState("accueil");

        const menuItems = useMemo(() => [
            { name: "Accueil", href: "#accueil", id: "accueil" },
            { name: "Compétences", href: "#competences", id: "competences" },
            { name: "Parcours", href: "#parcours", id: "parcours" },
            { name: "Projets", href: "#projets", id: "projets" },
            { name: "Contact", href: "#contact", id: "contact" }
        ], []);

        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 20) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }

                const sections = menuItems.map(item => item.id);

                for (const section of sections.reverse()) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= 100) {
                            setActiveSection(section);
                            break;
                        }
                    }
                }
            };

            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, [menuItems]);

        const variants = {
            hidden: { opacity: 0, y: -10 },
            visible: (i) => ({
                opacity: 1,
                y: 0,
                transition: {
                    delay: i * 0.1,
                    duration: 0.5
                }
            })
        };

        const scrollToSection = (e, href) => {
            e.preventDefault();
            const targetId = href.replace('#', '');
            const element = document.getElementById(targetId);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                });
                setIsMenuOpen(false);
            }
        };

        return (
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${scrolled
                    ? "bg-[#050816]/80 backdrop-blur-md shadow-lg border-b border-violet-500/10"
                    : "bg-transparent"
                    }`}
            >
                <div className="container mx-auto flex justify-between items-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a
                            href="#accueil"
                            onClick={(e) => scrollToSection(e, '#accueil')}
                            className="flex items-center"
                        >
                            <motion.span
                                className="text-2xl font-bold"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400">Raphaël Verchain</span>
                            </motion.span>
                        </a>
                    </motion.div>

                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item, index) => {
                            const isActive = activeSection === item.id;

                            return (
                                <motion.div
                                    key={index}
                                    custom={index}
                                    initial="hidden"
                                    animate="visible"
                                    variants={variants}
                                >
                                    <a
                                        href={item.href}
                                        onClick={(e) => scrollToSection(e, item.href)}
                                        className={`relative group py-2 px-1 overflow-hidden ${isActive ? "text-white" : "text-gray-300 hover:text-white"
                                            }`}
                                    >
                                        <span className="relative z-10">{item.name}</span>

                                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-teal-500/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-md"></span>

                                        {isActive && (
                                            <motion.span
                                                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500"
                                                layoutId="activeIndicator"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}

                                        {!isActive && (
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 transition-all duration-300 group-hover:w-full"></span>
                                        )}
                                    </a>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.button
                        className="md:hidden flex items-center justify-center w-10 h-10 relative z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-8 h-8 flex items-center justify-center">
                            <span
                                className={`absolute h-0.5 w-6 bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 transform transition duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                                    }`}
                            />
                            <span
                                className={`absolute h-0.5 bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 transform transition-all duration-200 ease-in-out ${isMenuOpen ? "w-0 opacity-0" : "w-6 opacity-100"
                                    }`}
                            />
                            <span
                                className={`absolute h-0.5 w-6 bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 transform transition duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                                    }`}
                            />
                        </div>
                    </motion.button>
                </div>

                <motion.div
                    className="fixed inset-0 z-40 bg-[#050816]/95 backdrop-blur-lg md:hidden"
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{
                        opacity: isMenuOpen ? 1 : 0,
                        x: isMenuOpen ? 0 : "100%"
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut"
                    }}
                >
                    <motion.div
                        className="flex flex-col items-center justify-center h-full space-y-8"
                        initial="hidden"
                        animate={isMenuOpen ? "visible" : "hidden"}
                    >
                        {menuItems.map((item, index) => {
                            const isActive = activeSection === item.id;

                            return (
                                <motion.div
                                    key={index}
                                    custom={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: (i) => ({
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                delay: i * 0.1,
                                                duration: 0.5
                                            }
                                        })
                                    }}
                                >
                                    <a
                                        href={item.href}
                                        onClick={(e) => scrollToSection(e, item.href)}
                                        className={`text-xl relative px-4 py-2 ${isActive
                                            ? "text-white bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-teal-500/20 rounded-lg"
                                            : "text-gray-300 hover:text-white"
                                            }`}
                                    >
                                        {item.name}
                                        {isActive && (
                                            <motion.span
                                                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500"
                                                layoutId="mobileActiveIndicator"
                                            />
                                        )}
                                    </a>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-violet-500/5 blur-2xl" />
                    <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-teal-500/5 blur-2xl" />
                </motion.div>
            </motion.nav>
        );
    }