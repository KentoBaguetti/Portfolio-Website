const WorkExperience = () => {
  return (
    <div className="workExperience container-fluid">
      <h1 className="pi-title">Work Experience</h1>
      <div className="workList">
        <h4 className="companyName">Consign AI 🇨🇦</h4>
        <p className="swe-role">
          Software Engineering Intern | Feb 2024 - Current
        </p>
        <ul className="job-desc">
          <li>
            Designed and implemented a MongoDB database to manage data processed
            by RPA scripts 🛠️
          </li>
          <li>
            Developed a frontend dashboard for company clients to visualize and
            manage data from the database 💻
          </li>
          <li>
            Implemented user authentication within the dashboard and database 🔒
          </li>
          <li>Debugged RPA scripts to improve efficiency and accuracy 🎯</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
