import React, { useState } from "react";
import Banner from "./Banner";
import MoveCard from "./MoveCard";
import { useLoaderData, NavLink } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();

  // First 6 movies for the home page
  const [moveData] = useState(data.slice(0, 6));

  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      {/* Banner Section */}
      <div>
        <Banner />
      </div>

      {/* Header Section */}
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white">
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Featured Movies</h1>
          <button
            onClick={handleThemeToggle}
            className="btn bg-gray-300 text-black hover:bg-gray-400 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600 px-4 py-2 rounded-md"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>
      </div>

      {/* Movie Cards Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {moveData.map((move) => (
          <MoveCard key={move._id} move={move}></MoveCard>
        ))}
      </div>

      {/* See All Button */}
      <div className="text-center my-6">
        <NavLink to={`/allMovies`}>
          <button className="btn bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
            See All Movies
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
