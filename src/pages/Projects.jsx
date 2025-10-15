import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-neutral-900 text-white overflow-hidden select-none">
      <h1 className="text-[10vw] uppercase tracking-tight text-center leading-none text-gray-100">
        Nos <span className="text-gray-400">projets</span>
      </h1>

      <p className="mt-6 text-2xl text-gray-400">
        Cette page sera prête très bientôt.
      </p>

      <Link
        to="/"
        className="mt-10 text-2xl border-2 border-white px-10 py-4 rounded-full transition-all duration-300 hover:bg-lime-300 hover:text-black hover:border-lime-300"
      >
        Home
      </Link>
    </div>
  );
};

export default Projects;
