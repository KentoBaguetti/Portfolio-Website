"use client";
import React, { useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import TypeWriter from "typewriter-effect";
import getLeetcodeStats from "../../../utils/leetcodeEndpoint";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3,
    once: false,
  });

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      const stats = await getLeetcodeStats();
      if (stats) {
        const { total: t } = stats;
        setTotal(t);
      } else {
        console.log("Failed to fetch Leetcode stats.");
      }
    };
    fetchStats();
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full h-auto md:h-screen p-0 md:p-2 flex items-center justify-center"
    >
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{
          x: isInView ? 0 : -100,
          opacity: isInView ? 1 : 0,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-solid border-4 border-zinc-900/80 dark:border-gray-200 dark:text-gray-200 rounded-4xl dark:bg-zinc-900/80 shadow-2xl w-6/12 h-auto md:h-auto"
      >
        <div className="flex flex-col p-3">
          <div className="text-3xl text-center font-bold px-1">
            <TypeWriter
              key={isInView ? "in-view" : "out-of-view"}
              onInit={(typewriter) => {
                typewriter.typeString("About me").start();
              }}
              options={{
                autoStart: true,
                loop: false,
                cursor: "|",
              }}
            />
          </div>
          <div className="p-8">
            <p>
              My name is <b>Kentaro Barnes (バーンズ健太郎)</b>. I&#39;m a third
              year CS student at the University of British Columbia, Aspiring
              Software Engineer, and I like to develop stuff I find interesting.
            </p>
            <br />
            <div>
              <p className="font-bold">
                Things I like to learn and talk about:
              </p>
              <ul className="list-disc px-6">
                <li>Good software engineering</li>
                <li>Cool projects</li>
                <li>Leetcode and System Design</li>
                <li>Artificial intelligence</li>
                <li>Football</li>
                <li>
                  Music{" "}
                  <a
                    className="underline"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://open.spotify.com/user/8f5idvcxsyo4kjio8mtzmgkly"
                  >
                    (Check out my spotify)
                  </a>
                </li>
              </ul>
            </div>
            <br />
            <div>
              <p className="font-bold">Things I want to do:</p>
              <ul className="list-disc px-6">
                <li>Work on products with high user traffic</li>
                <li>Build ML integrated fintech applications</li>
                <li>Build/Work at a startup I find extremely interesting</li>
                <li>Competitive Programming</li>
                <li>Work on products that rely heavily on graphs</li>
              </ul>
            </div>
            <br />
            <div>
              <p>
                Some random stats to read if you&#39;re a nerd (To clarify, I am
                not a nerd):
              </p>
              <ul className="list-disc px-6">
                <li>Leetcode Questions Solved: {total}</li>
                <li>
                  Perfect Soft boiled egg cooking record: 6 min 23 seconds
                </li>
                <li>1500m time: 4:52</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
