"use client";
import React, { useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import TypeWriter from "typewriter-effect";

interface AboutProps {
	onClick: () => void;
	isExpanded: boolean;
}

export default function About({ onClick, isExpanded }: AboutProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		amount: 0.3, // Changed from "all" to 0.3 for better mobile detection
		once: false,
	});

	useEffect(() => {
		console.log(`The element ${isInView ? "is" : "IS NOT"} in view`);
	}, [isInView]);

	return (
		<div
			ref={ref}
			className="relative mx-auto w-full max-w-2xl p-2 md:p-8 flex items-center justify-center"
		>
			<motion.div
				initial={{ x: -100, opacity: 0 }}
				animate={{
					x: isInView ? 0 : -100,
					opacity: isInView ? 1 : 0,
				}}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className={`border-solid border-4 ${
					isExpanded
						? "border-blue-500 dark:border-blue-400"
						: "border-zinc-900/80"
				} dark:border-gray-200 dark:text-gray-200 rounded-4xl dark:bg-zinc-900/80 bg-white shadow-xl w-full min-h-[200px] md:h-auto flex flex-col md:flex-row items-center md:items-stretch p-3 md:p-8 gap-2 md:gap-6 cursor-pointer hover:shadow-2xl transition-all duration-300 ${
					isExpanded ? "ring-2 ring-blue-300 dark:ring-blue-500" : ""
				}`}
				onClick={onClick}
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
		</div>
	);
}
