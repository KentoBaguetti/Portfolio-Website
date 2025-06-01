"use client";
import React, { useEffect, useRef } from "react";
// import useState from "react";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Chip from "@mui/material/Chip";

const projectBoxStyle =
	"border-zinc-900/80 dark:border-gray-200 border-4 rounded-3xl p-3";

function WavyFeaturedProjects() {
	const text = "Featured Projects";
	const letters = text.split("");

	return (
		<div className="flex flex-col flex-auto justify-center items-center text-3xl">
			<div className="flex">
				{letters.map((letter, index) => (
					<motion.span
						key={index}
						className="inline-block"
						style={{
							willChange: "transform",
						}}
						animate={{
							y: [-10, 10],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							repeatType: "mirror",
							ease: [0.4, 0, 0.6, 1],
							delay: index * 0.1,
						}}
					>
						{letter === " " ? "\u00A0" : letter}
					</motion.span>
				))}
			</div>
		</div>
	);
}

export default function Projects() {
	// const [isMobile, setIsMobile] = useState(false);

	const ref = useRef(null);
	const mobileRef = useRef(null);
	const isInView = useInView(ref, { amount: 0.0, margin: "-300px" });
	const isMobileInView = useInView(mobileRef, { amount: 0.0, margin: "-100px" });

	useEffect(() => {
		console.log(`User is ${isInView ? "in" : "not in"} view`);
	}, [isInView]);

	useEffect(() => {
		// const mediaQuery = window.matchMedia("(max-width: 768px)");
		// setIsMobile(mediaQuery.matches);
	}, []);

	return (
		<div className="dark:text-gray-200 min-h-screen min-w-screen flex flex-col justify-center items-center">
			{/* Desktop layout */}
			<div className="hidden md:block w-full max-w-6xl">
				<div
					ref={ref}
					className="relative mx-auto h-60 w-full place-content-center"
				>
					<motion.div
						className={`absolute bottom-0 left-[37%] top-0 w-[25%] ${projectBoxStyle}`}
						initial={{ y: 0, x: 0, opacity: 0 }}
						animate={{
							y: isInView ? "-80%" : "0%",
							x: isInView ? "-120%" : "0%",
							opacity: isInView ? 1 : 0,
						}}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.95 }}
						style={{ cursor: "pointer" }}
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
						className={`absolute bottom-0 left-[37%] top-0 w-[25%] ${projectBoxStyle}`}
						initial={{ y: 0, x: 0, opacity: 0 }}
						animate={{
							y: isInView ? "80%" : "0%",
							x: isInView ? "-120%" : "0%",
							opacity: isInView ? 1 : 0,
						}}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.95 }}
						style={{ cursor: "pointer" }}
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
						className={`absolute bottom-0 left-[37%] top-0 w-[25%] ${projectBoxStyle}`}
						initial={{ y: 0, x: 0, opacity: 0 }}
						animate={{
							y: isInView ? "-80%" : "0%",
							x: isInView ? "120%" : "0%",
							opacity: isInView ? 1 : 0,
						}}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.95 }}
						style={{ cursor: "pointer" }}
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
						className={`absolute bottom-0 left-[37%] top-0 w-[25%] ${projectBoxStyle}`}
						initial={{ y: 0, x: 0, opacity: 0 }}
						animate={{
							y: isInView ? "80%" : "0%",
							x: isInView ? "120%" : "0%",
							opacity: isInView ? 1 : 0,
						}}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.95 }}
						style={{ cursor: "pointer" }}
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
					<motion.div
						className={`absolute bottom-0 left-[37%] top-0 w-[25%] ${projectBoxStyle} flex flex-col justify-center items-center`}
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{
							opacity: isInView ? 1 : 1,
							scale: isInView ? 1 : 0.9,
						}}
						transition={{ duration: 0.5 }}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.95 }}
						style={{ cursor: "pointer" }}
					>
						<WavyFeaturedProjects />
					</motion.div>
				</div>
			</div>

			{/* Mobile layout */}
			<div className="md:hidden flex flex-col items-center space-y-6 px-4 py-8">
				{/* Featured Projects title */}
				<motion.div
					className={`${projectBoxStyle} flex flex-col justify-center items-center p-6`}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{
						opacity: 1,
						scale: 1,
					}}
					transition={{ duration: 0.5 }}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					style={{ cursor: "pointer" }}
				>
					<WavyFeaturedProjects />
				</motion.div>

				{/* Project cards in column */}
				<div ref={mobileRef} className="flex flex-col space-y-4 w-full max-w-sm">
					<motion.div
						className={`w-full ${projectBoxStyle}`}
						initial={{ y: 50, opacity: 0 }}
						animate={{
							y: isMobileInView ? 0 : 50,
							opacity: isMobileInView ? 1 : 0,
						}}
						transition={{ delay: 0.1 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						style={{ cursor: "pointer" }}
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
						className={`w-full ${projectBoxStyle}`}
						initial={{ y: 50, opacity: 0 }}
						animate={{
							y: isMobileInView ? 0 : 50,
							opacity: isMobileInView ? 1 : 0,
						}}
						transition={{ delay: 0.2 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						style={{ cursor: "pointer" }}
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
						className={`w-full ${projectBoxStyle}`}
						initial={{ y: 50, opacity: 0 }}
						animate={{
							y: isMobileInView ? 0 : 50,
							opacity: isMobileInView ? 1 : 0,
						}}
						transition={{ delay: 0.3 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						style={{ cursor: "pointer" }}
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
						className={`w-full ${projectBoxStyle}`}
						initial={{ y: 50, opacity: 0 }}
						animate={{
							y: isMobileInView ? 0 : 50,
							opacity: isMobileInView ? 1 : 0,
						}}
						transition={{ delay: 0.4 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						style={{ cursor: "pointer" }}
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
			</div>
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
		<div className="flex flex-row flex-auto items-center h-full ">
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
