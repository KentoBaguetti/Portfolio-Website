import { motion } from "framer-motion";
import styles from "../styles/AboutStyling.module.css";
import { TypeAnimation } from "react-type-animation";

// TODO: split the motion div into two divs: one for the name+typewriter, one for the text content
//

export default function About() {
  return (
    <div
      className={`flex w-full justify-center items-center py-8 md:py-16 md:pl-60 ${styles.main_container}`}
    >
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-8 md:gap-16 w-full max-w-6xl px-4 md:px-8">
        <motion.div
          className="text-center font-japanese flex flex-col justify-center items-center w-full md:w-1/3 text-3xl md:text-6xl"
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
          className={`flex flex-col gap-6 w-full md:max-w-2/3 text-center md:text-left ${styles.ol_styles}`}
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
              <li>Any other coding topics!</li>
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
