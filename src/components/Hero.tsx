import kenPfp from "../assets/kentaroPhoto.jpeg";
import { motion } from "motion/react";
import styles from "../styles/HeroStyling.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <div
      className={`${styles.gradientBg} flex justify-center items-center h-screen overflow-hidden pt-20 md:pt-0`}
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8 px-4 w-full md:w-4/5 lg:w-2/3 justify-center">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-3xl md:text-4xl lg:text-5xl">Hey, I'm</h3>
            <h1 className="text-4xl md:text-5xl lg:text-7xl">Kentaro</h1>
            <p className="text-base md:text-lg max-w-sm md:max-w-md">
              I'm a third year CS student at the University of British Columbia
              and an aspiring software engineer interested in building scalable
              and efficient software systems.
            </p>
          </div>
          <div className={`${styles.socials}`}>
            <motion.button whileHover={{ scale: 1.2 }}>
              <a
                href="https://www.github.com/KentoBaguetti"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-3"
              >
                <FaGithub size={25} className="md:w-[30px] md:h-[30px]" />
              </a>
            </motion.button>
            <motion.button whileHover={{ scale: 1.2 }}>
              <a
                href="https://www.linkedin.com/in/barneskentaro/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-3"
              >
                <FaLinkedin size={25} className="md:w-[30px] md:h-[30px]" />
              </a>
            </motion.button>
          </div>
        </motion.div>
        <div className="hidden md:flex flex-shrink-0">
          <motion.img
            variants={{
              hidden: { opacity: 0, y: -200 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="w-64 md:w-72 rounded-3xl transform-gpu will-change-transform"
            src={kenPfp}
            alt="Kentaro eating a pizza"
          />
        </div>
      </div>
    </div>
  );
}
