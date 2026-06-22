import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import styles from "../styles/Portfolio.module.css";
import kenPhoto from "../assets/kentaroPhoto.jpeg";
import TategakiLabel from "./TategakiLabel";

export default function Hero() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const nextTheme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <div className={styles.section}>
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-6 py-6">
        <span className={`font-sans font-semibold text-lg ${styles.navLink}`}>
          Kentaro Barnes
        </span>
        <div className="flex items-center gap-6">
          <a href="#experience" className={styles.navLink}>
            Experience
          </a>
          <a href="#projects" className={styles.navLink}>
            Projects
          </a>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <MdDarkMode size={15} /> : <MdLightMode size={15} />}
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-10 pb-24 flex flex-col md:flex-row items-center gap-14">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.eyebrowRow}>
            <TategakiLabel text="自己紹介" />
            <h1 className={`${styles.heading} text-5xl md:text-6xl lg:text-7xl`}>
              Hey, I&apos;m
              <br />
              Kentaro.
            </h1>
          </div>
          <p className={`font-sans text-base md:text-lg max-w-md leading-relaxed mt-6 ${styles.bodyMuted}`}>
            I&apos;m a third year CS student at the University of British
            Columbia and an aspiring software engineer interested in building
            scalable and efficient software systems.
          </p>
          <div className="flex items-center gap-3 mt-7">
            <a
              href="https://www.github.com/KentoBaguetti"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.themeToggle}
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/barneskentaro/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.themeToggle}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex-shrink-0 w-[280px] md:w-[320px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={kenPhoto}
            alt="Kentaro"
            className="w-full h-[360px] object-cover rounded-2xl"
            style={{ filter: "grayscale(0.2) contrast(1.08)" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
