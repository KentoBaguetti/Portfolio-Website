"use client";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Lazy load components
const About = dynamic(() => import('./About'), {
  loading: () => <div className="h-96 w-full flex items-center justify-center">Loading...</div>
});

const Experience = dynamic(() => import('./Experience'), {
  loading: () => <div className="h-96 w-full flex items-center justify-center">Loading...</div>
});

export default function SecondScrollPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 gap-8">
      <Suspense fallback={<div className="h-96 w-full flex items-center justify-center">Loading...</div>}>
        <div className="w-full">
          <About />
        </div>
      </Suspense>
      <Suspense fallback={<div className="h-96 w-full flex items-center justify-center">Loading...</div>}>
        <div className="w-full">
          <Experience />
        </div>
      </Suspense>
    </div>
  );
}
