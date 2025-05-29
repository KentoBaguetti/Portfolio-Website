import Hero from "@/components/Hero";
import { AuroraBackground } from "@/components/ui/aurora-background";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import About from "@/components/About";

export default function Home() {
	return (
		<AuroraBackground>
			<div className="min-h-screen flex justify-center items-center">
				<Hero />
			</div>
			<div className="">
				<About />
			</div>
			<Hero />
		</AuroraBackground>
	);
}
