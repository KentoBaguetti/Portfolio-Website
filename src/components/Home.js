import React, { useState } from "react";
import KenImg from "../assets/IMG_5840.webp";
import Type from "./Type.js";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="text-container">
          <h2 className="intro-text">Hi, I’m</h2>
          <h1 className="name-title">Kentaro Barnes</h1>
          <Type />
        </div>
        <div className="image-container">
          <img
            src={KenImg}
            loading="lazy"
            className={`profile-image ${isHovered ? "hovered" : ""}`}
            alt="Kentaro Barnes"
            onMouseEnter={handleMouseEnter}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
