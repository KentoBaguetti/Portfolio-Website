"use client";
import React, { useState, useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";

const projectBoxStyle = "border-gray-200 border-4 rounded-3xl p-3";

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
	const [isMobile, setIsMobile] = useState(false);

	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.0, margin: "-300px" });

	useEffect(() => {
		console.log(`User is ${isInView ? "in" : "not in"} view`);
	}, [isInView]);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 768px)");
		setIsMobile(mediaQuery.matches);
	}, []);

	return (
		<div className="text-gray-200 min-h-screen min-w-screen flex justify-center items-center ">
			<div
				ref={ref}
				className="relative mx-auto grid h-60 w-11/12 place-content-center"
			>
				<motion.div
					className={`absolute bottom-0 left-[41%] top-0 w-[18%] ${projectBoxStyle}`}
					initial={{ y: 0, x: 0, opacity: 0 }}
					animate={{
						y: isInView ? "-80%" : "0%",
						x: isInView ? "-120%" : "0%",
						opacity: isInView ? 1 : 0,
					}}
					transition={{ duration: 0.6, delay: 0.1 }}
					whileHover={{ scale: 1.2 }}
				>
					Box 1
				</motion.div>
				<motion.div
					className={`absolute bottom-0 left-[41%] top-0 w-[18%] ${projectBoxStyle}`}
					initial={{ y: 0, x: 0, opacity: 0 }}
					animate={{
						y: isInView ? "80%" : "0%",
						x: isInView ? "-120%" : "0%",
						opacity: isInView ? 1 : 0,
					}}
					transition={{ duration: 0.6, delay: 0.2 }}
					whileHover={{ scale: 1.2 }}
				>
					Box 2
				</motion.div>
				<motion.div
					className={`absolute bottom-0 left-[41%] top-0 w-[18%] ${projectBoxStyle}`}
					initial={{ y: 0, x: 0, opacity: 0 }}
					animate={{
						y: isInView ? "-80%" : "0%",
						x: isInView ? "120%" : "0%",
						opacity: isInView ? 1 : 0,
					}}
					transition={{ duration: 0.6, delay: 0.3 }}
					whileHover={{ scale: 1.2 }}
				>
					Box 3
				</motion.div>
				<motion.div
					className={`absolute bottom-0 left-[41%] top-0 w-[18%] ${projectBoxStyle}`}
					initial={{ y: 0, x: 0, opacity: 0 }}
					animate={{
						y: isInView ? "80%" : "0%",
						x: isInView ? "120%" : "0%",
						opacity: isInView ? 1 : 0,
					}}
					transition={{ duration: 0.6, delay: 0.4 }}
					whileHover={{ scale: 1.2 }}
				>
					Box 4
				</motion.div>
				<motion.div
					className={`absolute bottom-0 left-[41%] top-0 w-[18%] ${projectBoxStyle} flex flex-col justify-center items-center`}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{
						opacity: isInView ? 1 : 0,
						scale: isInView ? 1 : 0.8,
					}}
					transition={{ duration: 0.5 }}
					whileHover={{ scale: 1.2 }}
				>
					<WavyFeaturedProjects />
				</motion.div>
			</div>
		</div>
	);
}

interface projectDetails {
	name: string;
	githubLink: string;
	shortDesc: string;
	techStack: string[];
}
