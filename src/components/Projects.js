import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowSize from "./useWindowSize"; // Assuming the hook is in the same directory
import portfolioWebsiteSS from "../assets/portfolioWebsiteSS.png";
import netflixLogo from "../assets/netflixLogo.jpeg";
import foodpic from "../assets/foodpic.jpg";
import blogpic from "../assets/blogapp.png";
import mazepic from "../assets/mazeIMG.png";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Portfolio website built with React that you are currently viewing!",
    image: portfolioWebsiteSS,
    link: "https://github.com/KentoBaguetti/Portfolio-Website",
  },
  {
    title: "Netflix Recommendation System",
    description: "Python movie recommendation project made with Pandas",
    image: netflixLogo,
    link: "https://github.com/KentoBaguetti/Netflix-Recommendation-Algorithm",
  },
  {
    title: "Food Recipe Search App",
    description:
      "This web app uses the Spoonacular API to allow users to search for thousands of food recipes",
    image: foodpic,
    link: "https://github.com/KentoBaguetti/blogrecipeapp",
  },
  {
    title: "Blog App",
    description:
      "A CRUD blog web app built using React for the frontend and node + express + axios for the backend.",
    image: blogpic,
    link: "https://github.com/KentoBaguetti/React-Blog-App",
  },
  {
    title: "Maze Navigation Visualizer",
    description:
      "Python maze search visualizer using the algorithms BFS, Backtracking and Dijkstras",
    image: mazepic,
    link: "https://github.com/KentoBaguetti/Maze-Solver",
  },
];

const Projects = () => {
  const { width } = useWindowSize();

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

  return (
    <div className="container projects">
      <h1 className="project-headtitle">Projects</h1>
      {isMobile ? (
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="card-container">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                <div className="card">
                  <div className="card-img-container">
                    <img
                      src={project.image}
                      className="card-img-top"
                      alt={project.title}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="project-title">{project.title}</h5>
                    <p className="project-body">{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map((project, index) => (
            <div key={index} className="col">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                <div className="card">
                  <div className="card-img-container">
                    <img
                      src={project.image}
                      className="card-img-top"
                      alt={project.title}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="project-title">{project.title}</h5>
                    <p className="project-body">{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
