"use client";
import React, { useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import { AnimatePresence } from "motion/react";
import TypeWriter from "typewriter-effect";
import getLeetcodeStats from "../../utils/leetcodeEndpoint";

export default function About() {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		amount: 0.3,
		once: false,
	});

	const [expanded, setExpanded] = useState(false);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		if (!isInView) {
			setExpanded(false);
		}
		const fetchStats = async () => {
			const stats = await getLeetcodeStats();
			if (stats) {
				const { total: t } = stats;
				setTotal(t);
			} else {
				console.log("Failed to fetch Leetcode stats.");
			}
		};
		fetchStats();
	}, [isInView]);

	return (
		<div
			ref={ref}
			className="relative mx-auto w-full max-w-2xl p-2 md:p-8 flex items-center justify-center"
		>
			<motion.div
				initial={{ x: -200, opacity: 0 }}
				animate={{
					x: isInView ? 0 : -100,
					opacity: isInView ? (expanded ? 0 : 1) : 0,
				}}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="border-solid border-4 border-zinc-900/80 dark:border-gray-200 dark:text-gray-200 rounded-4xl dark:bg-zinc-900/80 shadow-xl w-full min-h-[200px] md:h-auto flex flex-col md:flex-row items-center md:items-stretch p-3 md:p-8 gap-2 md:gap-6"
				onClick={() => {
					if (expanded) setExpanded(false);
					else setExpanded(true);
				}}
			>
				{/* Left: Title */}
				<div className="flex flex-col text-2xl md:text-4xl font-bold text-center md:text-left md:flex-1 items-center justify-center w-full md:w-[275px] h-[60px] md:h-[275px]">
					<TypeWriter
						key={isInView ? "in-view" : "out-of-view"}
						onInit={(typewriter) => {
							typewriter.typeString("About Me").start();
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
				<div className="flex flex-col justify-center gap-1 md:gap-3 text-xs md:text-lg md:flex-1 flex-1">
					<p>• Software developer who enjoys building products</p>
					<p>
						• Computer Science student at the University of British Columbia
					</p>
					<p>• Learning how to build scalable and efficient software</p>
				</div>
			</motion.div>
			<AnimatePresence initial={false}>
				{expanded ? (
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
						className="absolute top-0 left-0 right-0 z-10 border-solid border-4 border-zinc-900/80 dark:border-gray-200 dark:text-gray-200 rounded-4xl dark:bg-zinc-900/80 shadow-xl w-full min-h-[200px] md:h-auto flex flex-col md:flex-row items-center md:items-stretch p-3 md:p-8 gap-2 md:gap-6"
						onClick={() => {
							if (expanded) setExpanded(false);
							else setExpanded(true);
						}}
					>
						{/* Left: Title */}
						<div className="flex flex-col text-2xl md:text-4xl font-bold text-center md:text-left md:flex-1 items-center justify-center w-full md:w-[275px] h-[60px] md:h-[275px]">
							<div>About Me</div>
							<div className="text-sm">Details</div>
						</div>
						{/* Right: Details */}
						<div className="flex flex-col justify-center gap-1 md:gap-3 text-xs md:text-lg md:flex-1 flex-1 overflow-y-auto">
							<ul className="list-disc pl-5">
								<li>Third year Computer Science student at UBC</li>
								<li>Proficient in full-stack development</li>
								<li>
									Hobbies: Football, Programming, Cooking, Snowboarding, Hiking
								</li>
								<li>Leetcode Problems Solved (I am not a nerd): {total}</li>
							</ul>
						</div>
					</motion.div>
				) : null}
			</AnimatePresence>
		</div>
	);
}
