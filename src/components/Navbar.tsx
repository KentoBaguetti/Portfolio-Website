import styles from "../styles/Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [activeButton, setActiveButton] = useState("Home");

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.navbar}`}>
        <button
          className={`${styles.nb_bubble} ${
            activeButton === "Home" ? styles.nb_bubble_selected : ""
          }`}
          onClick={() => setActiveButton("Home")}
        >
          Home
        </button>
        <button
          className={`${styles.nb_bubble} ${
            activeButton === "About" ? styles.nb_bubble_selected : ""
          }`}
          onClick={() => setActiveButton("About")}
        >
          About
        </button>
        <button
          className={`${styles.nb_bubble} ${
            activeButton === "Experience" ? styles.nb_bubble_selected : ""
          }`}
          onClick={() => setActiveButton("Experience")}
        >
          Experience
        </button>
        <button
          className={`${styles.nb_bubble} ${
            activeButton === "Projects" ? styles.nb_bubble_selected : ""
          }`}
          onClick={() => setActiveButton("Projects")}
        >
          Projects
        </button>
      </div>
    </div>
  );
}
