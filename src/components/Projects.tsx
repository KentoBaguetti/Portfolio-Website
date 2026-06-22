import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import styles from "../styles/Portfolio.module.css";
import TategakiLabel from "./TategakiLabel";

const projects = [
  {
    name: "GO Web Crawler",
    link: "https://github.com/KentoBaguetti/Web-Crawler-GO",
    description:
      "Web Crawler that scrapes web pages for URLs based on keywords and in parallel with the worker pool pattern and breadth first search.",
    technologies: ["Go", "net/http", "sync"],
  },
  {
    name: "Sonura",
    link: "https://github.com/marlotea/sonura",
    description:
      "Spotify Music Recommendation System + Playlist Generator. Allows users to swipe for songs like Tinder and generate playlists based on their preferences.",
    technologies: ["Python", "Spotipy", "FastAPI", "NextJS"],
  },
  {
    name: "Shuukan",
    link: "https://github.com/KentoBaguetti/Shuukan",
    description:
      "Mobile app to help schedule studying sessions + habits during exam season. Tracks user's progress and provides reminders as well as a pomodoro timer.",
    technologies: ["React Native", "TypeScript", "Expo"],
  },
  {
    name: "Debate Bot",
    link: "https://github.com/KentoBaguetti/Debate-Bot",
    description: "Bot made with the OpenAI api whose sole purpose is to rage bait you.",
    technologies: ["TypeScript", "OpenAI API", "React", "Express"],
  },
];

export default function Projects() {
  return (
    <div className={styles.sectionAlt} id="projects">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className={styles.eyebrowRow}>
          <TategakiLabel text="制作" />
          <div>
            <motion.h2
              className={`${styles.heading} text-3xl md:text-4xl`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              Some of my projects
            </motion.h2>
            <div className={styles.accentBar} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.projectCard} block`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className={styles.cardTitle} style={{ marginBottom: 0 }}>
                  {project.name}
                </h3>
                <FaGithub size={20} className={styles.bodyMuted} />
              </div>
              <p className={`font-sans text-sm leading-relaxed ${styles.bodyMuted}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className={styles.pill}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
