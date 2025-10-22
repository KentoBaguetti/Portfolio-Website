import kenPfp from "../assets/ken_pizza_pfp.webp";
import { motion } from "motion/react";
import styles from "../styles/HeroStyling.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <div
      className={`${styles.gradientBg} flex justify-center items-center min-h-screen`}
    >
      <div className="flex flex-row items-center gap-8 px-4">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-4xl md:text-5xl ">Hey, I'm</h3>
            <h1 className="text-5xl md:text-6xl ">Kentaro</h1>
            <p className="text-lg max-w-md">
              I'm a third year computer science student at the University of
              British Columbia and an aspiring software engineer
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
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
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

{
  /* <div className="flex flex-col justify-between items-center mt-16 md:mt-24 mb-0 min-h-[250px] w-full overflow-hidden">
      <div className="flex flex-col justify-center w-full px-4 md:px-6 font-sans">
        <div className="flex flex-col md:flex-row w-full overflow-x-auto md:overflow-visible">
          <pre className="font-mono text-[0.6rem] leading-none sm:text-xs md:text-sm whitespace-pre overflow-x-auto scrollbar-hide">
            {`██╗  ██╗███████╗███╗   ██╗████████╗ █████╗ ██████╗  ██████╗     
██║ ██╔╝██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██╔══██╗██╔═══██╗    
█████╔╝ █████╗  ██╔██╗ ██║   ██║   ███████║██████╔╝██║   ██║    
██╔═██╗ ██╔══╝  ██║╚██╗██║   ██║   ██╔══██║██╔══██╗██║   ██║    
██║  ██╗███████╗██║ ╚████║   ██║   ██║  ██║██║  ██║╚██████╔╝    
╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝`}
          </pre>
          <pre className="font-mono text-[0.6rem] leading-none sm:text-xs md:text-sm whitespace-pre overflow-x-auto scrollbar-hide">
            {`██████╗  █████╗ ██████╗ ███╗   ██╗███████╗███████╗
██╔══██╗██╔══██╗██╔══██╗████╗  ██║██╔════╝██╔════╝
██████╔╝███████║██████╔╝██╔██╗ ██║█████╗  ███████╗
██╔══██╗██╔══██║██╔══██╗██║╚██╗██║██╔══╝  ╚════██║
██████╔╝██║  ██║██║  ██║██║ ╚████║███████╗███████║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝`}
          </pre>
        </div>
        <p className="text-xl md:text-2xl font-sans mt-2 text-tron-grey">
          Hey! I'm a CS Student at the University of British Columbia and an
          aspiring software engineer
        </p>
        <div className="flex flex-row items-center mt-2">
          <a
            href="https://www.github.com/KentoBaguetti"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:scale-110"
          >
            <FaGithub size={25} className="md:w-[30px] md:h-[30px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/barneskentaro/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:scale-110"
          >
            <FaLinkedin size={25} className="md:w-[30px] md:h-[30px]" />
          </a>
          <a
            href="mailto:kentaro.barnes5@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:scale-110"
          >
            <MdEmail size={25} className="md:w-[30px] md:h-[30px]" />
          </a>
        </div>
      </div>
    </div> */
}
