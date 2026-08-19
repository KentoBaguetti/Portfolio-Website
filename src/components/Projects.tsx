const projects = [
    {
        name: 'GO Web Crawler',
        link: 'https://github.com/KentoBaguetti/Web-Crawler-GO',
        description:
            'Web Crawler that scrapes web pages for URLs based on keywords and in parallel with the worker pool pattern and breadth first search.',
        technologies: ['Go', 'net/http', 'sync'],
    },
    {
        name: 'Sonura',
        link: 'https://github.com/marlotea/sonura',
        description:
            'Spotify Music Recommendation System + Playlist Generator. Allows users to swipe for songs like Tinder and generate playlists based on their preferences.',
        technologies: ['Python', 'Spotipy', 'FastAPI', 'NextJS'],
    },
];

export default function Projects() {
    return (
        <div id="projects">
            <div className="flex flex-col gap-8">
                {projects.map((project) => (
                    <div
                        key={project.name}
                        className="max-w-xl border-b pb-6 last:border-b-0"
                    >
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-semibold underline"
                        >
                            {project.name}
                        </a>

                        <div className="mt-2 leading-relaxed">
                            {project.description}
                        </div>

                        <div className="mt-2 flex flex-wrap text-sm">
                            {project.technologies.map((tech, index) => (
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
