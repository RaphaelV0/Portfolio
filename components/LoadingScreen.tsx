"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2300); // Attendre la fin de l'animation

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="fixed inset-0 z-[100] bg-[#0A0A0A] flex items-center justify-center"
            onAnimationComplete={() => setIsVisible(false)}
        >
            <div className="text-center">
                <motion.div
                    className="mb-6 text-5xl font-semibold text-white font-mono"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    RV
                </motion.div>

                <motion.div
                    className="flex gap-2 justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="h-3 w-3 rounded-full bg-emerald-400"
                            animate={{ scale: [1, 1.35, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}