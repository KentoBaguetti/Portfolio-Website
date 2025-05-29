"use client";
import React, { useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import TypeWriter from "typewriter-effect";

export default function About() {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: "all" });

	useEffect(() => {
		console.log(`The element ${isInView ? "is" : "IS NOT"} in view`);
	}, [isInView]);

	return (
		<div
			ref={ref}
			className="relative mx-auto h-96 w-full max-w-2xl p-4 md:p-8 flex items-center justify-center"
		>
			<motion.div
				initial={{ x: -100, opacity: 0 }}
				animate={{
					x: isInView ? 0 : 100,
					opacity: isInView ? 1 : 0,
				}}
				transition={{ duration: 0.4, ease: "easeOut" }}
				className="border-solid border-4 border-gray-200 rounded-4xl bg-zinc-900/80 shadow-xl w-full h-full flex flex-col md:flex-row items-center md:items-stretch p-6 md:p-8 gap-4 md:gap-6"
			>
				{/* Left: Title */}
				<div className="mb-4 md:mb-0 text-gray-200 text-3xl md:text-4xl font-bold text-center md:text-left md:flex-1 flex items-center justify-center">
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
				</div>
				{/* Right: Details */}
				<div className="flex flex-col justify-center gap-3 text-gray-200 text-base md:text-lg md:flex-1">
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
