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
            work="Backend Engineering Intern @ Wello"
            date="Sep 2025 - Present"
          />
          <ExperienceItem
            work="Software Developer @ CUHK Business School"
            date="May 2025 - Present"
          />
          <ExperienceItem
            work="Software Engineering Intern @ Consign AI"
            date="Feb 2024 - Mar 2025"
          />
        </div>
      </motion.div>
    </div>
  );
}

const ExperienceItem = ({ work, date }: { work: string; date: string }) => {
  return (
    <div className="flex flex-row justify-between items-center w-2/3 mb-1 py-1">
      <div className="text-lg text-tron-grey">{work}</div>
      <div className="text-lg text-tron-grey">{`[${date}]`}</div>
    </div>
  );
};
