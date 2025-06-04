"use client";
import Hero from "@/components/Hero/Hero";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";
import About from "@/components/About/About";
import Sidebar from "@/components/Sidebar/Sidebar";
import AnimatedBackground from "@/components/ui/animated-background";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [canHandleComplexAnimation, setCanHandleComplexAnimation] =
    useState(true);
  const [activeComponent, setActiveComponent] = useState("Home");
  const performanceChecked = useRef(false);

  // Refs for each section
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for active section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveComponent(id);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: "-20% 0px -20% 0px", // Adjust when to trigger
      }
    );

    // Observe all sections
    const sections = [
      heroRef.current,
      aboutRef.current,
      experienceRef.current,
      projectsRef.current,
    ];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // device performance detection
  useEffect(() => {
    const isLowEndDevice = () => {
      // Check for mobile devices
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      // Check for low memory with proper typing
      const navigatorWithMemory = navigator as Navigator & {
        deviceMemory?: number;
      };
      const hasLowMemory =
        navigatorWithMemory.deviceMemory &&
        navigatorWithMemory.deviceMemory < 4;

      // Check for slow CPU with proper typing
      const navigatorWithConcurrency = navigator as Navigator & {
        hardwareConcurrency?: number;
      };
      const hasSlowCPU =
        navigatorWithConcurrency.hardwareConcurrency &&
        navigatorWithConcurrency.hardwareConcurrency <= 2;

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
          const averageFps =
            fpsReadings.reduce((sum, fps) => sum + fps, 0) / fpsReadings.length;

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

  return (
    <>
      {canHandleComplexAnimation ? (
        <AuroraBackground>
          <div className="flex flex-row min-h-screen">
            {/* Sidebar - hidden on mobile */}
            <div className="fixed left-0 w-1/5 top-0 h-screen z-50 flex items-center justify-center md:flex hidden xl:w-1/5 lg:w-1/4 md:w-1/3">
              <Sidebar activeComponent={activeComponent} />
            </div>

            {/* Main content */}
            <div className="flex flex-col w-full md:ml-[20%] lg:ml-[25%] xl:ml-[20%] md:w-4/5 lg:w-3/4 xl:w-4/5 overflow-x-hidden px-4 md:px-0">
              <div
                ref={heroRef}
                id="Home"
                className="md:mr-[25%] lg:mr-[20%] xl:mr-[25%] h-screen"
              >
                <Hero />
              </div>

              <div
                ref={aboutRef}
                id="About"
                className="md:mr-[25%] lg:mr-[20%] xl:mr-[25%] h-screen"
              >
                <About />
              </div>
              <div
                ref={experienceRef}
                id="Experience"
                className="md:mr-[25%] lg:mr-[20%] xl:mr-[25%] h-screen"
              >
                <Experience />
              </div>
              <div
                ref={projectsRef}
                id="Projects"
                className="md:mr-[25%] lg:mr-[20%] xl:mr-[25%] h-screen"
              >
                <Projects />
              </div>
            </div>
          </div>
        </AuroraBackground>
      ) : (
        <AnimatedBackground>
          <div className="flex flex-row min-h-screen">
            {/* Sidebar - hidden on mobile */}
            <div className="fixed left-0 w-1/5 top-0 h-screen z-50 flex items-center justify-center md:flex hidden xl:w-1/5 lg:w-1/4 md:w-1/3">
              <Sidebar activeComponent={activeComponent} />
            </div>

            {/* Main content */}
            <div className="flex flex-col w-full md:ml-[20%] lg:ml-[25%] xl:ml-[20%] md:w-4/5 lg:w-3/4 xl:w-4/5 overflow-x-hidden px-4 md:px-0">
              <div
                ref={heroRef}
                id="Home"
                className="md:mr-[25%] lg:mr-[20%] xl:mr-[25%]"
              >
                <Hero />
              </div>

              <div
                ref={aboutRef}
                id="About"
                className="md:mr-[25%] lg:mr-[20%] xl:mr-[25%]"
              >
                <About />
              </div>
              <div
                ref={experienceRef}
                id="Experience"
                className="md:mr-[25%] lg:mr-[20%] xl:mr-[25%]"
              >
                <Experience />
              </div>
              <div
                ref={projectsRef}
                id="Projects"
                className="md:mr-[25%] lg:mr-[20%] xl:mr-[25%]"
              >
                <Projects />
              </div>
            </div>
          </div>
        </AnimatedBackground>
      )}
    </>
  );
}
