"use client"
import Hero from "@/components/Hero";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience/Experience";
import About from "@/components/About";
import Sidebar from "@/components/Sidebar/Sidebar";
import AnimatedBackground from "@/components/ui/animated-background";
import { useEffect, useState, useRef } from 'react';

export default function Home() {
    const [canHandleComplexAnimation, setCanHandleComplexAnimation] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);
    const performanceChecked = useRef(false);

    // device performance detection
    useEffect(() => {
        const isLowEndDevice = () => {
            // Check for mobile devices
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            // Check for low memory with proper typing
            const navigatorWithMemory = navigator as Navigator & {
                deviceMemory?: number;
            };
            const hasLowMemory = navigatorWithMemory.deviceMemory && navigatorWithMemory.deviceMemory < 4;
            
            // Check for slow CPU with proper typing
            const navigatorWithConcurrency = navigator as Navigator & {
                hardwareConcurrency?: number;
            };
            const hasSlowCPU = navigatorWithConcurrency.hardwareConcurrency && navigatorWithConcurrency.hardwareConcurrency <= 2;
            
            return isMobile || hasLowMemory || hasSlowCPU;
        };

        if (isLowEndDevice()) {
            setCanHandleComplexAnimation(false);
            performanceChecked.current = true;
            return;
        }

        // FPS monitoring 
        let lastTime = 0;
        let frames = 0;
        let rafId: number;
        const startTime = Date.now();
        let hasDecided = false;
        const fpsReadings: number[] = [];

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
                    performanceChecked.current = true;
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

    //  observer for sidebar visibility
    useEffect(() => {
        if (!heroRef.current) return;
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowSidebar(!entry.isIntersecting);
            },
            { threshold: 0.1 } 
        );

        observer.observe(heroRef.current);

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, [canHandleComplexAnimation, performanceChecked.current]); // Re-run when background changes

    return (
        <>
		{ /* next, pass props to make the diferent headers pop out */ }
            <div className={`fixed left-10 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-in-out ${
                showSidebar ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}>
                <Sidebar />
            </div>

            {canHandleComplexAnimation ? (
                <AuroraBackground>
                    <div ref={heroRef} className="h-screen flex justify-center items-center px-4 hardware-accelerated">
                        <Hero />
                    </div>
                    <div>
                        <div className="min-h-screen flex flex-col justify-center items-center px-4 gap-8 hardware-accelerated">
                            <About />
                        </div>
                        <div className="min-h-screen flex flex-col justify-center items-center px-4 gap-8 hardware-accelerated">
                            <Experience />
                        </div>
                        <div className="hardware-accelerated">
                            <Projects />
                        </div>
                    </div>
                </AuroraBackground>
            ) : (
                <AnimatedBackground>
                    <div ref={heroRef} className="h-screen flex justify-center items-center px-4 hardware-accelerated">
                        <Hero />
                    </div>
                    <div>
                        <div className="min-h-screen flex flex-col justify-center items-center px-4 gap-8 hardware-accelerated">
                            <About />
                        </div>
                        <div className="min-h-screen flex flex-col justify-center items-center px-4 gap-8 hardware-accelerated">
                            <Experience />
                        </div>
                        <div className="hardware-accelerated">
                            <Projects />
                        </div>
                    </div>
                </AnimatedBackground>
            )}
        </>
    );
}
