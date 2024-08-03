import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import FadeSection from "./components/FadeSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HighlightCursor from "./components/HighlightCursor";
import PersonalInfo from "./components/PersonalInfo";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <FadeSection>
          <Home />
        </FadeSection>
        <FadeSection>
          <PersonalInfo />
        </FadeSection>
        <FadeSection>
          <Projects />
        </FadeSection>
        <FadeSection>
          <Contact />
        </FadeSection>
        <FadeSection>
          <Footer />
        </FadeSection>
        <HighlightCursor />
      </div>
    </Router>
  );
}

export default App;
