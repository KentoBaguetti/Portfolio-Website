import Hero from "@/components/Hero";
import { AuroraBackground } from "@/components/ui/aurora-background";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

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
			<div className="">
				<Projects />
			</div>
		</AuroraBackground>
	);
}
