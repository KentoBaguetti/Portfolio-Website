import About from "./About";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import { useState } from "react";

const PersonalInfo = () => {
  const [activeComponent, setActiveComponent] = useState("about");

  const renderComponent = () => {
    switch (activeComponent) {
      case "about":
        return <About />;
      case "work":
        return <WorkExperience />;
      case "education":
        return <Education />;
      default:
        return null;
    }
  };

  return (
    <div className="personalInfo">
      <div className="btns-pInfo btn-container">
        <button
          onClick={() => setActiveComponent("about")}
          className={`pi-btn ${activeComponent === "about" ? "active" : ""}`}
          value="about"
        >
          About
        </button>
        <button
          onClick={() => setActiveComponent("work")}
          className={`pi-btn ${activeComponent === "work" ? "active" : ""}`}
          value="work"
        >
          Work Experience
        </button>
        <button
          onClick={() => setActiveComponent("education")}
          className={`pi-btn ${
            activeComponent === "education" ? "active" : ""
          }`}
          value="education"
        >
          Education
        </button>
      </div>
      {renderComponent()}
    </div>
  );
};

export default PersonalInfo;
