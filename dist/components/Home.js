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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const IMG_0501_Large_webp_1 = __importDefault(require("../assets/IMG_0501 Large.webp"));
const Type_1 = __importDefault(require("./Type"));
const Home = () => {
    const [isHovered, setIsHovered] = (0, react_1.useState)(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    return (react_1.default.createElement("div", { className: "home-container" },
        react_1.default.createElement("div", { className: "hero-section" },
            react_1.default.createElement("div", { className: "text-container" },
                react_1.default.createElement("h2", { className: "intro-text" }, "Hi, I\u2019m"),
                react_1.default.createElement("h1", { className: "name-title" }, "Kentaro Barnes"),
                react_1.default.createElement(Type_1.default, null)),
            react_1.default.createElement("div", { className: "image-container" },
                react_1.default.createElement("img", { src: IMG_0501_Large_webp_1.default, loading: "lazy", className: `profile-image ${isHovered ? "hovered" : ""}`, alt: "Kentaro Barnes", onMouseEnter: handleMouseEnter })))));
};
exports.default = Home;
