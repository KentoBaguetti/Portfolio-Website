import Hero from "@/components/Hero";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
	return (
		<AuroraBackground>
			<div className="min-h-screen flex justify-center items-center">
				<Hero />
			</div>
		</AuroraBackground>
	);
}
