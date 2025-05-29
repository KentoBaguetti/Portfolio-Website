import Hero from "@/components/Hero";
import { AuroraBackground } from "@/components/ui/aurora-background";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import About from "@/components/About";
import Experience from "@/components/Experience";

export default function Home() {
	return (
		<AuroraBackground>
			<div className="h-screen flex justify-center items-center px-4">
				<Hero />
			</div>
			<div className="min-h-screen flex flex-col justify-center items-center px-4 gap-8">
				<About />
				<Experience />
			</div>
		</AuroraBackground>
	);
}
