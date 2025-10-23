import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import styles from "../styles/AboutStyling.module.css";

// TODO: split the motion div into two divs: one for the name+typewriter, one for the text content
//

export default function About() {
  return (
    <div className="overflow-hidden flex items-center justify-center h-screen gap-16">
      <div className="text-right font-japanese w-1/5 text-6xl">
        <Typewriter
          options={{ strings: "バーンズ 健太郎", autoStart: true, loop: false }}
        />
        {/* <div className="text-5xl">バーンズ</div>
        <div className="text-5xl">健太郎</div> */}
      </div>
      <motion.div
        className={`flex flex-col gap-4 ${styles.ol_styles}`}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className={`${styles.subheaders}`}>Currently...</div>
          <ol>
            <li>BSc. Computer Science Student @ UBC</li>
            <li>Software Engineering Intern @ Wello</li>
            <li>Incoming Software Engineering Intern @ Microsoft</li>
          </ol>
        </div>
        <div>
          <div className={`${styles.subheaders}`}>Chat to me about...</div>
          <ol>
            <li>Football</li>
            <li>Snowboarding</li>
            <li>Fishing</li>
            <li>System Design</li>
          </ol>
        </div>
        <div>
          <div className={`${styles.subheaders}`}>
            A little more about me...
          </div>
          <ol>
            <li>Most of my experience is in fullstack development</li>
            <li>I'm interested in backend and systems engineering</li>
            <li>
              I love being placed into a competitive environment
              <li>I enjoy learning new things</li>
            </li>
          </ol>
        </div>
      </motion.div>
    </div>
  );
}
