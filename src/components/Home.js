import logo from "../assets/kenvlogo2.png";
import Type from "./Type";

const Home = () => {
  return (
    <div className="home-container container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6 mx-auto">
          <img src={logo} className="zoomable-image" alt="Logo" />
        </div>
        <div className="col-lg-6 mx-auto">
          <h1 className="home-title display-2 lh-1 mb-3">Kentaro Barnes</h1>
          <Type />
          {/* <p className="home-body lead">
            Software Engineer & Computer Science Student
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
