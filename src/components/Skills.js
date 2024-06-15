const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills-title pi-title">Skills && Technologies</h1>
      <ul className="skill-list">
        <li>
          <strong className="skill-header">Programming Languages: </strong>
          Python, Typescript, Java, Javascript
        </li>
        <li>
          <strong className="skill-header">Backend Technologies: </strong>Node,
          Express, Axios, Restful API's
        </li>
        <li>
          <strong className="skill-header">UI Technologies: </strong>React,
          HTML, CSS, Bootstrap
        </li>
        <li>
          <strong className="skill-header">Database: </strong>MongoDB, Mongoose
        </li>
        <li>
          <strong className="skill-header">Version Control: </strong>Git, Github
        </li>
        <li>
          <strong className="skill-header">Testing: </strong>Mocha
        </li>
      </ul>
    </div>
  );
};

export default Skills;
