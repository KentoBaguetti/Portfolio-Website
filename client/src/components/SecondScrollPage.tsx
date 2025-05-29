"use client";
import React, { useState } from "react";
import About from "./About";
import Experience from "./Experience";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

export default function SecondScrollPage() {
	const [expanded, setExpanded] = useState(false);

	return (
		// centered about + experience
		<div className="min-h-screen flex flex-col justify-center items-center px-4 gap-8">
			<About />
			<Experience />
		</div>
	);
}
