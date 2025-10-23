import { motion } from "motion/react";
import styles from "../styles/ExperienceStyling.module.css";

import microsoftLogo from "../assets/microsoft_logo.png";
import welloLogo from "../assets/wello_logo.png";
import cuhkLogo from "../assets/cuhk_logo.jpg";
import consignLogo from "../assets/consign_ai_logo.jpeg";

export default function Experience() {
  return (
    <div className="flex flex-col overflow-hidden items-center justify-center gap-8">
      <div className="flex flex-col gap-8">
        <div className={styles.header}>what I've been up to...</div>
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
  );
}

{
  /* <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full py-16"
      >
        <h2 className="text-4xl mb-5 self-start font-bold">Experience</h2>
        <div className="text-tron-grey">
          <ExperienceItem
            role="Incoming Software Engineering Intern"
            company="Microsoft"
            date="Jan 2026"
            url="https://www.microsoft.com/en-ca/"
          />
          <ExperienceItem
            role="Backend Engineering Intern"
            company="Wello"
            date="Sep 2025 - Present"
            url="https://www.wello.tech/"
          />
          <ExperienceItem
            role="Software Developer"
            company="CUHK Business School"
            date="May 2025 - Aug 2025"
            url="https://www.bschool.cuhk.edu.hk/"
          />
          <ExperienceItem
            role="Software Engineering Intern"
            company="Consign AI"
            date="Feb 2024 - Mar 2025"
            url="https://consignai.co/"
          />
        </div>
      </motion.div> */
}

const ExperienceItem = ({
  role,
  company,
  date,
  url,
  logo,
}: {
  role: string;
  company: string;
  date: string;
  url: string;
  logo: any;
}) => {
  return (
    <div className="flex flex-row">
      <div>
        <img src={logo} className="w-24 rounded-md" />
      </div>
      <div className="flex flex-col">
        <div>
          <span className={styles.role}>{role}</span>{" "}
          <span className={styles.company}>@ {company}</span>
        </div>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
  );
};
