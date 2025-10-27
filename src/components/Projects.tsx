import { motion } from "motion/react";
import styles from "../styles/ProjectsStyling.module.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "GO Web Crawler",
    link: "https://github.com/KentoBaguetti/Web-Crawler-GO",
    basicDescription:
      "Web Crawler that scrapes web pages for URLs based on keywords and in parallel with the worker pool pattern and breadth first search.",
    technologies: ["Go", "net/http", "sync"],
  },
  {
    name: "Sonura",
    link: "https://github.com/marlotea/sonura",
    basicDescription:
      "Spotify Music Recommendation System + Playlist Generator. Allows users to swipe for songs like Tinder and generate playlists based on their preferences.",
    technologies: ["Python", "Spotipy", "FastAPI", "NextJS"],
  },
  {
    name: "Shuukan",
    link: "https://github.com/KentoBaguetti/Shuukan",
    basicDescription:
      "Mobile app to help schedule studying sessions + habits during exam season. Tracks user's progress and provides reminders as well as a pomodoro timer.",
    technologies: ["React Native", "TypeScript", "Expo"],
  },
  {
    name: "Debate Bot",
    link: "https://github.com/KentoBaguetti/Debate-Bot",
    basicDescription:
      "Bot made with the OpenAI api whose sole purpose is to rage bait you.",
    technologies: ["TypeScript", "OpenAI API", "React", "Express"],
  },
];

export default function Projects() {
  return (
    <div
      className={`overflow-hidden py-40 ${styles.main_container} flex flex-col justify-center items-center text-2xl text-center w-full`}
    >
      <div className="w-1/2 flex flex-col gap-4 justify-center items-center">
        <div className={`${styles.header} mb-10`}>Some of my projects...</div>
        <div className={`w-2/3 flex flex-col gap-8`}>
          {projects.map((project) => {
            return (
              <ProjectItem
                name={project.name}
                link={project.link}
                basicDescription={project.basicDescription}
                technologies={project.technologies}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const ProjectItem = ({
  name,
  link,
  basicDescription,
  technologies,
}: {
  name: string;
  link: string;
  basicDescription?: string;
  technologies?: string[];
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.05 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${styles.project_item} flex flex-col items-center justify-center`}
    >
      <div className="flex flex-row w-10/12 gap-8 justify-center items-center">
        <div className={`text-2xl font-bold ${styles.title}`}>{name}</div>
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
          >
            <FaGithub size={25} className="md:w-[30px] md:h-[30px]" />
          </a>
        </motion.button>
      </div>

      <div className="text-left text-sm">{basicDescription}</div>
      <div className="flex flex-row gap-4 w-10/12 justify-center items-center mt-6">
        {technologies?.map((tech) => (
          <TechItem name={tech} />
        ))}
      </div>
    </motion.div>
  );
};

const TechItem = ({ name }: { name: string }) => {
  return (
    <div className={`${styles.tech_item} text-xs`}>
      <div>{name}</div>
    </div>
  );
};
