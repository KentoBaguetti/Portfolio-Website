"use client"
import Hero from "@/components/Hero";
import { AuroraBackground } from "@/components/ui/aurora-background";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AnimatedBackground from "@/components/ui/animated-background";
import { useEffect, useState } from 'react';

export default function Home() {
	const [canHandleComplexAnimation, setCanHandleComplexAnimation] = useState(true);


	useEffect(() => {
		const isLowEndDevice = () => {
			// Check for mobile devices
			const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
			
			// Check for low memory
			const hasLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
			
			// Check for slow CPU
			const hasSlowCPU = (navigator as any).hardwareConcurrency && (navigator as any).hardwareConcurrency <= 2;
			
			return isMobile || hasLowMemory || hasSlowCPU;
		};

		if (isLowEndDevice()) {
			setCanHandleComplexAnimation(false);
			return;
		}

		// FPS monitoring 
		let lastTime = 0;
		let frames = 0;
		let rafId: number;
		let startTime = Date.now();
		let hasDecided = false;
		let fpsReadings: number[] = [];

		const checkPerformance = (currentTime: number) => {
			// Only start measuring after 5 seconds to let page fully load
			if (Date.now() - startTime < 5000) {
				rafId = requestAnimationFrame(checkPerformance);
				return;
			}

			if (hasDecided) return;

			frames++;
			if (currentTime - lastTime >= 1000) {
				const fps = frames;
				frames = 0;
				lastTime = currentTime;

				fpsReadings.push(fps);

				if (fpsReadings.length >= 3) {
					const averageFps = fpsReadings.reduce((sum, fps) => sum + fps, 0) / fpsReadings.length;
					
					setCanHandleComplexAnimation(averageFps >= 30);
					hasDecided = true;
					return;
				}
			}

			rafId = requestAnimationFrame(checkPerformance);
		};

		rafId = requestAnimationFrame(checkPerformance);

		return () => {
			if (rafId) cancelAnimationFrame(rafId);
		};
	}, []);

	return (
		canHandleComplexAnimation ? (
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
		) : (
			<AnimatedBackground>
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
			</AnimatedBackground>
		)
	);
}
