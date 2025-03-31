"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_scroll_1 = require("react-scroll");
const Footer = () => {
    return (react_1.default.createElement("div", { className: "footer mt-auto py-3" },
        react_1.default.createElement(react_scroll_1.Link, { to: "home-container", spy: true, smooth: true, offset: -70, duration: 0, className: "backToTop" }, "^----Back To Top----^"),
        react_1.default.createElement("div", { className: "container footer-container" },
            react_1.default.createElement("span", { className: "text-muted" }, "Developed by Kentaro Barnes"))));
};
exports.default = Footer;
