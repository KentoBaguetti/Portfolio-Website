const projects = [
  {
    name: "Cournot Game",
    link: "https://cournot-game.vercel.app/",
    basicDescription: "Multiplayer cournot competition simulator",
  },
  {
    name: "Sonura",
    link: "https://github.com/marlotea/sonura",
    basicDescription:
      "Spotify Music Recommendation System + Playlist Generator",
  },
  {
    name: "Shuukan",
    link: "https://github.com/KentoBaguetti/Shuukan",
    basicDescription:
      "Mobile app to help schedule studying sessions + habits during exam season",
  },
  {
    name: "Debate Bot",
    link: "https://github.com/KentoBaguetti/Debate-Bot",
    basicDescription:
      "Bot made with the OpenAI api whose sole purpose is to rage bait you",
  },
  {
    name: "Maze Solver",
    link: "https://github.com/KentoBaguetti/Maze-Solver",
    basicDescription: "Maze solver with Dijkstras, Backtracking BFS, and DFS",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col font-sans w-full py-16">
      <h2 className="text-4xl mb-5 self-start">Projects</h2>
      <div className="w-full">
        {projects.map((project) => (
          <ProjectItem
            name={project.name}
            link={project.link}
            basicDescription={project.basicDescription}
          />
        ))}
      </div>
    </div>
  );
}

const ProjectItem = ({
  name,
  link,
  basicDescription,
}: {
  name: string;
  link: string;
  basicDescription?: string;
}) => {
  return (
    <div className="flex flex-row justify-between items-center w-full mb-1 py-1">
      <div className="text-lg">
        <a
          className="underline text-blue-700"
          rel="noopener noreferrer"
          target="_blank"
          href={link}
        >
          {name}
        </a>
        {` - ${basicDescription}`}
      </div>
    </div>
  );
};
