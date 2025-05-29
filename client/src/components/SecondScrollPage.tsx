"use client";
import React, { useState } from "react";
import About from "./About";
import Experience from "./Experience";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

export default function SecondScrollPage() {
	const [expandedComponent, setExpandedComponent] = useState<
		"about" | "experience" | null
	>(null);

	const handleComponentClick = (component: "about" | "experience") => {
		setExpandedComponent(expandedComponent === component ? null : component);
	};

	return (
		<div className="min-h-screen flex flex-col justify-center items-center px-4 gap-8">
			<div className="w-full max-w-6xl flex justify-center items-center relative">
				{/* Left expanded box for About */}
				<AnimatePresence mode="wait">
					{expandedComponent === "about" && (
						<motion.div
							key="about-expanded"
							initial={{ x: -100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: -100, opacity: 0 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							className="w-1/2 flex items-center justify-center pr-4"
						>
							<div className="border-solid border-4 border-blue-700 dark:border-blue-700 dark:text-gray-200 rounded-4xl dark:bg-zinc-900/80 bg-white shadow-xl w-full h-full p-8">
								<div className="h-full flex flex-col justify-center">
									<h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
										More About Me
									</h2>
									<div className="space-y-4 text-lg">
										<p>🎓 Junior Computer Science Student at UBC</p>
										<p>💻 Experienced full-stack developer</p>
										<p>
											🌱 Hobbies: Football, Programming, Snowboarding, Leetcode
										</p>
										<p>🎯 Goal: Build cool software</p>
									</div>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Center - About and Experience components */}
				<motion.div
					className="flex flex-col gap-8"
					animate={{
						width: expandedComponent ? "50%" : "100%",
					}}
					transition={{ duration: 0.5, ease: "easeInOut" }}
				>
					<About
						onClick={() => handleComponentClick("about")}
						isExpanded={expandedComponent === "about"}
					/>
					<Experience
						onClick={() => handleComponentClick("experience")}
						isExpanded={expandedComponent === "experience"}
					/>
				</motion.div>

				{/* Right expanded box for Experience */}
				<AnimatePresence mode="wait">
					{expandedComponent === "experience" && (
						<motion.div
							key="experience-expanded"
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: 100, opacity: 0 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							className="w-1/2 flex items-center justify-center pl-4"
						>
							<div className="border-solid border-4 border-blue-700 dark:border-blue-700 dark:text-gray-200 rounded-4xl dark:bg-zinc-900/80 bg-white shadow-xl w-full h-full p-8">
								<div className="h-full flex flex-col justify-center">
									<h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
										Experience Details
									</h2>
									<div className="space-y-6">
										<div>
											<h3 className="text-xl font-semibold">
												Software Engineer | Consign AI
											</h3>
											<p className="text-gray-600 dark:text-gray-400">
												Jun 2024 - Mar 2025
											</p>
											<ul className="mt-2 space-y-1">
												<li>
													• Developed and maintained AI Automation applications
												</li>
												<li>• Developed full-stack applications</li>
												<li>
													• Implemented role-based authentication for the
													dashboard and database for partner companies
												</li>
												<li>
													• Developed a secure front-end dashboard for users
												</li>
												<li>
													• Worked on realtime AI translation applications
												</li>
											</ul>
										</div>
										<div>
											<h3 className="text-xl font-semibold">
												Software Engineering Intern | Consign AI
											</h3>
											<p className="text-gray-600 dark:text-gray-400">
												Feb 2024 - Jun 2024
											</p>
											<ul className="mt-2 space-y-1">
												<li>• AI Automation</li>
												<li>
													• Researched viable database integrations for
													scalability and flexibility
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
