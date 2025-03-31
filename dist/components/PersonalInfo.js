"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const About_1 = __importDefault(require("./About"));
const WorkExperience_1 = __importDefault(require("./WorkExperience"));
const Education_1 = __importDefault(require("./Education"));
const Skills_1 = __importDefault(require("./Skills"));
const react_1 = __importStar(require("react"));
const PersonalInfo = (0, react_1.memo)(() => {
    const [activeComponent, setActiveComponent] = (0, react_1.useState)("about");
    const renderComponent = () => {
        switch (activeComponent) {
            case "about":
                return react_1.default.createElement(About_1.default, null);
            case "work":
                return react_1.default.createElement(WorkExperience_1.default, null);
            case "education":
                return react_1.default.createElement(Education_1.default, null);
            case "skills":
                return react_1.default.createElement(Skills_1.default, null);
            default:
                return null;
        }
    };
    return (react_1.default.createElement("div", { className: "personalInfo" },
        react_1.default.createElement("div", { className: "btns-pInfo btn-container" },
            react_1.default.createElement("button", { onClick: () => setActiveComponent("about"), className: `pi-btn ${activeComponent === "about" ? "active" : ""}`, value: "about" }, "About"),
            react_1.default.createElement("button", { onClick: () => setActiveComponent("work"), className: `pi-btn ${activeComponent === "work" ? "active" : ""}`, value: "work" }, "Work Experience"),
            react_1.default.createElement("button", { onClick: () => setActiveComponent("education"), className: `pi-btn ${activeComponent === "education" ? "active" : ""}`, value: "education" }, "Education"),
            react_1.default.createElement("button", { onClick: () => setActiveComponent("skills"), className: `pi-btn ${activeComponent === "skills" ? "active" : ""}`, value: "skill" }, "Skills")),
        renderComponent()));
});
exports.default = PersonalInfo;
