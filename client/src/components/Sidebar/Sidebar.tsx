import React from "react";

const activeComponentStyle: string = "text-gray-200";
const onHoverStyle: string = "text-indigo-500";

export default function Sidebar({
  activeComponent,
}: {
  activeComponent: string;
}) {
  return (
    <div className="text-2xl flex flex-col space-y-8 dark:text-gray-200">
      <div>{activeComponent == "Home" ? "<Home />" : "Home"}</div>
      <div>{activeComponent == "About" ? "<About />" : "About"}</div>
      <div>
        {activeComponent == "Experience" ? "<Experience />" : "Experience"}
      </div>
      <div>{activeComponent == "Projects" ? "<Projects />" : "Projects"}</div>
    </div>
  );
}
