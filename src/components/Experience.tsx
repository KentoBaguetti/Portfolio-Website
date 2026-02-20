import styles from "../styles/ExperienceStyling.module.css";
import { motion } from "motion/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import microsoftLogo from "../assets/microsoft_logo.png";
import welloLogo from "../assets/wello_logo.png";
import cuhkLogo from "../assets/cuhk_logo.jpg";
import consignLogo from "../assets/consign_ai_logo.jpeg";

interface ExperienceData {
  id: string;
  role: string;
  company: string;
  url: string;
  logo: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceData[] = [
  {
    id: "microsoft",
    role: "Software Engineer Intern",
    company: "Microsoft",
    url: "https://www.microsoft.com/en-ca/",
    logo: microsoftLogo,
    description: "XGTG team",
    technologies: ["C++", "Unreal Engine", "C#", ".NET", "Azure IaC"],
  },
  {
    id: "wello",
    role: "Software Engineer Intern",
    company: "Wello Wallet",
    url: "https://www.wello.tech/",
    logo: welloLogo,
    description:
      "Backend engineering for Fintech applications. Engineered an OAuth2 server in Golang, migrated and refactored legacy Java code.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Go",
      "Java",
      "SpringBoot",
      "MySQL",
      "Redis",
    ],
  },
  {
    id: "cuhk",
    role: "Software Developer",
    company: "CUHK Business School",
    url: "https://www.bschool.cuhk.edu.hk/",
    logo: cuhkLogo,
    description:
      "Developed an interactive, real-time multiplayer game platform for economics students to better understand Game Theory.",
    technologies: ["TypeScript", "React.js", "Socket.IO", "Express"],
  },
  {
    id: "consign",
    role: "Software Engineer Intern",
    company: "Consign AI",
    url: "",
    logo: consignLogo,
    description:
      "Developed AI Automation scripts and worked on AI Translation Applications. Developed a frontend dashboard for clients.",
    technologies: ["JavaScript", "Python", "Puppeteer", "MongoDB", "Redis"],
  },
];

export default function Experience() {
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const logoRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [lineMetrics, setLineMetrics] = useState({ top: 0, height: 0 });

  useEffect(() => {
    const updateLineMetrics = () => {
      const container = timelineContainerRef.current;
      const logoElements = logoRefs.current.filter(
        (logo): logo is HTMLDivElement => logo !== null
      );
      const firstLogo = logoElements[0];
      const lastLogo = logoElements[logoElements.length - 1];

      if (!container || !firstLogo || !lastLogo) return;

      const containerRect = container.getBoundingClientRect();
      const firstLogoRect = firstLogo.getBoundingClientRect();
      const lastLogoRect = lastLogo.getBoundingClientRect();

      const top =
        firstLogoRect.top - containerRect.top + firstLogoRect.height / 2;
      const bottom =
        lastLogoRect.top - containerRect.top + lastLogoRect.height / 2;
      setLineMetrics({
        top,
        height: Math.max(bottom - top, 0),
      });
    };

    updateLineMetrics();
    window.addEventListener("resize", updateLineMetrics);
    return () => window.removeEventListener("resize", updateLineMetrics);
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-center py-20 md:py-32 ${styles.main_container} relative`}
    >
      <div className="w-full max-w-6xl px-4 md:px-10">
        <motion.div
          className={`${styles.header} mb-12`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.45 }}
        >
          What I've been up to...
        </motion.div>

        <div ref={timelineContainerRef} className="w-full md:w-4/5 md:ml-auto relative">
          <motion.div
            className="hidden md:block absolute left-8 w-px bg-tron-blue/40 origin-top"
            style={{ top: `${lineMetrics.top}px`, height: `${lineMetrics.height}px` }}
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="flex flex-col gap-14 md:gap-16">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={exp.id}
                data={exp}
                index={index}
                setLogoRef={(el) => {
                  logoRefs.current[index] = el;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const ExperienceItem = ({
  data,
  index,
  setLogoRef,
}: {
  data: ExperienceData;
  index: number;
  setLogoRef: (el: HTMLDivElement | null) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="grid grid-cols-1 md:grid-cols-[64px_minmax(0,1fr)] gap-5 md:gap-7 items-start"
    >
      <div className="relative flex justify-start md:justify-center">
        <div
          ref={setLogoRef}
          className="z-10 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/90 border border-tron-blue/35 p-2 shadow-md"
        >
          <img
            src={data.logo}
            className="w-full h-full object-contain"
            alt={`${data.company} logo`}
          />
        </div>
      </div>

      <div className="text-left">
        <div className="text-2xl md:text-3xl font-bold text-slate-800">{data.company}</div>
        <div className="text-sm md:text-base font-semibold text-slate-600 mt-1">{data.role}</div>
        <p className="text-slate-700 text-sm md:text-base leading-relaxed mt-3">
          {data.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {data.technologies.map((tech) => (
            <div key={tech} className={styles.tech_item}>
              {tech}
            </div>
          ))}
        </div>

        {data.url && (
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-tron-blue hover:text-blue-600 font-bold transition-colors text-sm md:text-base mt-4"
          >
            Visit Website <FaExternalLinkAlt size={12} />
          </a>
        )}
      </div>
    </motion.div>
  );
};
