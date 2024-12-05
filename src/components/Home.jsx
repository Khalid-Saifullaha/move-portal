import React, { useState } from "react";
import Banner from "./Banner";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !isDarkMode); // Add/remove the `dark` class on the root element
  };

  return (
    <div
      className={
        isDarkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"
      }
    >
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome to Movie Portal</h1>
        <button
          onClick={handleThemeToggle}
          className="btn bg-gray-300 text-black hover:bg-gray-400 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600 px-4 py-2 rounded-md"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <Banner />
    </div>
  );
};

export default Home;
