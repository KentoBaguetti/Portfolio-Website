import React from "react";

export default function Sidebar({
  activeComponent,
}: {
  activeComponent: string;
}) {
  return (
    <div className="text-2xl flex flex-col space-y-8 dark:text-gray-200 w-full items-center bg-transparent md:block">
      <div className="xl:w-56 lg:w-48 md:w-40 text-left mx-auto">
        <a href="#Home">{activeComponent == "Home" ? "<Home />" : "Home"}</a>
      </div>
      <div className="xl:w-56 lg:w-48 md:w-40 text-left mx-auto">
        <a href="#About">
          {activeComponent == "About" ? "<About />" : "About"}
        </a>
      </div>
      <div className="xl:w-56 lg:w-48 md:w-40 text-left mx-auto">
        <a href="#Experience">
          {activeComponent == "Experience" ? "<Experience />" : "Experience"}
        </a>
      </div>
      <div className="xl:w-56 lg:w-48 md:w-40 text-left mx-auto">
        <a href="#Projects">
          {activeComponent == "Projects" ? "<Projects />" : "Projects"}
        </a>
      </div>
    </div>
  );
}
