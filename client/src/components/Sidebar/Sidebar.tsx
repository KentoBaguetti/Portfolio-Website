import React from "react";

const onHoverStyle: string = "text-indigo-500";

export default function Sidebar({
  activeComponent,
}: {
  activeComponent: string;
}) {
  return (
    <div className="text-2xl flex flex-col space-y-8 dark:text-gray-200 w-full items-center bg-transparent">
      <div className="w-56 text-left">
        {activeComponent == "Home" ? "<Home />" : "Home"}
      </div>
      <div className="w-56 text-left">
        {activeComponent == "About" ? "<About />" : "About"}
      </div>
      <div className="w-56 text-left">
        {activeComponent == "Experience" ? "<Experience />" : "Experience"}
      </div>
      <div className="w-56 text-left">
        {activeComponent == "Projects" ? "<Projects />" : "Projects"}
      </div>
    </div>
  );
}
