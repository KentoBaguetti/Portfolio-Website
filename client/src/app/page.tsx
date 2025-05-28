import Hero from "@/components/Hero";
import { AuroraBackground } from "@/components/ui/aurora-background";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

export default function Home() {
	return (
		<AuroraBackground>
			<div className="min-h-screen flex justify-center items-center">
				<Hero />
			</div>
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true }}
				className="min-h-screen flex justify-center items-center"
			>
				<Hero />
			</motion.div>
		</AuroraBackground>
	);
}
