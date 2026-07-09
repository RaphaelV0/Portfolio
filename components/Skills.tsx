"use client";

import { motion } from "framer-motion";
import {
  FaCogs,
  FaShieldAlt,
  FaServer,
  FaDatabase,
  FaCode,
  FaBell,
} from "react-icons/fa";

type SkillGroup = {
  title: string;
  items: string[];
  icon: React.ReactNode;
};

const skillGroups: SkillGroup[] = [
  {
    title: "INFRASTRUCTURE & CLOUD",
    items: ["Proxmox", "Terraform", "Cloudflare", "GCP", "OVHcloud", "HAProxy", "Ceph", "NFS", "Nginx", "Docker"],
    icon: <FaServer className="text-[#79C0FF]" />,
  },
  {
    title: "DEVOPS & CI/CD",
    items: ["Ansible", "GitLab CI", "GitHub Actions", "Git", "Bash"],
    icon: <FaCogs className="text-[#79C0FF]" />,
  },
  {
    title: "SECURITE & DEVSECOPS",
    items: ["OpenBao", "Trivy", "Grype", "Harbor", "Dependency-Track", "NetBird", "OpenVPN"],
    icon: <FaShieldAlt className="text-[#79C0FF]" />,
  },
  {
    title: "MONITORING & ALERTING",
    items: ["Grafana", "Zabbix", "Graylog", "Mattermost", "Prometheus"],
    icon: <FaBell className="text-[#79C0FF]" />,
  },
  {
    title: "DATABASES",
    items: ["MariaDB", "MySQL", "MongoDB", "PostgreSQL", "Talend", "Redis"],
    icon: <FaDatabase className="text-[#79C0FF]" />,
  },
  {
    title: "DEVELOPPEMENT",
    items: ["Python", "Next.js", "React", "Symfony", "Vue.js", "TypeScript"],
    icon: <FaCode className="text-[#79C0FF]" />,
  },
];

function SkillCard({ skill, index }: { skill: SkillGroup; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      viewport={{ once: true, amount: 0.2 }}
      className="border border-[#30363d] bg-[#161b22]/40 p-6"
    >
      <div className="flex items-center gap-3 border-b  border-[#30363d] pb-4">
        <div className="flex h-12 w-12 items-center justify-center  border border-[#30363d] bg-[#0d1117]">
          {skill.icon}
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
            SYS_CAPABILITY
          </p>
          <h3 className="font-mono text-base font-semibold text-[#e5e9ec]">{skill.title}</h3>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="border border-[#30363d] bg-[#0d1117] px-3 py-1.5 font-mono text-sm text-[#7ee787]"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="competences" className="py-24 bg-[#0D1117] border-b border-[#30363d]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 max-w-3xl"
        >
            <p className="font-mono text-[#7EE787] text-sm">
            /usr/local/bin/stack_inventory
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-[#e5e9ec]">
            Inventaire technique
          </h2>
          <p className="mt-4 max-w-2xl font-mono text-base leading-7 text-slate-400">
            Référentiel des technologies maîtrisées, classées par domaine d&apos;application système et infrastructure.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}