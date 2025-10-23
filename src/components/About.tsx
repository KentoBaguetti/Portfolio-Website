import { motion } from "framer-motion";
import styles from "../styles/AboutStyling.module.css";
import { TypeAnimation } from "react-type-animation";

// TODO: split the motion div into two divs: one for the name+typewriter, one for the text content
//

export default function About() {
  return (
    <div
      className={`flex flex-row w-full justify-center items-center pb-16 ${styles.main_container}`}
    >
      <div className="overflow-hidden flex items-center justify-center h-screen gap-16 w-2/3">
        <motion.div
          className="text-center font-japanese flex flex-col justify-center items-center w-1/3 sm:text-3xl md:text-6xl"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <TypeAnimation
            sequence={["バーンズ 健太郎", 1000]}
            speed={25}
            repeat={Infinity}
          />
          {/* <div className="text-5xl">バーンズ</div>
        <div className="text-5xl">健太郎</div> */}
        </motion.div>
        <motion.div
          className={`flex flex-col gap-4 max-w-2/3 ${styles.ol_styles} `}
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
    </div>
  );
}
