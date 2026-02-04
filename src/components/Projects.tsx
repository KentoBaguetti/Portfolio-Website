import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import styles from "../styles/ProjectsStyling.module.css";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";

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
      className={`overflow-hidden py-20 md:py-40 ${styles.main_container} flex flex-col justify-center items-center text-2xl text-center w-full px-4`}
    >
      <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-4 justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className={`${styles.header} mb-6 md:mb-10`}
        >
          Some of my projects...
        </motion.div>
        <motion.div
          className={`w-full md:w-2/3 flex flex-col gap-8 md:gap-10`}
          style={{ perspective: 1000 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {projects.map((project) => {
            return (
              <ProjectItem
                key={project.name}
                name={project.name}
                link={project.link}
                basicDescription={project.basicDescription}
                technologies={project.technologies}
              />
            );
          })}
        </motion.div>
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
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.5, type: "spring" }}
      className="relative w-full"
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="block group">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateY,
            rotateX,
            transformStyle: "preserve-3d",
          }}
          className="relative h-full w-full rounded-2xl bg-white/40 p-6 md:p-8 shadow-lg border border-white/60 backdrop-blur-lg transition-all duration-300 group-hover:shadow-custom group-hover:bg-white/60 group-hover:border-tron-blue/50"
        >
          <div style={{ transform: "translateZ(75px)" }} className="flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-black/10 pb-4">
              <h3 className={`text-xl md:text-3xl font-bold text-left font-english ${styles.title}`}>
                {name}
              </h3>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                className="text-slate-700 group-hover:text-tron-blue transition-colors"
              >
                <FaGithub size={28} />
              </motion.div>
            </div>
            
            <p
              style={{ transform: "translateZ(50px)" }}
              className="text-left text-slate-700 text-sm md:text-base leading-relaxed font-medium"
            >
              {basicDescription}
            </p>

            <div className="flex flex-wrap gap-2 mt-2 pt-4 border-t border-black/5">
              {technologies?.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-bold text-slate-600 bg-white/50 rounded-full border border-tron-blue/30 shadow-sm group-hover:border-tron-blue/60 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
};
