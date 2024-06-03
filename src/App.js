import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HighlightCursor from "./components/HighlightCursor";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <HighlightCursor />
      </div>
    </Router>
  );
}

export default App;
