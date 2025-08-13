import { motion } from "motion/react";

const projects = [
  {
    name: "GO Web Crawler",
    link: "https://github.com/KentoBaguetti/Web-Crawler-GO",
    basicDescription:
      "Web Crawler that searches for more URLs based on an inital URL and given keywords",
  },
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
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full py-16"
      >
        <h2 className="text-4xl mb-5 self-start font-bold">Projects</h2>
        <div className="w-full">
          {projects.map((project) => (
            <ProjectItem
              name={project.name}
              link={project.link}
              basicDescription={project.basicDescription}
            />
          ))}
        </div>
      </motion.div>
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
      <div className="text-lg text-tron-grey">
        <a
          className="text-tron-yellow underline-offset-2 no-underline hover:underline"
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
