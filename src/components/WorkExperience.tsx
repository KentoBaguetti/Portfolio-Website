import React from "react";

const WorkExperience = () => {
	return (
		<div className="workExperience container-fluid">
			<h1 className="pi-title">Work Experience</h1>
			<div className="workList">
				<h4 className="companyName">Consign AI 🇨🇦</h4>
				<p className="swe-role">Software Engineer | June 2024 - Current</p>
				<p className="swe-role">Automation</p>
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
					<li>
						Developed Python scripts to preprocess new customer information from
						Excel to csv files for the RPA scripts 🐍
					</li>
					<li>
						Developed and implemented parsing algorithms that seamlessly
						integrate with existing infrastructure to handle new client data 🎛️
					</li>
				</ul>
				<p className="swe-role">AI Translation</p>
				<ul className="job-desc">
					<li>
						Researched and implemented speech recognition models such as
						Whisperer, FasterWhisperer and Whisper.cpp 🗣️
					</li>
					<li>
						Implemented an AI Phone agent to parse customer calls and have their
						requests sent to Automation servers 🤖
					</li>
					<li>
						Implemented a Redis cache to decrease the number of required
						translations from APIs to reduce translation costs 🥡
					</li>
				</ul>
				<p className="swe-role">
					Software Engineering Intern | Feb 2024 - May 2024
				</p>
				<ul className="job-desc">
					<li>Debugged RPA scripts to improve efficiency and accuracy 🎯</li>
					<li>
						Researched viable database integrations for scalability and
						flexibility 📚
					</li>
				</ul>
			</div>
		</div>
	);
};

export default WorkExperience;
