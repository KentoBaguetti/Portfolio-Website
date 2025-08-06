import { useState } from "react";

export default function Navbar({
  handleSelectedCardFromNavbar,
}: {
  handleSelectedCardFromNavbar: (card: string) => void;
}) {
  const [selectedCard, setSelectedCard] = useState<string>("About");
  const selectedLinkStyles =
    "text-lg sm:text-3xl md:text-2xl font-sans text-tron-yellow cursor-pointer font-bold hover:scale-110";
  const unselectedLinkStyles =
    "text-lg sm:text-3xl md:text-2xl font-sans text-tron-blue cursor-pointer hover:scale-110";

  return (
    <div className="w-full flex flex-row items-center gap-2 sm:gap-4 md:gap-8overflow-x-auto pb-2">
      <div>
        <h2
          className={
            selectedCard === "About" ? selectedLinkStyles : unselectedLinkStyles
          }
          onClick={() => {
            handleSelectedCardFromNavbar("About");
            setSelectedCard("About");
          }}
        >
          ~/About
        </h2>
      </div>
      <div>
        <h2
          className={
            selectedCard === "Experience"
              ? selectedLinkStyles
              : unselectedLinkStyles
          }
          onClick={() => {
            handleSelectedCardFromNavbar("Experience");
            setSelectedCard("Experience");
          }}
        >
          ~/Experience
        </h2>
      </div>
      <div>
        <h2
          className={
            selectedCard === "Projects"
              ? selectedLinkStyles
              : unselectedLinkStyles
          }
          onClick={() => {
            handleSelectedCardFromNavbar("Projects");
            setSelectedCard("Projects");
          }}
        >
          ~/Projects
        </h2>
      </div>
    </div>
  );
}
