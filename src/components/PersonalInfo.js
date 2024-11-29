import About from "./About";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import React, { useState, memo } from "react";

const PersonalInfo = memo(() => {
  const [activeComponent, setActiveComponent] = useState("about");

  const renderComponent = () => {
    switch (activeComponent) {
      case "about":
        return <About />;
      case "work":
        return <WorkExperience />;
      case "education":
        return <Education />;
      case "skills":
        return <Skills />;
      default:
        return null;
    }
  };

  return (
    <div className="personalInfo">
      <div className="btns-pInfo btn-container">
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => setActiveComponent("about")}
          className={`pi-btn ${activeComponent === "about" ? "active" : ""}`}
          value="about"
        >
          About
        </button>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => setActiveComponent("work")}
          className={`pi-btn ${activeComponent === "work" ? "active" : ""}`}
          value="work"
        >
          Work Experience
        </button>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => setActiveComponent("education")}
          className={`pi-btn ${
            activeComponent === "education" ? "active" : ""
          }`}
          value="education"
        >
          Education
        </button>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => setActiveComponent("skills")}
          className={`pi-btn ${activeComponent === "skills" ? "active" : ""}`}
          value="skill"
        >
          Skills
        </button>
      </div>
      {renderComponent()}
    </div>
  );
});

export default PersonalInfo;
