import styles from "../styles/ExperienceStyling.module.css";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import microsoftLogo from "../assets/microsoft_logo.png";
import welloLogo from "../assets/wello_logo.png";
import cuhkLogo from "../assets/cuhk_logo.jpg";
import consignLogo from "../assets/consign_ai_logo.jpeg";

interface ExperienceData {
  id: string;
  role: string;
  company: string;
  date: string;
  url: string;
  logo: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceData[] = [
  {
    id: "microsoft",
    role: "Incoming Software Engineer Intern",
    company: "Microsoft",
    date: "January 2026 - April 2026",
    url: "https://www.microsoft.com/en-ca/",
    logo: microsoftLogo,
    description: "Joining the Xbox team",
    technologies: ["C++"],
  },
  {
    id: "wello",
    role: "Software Engineer Intern",
    company: "Wello Wallet",
    date: "September 2025 - December 2025",
    url: "https://www.wello.tech/",
    logo: welloLogo,
    description:
      "Backend engineering for Fintech applications. Engineered an OAuth2 server in Golang, migrated and refactored legacy Java code. Did some frontend.",
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
    date: "May 2025 - August 2025",
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
    date: "February 2024 - March 2025",
    url: "",
    logo: consignLogo,
    description:
      "Developed AI Automation scripts and worked on AI Translation Applications. Developed a frontend dashboard for clients.",
    technologies: ["JavaScript", "Python", "Puppeteer", "MongoDB", "Redis"],
  },
];

export default function Experience() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const toggleSelection = (id: string) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <div
      className={`flex flex-col justify-center items-center py-20 md:py-32 ${styles.main_container} relative`}
    >
      <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col items-center gap-8 px-4">
        <motion.div
          className="flex flex-col gap-8 md:gap-10 w-full md:w-2/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            className={`${styles.header} mb-6`}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            What I've been up to...
          </motion.div>

          {experiences.map((exp) => (
            <ExperienceItem
              key={exp.id}
              data={exp}
              isOpen={selectedId === exp.id}
              onClick={() => toggleSelection(exp.id)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

const ExperienceItem = ({
  data,
  isOpen,
  onClick,
}: {
  data: ExperienceData;
  isOpen: boolean;
  onClick: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isOpen || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      variants={{
        hidden: { opacity: 0, x: -30, scale: 0.95 },
        visible: { opacity: 1, x: 0, scale: 1 },
      }}
      onClick={onClick}
      transition={{ layout: { duration: 0.4, type: "spring", bounce: 0.2 } }}
      className="relative w-full perspective-1000 cursor-pointer group"
    >
      <motion.div
        layout
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY: isOpen ? 0 : rotateY,
          rotateX: isOpen ? 0 : rotateX,
          transformStyle: "preserve-3d",
        }}
        className={`flex flex-col relative h-full w-full rounded-2xl bg-white/40 shadow-lg border border-white/60 backdrop-blur-lg transition-all duration-500 ${
          isOpen
            ? "p-6 md:p-8 bg-white/80 border-tron-blue/40 shadow-2xl scale-[1.02] z-10"
            : "p-5 md:p-6 hover:shadow-custom hover:bg-white/60 hover:border-tron-blue/50"
        }`}
      >
        <div
          className="flex flex-row gap-4 items-center w-full"
          style={{ transform: "translateZ(30px)" }}
        >
          <div
            className={`flex-shrink-0 bg-white p-2 rounded-lg shadow-sm border border-slate-100 transition-all duration-300 ${
              isOpen ? "w-16 h-16 md:w-20 md:h-20" : "w-12 h-12 md:w-14 md:h-14"
            }`}
          >
            <img
              src={data.logo}
              className="w-full h-full object-contain"
              alt={`${data.company} logo`}
            />
          </div>

          <div className="flex flex-col justify-center flex-grow">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <motion.h3
                  layout="position"
                  className={`font-bold text-slate-800 leading-tight transition-all duration-300 ${
                    isOpen
                      ? "text-xl md:text-2xl mb-1"
                      : "text-base md:text-lg group-hover:text-tron-blue/90"
                  }`}
                >
                  {data.role}
                </motion.h3>
                <motion.div
                  layout="position"
                  className={`font-medium text-slate-600 transition-all duration-300 ${
                    isOpen ? "text-base md:text-lg" : "text-sm"
                  }`}
                >
                  @ <span className="text-slate-800">{data.company}</span>
                </motion.div>
              </div>

              {!isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-tron-blue opacity-0 group-hover:opacity-100 transition-opacity"
                ></motion.div>
              )}
            </div>

            <motion.div
              layout="position"
              className={`${styles.date} ${
                isOpen ? "text-sm md:text-base mt-3" : "text-xs md:text-sm mt-2"
              } font-medium flex items-center gap-2`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-tron-blue/50"></div>
              {data.date}
            </motion.div>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-6 border-t border-slate-200/60 flex flex-col gap-6">
                <div className="text-slate-700 text-base md:text-lg leading-relaxed">
                  {data.description}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.technologies.map((tech) => (
                      <div key={tech} className={styles.tech_item}>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {data.url && (
                  <div className="pt-2 flex justify-end">
                    <a
                      href={data.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-tron-blue hover:text-blue-600 font-bold transition-colors text-sm md:text-base group/link"
                    >
                      Visit Website
                      <FaExternalLinkAlt
                        size={12}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
