"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typewriter_effect_1 = __importDefault(require("typewriter-effect"));
const Type = () => {
    return (React.createElement("div", { className: "typewriter" },
        React.createElement("div", { className: "typewriter-text" },
            React.createElement(typewriter_effect_1.default, { options: {
                    strings: [
                        "Software Engineer . . . ",
                        "Computer Science Student . . . ",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 20,
                } }))));
};
exports.default = Type;
