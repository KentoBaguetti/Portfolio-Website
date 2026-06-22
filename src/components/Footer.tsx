import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../styles/Portfolio.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-5">
          <a
            href="https://www.github.com/KentoBaguetti"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            <FaGithub size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/barneskentaro/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            <FaLinkedin size={18} /> LinkedIn
          </a>
        </div>
        <p className="font-sans text-sm opacity-60">
          Developed by Kentaro Barnes - 2026
        </p>
      </div>
    </footer>
  );
}
