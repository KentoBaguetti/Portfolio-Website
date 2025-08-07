import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <div className="flex flex-col justify-between items-center mt-16 md:mt-24 mb-0 min-h-[250px] w-full overflow-hidden">
      <div className="flex flex-col justify-center w-full px-4 md:px-6 font-sans">
        <div className="flex flex-col md:flex-row w-full overflow-x-auto md:overflow-visible">
          <pre
            className="font-mono text-[0.6rem] sm:text-xs md:text-sm whitespace-pre overflow-x-auto scrollbar-hide"
            style={{ lineHeight: "1.2" }}
          >
            {`██╗  ██╗███████╗███╗   ██╗████████╗ █████╗ ██████╗  ██████╗     
██║ ██╔╝██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██╔══██╗██╔═══██╗    
█████╔╝ █████╗  ██╔██╗ ██║   ██║   ███████║██████╔╝██║   ██║    
██╔═██╗ ██╔══╝  ██║╚██╗██║   ██║   ██╔══██║██╔══██╗██║   ██║    
██║  ██╗███████╗██║ ╚████║   ██║   ██║  ██║██║  ██║╚██████╔╝    
╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝`}
          </pre>
          <pre
            className="font-mono text-[0.6rem] sm:text-xs md:text-sm whitespace-pre overflow-x-auto scrollbar-hide"
            style={{ lineHeight: "1.2" }}
          >
            {`██████╗  █████╗ ██████╗ ███╗   ██╗███████╗███████╗
██╔══██╗██╔══██╗██╔══██╗████╗  ██║██╔════╝██╔════╝
██████╔╝███████║██████╔╝██╔██╗ ██║█████╗  ███████╗
██╔══██╗██╔══██║██╔══██╗██║╚██╗██║██╔══╝  ╚════██║
██████╔╝██║  ██║██║  ██║██║ ╚████║███████╗███████║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝`}
          </pre>
        </div>
        <p className="text-xl md:text-2xl font-sans mt-2">
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
    </div>
  );
}
