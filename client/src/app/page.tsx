import Hero from "@/components/Hero";
import { AuroraBackground } from "@/components/ui/aurora-background";
import SecondScrollPage from "@/components/SecondScrollPage";

export default function Home() {
	return (
		<AuroraBackground>
			<div className="h-screen flex justify-center items-center px-4">
				<Hero />
			</div>
			<SecondScrollPage />
		</AuroraBackground>
	);
}
