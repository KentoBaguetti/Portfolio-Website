import React, { lazy, Suspense } from "react";
import Type from "./Type";

const KenImg = lazy(() => import("../assets/IMG_5840.webp"));

const Home = () => {
  return (
    <div className="home-container container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6 mx-auto">
          <Suspense fallback={<div>Loading image...</div>}>
            <img src={KenImg} className="zoomable-image" alt="Boku da" />
          </Suspense>
        </div>
        <div className="col-lg-6 mx-auto">
          <h2 className="home-title-small display-4 lh-1 mb-3">Hello, I'm</h2>
          <h1 className="home-title display-2 lh-1 mb-3">
            <strong>Kentaro Barnes</strong>
          </h1>
          <Type />
        </div>
      </div>
    </div>
  );
};

export default Home;
