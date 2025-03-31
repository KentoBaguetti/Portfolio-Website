"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const WorkExperience = () => {
    return (react_1.default.createElement("div", { className: "workExperience container-fluid" },
        react_1.default.createElement("h1", { className: "pi-title" }, "Work Experience"),
        react_1.default.createElement("div", { className: "workList" },
            react_1.default.createElement("h4", { className: "companyName" }, "Consign AI \uD83C\uDDE8\uD83C\uDDE6"),
            react_1.default.createElement("p", { className: "swe-role" }, "Software Engineer | June 2024 - Current"),
            react_1.default.createElement("p", { className: "swe-role" }, "Automation"),
            react_1.default.createElement("ul", { className: "job-desc" },
                react_1.default.createElement("li", null, "Designed and implemented a MongoDB database to manage data processed by RPA scripts \uD83D\uDEE0\uFE0F"),
                react_1.default.createElement("li", null, "Developed a frontend dashboard for company clients to visualize and manage data from the database \uD83D\uDCBB"),
                react_1.default.createElement("li", null, "Implemented user authentication within the dashboard and database \uD83D\uDD12"),
                react_1.default.createElement("li", null, "Developed Python scripts to preprocess new customer information from Excel to csv files for the RPA scripts \uD83D\uDC0D"),
                react_1.default.createElement("li", null, "Developed and implemented parsing algorithms that seamlessly integrate with existing infrastructure to handle new client data \uD83C\uDF9B\uFE0F")),
            react_1.default.createElement("p", { className: "swe-role" }, "AI Translation"),
            react_1.default.createElement("ul", { className: "job-desc" },
                react_1.default.createElement("li", null, "Researched and implemented speech recognition models such as Whisperer, FasterWhisperer and Whisper.cpp \uD83D\uDDE3\uFE0F"),
                react_1.default.createElement("li", null, "Implemented an AI Phone agent to parse customer calls and have their requests sent to Automation servers \uD83E\uDD16"),
                react_1.default.createElement("li", null, "Implemented a Redis cache to decrease the number of required translations from APIs to reduce translation costs \uD83E\uDD61")),
            react_1.default.createElement("p", { className: "swe-role" }, "Software Engineering Intern | Feb 2024 - May 2024"),
            react_1.default.createElement("ul", { className: "job-desc" },
                react_1.default.createElement("li", null, "Debugged RPA scripts to improve efficiency and accuracy \uD83C\uDFAF"),
                react_1.default.createElement("li", null, "Researched viable database integrations for scalability and flexibility \uD83D\uDCDA")))));
};
exports.default = WorkExperience;
