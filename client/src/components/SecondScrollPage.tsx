"use client";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Lazy load components
const About = dynamic(() => import('./About'), {
  loading: () => <div className="h-full w-full flex items-center justify-center">Loading...</div>
});

const Experience = dynamic(() => import('./Experience'), {
  loading: () => <div className="h-full w-full flex items-center justify-center">Loading...</div>
});

export default function SecondScrollPage() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0">
      <Suspense fallback={<div className="h-full w-1/2 flex items-center justify-center">Loading...</div>}>
        <div className="w-full md:w-1/2 h-auto md:h-auto">
          <About />
        </div>
      </Suspense>
      <Suspense fallback={<div className="h-full w-1/2 flex items-center justify-center">Loading...</div>}>
        <div className="w-full md:w-1/2 h-auto">
          <Experience />
        </div>
      </Suspense>
    </div>
  );
}
