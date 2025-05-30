"use client";
import React, { useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import TypeWriter from "typewriter-effect";

function ExpandedExperience({
	position,
	company,
	date,
	bulletPoints,
}: {
	position: string;
	company: string;
	date: string;
	bulletPoints: string[];
}) {
	return (
		<div className="flex flex-col dark:text-gray-200 ">
			<h1 className="text-xl">
				{position} | {company}
			</h1>
			<h2 className="text-sm text-gray-400">{date}</h2>
			<ul className="list-disc pl-5">
				{bulletPoints.map((point, index) => (
					<li key={index}>{point}</li>
				))}
			</ul>
		</div>
	);
}

export default function Experience() {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		amount: 0.3,
		once: false,
	});

	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		if (!isInView) {
			setExpanded(false);
		}
	}, [isInView]);

	return (
		<div
			ref={ref}
			className="relative mx-auto w-full max-w-2xl p-2 md:p-8 flex items-center justify-center"
		>
			<motion.div
				initial={{ x: 400, opacity: 0 }}
				animate={{
					x: isInView ? 0 : 100,
					opacity: isInView ? (expanded ? 0 : 1) : 0,
				}}
				transition={{ duration: 0.4, ease: "easeOut" }}
				className="border-solid border-4 border-zinc-900/80 dark:border-gray-200 dark:text-gray-200 rounded-4xl dark:bg-zinc-900/80 shadow-xl w-full h-[200px] md:h-auto flex flex-col md:flex-row items-center md:items-stretch p-3 md:p-8 gap-2 md:gap-6"
				onClick={() => {
					if (expanded) setExpanded(false);
					else setExpanded(true);
				}}
			>
				{/* Left: Title */}
				<div className="flex flex-col text-2xl md:text-4xl font-bold text-center md:text-left md:flex-1 items-center justify-center w-full md:w-[275px] h-[80px] md:h-[275px]">
					<TypeWriter
						key={isInView ? "in-view" : "out-of-view"}
						onInit={(typewriter) => {
							typewriter.typeString("Experience").start();
						}}
						options={{
							autoStart: true,
							loop: false,
							cursor: "|",
						}}
					/>
					<div className="text-sm">
						<TypeWriter
							key={isInView ? "in-view" : "out-of-view"}
							onInit={(typewriter) => {
								typewriter.typeString("Click Me!").start();
							}}
							options={{
								autoStart: true,
								loop: false,
								cursor: "|",
							}}
						/>
					</div>
				</div>
				{/* Right: Details */}
				<div className="flex flex-col justify-center gap-1 md:gap-3 text-sm md:text-xl md:flex-1">
					<p>• Software Engineer | Consign AI</p>
					<p>• Software Engineering Intern | Consign AI</p>
				</div>
			</motion.div>
			<AnimatePresence initial={false}>
				{expanded ? (
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
						className="absolute top-0 left-0 right-0 z-10 border-solid border-4 border-zinc-900/80 dark:border-gray-200 dark:text-gray-200 rounded-4xl dark:bg-zinc-900/80 shadow-xl w-full h-[200px] md:h-auto flex flex-col gap-2 md:gap-4 p-3 md:p-8 overflow-y-auto"
						onClick={() => {
							if (expanded) setExpanded(false);
							else setExpanded(true);
						}}
					>
						<ExpandedExperience
							position="Software Engineer"
							company="Consign AI"
							date="Jun 2024 - Mar 2025"
							bulletPoints={[
								"Developed AI Automated Solutions",
								"Implemented a secure frontend dashboard for clients",
								"Integrated a Mongo database into existing infrastructure",
								"Worked on voice-enabled AI agents that integrated with automation scripts",
							]}
						/>
						<ExpandedExperience
							position="Software Engineering Intern"
							company="Consign AI"
							date="Feb 2024 - Jun 2024"
							bulletPoints={[
								"Diagnosed and resolved bugs in automation scripts",
								"Researched viable database solutions for existing infrastructure",
							]}
						/>
					</motion.div>
				) : null}
			</AnimatePresence>
		</div>
	);
}
