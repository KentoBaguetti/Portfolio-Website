"use client";
import React, { useRef } from "react";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3,
    once: false,
  });

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full h-auto md:h-screen p-0 md:p-2 flex flex-col items-center justify-center space-y-8"
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
        summary="Worked on AI automation tools to make data entry faster for clients."
      />

      {/* <motion.div
        initial={{ x: 400, opacity: 0 }}
        animate={{
          x: isInView ? 0 : 100,
          opacity: isInView ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="border-solid border-4 border-zinc-900/80 dark:border-gray-200 dark:text-gray-200 rounded-4xl dark:bg-zinc-900/80 shadow-2xl w-10/12 h-auto md:h-auto"
      >
        <div className="flex flex-col p-3">
          <div className="p-8">
            <div>
              <div>
                <p className="text-lg font-bold">
                  Software Engineer | Consign AI
                </p>
                <p className="text-sm">Jun 2024 - Mar 2025</p>
                <p>
                  Worked on AI automation as well as real time AI translations
                  over the phone.
                </p>
                <div>
                  <ul className="list-disc pl-6">
                    <li>
                      Worked on data entry automation tools that were 85% faster
                      than the industry standard
                    </li>
                    <li>
                      Designed and deployed a Mongo database, integrated into
                      the existing infrastructure
                    </li>
                    <li>
                      Developed a secure front-end dashboard allowing customers
                      to view their data securely
                    </li>
                    <li>
                      Created parsing algorithms to make onboarding new
                      customers more efficient
                    </li>
                    <li>
                      Integrated an over the phone AI agent that parsed customer
                      data and sent it directly to our automation service
                    </li>
                    <li>
                      Reduced real-time audio translation costs by implementing
                      a redis database cache
                    </li>
                  </ul>
                </div>
              </div>
              <br />
              <div>
                <p className="text-lg font-bold">
                  Software Engineering Intern | Consign AI
                </p>
                <p className="text-sm">Feb 2024 - Jun 2024</p>
                <div>
                  <ul className="list-disc pl-6">
                    <li>
                      Researched for viable database solutions to be integrated
                      with the current infrastructure
                    </li>
                    <li>Debugged automation tools</li>
                    <li>Debugged ML algorithms</li>
                  </ul>
                </div>
              </div>
              <br />
              <div>
                <p className="text-lg font-bold">Student | UBC</p>
                <p className="text-sm">Sep 2024 - Present</p>
                <p>Yea, I go to skool. Fun time.</p>
                <div>
                  <ul className="list-disc pl-6">
                    <li>Attended classes</li>
                    <li>Ate a lot of pizza</li>
                    <li>
                      Persevered through harsh exam conditions and optimized my
                      thought to action speeds by 200%
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div> */}
    </div>
  );
}
