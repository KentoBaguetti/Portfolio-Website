import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const MyNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-transparent fixed-top">
      <div className="container-fluid">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div
          className="bubble"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Kentaro...
        </div>
        <div className={`dropdown-menu-bubble ${isDropdownOpen ? "show" : ""}`}>
          <div className="bubble-container">
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div
              className="bubble-item"
              onClick={() => {
                handleDropdownItemClick();
                // Add scroll behavior if needed
              }}
            >
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
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div
              className="bubble-item"
              onClick={() => {
                handleDropdownItemClick();
                // Add scroll behavior if needed
              }}
            >
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
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div
              className="bubble-item"
              onClick={() => {
                handleDropdownItemClick();
                // Add scroll behavior if needed
              }}
            >
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
