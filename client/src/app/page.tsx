"use client";
import Hero from "@/components/Hero/Hero";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";
import About from "@/components/About";
import Sidebar from "@/components/Sidebar/Sidebar";
import AnimatedBackground from "@/components/ui/animated-background";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [canHandleComplexAnimation, setCanHandleComplexAnimation] =
    useState(true);
  const performanceChecked = useRef(false);

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
          <Hero />
        </AuroraBackground>
      ) : (
        <AnimatedBackground>
          <Hero />
        </AnimatedBackground>
      )}
    </>
  );
}
