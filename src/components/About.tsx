import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import styles from "../styles/AboutStyling.module.css";

// TODO: split the motion div into two divs: one for the name+typewriter, one for the text content

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="overflow-hidden flex items-center justify-center h-screen gap-16"
    >
      <div className="text-right font-japanese w-1/5 text-6xl">
        <Typewriter
          options={{ strings: "バーンズ 健太郎", autoStart: true, loop: false }}
        />
        {/* <div className="text-5xl">バーンズ</div>
        <div className="text-5xl">健太郎</div> */}
      </div>
      <div className={`flex flex-col gap-4 ${styles.ol_styles}`}>
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
      </div>
    </motion.div>
  );
}

//  <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="flex flex-col w-full py-16"
//       >
//         <h2 className="text-4xl mb-5 self-start font-bold">About Me</h2>
//         <div className="flex flex-row w-full text-2xl text-tron-grey">
//           <ul className="">
//             <li>
//               I'm a third year CS student at UBC, currently a backend
//               engineering intern at Wello, and incoming SWE Intern at Microsoft.
//             </li>
//             <li>
//               Most of my experience is in{" "}
//               <span className="text-tron-yellow">full stack development</span>.
//             </li>
//             <li>
//               I'm interested in{" "}
//               <span className="text-tron-yellow">Backend Development</span> and{" "}
//               <span className="text-tron-yellow">Systems Engineering</span>.
//             </li>
//             <li>
//               In my spare time, I enjoy programming, playing football,
//               snowboarding, and taking photos.
//             </li>
//             <li>
//               Feel free to{" "}
//               <span className="text-tron-yellow">
//                 <a
//                   href="https://www.linkedin.com/in/barneskentaro/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="underline-offset-2 no-underline hover:underline"
//                 >
//                   reach out and connect
//                 </a>
//               </span>
//               !
//             </li>
//           </ul>
//         </div>
//       </motion.div>
