const Education = () => {
  return (
    <div className="education container-fluid">
      <h1 className="pi-title">Education</h1>
      <div className="educationList">
        <ul>
          <li>
            <h4 className="schoolname">University of British Columbia 🇨🇦</h4>
            <p className="degree">
              Bachelor of Science in Computer Science | Sep 2024 - Current
            </p>
          </li>
          <li>
            <h4 className="schoolname">University of Western Ontario 🇨🇦</h4>
            <p className="degree">
              Bachelor of Science in Computer Science | Sep 2023 - May 2024
            </p>
          </li>
          <li>
            <h4 className="schoolname">
              The American School in Switzerland 🇨🇭
            </h4>
            <p className="degree">High School Diploma | Sep 2020 - May 2023</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Education;
