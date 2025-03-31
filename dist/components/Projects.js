"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_slick_1 = __importDefault(require("react-slick"));
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
const useWindowSize_1 = __importDefault(require("./useWindowSize")); // Assuming the hook is in the same directory
const portfolioWebsiteSS_png_1 = __importDefault(require("../assets/portfolioWebsiteSS.png"));
const netflixLogo_jpeg_1 = __importDefault(require("../assets/netflixLogo.jpeg"));
const foodpic_jpg_1 = __importDefault(require("../assets/foodpic.jpg"));
const FuturePark_png_1 = __importDefault(require("../assets/FuturePark.png"));
const mazeIMG_png_1 = __importDefault(require("../assets/mazeIMG.png"));
const animeLawyerMemeKing_webp_1 = __importDefault(require("../assets/animeLawyerMemeKing.webp"));
const projects = [
    {
        title: "Portfolio Website",
        description: "Portfolio website built with React that you are currently viewing!",
        image: portfolioWebsiteSS_png_1.default,
        link: "https://github.com/KentoBaguetti/Portfolio-Website",
    },
    {
        title: "Netflix Recommendation System",
        description: "Python movie recommendation project made with Pandas",
        image: netflixLogo_jpeg_1.default,
        link: "https://github.com/KentoBaguetti/Netflix-Recommendation-Algorithm",
    },
    {
        title: "Food Recipe Search App",
        description: "This web app uses the Spoonacular API to allow users to search for thousands of food recipes",
        image: foodpic_jpg_1.default,
        link: "https://github.com/KentoBaguetti/blogrecipeapp",
    },
    {
        title: "Parking Finder",
        description: "A collaborative hackathon project to help users find parking in Vancouver",
        image: FuturePark_png_1.default,
        link: "https://github.com/KentoBaguetti/V2-ParkingFinder",
    },
    {
        title: "Maze Navigation Visualizer",
        description: "Python maze search visualizer using the algorithms BFS, Backtracking and Dijkstras",
        image: mazeIMG_png_1.default,
        link: "https://github.com/KentoBaguetti/Maze-Solver",
    },
    {
        title: "Debate Bot",
        description: "Debate bot built with the OpenAi API whose sole purpose is to argue against you",
        image: animeLawyerMemeKing_webp_1.default,
        link: "https://github.com/KentoBaguetti/Debate-Bot",
    },
];
const Projects = () => {
    const { width } = (0, useWindowSize_1.default)();
    const isMobile = width <= 768;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 2 : 3, // Show 2 slides on mobile, 3 on larger screens
        slidesToScroll: isMobile ? 2 : 3, // Scroll 2 slides on mobile, 3 on larger screens
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    };
    return (react_1.default.createElement("div", { className: "container projects" },
        react_1.default.createElement("h1", { className: "project-headtitle" }, "Projects"),
        isMobile ? (react_1.default.createElement(react_slick_1.default, Object.assign({}, settings), projects.map((project, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        react_1.default.createElement("div", { key: index, className: "card-container" },
            react_1.default.createElement("a", { href: project.link, target: "_blank", rel: "noopener noreferrer", className: "card-link" },
                react_1.default.createElement("div", { className: "card" },
                    react_1.default.createElement("div", { className: "card-img-container" },
                        react_1.default.createElement("img", { src: project.image, className: "card-img-top", alt: project.title })),
                    react_1.default.createElement("div", { className: "card-body" },
                        react_1.default.createElement("h5", { className: "project-title" }, project.title),
                        react_1.default.createElement("p", { className: "project-body" }, project.description))))))))) : (react_1.default.createElement("div", { className: "row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" }, projects.map((project, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        react_1.default.createElement("div", { key: index, className: "col" },
            react_1.default.createElement("a", { href: project.link, target: "_blank", rel: "noopener noreferrer", className: "card-link" },
                react_1.default.createElement("div", { className: "card" },
                    react_1.default.createElement("div", { className: "card-img-container" },
                        react_1.default.createElement("img", { src: project.image, className: "card-img-top", alt: project.title })),
                    react_1.default.createElement("div", { className: "card-body" },
                        react_1.default.createElement("h5", { className: "project-title" }, project.title),
                        react_1.default.createElement("p", { className: "project-body" }, project.description)))))))))));
};
exports.default = Projects;
