import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const MyNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const darkModeIcon = (
    <FontAwesomeIcon icon={faMoon} className="navbar-icon" />
  );
  const lightModeIcon = (
    <FontAwesomeIcon icon={faSun} className="navbar-icon" />
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <nav className="navbar navbar-transparent fixed-top">
      <div className="container-fluid">
        <div
          className="bubble-container"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className="bubble-item" onClick={handleDropdownItemClick}>
            <ScrollLink
              to="personalInfo"
              spy={true}
              smooth={true}
              offset={-300}
              duration={0}
              className="nav-link"
            >
              About
            </ScrollLink>
          </div>

          <div className="bubble-item" onClick={handleDropdownItemClick}>
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-170}
              duration={0}
              className="nav-link"
            >
              Projects
            </ScrollLink>
          </div>

          <div className="bubble-item" onClick={handleDropdownItemClick}>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={0}
              className="nav-link"
            >
              Contact
            </ScrollLink>
          </div>

          <div
            className="bubble-item icon-bubble"
            onClick={(e) => {
              e.stopPropagation();
              toggleTheme();
            }}
          >
            {isDarkMode ? lightModeIcon : darkModeIcon}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
