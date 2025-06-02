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


	

	return (
		<div
			ref={ref}
			className="relative mx-auto w-full h-screen p-0 md:p-2 flex items-center justify-center"
		>
			<motion.div
				initial={{ x: 400, opacity: 0 }}
				animate={{
					x: isInView ? 0 : 100,
					opacity: isInView ? 1 : 0,
				}}
				transition={{ duration: 0.4, ease: "easeOut" }}
				className="border-solid border-4 border-zinc-900/80 dark:border-gray-200 dark:text-gray-200 rounded-4xl dark:bg-zinc-900/80 shadow-2xl w-10/12 h-10/12"
				
			>
				<div className="flex flex-col p-3">
						<div className="text-3xl text-center font-bold p-4">
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
						</div>
						<div className="p-8">
							<div>
								<div>
									<p className="text-lg font-bold">Software Engineer | Consign AI</p>
									<p className="text-sm">Jun 2024 - Mar 2025</p>
									<p>Worked on AI automation as well as real time AI translations over the phone.</p>
									<div>
										<ul className="list-disc pl-6">
											<li>Worked on data entry automation tools that were 85% faster than the industry standard</li>
											<li>Designed and deployed a Mongo database, integrated into the existing infrastructure</li>
											<li>Developed a secure front-end dashboard allowing customers to view their data securely</li>
											<li>Created parsing algorithms to make onboarding new customers more efficient</li>
											<li>Integrated an over the phone AI agent that parsed customer data and sent it directly to our automation service</li>
											<li>Reduced real-time audio translation costs by implementing a redis database cache</li>
										</ul>
									</div>
								</div>
								<br />
								<div>
								<p className="text-lg font-bold">Software Engineering Intern | Consign AI</p>
								<p className="text-sm">Feb 2024 - Jun 2024</p>
								<div>
									<ul className="list-disc pl-6">
											<li>Worked on data entry automation tools that were 85% faster than the industry standard</li>
											<li>Designed and deployed a Mongo database, integrated into the existing infrastructure</li>
											<li>Developed a secure front-end dashboard allowing customers to view their data securely</li>
											<li>Created parsing algorithms to make onboarding new customers more efficient</li>
											<li>Integrated an over the phone AI agent that parsed customer data and sent it directly to our automation service</li>
											<li>Reduced real-time audio translation costs by implementing a redis database cache</li>
									</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
			</motion.div>
			
		</div>
	);
}
