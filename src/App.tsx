import Hero from "./components/Hero";
import CardSelector from "./components/CardSelector";

function App() {
  return (
    <div className="flex justify-center w-full overflow-x-hidden">
      <div className="w-full md:w-11/12 lg:w-3/4 mx-auto">
        <Hero />
        <CardSelector />
      </div>
    </div>
  );
}

export default App;
