"use client";
import React, { useState, useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";

const projectBoxStyle = "border-gray-200 border-4 rounded-3xl p-3";

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
					animate={{
						y: isInView ? "-80%" : "0%",
						x: isInView ? "-120%" : "0%",
						opacity: isInView ? 1 : 0,
					}}
					whileHover={{ scale: 1.2 }}
				>
					Box 1
				</motion.div>
				<motion.div
					className={`absolute bottom-0 left-[41%] top-0 w-[18%] ${projectBoxStyle}`}
					animate={{
						y: isInView ? "80%" : "0%",
						x: isInView ? "-120%" : "0%",
						opacity: isInView ? 1 : 0,
					}}
					whileHover={{ scale: 1.2 }}
				>
					Box 2
				</motion.div>
				<motion.div
					className={`absolute bottom-0 left-[41%] top-0 w-[18%] ${projectBoxStyle}`}
					animate={{
						y: isInView ? "-80%" : "0%",
						x: isInView ? "120%" : "0%",
						opacity: isInView ? 1 : 0,
					}}
					whileHover={{ scale: 1.2 }}
				>
					Box 3
				</motion.div>
				<motion.div
					className={`absolute bottom-0 left-[41%] top-0 w-[18%] ${projectBoxStyle}`}
					animate={{
						y: isInView ? "80%" : "0%",
						x: isInView ? "120%" : "0%",
						opacity: isInView ? 1 : 0,
					}}
					whileHover={{ scale: 1.2 }}
				>
					Box 4
				</motion.div>
				<motion.div
					className={`absolute bottom-0 left-[41%] top-0 w-[18%] ${projectBoxStyle} flex flex-col flex-auto justify-center items-center text-3xl`}
					whileHover={{ scale: 1.2 }}
				>
					Featured Projects
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
