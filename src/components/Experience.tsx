interface ExperienceData {
    id: string;
    role: string;
    company: string;
    technologies: string[];
    dateRange?: string;
    location?: string;
}

const experiences: ExperienceData[] = [
    {
        id: 'databricks',
        role: 'Software Engineering Intern',
        company: 'Databricks',
        technologies: [],
        dateRange: 'Winter 2027',
        location: 'Mountain View, CA',
    },
    {
        id: 'apple',
        role: 'Software Engineering Intern',
        company: 'Apple',
        technologies: ['Swift'],
        dateRange: 'May 2026 - September 2026',
        location: 'Vancouver, British Columbia',
    },
    {
        id: 'microsoft',
        role: 'Software Engineering Intern',
        company: 'Microsoft',
        technologies: ['C++', 'Unreal Engine', 'C#', '.NET'],
        dateRange: 'January 2026 - April 2026',
        location: 'Vancouver, British Columbia',
    },
    {
        id: 'wello',
        role: 'Backend Engineering Intern',
        company: 'Wello Wallet',
        technologies: ['Go', 'Java', 'SpringBoot', 'Redis'],
        dateRange: 'September 2025 - December 2025',
        location: 'Vancouver, British Columbia',
    },
    {
        id: 'cuhk',
        role: 'Software Developer',
        company: 'CUHK Business School',
        technologies: ['TypeScript', 'React.js', 'Socket.IO', 'Express'],
        dateRange: 'June 2025 - August 2025',
        location: 'Vancouver, British Columbia',
    },
    {
        id: 'consign',
        role: 'Software Engineering Intern',
        company: 'Consign AI',
        technologies: ['JavaScript', 'Python', 'Puppeteer', 'MongoDB'],
        dateRange: 'February 2024 - March 2025',
        location: 'Montreal, Quebec',
    },
];

export default function Experience() {
    return (
        <div id="experience">
            <div className="flex flex-col gap-8">
                {experiences.map((exp) => (
                    <div
                        key={exp.id}
                        className="w-full border-b pb-6 last:border-b-0"
                    >
                        <div className="flex justify-between gap-6">
                            <div>
                                <div className="text-lg">{exp.company}</div>
                                <div>{exp.role}</div>

                                {exp.technologies.length > 0 && (
                                    <div className="mt-1 flex flex-wrap text-sm">
                                        {exp.technologies.map((tech, index) => (
                                            <span key={tech}>
                                                {index > 0 && (
                                                    <span className="mx-2">,</span>
                                                )}
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {(exp.dateRange || exp.location) && (
                                <div className="shrink-0 text-right">
                                    {exp.dateRange && <div>{exp.dateRange}</div>}
                                    {exp.location && <div>{exp.location}</div>}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
