"use client";

import { motion } from "framer-motion";

export default function AnimatedText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
    >
      Cloud & DevOps Junior
    </motion.div>
  );
}