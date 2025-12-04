import styles from "../styles/ExperienceStyling.module.css";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import microsoftLogo from "../assets/microsoft_logo.png";
import welloLogo from "../assets/wello_logo.png";
import cuhkLogo from "../assets/cuhk_logo.jpg";
import consignLogo from "../assets/consign_ai_logo.jpeg";

export default function Experience() {
  return (
    <div
      className={`flex flex-col justify-center items-center py-20 md:py-32 ${styles.main_container}`}
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

          <ExperienceItem
            role="Incoming Software Engineer Intern"
            company="Microsoft"
            date="January 2026 - April 2026"
            url="https://www.microsoft.com/en-ca/"
            logo={microsoftLogo}
          />
          <ExperienceItem
            role="Software Engineer Intern"
            company="Wello Wallet"
            date="September 2025 - December 2025"
            url="https://www.wello.tech/"
            logo={welloLogo}
          />
          <ExperienceItem
            role="Software Developer"
            company="CUHK Business School"
            date="May 2025 - August 2025"
            url="https://www.bschool.cuhk.edu.hk/"
            logo={cuhkLogo}
          />
          <ExperienceItem
            role="Software Engineer Intern"
            company="Consign AI"
            date="February 2024 - March 2025"
            url=""
            logo={consignLogo}
          />
        </motion.div>
      </div>
    </div>
  );
}

const ExperienceItem = ({
  role,
  company,
  date,
  logo,
  url,
}: {
  role: string;
  company: string;
  date: string;
  url: string;
  logo: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

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
      variants={{
        hidden: { opacity: 0, x: -30, scale: 0.95 },
        visible: { opacity: 1, x: 0, scale: 1 },
      }}
      transition={{ duration: 0.5, type: "spring" }}
      className="relative w-full perspective-1000"
    >
      <div
        className={`block group ${!url ? "cursor-default" : "cursor-pointer"}`}
      >
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
          />
        ) : null}
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateY,
            rotateX,
            transformStyle: "preserve-3d",
          }}
          className={`flex flex-row gap-4 items-center relative h-full w-full rounded-2xl bg-white/40 p-5 md:p-6 shadow-lg border border-white/60 backdrop-blur-lg transition-all duration-300 group-hover:shadow-custom group-hover:bg-white/60 group-hover:border-tron-blue/50`}
        >
          <div
            style={{ transform: "translateZ(50px)" }}
            className="flex-shrink-0 bg-white p-2 rounded-lg shadow-sm border border-slate-100"
          >
            <img
              src={logo}
              className="w-12 md:w-14 h-12 md:h-14 object-contain"
              alt={`${company} logo`}
            />
          </div>

          <div
            style={{ transform: "translateZ(30px)" }}
            className="flex flex-col justify-center flex-grow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-slate-800 text-base md:text-lg leading-tight group-hover:text-tron-blue/90 transition-colors">
                  {role}
                </h3>
                <div className="text-sm font-medium text-slate-600 mt-1">
                  @ <span className="text-slate-800">{company}</span>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-tron-blue"
              >
                {url ? <FaExternalLinkAlt size={14} /> : null}
              </motion.div>
            </div>

            <div
              className={`${styles.date} text-xs md:text-sm mt-2 font-medium flex items-center gap-2`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-tron-blue/50"></div>
              {date}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
