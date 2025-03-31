"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const About = () => {
    return (react_1.default.createElement("div", { className: "about" },
        react_1.default.createElement("h1", { className: "about-title pi-title" }, "About Me"),
        react_1.default.createElement("p", { className: "about-body" }, "Hi! My name is Kentaro Barnes (\u30D0\u30FC\u30F3\u30BA\u5065\u592A\u90CE) and I enjoy building things as well as solving interesting problems"),
        react_1.default.createElement("p", { className: "about-body" }, "I am a Software Engineering Intern at ConsignAI developing backend solutions and a Computer Science Student at the University of British Columbia"),
        react_1.default.createElement("p", { className: "about-body" }, "I'm currently learning about how to build scalable and efficient backend software as well as learning about ML and AI"),
        react_1.default.createElement("p", null,
            "I am happy to learn and experience new things that interest me! Currently looking for ",
            react_1.default.createElement("span", { className: "bold-word" }, "2025"),
            " ",
            "opportunities!")));
};
exports.default = About;
