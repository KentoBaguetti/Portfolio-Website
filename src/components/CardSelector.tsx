import { useState } from "react";
import Experience from "./Experience";
import Projects from "./Projects";
import Navbar from "./Navbar";
import About from "./About";

export default function CardSelector() {
  const [selectedCard, setSelectedCard] = useState<string>("About");

  const handleSelectedCardFromNavbar = (card: string) => {
    setSelectedCard(card);
  };

  return (
    <div className="px-4 md:px-6 w-full overflow-x-hidden mt-0">
      <Navbar handleSelectedCardFromNavbar={handleSelectedCardFromNavbar} />
      <div className="w-full overflow-x-hidden mt-2">
        {selectedCard === "Experience" && <Experience />}
        {selectedCard === "About" && <About />}
        {(selectedCard === "Projects" || selectedCard === "Home") && (
          <Projects />
        )}
      </div>
    </div>
  );
}
