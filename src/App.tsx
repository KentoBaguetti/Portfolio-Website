import Hero from "./components/Hero";
import Interests from "./components/Interests";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Interests />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
