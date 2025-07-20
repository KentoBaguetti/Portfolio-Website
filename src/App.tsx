import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex justify-center w-full">
      <div className="w-1/2 mx-auto">
        <Hero />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
