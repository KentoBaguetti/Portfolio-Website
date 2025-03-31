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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_scroll_1 = require("react-scroll");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const MyNavbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = (0, react_1.useState)(false);
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(true);
    const handleDropdownItemClick = () => {
        setIsDropdownOpen(false);
    };
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };
    const darkModeIcon = (react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faMoon, className: "navbar-icon" }));
    const lightModeIcon = (react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faSun, className: "navbar-icon" }));
    (0, react_1.useEffect)(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark-mode");
        }
        else {
            document.documentElement.classList.remove("dark-mode");
        }
    }, [isDarkMode]);
    return (react_1.default.createElement("nav", { className: "navbar navbar-transparent fixed-top" },
        react_1.default.createElement("div", { className: "container-fluid" },
            react_1.default.createElement("div", { className: "bubble-container", onClick: () => setIsDropdownOpen(!isDropdownOpen) },
                react_1.default.createElement("div", { className: "bubble-item", onClick: handleDropdownItemClick },
                    react_1.default.createElement(react_scroll_1.Link, { to: "personalInfo", spy: true, smooth: true, offset: -300, duration: 0, className: "nav-link" }, "About")),
                react_1.default.createElement("div", { className: "bubble-item", onClick: handleDropdownItemClick },
                    react_1.default.createElement(react_scroll_1.Link, { to: "projects", spy: true, smooth: true, offset: -170, duration: 0, className: "nav-link" }, "Projects")),
                react_1.default.createElement("div", { className: "bubble-item", onClick: handleDropdownItemClick },
                    react_1.default.createElement(react_scroll_1.Link, { to: "contact", spy: true, smooth: true, offset: -70, duration: 0, className: "nav-link" }, "Contact")),
                react_1.default.createElement("div", { className: "bubble-item icon-bubble", onClick: (e) => {
                        e.stopPropagation();
                        toggleTheme();
                    } }, isDarkMode ? lightModeIcon : darkModeIcon)))));
};
exports.default = MyNavbar;
