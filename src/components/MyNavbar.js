import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const MyNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = (target) => {
    scroll.scrollTo(target, {
      duration: 0,
      delay: 0,
      smooth: "linear",
    });
  };

  return (
    <nav className="navbar navbar-dark fixed-top">
      <div className="container-fluid">
        <Link
          to="/"
          onClick={() => {
            setIsDropdownOpen(false);
            scrollToTop();
          }}
        >
          Kentaro
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse navbar-collapse ${isDropdownOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <ScrollLink
                to="personalInfo"
                spy={true}
                smooth={true}
                offset={-300}
                duration={0} // Set duration to 0 for instant scrolling
                className="nav-link"
                onClick={handleDropdownItemClick}
              >
                About
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-170}
                duration={0} // Set duration to 0 for instant scrolling
                className="nav-link"
                onClick={handleDropdownItemClick}
              >
                Projects
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={0} // Set duration to 0 for instant scrolling
                className="nav-link"
                onClick={handleDropdownItemClick}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
