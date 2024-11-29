import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

const MyNavbar = lazy(() => import("./components/MyNavbar"));
const Home = lazy(() => import("./components/Home"));
const FadeSection = lazy(() => import("./components/FadeSection"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const HighlightCursor = lazy(() => import("./components/HighlightCursor"));
const PersonalInfo = lazy(() => import("./components/PersonalInfo"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <MyNavbar />
          <Home />
          <FadeSection>
            <PersonalInfo />
          </FadeSection>
          <FadeSection>
            <Projects />
          </FadeSection>
          <FadeSection>
            <Contact />
          </FadeSection>
          <Footer />
          <HighlightCursor />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
