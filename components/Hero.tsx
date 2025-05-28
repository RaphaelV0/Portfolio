"use client";

import { motion } from "framer-motion";
import Avatar from "./Avatar";
import AnimatedText from "./AnimatedText";
import SocialLinks from "./SocialLink";

export default function Hero() {
    return (
        <section id="accueil" className="relative min-h-screen overflow-hidden text-white flex items-center justify-center">
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <Avatar />

                    <motion.h1
                        className="mt-8 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Salut, moi c&apos;est Raphaël Verchain
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="mt-6"
                    >
                        <AnimatedText />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="mt-6 max-w-xl mx-auto text-gray-300"
                    >
                        Je crée des expériences web innovantes et intuitives,
                        en combinant design moderne et performances techniques.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="mt-8"
                    >
                        <SocialLinks />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.a
                            href="#parcours"
                            className="px-8 py-3 bg-gradient-to-r from-violet-500 to-blue-600 rounded-full text-white font-medium 
             hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300 inline-block"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Découvrir mon profil
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </motion.div>
        </section>
    );
}