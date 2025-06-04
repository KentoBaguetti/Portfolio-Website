"use client";
import React, { useRef } from "react";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Chip from "@mui/material/Chip";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.1,
    once: false,
  });

  return (
    <div
      ref={ref}
      className="relative md:ml-[10%] w-full h-auto md:h-screen p-0 md:p-2 flex flex-col items-center justify-center space-y-8 dark:text-gray-200"
    >
      {projectArr.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          githubLink={project.githubLink}
          shortDesc={project.shortDesc}
          techStack={project.techStack}
          imgUrl={project.imgUrl}
          imgAlt={project.imgAlt}
          delay={index / 10 + 0.1}
          isInView={isInView}
        />
      ))}
    </div>
  );
}

interface projectDetails {
  name: string;
  githubLink: string;
  shortDesc: string;
  techStack: string[];
  imgUrl: string;
  imgAlt: string;
  delay: number;
  isInView: boolean;
}

const projectBoxStyle =
  "border-zinc-900/80 dark:border-gray-200 border-4 rounded-3xl p-3";

// project card component
// #TODO should probably move this into a separate component
function ProjectCard({
  name,
  githubLink,
  shortDesc,
  techStack,
  imgUrl,
  imgAlt,
  delay,
  isInView,
}: projectDetails) {
  return (
    <motion.a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full max-w-4xl ${projectBoxStyle}`}
      initial={{ y: 50, opacity: 0 }}
      animate={{
        y: isInView ? 0 : 50,
        opacity: isInView ? 1 : 0,
      }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      whileTap={{ scale: 0.95 }}
      style={{ cursor: "pointer", transformOrigin: "center" }}
    >
      <div className="flex flex-row flex-auto items-center h-full w-full p-2">
        {imgUrl.length > 0 ? (
          <Image
            src={imgUrl}
            alt={imgAlt}
            width={50}
            height={50}
            className="w-1/7 mx-3"
          />
        ) : null}

        <div className="flex flex-col">
          <div className="text-lg flex flex-row items-center font-bold">
            <h1>{name}</h1>
            <div className="mx-2">
              <FaGithub size={24} />
            </div>
          </div>
          <div className="text-sm">
            <p>{shortDesc}</p>
            <div>
              {techStack.map((point, index) => (
                <Chip
                  variant="outlined"
                  key={index}
                  label={point}
                  className="m-1"
                  sx={{
                    color: "var(--chip-text-color)",
                    borderColor: "var(--chip-border-color)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

const projectArr = [
  {
    name: "Sonura",
    githubLink: "https://github.com/marlotea/sonura",
    shortDesc: "Tinder-swipe style Spotify recommendation full-stack app",
    techStack: ["NextJS", "Python", "FastAPI", "Tailwind", "PostgreSQL"],
    imgUrl: "/Spotify_logo_without_text.svg.webp",
    imgAlt: "Spotify logo",
  },
  {
    name: "Debate Bot",
    githubLink: "https://github.com/KentoBaguetti/Debate-Bot",
    shortDesc:
      "ChatBot made with the OpenAI API with the sole purpose of arguing and ragebaiting the user",
    techStack: ["TypeScript", "ReactJS", "NodeJS", "OpenAI API", "Express"],
    imgUrl: "",
    imgAlt: "Ace Lawyer",
  },
  {
    name: "Shuukan",
    githubLink: "https://github.com/KentoBaguetti/Shuukan",
    shortDesc:
      "Pomodoro app with a weekly schedule to keep you on track of your habits made for students when they gotta lock in for finals",
    techStack: ["TypeScript", "React Native", "Tailwind", "Expo"],
    imgUrl: "",
    imgAlt: "No img",
  },
  {
    name: "Maze Solver",
    githubLink: "https://github.com/KentoBaguetti/Maze-Solver",
    shortDesc:
      "Visual maze solver with algorithms such as DFS, BFS, Backtracking, and Dijkstras.",
    techStack: ["Python", "matplotlib"],
    imgUrl: "",
    imgAlt: "No img",
  },
];
