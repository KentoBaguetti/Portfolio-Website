import styles from "../styles/Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [activeButton, setActiveButton] = useState("Home");

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.navbar}`}>
        <button className={`${styles.nb_bubble}`}>Home</button>
        <button className={`${styles.nb_bubble}`}>About</button>
        <button className={`${styles.nb_bubble}`}>Experience</button>
        <button className={`${styles.nb_bubble}`}>Projects</button>
      </div>
    </div>
  );
}
