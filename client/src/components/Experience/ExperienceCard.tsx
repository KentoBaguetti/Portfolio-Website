"use client";
import React, { useRef } from "react";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";

export default function ExperienceCard({
  position,
  company,
  workPeriod,
  summary,
}: {
  position: string;
  company: string;
  workPeriod: string;
  summary: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3,
    once: false,
  });

  return (
    <div ref={ref} className="">
      <motion.div
        initial={{ x: 400, opacity: 0 }}
        animate={{
          x: isInView ? 0 : 100,
          opacity: isInView ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.2 }}
        className="border-solid border-4 border-zinc-900/80 dark:border-gray-200 dark:text-gray-200 rounded-4xl dark:bg-zinc-900/80 shadow-2xl w-10/12 h-auto md:h-auto"
      >
        <div className="p-8">
          <p className="text-lg font-bold">
            {position} | {company}
          </p>
          <p className="text-sm">{workPeriod}</p>
          <p>{summary}</p>
        </div>
      </motion.div>
    </div>
  );
}
