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
          <ul className="">
            <li>
              I'm a third year CS student at UBC, currently a backend
              engineering intern at Wello, and incoming SWE Intern at Microsoft.
            </li>
            <li>
              Most of my experience is in{" "}
              <span className="text-tron-yellow">full stack development</span>.
            </li>
            <li>
              I'm interested in{" "}
              <span className="text-tron-yellow">Backend Development</span> and{" "}
              <span className="text-tron-yellow">Systems Engineering</span>.
            </li>
            <li>
              In my spare time, I enjoy programming, playing football,
              snowboarding, and taking photos.
            </li>
            <li>
              Feel free to{" "}
              <span className="text-tron-yellow">
                <a
                  href="https://www.linkedin.com/in/barneskentaro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-2 no-underline hover:underline"
                >
                  reach out and connect
                </a>
              </span>
              !
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
