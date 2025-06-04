"use client";
import React, { useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Chip from "@mui/material/Chip";

const projectBoxStyle =
  "border-zinc-900/80 dark:border-gray-200 border-4 rounded-3xl p-3";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.1,
    once: false,
  });

  return (
    <div
      ref={ref}
      className="relative w-full h-auto p-4 flex flex-col items-center justify-center space-y-8 min-h-screen dark:text-gray-200"
    >
      <motion.div
        className={`w-full max-w-4xl ${projectBoxStyle}`}
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: isInView ? 0 : 50,
          opacity: isInView ? 1 : 0,
        }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        style={{ cursor: "pointer", transformOrigin: "center" }}
      >
        <ProjectCard
          name={projectsObj.Sonura.name}
          githubLink={projectsObj.Sonura.githubLink}
          shortDesc={projectsObj.Sonura.shortDesc}
          techStack={projectsObj.Sonura.techStack}
          imgUrl={projectsObj.Sonura.imgUrl}
          imgAlt={projectsObj.Sonura.imgAlt}
        />
      </motion.div>
      <motion.div
        className={`w-full max-w-4xl ${projectBoxStyle}`}
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: isInView ? 0 : 50,
          opacity: isInView ? 1 : 0,
        }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        style={{ cursor: "pointer", transformOrigin: "center" }}
      >
        <ProjectCard
          name={projectsObj.DebateBot.name}
          githubLink={projectsObj.DebateBot.githubLink}
          shortDesc={projectsObj.DebateBot.shortDesc}
          techStack={projectsObj.DebateBot.techStack}
          imgUrl={projectsObj.DebateBot.imgUrl}
          imgAlt={projectsObj.DebateBot.imgAlt}
        />
      </motion.div>
      <motion.div
        className={`w-full max-w-4xl ${projectBoxStyle}`}
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: isInView ? 0 : 50,
          opacity: isInView ? 1 : 0,
        }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        style={{ cursor: "pointer", transformOrigin: "center" }}
      >
        <ProjectCard
          name={projectsObj.Shuukan.name}
          githubLink={projectsObj.Shuukan.githubLink}
          shortDesc={projectsObj.Shuukan.shortDesc}
          techStack={projectsObj.Shuukan.techStack}
          imgUrl={projectsObj.Shuukan.imgUrl}
          imgAlt={projectsObj.Shuukan.imgAlt}
        />
      </motion.div>
      <motion.div
        className={`w-full max-w-4xl ${projectBoxStyle}`}
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: isInView ? 0 : 50,
          opacity: isInView ? 1 : 0,
        }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        style={{ cursor: "pointer", transformOrigin: "center" }}
      >
        <ProjectCard
          name={projectsObj.Portfolio.name}
          githubLink={projectsObj.Portfolio.githubLink}
          shortDesc={projectsObj.Portfolio.shortDesc}
          techStack={projectsObj.Portfolio.techStack}
          imgUrl={projectsObj.Portfolio.imgUrl}
          imgAlt={projectsObj.Portfolio.imgAlt}
        />
      </motion.div>
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
}

const projectsObj = {
  Sonura: {
    name: "Sonura",
    githubLink: "https://github.com/marlotea/sonura",
    shortDesc: "Tinder-swipe style Spotify recommendation full-stack app",
    techStack: ["NextJS", "Python", "FastAPI", "Tailwind", "PostgreSQL"],
    imgUrl: "/Spotify_logo_without_text.svg.webp",
    imgAlt: "Spotify logo",
  },
  DebateBot: {
    name: "Debate Bot",
    githubLink: "https://github.com/KentoBaguetti/Debate-Bot",
    shortDesc:
      "ChatBot made with the OpenAI API with the sole purpose of arguing and ragebaiting the user",
    techStack: ["TypeScript", "ReactJS", "NodeJS", "OpenAI API", "Express"],
    imgUrl: "",
    imgAlt: "Ace Lawyer",
  },
  Shuukan: {
    name: "Shuukan",
    githubLink: "https://github.com/KentoBaguetti/Shuukan",
    shortDesc:
      "Pomodoro app with a weekly schedule to keep you on track of your habits made for students when they gotta lock in for finals",
    techStack: ["TypeScript", "React Native", "Tailwind", "Expo"],
    imgUrl: "",
    imgAlt: "No img",
  },
  Portfolio: {
    name: "Portfolio Website",
    githubLink: "https://github.com/KentoBaguetti/Portfolio-Website",
    shortDesc: "My Portfolio website to teach me frontend",
    techStack: ["TypeScript", "NextJS", "Tailwind"],
    imgUrl: "",
    imgAlt: "No img",
  },
};

function ProjectCard({
  name,
  githubLink,
  shortDesc,
  techStack,
  imgUrl,
  imgAlt,
}: projectDetails) {
  return (
    <div className="flex flex-row flex-auto items-center h-full w-full">
      {imgUrl.length > 0 ? (
        <Image
          src={imgUrl}
          alt={imgAlt}
          width={100}
          height={100}
          className="w-1/4 mx-3"
        />
      ) : null}

      <div className="flex flex-col">
        <div className="text-lg flex flex-row items-center font-bold">
          <h1>{name}</h1>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:scale-125"
          >
            <FaGithub size={24} />
          </a>
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
  );
}
