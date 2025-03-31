"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Skills = () => {
    return (react_1.default.createElement("div", { className: "skills" },
        react_1.default.createElement("h1", { className: "skills-title pi-title" }, "Skills && Technologies"),
        react_1.default.createElement("ul", { className: "skill-list" },
            react_1.default.createElement("li", null,
                react_1.default.createElement("strong", { className: "skill-header" }, "Programming Languages: "),
                "Python, Typescript, C++, Java, Javascript, GO, SQL"),
            react_1.default.createElement("li", null,
                react_1.default.createElement("strong", { className: "skill-header" }, "Backend Technologies: "),
                "Node, Express, Axios, Restful APIs, Docker"),
            react_1.default.createElement("li", null,
                react_1.default.createElement("strong", { className: "skill-header" }, "UI Technologies: "),
                "React, HTML, CSS, Bootstrap"),
            react_1.default.createElement("li", null,
                react_1.default.createElement("strong", { className: "skill-header" }, "Database: "),
                "MongoDB, Mongoose, PostgreSQL, Redis"),
            react_1.default.createElement("li", null,
                react_1.default.createElement("strong", { className: "skill-header" }, "Version Control: "),
                "Git, Github"),
            react_1.default.createElement("li", null,
                react_1.default.createElement("strong", { className: "skill-header" }, "Testing: "),
                "Mocha"))));
};
exports.default = Skills;
