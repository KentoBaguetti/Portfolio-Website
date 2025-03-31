"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Education = () => {
    return (react_1.default.createElement("div", { className: "education container-fluid" },
        react_1.default.createElement("h1", { className: "pi-title" }, "Education"),
        react_1.default.createElement("div", { className: "educationList" },
            react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null,
                    react_1.default.createElement("h4", { className: "schoolname" }, "University of British Columbia \uD83C\uDDE8\uD83C\uDDE6"),
                    react_1.default.createElement("p", { className: "degree" }, "Bachelor of Science in Computer Science | Sep 2024 - Current")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("h4", { className: "schoolname" }, "University of Western Ontario \uD83C\uDDE8\uD83C\uDDE6"),
                    react_1.default.createElement("p", { className: "degree" }, "Bachelor of Science in Computer Science | Sep 2023 - May 2024")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("h4", { className: "schoolname" }, "The American School in Switzerland \uD83C\uDDE8\uD83C\uDDED"),
                    react_1.default.createElement("p", { className: "degree" }, "High School Diploma | Sep 2020 - May 2023"))))));
};
exports.default = Education;
