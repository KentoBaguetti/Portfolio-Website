import { motion } from "motion/react";
import styles from "../styles/Portfolio.module.css";
import TategakiLabel from "./TategakiLabel";
import appleLogo from "../assets/Apple-Logo.png";
import microsoftLogo from "../assets/microsoft_logo.png";
import welloLogo from "../assets/wello_logo.png";
import cuhkLogo from "../assets/cuhk_logo.jpg";
import consignLogo from "../assets/consign_ai_logo.jpeg";

interface ExperienceData {
  id: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
  logo: string;
}

const experiences: ExperienceData[] = [
  {
    id: "apple",
    role: "Software Engineering Intern",
    company: "Apple",
    description: "Workflow reliability team",
    technologies: ["Swift", "Microservices"],
    logo: appleLogo,
  },
  {
    id: "microsoft",
    role: "Software Engineer Intern",
    company: "Microsoft",
    description: "XGTG team @ The Coalition",
    technologies: ["C++", "Unreal Engine", "C#", ".NET", "Azure IaC"],
    logo: microsoftLogo,
  },
  {
    id: "wello",
    role: "Software Engineer Intern",
    company: "Wello Wallet",
    description:
      "Backend engineering for Fintech applications. Engineered an OAuth2 server in Golang, migrated and refactored legacy Java code.",
    technologies: ["Next.js", "TypeScript", "Go", "Java", "SpringBoot", "MySQL", "Redis"],
    logo: welloLogo,
  },
  {
    id: "cuhk",
    role: "Software Developer",
    company: "CUHK Business School",
    description:
      "Developed an interactive, real-time multiplayer game platform for economics students to better understand Game Theory.",
    technologies: ["TypeScript", "React.js", "Socket.IO", "Express"],
    logo: cuhkLogo,
  },
  {
    id: "consign",
    role: "Software Engineer Intern",
    company: "Consign AI",
    description:
      "Developed AI Automation scripts and worked on AI Translation Applications. Developed a secure frontend dashboard for clients.",
    technologies: ["JavaScript", "Python", "Puppeteer", "MongoDB", "Redis"],
    logo: consignLogo,
  },
];

export default function Experience() {
  return (
    <div className={styles.section} id="experience">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className={styles.eyebrowRow}>
          <TategakiLabel text="経歴" />
          <div>
            <motion.h2
              className={`${styles.heading} text-3xl md:text-4xl`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              What I&apos;ve been up to
            </motion.h2>
            <div className={styles.accentBar} />
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`${styles.card} flex gap-5 items-start`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className={styles.expBadge}>
                <img src={exp.logo} alt={`${exp.company} logo`} className={styles.expLogo} />
              </div>
              <div className="flex-1">
                <div className={styles.expTitle}>{exp.company}</div>
                <div className={styles.expRole}>{exp.role}</div>
                <p className={`${styles.expDescription} mt-2`}>{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className={styles.pill}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
