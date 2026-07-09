"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialLinks() {
  const socialLinks = [
    { 
      icon: <FaGithub size={22} />, 
      url: "https://github.com/RaphaelV0", 
      name: "GitHub"
    },
    { 
      icon: <FaLinkedin size={22} />, 
      url: "https://linkedin.com/in/raphaël-verchain-49bb561a9", 
      name: "LinkedIn"
    },
  ];

  return (
    <div className="flex gap-4 justify-center">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <div className="relative flex items-center justify-center h-11 w-11 bg-slate-900 border border-white/10 rounded-full text-slate-300 hover:text-white transition duration-200">
            {link.icon}
          </div>
          <span className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 text-xs text-white font-medium bg-slate-900 px-2 py-1 rounded-md border border-white/10 transition-opacity duration-200">
            {link.name}
          </span>
        </a>
      ))}
    </div>
  );
}