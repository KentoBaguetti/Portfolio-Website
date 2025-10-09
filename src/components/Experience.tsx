import { motion } from "motion/react";

export default function Experience() {
  return (
    <div className="overflow-hidden">
      <motion.div
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
      </motion.div>
    </div>
  );
}

const ExperienceItem = ({
  role,
  company,
  date,
  url,
}: {
  role: string;
  company: string;
  date: string;
  url: string;
}) => {
  return (
    <div className="flex flex-row justify-between items-center w-2/3 mb-1 py-1">
      <div className="text-lg text-tron-grey">
        {role} @{" "}
        <span className="text-tron-yellow">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 no-underline hover:underline"
          >
            {company}
          </a>
        </span>
      </div>
      <div className="text-lg text-tron-grey">{`[${date}]`}</div>
    </div>
  );
};
