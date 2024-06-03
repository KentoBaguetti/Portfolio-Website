import portfolioWebsiteSS from "../assets/portfolioWebsiteSS.png";
import netflixLogo from "../assets/netflixLogo.jpeg";
import foodpic from "../assets/foodpic.jpg";
import blogpic from "../assets/blogapp.png";

const projects = [
  {
    title: "Portfolio Website",
    description: "Portfolio website built with React.",
    image: portfolioWebsiteSS,
    link: "https://github.com/KentoBaguetti/Portfolio-Website",
  },
  {
    title: "Netflix Recommendation System",
    description:
      "built with Python and Pandas, it takes movies that the user has watched and returns five recommended movies.",
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
      "Blog web app built using React for the frontend and node + express + axios for the backend.",
    image: blogpic,
    link: "https://github.com/KentoBaguetti/React-Blog-App",
  },
];

const Projects = () => {
  return (
    <div className="container projects">
      <h1 className="project-headtitle">Projects</h1>
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
    </div>
  );
};

export default Projects;
