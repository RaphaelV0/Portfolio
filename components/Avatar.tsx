"use client";

import { motion } from "framer-motion";

export default function Avatar() {
  return (
    <div className="relative">
      {/* Animated glow effect */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-blue-500 to-teal-400 blur-lg"
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.7, 0.5] 
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Avatar container */}
      <motion.div 
        className="relative h-32 w-32 md:h-40 md:w-40 rounded-full p-1.5 bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 overflow-hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        <div className="h-full w-full rounded-full overflow-hidden bg-[#080a20] flex items-center justify-center">
          {/* Simple logo or icon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400"
          >
            R
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}