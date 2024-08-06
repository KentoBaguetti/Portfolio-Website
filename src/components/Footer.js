import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer mt-auto py-3">
      <ScrollLink
        to="home-container"
        spy={true}
        smooth={true}
        offset={-70}
        duration={0}
        className="backToTop"
      >
        ^----Back To Top----^
      </ScrollLink>
      <div className="container footer-container">
        <span className="text-muted">Developed by Kentaro Barnes</span>
      </div>
    </div>
  );
};

export default Footer;
