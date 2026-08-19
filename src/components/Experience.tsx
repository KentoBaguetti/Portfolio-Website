interface ExperienceData {
    id: string;
    role: string;
    company: string;
    description: string;
    technologies: string[];
}

const experiences: ExperienceData[] = [
    {
        id: 'apple',
        role: 'Software Engineering Intern',
        company: 'Apple',
        description: 'Workflow reliability team',
        technologies: ['Swift'],
    },
    {
        id: 'microsoft',
        role: 'Software Engineering Intern',
        company: 'Microsoft',
        description: 'XGTG team @ The Coalition',
        technologies: ['C++', 'Unreal Engine', 'C#', '.NET'],
    },
    {
        id: 'wello',
        role: 'Backend Engineering Intern',
        company: 'Wello Wallet',
        description:
            'Backend engineering for Fintech applications. Engineered an OAuth2 server in Golang, migrated and refactored legacy Java code.',
        technologies: ['Go', 'Java', 'SpringBoot', 'Redis'],
    },
    {
        id: 'cuhk',
        role: 'Software Developer',
        company: 'CUHK Business School',
        description:
            'Developed an interactive, real-time multiplayer game platform for economics students to better understand Game Theory.',
        technologies: ['TypeScript', 'React.js', 'Socket.IO', 'Express'],
    },
    {
        id: 'consign',
        role: 'Software Engineering Intern',
        company: 'Consign AI',
        description:
            'Developed AI Automation scripts and worked on AI Translation Applications. Developed a secure frontend dashboard for clients.',
        technologies: ['JavaScript', 'Python', 'Puppeteer', 'MongoDB'],
    },
];

export default function Experience() {
    return (
        <div id="experience">
            <div className="flex flex-col gap-8">
                {experiences.map((exp) => (
                    <div
                        key={exp.id}
                        className="max-w-xl border-b pb-6 last:border-b-0"
                    >
                        <div className="flex items-center justify-between">
                            <div className="text-lg">{exp.company}</div>
                            <div className="text-right">{exp.role}</div>
                        </div>

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
                    </div>
                ))}
            </div>
        </div>
    );
}
