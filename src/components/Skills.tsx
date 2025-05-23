import React from "react";

const Skills = () => {
	return (
		<div className="skills">
			<h1 className="skills-title pi-title">Skills && Technologies</h1>
			<ul className="skill-list">
				<li>
					<strong className="skill-header">Programming Languages: </strong>
					Python, Typescript, C++, Java, Javascript, GO, SQL
				</li>
				<li>
					<strong className="skill-header">Backend Technologies: </strong>Node,
					Express, Axios, Restful APIs, Docker
				</li>
				<li>
					<strong className="skill-header">UI Technologies: </strong>React,
					HTML, CSS, Bootstrap
				</li>
				<li>
					<strong className="skill-header">Database: </strong>MongoDB, Mongoose,
					PostgreSQL, Redis
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
