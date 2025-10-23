import styles from "../styles/Navbar.module.css";
import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [activeButton, setActiveButton] = useState("Home");

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.navbar}`}>
        <Link to="hero" smooth={true} duration={600}>
          <button
            className={`${styles.nb_bubble} ${
              activeButton === "Home" ? styles.nb_bubble_selected : ""
            }`}
            onClick={() => setActiveButton("Home")}
          >
            Home
          </button>
        </Link>

        <Link to="about" smooth={true} offset={0} duration={600}>
          <button
            className={`${styles.nb_bubble} ${
              activeButton === "About" ? styles.nb_bubble_selected : ""
            }`}
            onClick={() => setActiveButton("About")}
          >
            About
          </button>
        </Link>

        <Link to="experience" smooth={true} offset={-90} duration={600}>
          <button
            className={`${styles.nb_bubble} ${
              activeButton === "Experience" ? styles.nb_bubble_selected : ""
            }`}
            onClick={() => setActiveButton("Experience")}
          >
            Experience
          </button>
        </Link>
        <Link to="projects" smooth={true} offset={0} duration={600}>
          <button
            className={`${styles.nb_bubble} ${
              activeButton === "Projects" ? styles.nb_bubble_selected : ""
            }`}
            onClick={() => setActiveButton("Projects")}
          >
            Projects
          </button>
        </Link>
      </div>
    </div>
  );
}
