import kenImage from "../assets/ken.webp";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <div className="flex flex-col mt-10 md:mt-0 md:flex-row justify-between items-center md:h-screen">
      <img
        className="shadow-custom rounded-3xl shadow-white h-[300px] md:h-[500px] w-auto"
        src={kenImage}
        alt="Hero"
      />
      <div className="flex flex-col justify-center md:ml-6 font-sans">
        <h1 className="text-6xl font-sans">Kentaro Barnes</h1>
        <p className="text-2xl font-sans">
          Hey! I'm a CS Student at the University of British Columbia and an
          aspiring software engineer
        </p>
        <div className="flex flex-row items-center mt-4">
          <a
            href="https://www.github.com/KentoBaguetti"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:scale-110"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/barneskentaro/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:scale-110"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:kentaro.barnes5@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:scale-110"
          >
            <MdEmail size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
