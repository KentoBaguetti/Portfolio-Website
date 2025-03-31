"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Skills = () => {
    return (React.createElement("div", { className: "skills" },
        React.createElement("h1", { className: "skills-title pi-title" }, "Skills && Technologies"),
        React.createElement("ul", { className: "skill-list" },
            React.createElement("li", null,
                React.createElement("strong", { className: "skill-header" }, "Programming Languages: "),
                "Python, Typescript, C++, Java, Javascript, GO, SQL"),
            React.createElement("li", null,
                React.createElement("strong", { className: "skill-header" }, "Backend Technologies: "),
                "Node, Express, Axios, Restful APIs, Docker"),
            React.createElement("li", null,
                React.createElement("strong", { className: "skill-header" }, "UI Technologies: "),
                "React, HTML, CSS, Bootstrap"),
            React.createElement("li", null,
                React.createElement("strong", { className: "skill-header" }, "Database: "),
                "MongoDB, Mongoose, PostgreSQL, Redis"),
            React.createElement("li", null,
                React.createElement("strong", { className: "skill-header" }, "Version Control: "),
                "Git, Github"),
            React.createElement("li", null,
                React.createElement("strong", { className: "skill-header" }, "Testing: "),
                "Mocha"))));
};
exports.default = Skills;
