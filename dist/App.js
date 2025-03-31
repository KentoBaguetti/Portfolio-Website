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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const MyNavbar = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("./components/MyNavbar"))));
const Home = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("./components/Home"))));
const FadeSection = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("./components/FadeSection"))));
const Projects = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("./components/Projects"))));
const Contact = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("./components/Contact"))));
const Footer = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("./components/Footer"))));
const PersonalInfo = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("./components/PersonalInfo"))));
function App() {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement("div", null, "Loading...") },
            react_1.default.createElement("div", { className: "App" },
                react_1.default.createElement(MyNavbar, null),
                react_1.default.createElement(Home, null),
                react_1.default.createElement(FadeSection, null,
                    react_1.default.createElement(PersonalInfo, null)),
                react_1.default.createElement(FadeSection, null,
                    react_1.default.createElement(Projects, null)),
                react_1.default.createElement(FadeSection, null,
                    react_1.default.createElement(Contact, null)),
                react_1.default.createElement(FadeSection, null,
                    react_1.default.createElement(Footer, null))))));
}
exports.default = App;
