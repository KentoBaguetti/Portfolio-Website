import styles from "../styles/ExperienceStyling.module.css";
import { motion } from "framer-motion";

import microsoftLogo from "../assets/microsoft_logo.png";
import welloLogo from "../assets/wello_logo.png";
import cuhkLogo from "../assets/cuhk_logo.jpg";
import consignLogo from "../assets/consign_ai_logo.jpeg";

export default function Experience() {
  return (
    <div
      className={`flex flex-row justify-center items-center ${styles.main_container}`}
    >
      <div className="flex flex-col overflow-hidden items-center justify-center gap-8 w-2/3 pb-20">
        <div className="flex flex-col gap-12 pb-20 sm:pb-4">
          <div className={styles.header}>What I've been up to...</div>
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
            date="September 2025 - Present"
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
            url="https://consignai.co/"
            logo={consignLogo}
          />
        </div>
      </div>
    </div>
  );
}

const ExperienceItem = ({
  role,
  company,
  date,
  logo,
}: {
  role: string;
  company: string;
  date: string;
  url: string;
  logo: string;
}) => {
  return (
    <motion.div
      className={`flex flex-row gap-4 ${styles.experience_container}`}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.1 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <img src={logo} className="w-16 rounded-md" />
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <span className={styles.role}>{role}</span>{" "}
          <span className={styles.company}>@ {company}</span>
        </div>
        <div className={styles.date}>{date}</div>
      </div>
    </motion.div>
  );
};
