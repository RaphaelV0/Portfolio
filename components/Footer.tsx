"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, link: "https://github.com/RaphaelV0", label: "GitHub" },
    {
      icon: FaLinkedin,
      link: "https://linkedin.com/in/raphaël-verchain-49bb561a9",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-[#0D1117] border-t border-[#30363d] pt-6 pb-2">
      <div className="container mx-auto px-4 max-w-5xl flex flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="font-mono text-xs md:text-sm text-slate-400 font-light whitespace-nowrap">
          © {new Date().getFullYear()} Raphaël Verchain.
        </p>

        {/* Status Badge - Couleur harmonisée */}
        <span className="hidden md:flex items-center gap-2 px-3 py-0.5 rounded border border-[#30363d] bg-[#0D1117] font-mono text-[11px] text-slate-500 whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--syntax-green)] animate-pulse" />
          nextjs | typescript | tailwind
        </span>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center gap-2 text-slate-400 hover:text-[var(--syntax-green)] transition-colors"
              >
                <span className="font-mono text-xs opacity-60">./</span>
                <Icon size={19} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
