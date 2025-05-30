"use client";
import React, { useState, useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useInView } from "motion/react";

const projectBoxStyle = "bg-indigo-500 border-2 rounded-3xl p-3";

export default function Projects() {
	const [isMobile, setIsMobile] = useState(false);

	const ref = useRef(null);
	const isInView = useInView(ref, { amount: "all" });

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
				className="relative mx-auto grid h-60 w-10/12 place-content-center"
			>
				<motion.div
					className={`absolute bottom-0 left-0 top-0 w-[18%] ${projectBoxStyle}`}
					animate={{ y: isInView ? "-80%" : "0%" }}
				>
					Box 1
				</motion.div>
				<motion.div
					className={`absolute bottom-0 left-[20.5%] top-0 w-[18%] ${projectBoxStyle}`}
					animate={{ y: isInView ? "80%" : "0%" }}
				>
					Box 2
				</motion.div>
				<motion.div
					className={`absolute bottom-0 left-[41%] top-0 w-[18%] ${projectBoxStyle}`}
					animate={{ y: isInView ? "-120%" : "0%" }}
				>
					Box 3
				</motion.div>
				<motion.div
					className={`absolute bottom-0 left-[61.5%] top-0 w-[18%] ${projectBoxStyle}`}
					animate={{ y: isInView ? "80%" : "0%" }}
				>
					Box 4
				</motion.div>
				<motion.div
					className={`absolute bottom-0 left-[82%] top-0 w-[18%] ${projectBoxStyle}`}
					animate={{ y: isInView ? "-80%" : "0%" }}
				>
					Box 5
				</motion.div>
			</div>
		</div>
	);
}
