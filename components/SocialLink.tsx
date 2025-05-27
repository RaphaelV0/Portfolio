"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialLinks() {
  const socialLinks = [
    { 
      icon: <FaGithub size={22} />, 
      url: "https://github.com/RaphaelV0", 
      name: "GitHub",
      gradient: "from-violet-500 via-blue-500 to-blue-600"
    },
    { 
      icon: <FaLinkedin size={22} />, 
      url: "https://linkedin.com/in/raphaël-verchain-49bb561a9", 
      name: "LinkedIn",
      gradient: "from-blue-500 via-teal-400 to-teal-500"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      className="flex gap-6 justify-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
          variants={item}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={`absolute -inset-0.5 bg-gradient-to-r ${link.gradient} rounded-full blur opacity-0 group-hover:opacity-100 transition duration-200`}></div>
          <div className="relative flex items-center justify-center h-14 w-14 bg-[#0a0a1a] border border-gray-700 rounded-full text-gray-300 hover:text-white transition duration-200">
            {link.icon}
          </div>
          <span className={`absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 text-xs text-white font-medium bg-gradient-to-r ${link.gradient} px-2 py-1 rounded-md transition-opacity duration-200`}>
            {link.name}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
}