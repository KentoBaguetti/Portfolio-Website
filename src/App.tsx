import Hero from "./components/Hero";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="flex flex-col justify-center w-full overflow-x-hidden">
      <Hero />
      <Experience />
    </div>
  );
}

export default App;
