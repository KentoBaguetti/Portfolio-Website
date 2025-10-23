import kenPfp from "../assets/ken_pizza_pfp.webp";
import { motion } from "motion/react";
import styles from "../styles/HeroStyling.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <div
      className={`${styles.gradientBg} flex justify-center items-center h-screen overflow-hidden`}
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 w-2/3 justify-center">
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
            <h3 className="text-4xl md:text-5xl ">Hey, I'm</h3>
            <h1 className="text-5xl md:text-7xl ">Kentaro</h1>
            <p className="text-lg max-w-md">
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
            <motion.button whileHover={{ scale: 1.2 }}>
              <a
                href="mailto:kentaro.barnes5@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-3"
              >
                <MdEmail size={25} className="md:w-[30px] md:h-[30px]" />
              </a>
            </motion.button>
          </div>
        </motion.div>
        <div className="flex-shrink-0">
          <motion.img
            variants={{
              hidden: { opacity: 0, y: -200 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="w-72 rounded-3xl transform-gpu will-change-transform"
            src={kenPfp}
            alt="Kentaro eating a pizza"
          />
        </div>
      </div>
    </div>
  );
}
