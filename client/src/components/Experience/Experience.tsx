"use client";
import React, { useRef } from "react";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="relative ml-[10%] w-full h-auto md:h-screen p-0 md:p-2 flex flex-col items-center justify-center space-y-8"
    >
      <ExperienceCard
        position="Software Engineer"
        company="Consign AI"
        workPeriod="Jun 2024 - Mar 2025"
        summary="Developed AI automation tools, built full-stack applications, worked on real-time over the phone AI translations."
      />
      <ExperienceCard
        position="Software Engineering Intern"
        company="Consign AI"
        workPeriod="Feb 2024 - Jun 2024"
        summary="Worked on AI automation tools to improve data entry efficiency by 85% for clients."
      />
    </div>
  );
}
