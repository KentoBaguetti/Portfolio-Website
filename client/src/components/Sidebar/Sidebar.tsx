import React from "react";

const onHoverStyle: string = "text-indigo-500";

export default function Sidebar({
  activeComponent,
}: {
  activeComponent: string;
}) {
  return (
    <div className="text-2xl flex flex-col space-y-8 dark:text-gray-200 w-full items-center bg-transparent md:block hidden">
      <div className="xl:w-56 lg:w-48 md:w-40 text-left mx-auto">
        {activeComponent == "Home" ? "<Home />" : "Home"}
      </div>
      <div className="xl:w-56 lg:w-48 md:w-40 text-left mx-auto">
        {activeComponent == "About" ? "<About />" : "About"}
      </div>
      <div className="xl:w-56 lg:w-48 md:w-40 text-left mx-auto">
        {activeComponent == "Experience" ? "<Experience />" : "Experience"}
      </div>
      <div className="xl:w-56 lg:w-48 md:w-40 text-left mx-auto">
        {activeComponent == "Projects" ? "<Projects />" : "Projects"}
      </div>
    </div>
  );
}
