export default function Experience() {
  return (
    <div className="flex flex-col font-sans w-full py-16">
      <h2 className="text-4xl mb-5 self-start">Experience</h2>
      <div className="w-full">
        <ExperienceItem
          work="Software Developer @ CUHK Business School"
          date="May 2025 - Present"
        />
        <ExperienceItem
          work="Software Engineering Intern @ Consign AI"
          date="Feb 2024 - Mar 2024"
        />
      </div>
    </div>
  );
}

const ExperienceItem = ({ work, date }: { work: string; date: string }) => {
  return (
    <div className="flex flex-row justify-between items-center w-full mb-1 py-1">
      <div className="text-lg">{work}</div>
      <div className="text-lg">{`[${date}]`}</div>
    </div>
  );
};
