import { motion } from "motion/react";

export default function About() {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full py-16"
      >
        <h2 className="text-4xl mb-5 self-start font-bold">About Me</h2>
        <div className="flex flex-row w-full text-2xl text-tron-grey">
          <ul>
            <li>I'm a third year CS student at UBC.</li>
            <li>
              Most of my experience is in{" "}
              <span className="text-tron-yellow">full stack development</span>.
            </li>
            <li>
              I'm interested in{" "}
              <span className="text-tron-yellow">Backend Development</span> and{" "}
              <span className="text-tron-yellow">AI + Machine Learning</span>.
            </li>
            <li>
              My interests include programming, football, snowboarding, and much
              more.
            </li>
            <li>
              Feel free to <span className="text-tron-yellow">reach out</span>{" "}
              and <span className="text-tron-yellow">connect</span>!
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
