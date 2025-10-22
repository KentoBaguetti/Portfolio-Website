import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col justify-center w-full overflow-x-hidden">
      {/* <div className="z-50 fixed">
        <Navbar />
      </div> */}
      <Navbar />
      <Hero />
      <Experience />
    </div>
  );
}

export default App;
