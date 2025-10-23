import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col justify-center w-full overflow-x-hidden">
      <div className="z-50 fixed top-0 left-0 right-0 mt-10">
        <Navbar />
      </div>
      <Hero />
      <About />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
